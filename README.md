# bangumi-sub-renamer

A cli tool for renaming subtitles to matching episodes.

[![asciicast](https://asciinema.org/a/534653.svg)](https://asciinema.org/a/534653)

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)

<!-- tocstop -->

## Installation

### npm

`npm install -g bangumi-sub-renamer`

### pnpm

`pnpm add -g bangumi-sub-renamer`

## Usage

<!-- usage -->
```sh-session
$ cd [VIDEO_PATH]

# Video files and subtitle files are in the same folder
$ bnm

# Subtitle files are in the sub folder
$ bnm . ./sub
```
<!-- usagestop -->

## Commands

<!-- commands -->
* [`bnm VIDEO_PATH SUBTITLE_PATH`](#bnm-video_path-subtitle_path)

## `bnm VIDEO_PATH SUBTITLE_PATH`

A cli tool for renaming subtitles to matching episodes.

```
USAGE
  $ bnm [VIDEO_PATH] [SUBTITLE_PATH] [-o <value>] [-m cp|mv]

ARGUMENTS
  VIDEO_PATH     [default: .] The path where the video files are stored
  SUBTITLE_PATH  [default: .] The path where the subtitle files are stored

FLAGS
  -m, --mode=<option>  [default: mv] choose mode between copy and move
                       <options: cp|mv>
  -o, --out=<value>    [default: VIDEO_PATH] path(should exist) to output file

DESCRIPTION
  A cli tool for renaming subtitles to matching episodes.

EXAMPLES
  $ bnm

  $ bnm . ./sub/ -m cp

  $ bnm . ./sub -o ./sub
```

