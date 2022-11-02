import {getSubFilesName, getVidFilesName} from '../../src/utils/filename'
import * as path from 'node:path'
import {expect} from 'chai'

describe('Get files names under directory', () => {
  describe('example/[Moozzi2] Aoi Hana BD-BOX - TV + SP', () => {
    const exampleSubRelaPath =
      'example/[Moozzi2] Aoi Hana BD-BOX - TV + SP/sub'
    const exampleVidRelaPath = 'example/[Moozzi2] Aoi Hana BD-BOX - TV + SP'

    it('should get an array of filenames of subtitle files', async () => {
      const names = await getSubFilesName(path.resolve(exampleSubRelaPath))

      expect(names).to.eql([
        '(BD) 青い花 第01話 「花物語」 (1920x1080 x26410bpp-flac chap).ass',
        '(BD) 青い花 第01話 「花物語」 (1920x1080 x26410bpp-flac chap).jap.ass',
        '(BD) 青い花 第02話 「春の嵐」 (1920x1080 x26410bpp-flac chap).ass',
        '(BD) 青い花 第02話 「春の嵐」 (1920x1080 x26410bpp-flac chap).jap.ass',
        '(BD) 青い花 第03話 「朝目覚めては」 (1920x1080 x26410bpp-flac chap).ass',
        '(BD) 青い花 第03話 「朝目覚めては」 (1920x1080 x26410bpp-flac chap).jap.ass',
        '(BD) 青い花 第04話 「青春は美わし」 (1920x1080 x26410bpp-flac chap).ass',
        '(BD) 青い花 第04話 「青春は美わし」 (1920x1080 x26410bpp-flac chap).jap.ass',
        '(BD) 青い花 第05話 「嵐が丘 前編」 (1920x1080 x26410bpp-flac chap).ass',
        '(BD) 青い花 第05話 「嵐が丘 前編」 (1920x1080 x26410bpp-flac chap).jap.ass',
        '(BD) 青い花 第06話 「嵐が丘 後編」 (1920x1080 x26410bpp-flac chap).ass',
        '(BD) 青い花 第06話 「嵐が丘 後編」 (1920x1080 x26410bpp-flac chap).jap.ass',
        '(BD) 青い花 第07話 「若葉のころ」 (1920x1080 x26410bpp-flac chap).ass',
        '(BD) 青い花 第07話 「若葉のころ」 (1920x1080 x26410bpp-flac chap).jap.ass',
        '(BD) 青い花 第08話 「恋は盲目」 (1920x1080 x26410bpp-flac chap).ass',
        '(BD) 青い花 第08話 「恋は盲目」 (1920x1080 x26410bpp-flac chap).jap.ass',
        '(BD) 青い花 第09話 「夏の夜の夢」 (1920x1080 x26410bpp-flac chap).ass',
        '(BD) 青い花 第09話 「夏の夜の夢」 (1920x1080 x26410bpp-flac chap).jap.ass',
        '(BD) 青い花 第10話 「幸福の王子」 (1920x1080 x26410bpp-flac chap).ass',
        '(BD) 青い花 第10話 「幸福の王子」 (1920x1080 x26410bpp-flac chap).jap.ass',
        '(BD) 青い花 第11話 「冬の花火」 (1920x1080 x26410bpp-flac chap).ass',
        '(BD) 青い花 第11話 「冬の花火」 (1920x1080 x26410bpp-flac chap).jap.ass',
      ])
    })

    it('should get an array of filenames of video files', async () => {
      const names = await getVidFilesName(path.resolve(exampleVidRelaPath))

      expect(names).to.eql([
        '[Moozzi2] Aoi Hana - 01 (BD 1920x1080 x.264 Flac).mkv',
        '[Moozzi2] Aoi Hana - 02 (BD 1920x1080 x.264 Flac).mkv',
        '[Moozzi2] Aoi Hana - 03 (BD 1920x1080 x.264 Flac).mkv',
        '[Moozzi2] Aoi Hana - 04 (BD 1920x1080 x.264 Flac).mkv',
        '[Moozzi2] Aoi Hana - 05 (BD 1920x1080 x.264 Flac).mkv',
        '[Moozzi2] Aoi Hana - 06 (BD 1920x1080 x.264 Flac).mkv',
        '[Moozzi2] Aoi Hana - 07 (BD 1920x1080 x.264 Flac).mkv',
        '[Moozzi2] Aoi Hana - 08 (BD 1920x1080 x.264 Flac).mkv',
        '[Moozzi2] Aoi Hana - 09 (BD 1920x1080 x.264 Flac).mkv',
        '[Moozzi2] Aoi Hana - 10 (BD 1920x1080 x.264 Flac).mkv',
        '[Moozzi2] Aoi Hana - 11 END (BD 1920x1080 x.264 Flac).mkv',
      ])
    })
  })
})
