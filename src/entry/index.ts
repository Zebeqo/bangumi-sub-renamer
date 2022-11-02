import {CliUx, Command, Flags} from '@oclif/core'
import {getSubFilesName, getVidFilesName} from '../utils/filename'
import {parseFilenames} from '../utils/parser'
import {cp} from 'node:fs/promises'
import * as path from 'node:path'
import * as inquirer from 'inquirer'
import {getResult} from '../utils/method'
import {rename} from 'node:fs/promises'

export default class Main extends Command {
  static description = 'A cli tool for renaming subtitles to matching episodes.'

  static examples = [
    '<%= config.bin %>',
    '<%= config.bin %> . ./sub/ -m cp',
    '<%= config.bin %> . ./sub -o ./sub ',
  ]

  static flags = {
    out: Flags.string({
      char: 'o',
      description: 'path(should exist) to output file',
      default: 'VIDEO_PATH',
    }),
    mode: Flags.string({
      char: 'm',
      description: 'choose mode between copy and move',
      options: ['cp', 'mv'],
      default: 'mv',
    }),
  }

  static args = [
    {
      name: 'video_path',
      required: true,
      description: 'The path where the video files are stored',
      default: '.',
    },
    {
      name: 'subtitle_path',
      required: true,
      description: 'The path where the subtitle files are stored',
      default: '.',
    },
  ]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Main)
    const vidFilesName = await getVidFilesName(args.video_path)
    const subFilesName = await getSubFilesName(args.subtitle_path)
    const subtitles = parseFilenames(
      subFilesName,
      'subtitle',
    )
    const videos = parseFilenames(
      vidFilesName,
      'video',
    )

    const result = getResult(subtitles, videos)
    if (result.length === 0) {
      this.warn('filename not available, use "bnm --help" to check detail.')
      return
    }

    const resultTable = result as unknown as Record<string, unknown>[]
    CliUx.ux.table(resultTable, {
      before: {
        // eslint-disable-next-line unicorn/no-array-reduce
        minWidth: subFilesName.reduce((previousValue, currentValue) => {
          return currentValue.length > previousValue.length ? currentValue : previousValue
        }, '').length + 20,
      },
      after: {},
      id: {
        header: 'Episode',
        extended: true,
      },
    }, {
      printLine: this.log.bind(this),
      ...flags, // parsed flags
    })

    this.log('')
    const responses: any = await inquirer.prompt([{
      name: 'approve',
      message: 'Do you want to continue?',
      type: 'list',
      choices: [{name: 'yes'}, {name: 'no'}],
    }])
    if (responses.approve === 'no') return

    for (const {before, after} of result) {
      if (flags.mode === 'cp') {
        CliUx.ux.action.start('copying...')
        // eslint-disable-next-line no-await-in-loop
        await cp(
          path.resolve(args.subtitle_path, before),
          path.resolve(flags.out === 'VIDEO_PATH' ? args.video_path : flags.out, after),
          {recursive: true},
        )
      } else {
        CliUx.ux.action.start('moving...')
        // eslint-disable-next-line no-await-in-loop
        await rename(
          path.resolve(args.subtitle_path, before),
          path.resolve(flags.out === 'VIDEO_PATH' ? args.video_path : flags.out, after),
        )
      }
    }

    CliUx.ux.action.stop()
  }
}
