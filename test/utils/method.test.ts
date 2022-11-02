import {expect} from 'chai'
import {getResult} from '../../src/utils/method'

describe('Method for program', () => {
  describe('example/[Moozzi2] Aoi Hana BD-BOX - TV + SP', () => {
    const subtitles = [
      {
        id: 1,
        subtitle: '(BD) 青い花 第01話 「花物語」 (1920x1080 x26410bpp-flac chap).ass',
      },
      {
        id: 1,
        subtitle: '(BD) 青い花 第01話 「花物語」 (1920x1080 x26410bpp-flac chap).jap.ass',
      },
      {
        id: 2,
        subtitle: '(BD) 青い花 第02話 「春の嵐」 (1920x1080 x26410bpp-flac chap).ass',
      },
      {
        id: 2,
        subtitle: '(BD) 青い花 第02話 「春の嵐」 (1920x1080 x26410bpp-flac chap).jap.ass',
      },
      {
        id: 3,
        subtitle: '(BD) 青い花 第03話 「朝目覚めては」 (1920x1080 x26410bpp-flac chap).ass',
      },
      {
        id: 3,
        subtitle: '(BD) 青い花 第03話 「朝目覚めては」 (1920x1080 x26410bpp-flac chap).jap.ass',
      },
      {
        id: 4,
        subtitle: '(BD) 青い花 第04話 「青春は美わし」 (1920x1080 x26410bpp-flac chap).ass',
      },
      {
        id: 4,
        subtitle: '(BD) 青い花 第04話 「青春は美わし」 (1920x1080 x26410bpp-flac chap).jap.ass',
      },
      {
        id: 5,
        subtitle: '(BD) 青い花 第05話 「嵐が丘 前編」 (1920x1080 x26410bpp-flac chap).ass',
      },
      {
        id: 5,
        subtitle: '(BD) 青い花 第05話 「嵐が丘 前編」 (1920x1080 x26410bpp-flac chap).jap.ass',
      },
      {
        id: 6,
        subtitle: '(BD) 青い花 第06話 「嵐が丘 後編」 (1920x1080 x26410bpp-flac chap).ass',
      },
      {
        id: 6,
        subtitle: '(BD) 青い花 第06話 「嵐が丘 後編」 (1920x1080 x26410bpp-flac chap).jap.ass',
      },
      {
        id: 7,
        subtitle: '(BD) 青い花 第07話 「若葉のころ」 (1920x1080 x26410bpp-flac chap).ass',
      },
      {
        id: 7,
        subtitle: '(BD) 青い花 第07話 「若葉のころ」 (1920x1080 x26410bpp-flac chap).jap.ass',
      },
      {
        id: 8,
        subtitle: '(BD) 青い花 第08話 「恋は盲目」 (1920x1080 x26410bpp-flac chap).ass',
      },
      {
        id: 8,
        subtitle: '(BD) 青い花 第08話 「恋は盲目」 (1920x1080 x26410bpp-flac chap).jap.ass',
      },
      {
        id: 9,
        subtitle: '(BD) 青い花 第09話 「夏の夜の夢」 (1920x1080 x26410bpp-flac chap).ass',
      },
      {
        id: 9,
        subtitle: '(BD) 青い花 第09話 「夏の夜の夢」 (1920x1080 x26410bpp-flac chap).jap.ass',
      },
      {
        id: 10,
        subtitle: '(BD) 青い花 第10話 「幸福の王子」 (1920x1080 x26410bpp-flac chap).ass',
      },
      {
        id: 10,
        subtitle: '(BD) 青い花 第10話 「幸福の王子」 (1920x1080 x26410bpp-flac chap).jap.ass',
      },
      {
        id: 11,
        subtitle: '(BD) 青い花 第11話 「冬の花火」 (1920x1080 x26410bpp-flac chap).ass',
      },
      {
        id: 11,
        subtitle: '(BD) 青い花 第11話 「冬の花火」 (1920x1080 x26410bpp-flac chap).jap.ass',
      },
    ]
    const videos = [
      {
        id: 1,
        video: '[Moozzi2] Aoi Hana - 01 (BD 1920x1080 x.264 Flac).mkv',
      },
      {
        id: 2,
        video: '[Moozzi2] Aoi Hana - 02 (BD 1920x1080 x.264 Flac).mkv',
      },
      {
        id: 3,
        video: '[Moozzi2] Aoi Hana - 03 (BD 1920x1080 x.264 Flac).mkv',
      },
      {
        id: 4,
        video: '[Moozzi2] Aoi Hana - 04 (BD 1920x1080 x.264 Flac).mkv',
      },
      {
        id: 5,
        video: '[Moozzi2] Aoi Hana - 05 (BD 1920x1080 x.264 Flac).mkv',
      },
      {
        id: 6,
        video: '[Moozzi2] Aoi Hana - 06 (BD 1920x1080 x.264 Flac).mkv',
      },
      {
        id: 7,
        video: '[Moozzi2] Aoi Hana - 07 (BD 1920x1080 x.264 Flac).mkv',
      },
      {
        id: 8,
        video: '[Moozzi2] Aoi Hana - 08 (BD 1920x1080 x.264 Flac).mkv',
      },
      {
        id: 9,
        video: '[Moozzi2] Aoi Hana - 09 (BD 1920x1080 x.264 Flac).mkv',
      },
      {
        id: 10,
        video: '[Moozzi2] Aoi Hana - 10 (BD 1920x1080 x.264 Flac).mkv',
      },
      {
        id: 11,
        video: '[Moozzi2] Aoi Hana - 11 END (BD 1920x1080 x.264 Flac).mkv',
      },
    ]
    it('should get the result data for rename', () => {
      expect(getResult(subtitles, videos)).to.eql([
        {
          after: '[Moozzi2] Aoi Hana - 01 (BD 1920x1080 x.264 Flac).ass',
          before: '(BD) 青い花 第01話 「花物語」 (1920x1080 x26410bpp-flac chap).ass',
          id: 1,
        },
        {
          after: '[Moozzi2] Aoi Hana - 01 (BD 1920x1080 x.264 Flac).jap.ass',
          before: '(BD) 青い花 第01話 「花物語」 (1920x1080 x26410bpp-flac chap).jap.ass',
          id: 1,
        },
        {
          after: '[Moozzi2] Aoi Hana - 02 (BD 1920x1080 x.264 Flac).ass',
          before: '(BD) 青い花 第02話 「春の嵐」 (1920x1080 x26410bpp-flac chap).ass',
          id: 2,
        },
        {
          after: '[Moozzi2] Aoi Hana - 02 (BD 1920x1080 x.264 Flac).jap.ass',
          before: '(BD) 青い花 第02話 「春の嵐」 (1920x1080 x26410bpp-flac chap).jap.ass',
          id: 2,
        },
        {
          after: '[Moozzi2] Aoi Hana - 03 (BD 1920x1080 x.264 Flac).ass',
          before: '(BD) 青い花 第03話 「朝目覚めては」 (1920x1080 x26410bpp-flac chap).ass',
          id: 3,
        },
        {
          after: '[Moozzi2] Aoi Hana - 03 (BD 1920x1080 x.264 Flac).jap.ass',
          before: '(BD) 青い花 第03話 「朝目覚めては」 (1920x1080 x26410bpp-flac chap).jap.ass',
          id: 3,
        },
        {
          after: '[Moozzi2] Aoi Hana - 04 (BD 1920x1080 x.264 Flac).ass',
          before: '(BD) 青い花 第04話 「青春は美わし」 (1920x1080 x26410bpp-flac chap).ass',
          id: 4,
        },
        {
          after: '[Moozzi2] Aoi Hana - 04 (BD 1920x1080 x.264 Flac).jap.ass',
          before: '(BD) 青い花 第04話 「青春は美わし」 (1920x1080 x26410bpp-flac chap).jap.ass',
          id: 4,
        },
        {
          after: '[Moozzi2] Aoi Hana - 05 (BD 1920x1080 x.264 Flac).ass',
          before: '(BD) 青い花 第05話 「嵐が丘 前編」 (1920x1080 x26410bpp-flac chap).ass',
          id: 5,
        },
        {
          after: '[Moozzi2] Aoi Hana - 05 (BD 1920x1080 x.264 Flac).jap.ass',
          before: '(BD) 青い花 第05話 「嵐が丘 前編」 (1920x1080 x26410bpp-flac chap).jap.ass',
          id: 5,
        },
        {
          after: '[Moozzi2] Aoi Hana - 06 (BD 1920x1080 x.264 Flac).ass',
          before: '(BD) 青い花 第06話 「嵐が丘 後編」 (1920x1080 x26410bpp-flac chap).ass',
          id: 6,
        },
        {
          after: '[Moozzi2] Aoi Hana - 06 (BD 1920x1080 x.264 Flac).jap.ass',
          before: '(BD) 青い花 第06話 「嵐が丘 後編」 (1920x1080 x26410bpp-flac chap).jap.ass',
          id: 6,
        },
        {
          after: '[Moozzi2] Aoi Hana - 07 (BD 1920x1080 x.264 Flac).ass',
          before: '(BD) 青い花 第07話 「若葉のころ」 (1920x1080 x26410bpp-flac chap).ass',
          id: 7,
        },
        {
          after: '[Moozzi2] Aoi Hana - 07 (BD 1920x1080 x.264 Flac).jap.ass',
          before: '(BD) 青い花 第07話 「若葉のころ」 (1920x1080 x26410bpp-flac chap).jap.ass',
          id: 7,
        },
        {
          after: '[Moozzi2] Aoi Hana - 08 (BD 1920x1080 x.264 Flac).ass',
          before: '(BD) 青い花 第08話 「恋は盲目」 (1920x1080 x26410bpp-flac chap).ass',
          id: 8,
        },
        {
          after: '[Moozzi2] Aoi Hana - 08 (BD 1920x1080 x.264 Flac).jap.ass',
          before: '(BD) 青い花 第08話 「恋は盲目」 (1920x1080 x26410bpp-flac chap).jap.ass',
          id: 8,
        },
        {
          after: '[Moozzi2] Aoi Hana - 09 (BD 1920x1080 x.264 Flac).ass',
          before: '(BD) 青い花 第09話 「夏の夜の夢」 (1920x1080 x26410bpp-flac chap).ass',
          id: 9,
        },
        {
          after: '[Moozzi2] Aoi Hana - 09 (BD 1920x1080 x.264 Flac).jap.ass',
          before: '(BD) 青い花 第09話 「夏の夜の夢」 (1920x1080 x26410bpp-flac chap).jap.ass',
          id: 9,
        },
        {
          after: '[Moozzi2] Aoi Hana - 10 (BD 1920x1080 x.264 Flac).ass',
          before: '(BD) 青い花 第10話 「幸福の王子」 (1920x1080 x26410bpp-flac chap).ass',
          id: 10,
        },
        {
          after: '[Moozzi2] Aoi Hana - 10 (BD 1920x1080 x.264 Flac).jap.ass',
          before: '(BD) 青い花 第10話 「幸福の王子」 (1920x1080 x26410bpp-flac chap).jap.ass',
          id: 10,
        },
        {
          after: '[Moozzi2] Aoi Hana - 11 END (BD 1920x1080 x.264 Flac).ass',
          before: '(BD) 青い花 第11話 「冬の花火」 (1920x1080 x26410bpp-flac chap).ass',
          id: 11,
        },
        {
          after: '[Moozzi2] Aoi Hana - 11 END (BD 1920x1080 x.264 Flac).jap.ass',
          before: '(BD) 青い花 第11話 「冬の花火」 (1920x1080 x26410bpp-flac chap).jap.ass',
          id: 11,
        },
      ])
    })
  })
})

