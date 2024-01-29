### umi 提供了哪些内置的命令行？

umi 提供了以下内置命令行：

1. `build` - 用于将应用程序构建为生产环境的命令。
2. `config` - umi 的配置命令行工具。
3. `dev` - 用于启动开发环境的命令行工具。
4. `help` - 用于显示命令行帮助的命令。
5. `lint` - 使用 eslint 和 stylelint 对源代码进行代码检查的命令。
6. `setup` - 用于设置项目的命令行工具。
7. `deadcode` - 检查死代码的命令行工具。
8. `version` 或 `v` - 显示 umi 版本信息的命令。
9. `plugin` - 用于检查 umi 插件的命令。
10. `verify-commit` - 验证提交消息的命令，通常与 husky 一起使用。
11. `preview` - 用于本地预览生产构建的命令。
12. `run` - 运行脚本命令的命令，支持 TypeScript 和 zx。
13. `generate` 或 `g` - 快速生成代码片段的命令。

你可以在项目目录中运行 `umi help <command>` 来获取更多关于特定命令的详细信息。

### 如何获取 umi 的可用命令列表？

要获取 umi 的可用命令列表，你可以在项目目录中运行以下命令：

```bash
umi help
```

执行以上命令后，你将看到类似以下的输出列表：

```bash
Usage: umi <command> [options]

Commands:

    build     build app for production
    config    umi config cli
    dev       dev server for development
    help      show commands help
    lint      lint source code using eslint and stylelint
    setup     setup project
    deadcode  check dead code
    version   show umi version
    v         show umi version
    plugin    inspect umi plugins
    verify-commit verify the commit message, which is usually used with husky.
    preview   locally preview production build
    run       run the script commands, support for ts and zx
    generate  generate code snippets quickly
    g         generate code snippets quickly

Run `umi help <command>` for more information of specific commands.
Visit https://umijs.org/ to learn more about Umi.
```

你可以根据需要选择相应的命令来使用 umi 的功能。

### umi config list 命令的作用是什么？

通过使用 umi config list 命令，我们可以快速查看和列举当前项目的配置信息。这些配置信息包括了项目的一些开关属性和外部依赖等内容。运行命令后，会输出一个列表，每一项包含了配置的 key 和相应的 value。

### umi config get 命令的作用是什么？

通过使用 umi config get 命令，我们可以查看指定配置项的详细信息。该命令会显示出指定配置项的 key 和相应的 value，并提供其他的配置信息。

### umi config set 命令的作用是什么？

umi config set 命令用于修改项目的配置项。通过该命令，我们可以将指定的配置项的 value 值进行修改，从而实现对项目的配置进行自定义。在运行该命令时，需要指定要修改的配置项的 key 和新的 value。

### umi config remove 命令的作用是什么？

umi config remove 命令用于删除项目的某个配置项。通过该命令，我们可以移除指定的配置项，使其恢复为默认值或者被彻底删除。在运行该命令时，需要指定要删除的配置项的 key。

### 如何启动本地开发服务器进行项目开发和调试？

你可以通过运行以下命令来启动本地开发服务器：

```bash
$ umi dev
```

启动成功后，你可以在以下地址中访问你的应用：

