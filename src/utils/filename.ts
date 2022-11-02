import {readdir} from 'node:fs/promises'

export async function getSubFilesName(dir: string): Promise<string[]> {
  const files = await readdir(dir)
  return files.filter(file => /\.(srt|ass)$/.test(file))
}

export async function getVidFilesName(dir: string): Promise<string[]> {
  const files = await readdir(dir)
  return files.filter(file => /\.(mp4|mkv)$/.test(file))
}
