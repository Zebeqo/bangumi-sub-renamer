export interface Subtitle {
  id: number,
  subtitle: string,
}

export interface Video {
  id: number,
  video: string,
}

type TypeName = 'subtitle' | 'video'

type DataType<T> =
  T extends 'subtitle' ? Subtitle:
  T extends 'video' ? Video:
  never;

export function parseFilenames<T extends TypeName>(filenames: string[], type: T) : DataType<T>[] {
  const prefixLength = findLongestCommonPrefix(filenames).length
  const data: DataType<T>[] = []
  for (const name of filenames) {
    const index = name.slice(Math.max(0, prefixLength))
    .match(/\d+/)
    ?.toString()

    if (index) {
      const indexNum = Number.parseInt(index, 10)

      data.push({
        id: indexNum,
        [type]: name,
      } as unknown  as DataType<T>)
    }
  }

  return data
}

// https://stackoverflow.com/a/68703218
function findLongestCommonPrefix(words: string[]):string {
  // check border cases size 1 array and empty first word)
  if (!words[0] || words.length === 1) return words[0] || ''
  let i = 0
  // while all words have the same character at position i, increment i
  while (words[0][i] && words.every(w => w[i] === words[0][i])) i++

  // prefix is the substring from the beginning to the last successfully checked i
  return words[0].slice(0, Math.max(0, i))
}
