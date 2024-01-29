### 图片路径是什么？

图片路径是 `https://gw.alipayobjects.com/zos/antfincdn/7VBnGHwjaW/bianzu%2525202.svg`。

### 文档的导航标题是什么？

文档的导航标题是 "文档"。

### 文档的排序是多少？

文档的排序是 1。

### ProComponents 是什么？

ProComponents 是 Ant Design 的补充，为中后台类应用提供更高程度的抽象和设计规范。它包含一系列内置的设计规范和常用逻辑，以及相应的组件，帮助开发者快速搭建高质量的页面。

### ProComponents 与 Ant Design 有什么不同？

ProComponents 在 Ant Design 的基础上提供了更高层次的设计规范和组件。在使用 ProComponents 的情况下，你可以将 ProTable 完全当作 Ant Design 的 Table 使用，也可以直接使用 Ant Design 的基础组件或者自定义组件来操作 ProForm。ProComponents 的目标是通过提供快速高效搭建高质量中后台应用的能力，进一步扩展 Ant Design 的能力。

### 如何使用 ProComponents？

要使用 ProComponents，你可以通过引入相应的组件库，比如 ProTable 和 ProForm，来使用 ProComponents 提供的高级设计规范和常用逻辑。同时，你也可以根据需要，使用 Ant Design 的基础组件或者自定义组件来搭配使用 ProComponents。

通过使用 ProComponents，你可以更快速地开发出高质量的中后台应用，同时欢迎提供宝贵的意见，帮助我们不断改进和扩展 ProComponents。

Q1: 如何定义一个业务状态？
A1: 通常情况下，我们可以使用一个变量来定义业务状态。以表格为例，可以使用变量 `dataSource` 来存储从服务器请求到的数据。

Q2: 如何处理网络请求时的加载状态？
A2: 在发起网络请求时，可以设置一个 `loading` 变量为 `true` 来表示加载中的状态。当网络请求完成后，再设置 `loading` 为 `false`。

Q3: 如何重新请求网络数据？
A3: 可以将网络请求的行为封装成一个方法，在需要重新请求数据时调用这个方法。如果涉及到分页，还需要根据需求判断是否重置页码，可能引入额外的变量，如 `page`。同时，如果需要控制每页的数量，也会增加更多的变量处理。

### 什么是状态和行为？

在中后台开发中，我们经常遇到需要管理多个状态和对应的行为的情况。每个状态的改变都会触发一系列相应的行为，而如果每个行为都与多个状态耦合在一起，会导致系统变得异常复杂。

为了解决这个问题，我们常常会尝试对状态和行为进行分层管理。基于这个思路，ProTable提供了一种解决复杂状态的抽象层。在表格中，最常用的两个状态是`loading`和`dataSource`，而扩展的`page`和`pageSize`也是为了服务于网络状态。因此，ProTable抽象出了一个`request`的API，在其中封装了`loading`和`dataSource`状态以及它们的行为，如上一页、下一页、重新刷新、修改每页大小等。

通过这种封装模式，前端开发者可以从各种状态管理中解脱出来，专注于业务开发，而无需依赖dva、redux等数据流方案，更加符合直觉。开发者只需要定义一个状态，组件则会自动生成相应的行为。

### 如何使用ProTable的封装模式？

ProTable的封装模式采用了与Ant Design相同的API，可以渐进式地使用该模式，甚至完全降级成为一个Ant Design的表格使用。

通过ProTable的封装模式，您可以享受到更简单、更直观的表格开发体验，将更多精力专注于业务开发而不是繁琐的状态管理。同时，该模式也与Ant Design的设计理念相契合，为您提供了更加强大和灵活的表格功能。

### ProTable的封装模式是否具备可扩展性？

ProTable的封装模式提供了高度的可扩展性。通过自定义状态和行为，您可以根据实际业务需求来灵活扩展表格的功能。

