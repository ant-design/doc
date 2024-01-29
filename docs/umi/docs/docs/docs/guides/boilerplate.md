#### 如何在当前目录下创建一个 `my-umi-app` 的项目？

你可以使用以下命令在当前目录创建一个名为 `my-umi-app` 的 Umi 项目：

```
pnpm create umi my-umi-app
```

运行这个命令后，会自动安装 `create-umi` 脚手架，并创建一个最基本的 Umi 项目。

#### 在创建项目时，有哪些可选项需要注意？

在运行 `pnpm create umi my-umi-app` 命令时，会出现两个可选项：

1. 选择 Npm 客户端

你可以从以下几个选项中选择你习惯使用的 Node 依赖管理工具：

- npm
- cnpm
- tnpm
- yarn
- pnpm（Umi 官方推荐）

2. 选择 Npm 源

你可以从以下几个选项中选择你想要使用的 Npm 源：

- npm
- taobao

选择好这两个选项后，脚手架会根据你的选择生成一个最基本的 Umi 项目，并自动安装依赖。

#### 生成的项目结构是怎样的？

创建完项目后，你会在当前文件夹下看到一个名为 `my-umi-app` 的文件夹。这个文件夹包含了以下文件和文件夹：

- package.json：Umi 项目的配置文件。
- pnpm-lock.yaml：pnpm 安装依赖的锁定文件。
- src/assets：存放项目的静态资源文件。
- src/layouts：存放项目的布局文件。
- src/pages：存放项目的页面文件。
- tsconfig.json：TypeScript 的配置文件。
- typings.d.ts：TypeScript 的类型声明文件。

这样，你就成功地一键初始化了一个 Umi 项目。