- 本地地址：[https://127.0.0.1:8001](https://127.0.0.1:8001)
- 网络地址：[https://192.168.1.1:8001](https://192.168.1.1:8001)

你可以在浏览器中打开以上地址查看你的应用。

1. 什么是 umi generate？
根据前面的文本信息，umi generate 是一个用于生成 umi 页面的命令。可以通过选择生成器类型或指定参数来使用。

2. umi generate 支持哪些生成器类型？
根据前面的文本信息，umi generate 支持以下生成器类型：
- Create Pages：根据页面名称创建一个 umi 页面
- Enable Prettier：启用 Prettier

3. 如何使用 umi generate 命令？
根据前面的文本信息，可以通过以下命令来使用 umi generate：
- 不指定参数时，会显示生成器类型供选择。
- 指定参数时，可以直接使用指定的生成器类型。

4. 能否详细说明 umi generate 的使用方法？
根据前面的文本信息，umi generate 的使用方法如下：
- 如果不指定参数，可以使用箭头键选择生成器类型，回车键提交选择。
- 如果指定参数，可以直接使用指定的生成器类型。

5. 基于以上信息，可以生成多少个 QA 文档？
根据前面的文本信息，可以生成3个 QA 文档。

### umi 的帮助命令有哪些？

umi 提供了以下帮助命令：

- build：用于将应用构建为生产环境的命令
- config：用于配置 umi 的命令行工具
- dev：用于启动开发环境的命令
- help：用于显示命令帮助的命令
- setup：用于设置项目的命令
- version：用于显示 umi 版本的命令
- plugin：用于检查 umi 插件的命令
- generate：用于快速生成代码片段的命令

可以通过运行 `umi help <command>` 查看特定命令的详细帮助信息。

### umi build 命令如何使用？

umi build 命令用于将应用构建为生产环境。

使用方式如下：

```bash
$ umi build [options]
```

可选参数：

- `--clean`：清除构建目录并重新构建

示例：

```bash
$ umi build

# 不压缩构建
$ COMPRESS=none umi build

# 清除并构建
$ umi build --clean
```

以上是构建命令的详细说明，可以通过 `umi help build` 查看更多信息。

### `umi lint` 是用来做什么的？

`umi lint` 是一个命令行工具，用于检查和修正代码是否符合规则。通过运行 `umi lint` 命令，你可以对你的代码进行规范检查。

### `umi lint` 命令的使用方法是什么？

你可以在终端运行以下命令来使用 `umi lint`：

```bash
$ umi lint
```

此命令默认会对所有文件进行校验。

另外，`umi lint` 命令还支持一些选项，如下所示：

- `--eslint-only`：只校验 js、ts、tsx、jsx 类型文件。
- `--stylelint-only`：只校验 css、less 等样式文件。
- `--stylelint-only --cssinjs`：校验 css-in-js 模式下的样式。
- `--fix`：修正代码，自动修复一些格式问题。

### 如何使用 `umi lint` 进行代码修正？

如果你想自动修复由 `umi lint` 发现的代码格式问题，可以使用 `--fix` 参数：

```bash
$ umi lint --fix
```

运行上述命令后，`umi lint` 将会尝试自动修正一些常见的代码格式问题。

请注意，自动修正只能修复一部分问题，一些复杂的问题可能需要手动修改。

### 其他说明

`umi lint` 提供了灵活的配置选项，你可以在项目中的 `.eslintrc` 和 `.stylelintrc` 文件中配置特定的规则。

希望以上信息能够对你有所帮助！如果你有其他问题，请随时提问。

### umi插件有哪些功能？

目前，umi插件支持以下功能：

- @umijs/core/dist/service/servicePlugin
- @umijs/preset-umi (来自预设)
- @umijs/preset-umi/dist/registerMethods (来自预设)
- @umijs/preset-umi/dist/features/appData/appData (来自预设)
- @umijs/preset-umi/dist/features/check/check (来自预设)
- @umijs/preset-umi/dist/features/configPlugins/configPlugins (来自预设)
- virtual: config-styles
- virtual: config-scripts
- virtual: config-routes
- virtual: config-plugins

你可以使用 `umi plugin list` 命令查看所有的插件。

### umi插件如何列出？

要列出所有的umi插件，可以使用以下命令：

```bash
$ umi plugin list
```

这将输出一个插件列表，包含了所有已安装的umi插件。

### 如何使用umi插件的"list"子命令？

要列出umi插件，可以使用以下命令：

```bash
$ umi plugin list
```

这将显示一个含有所有已安装的umi插件的列表。你可以通过这个列表来查看当前项目中使用的umi插件。

### umi preview 命令是用来做什么的？

`umi preview` 命令是用来在本地启动一个静态 Web 服务器的。它会将 `dist` 文件夹中的构建产物作为静态文件运行在 `http://127.0.0.1:4172` 上，以供预览。通过该命令，我们可以在本地环境中查看和测试构建后的应用。

### umi preview 命令如何配置服务运行的端口？

你可以通过 `--port` 参数来配置 `umi preview` 命令所启动的服务器运行的端口号。例如，以下命令将服务器运行在 `http://127.0.0.1:9527` 上：

```bash
$ umi preview --port 9527
```

### umi preview 命令如何配置服务运行的主机名？

你可以通过 `--host` 参数来配置 `umi preview` 命令所启动的服务器运行的主机名。通过设置该参数，你可以指定服务运行的域名或 IP 地址。例如，以下命令将服务器运行在 `http://example.com` 上：

```bash
$ umi preview --host example.com
```

### umi preview 命令的配置如何生效？

在运行 `umi preview` 命令时，以下用户配置也将会生效：

* [https 配置](./config#https)
* [代理配置](../guides/proxy)
* [模拟数据配置](../guides/mock)

这意味着，你可以通过相关的配置文件或文档来进行 HTTPS 配置、代理配置以及模拟数据配置，这些配置将会在使用 `umi preview` 命令时生效。

### 注意事项

在预览模式下，`dist` 目录的变更会随着配置文件中的 `outputPath` 的变更而变更。这意味着，如果你修改了 `outputPath` 的配置，`dist` 目录中的内容也会相应发生变化。因此，在使用 `umi preview` 命令时，需要特别注意 `outputPath` 的配置和变更。

## 如何使用 `umi run` 命令运行 TypeScript 文件？

你可以使用 `umi run` 命令来像运行普通的 JavaScript 文件一样运行 TypeScript 和 ESM（ECMAScript）文件。这个命令非常方便，你可以搭配 [zx](https://github.com/google/zx) 工具一起使用来优化脚本运行。

以下是一个具体的示例：

```bash
$ umi run ./script.ts
```

通过以上命令，你可以直接运行一个 TypeScript 文件。这样，你可以利用 `umi run` 命令更加便捷地运行你的脚本。

### 关于 `deadcode` 命令的介绍

`deadcode` 命令用于查找项目中未被引用的文件，并将结果输出到根目录的文件中。

该命令的使用方法如下：

```bash
$ umi deadcode
```

在执行命令时，会首先进行准备工作。然后开始检查未被引用的文件。检查完成后，会将结果写入到名为 `DeadCodeList-{timeStamp}.txt` 的文件中。请注意，在删除这些未被引用的文件之前，请谨慎考虑。

### `deadcode` 命令的执行过程

执行 `deadcode` 命令时，会经过以下几个步骤：

1. 准备工作：进行一些必要的准备操作。
2. 开始检查未被引用的文件。
3. 将检查结果写入文件：将未被引用的文件列表写入到名为 `DeadCodeList-{timeStamp}.txt` 的文件中。
4. 检查结束：提示检查已经完成，但在删除未被引用的文件之前，请谨慎考虑。

根据以上信息，您可以使用 `deadcode` 命令来查找项目中未被引用的文件，并按需进行相关操作。

### umi mfsu 命令的作用是什么？

`umi mfsu` 命令用于查看 MFSU 依赖信息、重新构建 MFSU 依赖和清除 MFSU 依赖。

### 如何获取 MFSU 命令帮助？

您可以在终端中运行以下命令来获取 MFSU 命令的帮助信息：

```bash
$ umi mfsu
```

### 如何获取 MFSU 依赖列表？

您可以在终端中运行以下命令来获取 MFSU 的依赖列表：

```bash
$ umi mfsu ls
```

这将显示所有的 MFSU 依赖列表，包括依赖名称和版本号。

### 如何重新构建 MFSU 依赖？

若要重新构建 MFSU 依赖，您可以运行以下命令：

```bash
$ umi mfsu build
```

此命令会重新构建 MFSU 的依赖，并输出相关的构建信息。

### 如何清除 MFSU 依赖？

您可以通过以下两种方式清除 MFSU 依赖：

1. 只删除依赖信息列表：

```bash
$ umi mfsu remove
```

2. 删除依赖信息列表和产物文件：

```bash
$ umi mfsu remove --all
```

以上命令将清除 MFSU 的依赖信息列表，并可选择同时删除产物文件。