封装模式的设计理念是将状态和行为进行抽象和封装，使得前端开发者可以更加便捷地进行表格开发。通过定义自己的状态和行为，您可以根据具体业务场景，定制化表格的功能和交互方式。无论是添加新的状态还是定义新的行为，ProTable都提供了丰富的API和灵活的扩展机制，让您能够轻松应对各种需求。

总之，ProTable的封装模式不仅能够解决复杂状态管理的问题，还具备了良好的可扩展性，为您的业务开发提供了更好的支持。

### 如何使用 ProTable 进行网络请求和生成查询表单？

ProTable 是一个重型组件，可以用于实现列表页的功能。使用 ProTable 可以轻松地进行网络请求和生成查询表单。通过以下步骤进行操作：

1. 安装 ProTable：在项目中安装 ProTable 包，可以通过 npm 或者 yarn 进行安装。
2. 导入 ProTable：在需要使用 ProTable 的组件中，导入 ProTable 组件。
3. 定义表格列：使用 ProTable 提供的 API，定义表格的列，包括列名、字段名、宽度等信息。
4. 发送网络请求：使用 ProTable 提供的 API，发送网络请求来获取数据，可以自定义请求参数、URL 等信息。
5. 生成查询表单：使用 ProTable 提供的 API，在表格上方生成查询表单，可以自定义查询条件、展示方式等。

通过以上步骤，你可以使用 ProTable 实现网络请求和生成查询表单的功能，快速构建列表页。

### 如何使用 ProLayout 自动生成菜单？

ProLayout 是一个重型组件，可以用于实现页面的布局和导航功能。使用 ProLayout 可以轻松地自动生成菜单。通过以下步骤进行操作：

1. 安装 ProLayout：在项目中安装 ProLayout 包，可以通过 npm 或者 yarn 进行安装。
2. 导入 ProLayout：在需要使用 ProLayout 的组件中，导入 ProLayout 组件。
3. 定义菜单数据：使用 ProLayout 提供的 API，定义菜单的数据，包括菜单项的名称、图标、路由等信息。
4. 渲染菜单：使用 ProLayout 提供的 API，在布局中渲染菜单，可以自定义菜单样式、折叠方式等。

通过以上步骤，你可以使用 ProLayout 自动生成菜单，简化页面开发，提高开发效率。

### 如何使用 ProForm 进行编辑页的开发？

ProForm 是一个重型组件，可以用于实现编辑页的功能。使用 ProForm 可以轻松地进行表单的开发和数据处理。通过以下步骤进行操作：

1. 安装 ProForm：在项目中安装 ProForm 包，可以通过 npm 或者 yarn 进行安装。
2. 导入 ProForm：在需要使用 ProForm 的组件中，导入 ProForm 组件。
3. 定义表单项：使用 ProForm 提供的 API，定义表单的各个字段，包括字段类型、字段名、验证规则等信息。
4. 设置默认值：使用 ProForm 提供的 API，设置表单的默认值，可以从接口中获取或者手动设置。
5. 处理提交事件：使用 ProForm 提供的 API，监听表单提交事件，可以在提交时获取表单数据并进行处理。

通过以上步骤，你可以使用 ProForm 进行编辑页的开发，实现表单的渲染、数据处理和提交功能。

### 如何处理常见的样式问题？

在实际开发中，我们经常会面临一些样式问题，比如按钮的位置、查询表单的布局、日期的格式化以及数字的对齐等。针对这些常见的样式问题，我们的重型组件进行了抽象，并根据设计师的建议进行了设计，以确保默认情况下的样式既好看又好用。如果你仍然希望自定义相关渲染，可以通过自定义`valueType`的方式来实现。我们的默认设计可能不一定是最好的，但一定不会差。因此，如果你要自定义样式，最好先考虑一下投入产出比，是否值得在毛坯房中进行雕花呢？

### 如何自定义组件的样式？

如果你想自定义组件的样式，可以通过自定义组件的`valueType`来实现。首先，你需要了解组件的默认样式，并查阅相关的文档。然后，根据你的需求，在样式库中找到适合的样式，或者编写自己的样式，并将其应用到组件上。具体的实现方式可以参考组件的官方文档或者相关教程。在进行样式定制时，建议先考虑是否值得投入相应的时间和精力，以及是否会对用户体验产生积极的影响。

