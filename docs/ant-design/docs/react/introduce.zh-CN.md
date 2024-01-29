### `antd` 是什么？

答案：`antd` 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

### 问题 2：`antd` 的设计体系是什么？

答案：`antd` 的设计体系是 Ant Design，它是一套企业级的 UI 设计语言和 React 组件库。

###`antd` 的组件库用于什么类型的产品？

答案：`antd` 的组件库主要用于研发企业级中后台产品。

### Ant Design 是什么？

Ant Design 是一个提炼自企业级中后台产品的交互语言和视觉风格的 UI 组件库。它提供了开箱即用的高质量 React 组件，使用 TypeScript 开发，提供完整的类型定义文件。

### Ant Design 提供了哪些特性？

Ant Design 提供了以下特性：

- 🌈 提炼自企业级中后台产品的交互语言和视觉风格。
- 📦 开箱即用的高质量 React 组件。
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件。
- ⚙️ 全链路开发和设计工具体系。
- 🌍 数十个国际化语言支持。
- 🎨 深入每个细节的主题定制能力。

### Ant Design 如何进行主题定制？

Ant Design 提供了深入每个细节的主题定制能力。你可以根据自己的需求，对 Ant Design 的样式进行个性化的定制。通过修改 CSS 变量和样式覆盖，你可以改变组件的颜色、大小、字体等样式属性，从而实现自定义的主题效果。

请参考 Ant Design 的官方文档，了解更多关于主题定制的详细信息。

### 1. Ant Design 5.x 的 CSS 变量模式兼容哪些环境？

Ant Design 5.x 的 CSS 变量模式兼容以下环境：

- 现代浏览器
- 支持服务端渲染
- Electron

具体的浏览器兼容性如下：

- Edge: 最近的 2 个版本
- Firefox: 最近的 2 个版本
- Chrome: 最近的 2 个版本
- Safari: 最近的 2 个版本
- Oper 最近的 2 个版本
- Electron: 最近的 2 个版本

