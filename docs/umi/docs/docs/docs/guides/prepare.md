### Umi.js 需要使用 Node.js 进行开发吗？

是的，Umi.js 需要使用 Node.js 来进行开发。请确保电脑已经安装了 Node.js，并且版本在 14 以上。如果还没有安装，你可以前往 [Node.js 官网](https://nodejs.org/zh-cn/) 下载并安装。

### 如何在 macOS 上安装 Node.js？

在 macOS 环境下，我们建议使用 [nvm](https://github.com/nvm-sh/nvm) 来管理 Node.js 的版本。你可以使用以下命令来安装 nvm 和 Node.js：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm -v

0.39.1
```

安装完成后，你可以使用以下命令来安装指定版本的 Node.js：

```bash
nvm install 16
nvm use 16
```

然后，你可以使用以下命令来检查是否安装成功并且安装了正确的版本：

```bash
node -v

v16.14.0
```

### 如何在 Windows 上安装 Node.js？

在 Windows 环境下，我们建议使用 [nvm-windows](https://github.com/coreybutler/nvm-windows) 来管理 Node.js 的版本。你可以前往该项目的 GitHub 页面上进行下载和安装。

安装完成后，你可以使用以下命令来安装指定版本的 Node.js：

```bash
nvm install 16
nvm use 16
```

然后，你可以使用以下命令来检查是否安装成功并且安装了正确的版本：

```bash
node -v

v16.14.0
```

请根据你的操作系统选择适合的安装方式，并确保安装正确版本的 Node.js。

### 什么是 npm 依赖管理工具？

npm（Node Package Manager）是 Node.js 自带的依赖管理工具，用于管理和发布 JavaScript 代码包。它是一种将代码包进行组织、分享和复用的解决方案。

### 为什么 Umi.js 推荐使用 pnpm 来管理依赖？

Umi.js 是一个基于 React 的可插拔企业级前端应用框架，它推荐使用 pnpm 来管理依赖。pnpm 是一种快速、节省磁盘空间的依赖管理工具，相比 npm 和 yarn，在安装和更新依赖时更快更高效。

### 如何安装 pnpm？

使用以下命令可以安装 pnpm：

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### 如何检查是否成功安装 pnpm？

安装完成后，可以使用以下命令来检查是否成功安装了 pnpm：

```bash
pnpm -v

7.3.0
```

若返回的版本号与预期一致，则说明 pnpm 安装成功。