### 如何选择默认样式和自定义样式？

当面临选择默认样式和自定义样式时，需要综合考虑多个因素。首先，需要确定默认样式是否满足项目需求，以及能否提供良好的用户体验。如果默认样式无法满足需求，或者需要根据特定的设计要求进行样式定制，那么可以考虑自定义样式。在选择自定义样式时，建议先了解组件的默认样式和设计原则，以及对现有样式进行评估和调整。同时，还需要考虑投入产出比，即自定义样式所需的时间和精力是否值得，并确保自定义样式能够提升用户体验和项目效果。

### 如何参与贡献 Ant Design Pro？

你可以通过以下方式参与贡献 Ant Design Pro ：

- 在你的公司或个人项目中使用 Ant Design Pro、umi 和 ProComponents。
- 通过 [Issue](http://github.com/ant-design/pro-components/issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](http://github.com/ant-design/pro-components/pulls) 改进 ProComponents 的代码。

### 有哪些方式可以参与 Ant Design Pro 的贡献？

你可以通过以下方式参与 Ant Design Pro 的贡献：

- 在你的公司或个人项目中使用 Ant Design Pro、umi 和 ProComponents。
- 通过 [Issue](http://github.com/ant-design/pro-components/issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](http://github.com/ant-design/pro-components/pulls) 改进 ProComponents 的代码。

### 如何向 Ant Design Pro 提交改进代码？

如果你想改进 Ant Design Pro 的代码，可以按照以下步骤进行：

1. Fork Ant Design Pro 的仓库。
2. 创建一个新的分支来进行你的改进。
3. 提交一个 Pull Request，描述你的改进和意图。

希望这些信息能对你有所帮助！如果你还有其他问题或疑惑，可以通过 [Issue](http://github.com/ant-design/pro-components/issues) 向我们咨询。

### 脚手架的目录结构是怎样的？

脚手架的目录结构如下所示：

```bash
- .dumi              * dumi 的相关配置，主要是主题等
- .github            * github 的 action 和相关的 issue 配置
- docs               * 存放公用的文档
- packages           * 我们维护的包, 如果你想贡献代码，这里是你最需要关注的
- README.md          * 展示在 github 主页的代码
- tests              * 编写测试用例的地方
- public             * 部署官网所用的静态文件
- scripts            * 开发或者部署所用的脚本
- .prettierrc.js     * prettier 的相关配置
- .eslintrc.js       * eslint 的配置
- .fatherrc.ts       * 编译脚手架的配置
- .umirc.js          * dumi 的核心配置
- webpack.config.js  * 编译 umd 包的配置文件
- vitest.config.js     * 测试环境的配置
- lerna.json         * 多包的配置
- package.json       * 项目的配置
- tsconfig.json      * typescript 的配置
- pnpm-lock.yaml     * 依赖 lock 文件
```

其中，`coverage` 文件夹是测试覆盖率文件，只有在执行完测试覆盖率后才会出现。`.umi` 文件夹是运行时的临时文件，在执行 `npm run start` 命令时生成。

### 项目中的 `.dumi` 文件夹有什么作用？

`.dumi` 文件夹包含了 dumi 的相关配置，主要用于设置脚手架的主题等信息。

### `packages` 文件夹的作用是什么？

`packages` 文件夹是我们维护的包的存放位置。如果你想贡献代码，这个文件夹是你最需要关注的地方。

### 项目中的 `tests` 文件夹有什么作用？

`tests` 文件夹用于编写测试用例的地方。在这个文件夹中，你可以编写各种类型的测试来确保代码的质量和功能的正确性。

### 为什么会有 `.prettierrc.js`、`.eslintrc.js`、`.fatherrc.ts` 这些配置文件？

`.prettierrc.js` 是 prettier 的相关配置文件，用于设置代码风格规范。

`.eslintrc.js` 是 eslint 的配置文件，用于设置代码的静态检查规则。

`.fatherrc.ts` 是编译脚手架的配置文件，用于指定如何将源码编译为可执行的代码。

### `README.md` 文件在项目中的作用是什么？

`README.md` 文件用于展示在项目的 GitHub 主页上，它是对项目的简要介绍和说明。

### 为什么会有 `public` 文件夹？

`public` 文件夹存放了部署官网所需的静态文件。

### 项目中的 `scripts` 文件夹有什么作用？

`scripts` 文件夹中存放了开发或者部署所用的脚本，这些脚本可以帮助简化开发和部署的流程。

### 为什么会有 `webpack.config.js`、`vitest.config.js` 这些配置文件？

`webpack.config.js` 是编译 umd 包的配置文件，用于设置如何将源码编译为 umd 格式的包。

`vitest.config.js` 是测试环境的配置文件，用于设置测试相关的环境信息。

### `lerna.json` 文件的作用是什么？

`lerna.json` 是多包的配置文件，用于管理多个包的依赖关系和版本号。

### `package.json` 文件在项目中的作用是什么？

`package.json` 是项目的配置文件，其中包含了项目的依赖、脚本命令等信息。

### 项目中的 `tsconfig.json` 文件有什么作用？

`tsconfig.json` 是 TypeScript 的配置文件，用于指定 TypeScript 的编译选项和编译规则。

### 为什么会有 `pnpm-lock.yaml` 这个文件？

`pnpm-lock.yaml` 是依赖的锁文件，它会记录当前项目的依赖版本信息，以确保在不同环境下依赖的一致性。

### packages 文件夹中的内容有哪些？

在 packages 文件夹中，包含了我们所有的组件。每个组件一般都有一个 `src`、`package.json` 和 `README.md` 文件。其中，`src` 文件夹是我们真正的源码，`package.json` 文件用于描述组件的信息，`README.md` 文件则是组件的介绍文档。

### 在新建文件夹后，执行 `npm run bootstrap` 可以生成哪些文件？

在新建文件夹后，执行 `npm run bootstrap` 可以生成 `package.json` 和 `README.md` 文件。这两个文件是基于模板生成的，用于描述组件的信息和提供组件的介绍文档。

### 源码中的 `demo` 文件夹有什么作用？

源码的 `demo` 文件夹用于存储所有的示例代码。每个组件会在 `demo` 文件夹中有相应的示例代码文件。这些示例代码文件可以用于演示组件的使用方法。

### `src` 文件夹中的 `${包名}.md` 文件的作用是什么？

在 `src` 文件夹中，每个组件会有一个 `${包名}.md` 文件用于介绍这个组件。这个文件中包含了组件的详细信息，包括组件的使用方法、示例代码和 API 文档等。通过这个文件，开发者可以了解到这个组件的具体功能和用法。

### 使用了 dumi 的语法有什么要求？

我们使用了 dumi 的语法，要求全部使用外置组件，用 code 引入。这样做的目的是为了方便调试和测试组件的功能。使用外置组件和 code 引入可以提高开发效率，同时也方便其他开发者理解和使用组件。

### 使用 Prettier 进行代码格式化的好处是什么？

使用自动化代码格式化软件Prettier可以带来如下好处：

1. 统一的代码风格：Prettier可以根据预设的代码风格规则，自动处理代码的缩进、空格、换行等格式，使得整个项目中的代码保持一致的风格。

2. 省时省力：不需要手动调整每一行代码的格式，Prettier能够自动帮助开发者完成大部分的代码格式化工作，节省了手动调整格式的时间。

3. 减少代码冲突：在多人协作开发的情况下，由于代码风格习惯不同，手动调整代码格式可能会导致代码冲突。而使用Prettier进行代码格式化，可以大幅减少代码冲突的发生，提高开发效率。

4. 避免代码审查困扰：由于代码风格统一，Prettier能够帮助开发者避免一些不必要的代码审查问题，减轻代码审查的工作量。

因此，建议开发者使用Prettier进行代码格式化，以保持统一的代码风格，提高开发效率和代码质量。

### 如何运行lint来检查代码风格状态？

在项目中使用linter可以帮助开发者发现并纠正代码中的一些常见问题和违反规范的地方。要运行lint来检查代码风格状态，可以执行以下步骤：

1. 打开命令行终端并进入项目目录。
2. 运行命令`npm run lint`。
3. linter将开始检查代码，并在终端上输出检查结果。
4. 根据检查结果，开发者可以发现代码中存在的问题，并根据需要进行修复或调整。

通过运行lint检查代码风格状态，可以帮助开发者保持良好的代码质量和一致的代码风格，从而提高项目的可维护性和可读性。

### Airbnb's Style Guide 是什么？如何查看该指南？

[Airbnb's Style Guide](https://github.com/airbnb/javascript)是一个由Airbnb开发团队创建和维护的JavaScript代码风格指南。该指南提供了关于代码书写风格、变量命名、代码结构等方面的建议和规范，帮助开发者编写更加一致、清晰、可读性强的JavaScript代码。

要查看Airbnb's Style Guide，可以按照以下步骤进行：

1. 打开网页浏览器，并访问[Airbnb's Style Guide](https://github.com/airbnb/javascript)页面。
2. 在该页面中，可以找到关于JavaScript代码风格的详细说明和规范。可以逐个查看不同章节，并根据需要查找相关的代码编写建议和示例。
3. 开发者可以根据自己的实际情况，参考或应用Airbnb's Style Guide中的建议和规范，以提高代码质量和可读性。

Airbnb's Style Guide是一个被广泛应用和接受的JavaScript代码风格指南，对于那些希望编写高质量和易于维护的JavaScript代码的开发者来说，是一个很有参考价值的资源。

### 如何使用 monorepo 来管理仓库？

我们使用了 [monorepo](https://danluu.com/monorepo/) 的方式来管理我们的仓库。这意味着我们的仓库中包含多个独立的包，这样做的好处是可以方便进行联调和测试。如果我们对代码进行了改动，可以一起跑测试用例，快速定位问题。

### 如何在多个包中共享依赖？

我们使用了 [`pnpm-workspace.yaml`](https://pnpm.io/zh/pnpm-workspace_yaml) 来帮助我们在多个包中共享依赖。安装完成后，你可以使用以下命令来操作：

- `pnpm start`：预览你的更改
- `pnpm lint`：检查代码风格
- `pnpm tsc`：检查 TypeScript 是否符合规范
- `pnpm test`：运行测试用例，检查代码是否通过测试
- `pnpm test:coverage`：计算测试覆盖率
- `pnpm build`：编译当前组件库

我们建议你在每次修改代码后运行 `pnpm test` 或使用 linter 来确保你的代码变更没有影响原有功能。同时，这也能保证你编写的每行代码都被正确地测试到，提升整个组件库的质量。

如果你要添加新功能，请务必在提交 pull request 前添加相应的测试用例，以确保你的代码没有问题。

### 如何确保代码质量和功能完整？

为了保证代码质量和功能完整，我们推荐运行 `pnpm test` 或前文提及的 linter 来检查代码。这样可以确保你的代码变更没有影响原有功能，并且能够及时发现潜在的问题。同时，我们建议在增加新功能之前先添加相应的测试用例，这样可以确保你的代码在未来的使用中不会出问题。

## 如何在 ProComponents 中覆盖 antd 的样式？

为了与 antd 的生态保持兼容性，在 ProComponents 中覆盖 antd 的样式时，我们需要使用 `${token.antCls}` 变量来生成类名。具体配置如下：

```tsx | pure
import { useContext } from 'react';
import { ConfigProvider } from 'antd';

const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
const prefixCls = getPrefixCls('pro-${package}');
```

其中，`${package}` 是指 ProComponents 中的包名，根据不同的组件包名进行替换即可。这样可以确保覆盖 antd 样式时的兼容性问题。