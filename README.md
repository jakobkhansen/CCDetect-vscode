# ccdetect README

This is the README for your extension "ccdetect". After writing up a brief description, we recommend including the following sections.

## Building

Run `make` to build CCDetect-lsp and this plugin. Make sure that launcher/launcher.jar
exists after building. If CCDetect-lsp does not compile successfully, try getting
[CCDetect-lsp](https://github.com/jakobkhansen/CCDetect-lsp) to compile and moving the jar
file to this repo.

## Usage

As this plugin is not published to the VSCode Marketplace, this plugin needs to be run
locally. Run VSCode with the following command to open it with the extension installed:

```bash
code --extensionDevelopmentPath=$PWD .
```

where you can replace `$PWD` with the path to the extension.

Once VSCode is running, enter the root of a code base and run the `Start CCDetect Server`
command (`ctrl+shift+p` or `cmd+shift+p`). Then the server should start and index the
project. Finally, once the server has indexed the project, clones will start to show up in
the diagnostics view of VSCode.