对于 IE 系列浏览器，需要提供相应的 Polyfill 支持。建议使用 [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) 来解决浏览器兼容问题。如果你在使用 [umi](http://umijs.org/)，可以直接使用 [targets](https://umijs.org/zh/config/#targets) 配置。

请注意，从 `antd@2.0` 开始，不再支持 IE8；从 `antd@4.0` 开始，不再支持 React 15 和 IE9/10；从 `antd@5.0` 开始，不再支持 IE。

### 2. 如何在 Ant Design 5.x 中使用 CSS 变量模式？

Ant Design 5.x 中的 CSS 变量模式是从版本 5.12.0 开始重新支持的功能。这次 Ant Design 融合了 CSS-in-JS 的能力，并将所有 Design Token 纳入了 CSS 变量的管理范畴。

使用 CSS 变量模式，不同主题下的样式可以共享，从而减少样式体积。切换主题时不再需要重新序列化样式，提升了主题切换的性能。

如果你的应用依赖 Ant Design 的主题能力，强烈建议开启 CSS 变量模式。

### 3. 如何解决 Ant Design 中的浏览器兼容性问题？

对于 IE 系列浏览器，建议使用 [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) 来提供相应的 Polyfill 支持。

如果你在使用 [umi](http://umijs.org/)，可以直接使用 [targets](https://umijs.org/zh/config/#targets) 配置来解决浏览器兼容问题。

请注意，`antd@2.0` 之后不再支持 IE8，`antd@4.0` 之后不再支持 React 15 和 IE9/10，`antd@5.0` 之后不再支持 IE。

### 版本号和稳定版

稳定版示例：

![npm package](https://img.shields.io/npm/v/antd.svg?style=flat-square)

- [npm package](https://www.npmjs.org/package/antd)

你可以通过订阅 [GitHub Release](https://github.com/ant-design/ant-design/releases.atom) 获取版本发布的通知。

### 如何订阅 Ant Design 的版本发布通知？

你可以在 [GitHub](https://github.com/ant-design/ant-design/releases.atom) 上订阅 Ant Design 的版本发布通知。通过订阅，你将会在每次版本发布时收到通知。这样你就不会错过任何新版本的发布，并能及时了解到最新的更新内容。

### Ant Design 的稳定版是指什么？

Ant Design 的稳定版是指已经发布到 npm 或其他包管理平台上的可供开发者下载和使用的版本。稳定版是经过测试和验证，确保了功能的正常运行和稳定性，一般被推荐用于生产环境中。你可以通过查看版本号和订阅通知来获取稳定版的信息。

### 如何使用 npm 安装 Ant Design？

你可以使用 npm 安装 Ant Design。在命令行中运行以下命令：

```
$ npm install antd --save
```

### 如何使用 yarn 安装 Ant Design？

你可以使用 yarn 安装 Ant Design。在命令行中运行以下命令：

```
$ yarn add antd
```

### 如何使用 pnpm 安装 Ant Design？

你可以使用 pnpm 安装 Ant Design。在命令行中运行以下命令：

```
$ pnpm install antd --save
```

请根据你的开发环境选择适合的安装方式。

### 如何在浏览器中引入 Ant Design？

您可以通过以下两种方式在浏览器中引入 Ant Design：

1. 使用 `script` 标签引入 `antd.js` 或 `antd.min.js` 文件，并在全局环境中使用 `antd` 变量。

2. 使用 `link` 标签引入 `reset.css` 文件，该文件位于 npm 包内的 dist 目录下。您还可以通过 CDN 或其他方式进行下载。

请注意，我们强烈不推荐直接使用已构建的文件，因为这样无法实现按需加载，并且难以获取底层依赖模块的及时 bug 修复支持。

另外，请确保在引入 `antd.js` 或 `antd.min.js` 前，已提前引入依赖的 `react`、`react-dom` 和 `dayjs` 文件。

### 如何引入 Ant Design 的 reset.css 文件？

要引入 Ant Design 的 reset.css 文件，您可以使用 `link` 标签将该文件链接到您的 HTML 文件中。该文件位于 npm 包内的 dist 目录下。

您可以直接在浏览器中使用脚本标签和链接标签引入 reset.css 文件，然后可以在您的项目中使用 Ant Design 的样式。

请注意，我们推荐您通过 CDN 或其他方式进行下载 reset.css 文件，而不是直接使用已构建的文件。这样可以确保您能获得更新的样式和修复的 bug。

### 如何在浏览器中按需加载 Ant Design？

在浏览器中按需加载 Ant Design，您可以使用 `script` 标签引入 `antd.js` 或 `antd.min.js` 文件，并在全局环境中使用 `antd` 变量。

通过按需加载，您只会加载您需要的组件和样式，而不是全部 Ant Design 的代码。这可以减少您项目的体积，提升加载速度。

请注意，在使用按需加载前，请确保您已提前引入了依赖的 `react`、`react-dom` 和 `dayjs` 文件。

### 如何查看 Ant Design 的更新日志？

您可以访问 Ant Design 的 [更新日志](/changelog) 页面查看 Ant Design 的更新日志。

### Ant Design 提供了哪些相关项目和工具？

Ant Design 提供了以下相关项目和工具：

- [Ant Design Pro](https://pro.ant.design/)
- [Ant Design Pro Components](https://procomponents.ant.design/)
- [Ant Design Charts](https://charts.ant.design)
- [React 底层基础组件](https://react-component.github.io/)
- [Ant Design Mobile](https://mobile.ant.design)
- [Ant Design Mini](https://mini.ant.design)
- [Ant Design 图标](https://github.com/ant-design/ant-design-icons)
- [Ant Design 色彩](https://github.com/ant-design/ant-design-colors)
- [首页模板集](https://landing.ant.design)
- [动效](https://motion.ant.design)
- [脚手架市场](https://scaffold.ant.design)
- [设计规范速查手册](https://github.com/ant-design/ant-design/wiki/Ant-Design-%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80%E7%AE%80%E7%89%88)
- [开发者说明](https://github.com/ant-design/ant-design/wiki/Development)
- [版本发布规则](https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B)
- [CodeSandbox 模板](https://u.ant.design/codesandbox-repro)（用于提交 bug 报告）
- [Awesome Ant Design](https://github.com/websemantics/awesome-ant-design)
- [定制主题](/docs/react/customize-theme)
- [成为社区协作成员](https://github.com/ant-design/ant-design/wiki/Collaborators#how-to-apply-for-being-a-collaborator)

### 如何查看 Ant Design 的设计规范速查手册？

您可以访问 Ant Design 的 [设计规范速查手册](https://github.com/ant-design/ant-design/wiki/Ant-Design-%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80%E7%AE%80%E7%89%88) 页面查看 Ant Design 的设计规范速查手册。

### Ant Design 在国内外企业级网站中被广泛使用吗？

Ant Design 在国内外企业级网站中被广泛使用。你可以参考 [wappalyzer](https://www.wappalyzer.com/technologies/ui-frameworks/ant-design) 上的数据来了解更多情况。如果你的公司和产品也使用了 Ant Design，欢迎到 [这里](https://github.com/ant-design/ant-design/issues/477) 留言。

### 如何查看 Ant Design 在企业级网站的使用情况？

想要了解 Ant Design 在企业级网站的使用情况，可以参考 [wappalyzer](https://www.wappalyzer.com/technologies/ui-frameworks/ant-design) 上的数据。该网站提供了关于各种 UI 框架使用情况的统计信息。

### 如果我公司和产品使用了 Ant Design，我可以在哪里留下评论？

如果你的公司和产品使用了 Ant Design，并且你想要留下评论，你可以到 [这个链接](https://github.com/ant-design/ant-design/issues/477) 留言。在这个链接中，你可以与其他使用 Ant Design 的开发者交流和分享你的经验。

### 如何参与贡献？

在参与贡献之前，请先阅读[贡献者文档](https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md)。如果你有意愿参与贡献，我们欢迎你提交[Pull Request](https://github.com/ant-design/ant-design/pulls)，或者向我们[报告 Bug](http://new-issue.ant.design/)。

为了更好地获得帮助和支持，我们强烈推荐你阅读以下资料：

- [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)
- [《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545)
- [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)
- [《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)

通过阅读以上文档，你可以更好地了解如何参与贡献，并且提出更好的问题，从而更容易获得帮助。

### 如何报告 Bug？

如果你在使用过程中遇到了 Bug，我们非常欢迎你向我们 [报告 Bug](http://new-issue.ant.design/)。为了更好地帮助你解决问题，并且更高效地进行 Bug 修复，我们建议你遵循以下步骤：

1. 阅读[《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)和[《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)，学习如何提出有价值的问题和报告准确的 Bug 信息。
2. 访问我们的 [报告 Bug 网页](http://new-issue.ant.design/)，按照提示填写相关信息，包括 Bug 的描述、复现步骤、期望结果和实际结果等。
3. 提交 Bug 报告后，我们的团队会尽快对 Bug 进行评估和处理，并及时与你沟通解决方案。

通过遵循上述步骤，你能够更好地报告 Bug，并为问题的解决提供有价值的信息，使得 Bug 得到更高效的修复。

### 如何提问问题？

如果你在使用过程中遇到了问题，我们非常愿意提供帮助和解答。为了更好地得到帮助，我们建议你参考以下资料：

- [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)：这是一篇指导如何提出有价值问题的经典文档，通过阅读可以学到很多关于提问的技巧和方法。
- [《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545)：这是一篇关于如何向开源社区提问的指南，其中包含了一些实用的建议和经验分享。
- [《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)：这是一篇介绍如何向开源项目提交问题的文章，里面提供了一些向开源项目提问的实用技巧和注意事项。

通过阅读以上资料，你将了解到如何提出更清晰、更具体的问题，从而更容易获得他人的帮助和解答。

### 如何在 GitHub Discussions 上提问问题？

如果你在使用过程中遇到问题，可以通过 GitHub Discussions 这个途径寻求帮助。为了更好地获取帮助，我们建议在提问时使用 `Q&A` 标签来标识你的问题。

### 如何在 Stack Overflow 上提问关于 Ant Design 的问题？

如果你需要在 Stack Overflow 上提问有关 Ant Design 的问题，我们建议在提问时加上 `antd` 标签，这样可以更容易地吸引到相关领域的专家来回答你的问题。

### 如何在 Segment Fault 上提问关于 Ant Design 的问题？

Segment Fault 是另一个寻求帮助的途径，你也可以在这里提问关于 Ant Design 的问题。同样地，我们建议在提问时加上 `antd` 标签，这样可以让更多人注意到你的问题并提供帮助。

希望以上信息能帮助到你，祝你顺利解决问题！
