# bangumi-sub-renamer

A cli tool for renaming subtitles to matching episodes.

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)

<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g bangumi-sub-renamer
$ bnm COMMAND
running command...
$ bnm (--version)
bangumi-sub-renamer/0.0.0 win32-x64 node-v18.11.0
$ bnm --help [COMMAND]
USAGE
  $ bnm COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`bnm hello PERSON`](#bnm-hello-person)
- [`bnm hello world`](#bnm-hello-world)
- [`bnm help [COMMAND]`](#bnm-help-command)
- [`bnm plugins`](#bnm-plugins)
- [`bnm plugins:install PLUGIN...`](#bnm-pluginsinstall-plugin)
- [`bnm plugins:inspect PLUGIN...`](#bnm-pluginsinspect-plugin)
- [`bnm plugins:install PLUGIN...`](#bnm-pluginsinstall-plugin-1)
- [`bnm plugins:link PLUGIN`](#bnm-pluginslink-plugin)
- [`bnm plugins:uninstall PLUGIN...`](#bnm-pluginsuninstall-plugin)
- [`bnm plugins:uninstall PLUGIN...`](#bnm-pluginsuninstall-plugin-1)
- [`bnm plugins:uninstall PLUGIN...`](#bnm-pluginsuninstall-plugin-2)
- [`bnm plugins update`](#bnm-plugins-update)

## `bnm hello PERSON`

Say hello

```
USAGE
  $ bnm hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Zebeqo/bangumi-sub-renamer/blob/v0.0.0/dist/commands/hello/index.ts)_

## `bnm hello world`

Say hello world

```
USAGE
  $ bnm hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ bnm hello world
  hello world! (./src/commands/hello/world.ts)
```

## `bnm help [COMMAND]`

Display help for bnm.

```
USAGE
  $ bnm help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for bnm.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_

## `bnm plugins`

List installed plugins.

```
USAGE
  $ bnm plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ bnm plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.4/src/commands/plugins/index.ts)_

## `bnm plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bnm plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bnm plugins add

EXAMPLES
  $ bnm plugins:install myplugin

  $ bnm plugins:install https://github.com/someuser/someplugin

  $ bnm plugins:install someuser/someplugin
```

## `bnm plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bnm plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ bnm plugins:inspect myplugin
```

## `bnm plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bnm plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bnm plugins add

EXAMPLES
  $ bnm plugins:install myplugin

  $ bnm plugins:install https://github.com/someuser/someplugin

  $ bnm plugins:install someuser/someplugin
```

## `bnm plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ bnm plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ bnm plugins:link myplugin
```

## `bnm plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bnm plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bnm plugins unlink
  $ bnm plugins remove
```

## `bnm plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bnm plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bnm plugins unlink
  $ bnm plugins remove
```

## `bnm plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bnm plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bnm plugins unlink
  $ bnm plugins remove
```

## `bnm plugins update`

Update installed plugins.

```
USAGE
  $ bnm plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

<!-- commandsstop -->
