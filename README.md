oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g amutgen
$ amutgen COMMAND
running command...
$ amutgen (--version)
amutgen/0.0.0 darwin-arm64 node-v16.9.1
$ amutgen --help [COMMAND]
USAGE
  $ amutgen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`amutgen hello PERSON`](#amutgen-hello-person)
* [`amutgen hello world`](#amutgen-hello-world)
* [`amutgen help [COMMAND]`](#amutgen-help-command)
* [`amutgen plugins`](#amutgen-plugins)
* [`amutgen plugins:inspect PLUGIN...`](#amutgen-pluginsinspect-plugin)
* [`amutgen plugins:install PLUGIN...`](#amutgen-pluginsinstall-plugin)
* [`amutgen plugins:link PLUGIN`](#amutgen-pluginslink-plugin)
* [`amutgen plugins:uninstall PLUGIN...`](#amutgen-pluginsuninstall-plugin)
* [`amutgen plugins update`](#amutgen-plugins-update)

## `amutgen hello PERSON`

Say hello

```
USAGE
  $ amutgen hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/odmishien/amutgen/blob/v0.0.0/dist/commands/hello/index.ts)_

## `amutgen hello world`

Say hello world

```
USAGE
  $ amutgen hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `amutgen help [COMMAND]`

Display help for amutgen.

```
USAGE
  $ amutgen help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for amutgen.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `amutgen plugins`

List installed plugins.

```
USAGE
  $ amutgen plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ amutgen plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `amutgen plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ amutgen plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ amutgen plugins:inspect myplugin
```

## `amutgen plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ amutgen plugins:install PLUGIN...

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
  $ amutgen plugins add

EXAMPLES
  $ amutgen plugins:install myplugin 

  $ amutgen plugins:install https://github.com/someuser/someplugin

  $ amutgen plugins:install someuser/someplugin
```

## `amutgen plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ amutgen plugins:link PLUGIN

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
  $ amutgen plugins:link myplugin
```

## `amutgen plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ amutgen plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ amutgen plugins unlink
  $ amutgen plugins remove
```

## `amutgen plugins update`

Update installed plugins.

```
USAGE
  $ amutgen plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
