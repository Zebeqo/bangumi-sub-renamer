import {Subtitle, Video} from './parser'
import * as path from 'node:path'
interface Result {
  id: number;
  before: string;
  after: string;
}

export function getResult(subtitles: Subtitle[], videos: Video[]): Result[] {
  const result: Result[] = []
  for (const {id: subId, subtitle} of subtitles) {
    const matchVid = videos.find(({id: vidId}) => {
      return subId === vidId
    })
    matchVid &&
      result.push({
        id: subId,
        before: subtitle,
        after: path.parse(matchVid.video).name + path.extname(path.parse(subtitle).name) + path.extname(subtitle),
      })
  }

  return result
}
