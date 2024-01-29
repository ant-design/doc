### 如何调试 dev 阶段的构建产物？

要调试项目的构建产物，在这里以 `umi.js` 为例，你可以按照以下步骤进行操作：

1. 首先，将原来的 `umi.js` 下载到你的当前项目根目录下。

2. 然后，根据你的调试需要，对该文件进行编辑。

3. 接下来，在浏览器中刷新你的项目页面，此时项目会开始使用根目录下的 `umi.js` 文件。

4. 如果你调试完毕并想要恢复原状，只需删除根目录下的 `umi.js` 文件即可。

希望以上信息可以帮助到你！

### XSwitch 是什么？如何使用？
XSwitch 是一个 Chrome 插件，提供了在特定的域名环境调试或验证代码的功能。你可以通过 [XSwitch Chrome 插件下载链接](https://chrome.google.com/webstore/detail/xswitch/idkjhjggpffolpidfkikidcokdkdaogg) 下载并安装 XSwitch 插件。安装完插件后，在特定的域名环境下，你可以通过 XSwitch 配置转发规则，替换特定资源的动态地址，以便调试或验证你的本地代码。

### 如何使用 XSwitch 配置转发规则调试本地代码？
如果你想在线上项目地址 `https://www.myproject.com` 上调试本地代码，可以使用 XSwitch 配置转发规则来实现。在配置转发规则之前，请确保你的本地开发环境已经启动，并设置了环境变量 `SOCKET_SERVER`。下面是具体的步骤：

1. 使用环境变量 `SOCKET_SERVER` 启动本地环境（防止因为连接不上 socket server 导致页面不断刷新）。示例代码如下：
   ```bash
   $SOCKET_SERVER=http://127.0.0.1:8000/ npx umi dev
   ```
2. 打开 XSwitch 插件，在转发规则中配置相应的资源替换规则。示例配置如下：
   ```json
   {
     "proxy": [
       [
         "https://www.myproject.com/umi.2c8a01df.js",
         "http://127.0.0.1:8000/umi.js"
       ],
       [
         "https://www.myproject.com/(.*\.js)",
         "http://127.0.0.1:8000/$1"
       ],
       [
         "https://www.myproject.com/umi.ae8b10e0.css",
         "http://127.0.0.1:8000/umi.css"
       ]
     ]
   }
   ```
   这里的配置表示将 `https://www.myproject.com/umi.2c8a01df.js` 替换为本地开发环境的 `http://127.0.0.1:8000/umi.js`，将 `https://www.myproject.com/` 下的所有以 `.js` 结尾的资源替换为本地相同路径的资源，将 `https://www.myproject.com/umi.ae8b10e0.css` 替换为本地开发环境的 `http://127.0.0.1:8000/umi.css`。
3. 刷新页面，正式域名下的内容就被替换了，你就可以方便地在特定环境下调试你的代码了。

### 如何退出 XSwitch 的调试模式？
如果你调试完毕或者不需要继续调试，你可以关闭 XSwitch 插件的功能来退出调试模式。在 Chrome 浏览器中，点击 XSwitch 插件图标，即可关闭插件功能。

### 如何保存 XSwitch 的转发规则？
如果你经常使用 XSwitch，并且希望保存你的转发规则，可以新建一个规则保存起来。在 XSwitch 插件中，你可以点击新建规则按钮，并输入规则名称，将你的转发规则保存起来。

### 如何找到 XSwitch 插件图标？
XSwitch 插件的图标一般会显示在 Chrome 浏览器的工具栏中。如果 XSwitch 插件的图标没有显示在工具栏中，你可以在 Chrome 浏览器的扩展程序管理页面找到 XSwitch，并将其固定到工具栏中。