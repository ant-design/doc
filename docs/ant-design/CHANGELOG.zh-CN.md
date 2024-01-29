### Ant Design Image 组件的修复问题是什么？

Ant Design Image 组件在 `preview.getContainer` 的值为 false 时，无法正确进行内联渲染，导致无法显示图片的问题。

### Ant Design Modal 静态方法配置 `prefixCls` 的问题是什么？

当配置 Modal 静态方法的 `prefixCls` 时，会改变所有子元素的 `prefixCls`，从而导致动画效果丢失的问题。

### Ant Design Space.Compact 与 DatePicker 一起使用可能导致的问题是什么？

当 Ant Design Space.Compact 与 DatePicker 组件一起使用时，可能会导致 DatePicker 确认按钮样式错误的问题。

### Ant Design Tree 拖拽节点和展开收起按钮的鼠标 hover 样式的优化是什么？

针对 Ant Design Tree 组件，进行了拖拽节点和展开收起按钮的鼠标 hover 样式的优化，使得用户在操作节点时，能够更直观地进行交互。

## 问题1：Ant Design 5.13.1 版本的发布日期是什么时候？

答案：Ant Design 5.13.1 版本的发布日期是2024年01月15日。

## 问题2：Ant Design 5.13.1 版本中修复了什么问题？

答案：Ant Design 5.13.1 版本中修复了Checkbox组件在`@types/react` 16或17版本下Typescript报错的问题。该修复由[@crazyair](https://github.com/crazyair)在[#46962](https://github.com/ant-design/ant-design/pull/46962)中提交。

## 问题3：Ant Design 5.13.1 版本的更新说明中提到了什么？

答案：Ant Design 5.13.1 版本的更新说明中只提到了一个修复问题的内容，即修复了Checkbox组件在`@types/react` 16或17版本下Typescript报错的问题。该修复由[@crazyair](https://github.com/crazyair)在[#46962](https://github.com/ant-design/ant-design/pull/46962)中提交。

### Form 组件的 `variant` 属性用途是什么？

Form 组件新增了 `variant` 属性，该属性用于设置内部组件的形态变体。通过使用 `variant` 属性，可以为 Cascader、DatePicker、Select、TreeSelect、Input、InputNumber、Mentions 组件设置不同的形态变体。这样可以在不同的场景下改变组件的样式和行为，提供更丰富的用户交互体验。

相关链接：
- [PR #46573](https://github.com/ant-design/ant-design/pull/46573)
- [PR #46568](https://github.com/ant-design/ant-design/pull/46568)
- [PR #46549](https://github.com/ant-design/ant-design/pull/46549)
- [PR #46435](https://github.com/ant-design/ant-design/pull/46435)
- [PR #46381](https://github.com/ant-design/ant-design/pull/46381)
- [PR #46379](https://github.com/ant-design/ant-design/pull/46379)
- [PR #46337](https://github.com/ant-design/ant-design/pull/46337)

### QRCode 组件新增的 `status` 选项有什么作用？

QRCode 组件新增了一个名为 `status` 的选项，用于设置已扫描状态。这个新的选项允许开发者为 QRCode 组件设置已扫描后的样式或行为，以提供更好的用户反馈。该选项的添加使得 QRCode 组件更加灵活和易于定制。

相关链接：
- [PR #46704](https://github.com/ant-design/ant-design/pull/46704)

### Table 组件的 `hidden` 属性是用来做什么的？

Table 组件新增了一个名为 `hidden` 的属性，该属性可以用来设置隐藏列。通过设置 `hidden` 属性，开发者可以在 Table 组件中选择性地隐藏某些列，使表格只显示需要展示的数据。这样可以提升表格的可读性和用户体验。

相关链接：
- [PR #46957](https://github.com/ant-design/ant-design/pull/46957)
- [Contributor: madocto](https://github.com/madocto)

请注意，以上信息是基于源文档中的原始信息生成的 QA 文档，可能需要进一步的理解和确认。

### Ant Design 5.12.8 修复的 Upload.Dragger 的问题是什么？

Ant Design 5.12.8 修复了 Upload.Dragger 内容不居中和多余的 focus 样式的问题。修复详情请参考 pull request [#46810](https://github.com/ant-design/ant-design/pull/46810)。

### Ant Design 5.12.8 修复了哪个组件的配置问题？

Ant Design 5.12.8 修复了 Popconfirm 组件配置空的 `okText` 和 `cancelText` 时不会被预设 locale 兜底的问题。修复详情请参考 pull request [#46812](https://github.com/ant-design/ant-design/pull/46812)。

### Ant Design 5.12.8 修复了哪个组件的样式问题？

Ant Design 5.12.8 修复了 Progress 组件线性模式圆角无法覆盖的问题。修复详情请参考 pull request [#46789](https://github.com/ant-design/ant-design/pull/46789)。

### 5.12.7 版本有哪些修复？

5.12.7 版本中修复了以下两个问题：

1. 修复了升级 `@ctrl/tinycolor@4.0.2` 导致的错误。该修复相关的问题链接为 [#46744](https://github.com/ant-design/ant-design/pull/46744)，修复者为 [@MadCcc](https://github.com/MadCcc)。

2. 修复了 Mentions 选项高度偏大的问题。该修复相关的问题链接为 [#46737](https://github.com/ant-design/ant-design/pull/46737)。

### 5.12.7 版本什么时候发布的？

5.12.7 版本是在 `2024-01-02` 发布的。

### 为什么要修复 `@ctrl/tinycolor@4.0.2` 导致的错误？

修复 `@ctrl/tinycolor@4.0.2` 导致的错误是为了解决相关问题，并确保在使用该版本时能够正常运行应用程序。具体修复的内容可以在问题链接 [#46744](https://github.com/ant-design/ant-design/pull/46744) 中查看。

### Mentions 选项高度偏大的问题修复了什么？

Mentions 选项高度偏大的问题修复是为了解决该问题，并确保在使用 Mentions 时显示的选项高度正确。修复的具体内容可以在问题链接 [#46737](https://github.com/ant-design/ant-design/pull/46737) 中找到更多信息。

### 5.12.6版本更新内容

#### Upload组件问题修复

修复了当Upload组件包裹Button时，使用Tab键会聚焦两次的问题。详情请查看[#46432](https://github.com/ant-design/ant-design/pull/46432)。

#### Modal样式问题修复

修复了Modal在`footer`内部使用Button可能出现重复边距样式的问题。详情请查看[#46702](https://github.com/ant-design/ant-design/pull/46702)。

#### Select组件问题修复和优化

- 修复了Select组件在某些条件下滚动条不显示的问题。详情请查看[#46696](https://github.com/ant-design/ant-design/pull/46696)。贡献者：[@MadCcc](https://github.com/MadCcc)。
- 优化了Select组件在多选时选项的样式。详情请查看[#46646](https://github.com/ant-design/ant-design/pull/46646)。贡献者：[@MadCcc](https://github.com/MadCcc)。

#### Tree组件问题修复和样式优化

- 修复了Tree组件在某些条件下滚动条不显示的问题。详情请查看[#46672](https://github.com/ant-design/ant-design/pull/46672)。贡献者：[@yyz945947732](https://github.com/yyz945947732)。
- 优化了Tree组件的TreeNode节点聚焦样式。详情请查看[#46608](https://github.com/ant-design/ant-design/pull/46608)。贡献者：[@MadCcc](https://github.com/MadCcc)。

#### Layout.Sider问题修复

修复了触发打印时，Layout.Sider会收起的问题。详情请查看[#46650](https://github.com/ant-design/ant-design/pull/46650)。贡献者：[@anilpixel](https://github.com/anilpixel)。

#### Table边缘阴影问题修复

修复了Table边缘阴影超出Table高度的问题。详情请查看[#46644](https://github.com/ant-design/ant-design/pull/46644)。贡献者：[@Fatpandac](https://github.com/Fatpandac)。

#### Typography.Text省略模式问题修复

修复了Typography.Text在省略模式下修改宽度时，Tooltip不会触发的问题。详情请查看[#46613](https://github.com/ant-design/ant-design/pull/46613)。贡献者：[@linxianxi](https://github.com/linxianxi)。

#### Tooltip和Popover样式问题修复

修复了Tooltip、Popover等弹出组件嵌套使用时的箭头样式问题。详情请查看[#46294](https://github.com/ant-design/ant-design/pull/46294)。贡献者：[@bestlyg](https://github.com/bestlyg)。

#### TypeScript类型导出修复

修复了ConfigProvider导出`ConfigProviderProps`类型的问题。详情请查看[#46605](https://github.com/ant-design/ant-design/pull/46605)。贡献者：[@li-jia-nan](https://github.com/li-jia-nan)。

### 修复 Tabs 在可编辑模式下只剩新增按钮时的样式问题是如何实现的？

在 5.12.5 版本中，修复了 Tabs 在可编辑模式下只剩新增按钮时的样式问题。修复的方法是通过修复样式代码，确保在这种情况下样式能够正确渲染。具体的修复过程可以查看修复请求的链接[#46585](https://github.com/ant-design/ant-design/pull/46585)。修复操作是由开发者[@hzyhbk](https://github.com/hzyhbk)完成的。


### 在 5.12.5 版本中如何解决了 Progress `strokeLinecap` 不生效的问题？

在 5.12.5 版本中，修复了 Progress 组件中 `strokeLinecap` 不生效的问题。修复的方法是在相关代码中添加必要的逻辑，以确保 `strokeLinecap` 属性能够正确生效。具体的修复过程可以查看修复请求的链接[#46551](https://github.com/ant-design/ant-design/pull/46551)。修复操作是由开发者[@ZN1996](https://github.com/ZN1996)完成的。


### 如何解决了 ColorPicker 配置 `prefixCls` 不生效的问题？

在 5.12.5 版本中，修复了 ColorPicker 组件中配置 `prefixCls` 不生效的问题。修复的方法是在相关代码中检查并正确处理 `prefixCls` 配置，以确保其能够生效。具体的修复过程可以查看修复请求的链接[#46561](https://github.com/ant-design/ant-design/pull/46561)。修复操作是由开发者[@ZN1996](https://github.com/ZN1996)完成的。

### Ant Design 5.12.3 发布了哪些修复和改进的内容？

Ant Design 5.12.3 主要包含以下修复和改进的内容：

- 修复了 Tag 组件在 SSR 场景下的样式丢失问题。
- 修复了 Upload 组件的 `disabled` 属性对下载按钮无效的问题。
- 对 Upload.Dragger 组件增加了水平内边距。
- 修复了 Upload 组件的 `actions` 的颜色问题。
- 修复了 Form 组件使用 `getValueProps` 展示值无法更新的问题。
- 修复了 Checkbox 组件自定义 `token.lineWidth` 时勾选箭头错位的问题。
- 修复了 Select 组件定制 token 会导致 padding 失效的问题。
- 修复了 Message 在 `cssVar` 模式下覆盖组件 token 无效的问题。
- 修复了 Flex 组件应用额外样式的问题。

这些修复和改进的内容可以提升 Ant Design 组件库的稳定性和用户体验。

### Ant Design 5.12.3 的发布日期是什么时候？

Ant Design 5.12.3 的发布日期是 2023 年 12 月 18 日。

### Ant Design 5.12.3 版本的贡献者有哪些？

Ant Design 5.12.3 版本的修复和改进是由以下贡献者完成的：

- [@MadCcc](https://github.com/MadCcc)
- [@li-jia-nan](https://github.com/li-jia-nan)

他们的贡献为 Ant Design 的持续发展做出了重要的贡献。

### React 17以下使用webpack构建时报错`useId`找不到的问题如何修复？

问题：
在使用webpack构建React 17以下版本时，可能会遇到`useId`找不到的错误。

解决方法：
为了修复这个问题，您可以更新Ant Design到5.12.2版本。该版本修复了该问题。您可以通过以下步骤更新Ant Design：
1. 打开终端并导航到您的项目目录。
2. 运行以下命令以安装最新版本的Ant Design：
```bash
npm install antd@5.12.2
```
3. 更新您的项目中的其他依赖关系以解决潜在的兼容性问题。

相关问题链接：[#46261](https://github.com/ant-design/ant-design/pull/46261)

### Pagination在低版本浏览器上报错的问题如何修复？

问题：
在低版本浏览器上使用Pagination时可能会遇到报错。

解决方法：
为了修复这个问题，您可以更新Ant Design到5.12.2版本。该版本修复了Pagination在低版本浏览器上报错的问题。您可以通过以下步骤更新Ant Design：
1. 打开终端并导航到您的项目目录。
2. 运行以下命令以安装最新版本的Ant Design：
```bash
npm install antd@5.12.2
```
3. 更新您的项目中的其他依赖关系以解决潜在的兼容性问题。

相关问题链接：[react-component/pagination#545](https://github.com/react-component/pagination/pull/545)

### Pagination在`simple`模式下`current`受控选中分页不生效的问题如何修复？

问题：
在使用Pagination的`simple`模式且`current`属性为受控值时，选中的分页不生效。

解决方法：
为了修复这个问题，您可以更新Ant Design到5.12.2版本。该版本修复了Pagination在`simple`模式下`current`受控选中分页不生效的问题。您可以通过以下步骤更新Ant Design：
1. 打开终端并导航到您的项目目录。
2. 运行以下命令以安装最新版本的Ant Design：
```bash
npm install antd@5.12.2
```
3. 更新您的项目中的其他依赖关系以解决潜在的兼容性问题。

相关问题链接：[react-component/pagination#546](https://github.com/react-component/pagination/pull/546)

### Ant Design 5.12.1 版本有哪些改动？
Ant Design 5.12.1 版本在 `2023-12-04` 发布，其中包括以下改动：

- 修复了转换 token 到 less 变量时可能出现丢失的问题。该修复在 GitHub 上的 [#46250](https://github.com/ant-design/ant-design/pull/46250) 提交中进行了说明。

- 修复了当 Notification 的标题过长时与关闭图标重叠的问题。该修复在 GitHub 上的 [#46211](https://github.com/ant-design/ant-design/pull/46211) 提交中进行了说明，由 [@zh-lx](https://github.com/zh-lx) 贡献。

### Ant Design 5.12.1 版本的修复主要解决了哪些问题？
Ant Design 5.12.1 版本主要修复了以下问题：

1. 修复了转换 token 到 less 变量时可能出现丢失的问题。详细信息可以在 GitHub 上的 [#46250](https://github.com/ant-design/ant-design/pull/46250) 提交中找到。

2. 修复了当 Notification 的标题过长时与关闭图标重叠的问题。详细信息可以在 GitHub 上的 [#46211](https://github.com/ant-design/ant-design/pull/46211) 提交中找到，此修复由 [@zh-lx](https://github.com/zh-lx) 贡献。

### 如何安装 Ant Design 5.12.1 版本？
你可以通过以下方式安装 Ant Design 5.12.1 版本：

```bash
npm install antd@5.12.1
```

确保在你的项目中包含了 `antd` 包，并将版本号设置为 `5.12.1`。

请注意，你需要事先配置好 Node.js 和 npm 环境，并且你的项目已经安装了这些依赖。

希望这个信息可以帮助到你！如果有任何其他问题，请随时提问。

### Ant Design 5.x 中的 CSS 变量模式是从哪个版本开始支持的？

Ant Design 5.x 的 CSS 变量模式是从版本 5.12.0 开始重新支持的功能。

### Ant Design 5.x 的 CSS 变量模式有什么优点？

Ant Design 5.x 的 CSS 变量模式可以减少样式体积，不同主题下的样式可以共享，提升主题切换的性能。

### Ant Design 5.x 中的 CSS 变量模式有哪些具体的功能更新？

Ant Design 5.x 中的 CSS 变量模式带来了以下功能更新：

- Component Token 支持 CSS 变量模式
- rc-pagination 重构为 FC
- Form.useWatch 支持 selector 函数参数调用
- Slider 组件支持 onChangeComplete 事件，并废弃 onAfterChange
- Tabs 配置项 items 支持 icon 属性
- Tour 支持 getPopupContainer 属性
- Switch 支持 value 和 defaultValue 属性
- Progress 进度条的视觉效果修复
- Form tooltip 图标触发 Switch 切换的问题修复
- Notification 图标行高为 0 的问题修复
- Button 按钮支持自定义渐变色风格
- Alert 背景色的渐变色定义
- InputNumber 在 Space.Compact 下使用样式问题修复
- TypeScript 中 FloatButton 的类型定义更新，透出原生事件处理函数类型

### 修复了什么问题？

修复了打包 `dist` 产物错误。

### 修复人是谁？

修复人是 [@MadCcc](https://github.com/MadCcc)。

### 这个修复是在什么时候发布的？

这个修复是在版本 5.11.5 中发布的。

### 修复了哪个 Issue？

修复了 Issue [#46103](https://github.com/ant-design/ant-design/pull/46103)。

---

### 修复了什么问题？

修复了 DatePicker 禁用状态下的悬浮样式。

### 修复人是谁？

修复人是 [@crazyair](https://github.com/crazyair)。

### 这个修复是在什么时候发布的？

这个修复是在版本 5.11.5 中发布的。

### 修复了哪个 Issue？

修复了 Issue [#45940](https://github.com/ant-design/ant-design/pull/45940)。

---

### 版本号是多少？

版本号是 5.11.5。

### 发布日期是什么时候？

发布日期是 `2023-11-27`。

### Image 嵌套在 Modal 中设置 z-index 异常的问题是如何修复的？

Image 在嵌套 Modal 中设置 `z-index` 异常的问题修复自 Ant Design 5.11.4 版本。此修复是通过 [#46035](https://github.com/ant-design/ant-design/pull/46035) PR 实现的。修复后，Image 在嵌套 Modal 中设置 `z-index` 将不再出现异常。

### Button 禁用的链接按钮右键点击时会有打开新链接选项的问题是如何修复的？

Button 禁用的链接按钮右键点击时会有打开新链接选项的问题修复自 Ant Design 5.11.4 版本。此修复是通过 [#46021](https://github.com/ant-design/ant-design/pull/46021) PR 实现的。修复后，禁用的链接按钮右键点击不再会出现打开新链接选项。

### Card 内部方法 `getAction` 为什么被重构为函数组件？

Card 内部方法 `getAction` 被重构为函数组件自 Ant Design 5.11.4 版本开始。此重构是通过 [#46032](https://github.com/ant-design/ant-design/pull/46032) PR 实现的。重构后，Card 内部的 `getAction` 方法被转换为函数组件形式，提升了代码的可维护性和可读性。

### Card 在 Rollup 中会出现 `invalid annotation` 警告问题是如何解决的？

Card 在 Rollup 中会出现 `invalid annotation` 警告问题解决自 Ant Design 5.11.4 版本。此修复是通过 [#46024](https://github.com/ant-design/ant-design/pull/46024) PR 实现的。修复后，Card 在 Rollup 中不再会出现 `invalid annotation` 警告问题。

### Radio 和 Checkbox 组件的 `required` 属性的类型定义是如何导出的？

Radio 和 Checkbox 组件的 `required` 属性的类型定义从 Ant Design 5.11.4 版本开始导出。此导出是通过 [#46028](https://github.com/ant-design/ant-design/pull/46028) PR 实现的。导出后，Radio 和 Checkbox 组件的 `required` 属性的类型定义可供开发者使用。该修复由 [@nnmax](https://github.com/nnmax) 贡献。

# 问题 1：
Ant Design 5.11.3 更新了哪些内容？

回答 1：
Ant Design 5.11.3 的更新内容如下：
- 修复了 Modal 静态方法创建 `zIndex` 过高会覆盖其他弹出内容的问题。
- Image 预览支持移动触摸事件交互。
- 修复了 Image 预览在嵌套弹框中 `z-index` 设置不正确的问题。
- 修复了 Collapse 可折叠区域鼠标 `hover` 样式问题。
- 修复了 ColorPicker 不支持 Form 组件的禁用问题。
- 修复了 Typography.Text `code` 在 Layout 下开启 `ellipsis` 时 tooltip 无效的问题。
- 修复了 Select 搜索框在 Safari 下显示多余的 🔍 图标。
- 删除了 Rate 组件无用样式。
- UMD 版本 `antd.js` 现在会优先使用全局的 `@ant-design/cssinjs` 依赖。
- 补充了 `eu_ES` 国际化内容。

# 问题 2：
Ant Design 5.11.3 修复了哪些问题？

回答 2：
Ant Design 5.11.3 修复的问题如下：
- Modal 静态方法创建 `zIndex` 过高会覆盖其他弹出内容的问题（#46012）。
- Image 预览在嵌套弹框中 `z-index` 设置不正确的问题（#45979）。
- Collapse 可折叠区域鼠标 `hover` 样式问题（#45994）。
- ColorPicker 不支持 Form 组件的禁用问题（#45978）。
- Typography.Text `code` 在 Layout 下开启 `ellipsis` 时 tooltip 无效的问题（#45962）。
- Select 搜索框在 Safari 下显示多余的 🔍 图标（#46008）。
- Rate 组件无用样式被删除（#45927）。
- UMD 版本 `antd.js` 现在会优先使用全局的 `@ant-design/cssinjs` 依赖（#46009）。
- 补充了 `eu_ES` 国际化内容（#45928）。

# 问题 3：
Ant Design 5.11.3 添加了哪些新功能？

回答 3：
在 Ant Design 5.11.3 版本中，添加了以下新功能：
- Image 预览支持移动触摸事件交互（#45989）。

Q: 在 Ant Design 5.11.2 版本的更新中，有哪些新的功能添加了？

A: 在 Ant Design 5.11.2 版本的更新中，新增了以下功能：
- 放开了 Table `virtual` 下 `components` 的限制，现在除了 `components.body` 都可以自定义。
- 修复了 Button 带有链接且禁用时可以被聚焦到的问题。
- 修复了 `zIndex` 逻辑，解决了多层 Modal 打开时，message 与 notification 被遮盖的问题。
- 修复了 QRCode 设置 `style.padding` 时无效的问题。
- 优化了 Carousel 切换条圆角样式。

相关链接：
- [Table `virtual` 下 `components` 的限制放开](https://github.com/ant-design/ant-design/pull/45857)
- [Button 带有链接且禁用时可以被聚焦到的问题修复](https://github.com/ant-design/ant-design/pull/45910)
- [多层 Modal 打开时 message 与 notification 被遮盖的问题修复](https://github.com/ant-design/ant-design/pull/45911)
- [QRCode 设置 `style.padding` 时无效问题修复](https://github.com/ant-design/ant-design/pull/45815)
- [Carousel 切换条圆角样式优化](https://github.com/ant-design/ant-design/pull/45817)

---

Q: 在 Ant Design 5.11.2 版本的更新中，有哪些 bug 被修复了？

A: 在 Ant Design 5.11.2 版本的更新中，修复了以下 bug：
- 修复了 Button 带有链接且禁用时可以被聚焦到的问题。
- 修复了 `zIndex` 逻辑，解决了多层 Modal 打开时，message 与 notification 被遮盖的问题。
- 修复了 QRCode 设置 `style.padding` 时无效的问题。

相关链接：
- [Button 带有链接且禁用时可以被聚焦到的问题修复](https://github.com/ant-design/ant-design/pull/45910)
- [多层 Modal 打开时 message 与 notification 被遮盖的问题修复](https://github.com/ant-design/ant-design/pull/45911)
- [QRCode 设置 `style.padding` 时无效问题修复](https://github.com/ant-design/ant-design/pull/45815)

---

Q: 在 Ant Design 5.11.2 版本的更新中，有哪些 TypeScript 相关的更新？

A: 在 Ant Design 5.11.2 版本的更新中，相关的 TypeScript 更新如下：
- 优化了 List 属性 `gutter` 的类型定义。

相关链接：
- [List 属性 `gutter` 类型定义的优化](https://github.com/ant-design/ant-design/pull/45791)

问题一：

Ant Design 5.11.1 更新了哪些 bug 修复？

回答一：

Ant Design 5.11.1 更新了以下 bug 修复：

- 修复了 Dropdown 在嵌套列表时 `zIndex` 错误的问题。
- 修复了 Upload 显式指定 `showRemoveIcon: true` 时删除图标未显示的问题。
- 修复了 Descriptions 使用 `children` 结构语法糖时，会丢失 Descriptions.Item 的 `key` 的问题。
- 修复了 Message 组件在组件范围设置全局 `token` 无效的问题。
- 修复了 Popconfirm 不兼容 `visible` 的问题。
- 修复了默认 Tag 的背景颜色不正确的问题。
- 修复了 Notification 组件设置 `style.width` 无效的问题。
- 修复了 App 设置 `component=false` 时，会报非预期的属性警告的问题。

问题二：

Ant Design 5.11.1 更新了哪些 TypeScript 改进？

回答二：

Ant Design 5.11.1 更新了以下 TypeScript 改进：

- App 组件支持泛型定义。

问题三：

Ant Design 5.11.1 的发布日期是什么时候？

回答三：

Ant Design 5.11.1 的发布日期是 `2023-11-09`。

## 问题一：Ant Design 5.11.0 中的 Slider 组件有哪些改进？

**回答：**

Ant Design 5.11.0 版本中，Slider 组件有以下改进：

- 新增了滑块聚焦时显示 Tooltip 的功能（PR：[#45653](https://github.com/ant-design/ant-design/pull/45653)）。
- 优化了 Slider 的交互体验，现在可以直接点击轨道来拖拽滑块了（PR：[#45651](https://github.com/ant-design/ant-design/pull/45651)）。

## 问题二：Ant Design 5.11.0 中的 InputNumber 组件有哪些新功能和 bug 修复？

**回答：**

Ant Design 5.11.0 版本中，InputNumber 组件有以下新功能和 bug 修复：

- 新增了 `changeOnBlur` 属性，可以在失去焦点时不触发 `onChange` 事件（PR：[#45395](https://github.com/ant-design/ant-design/pull/45395)）。
- 修复了在 Form 组件中使用 InputNumber 组件并启用 `hasFeedback` 时，反馈图标会导致 InputNumber 失去焦点的问题（PR：[#45632](https://github.com/ant-design/ant-design/pull/45632)）。
- 修复了 InputNumber 动态改变 `formatter` 无效的问题（PR：[#45325](https://github.com/ant-design/ant-design/pull/45325)）。

## 问题三：Ant Design 5.11.0 中的 Table 组件有哪些改进？

**回答：**

Ant Design 5.11.0 版本中，Table 组件有以下改进：

- ColumnTitle 支持传入 render 方法（PR：[#41937](https://github.com/ant-design/ant-design/pull/41937)）。
- 重构了 Table 的 ref，现在支持通过 `scrollTo` 方法滚动到指定的 key、index 或 top（PR：[#45245](https://github.com/ant-design/ant-design/pull/45245)）。

以上是 Ant Design 5.11.0 中 Table 组件的改进内容。

### 修复 Typography.Text 同时启用 `ellipsis` 和 `code` 时丢失右边框样式的问题。

在 Ant Design 5.10.3 版本中，修复了一个问题，即在启用了 `ellipsis` 和 `code` 的情况下，Typography.Text 组件丢失了右边框样式。该修复是通过修复一个 PR [链接](https://github.com/ant-design/ant-design/pull/45575) 来实现的。

### 调整 TimePicker 滚动条样式

在 Ant Design 5.10.3 版本中，调整了 TimePicker 组件的滚动条样式。该调整是通过修复一个 PR [链接](https://github.com/ant-design/ant-design/pull/45478) 来实现的。这个 PR 是由用户 *GeorgeHcc* 提交的，还有一个相关的 PR [链接](https://github.com/ant-design/ant-design/pull/45586)。

### 修复 Watermark 组件 `gap` 在数组中含有 `undefined` 时没有默认值的问题

在 Ant Design 5.10.3 版本中，修复了 Watermark 组件在数组中含有 `undefined` 时没有默认值的问题。该修复是通过修复一个 PR [链接](https://github.com/ant-design/ant-design/pull/45537) 来实现的。这个 PR 是由用户 *MadCcc* 提交的。

以上是 Ant Design 5.10.3 版本的一些修复和调整。希望以上信息对你有所帮助！

### Ant Design 5.10.2 更新内容

#### Layout

Q: 在 Ant Design 5.10.2 中，Layout 组件有哪些变化？

A: Layout 组件支持自动检测 `hasSider`，以防止在 SSR（服务端渲染）场景下出现闪烁问题。

#### FloatButton.BackTop

Q: Ant Design 5.10.2 中的 FloatButton.BackTop 组件有什么修复？

A: FloatButton.BackTop 组件修复了一个显示 `findDOMNode is deprecated in StrictMode` 警告的问题。

#### ColorPicker

Q: Ant Design 5.10.2 修复了 ColorPicker 组件的什么问题？

A: ColorPicker 组件修复了不支持 `id` 和 `data-*` 属性的问题。

#### Table

Q: Table 组件在 Ant Design 5.10.2 中有什么修复？

A: Table 组件修复了当 `column.showSorterTooltip` 是一个对象时排序 tooltip 不显示的问题。

#### Form

Q: Ant Design 5.10.2 中的 Form 组件修复了什么问题？

A: Form 组件修复了在小屏幕上元素重叠的问题，该问题发生在 `inline` 模式下。

#### Upload.Dragger

Q: 在 Ant Design 5.10.2 中，Upload.Dragger 组件有何变化？

A: Upload.Dragger 组件移除了重复的 `disabled` 样式。

#### TypeScript

Q: TypeScript 在 Ant Design 5.10.2 中有什么更新？

A: TypeScript 定义中修复了 Table `pagination.position` 不支持 `'none'` 的问题。

#### RTL

Q: RTL（从右到左）模式在 Ant Design 5.10.2 中有何修复？

A: RTL 模式下，Notification 组件修复了边缘间距错误的问题。

### 优化 CSS-in-JS Design Token 缓存命中性能如何实现？

在 Ant Design 5.10.1 版本中，通过优化 CSS-in-JS Design Token 缓存命中性能来提升性能。这项优化是通过修改代码实现的，具体的修改信息可以查看 [PR #45302](https://github.com/ant-design/ant-design/pull/45302)。

### Checkbox.Group 与 Radio.Group 如何添加 id 属性支持？

在 Ant Design 5.10.1 版本中，为 Checkbox.Group 与 Radio.Group 的 `options` 添加了 `id` 属性支持。这样，我们可以给选项设置具有唯一性的 `id` 属性。这个改动是通过修改代码实现的，具体的修改信息可以查看 [PR #45287](https://github.com/ant-design/ant-design/pull/45287)。

### Affix 组件的 target 如何生效？

在 Ant Design 5.10.1 版本中，修复了 Affix 组件设置 `target` 失效的问题。这个问题是由于之前的代码逻辑错误导致的，现在已经修复。修复的细节可以查看 [PR #45314](https://github.com/ant-design/ant-design/pull/45314)，此次修复由开发者 @mingming-ma 提交。


### Ant Design 5.10.0 新特性

- 新增了 Flex 组件，用于设置弹性布局。
- Notification 组件支持 `stack` 配置，默认超过三个以上的提示会堆叠起来。
- 更新了 Input、InputNumber、Select、Cascader、TreeSelect、DatePicker、ColorPicker 的激活态样式。
- Watermark 组件支持通过 `textAlign` 设置文本对齐方向。
- Slider 组件支持任意节点数，并且将 xxxStyle 迁移至语义化 `styles` 和 `classNames` 属性中。
- Cascader 支持 Cascader.Panel 组件供内联使用。
- Tooltip 添加 `fresh` 属性以支持在关闭时仍然需要更新内容的场景。
- Drawer 支持通过 `classNames` 自定义内置模块的 `className`。
- ConfigProvider 支持 `warning` 属性以配置警告等级（如过滤掉废弃 API 警告）。
- Modal 支持通过 `classNames` 自定义内置模块的 `className`。
- 修复了 Menu.Item 嵌套的 Typography 其 `ellipsis` 为 true 时无法垂直居中的问题。
- 修复了 Select 内部 input 无法应用 fontFamily 的问题。
- 修复了 InputNumber 在 Space.Compact 中使用 `addonBefore` 时的边框问题。
- 修复了 Tag.CheckableTag 不支持 ref 的问题。
- 修复了 Avatar.Group 组件内的字体不支持响应式的问题。
- 重构了 Affix 组件为函数组件。
- Popover 组件废弃 `minWidth` 组件 token，并添加 `titleMinWidth` 作为替代。
- 新增了输入框（Input）的 `hoverBg` `activeBg` token 用以设置输入框 hover 和 激活时背景颜色。
- 新增了 Descriptions 的 `titleColor` `contentColor` token 用以设置标题颜色和内容区域文字颜色。
- 修复了 Input 组件 Token `addonBg` 失效的问题。
- TypeScript 中导出了 Notification 的 ArgsProps 类型为 NotificationArgsProps。
- 为 pl_PL 补充了 Tour 的国际化。
- 优化了 ko_KR 的国际化。

### Ant Design 5.10.0 Bug 修复

- 修复了 Modal.confirm `description` 是长文本时的内容溢出问题。

### Ant Design 5.10.0 其他更新

- 修复了 Menu.Item 嵌套的 Typography 其 `ellipsis` 为 true 时无法垂直居中的问题。
- 修复了 Select 内部 input 无法应用 fontFamily 的问题。
- 修复了 InputNumber 在 Space.Compact 中使用 `addonBefore` 时的边框问题。
- 修复了 Tag.CheckableTag 不支持 ref 的问题。
- 修复了 Avatar.Group 组件内的字体不支持响应式的问题。
- 重构了 Affix 组件为函数组件。
- Popover 组件废弃 `minWidth` 组件 token，并添加 `titleMinWidth` 作为替代。
- 新增了输入框（Input）的 `hoverBg` `activeBg` token 用以设置输入框 hover 和 激活时背景颜色。
- 新增了 Descriptions 的 `titleColor` `contentColor` token 用以设置标题颜色和内容区域文字颜色。
- 修复了 Input 组件 Token `addonBg` 失效的问题。
- TypeScript 中导出了 Notification 的 ArgsProps 类型为 NotificationArgsProps。
- 为 pl_PL 补充了 Tour 的国际化。
- 优化了 ko_KR 的国际化。

### Button 组件在什么情况下会丢失时间距离？
Button 组件在只有两个汉字且嵌套在多层 span 中的情况下会丢失时间距离。这个问题在 Ant Design 5.9.4 版本中已经修复，修复 PR 是 [#45126](https://github.com/ant-design/ant-design/pull/45126)，提交者是 [@MadCcc](https://github.com/MadCcc)。

### Button 组件在什么情况下会意外出现加载图标？
Button 组件在条件渲染时会出现意外加载图标的问题。这个问题在 Ant Design 5.9.4 版本中已经修复，修复 PR 是 [#45030](https://github.com/ant-design/ant-design/pull/45030)，提交者是 [@lzl0304](https://github.com/lzl0304)。

### Tour 组件在什么情况下 `step.type` 会无效？
Tour 组件在第一次展示时，`step.type` 会无效。这个问题在 Ant Design 5.9.4 版本中已经修复，修复 PR 是 [#45086](https://github.com/ant-design/ant-design/pull/45086)，提交者是 [@MadCcc](https://github.com/MadCcc)。

### Select 和 DatePicker 组件为什么没有使用 `fontFamily` token？
Select 和 DatePicker 组件在之前版本中没有使用 `fontFamily` token。这个问题在 Ant Design 5.9.4 版本中已经修复，修复 PR 是 [#45088](https://github.com/ant-design/ant-design/pull/45088)，提交者是 [@MadCcc](https://github.com/MadCcc)。

## QA 文档 1

### Tooltip 的更新是什么？

Tooltip 在版本 5.9.3 的更新中，删除了对 `disabled` 子元素额外包括 `span` 的逻辑，现在能够正确触发。具体的修改可以参考[#44895](https://github.com/ant-design/ant-design/pull/44895)。

### Popover 修复了什么问题？

在版本 5.9.3 中，修复了 Popover 在超出屏幕时不会自动调整偏移的问题。具体的修改可以参考[#45015](https://github.com/ant-design/ant-design/pull/45015)。

### Tooltip / Popover 修复了什么问题？

在版本 5.9.3 中，修复了 Tooltip / Popover 在内容高度变化时，位置会闪动的问题。具体的修改可以参考[#44976](https://github.com/ant-design/ant-design/pull/44976)。

## QA 文档 2

### ComponentToken 做了什么改动？

在版本 5.9.3 中，ComponentToken 移除了 `radiusBase` 必须小于 `16` 的限制。具体的修改可以参考[#44980](https://github.com/ant-design/ant-design/pull/44980)。

### Dropdown 的修复是针对什么问题？

在版本 5.9.3 中，修复了 Dropdown 通过 `dropdownRender` 渲染的子节点配置 `ref` 不生效的问题。具体的修改可以参考[#44971](https://github.com/ant-design/ant-design/pull/44971)。

### Table 修复了什么问题？

在版本 5.9.3 中，修复了 Table `cellPaddingBlock` 不生效的问题。具体的修改可以参考[#45040](https://github.com/ant-design/ant-design/pull/45040)。

## QA 文档 3

### Input 组件修复了什么问题？

在版本 5.9.3 中，修复了 Input 组件在小尺寸 `controlHeight` 下高度不正确的问题。具体的修改可以参考[#45048](https://github.com/ant-design/ant-design/pull/45048)。

### Typography 在版本 5.9.3 中修复了什么样式问题？

在版本 5.9.3 中，修复了 Typography 在设置 `fontSize` 为奇数时的样式问题。具体的修改可以参考[#45031](https://github.com/ant-design/ant-design/pull/45031)。

### TypeScript 的更新是什么？

在版本 5.9.3 中，修复了 `@types/react@18.2.22` React.Key 定义更新引发的问题。具体的修改可以参考[#44938](https://github.com/ant-design/ant-design/pull/44938)。

## 修复 Table 尺寸为 small 时选择列没有居中对齐的问题

在 Ant Design 5.9.2 版本中，修复了 Table 组件在使用 small 尺寸时，选择列没有居中对齐的问题。这个问题的修复记录在 GitHub 上的 Issue [#44922](https://github.com/ant-design/ant-design/pull/44922) 中。

## 修复 Select 组件在 label 内使用了 div 块级元素时的样式问题

在 Ant Design 5.9.2 版本中，修复了 Select 组件在 label 内使用了 div 块级元素时的样式问题。这个问题的修复记录在 GitHub 上的 Issue [#44927](https://github.com/ant-design/ant-design/pull/44927) 中。

## 修复 Modal 自定义 footer 时按钮内容丢失的问题

在 Ant Design 5.9.2 版本中，修复了 Modal 组件在自定义 footer 时按钮内容丢失的问题。这个问题的修复记录在 GitHub 上的 Issue [#44929](https://github.com/ant-design/ant-design/pull/44929) 中，修复者是 [@Wxh16144](https://github.com/Wxh16144)。

## 修复 notification 底部弹出动画的问题

在 Ant Design 5.9.2 版本中，修复了 notification 组件底部弹出动画的问题。这个问题的修复记录在 GitHub 上的 Issue [#44918](https://github.com/ant-design/ant-design/pull/44918) 中，修复者是 [@linxianxi](https://github.com/linxianxi)。

## 修复 Form.Item 组件有 `noStyle` 属性时没有继承上下文的反馈图标的问题

在 Ant Design 5.9.2 版本中，修复了 Form.Item 组件在设置了 `noStyle` 属性时没有继承上下文的反馈图标的问题。这个问题的修复记录在 GitHub 上的 Issue [#44937](https://github.com/ant-design/ant-design/pull/44937) 中。

## 修复小尺寸 Select 组件 `controlHeightSM` token 配置无效的问题。

### 问题描述
在 Ant Design 5.9.1 版本中，发现小尺寸的 Select 组件中的 `controlHeightSM` token 配置无效的问题。

### 解决方法
该问题已在 [#44859](https://github.com/ant-design/ant-design/pull/44859) 请求中修复。

### 贡献者
[@MadCcc](https://github.com/MadCcc)

## 修复 Rate 组件星星变换中心不在正中心的问题。

### 问题描述
在 Ant Design 5.9.1 版本中，Rate 组件的星星变换中心不在正中心的问题。

### 解决方法
该问题已在 [#44855](https://github.com/ant-design/ant-design/pull/44855) 请求中修复。

### 贡献者
[@MadCcc](https://github.com/MadCcc)

## 修复 DatePicker 组件 `dateTime` 模式切换输入框未触发 `onCalendarChange` 的问题。

### 问题描述
在 Ant Design 5.9.1 版本中，发现 DatePicker 组件的 `dateTime` 模式下切换输入框后未触发 `onCalendarChange` 的问题。

### 解决方法
该问题已在 [#44845](https://github.com/ant-design/ant-design/pull/44845) 请求中修复。

### 贡献者
[@Yuiai01](https://github.com/Yuiai01)

### Ant Design 5.9.0 更新了哪些内容？

- Table 支持 `virtual` 属性开启虚拟滚动。
- Form 的 `validateFields` 方法支持 `recursive` 参数，可以校验所有包含路径的字段。
- Form.Item 支持 `validateDebounce` 属性，用于配置校验防抖。
- Button 组件新增三个组件 token：`contentFontSize`、`contentFontSizeSM` 和 `contentFontSizeLG`，用于定制不同尺寸下的字体大小。
- Form 的 `requiredMark` 属性支持自定义渲染。
- Tabs 组件添加了新的组件 Token `itemColor`，用于控制常态 tab 的文本颜色。
- ColorPicker 组件支持 `defaultFormat` 属性。
- Form 新增 `feedbackIcons` 属性，并且 Form.Item 支持 `hasFeedback={{ icons: ... }}`，用于自定义校验图标。
- Segmented 组件新增了组件 Token `itemSelectedColor`。
- Modal 页脚的 `footer` 支持自定义函数渲染。
- Descriptions 的 `items.span` 支持响应式设置。
- Tabs 组件的 `indicatorSize` 可通过 ConfigProvider 全局配置。
- Transfer 组件的 `filterOption` 函数新增 `direction` 入参。
- Input.Search 组件在 `onSearch` 方法中接受 `source` 参数。
- Input 组件新增了组件 Token，用于定制激活态阴影。
- Radio 组件新增了组件 Token，用于定制填充按钮选中时的颜色。
- Tour 组件的间距支持横向偏移量。
- Tour 组件支持通过 `closeIcon` 来自定义关闭按钮。
- Avatar 组件支持使用 ConfigProvider 的 `componentSize` 配置 `size`。
- List 组件支持使用 ConfigProvider 的 `componentSize` 配置 `size`。
- Cascader 组件支持 `autoClearSearchValue` 属性。
- Upload、AutoComplete、Badge.Ribbon、Input.TextArea、RangePicker、TimePicker 组件添加了对 `rootClassName` 的支持。
- 重构了 Modal.confirm 结构，修复了 `width: fit-content` 导致宽度异常问题和大量文本下的样式断行问题，并将 confirm 样式抽离至懒加载以优化 SSR 下的样式尺寸。
- Progress 调整了 `circle` 和 `dashboard` 的线性渐变色为锥形渐变色。
- 修复了 DatePicker 组件自定义页脚样式问题。
- 修复了 ConfigProvider 的 `tag.className` 和 `tag.style` 无法作用于 Tag.CheckableTag 的问题。
- 修复了 Select 配置的 `getPopupContainer` 容器有 `transform: scale` 样式时，弹出框宽度与输入框不一致的情况。
- 修复了 Form.Item 配置 `noStyle` 时，被绑定的元素无法消费 `useStatus` 的问题。
- 修复了 Tag 被 Popover/Popconfirm 包裹时，Hover 会导致 `font-size` 错误的问题。
- 修复了 Input.Search 组合中，搜索按钮存在额外阴影的问题。
- 修复了 Modal 的 hooks 调用通过按键 `esc` 关闭时无法正确触发 await 的问题。
- 修复了 Space 的预设 `size` 不会跟随 Design Token 的问题，现在紧凑模式也会处理对应的间距数值。
- 修复了 Upload 组件点击某文件的下载按钮后，鼠标移出该文件时仍展示下载按钮的问题。
- 修复了在 FloatButton 组件中添加 `href` 后，在 FloatButton.Group 中间距失效的问题。
- 修复了 Button 的 `fontSizeSM` token 不生效的问题。
- Watermark 现在可以在嵌套的 Modal 和 Drawer 组件中生效。
- 迁移了 Alert、Tree、Cascader、Layout、Table、Modal、Drawer、Button、Switch、Select、Badge、Form、TimePicker、Spin、Input、Progress、Divider 的 less 变量到 Token。
- 移除了 Space 和 Grid 对于旧版 IE 浏览器的兼容逻辑，以减少打包产物体积。
- TypeScript 方面，从 Tree 中导出了 `BasicDataNode` 类型。

### Ant Design 5.9.0 的新特性有哪些？

- Table 组件新增了虚拟滚动的 `virtual` 属性。
- Form 组件的 `validateFields` 方法新增了 `recursive` 参数，可以校验所有包含路径的字段。
- Form.Item 组件新增了 `validateDebounce` 属性，用于配置校验防抖。
- Button 组件新增了三个组件 token：`contentFontSize`、`contentFontSizeSM` 和 `contentFontSizeLG`，用于定制不同尺寸下的字体大小。
- Form 组件的 `requiredMark` 属性支持自定义渲染。
- Tabs 组件添加了新的组件 Token `itemColor`，用于控制常态 tab 的文本颜色。
- ColorPicker 组件新增了 `defaultFormat` 属性。
- Form 新增了 `feedbackIcons` 属性，并且 Form.Item 支持 `hasFeedback={{ icons: ... }}`，用于自定义校验图标。
- Segmented 组件新增了组件 Token `itemSelectedColor`。
- Modal 页脚的 `footer` 支持自定义函数渲染。
- Descriptions 的 `items.span` 支持响应式设置。
- Tabs 组件的 `indicatorSize` 可通过 ConfigProvider 全局配置。
- Transfer 组件的 `filterOption` 函数新增 `direction` 入参。
- Input.Search 组件在 `onSearch` 方法中接受 `source` 参数。
- Input 组件新增了组件 Token，用于定制激活态阴影。
- Radio 组件新增了组件 Token，用于定制填充按钮选中时的颜色。
- Tour 组件的间距支持横向偏移量。
- Tour 组件支持通过 `closeIcon` 来自定义关闭按钮。
- Avatar 组件支持使用 ConfigProvider 的 `componentSize` 配置 `size`。
- List 组件支持使用 ConfigProvider 的 `componentSize` 配置 `size`。
- Cascader 组件支持 `autoClearSearchValue` 属性。
- Upload、AutoComplete、Badge.Ribbon、Input.TextArea、RangePicker、TimePicker 组件添加了对 `rootClassName` 的支持。
- Progress 调整了 `circle` 和 `dashboard` 的线性渐变色为锥形渐变色。
- DatePicker 组件修复了自定义页脚样式问题。
- ConfigProvider 的 `tag.className` 和 `tag.style` 现在可以作用于 Tag.CheckableTag。
- Select 配置的 `getPopupContainer` 容器不再影响弹出框宽度与输入框的一致性。
- Form.Item 配置 `noStyle` 时，被绑定的元素仍可以消费 `useStatus`。
- Tag 被 Popover/Popconfirm 包裹时，Hover 不会导致 `font-size` 错误。
- Input.Search 组合中，搜索按钮不会再存在额外阴影。
- Modal 的 hooks 调用通过按键 `esc` 关闭时会正确触发 await。
- Space 的预设 `size` 跟随 Design Token。
- Upload 组件下载按钮的显示和隐藏更加准确。
- FloatButton 组件中的链接按钮与间距的配置不再相互影响。
- Button 的 `fontSizeSM` token 生效。
- Watermark 可以在嵌套的 Modal 和 Drawer 组件中生效。

### Ant Design 5.9.0 的 bug 修复有哪些？

- 修复了 Form.Item 配置 `noStyle` 时，被绑定的元素无法消费 `useStatus` 的问题。
- 修复了 Tag 被 Popover/Pop

## 问：Ant Design 5.8.6 的更新内容有哪些？

答：Ant Design 5.8.6 的更新内容包括：

- 针对 CSSInJS 加载 styles 大小进行了优化，包括 Notification 和 Message 组件只有在展示时才会插入对应样式，剥离了 Tag 状态与预设颜色样式，现在只有在使用时才会生成它们，剥离了 Button 紧凑模式样式，现在只有在使用了 Space.Compact 的时候才会生成它们。
- 移除了`@ant-design/icons`依赖`lodash/camelCase`以优化 bundle size。
- 修复了 Form.Item 设置 `wrapperCol.span` 为 `0` 时，子元素不隐藏的问题。
- 修复了 Form `labelCol` 设置为 24 时，会使 `wrapperCol` 设置 24 失效的问题。
- 修复了 Watermark 组件在 `content` 是空字符串时报错的问题。
- 修复了 ColorPicker 禁用时依然能弹出选择窗口的问题。
- 修复了 Transfer 点击 Checkbox 时有时会触发两次选择行为的问题。
- 修复了 Typography 使用 `ellipsis` 时滚动条闪动的问题。
- 修复了 Slider 滑块可拖拽区域范围异常的问题，并优化了 Slider `aria-orientation` 可访问性属性。
- 修复了 Steps `type="nav"` 垂直导航步骤条的最后一项箭头没隐藏的问题。
- 修复了 TypeScript 中 Upload 文件状态定义，移除了未使用过的 `success` 状态。

## 问：Ant Design 5.8.6 移除了哪个依赖，是为了优化 bundle size？

答：Ant Design 5.8.6 移除了`@ant-design/icons`依赖`lodash/camelCase`以优化 bundle size。

## 问：Ant Design 5.8.6 修复了哪些 Form 相关问题？

答：Ant Design 5.8.6 修复了以下 Form 相关问题：

1. 修复了 Form.Item 设置 `wrapperCol.span` 为 `0` 时，子元素不隐藏的问题。
2. 修复了 Form `labelCol` 设置为 24 时，会使 `wrapperCol` 设置 24 失效的问题。

## 问：Ant Design 5.8.6 修复了哪些 Slider 相关问题？

答：Ant Design 5.8.6 修复了以下 Slider 相关问题：

1. 修复了 Slider 滑块可拖拽区域范围异常的问题。
2. 优化了 Slider `aria-orientation` 可访问性属性。

### 问题1：Ant Design 5.8.5 版本的更新内容是什么？

回答：Ant Design 5.8.5 版本的更新内容包括：

- 重构了 Badge 样式逻辑，将 Ribbon 样式抽离以降低 SSR 内联样式尺寸。
- 修复了在 App 组件下使用 `@ant-design/icons` 的图标样式异常的问题。
- 修复了 Carousel 组件垂直方向拖动失效的问题。
- 修复了 Tour 面板使用的 design token 错误的问题。
- 修复了 Form `wrapperCol` 配置响应式 `xs` 属性无效的问题。
- 修复了 ColorPicker 中重复 `key` 的问题。
- 修复了 Radio 组件组合 Tree 组件后失效的问题。
- 修复了 Table 组件 `filterDropdown` 不支持 `ref` 时报错的问题。
- 修复了 Form `inline` 布局在校验失败时出现额外空行的问题。
- 修复了 DatePicker 中 `showTime` 为 true 且 `format` 为数组时，组件报错。
- 修复了 Watermark 中 `content` 内容过长时无法完整显示的问题。
- TypeScript 方面，修复了 Dropdown 组件中 `align` 属性的类型错误。

### 问题2：Ant Design 5.8.5 版本的更新中有哪些 bug 修复？

回答：Ant Design 5.8.5 版本的更新中包含以下 bug 修复：

- 修复了 App 组件下使用 `@ant-design/icons` 的图标样式异常的问题。
- 修复了 Carousel 组件垂直方向拖动失效的问题。
- 修复了 Tour 面板使用的 design token 错误的问题。
- 修复了 Form `wrapperCol` 配置响应式 `xs` 属性无效的问题。
- 修复了 ColorPicker 中重复 `key` 的问题。
- 修复了 Radio 组件组合 Tree 组件后失效的问题。
- 修复了 Table 组件 `filterDropdown` 不支持 `ref` 时报错的问题。
- 修复了 Form `inline` 布局在校验失败时出现额外空行的问题。
- 修复了 DatePicker 中 `showTime` 为 true 且 `format` 为数组时，组件报错。
- 修复了 Watermark 中 `content` 内容过长时无法完整显示的问题。

### 问题3：Ant Design 5.8.5 版本对 TypeScript 有哪些改进？

回答：Ant Design 5.8.5 版本在 TypeScript 方面有以下改进：

- 修复了 Dropdown 组件中 `align` 属性的类型错误。

### 修复 ColorPicker 色值输入框的问题

在 Ant Design 5.8.4 版本中，修复了 ColorPicker 色值输入框输入小写英文字母时光标跳动的问题。这个问题是由于输入小写英文字母时，光标在输入框中跳动的现象。修复这个问题的 Pull Request 是 [#44137](https://github.com/ant-design/ant-design/pull/44137)，贡献者是 [@gouge666](https://github.com/gouge666)。

### 修复 ColorPicker 样式变形的问题

Ant Design 5.8.4 版本中，修复了 ColorPicker 在不同尺寸下样式变形的问题。在之前的版本中，ColorPicker 在不同的尺寸下可能会出现样式上的变形。修复这个问题的 Pull Request 是 [#44273](https://github.com/ant-design/ant-design/pull/44273)，贡献者是 [@kouchao](https://github.com/kouchao)。

### 修复 Descriptions 错误提示的问题

针对 Descriptions 组件，Ant Design 5.8.4 版本修复了抛出 `key is not a prop` 的错误提示问题。在之前的版本中，使用 Descriptions 组件时可能会出现这个错误提示。修复这个问题的 Pull Request 是 [#44278](https://github.com/ant-design/ant-design/pull/44278)，贡献者是 [@RedJue](https://github.com/RedJue)。

这是基于 Ant Design 5.8.4 版本发布的一些修复信息生成的 QA 文档，包含了修复 ColorPicker 色值输入框问题、修复 ColorPicker 样式变形问题和修复 Descriptions 错误提示问题等内容。

### DatePicker 的问题修复有哪些？

DatePicker 组件在 5.8.3 版本中进行了以下问题修复：

- 修复了 DatePicker 在 `open` 和 `defaultOpen` 为 `true` 时选中时间不会切换面板的问题。具体修复信息可以查看 PR [#44105](https://github.com/ant-design/ant-design/pull/44105) ，该 PR 由 [@Yuiai01](https://github.com/Yuiai01) 提交。
- 修复了 DatePicker 和 RangePicker 禁用 `allowClear` 时仍然展示清除按钮的问题。具体修复信息可以查看 PR [#44015](https://github.com/ant-design/ant-design/pull/44015) ，该 PR 由 [@bartpio](https://github.com/bartpio) 提交。

这些修复解决了 DatePicker 组件在特定情况下的功能问题，提高了组件的稳定性和易用性。

### Carousel 的问题修复有哪些？

Carousel 组件在 5.8.3 版本中进行了以下问题修复：

- 修复了 Carousel 不支持 `id` 属性的问题。具体修复信息可以查看 PR [#44079](https://github.com/ant-design/ant-design/pull/44079) 。
- 修复了 Carousel `dots` 切换点有多余 margin 的问题。具体修复信息可以查看 PR [#44076](https://github.com/ant-design/ant-design/pull/44076) 。

这些修复优化了 Carousel 组件的功能和样式，提升了用户体验。

### Modal 的问题修复有哪些？

Modal 组件在 5.8.3 版本中进行了以下问题修复：

- 修复了 Modal 页脚禁用态受 Form 影响的问题。具体修复信息可以查看 PR [#43055](https://github.com/ant-design/ant-design/pull/43055) ，该 PR 由 [@Wxh16144](https://github.com/Wxh16144) 提交。

这个修复解决了 Modal 组件在与 Form 组件结合使用时的问题，提升了组件的稳定性和可靠性。

### Checkbox 和 Radio 支持自定义水波纹效果了吗？

在 Ant Design 5.8.2 版本中，修复了 Checkbox 和 Radio 不支持自定义水波纹效果的问题。修复的方法是在对应元素上添加了 `ant-wave-target` 类名。详情请参考 [#44014](https://github.com/ant-design/ant-design/pull/44014)。

### Form.Item 的 renderProps 是否会返回正确的 FormInstance？

在 Ant Design 5.8.2 版本中，调整了 Form.Item renderProps 的定义，现在 renderProps 会返回正确的 `FormInstance`。这个问题的修复详细信息可以在 [#43996](https://github.com/ant-design/ant-design/pull/43996) 中找到。

### Table 在 direction 为 rlt 时的展开图标和展开行缩进问题是否已修复？

在 Ant Design 5.8.2 版本中，修复了 Table 在 `direction` 为 `rlt` 时展开图标方向和展开行缩进的问题。详细信息可以在 [#43977](https://github.com/ant-design/ant-design/pull/43977) 中查看，感谢 [@Yuiai01](https://github.com/Yuiai01) 的贡献。

### Pagination 组件的禁用状态是否修复了仍然有悬浮和聚焦样式的问题？

在 Ant Design 5.8.2 版本中，修复了 Pagination 组件禁用状态仍然有悬浮和聚焦样式的问题。详细信息可以在 [#43970](https://github.com/ant-design/ant-design/pull/43970) 中找到。

### TypeScript 中的 Drawer 和 Anchor 的 Design Token 的 TS 描述信息错误问题已修正吗？

在 Ant Design 5.8.2 版本中，修正了 TypeScript 中 Drawer 和 Anchor 组件部分 Design Token 的 TS 描述信息错误的问题。详细信息可查看 [#43994](https://github.com/ant-design/ant-design/pull/43994)，感谢 [@wving5](https://github.com/wving5) 的贡献。

### Select、TreeSelect、Cascader、DatePicker 的 `clearIcon` 废弃报错问题修复了吗？

在 Ant Design 5.8.1 版本中，修复了 Select、TreeSelect、Cascader、DatePicker 组件中出现的预期外的 `clearIcon` 废弃报错问题。此问题的修复链接为 [#43945](https://github.com/ant-design/ant-design/pull/43945)，由 [@kiner-tang](https://github.com/kiner-tang) 提交的修复。

### TypeScript 支持在 Design Token 主题算法中导出 `MappingAlgorithm` 类型吗？

在 Ant Design 5.8.1 版本中，增加了 TypeScript 支持，可以导出 `MappingAlgorithm` 作为 Design Token 主题算法的类型。这个变化的具体信息可以在修复链接 [#43953](https://github.com/ant-design/ant-design/pull/43953) 中找到。

### Ant Design 5.8.1 版本的发布日期是什么时候？

Ant Design 5.8.1 版本于 `2023-08-02` 发布。这个信息可以从 Ant Design 的版本更新日志中获得。

### Ant Design 5.8.0 更新了哪些内容？

- 组件 ComponentToken 支持配置 `algorithm` 参数，可以通过部分修改的 token 计算派生 token 的值并用于组件样式中。
- Modal hooks 方法现在支持 `await` 调用。
- ConfigProvider 现在支持 `wave` 配置以自定义水波纹效果。
- Form 新增 `getFieldsValue({ strict: true })` 方法，用于获取仅通过 Item 绑定的字段。
- Descriptions 现在支持 `items` 属性。
- ColorPicker 现在支持 `disabledAlpha` 属性。
- Avatar.Group 现在支持设置 `shape` 属性。
- AutoComplete/Cascader/DatePicker/Input.Textarea/TimePicker/TreeSelect 组件均已支持通过 `allowClear.clearIcon` 属性自定义清除按钮。
- DatePicker.RangePicker 现在支持回调函数的 `presets` 属性。
- Image 新增 `preview={{ movable: Boolean }}` 属性以支持可拖拽到文件夹。
- Slider `tooltip` 支持配置 `autoAdjustOverflow` 属性。
- Transfer 组件新增 `selectionsIcon` 属性以支持自定义下拉菜单图标。
- Select、Tree-Select 和 Cascader 组件废弃了 `showArrow` 属性，可以由 `suffixIcon` 统一配置。
- 优化了 `@ant-design/icons` 导入写法，避免在 Next.js 中 Tree Shaking 失效的问题。
- 修复了 Anchor 在滚动时无法触发 `getCurrentAnchor` 的问题。
- 修复了 Tooltip hover 时无法在 `disabled` 元素上触发的问题。
- 修复了 ColorPicker 在更改值时未调用 `onChangeComplete` 回调的问题。
- 修复了 `Modal.confirm` 的 `locale` 设置被重置的问题。
- 修复了 Slider 中描述信息和滑块手柄重叠的问题。
- 修复了 Select 弹出框翻转时动画不正确的问题。
- 修复了 InputNumber 在不同圆角下的样式异常。
- 优化了 `@ant-design/icons` 中一些图标的设计。
- 修复了使用 `@ant-design/cssinjs` 的组件库混合使用时 antd 样式总是插入在最前面的问题。
- 优化了 message 和 notification 渲染逻辑，在 SSR 环境下不再导出样式。
- 修复了 Select 的 `aria-activedescendant` 缺少有效值的问题。
- 修复了 `Layout.Header` a11y `role` 属性。
- TypeScript 方面，`Form.Item` 现在支持泛型对 `name` 属性进行校验。

🔗 这些更新的具体内容可以在 [GitHub](https://github.com/ant-design/ant-design) 上的相关 pull requests 中查看。

### Ant Design 5.8.0 增加了哪些新组件或新特性？

- 新增了 ComponentToken 组件，支持配置 `algorithm` 参数，可以通过部分修改的 token 计算派生 token 的值并用于组件样式中。
- Modal hooks 方法现在支持 `await` 调用。
- ConfigProvider 现在支持 `wave` 配置以自定义水波纹效果。
- Form 新增了 `getFieldsValue({ strict: true })` 方法，用于获取仅通过 Item 绑定的字段。
- Descriptions 组件新增了 `items` 属性。
- ColorPicker 组件现在支持 `disabledAlpha` 属性。
- Avatar.Group 组件新增了 `shape` 属性。
- AutoComplete/Cascader/DatePicker/Input.Textarea/TimePicker/TreeSelect 组件均已支持通过 `allowClear.clearIcon` 属性自定义清除按钮。
- DatePicker.RangePicker 现在支持回调函数的 `presets` 属性。
- Image 组件新增了 `preview={{ movable: Boolean }}` 属性以支持可拖拽到文件夹。
- Slider 组件的 `tooltip` 支持配置 `autoAdjustOverflow` 属性。
- Transfer 组件新增了 `selectionsIcon` 属性以支持自定义下拉菜单图标。

### Ant Design 5.8.0 修复了哪些 bug？

- 修复了 Anchor 在滚动时无法触发 `getCurrentAnchor` 的问题。
- 修复了 Tooltip hover 时无法在 `disabled` 元素上触发的问题。
- 修复了 ColorPicker 在更改值时未调用 `onChangeComplete` 回调的问题。
- 修复了 `Modal.confirm` 的 `locale` 设置被重置的问题。
- 修复了 Slider 中描述信息和滑块手柄重叠的问题。
- 修复了 Select 弹出框翻转时动画不正确的问题。
- 修复了 InputNumber 在不同圆角下的样式异常。

🔗 这些 bug 的修复详情可以在 [GitHub](https://github.com/ant-design/ant-design) 上的相关 pull requests 中查看。

### Ant Design 5.8.0 的 TypeScript 支持有哪些改进？

- `Form.Item` 现在支持泛型对 `name` 属性进行校验。

详细的 TypeScript 改进信息可以在 [GitHub](https://github.com/ant-design/ant-design/pull/43904) 上查看相关的 pull request。

## 1. 修复 Tour 弹出位置不居中的问题

**问题描述：** 当 `target` 为 `null` 时，Tour 的弹出位置不居中。

**链接：** [#43694](https://github.com/ant-design/ant-design/pull/43694)

**提交者：** [@linxianxi](https://github.com/linxianxi)

**解决方案：** 进行了修复以解决 Tour 弹出位置不居中的问题。

---

## 2. Button 丢失部分 `React.ButtonHTMLAttributes` 定义的问题

**问题描述：** Button 组件丢失了部分 `React.ButtonHTMLAttributes` 的定义。

**链接：** [#43716](https://github.com/ant-design/ant-design/pull/43716)

**解决方案：** 进行了修复以解决 Button 丢失部分 `React.ButtonHTMLAttributes` 定义的问题。

---

## 3. Watermark 颜色替换以适应暗黑主题

**问题描述：** Watermark 组件中固定的颜色需要替换，以适应暗黑主题。

**链接：** [#43754](https://github.com/ant-design/ant-design/pull/43754)

**解决方案：** 替换了 Watermark 组件中的固定颜色，使用了 Design Token 来适应暗黑主题。

---

以上是基于 Ant Design 5.7.3 版本的三个 QA 文档，分别介绍了修复 Tour 弹出位置不居中的问题，Button 丢失部分 `React.ButtonHTMLAttributes` 定义的问题，以及 Watermark 颜色替换以适应暗黑主题的问题。

### Ant Design 5.7.2 更新内容

- 修复 Menu 组件悬浮态样式丢失的问题。修复详情请参考 [#43656](https://github.com/ant-design/ant-design/pull/43656)。
- 修复 Notification 报错 PurePanel 定义未找到的问题。修复详情请参考 [#43687](https://github.com/ant-design/ant-design/pull/43687)。
- 修复 Button onClick 事件丢失 event 定义的问题。修复详情请参考 [#43666](https://github.com/ant-design/ant-design/pull/43666)。
- 修复 Input 和 InputNumber 行内对齐问题。修复详情请参考 [#43548](https://github.com/ant-design/ant-design/pull/43548)。
- 修复 DatePicker 后缀颜色使用 token 不当的问题。修复详情请参考 [#43646](https://github.com/ant-design/ant-design/pull/43646)。
- 修复 Steps 配置可点击时不能通过键盘操作的问题。修复详情请参考 [#43644](https://github.com/ant-design/ant-design/pull/43644)。
- 移除 Button 无用的 type="ghost" 属性定义。修复详情请参考 [#43675](https://github.com/ant-design/ant-design/pull/43675)。

### Ant Design 5.7.2 更新内容详解

#### 修复 Menu 组件悬浮态样式丢失的问题

在 Ant Design 5.7.2 版本中，修复了 Menu 组件悬浮态样式丢失的问题。具体的修复详情请参考 [#43656](https://github.com/ant-design/ant-design/pull/43656)。

#### 修复 Notification 报错 PurePanel 定义未找到的问题

Ant Design 5.7.2 版本中，修复了 Notification 报错 PurePanel 定义未找到的问题。具体的修复详情请参考 [#43687](https://github.com/ant-design/ant-design/pull/43687)。

#### 修复 Button onClick 事件丢失 event 定义的问题

Ant Design 5.7.2 版本中，修复了 Button 组件的 onClick 事件丢失 event 定义的问题。具体的修复详情请参考 [#43666](https://github.com/ant-design/ant-design/pull/43666)。

#### 修复 Input 和 InputNumber 行内对齐问题

在 Ant Design 5.7.2 版本中，修复了 Input 和 InputNumber 组件的行内对齐问题。具体的修复详情请参考 [#43548](https://github.com/ant-design/ant-design/pull/43548)。

#### 修复 DatePicker 后缀颜色使用 token 不当的问题

Ant Design 5.7.2 版本中，修复了 DatePicker 组件后缀颜色使用 token 不当的问题。具体的修复详情请参考 [#43646](https://github.com/ant-design/ant-design/pull/43646)。

#### 修复 Steps 配置可点击时不能通过键盘操作的问题

在 Ant Design 5.7.2 版本中，修复了 Steps 组件配置可点击时不能通过键盘操作的问题。具体的修复详情请参考 [#43644](https://github.com/ant-design/ant-design/pull/43644)。

#### 移除 Button 无用的 type="ghost" 属性定义

Ant Design 5.7.2 版本中，移除了 Button 组件无用的 type="ghost" 属性定义。具体的修复详情请参考 [#43675](https://github.com/ant-design/ant-design/pull/43675)。

### 5.7.1 补丁发布说明

- 日期：2023-07-19

1. 补全 Menu 主题定制 token
   - 相关链接：[#43576](https://github.com/ant-design/ant-design/pull/43576)

2. 修复 QRCode 在 Next.js 13 中报错 `Can't resolve 'antd/lib/qr-code'` 的问题
   - 相关链接：[#43572](https://github.com/ant-design/ant-design/issues/43572)

3. 修复 antd 不支持在 Next.js App Router 中使用的问题
   - 相关链接：[#43573](https://github.com/ant-design/ant-design/pull/43573)
   - 参考文档：[使用文档](/docs/react/use-with-next#使用-nextjs-的-app-router)

4. 修复 InputNumber 幽灵依赖报错 `Cannot find module 'rc-component/mini-decimal'`
   - 相关链接：[#43635](https://github.com/ant-design/ant-design/pull/43635)

5. 修复 App.useApp 方式调用 notification 组件时 `placement` 属性不生效的问题
   - 相关链接：[#43522](https://github.com/ant-design/ant-design/pull/43522)
   - 作者：[@Rajil1213](https://github.com/Rajil1213)

6. 修复 Checkbox 同时配置 `checked` 和 `indeterminate` 时没有展示为 `indeterminate` 样式的问题
   - 相关链接：[#43626](https://github.com/ant-design/ant-design/pull/43626)

7. 修复 Form.Item 设置 `label=""` 时垂直方向对齐偏移的问题
   - 相关链接：[#43614](https://github.com/ant-design/ant-design/pull/43614)

8. 修复 Pagination 分页选择器弹层抖动的问题
   - 相关链接：[#43556](https://github.com/ant-design/ant-design/pull/43556)

9. 修复 Button 幽灵按钮禁用状态丢失的问题
   - 相关链接：[#43558](https://github.com/ant-design/ant-design/pull/43558)
   - 作者：[@kiner-tang](https://github.com/kiner-tang)

10. 修复 Tag 仅传入 `icon` 时渲染多余间距的问题
    - 相关链接：[#43518](https://github.com/ant-design/ant-design/pull/43518)
    - 作者：[@Yuiai01](https://github.com/Yuiai01)

11. 修复 ColorPicker 不跟随表单校验状态改变 UI 的问题
    - 相关链接：[#42880](https://github.com/ant-design/ant-design/pull/42880)
    - 作者：[@RedJue](https://github.com/RedJue)

12. TypeScript 优化
    - 修复 Space 的 `SpaceContext` 没有正确导出的问题：[#43501](https://github.com/ant-design/ant-design/pull/43501)
       - 作者：[@VovkaGoodwin](https://github.com/VovkaGoodwin)
    - 优化 AutoComplete 组件 TS 定义实现：[#43581](https://github.com/ant-design/ant-design/pull/43581)
       - 作者：[@thinkasany](https://github.com/thinkasany)
    - 优化 Select 和 List 组件 TS 定义实现：[#43545](https://github.com/ant-design/ant-design/pull/43545)
       - 作者：[@thinkasany](https://github.com/thinkasany)
    - 优化 Button 组件 TS 定义实现：[#43588](https://github.com/ant-design/ant-design/pull/43588) [#43629](https://github.com/ant-design/ant-design/pull/43629)
       - 作者：[@thinkasany](https://github.com/thinkasany)
    - 优化 Cascader、ConfigProvider、DatePicker、InputNumber、Slider 和 Upload 组件 TS 定义实现：[#43610](https://github.com/ant-design/ant-design/pull/43610)

以上是 5.7.1 版本的补丁发布说明。

### Ant Design 5.7.0 新增的功能有哪些？

- ConfigProvider 支持所有组件的 className 和 style 属性控制。
- Badge 支持 classNames 属性和 styles 属性。
- ColorPicker 添加了 showText、destroyTooltipOnHide、onChangeComplete、panelRender 和 size 属性。
- Alert、Drawer、Modal、Notification、Tag、Tabs 均已支持通过设置 closeIcon 为 null 或 false 隐藏关闭按钮。
- Anchor 添加 replace 属性。
- Image 支持 imageRender、toolbarRender 属性以支持预览图和工具栏的自定义渲染，还支持了 onTransform、minScale、maxScale 等新属性，Image.PreviewGroup 支持 items 属性传入列表数据，并修复了 img 标签的原生属性没有传递给预览图的问题。
- 修改 Image 预览图的布局风格，preview 属性支持 closeIcon，Image.PreviewGroup 支持 fallback 属性，修复加载预览资源提前加载的问题。
- InputNumber 使用 rc-input 进行重构。
- 解决 vite、rollup、meteor、microbundle 等构建工具中遇到的循环依赖问题，并增加相关的检测。
- 移除 Anchor/CollapsePanel/Input.Group 组件中 className 属性的默认值（空字符串）。
- 修复 Upload 上传进度条延迟消失且丢失动画效果的问题。
- 为 Menu 中组件 Token colorItemBgSelected 添加废弃警告。
- 修复样式特性支持检测时部分浏览器因为未重绘导致出现滚动条的问题。
- 修复 Card tabList 为空时 Tab 完全不展示的问题。
- 修复 ConfigProvider 嵌套使用时，form.validateMessages 配置会丢失的问题。
- 修复 Tag 点击的水波纹效果有时候会和 Tag 元素产生偏移的问题。
- 修复 DatePicker 切换到年月面板时，此刻 点击无效的问题。
- 修复 Input.TextArea 组件在屏幕大小变化时设置的高度失效的问题。
- Slider 中 tooltip 在内容很少时应该居中。
- Design Token 将 colorLink 添加至 seed token 中，colorLinkHover 和 colorLinkActive 将会由 colorLink 计算得出。
- 调整 Slider 中部分 token 为 component token。
- Progress 支持 rtl 方向的动画。
- TypeScript 改进了 Popover、Popconfirm、Popover、Button.ButtonGroup、Select、Checkbox、Table 和 Tag 的类型声明。

### 在 Ant Design 5.7.0 中修复的 bug 有哪些？

- 修复 Upload 上传进度条延迟消失且丢失动画效果的问题。
- 为 Menu 中组件 Token colorItemBgSelected 添加废弃警告。
- 修复样式特性支持检测时部分浏览器因为未重绘导致出现滚动条的问题。
- 修复 Card tabList 为空时 Tab 完全不展示的问题。
- 修复 ConfigProvider 嵌套使用时，form.validateMessages 配置会丢失的问题。
- 修复 Tag 点击的水波纹效果有时候会和 Tag 元素产生偏移的问题。
- 修复 DatePicker 切换到年月面板时，此刻 点击无效的问题。
- 修复 Input.TextArea 组件在屏幕大小变化时设置的高度失效的问题。
- Slider 中 tooltip 在内容很少时应该居中。

### Ant Design 5.7.0 中的 TypeScript 改进有哪些？

- Popover 增加 RawPurePanelProps 接口描述。
- Popconfirm 替换 ref 类型 unknown 为 TooltipRef。
- Popover 替换 ref 类型 unknown 为 TooltipRef。
- 改进 Button.ButtonGroup 中 GroupSizeContext 的类型声明。
- 改进 Select 的 mode 属性的类型声明。
- Checkbox 替换 ref 类型 unknown 为 CheckboxRef。
- 改进 Table 内部类型实现。
- 改进 Tag 内部类型实现。
- 改进 Notification 内部类型实现。

### 修复 Form 在提交时，字段没有配置 rules 时仍会错误触发 onFieldsChange 事件的问题。
在版本 5.6.4 中，修复了一个问题，即当表单字段没有配置 rules 时，仍会错误触发 onFieldsChange 事件的问题。该修复解决了表单提交时可能出现的错误行为。详细信息请参考 GitHub 上的 [#43290](https://github.com/ant-design/ant-design/pull/43290)。

### 修复 Form.List 的 name 为 0 时误报 name 为空的警告信息的问题。
在版本 5.6.4 中，修复了一个问题，即当 Form.List 的 name 属性为 0 时，会误报 name 为空的警告信息的问题。该修复解决了在使用 Form.List 组件时可能出现的错误警告。详细信息请参考 GitHub 上的 [#43199](https://github.com/ant-design/ant-design/pull/43199)。

### 修复 Badge color 属性不生效的问题。
在版本 5.6.4 中，修复了一个问题，即 Badge 组件的 color 属性不生效的问题。该修复确保了 Badge 组件可以正确根据 color 属性进行渲染。详细信息请参考 GitHub 上的 [#43304](https://github.com/ant-design/ant-design/pull/43304)。

### Ant Design 5.6.3 的更新内容有哪些？

Ant Design 5.6.3 版本的更新内容如下：

- 修复了 Breadcrumb 组件传递 `dropdownProps` 不生效的问题。[#43151](https://github.com/ant-design/ant-design/pull/43151) [@linxianxi](https://github.com/linxianxi)
- 优化了 Breadcrumb 组件处理 `title` 为 `null` 时的行为。[#43099](https://github.com/ant-design/ant-design/pull/43099) [@Asanio06](https://github.com/Asanio06)
- 修复了 Slider 在 Form 内部时的禁用状态。[#43142](https://github.com/ant-design/ant-design/pull/43142) [@Starpuccino](https://github.com/Starpuccino)
- 修复了 Form 标签偏移值在垂直布局中不生效的问题。[#43155](https://github.com/ant-design/ant-design/pull/43155) [@kiner-tang](https://github.com/kiner-tang)
- 修复了 Table 组件打开筛选面板会报 `react ref` 错误警告信息的问题。[#43139](https://github.com/ant-design/ant-design/pull/43139)
- 修复了 Transfer 组件配置 `rowKey` 后无法选中的问题。[#43115](https://github.com/ant-design/ant-design/pull/43115)
- 修复了 Space 组件与其他组件搭配使用时的 `size` 优先级问题。[#42752](https://github.com/ant-design/ant-design/pull/42752) [@linxianxi](https://github.com/linxianxi)
- 修复了 QRCode 组件在暗黑模式下的颜色问题。[#43162](https://github.com/ant-design/ant-design/pull/43162) [@ds1371dani](https://github.com/ds1371dani)
- 修复了 Select 组件选项使用 Badge 和 Tag 时底部存在意外边距的问题。[#43097](https://github.com/ant-design/ant-design/pull/43097) [@Yuiai01](https://github.com/Yuiai01)

此外，还对 TypeScript 进行了一些优化：

- 优化了 Button 组件的 `target` 属性类型定义。[#43129](https://github.com/ant-design/ant-design/pull/43129) [@li-jia-nan](https://github.com/li-jia-nan)
- 优化了 Progress 组件的 `size` 属性类型定义，以支持百分比值。[#43123](https://github.com/ant-design/ant-design/pull/43123) [@Ali-ovo](https://github.com/Ali-ovo)
- 优化了 Slider 组件 tooltip 的类型定义。[#43094](https://github.com/ant-design/ant-design/pull/43094) [@li-jia-nan](https://github.com/li-jia-nan)

以上是 Ant Design 5.6.3 版本的更新内容。

### Ant Design 5.6.3 中 Breadcrumb 组件有哪些修复和优化？

Ant Design 5.6.3 版本中 Breadcrumb 组件的修复和优化内容如下：

- 修复了 Breadcrumb 组件传递 `dropdownProps` 不生效的问题。[#43151](https://github.com/ant-design/ant-design/pull/43151) [@linxianxi](https://github.com/linxianxi)
- 优化了 Breadcrumb 组件处理 `title` 为 `null` 时的行为。[#43099](https://github.com/ant-design/ant-design/pull/43099) [@Asanio06](https://github.com/Asanio06)

以上是 Ant Design 5.6.3 版本中 Breadcrumb 组件的修复和优化内容。

### Ant Design 5.6.3 中有哪些 TypeScript 的优化？

Ant Design 5.6.3 版本中对 TypeScript 进行了以下优化：

- 优化了 Button 组件的 `target` 属性类型定义。[#43129](https://github.com/ant-design/ant-design/pull/43129) [@li-jia-nan](https://github.com/li-jia-nan)
- 优化了 Progress 组件的 `size` 属性类型定义，以支持百分比值。[#43123](https://github.com/ant-design/ant-design/pull/43123) [@Ali-ovo](https://github.com/Ali-ovo)
- 优化了 Slider 组件 tooltip 的类型定义。[#43094](https://github.com/ant-design/ant-design/pull/43094) [@li-jia-nan](https://github.com/li-jia-nan)

以上是 Ant Design 5.6.3 版本中针对 TypeScript 的优化。

### 修复 Dropdown 配置 `autoFocus` 无效的问题。

在 Ant Design 5.6.2 版本中，修复了 Dropdown 组件配置 `autoFocus` 无效的问题。这个问题的解决方案可以在 GitHub 上的 Issue [#43002](https://github.com/ant-design/ant-design/pull/43002) 中找到，贡献者是 [@Yuiai01](https://github.com/Yuiai01)。

### 修复 InputNumber 设置 `prefix` 在 Form.Item `hasFeedBack` 内高度异常的问题。

Ant Design 5.6.2 版本中修复了 InputNumber 组件在设置 `prefix` 并且包裹在 Form.Item 的 `hasFeedBack` 内导致高度异常的问题。你可以在 GitHub 上的 Issue [#43049](https://github.com/ant-design/ant-design/pull/43049) 中找到相关解决方案。

### 修复 Input 和 InputNumber 禁用状态样式。

在 Ant Design 5.6.2 版本中，修复了 Input 和 InputNumber 组件在禁用状态下的样式问题。详细的解决方案可以在 GitHub 上的 Issue [#42974](https://github.com/ant-design/ant-design/pull/42974) 找到。这个修复由 [@kampiu](https://github.com/kampiu) 贡献。

希望以上信息能够帮助你了解 Ant Design 5.6.2 版本的更新内容。如有其他问题，请随时提问。

### 5.6.1 版本更新内容

#### 修复 ColorPicker 预设颜色选中问题
在 5.6.1 版本中，修复了 ColorPicker 组件预设颜色无法选中的问题。这个问题的解决由 [@RedJue](https://github.com/RedJue) 提交的修复[#42882](https://github.com/ant-design/ant-design/pull/42882)。

#### 修复 ColorPicker 清除问题
此次更新中，修复了 ColorPicker 组件在清除后再次点击清除仍然触发 `onChange` 的问题。这个问题的解决由 [@linxianxi](https://github.com/linxianxi) 提交的修复[#42643](https://github.com/ant-design/ant-design/pull/42643)。

#### 修复 Collapse 组件废弃警告显示异常问题
针对 Collapse 组件的废弃警告异常显示问题进行了修复。这个问题的解决由 [@kiner-tang](https://github.com/kiner-tang) 提交的修复[#42876](https://github.com/ant-design/ant-design/pull/42876)。

#### TypeScript 改进
针对 Collapse 组件的 `items` 类型进行了改进，现在 `items` 类型可以是可选的。这个改进的贡献者是 [@Dunqing](https://github.com/Dunqing)，提交的改进是[#42877](https://github.com/ant-design/ant-design/pull/42877)。

以上是 5.6.1 版本的更新内容。

### Ant Design 5.6.0 更新了哪些内容？

Ant Design 5.6.0 版本于 `2023-06-06` 发布，主要更新内容如下：

- ColorPicker 组件添加了 `onClear` 属性，允许清除选中颜色时不自动关闭弹窗。
- Collapse 组件支持通过 `items` 属性来配置面板的内容。
- Design Token 新增了静态方法 `getDesignToken`，用于获取完整的主题 token。
- ConfigProvider 组件支持配置 Space 组件的 `classNames` 和 `styles` 属性。
- Space 组件支持 `classNames` 和 `styles` 属性。
- Drawer 抽屉面板支持事件监听，并且包裹元素可以传入 `data-*` 属性。
- ConfigProvider 组件支持自定义 Button 的 `style` / `className` / `styles` / `classNames`。
- Pagination 的页码选择器可以进行搜索了。
- QRCode 组件支持渲染 svg。
- Calendar 组件支持将 `panelMode` 作为选择源类型传递给内部选择触发器回调，以便在调用时使用正确的源类型。
- Select 组件的 `fieldNames` 新增了 `groupLabel` 字段，用于映射分组标题。
- Table 组件添加了对列自定义排序图标的支持。
- DatePicker 组件支持 `kk:mm` 格式的 `format`，以支持显示 24:00。
- ConfigProvider.config 新增了 `theme`，支持配置静态方法主题。
- Calendar 组件的 `onSelect` 支持 `info.source` 参数，以获取选择来源。
- 优化了 ColorPicker 组件在暗黑模式下的样式。
- 修复了 Popconfirm、Alert 和 Notification 组件的 `colorTextHeading` 和 `colorText` 误用问题。
- 修复了 Divider 组件的样式问题。
- 修复了 Image.PreviewGroup 预览时图片切换后状态没有重置的问题。
- 统一使用 `rc-util/lib/pickAttrs` 以节省包体积，修复了 Rate 组件在 StrictMode 下 `findDOMNode is deprecated` 警告信息。
- Rate 组件支持传入 `id`、`data-*`、`aria-*`、`role`、`onMouseEnter`、`onMouseLeave` 等属性，修复了不支持 Tooltip 包裹的问题。
- 修复了 Menu 组件横向模式下子菜单没有对齐的问题。
- 将 Card 的 `tabList` 的 API 与 Tab 的 `items` 对齐。
- 修复了 Modal、Space、Statistic、List、Dropdown 组件的循环依赖问题。
- 增强了 Progress 组件的可访问性表现，添加了 `aria` 属性。
- Notification 组件添加了 `role` 属性。
- Collapse 使用 `onKeyDown` 替代 `onKeyPress` 来改变折叠面板的激活状态。
- 使用 `@rc-component/trigger` 重构了 Menu 组件，移除了 `rc-trigger` 依赖，缩小了打包体积。
- Table 组件将 `sorterOrder` 重命名为 `sortOrder`，用于 `sortIcon` 的参数。
- 迁移了多个组件的 less 变量，详情请查看[迁移 less 变量](/docs/react/migrate-less-variables-cn)文档。

### Ant Design 5.6.0 的 ColorPicker 组件有哪些新增的属性和改进？

在 Ant Design 5.6.0 版本中，ColorPicker 组件新增了一个属性，并进行了样式上的改进：

- 新增了 `onClear` 属性，可以用来配置清除选中颜色时不自动关闭弹窗的行为。
- 在暗黑模式下，优化了 ColorPicker 组件的样式。

### Ant Design 5.6.0 的 Collapse 组件有哪些改进？

Ant Design 5.6.0 版本中，Collapse 组件进行了如下改进：

- 增加了通过 `items` 属性来配置折叠面板的内容的功能。

请查看 Ant Design 5.x 的相关文档以获取更详细的信息。

### 5.5.2 更新内容

- 修复 ColorPicker 组件悬停边界问题。详情请查看[#42669](https://github.com/ant-design/ant-design/pull/42669)。
- 修复 Menu 组件 `overflowedIndicatorClassName` 覆盖了原本的 class 的问题。详情请查看[#42692](https://github.com/ant-design/ant-design/pull/42692)。
- 修复 Select 组件在某些情况下显示乱码问题。详情请查看[#42651](https://github.com/ant-design/ant-design/pull/42651)。
- 修复 Card 组件，当 Image 设置 `cover` 属性时，悬停蒙版没有圆角属性，导致 UI 异常。详情请查看[#42642](https://github.com/ant-design/ant-design/pull/42642)。
- 修复 Checkbox 和 label 不对齐的问题。详情请查看[#42590](https://github.com/ant-design/ant-design/pull/42590)。
- 修复使用 ConfigProvider 会导致未使用的 Form 组件也被打包的问题。详情请查看[#42604](https://github.com/ant-design/ant-design/pull/42604)。
- 修复 InputNumber 和其他组件无法基线对齐的问题。详情请查看[#42580](https://github.com/ant-design/ant-design/pull/42580)。
- 修复 Badge 组件中旋转的 `icon` 动画。详情请查看[#42575](https://github.com/ant-design/ant-design/pull/42575)。
- 优化 Form `setFieldsValue` 相关代码以降低打包尺寸。详情请查看[#42635](https://github.com/ant-design/ant-design/pull/42635)。
- 优化 Image 组件预览组样式。详情请查看[#42675](https://github.com/ant-design/ant-design/pull/42675)。
- 修复 Tag 无边框样式在 `error` 等状态下不生效的问题。详情请查看[#42619](https://github.com/ant-design/ant-design/pull/42619)。
- 修复 Table `rowSpan` 悬浮高亮背景颜色丢失的问题。详情请查看[#42572](https://github.com/ant-design/ant-design/pull/42572)。
- 修复 Pagination 在禁用状态下 link 图标和 ellipsis hover 时的样式。详情请查看[#42541](https://github.com/ant-design/ant-design/pull/42541)。
- 修复部分全局 Design Token 无法覆盖组件样式的问题。详情请查看[#42535](https://github.com/ant-design/ant-design/pull/42535)。
- 为 `lt_LT` 添加缺失的部分文案。详情请查看[#42664](https://github.com/ant-design/ant-design/pull/42664)。
- RTL
  - 修复 ColorPicker 组件 RTL 模式样式。详情请查看[#42716](https://github.com/ant-design/ant-design/pull/42716)。
  - 修复 Anchor RTL 模式下轨道的位置。详情请查看[#42706](https://github.com/ant-design/ant-design/pull/42706)。

以上是 5.5.2 版本的更新内容。

### 5.5.2 更新内容

- 修复了 ColorPicker 组件在悬停时边界问题。
- 修复了 Menu 组件中 `overflowedIndicatorClassName` 覆盖了原本 class 的问题。
- 修复了 Select 组件在某些情况下显示乱码的问题。
- 修复了 Card 组件在设置了 `cover` 属性时悬停蒙版没有圆角属性的问题。
- 修复了 Checkbox 和 label 不对齐的问题。
- 修复了使用 ConfigProvider 会导致未使用的 Form 组件也被打包的问题。
- 修复了 InputNumber 和其他组件无法基线对齐的问题。
- 修复了 Badge 组件中旋转的 `icon` 动画。
- 优化了 Form `setFieldsValue` 相关代码以降低打包尺寸。
- 优化了 Image 组件预览组的样式。
- 修复了 Tag 在 `error` 等状态下无边框样式不生效的问题。
- 修复了 Table 中 `rowSpan` 悬浮高亮背景颜色丢失的问题。
- 修复了 Pagination 在禁用状态下 link 图标和 ellipsis hover 时的样式。
- 修复了部分全局 Design Token 无法覆盖组件样式的问题。
- 为 `lt_LT` 添加了缺失的部分文案。
- RTL 支持
  - 修复了 ColorPicker 组件在 RTL 模式下的样式。
  - 修复了 Anchor 在 RTL 模式下轨道的位置。

5.5.2 版本的更新内容如上所述。

### 5.5.2 更新内容

- 修复了 ColorPicker 组件在悬停时边界问题。具体信息可查看[#42669](https://github.com/ant-design/ant-design/pull/42669)。
- 修复了 Menu 组件 `overflowedIndicatorClassName` 覆盖了原本的 class 的问题。具体信息可查看[#42692](https://github.com/ant-design/ant-design/pull/42692)。
- 修复了 Select 组件在某些情况下显示乱码问题。具体信息可查看[#42651](https://github.com/ant-design/ant-design/pull/42651)。
- 修复了 Card 组件，当 Image 设置 `cover` 属性时，悬停蒙版没有圆角属性，导致 UI 异常。具体信息可查看[#42642](https://github.com/ant-design/ant-design/pull/42642)。
- 修复了 Checkbox 和 label 不对齐的问题。具体信息可查看[#42590](https://github.com/ant-design/ant-design/pull/42590)。
- 修复了使用 ConfigProvider 会导致未使用的 Form 组件也被打包的问题。具体信息可查看[#42604](https://github.com/ant-design/ant-design/pull/42604)。
- 修复了 InputNumber 和其他组件无法基线对齐的问题。具体信息可查看[#42580](https://github.com/ant-design/ant-design/pull/42580)。
- 修复了 Badge 组件中旋转的 `icon` 动画。具体信息可查看[#42575](https://github.com/ant-design/ant-design/pull/42575)。
- 优化了 Form `setFieldsValue` 相关代码以降低打包尺寸。具体信息可查看[#42635](https://github.com/ant-design/ant-design/pull/42635)。
- 优化了 Image 组件预览组样式。具体信息可查看[#42675](https://github.com/ant-design/ant-design/pull/42675)。
- 修复了 Tag 无边框样式在 `error` 等状态下不生效的问题。具体信息可查看[#42619](https://github.com/ant-design/ant-design/pull/42619)。
- 修复了 Table `rowSpan` 悬浮高亮背景颜色丢失的问题。具体信息可查看[#42572](https://github.com/ant-design/ant-design/pull/42572)。
- 修复了 Pagination 在禁用状态下 link 图标和 ellipsis hover 时的样式。具体信息可查看[#42541](https://github.com/ant-design/ant-design/pull/42541)。
- 修复了部分全局 Design Token 无法覆盖组件样式的问题。具体信息可查看[#42535](https://github.com/ant-design/ant-design/pull/42535)。
- 为 `lt_LT` 添加缺失的部

## QA1

### Button 组件的修复问题是什么？

修复了 Button 组件的 icon 尺寸和间距问题。

### 这个修复是在哪个版本中进行的？

修复是在版本 5.5.1 中进行的。

### 修复的链接是什么？

修复的链接是 [#42516](https://github.com/ant-design/ant-design/pull/42516)。

## QA2

### Select 组件移除和选中按钮不居中的问题是如何修复的？

修复了 Select 组件移除和选中按钮不居中的问题。

### 修复的链接是什么？

修复的链接是 [#42513](https://github.com/ant-design/ant-design/pull/42513)。

## QA3

### Popconfirm 组件的重构解决了什么问题？

重构了 Popconfirm 组件的 DOM 结构，以解决 `icon={null}` 时 `title` 和 `description` 的多余 margin 问题。

### 修复的链接是什么？

修复的链接是 [#42433](https://github.com/ant-design/ant-design/pull/42433)。

### Ant Design 5.5.0 新增了哪些功能和修复了哪些问题？

- 新增了颜色选择器组件 ColorPicker [#41990](https://github.com/ant-design/ant-design/pull/41990)
- 新增了 `DatePicker.generateCalendar` 和 `Calendar.generateCalendar` 自定义日期库组件方法，不再需要通过路径引入使用 [#41773](https://github.com/ant-design/ant-design/pull/41773)
- 优化了 Select、TreeSelect、Cascader 多选模式下的样式，去除了标签的边框 [#41480](https://github.com/ant-design/ant-design/pull/41480)
- Form 的 `validateFields` 支持了 `validateOnly` 配置仅做校验而不改变 UI 状态 [#42273](https://github.com/ant-design/ant-design/pull/42273)
- DatePicker 支持了 `changeOnBlur` 以允许不点击确认按钮，在失去焦点时也能触发 change 事件 [#42168](https://github.com/ant-design/ant-design/pull/42168)
- Cascader 的 `options` 支持了 `disableCheckbox` 在多选时禁用勾选框 [#42024](https://github.com/ant-design/ant-design/pull/42024)
- Popconfirm 新增了 `onPopupClick` 属性 [#42272](https://github.com/ant-design/ant-design/pull/42272)
- QRCode 新增了 `bgColor` 属性设置背景色 [#42214](https://github.com/ant-design/ant-design/pull/42214)
- Table.Summary.Row 组件增加了 `onClick` 属性 [#42175](https://github.com/ant-design/ant-design/pull/42175)
- Space 新增了支持 ref [#42266](https://github.com/ant-design/ant-design/pull/42266)
- Tab 新增了默认继承 Card 的 `size` [#42183](https://github.com/ant-design/ant-design/pull/42183)
- ConfigProvider 修复了 `size` 对 Pagination 无效的问题 [#42206](https://github.com/ant-design/ant-design/pull/42206)
- ConfigProvider 修复了 `size` 对 Steps 无效的问题 [#42278](https://github.com/ant-design/ant-design/pull/42278)
- ConfigProvider 修复了 `size` 对 Descriptions 无效的问题 [#42244](https://github.com/ant-design/ant-design/pull/42244)
- ConfigProvider 修复了当 `componentSize` 被设定时 Space.Compact 没有继承的问题 [#42199](https://github.com/ant-design/ant-design/pull/42199)
- 修复了 Input 在 Space.Compact 下使用图标的样式错误 [#42167](https://github.com/ant-design/ant-design/pull/42167)
- 修复了 Popover 当 `title` 和 `content` 属性均为空值时，展示空白气泡的问题 [#42217](https://github.com/ant-design/ant-design/pull/42217)
- 修复了 Circle Progress 未设置 `size` 的报错问题 [#41875](https://github.com/ant-design/ant-design/pull/41875)
- 修复了 Progress 抛出的警告 `findDOMNode is deprecated in StrictMode` [#42241](https://github.com/ant-design/ant-design/pull/42241)
- 修复了 InputNumber 超出范围样式不生效的问题 [#42250](https://github.com/ant-design/ant-design/pull/42250)
- 修复了 Divider 在垂直方向虚线样式被覆盖导致无法正常显示的问题 [#40418](https://github.com/ant-design/ant-design/pull/40418)
- 调整了 Tooltip 动画，现在弹出位置会动态从箭头方向弹出 [#42225](https://github.com/ant-design/ant-design/pull/42225)
- 调整了 Checkbox.Group 样式风格与 v4 保持一致 [#42103](https://github.com/ant-design/ant-design/pull/42103)
- 完善了 Menu 溢出时的样式 [#42294](https://github.com/ant-design/ant-design/pull/42294)
- 完善了 Segmented 鼠标 active 样式 [#42249](https://github.com/ant-design/ant-design/pull/42249)
- Spin 添加了在非嵌套下使用 `tip` 的警告提示 [#42293](https://github.com/ant-design/ant-design/pull/42293)
- 组件 ComponentToken 名称规范化 [#42184](https://github.com/ant-design/ant-design/pull/42184)
- 完善了 Tag 的类型定义 [#42235](https://github.com/ant-design/ant-design/pull/42235)
- 完善了 Notification `getContainer` 类型定义 [#40206](https://github.com/ant-design/ant-design/pull/40206)
- 改进了 Menu 组件对 MenuItemType 和 MenuItemProps 泛型的支持 [#42240](https://github.com/ant-design/ant-design/pull/42240)
- 补充了 bg_BG Form 文案 [#42203](https://github.com/ant-design/ant-design/pull/42203)

请注意，以上信息是基于 Ant Design 5.5.0 版本生成的。具体的功能和问题修复更多的细节请查看对应的链接。

### 修复了什么问题？修复了 Menu.Item 与 Submenu 之间间距不统一、Breadcrumb 使用 itemRender 并且配置 path 时渲染元素会额外包一层 a 元素、Transfer 在受控模式下报 React 状态嵌套更新错误、Upload 禁用状态的逻辑、Spin 与其 icon 子元素高度不一致、Affix 组件在无需更新时计算逻辑、Anchor 组件在无需跳转时计算逻辑的问题。

### 这些问题是如何修复的？分别通过 Pull Request [#42160](https://github.com/ant-design/ant-design/pull/42160)、[#42049](https://github.com/ant-design/ant-design/pull/42049)、[#42033](https://github.com/ant-design/ant-design/pull/42033)、[#42102](https://github.com/ant-design/ant-design/pull/42102)、[#42162](https://github.com/ant-design/ant-design/pull/42162)、[#42015](https://github.com/ant-design/ant-design/pull/42015)、[#42018](https://github.com/ant-design/ant-design/pull/42018) 进行修复，其中贡献者分别为 [@Wxh16144](https://github.com/Wxh16144)、[@cheapCoder](https://github.com/cheapCoder)、[@Simon-He95](https://github.com/Simon-He95)。

### 这些修复对应的版本号是多少？修复对应的版本号为 5.4.7。

### 修复日期是什么时候？修复日期为 `2023-05-06`。

### 这些修复对用户有什么影响？这些修复主要对组件的功能和样式进行了优化和修复，使得组件在使用过程中更加稳定和符合预期。

### 参考链接
- Pull Request [#42160](https://github.com/ant-design/ant-design/pull/42160)
- Pull Request [#42049](https://github.com/ant-design/ant-design/pull/42049)
- Pull Request [#42033](https://github.com/ant-design/ant-design/pull/42033)
- Pull Request [#42102](https://github.com/ant-design/ant-design/pull/42102)
- Pull Request [#42162](https://github.com/ant-design/ant-design/pull/42162)
- Pull Request [#42015](https://github.com/ant-design/ant-design/pull/42015)
- Pull Request [#42018](https://github.com/ant-design/ant-design/pull/42018)

### 修复 Table 边框和圆角样式的问题
- 修复 Table 在一系列边框和圆角样式上的细节问题。
- 相关 Issue: [#41985](https://github.com/ant-design/ant-design/pull/41985)

### 修复 Layout.Sider 折叠时动画丢失的问题
- 修复 Layout.Sider 在折叠时丢失动画的问题。
- 相关 Issue: [#41993](https://github.com/ant-design/ant-design/pull/41993)

### 修复 InputNumber 字体样式错误的问题
- 修复 InputNumber 字体样式错误的问题。
- 相关 Issue: [#41983](https://github.com/ant-design/ant-design/pull/41983)

### 修复响应式 Col `colSize` 不支持 `flex` 的问题
- 修复响应式 Col 组件中，`colSize` 不支持 `flex` 属性的问题。
- 相关 Issue: [#41962](https://github.com/ant-design/ant-design/pull/41962)
- 提交者: [@AlexisSniffer](https://github.com/AlexisSniffer)

### 修复 Carousel `goTo` 在动画播放时无效的问题
- 修复 Carousel 组件中，在动画播放时 `goTo` 方法无效的问题。
- 相关 Issue: [#41969](https://github.com/ant-design/ant-design/pull/41969)
- 提交者: [@guan404ming](https://github.com/guan404ming)

### 修复 Form 重置事件后反馈图标未重置的问题
- 修复 Form 组件在触发重置事件后，未正确重置反馈图标的问题。
- 相关 Issue: [#41976](https://github.com/ant-design/ant-design/pull/41976)

### 修复 Form `onValuesChange` 收集到的数据不准确的问题
- 修复 Form 组件中 `onValuesChange` 方法收集到的数据不准确的问题。
- 相关 Issue: [#41976](https://github.com/ant-design/ant-design/pull/41976)

### 修复 Menu 报错 OverrideContext 类型定义不存在的问题
- 修复 Menu 组件在引用 OverrideContext 类型定义时报错的问题。
- 相关 Issue: [#41907](https://github.com/ant-design/ant-design/pull/41907)

### 修复 TreeSelect 定义不支持 `aria-*` 的问题
- 修复 TreeSelect 组件定义不支持 `aria-*` 属性的问题。
- 相关 Issue: [#41978](https://github.com/ant-design/ant-design/pull/41978)
- 提交者: [@guan404ming](https://github.com/guan404ming)

### Q1：Ant Design 5.4.5 版本有哪些修复的 bug？

A1：Ant Design 5.4.5 版本修复的 bug 包括：
- Anchor 组件的 `onChange` 方法改变后不触发的问题 [#41934](https://github.com/ant-design/ant-design/pull/41934) 由 [@Yuiai01](https://github.com/Yuiai01) 修复。
- InputNumber 组件样式被浏览器原生样式覆盖的问题 [#41940](https://github.com/ant-design/ant-design/pull/41940) 由 [@Wxh16144](https://github.com/Wxh16144) 修复。
- Tree 组件可拖拽树文本换行时其标题不对齐的问题 [#41928](https://github.com/ant-design/ant-design/pull/41928) 由 [@Yuiai01](https://github.com/Yuiai01) 修复。
- Checkbox 组件标题没有对齐的问题 [#41920](https://github.com/ant-design/ant-design/pull/41920) 由 [@Yuiai01](https://github.com/Yuiai01) 修复。
- Switch 组件升级 `rc-switch` 以修复重复引入 `@babel/runtime/helpers` 的问题，减小打包体积 [#41954](https://github.com/ant-design/ant-design/pull/41954)。

### Q2：Ant Design 5.4.5 版本修复的问题有哪些组件涉及？

A2：Ant Design 5.4.5 版本修复的问题涉及的组件包括：
- Anchor 组件
- InputNumber 组件
- Tree 组件
- Checkbox 组件
- Switch 组件

### Q3：Ant Design 5.4.5 版本修复的问题由哪些开发者贡献？

A3：Ant Design 5.4.5 版本修复的问题由以下开发者贡献：
- Anchor 组件的修复由 [@Yuiai01](https://github.com/Yuiai01) 贡献。
- InputNumber 组件的修复由 [@Wxh16144](https://github.com/Wxh16144) 贡献。
- Tree 组件的修复由 [@Yuiai01](https://github.com/Yuiai01) 贡献。
- Checkbox 组件的修复由 [@Yuiai01](https://github.com/Yuiai01) 贡献。
- Switch 组件的升级由 [@Yuiai01](https://github.com/Yuiai01) 贡献。

以上是关于 Ant Design 5.4.5 版本修复 bug 的相关信息。

### 5.4.4 版本的更新内容是什么？

- 修复了 Message hooks 的图标样式不跟随动态主题 token 切换的问题，修复的 Pull Request 编号是 [#41899](https://github.com/ant-design/ant-design/pull/41899)。
- 修复了 `@ant-design/cssinjs` 中，CSS 属性值为 `undefined` 时导致 cssinjs 报错的问题，修复的 Pull Request 编号是 [#41896](https://github.com/ant-design/ant-design/pull/41896)。

### 5.4.4 版本的发布日期是什么时候？

5.4.4 版本的发布日期是 `2023-04-20`。

1. 修复 FloatButton 警告: findDOMNode is deprecated in StrictMode 是为了解决什么问题？  
答：这个修复是为了解决 FloatButton 组件在 StrictMode 模式下使用 findDOMNode 报警告的问题。

2. 修复 Layout.Sider 切换主题时存在背景切换延迟的问题要如何实现？  
答：这个修复是为了解决 Layout.Sider 组件在切换主题时存在背景切换延迟的问题。

3. TypeScript 版本的修复 Modal 的类型定义是什么意思？  
答：这个修复是为了完善 Modal 组件在 TypeScript 中的类型定义。

### 修复 DatePicker 组件异常显示废弃警告的问题

问题描述：
DatePicker 组件在使用过程中出现异常显示废弃警告的问题。

解决方法：
修复了 DatePicker 组件异常显示废弃警告的问题。

参考链接：
- GitHub Issue: [#41753](https://github.com/ant-design/ant-design/pull/41753)
- 提交者: [@kiner-tang](https://github.com/kiner-tang)

### 补充 de_DE 遗漏的国际化

问题描述：
de_DE 国际化遗漏了一些内容需要进行补充。

解决方法：
补充了 de_DE 国际化的内容。

参考链接：
- GitHub Issue: [#41747](https://github.com/ant-design/ant-design/pull/41747)
- 提交者: [@eldarcodes](https://github.com/eldarcodes)

### 优化 TimePicker hourStep 的类型

问题描述：
TimePicker 组件的 hourStep 类型需要进行优化。

解决方法：
优化了 TimePicker 组件的 hourStep 类型。

参考链接：
- GitHub Commit: [1fc3675](https://github.com/ant-design/ant-design/commit/1fc3675)
- 提交者: [@Wuxh](https://github.com/Wuxh)

## CSS 变量模式优化

#### 问题描述
Ant Design 5.4.1 版本中，存在一些 CSS 变量模式方面的问题需要优化。

#### 解决方案
以下是针对 CSS 变量模式方面的优化：

1. 优化类 Select 组件弹窗逻辑，现在总是会尝试优先在可视区域展示以减少用户额外滚动成本。[#41619](https://github.com/ant-design/ant-design/pull/41619)
2. 去除 Badge.Ribbon 里固定的高度。[#41661](https://github.com/ant-design/ant-design/pull/41661) [@MuxinFeng](https://github.com/MuxinFeng)
3. 修复 Select 在搜索时宽度变为 `0px` 的问题。[#41722](https://github.com/ant-design/ant-design/pull/41722)
4. 修复 Empty 空数据组件在宽度不够的容器内样式错位的问题。[#41727](https://github.com/ant-design/ant-design/pull/41727)
5. 改进 Form.Item `noStyle` 验证消息显隐逻辑。[#41698](https://github.com/ant-design/ant-design/pull/41698) [@Wxh16144](https://github.com/Wxh16144)
6. 修正 Form.Item 不应支持设置 `requiredMark` 的问题。[#41725](https://github.com/ant-design/ant-design/pull/41725) [@Wxh16144](https://github.com/Wxh16144)
7. 修复 Space 影响父元素字体大小和样式的问题。[#40326](https://github.com/ant-design/ant-design/pull/40326)
8. 修复 Pagination 简洁模式中的上一页下一页按钮 hover 样式丢失的问题。[#41685](https://github.com/ant-design/ant-design/pull/41685)
9. 修复 Tree `switcherIcon` 无法隐藏。[#41708](https://github.com/ant-design/ant-design/pull/41708) [@acyza](https://github.com/acyza)
10. 修复 `List.Item.Meta` 的 `avatar` 和 `title` 不对齐的问题。[#41688](https://github.com/ant-design/ant-design/pull/41688) [@Yuiai01](https://github.com/Yuiai01)
11. 修复 Row 的 `justify` 设置为 `space-evenly` 无效。[#41679](https://github.com/ant-design/ant-design/pull/41679) [@Yuiai01](https://github.com/Yuiai01)
12. 修复 Button 类型定义不支持 `data-*` 属性的问题。[#41650](https://github.com/ant-design/ant-design/pull/41650)
13. 修复 Table `rowSelection.selections` 有值时选择列宽度不够的问题。[#41626](https://github.com/ant-design/ant-design/pull/41626)
14. 修复 Mentions 弹层样式。[#41660](https://github.com/ant-design/ant-design/pull/41660)
15. 改进 Form.Item 关于 `require` 的判断逻辑。[#41623](https://github.com/ant-design/ant-design/pull/41623) [@Wxh16144](https://github.com/Wxh16144)

#### 相关链接
- [Ant Design 5.4.1 版本](https://github.com/ant-design/ant-design/releases/tag/5.4.1)

---

## 国际化改进

#### 问题描述
Ant Design 5.4.1 版本中，国际化方面存在一些问题需要改进。

#### 解决方案
以下是国际化方面的改进：

1. 添加 Tour、Image 和 QRCode 泰语语言环境。[#41697](https://github.com/ant-design/ant-design/pull/41697) [@buildingwatsize](https://github.com/buildingwatsize)

#### 相关链接
- [Ant Design 5.4.1 版本](https://github.com/ant-design/ant-design/releases/tag/5.4.1)

---

请注意：上述解决方案是基于 Ant Design 5.4.1 版本中的问题和解决方案描述生成的，详细信息请参阅相关链接。

### 更新内容

- 移除了 `antd/es/locale-provider` `antd/lib/locale-provider` 目录，需要使用 ConfigProvider 作为替代。[PR #41289](https://github.com/ant-design/ant-design/pull/41289)

- DatePicker 等时间类组件现在可以使用 luxon 作为日期库。[PR #41580](https://github.com/ant-design/ant-design/pull/41580)

- 新增了 Form.Item.useStatus 方法，用于获取错误状态信息。[PR #41554](https://github.com/ant-design/ant-design/pull/41554)

- 输入框组件 Input 和 Input.TextArea 现在支持 `classNames` 和 `styles` 属性，用于更细粒度的样式自定义。[PR #41493](https://github.com/ant-design/ant-design/pull/41493)

- Tag 组件新增了无边框模式。[PR #41305](https://github.com/ant-design/ant-design/pull/41305)

- FloatButton 组件可以通过 `badge` 属性开启角标功能。[PR #41040](https://github.com/ant-design/ant-design/pull/41040)

- Select 组件现在支持 `title` 属性，用于覆盖一些自带的 title 提示。[PR #41280](https://github.com/ant-design/ant-design/pull/41280)

- Image 组件支持设置 `preview.rootClassName`。[PR #41265](https://github.com/ant-design/ant-design/pull/41265)

- Modal 组件支持 `afterOpenChange` 属性。[PR #41253](https://github.com/ant-design/ant-design/pull/41253)

- Form.useWatch 新增了 `preserve` 参数，现在可以在 Form.Item 未注册的情况下触发监听。[PR #41191](https://github.com/ant-design/ant-design/pull/41191)

- 重构了部分组件代码，使用 `useMemo` 进行优化。[PR #41533](https://github.com/ant-design/ant-design/pull/41533) [PR #41550](https://github.com/ant-design/ant-design/pull/41550)

- Checkbox 组件使用 React hooks 进行重构，并优化了 TS 定义。[PR #41117](https://github.com/ant-design/ant-design/pull/41117)

- 重构了 Input.TextArea 的文字计数实现方式，移至 `affixWrapper` 元素中。[PR #41450](https://github.com/ant-design/ant-design/pull/41450)

- DatePicker/Calendar 组件新增 `cellRender` 属性用于自定义日期单元格，并且废弃了 DatePicker 中的 `dateRender` 和 `monthRender` 属性，以及 Calendar 中的 `dateCellRender`、`monthCellRender`、`dateFullCellRender`、`monthFullCellRender` 属性。[PR #41584](https://github.com/ant-design/ant-design/pull/41584)

- 修复了 Tour 组件出现两个箭头的问题。[PR #41578](https://github.com/ant-design/ant-design/pull/41578)

- 修复了 Checkbox 配置 `controlHeight` token 时勾选框与文字不对齐的问题。[PR #41566](https://github.com/ant-design/ant-design/pull/41566)

- 修复了在 Modal 中使用 Form.Item 且存在 `help` 值时没有正确渲染元素的问题。[PR #40519](https://github.com/ant-design/ant-design/pull/40519)

- 修复了使用 Form 组件时状态不正确的问题。[PR #41594](https://github.com/ant-design/ant-design/pull/41594)

- 修复了 Slider 组件显示警告信息的问题。[PR #41540](https://github.com/ant-design/ant-design/pull/41540)

- 修复了可选择 Table 的勾选框在边缘点击时无法触发勾选的问题。[PR #41519](https://github.com/ant-design/ant-design/pull/41519)

- 更新了 TimePicker 德语本地化文案。[PR #41521](https://github.com/ant-design/ant-design/pull/41521)

- 修复了越南语本地化文案。[PR #41320](https://github.com/ant-design/ant-design/pull/41320) [PR #41345](https://github.com/ant-design/ant-design/pull/41345)

- 添加了缅甸语本地化文案。[PR #41366](https://github.com/ant-design/ant-design/pull/41366)

### 5.3.3 更新内容

**Menu**
- 修复 Menu 中的一个 bug，现在 `items` 将使用传入的 `key` 。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41434)。

- 修复 Menu 在选择主菜单时子菜单主题被覆盖的问题。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41465)。

**Table**
- 修复 Table 的一个 bug，现在过滤器在筛选下拉框展示时将保持状态。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41445)。

**Modal**
- 修复 Modal 使用 `useModal` 时未透传并优先选择用户设定的问题。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41422)。

**Form**
- 修复 Form 验证状态不按照顺序改变的问题。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41412)。

- 修复 Form 组件在 `layout="inline"` 时组件标题与表单项布局异常换行的问题。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41140)。

**ConfigProvider**
- 修复 ConfigProvider 中 `nonce` 对 CSS-in-JS 样式不生效的问题。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41482)。

**Pagination**
- 修复 Pagination 在 `size=small` 时，分页按钮 active 状态、上一页下一页按钮的 hover 和 active 样式丢失的问题。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41462) 和这个 [PR](https://github.com/ant-design/ant-design/pull/41458)。

**Tabs**
- 修复 Tabs 组件下边框与其他边框叠加的样式问题。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41381)。

**Dropdown.Button**
- 修复 Dropdown.Button 中 down 图标尺寸的问题。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41501)。

**TypeScript**
- 修复 Breadcrumb.Item 的 `menu` 类型定义不正确的问题。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41373)。

- 优化 Grid Col 的类型提示。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41453)。

- 优化 Table 的 `resetPagination` 的类型提示。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41415)。

- 优化 TreeSelect 的 `InternalTreeSelect` 的类型提示。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41386)。

**国际化**
- 完善 DatePicker 的 `fa_IR` 翻译。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41455)。

- 完善 `sv_SE` 语言的缺失内容。详细信息请参考这个 [PR](https://github.com/ant-design/ant-design/pull/41424)。



### Ant Design 5.3.2 更新内容

- Anchor 组件修复了设置为水平方向时多余的 border 样式的问题，修复了处于 `vertical` 方向时 ink 小方块样式的问题。[PR #41336](https://github.com/ant-design/ant-design/pull/41336)、[PR #41317](https://github.com/ant-design/ant-design/pull/41317)。

- Grid 组件修复了在不同设备屏幕下的 `offset` 设置不会被覆盖的问题。[PR #41309](https://github.com/ant-design/ant-design/pull/41309)。

- Breadcrumb 组件修复了 `onClick` 不工作的问题。[PR #41283](https://github.com/ant-design/ant-design/pull/41283)。

- Upload 组件修复了在上传完毕后 Progress 组件抛出警告的问题。[PR #41234](https://github.com/ant-design/ant-design/pull/41234)。

- Table 组件修复了在拖动元素一直右移时布局错误的问题。[PR #41139](https://github.com/ant-design/ant-design/pull/41139)。

- Tabs 组件修复了在深色模式下更多图标的色值问题。[PR #41313](https://github.com/ant-design/ant-design/pull/41313)。

- Button 组件修复了下拉时聚焦轮廓被其他元素遮挡的问题。[PR #41282](https://github.com/ant-design/ant-design/pull/41282)。

- Input.TextArea 组件修复了在 focus 状态下的样式问题。[PR #41228](https://github.com/ant-design/ant-design/pull/41228)。

此外，还进行了以下优化和修复：

- Input.TextArea 在启用 `showCount` 时 RTL 模式下位置不正确的问题修复。[PR #41319](https://github.com/ant-design/ant-design/pull/41319)。

- 导出了 Statistic 的 `CountdownProps` 类型。[PR #41341](https://github.com/ant-design/ant-design/pull/41341)。

- 优化了 Design Token 的类型提示和说明。[PR #41297](https://github.com/ant-design/ant-design/pull/41297)。

- 优化了 Badge `React.forwardRef` 类型定义。[PR #41189](https://github.com/ant-design/ant-design/pull/41189)。

### 5.3.1 更新记录

1. [DatePicker 底层依赖更新](https://github.com/ant-design/ant-design/pull/41090):
   - 修复在 Safari 下卡顿的问题
   - 支持在 `transform scale` 下对齐

2. [修复 Menu 收缩时的 Tooltip 弹出问题](https://github.com/ant-design/ant-design/issues/41081)

3. [修复 Modal.confirm 窗体高度不正确的问题](https://github.com/ant-design/ant-design/pull/41173):
   - 修复了额外节点导致高度不正确的问题

4. [修复 InputNumber 在 `disabled` 状态下字体高亮不正确的问题](https://github.com/ant-design/ant-design/pull/41167)

5. [修复动态添加 `items` 后 Anchor 高亮失效的问题](https://github.com/ant-design/ant-design/pull/40743)

6. [Mentions 底层依赖更新](https://github.com/ant-design/ant-design/pull/41160):
   - 支持在 `transform scale` 下对齐

7. [修复手工调用 `validateFields` 时 Form 中 `hasFeedback` 对成功态不生效的问题](https://github.com/ant-design/ant-design/pull/41116)

8. [修复 Cascader 在悬浮至叶子节点时展开面板没有关闭的问题](https://github.com/ant-design/ant-design/issues/41134)

9. [修复使用 `Promise` 关闭 Popconfirm 时再次打开仍然是 `loading` 状态的问题](https://github.com/ant-design/ant-design/pull/41121)

10. [修复在 React 18 下 Upload 的 `onChange` 有时数据不正确的问题](https://github.com/ant-design/ant-design/pull/41082)

11. [补充 Space.Compact 的示例并添加相应警告](https://github.com/ant-design/ant-design/pull/41080)

12. [更新韩语和阿姆哈拉语的国际化](https://github.com/ant-design/ant-design/pull/41103)

## Tooltip 组件新增了什么特性？

Tooltip 组件在 5.3.0 版本中新增了 `arrow.pointAtCenter` 特性，并废弃了 `arrow.arrowPointAtCenter` 特性。具体的变更可以在 [#40989](https://github.com/ant-design/ant-design/pull/40989) 查看。

### 修复 Progress 同时设置 percent 和 success.percent 时的问题是什么？

在 Ant Design 5.2.3 中，修复了一个问题，当同时设置 Progress 组件的 percent 和 success.percent 属性时，进度文本不会随着百分比的变化而改变。这个问题的解决使得进度组件在显示进度文本时可以正确地反映出百分比的改变。

### Image 组件的预览图标对齐问题是如何修复的？

在 Ant Design 5.2.3 中，修复了 Image 组件的一个问题，即预览图标不对齐的问题。通过修复该问题，现在 Image 组件在显示预览图标时可以正确地对齐，提升了组件的外观和用户体验。

### ConfigProvider 组件表单校验消息生效顺序是如何修复的？

在 Ant Design 5.2.3 中，修复了 ConfigProvider 组件的一个问题，即表单校验消息的生效顺序问题。修复后，表单校验消息将按照预期的顺序生效，确保了表单校验的正确性和一致性。该问题的修复由开发者 [@Wxh16144](https://github.com/Wxh16144) 提出。

以上是关于 Ant Design 5.2.3 版本的一些修复和改进的信息。这些修复和改进有助于提升 Ant Design 组件库的质量和功能性。

### DatePicker 组件在版本 5.2.2 中有哪些更新？

在 Ant Design 5.2.2 版本中，DatePicker 组件进行了以下更新：
- 调整了 DatePicker 组件日期面板的间距样式[#40768](https://github.com/ant-design/ant-design/pull/40768)
- 修复了 DatePicker.RangePicker `hover` 日期错位的问题[#40785](https://github.com/ant-design/ant-design/pull/40785)（贡献者：[Yuiai01](https://github.com/Yuiai01)）

### Form 组件在版本 5.2.2 中有哪些修复？

在 Ant Design 5.2.2 版本中，Form 组件进行了以下修复：
- 修复了 Form 下 Radio/Checkbox 的 disabled 优先级问题[#40741](https://github.com/ant-design/ant-design/pull/40741)（贡献者：[Yuiai01](https://github.com/Yuiai01)）
- 修复了 Form 为 `disabled` 时 Checkbox 和 Radio 表现不一致的问题[#40728](https://github.com/ant-design/ant-design/pull/40728)（贡献者：[Yuiai01](https://github.com/Yuiai01)）

### 在版本 5.2.2 中修复了哪些其他问题？

在 Ant Design 5.2.2 版本中，还修复了以下问题：
- 修复了 List 启用 `grid` 时下额外 `padding` 样式[#40806](https://github.com/ant-design/ant-design/pull/40806)
- 修复了 Upload 操作图标不对齐的问题[#40805](https://github.com/ant-design/ant-design/pull/40805)
- 调整了 Table 筛选菜单的底部圆角样式[#40802](https://github.com/ant-design/ant-design/pull/40802)
- 修复了 Button 组件 `loading.delay` 第一次不生效的问题[#40759](https://github.com/ant-design/ant-design/pull/40759)（贡献者：[RedJue](https://github.com/RedJue)）
- 修复了 Input `addonAfter` 和 `addonBefore` 的各种状态样式[#40744](https://github.com/ant-design/ant-design/pull/40744)（贡献者：[carla-cn](https://github.com/carla-cn)）
- 修复了 Skeleton 在 Safari 下 `active` 效果闪烁的问题[#40692](https://github.com/ant-design/ant-design/pull/40692)（贡献者：[slotDumpling](https://github.com/slotDumpling)）

### 在版本 5.2.2 中进行了哪些国际化相关的更新？

在 Ant Design 5.2.2 版本中，进行了以下国际化相关的更新：
- 补充了 Tour 法语本地化文案[#40750](https://github.com/ant-design/ant-design/pull/40750)（贡献者：[RedJue](https://github.com/RedJue)）
- 更新了韩国本地化文案[#40716](https://github.com/ant-design/ant-design/pull/40716)（贡献者：[owjs3901](https://github.com/owjs3901)）

### Ant Design 5.2.1 更新内容

- 修复了 Tour 组件中 `panelRender` 的问题，将其重构为函数式组件。[#40670](https://github.com/ant-design/ant-design/pull/40670)
- 修复了 Timeline 组件中 `className` 传递给子节点的问题。[#40700](https://github.com/ant-design/ant-design/pull/40700)
- 修复了 Slider 组件中标记点在边缘无法点击的问题。[#40679](https://github.com/ant-design/ant-design/pull/40679)
- 修复了 Tour 组件不支持 `0` 作为节点的问题。[#40631](https://github.com/ant-design/ant-design/pull/40631)
- 修复了 DatePicker.RangePicker 组件的 hover 范围样式。[#40607](https://github.com/ant-design/ant-design/pull/40607)
- 优化了 Steps 组件自定义 `icon` 的大小。[#40672](https://github.com/ant-design/ant-design/pull/40672)
- 在 TypeScript 中，Upload 组件现在支持泛型。[#40634](https://github.com/ant-design/ant-design/pull/40634)
- 在国际化方面，补全了 `ru_RU` 和 `uk_UA` 的文案。[#40656](https://github.com/ant-design/ant-design/pull/40656)

### 更新内容解析：

1. Tour 组件的 `panelRender` 已经被重构为函数式组件，以修复相关问题。你可以参考 [#40670](https://github.com/ant-design/ant-design/pull/40670) 进一步了解详情。
2. Timeline 组件的 `className` 传递给子节点的问题已经修复。你可以查看 [#40700](https://github.com/ant-design/ant-design/pull/40700) 了解详细信息。
3. Slider 组件的标记点现在可以在边缘处进行点击了，这个问题已经修复。具体详情请查看 [#40679](https://github.com/ant-design/ant-design/pull/40679)。
4. Tour 组件现在支持将 `0` 作为节点了，这个问题已经修复。你可以参考 [#40631](https://github.com/ant-design/ant-design/pull/40631) 了解更多。
5. DatePicker.RangePicker 组件的 hover 范围样式已经修复。你可以参考 [#40607](https://github.com/ant-design/ant-design/pull/40607) 了解详细信息。
6. Steps 组件优化了自定义 `icon` 的大小。你可以查看 [#40672](https://github.com/ant-design/ant-design/pull/40672) 了解更多详情。
7. 在 TypeScript 中，Upload 组件现在支持泛型。如果你需要使用泛型，可以参考 [#40634](https://github.com/ant-design/ant-design/pull/40634) 进一步了解。
8. 在国际化方面，已经补全了 `ru_RU` 和 `uk_UA` 的文案。更多详情请查看 [#40656](https://github.com/ant-design/ant-design/pull/40656)。

请注意，以上内容是基于 Ant Design 5.2.1 版本的更新。

### 更新作者信息：

- Tour 组件重构由 [@li-jia-nan](https://github.com/li-jia-nan) 完成。
- Timeline 组件修复由 [@any1024](https://github.com/any1024) 完成。
- Slider 组件修复由 [@LongHaoo](https://github.com/LongHaoo) 完成。
- Tour 组件节点问题修复同样由 [@li-jia-nan](https://github.com/li-jia-nan) 完成。
- DatePicker.RangePicker 的 hover 范围样式修复由 [@Yuiai01](https://github.com/Yuiai01) 完成。
- Steps 组件的自定义 `icon` 大小优化由 Ant Design 团队完成。
- TypeScript 中，Upload 组件泛型支持由 [@riyadelberkawy](https://github.com/riyadelberkawy) 完成。
- `ru_RU` 和 `uk_UA` 的文案补全由 [@eldarcodes](https://github.com/eldarcodes) 完成。

### 相关链接：

- [Ant Design 5.2.1 更新内容](https://github.com/ant-design/ant-design/releases/tag/5.2.1)
- [Pull Request #40670](https://github.com/ant-design/ant-design/pull/40670)
- [Pull Request #40700](https://github.com/ant-design/ant-design/pull/40700)
- [Pull Request #40679](https://github.com/ant-design/ant-design/pull/40679)
- [Pull Request #40631](https://github.com/ant-design/ant-design/pull/40631)
- [Pull Request #40607](https://github.com/ant-design/ant-design/pull/40607)
- [Pull Request #40672](https://github.com/ant-design/ant-design/pull/40672)
- [Pull Request #40634](https://github.com/ant-design/ant-design/pull/40634)
- [Pull Request #40656](https://github.com/ant-design/ant-design/pull/40656)

QA1：

### 5.2.0 版本注意事项

- Ant Design 5.2.0 版本增加了 Upload 组件的 `listType` 属性，新增了 `picture-circle` 样式，可用于上传列表项的展示。
- Anchor 组件新增了 `direction` 属性，支持垂直方向的展示。
- Tooltip 组件新增了 `arrow` 属性，用于控制箭头的显示状态和指向目标元素的中心。
- List 分页功能新增了 `align` 配置。
- Timeline 组件新增了 `items` 支持选项配置。
- Collapse 组件新增了 `size` 属性，用于设置折叠面板的大小。
- Collapse 组件和 Panel 组件新增了 ref 属性。
- Slider 组件新增了 `railStyle` 属性，可用于自定义轨道样式。
- Slider 组件新增了 `keyboard` 属性，可用于禁用键盘事件。
- 修复了 Slider 组件在展示 Tooltip 时动画丢失的问题。
- Dropdown 组件新增了 `autoAdjustOverflow` 属性。
- 修复了 Dropdown 组件在同时使用 `danger` 和 `disable` 属性时样式问题。
- Tour 组件新增了 `indicatorsRender` 属性，支持自定义指示器。
- Tour 组件新增了通过 `scrollIntoViewOptions` 改变 `scrollIntoView` 的选项。
- Tour 组件的遮罩支持传递自定义样式和填充颜色。
- 修复了 Tour 组件在严格模式下调用 `findDomNode` 抛出警告的问题。
- 优化了 Tour 组件的样式，删除了最后一个指示器的 margin。
- 新增了 Design token `fontFamilyCode` 并应用到 Typography 的 `code`、`kbd`、`pre` 等元素上。
- ConfigProvider 新增了 Form 的 `scrollToFirstError` 配置。
- 为全部组件补足了 `rootClassName` 属性。
- 修复了 Empty 组件在默认主题和暗黑主题下的描述文字颜色问题。
- 修复了 Table 组件行的 `aria-label` 和 `role="presentation"` 无法一起使用的问题。
- 修复了 Table 组件修改非受控的 `filtered` 属性修改不生效的问题。
- 修复了 Table 组件表头过滤器在分组标题情况下失效的问题。
- 修复了 Table 组件选择列固定时滚动会被其他单元格遮盖的问题。
- 修复了 Table 组件排序/筛选的表格的固定列背景色透明导致显示异常的问题。
- 优化了 Table 组件的 hover 样式，修复了边框异常问题。
- 修复了 DatePicker 组件禁用时状态样式生效的问题。
- 优化了 DatePicker 组件的输入框样式。
- 优化了 DatePicker 组件的 Dropdown 箭头样式。
- 修复了 Space 组件的选择器错误。
- 修复了 Spin 组件设置 `delay` 时没有立即关闭的问题。
- 修复了 Modal 组件的 `useModal` 默认确认按钮文本逻辑。
- 重构了水波纹效果，以支持多个水波纹同时触发。
- 重构了 Input.TextArea 组件和 Mentions 组件。
- 重构了 Affix Calendar 组件的函数使用方式。
- 修复了 Tabs 组件更多按钮高度样式错误。
- 修复了 Image 组件预览样式会被 TailwindCSS 影响的问题。
- 修复了 Progress 组件成功进度条的 `transition` 样式丢失问题。
- 修复了 Input.Group 组件在 Windows 下缩放屏幕时的错位问题。
- 修复了 Select 组件的 placeholder 样式问题。
- 调整了 Descriptions 组件的标签样式，使其更容易区分。
- 优化了 QRCode 组件过期显示的样式。
- 优化了 Design Token 中 `boxShadow` token 的分级。
- TypeScript 类型定义的优化和更新。

QA2：

### 5.2.0 版本更新内容

- Upload 组件新增 `listType` 属性的 `picture-circle` 样式支持。
- Anchor 组件新增 `direction` 属性，支持垂直方向。
- Tooltip 组件新增 `arrow` 属性，用于改变箭头的显示状态和指向目标元素的中心。
- List 分页功能新增 `align` 配置。
- Timeline 组件新增 `items` 支持选项配置。
- Collapse 组件新增 `size` 属性。
- Collapse 组件和 Panel 组件新增 ref 属性。
- Slider 组件新增 `railStyle` 属性用于自定义样式。
- Slider 组件新增 `keyboard` 属性以支持禁用键盘事件。
- Dropdown 组件新增 `autoAdjustOverflow` 属性。
- Tour 组件新增 `indicatorsRender` 属性以支持自定义指示器。
- Tour 组件支持通过 `scrollIntoViewOptions` 改变 `scrollIntoView` 的选项。
- Tour 组件遮罩支持传递自定义样式和填充颜色。
- Tour 组件修复在严格模式下调用 `findDomNode` 抛出警告问题。
- Tour 组件优化样式，删除了最后一个指示器的 margin。
- 新增 Design token `fontFamilyCode` 并应用到 Typography 的 `code` `kbd` `pre` 等元素上。
- ConfigProvider 新增 Form `scrollToFirstError`。
- 为全部组件补足 `rootClassName` 属性。
- 修复 Empty 在默认主题和暗黑主题下的描述文字颜色。
- Table 修复行 `aria-label` 和 `role="presentation"` 无法一起使用的问题。
- Table 修复非受控 `filtered` 修改不生效的问题。
- Table 修复表头过滤器在分组标题情况下失效的问题。
- Table 修复选择列固定时滚动会被其他单元格遮盖的问题。
- Table 修复排序/筛选的表格的固定列背景色透明导致显示异常问题。
- Table 优化 hover 样式，修复边框异常问题。
- DatePicker 修复组件禁用时状态样式生效的问题。
- DatePicker 优化输入框样式。
- DatePicker 优化 Dropdown 箭头样式。
- 修复 Space `ant-space-item` 选择器错误。
- 修复 Spin `delay` 设置时没有立即关闭的问题。
- 修复 Modal `useModal` 默认确认按钮文本逻辑。
- 重构水波纹视效，以支持多个水波纹同时触发了。
- 重构 Input.TextArea 组件和 Mentions 组件。
- 重构 Affix Calendar 使用 React.createRef 代替函数。
- 修复 Tabs 更多按钮高度样式错误。
- 修复 Image 预览样式会被 TailwindCSS 影响的问题。
- 修复 Progress 成功进度条 `transition` 样式丢失问题。
- 修复 Input.Group 在 windows 下缩放屏幕时的错位问题。
- 修复 Select placeholder 样式问题。
- 调整 Descriptions 标签样式使其更容易区分。
- 优化 QRCode 过期显示样式。
- Design Token 优化 `boxShadow` token 分级。
- TypeScript 优化各组件类型定义。

QA3:

### 5.2.0 版本更新摘要

- Upload 的 `listType` 属性新增 `picture-circle` 支持。
- Anchor 组件新增 `direction` 属性，支持 vertical。
- Tooltip 新增 `arrow` 属性用来改变箭头的显示状态和箭头是否指向目标元素的中心。
- List 分页新增 `align` 配置。
- Timeline 新增 `items` 支持选项

### 5.1.7 版本更新内容

- **修复 Input 组件 `type="search"` 时未隐藏浏览器原生取消按钮的问题**  
  修复了在使用 Input 组件的 `type="search"` 时，未隐藏浏览器原生取消按钮的问题。

- **修复 Input 的 suffix 颜色不随组件状态改变的问题**  
  修复了 Input 组件的 suffix 不随组件状态改变而改变颜色的问题。

- **修复 Switch 在 Safari 和 Chrome <= 84 兼容模式下文本的显示问题**  
  修复了 Switch 组件在 Safari 和 Chrome <= 84 兼容模式下文本显示错误的问题。

- **修复 Progress 的 `percent` 属性设置为 `null` 时报错的问题**  
  修复了当 Progress 组件的 `percent` 属性设置为 `null` 时产生错误的问题。

- **修复 List 中 title 和 avatar 渲染错位的问题**  
  修复了 List 组件中 title 和 avatar 渲染错位的问题。

- **修复 Dropdown 子菜单位置不正确的问题**  
  修复了 Dropdown 组件的子菜单位置不正确的问题。

- **修复 Badge 在 StrictMode 下切换 `dot` 时会报警告的问题**  
  修复了在使用 Badge 组件在 StrictMode 下切换到 `dot` 样式时会产生 `findDOMNode` 警告的问题。

- **修复 Message 图标颜色错误的问题**  
  修复了 Message 组件的图标颜色错误的问题。

- **优化 Empty 在暗色主题下默认的颜色**  
  优化了 Empty 组件在暗色主题下的默认颜色。

- **修复 Table 在 RTL 模式下的滚动阴影**  
  修复了 Table 在 RTL 模式下滚动时的阴影问题。

- **导出 ConfigProvider 组件的 ThemeConfig 类型**  
  导出了 ConfigProvider 组件的 ThemeConfig 类型。

以上是 5.1.7 版本的更新内容。

### 修复 DatePicker 动画问题的 PR

在 Ant Design 5.1.6 版本中，修复了 DatePicker 等组件动画 timing function 错误的问题。该问题的 PR 链接为 [#40133](https://github.com/ant-design/ant-design/pull/40133)。

### 修复 Menu 问题的 PR

在 Ant Design 5.1.6 版本中，修复了 Menu 收缩时，Tooltip 偶尔会错误展示的问题，以及修复了 Menu 分割线样式错误的问题。这些问题的 PR 链接分别为 [#40328](https://github.com/ant-design/ant-design/pull/40328) 和 [#40268](https://github.com/ant-design/ant-design/pull/40268)。

### 修复带波纹效果的组件问题的 PR

在 Ant Design 5.1.6 版本中，修复了带波纹效果的组件（如 Button、Switch、Tag）在波纹展示前移除时，控制台报错的问题。该问题的 PR 链接为 [#40307](https://github.com/ant-design/ant-design/pull/40307)。

以上是 Ant Design 5.1.6 版本的一些修复内容，你可以点击相应的 PR 链接查看详细的修复信息。

### Ant Design 5.1.5 更新说明

`2023-01-15`

#### 修复 Checkbox 组件 label 不对齐的问题
- 问题描述：Checkbox 组件的 label 不对齐。
- 修复链接：[#40208](https://github.com/ant-design/ant-design/pull/40208)

#### 修复 Button 水波纹效果有时会使得布局抖动的问题
- 问题描述：Button 的水波纹效果在某些情况下会导致布局抖动。
- 修复链接：[#40192](https://github.com/ant-design/ant-design/pull/40192)

#### 修复 Select 组件会卡住的问题
- 问题描述：Select 组件会出现卡住的情况。
- 修复链接：[#40158](https://github.com/ant-design/ant-design/pull/40158)
- 提交者：[@helloqian12138](https://github.com/helloqian12138)

#### 修复 Timeline 组件自定义颜色显示错误类名和对齐溢出的问题
- 问题描述：Timeline 组件的自定义颜色显示错误类名，并且对齐溢出问题。
- 修复链接：[#39394](https://github.com/ant-design/ant-design/pull/39394)
- 提交者：[@Wxh16144](https://github.com/Wxh16144)

#### 修复 Breadcrumb 最后一项颜色
- 问题描述：Breadcrumb 最后一项的颜色有问题。
- 修复链接：[#40119](https://github.com/ant-design/ant-design/pull/40119)
- 提交者：[@messaooudi](https://github.com/messaooudi)

#### 修复 Table 固定表头阴影样式错误
- 问题描述：Table 固定表头的阴影样式有错误。
- 修复链接：[#40171](https://github.com/ant-design/ant-design/pull/40171)
- 提交者：[@Wxh16144](https://github.com/Wxh16144)

#### 修复 Segmented hover 时圆角和选中圆角不一致的问题
- 问题描述：Segmented 在 hover 时圆角和选中圆角不一致。
- 修复链接：[#40175](https://github.com/ant-design/ant-design/pull/40175)
- 修复链接：[#40179](https://github.com/ant-design/ant-design/pull/40179)

#### TypeScript
- 修复 Tabs 组件 `onEdit` 类型问题
- 修复链接：[#39926](https://github.com/ant-design/ant-design/pull/39926)
- 提交者：[@RSS1102](https://github.com/RSS1102)

#### RTL
- 优化 DatePicker 在 RTL 模式下 next 和 prev 图标
- 修复链接：[#40238](https://github.com/ant-design/ant-design/pull/40238)
- 提交者：[@ds1371dani](https://github.com/ds1371dani)
- 修复 Badge 作用在块级元素上时 RTL 样式不生效的问题
- 修复链接：[#40125](https://github.com/ant-design/ant-design/pull/40125)

## 5.1.4 修复了哪些问题？

- 修复了 locale 文件丢失的问题。[详细信息](https://github.com/ant-design/ant-design/pull/40116)
- 修复了 Cascader 组件 RTL 模式中下拉菜单位置问题。[详细信息](https://github.com/ant-design/ant-design/pull/40109) [@3hson](https://github.com/3hson)
- 修复了 `rc-motion` 部分组件动画闪烁的问题。[详细信息](https://github.com/react-component/motion/pull/39)

## 修复的问题有哪些具体描述？

- 修复了一个 locale 文件丢失的问题，具体详细信息请参考 [此链接](https://github.com/ant-design/ant-design/pull/40116)。
- 修复了 Cascader 组件在 RTL 模式下下拉菜单位置不正确的问题，具体详细信息请参考 [此链接](https://github.com/ant-design/ant-design/pull/40109)。此修复是由 [@3hson](https://github.com/3hson) 提交的。
- 修复了部分使用了 `rc-motion` 组件的动画闪烁的问题，具体详细信息请参考 [此链接](https://github.com/react-component/motion/pull/39)。

## 这个版本的修复对开发者有什么影响？

这个版本修复了一些问题，主要包括：

- 修复了 locale 文件丢失的问题，确保各个地区的语言文件正确加载。
- 修复了 Cascader 组件在 RTL 模式下下拉菜单位置不正确的问题，提高了组件在 RTL 环境下的表现。
- 修复了部分使用了 `rc-motion` 组件的动画闪烁的问题，提升了动画效果的稳定性。

开发者在使用这个版本时，可以获得更好的用户体验，并且不再受到这些问题的影响。建议开发者升级到这个版本以享受修复带来的好处。

### Ant Design 5.1.3 - Table 更新内容

- 更新内容：
  - 优化 Table 的 `shouldCellUpdate` 逻辑，提升二次渲染速度。[#40063](https://github.com/ant-design/ant-design/pull/40063)
  - 修复 Table 中使用闭包数据时，更新闭包数据不会触发重新渲染的问题。[#40004](https://github.com/ant-design/ant-design/pull/40004)
  - 修复 Table filter 时边框会变黑的问题。[#39938](https://github.com/ant-design/ant-design/pull/39938)，感谢 [@JarvisArt](https://github.com/JarvisArt)

### Ant Design 5.1.3 - Button 更新内容

- 更新内容：
  - 修复 Button 水波纹效果不跟随屏幕滚动的问题。[#39954](https://github.com/ant-design/ant-design/pull/39954)
  - 修复 Button 的 `block` 属性无效的问题。[#39992](https://github.com/ant-design/ant-design/pull/39992)，感谢 [@li-jia-nan](https://github.com/li-jia-nan)

### Ant Design 5.1.3 - Menu 更新内容

- 更新内容：
  - 修复 Menu 自定义展开图标无法隐藏的错误。[#40071](https://github.com/ant-design/ant-design/pull/40071)，感谢 [@Wxh16144](https://github.com/Wxh16144)

## 官网主题编辑器主题上传功能是什么？

官网主题编辑器现在已经添加了主题上传功能。这意味着用户可以上传他们自己的主题来修改 Ant Design 的外观。用户可以定制各种颜色、字体和其他样式，以便让 Ant Design 在用户的应用程序中符合特定的品牌或设计要求。

## Wave 水波纹视效重构后有什么改进？

Wave 水波纹视效在最新版本中进行了重构，现在可以同时触发多个水波纹效果了。这意味着当用户与页面上的多个元素进行交互时，每个元素都可以显示水波纹效果，增强了用户体验和交互效果。

## Table 组件的修复有哪些改进？

Table 组件的修复包括以下内容：
- 修复了 Table `column.filtered` 更新不生效的问题。
- 修复了 Table 排序/筛选的固定列背景色透明的样式异常问题。
这些修复解决了 Table 组件在使用列筛选和固定列时遇到的问题，现在可以正常工作了。

以上就是最新版本的一些修复和改进。通过更新版本，用户可以获得更稳定和更好的体验。

## 问题1：Ant Design 5.1.1 更新了哪些内容？

Ant Design 5.1.1 的更新内容包括：

- 在构建流程中去掉对 IE 等旧版本浏览器的支持以减少包体积。
- 提升 Transfer 在大数据量下勾选和移动节点时的性能。
- Design Token 修复组件字体错误问题。
- 修复 Drawer `placement` `open` `width` 等参数为 undefined 时默认值不生效的问题。
- 修复 Menu 切换时图标动画效果不流畅的问题。
- 修复 Image 预览操作条在动态过程中会被高 zIndex 的元素覆盖。
- 修复 List 组件分页器错误参数导致报错问题。
- 修复 Space `align="baseline"` 不生效的问题。
- 修复 Table 可扩展行标题没有左上边框半径的问题。
- 修复 Table 列头的圆角丢失问题。
- 修复 Table 组件合并单元格后底部边框消失和边框重叠时颜色变深的问题。
- 修正 Table `aria-*` 属性到 table 元素上以支持更好的可访问性。
- 重置 Table 列的 `aria-label` 属性值。
- 为 Table 边框添加过渡动画使其 hover 效果更顺滑。
- 修复 Tabs 添加按钮在暗色模式下不可见的问题。
- 修复 Card 只有 `extra` 时标题栏高度不足的问题。
- 修复 Row 组件 `justify` 和 `align` 属性，动态改变不生效的问题。
- 修复 App 中 `children` 使用相同 key 的警告。
- Image 组件预览交互优化。
- 修复 Table 筛选菜单选中背景色和菜单阴影样式。
- TypeScript 修复部分 Design Token 缺少类型提示的问题。

## 问题2：Ant Design 5.1.1 中 CSS 变量模式的使用方法是什么？

Ant Design 5.1.1 开始支持 CSS 变量模式，并将所有 Design Token 纳入 CSS 变量的管理范畴。使用 CSS 变量模式可以减少样式体积，并且在同一组件中不同主题下的样式可以共享。切换主题时也不需要重新序列化样式，提升了主题切换的性能。如果你的应用依赖 Ant Design 的主题能力，建议开启 CSS 变量模式。

## 问题3：Ant Design 5.1.1 中哪些问题得到了修复？

Ant Design 5.1.1 中修复的问题包括：

- Transfer 在大数据量下勾选和移动节点时的性能问题。
- Design Token 组件字体错误问题。
- Drawer `placement` `open` `width` 等参数为 undefined 时默认值不生效的问题。
- Menu 切换时图标动画效果不流畅的问题。
- Image 预览操作条在动态过程中会被高 zIndex 的元素覆盖的问题。
- List 组件分页器错误参数导致报错问题。
- Space `align="baseline"` 不生效的问题。
- Table 可扩展行标题没有左上边框半径的问题。
- Table 列头的圆角丢失问题。
- Table 组件合并单元格后底部边框消失和边框重叠时颜色变深的问题。
- Table `aria-*` 属性到 table 元素上以支持更好的可访问性。
- Table 列的 `aria-label` 属性值重置。
- Table 边框添加过渡动画使其 hover 效果更顺滑。
- Tabs 添加按钮在暗色模式下不可见的问题。
- Card 只有 `extra` 时标题栏高度不足的问题。
- Row 组件 `justify` 和 `align` 属性，动态改变不生效的问题。
- App 中 `children` 使用相同 key 的警告问题。
- Image 组件预览交互优化。
- Table 筛选菜单选中背景色和菜单阴影样式问题。
- TypeScript 部分 Design Token 缺少类型提示的问题。

### 版本 5.1.0 更新了哪些组件和功能？

版本 5.1.0 更新了以下组件和功能：

- 新增了 App 包裹组件，提供了重置样式和提供消费上下文的默认环境。
- 新增了 QRCode 二维码组件。
- 新增了 Watermark 水印组件。
- Mentions 组件新增了 options 配置。
- FloatButton 组件新增了支持点击外侧自动关闭功能。
- Popconfirm 组件新增了 description 属性。
- Modal.confirm 新增了 footer 属性以自定义按钮列表。
- Table 新增了 rowScope 以设置列范围。
- Anchor 新增了 items 数据化配置选项内容，支持通过 children 嵌套。
- Grid 组件的响应式断点现在会消费主题 token 配置。
- Tour 的 prevButtonProps 和 nextButtonProps 新增了 style 和 classname 设置。
- ConfigProvider 现在支持配置 select.showSearch。
- 修复了 Tabs 组件在 StrictMode 下不展示 inkBar 的问题。
- 修复了 Badge 组件宽度不受父元素影响的问题。
- Select 组件修复了 icon 颜色使用的 token，并优化了无障碍体验。
- 修复了 Tour 组件设置 type="primary" 无效的问题。
- 修复了带有 href 的 Button 组件在 disabled 时 style 不生效的问题。
- 修复了 Segmented 组件 icon 与文字间距消失的问题。
- 修复了 Drawer 组件关于 DefaultProps 的警告。
- Menu 组件修复了在 React18 中使用 createRoot 渲染 Menu.Submenu 会闪烁的问题，并且重构了 Menu.MenuItem 为 Function Component，优化了选中样式。
- LocaleProvider 在 4.x 中已废弃（使用 ConfigProvider locale 替代），在 5.x 中彻底移除了相关目录 antd/es/locale-provider、antd/lib/locale-provider。
- 简化了 lodash 方法的引用。
- TypeScript 优化了 Button、DropDown、Modal、Popconfirm、Select 和 Transfer 的鼠标事件类型定义，并新增了 FloatButton 导出类型 FloatButtonGroupProps。
- 国际化补全了 fr_BE、fr_CA 和 eu_ES 的文案。

### 5.1.0 更新的 QRCode 二维码组件如何使用？

在版本 5.1.0 中，新增了 QRCode 二维码组件。您可以通过以下步骤使用 QRCode 组件：

1. 在您的前端项目中引入 antd 的库文件。

```javascript
import { QRCode } from 'antd';
```

2. 在需要展示二维码的地方使用 QRCode 组件。

```jsx
<QRCode value="https://example.com" />
```

3. 将 `value` 属性设置为您要生成二维码的内容，例如一个网址。

通过以上步骤，您就可以在您的前端项目中使用 QRCode 组件生成二维码了。

### 5.1.0 更新的 Watermark 水印组件如何使用？

在版本 5.1.0 中，新增了 Watermark 水印组件。您可以通过以下步骤使用 Watermark 组件：

1. 在您的前端项目中引入 antd 的库文件。

```javascript
import { Watermark } from 'antd';
```

2. 在需要添加水印的地方使用 Watermark 组件。

```jsx
<Watermark text="Confidential" />
```

3. 将 `text` 属性设置为您要展示的水印文本。

通过以上步骤，您就可以在您的前端项目中使用 Watermark 组件添加水印了。

## 问题：Ant Design 5.0.7修复了哪些问题？

回答：
Ant Design 5.0.7修复了以下问题：
1. 修复了Slider组件Tooltip动画丢失问题。修复链接：[#39463](https://github.com/ant-design/ant-design/pull/39463)
2. 修复了Table组件有边框且为空时出现横向滚动条的问题。修复链接：[#39455](https://github.com/ant-design/ant-design/pull/39455)
3. 修复了Popover组件箭头背景色不随自定义颜色改变的问题。修复链接：[#39517](https://github.com/ant-design/ant-design/pull/39517)
4. 修复了Modal hooks没有完全传递ConfigProvider配置的问题。修复链接：[#39513](https://github.com/ant-design/ant-design/pull/39513)
5. 修复了Radio组件尺寸修改后不对齐的问题。修复链接：[#39476](https://github.com/ant-design/ant-design/pull/39476)

以上是Ant Design 5.0.7修复的问题列表。

### 修复 FloatButton 的 `toolip` 属性不支持设置为 `0` 的问题

用户反馈了一个问题，即 FloatButton 的 `toolip` 属性不支持设置为 `0`，经过修复后的版本是 5.0.6。具体的修复内容可以查看 [这个链接](https://github.com/ant-design/ant-design/pull/39425)。修复该问题的贡献者是 [@li-jia-nan](https://github.com/li-jia-nan)。

### 修复 Space 组件包裹的 Select 系列组件在 hover 时清除图标不展示的问题

用户报告了一个问题，即 Space 组件包裹的 Select 系列组件在 hover 时清除图标不展示。经过修复后的版本是 5.0.6。具体的修复内容可以查看 [这个链接](https://github.com/ant-design/ant-design/pull/39468)。修复该问题的贡献者是 [@foryuki](https://github.com/foryuki)。

### 修复 Cascader 内部 ul 的 margin 值异常的问题

用户反馈了一个问题，即 Cascader 内部 ul 的 margin 值异常。经过修复后的版本是 5.0.6。具体的修复内容可以查看 [这个链接](https://github.com/ant-design/ant-design/pull/39436)。修复该问题的贡献者是 [@ZN1996](https://github.com/ZN1996)。

## 问题1：Ant Design 5.0.5 修复了哪些问题？

Ant Design 5.0.5 版本修复了以下问题：

1. 修复了 Space.Compact 下 Button 的 hover 样式问题。[#39157](https://github.com/ant-design/ant-design/pull/39157) [@foryuki](https://github.com/foryuki)

2. 修复了 Tabs 在 Windows Chrome 下高亮条有时候会丢失的问题。[#39352](https://github.com/ant-design/ant-design/pull/39352) [@heiyu4585](https://github.com/heiyu4585)

3. 修复了 Divider 的 `horizontal` 在 flex 布局下的对齐问题。[#39339](https://github.com/ant-design/ant-design/pull/39339)

4. 修复了 Popover 在 rtl 模式下宽度异常的问题。[#39311](https://github.com/ant-design/ant-design/pull/39311)

5. 修复了 Popconfirm 组件 token 配置线框化后边框坍缩的样式问题。[#39313](https://github.com/ant-design/ant-design/pull/39313)

6. 修复了 Select 组件搜索框会出现空白区域的样式问题。[#39299](https://github.com/ant-design/ant-design/pull/39299)

7. 修复了 Tree 丢失选中样式的问题。[#39292](https://github.com/ant-design/ant-design/pull/39292)

8. 修复了 FloatButton 自定义尺寸时，内容不居中的问题。[#39282](https://github.com/ant-design/ant-design/pull/39282) [@li-jia-nan](https://github.com/li-jia-nan)

9. 修复了 DatePicker.RangePicker 日期 hover 样式。[#39266](https://github.com/ant-design/ant-design/pull/39266)

10. 优化了 Button 在 Space.Compact 下的 Hover 样式。[#39241](https://github.com/ant-design/ant-design/pull/39241) [@foryuki](https://github.com/foryuki)

11. 修正了 `vi_VN` 国际化描述。[#39279](https://github.com/ant-design/ant-design/pull/39279) [@nghiepdev](https://github.com/nghiepdev)

12. 修正了 `he_IL` 国际化描述。[#39280](https://github.com/ant-design/ant-design/pull/39280) [@Ran-Sagy](https://github.com/Ran-Sagy)

13. TypeScript 方面，优化了 Anchor 的 `onClick` 的事件类型定义。[#39305](https://github.com/ant-design/ant-design/pull/39305) [@li-jia-nan](https://github.com/li-jia-nan)

## 问题2：Ant Design 5.0.5 版本修复了哪些样式问题？

在 Ant Design 5.0.5 版本中，修复了以下样式问题：

1. 修复了 Space.Compact 下 Button 的 hover 样式问题。[#39157](https://github.com/ant-design/ant-design/pull/39157) [@foryuki](https://github.com/foryuki)

2. 修复了 Tabs 在 Windows Chrome 下高亮条有时候会丢失的问题。[#39352](https://github.com/ant-design/ant-design/pull/39352) [@heiyu4585](https://github.com/heiyu4585)

3. 修复了 Divider 的 `horizontal` 在 flex 布局下的对齐问题。[#39339](https://github.com/ant-design/ant-design/pull/39339)

4. 修复了 Popover 在 rtl 模式下宽度异常的问题。[#39311](https://github.com/ant-design/ant-design/pull/39311)

5. 修复了 Popconfirm 组件 token 配置线框化后边框坍缩的样式问题。[#39313](https://github.com/ant-design/ant-design/pull/39313)

6. 修复了 Select 组件搜索框会出现空白区域的样式问题。[#39299](https://github.com/ant-design/ant-design/pull/39299)

7. 修复了 Tree 丢失选中样式的问题。[#39292](https://github.com/ant-design/ant-design/pull/39292)

8. 修复了 FloatButton 自定义尺寸时，内容不居中的问题。[#39282](https://github.com/ant-design/ant-design/pull/39282) [@li-jia-nan](https://github.com/li-jia-nan)

9. 修复了 DatePicker.RangePicker 日期 hover 样式。[#39266](https://github.com/ant-design/ant-design/pull/39266)

10. 优化了 Button 在 Space.Compact 下的 Hover 样式。[#39241](https://github.com/ant-design/ant-design/pull/39241) [@foryuki](https://github.com/foryuki)

## 问题3：Ant Design 5.0.5 版本修正了哪些国际化描述？

在 Ant Design 5.0.5 版本中，修正了以下国际化描述问题：

1. 修正了 `vi_VN` 的国际化描述。[#39279](https://github.com/ant-design/ant-design/pull/39279) [@nghiepdev](https://github.com/nghiepdev)

2. 修正了 `he_IL` 的国际化描述。[#39280](https://github.com/ant-design/ant-design/pull/39280) [@Ran-Sagy](https://github.com/Ran-Sagy)

### 修复 Modal 文字内容过多会超出框体的样式问题

在 Ant Design 5.0.4 版本中，修复了一个 Modal 组件的样式问题。当 Modal 的文字内容过多时，会导致内容超出框体的情况。修复后，Modal 的样式将会正确处理文字内容的溢出问题。

这个修复是通过修复 Modal 的样式代码来实现的。具体的修复细节可以参考[此链接](https://github.com/ant-design/ant-design/pull/39249)。修复人员是 [@MuxinFeng](https://github.com/MuxinFeng)。

### 修复 Modal.info 没有图标时，内容宽度不正确的问题

在 Ant Design 5.0.4 版本中，修复了一个 Modal 组件的样式问题。当使用 Modal.info 方法创建一个没有图标的弹窗时，弹窗的内容宽度会出现不正确的情况。修复后，Modal.info 方法将会正确处理没有图标的情况下的内容宽度。

这个修复是通过修复 Modal 的样式代码来实现的。具体的修复细节可以参考[此链接](https://github.com/ant-design/ant-design/pull/39047)。修复人员是 [@owjs3901](https://github.com/owjs3901)。

### 修复 Tree checkable 与 blockNode 配合时，title 元素不拉伸的问题

在 Ant Design 5.0.4 版本中，修复了一个 Tree 组件的样式问题。当 Tree 的 checkable 属性与 blockNode 属性配合使用时，会导致 title 元素不正确地拉伸。修复后，Tree 组件将正确处理 checkable 属性与 blockNode 属性的组合情况下的样式。

这个修复是通过修复 Tree 的样式代码来实现的。具体的修复细节可以参考[此链接](https://github.com/ant-design/ant-design/pull/39209)。修复人员是 [@Wxh16144](https://github.com/Wxh16144)。

请注意，以上信息来自于 Ant Design 5.0.4 版本的更新日志，并经过简化和优化以适应 QA 文档的格式。更多详细信息，请参考更新日志中的链接。

### 修复 Spin 包裹模式时的样式偏移问题
在 Ant Design 5.0.3 版本中，修复了 Spin 包裹模式下的样式偏移问题。该问题在 GitHub 上的 issue [#38923](https://github.com/ant-design/ant-design/pull/38923) 中提到，并由 [@sribich](https://github.com/sribich) 提交了修复。

### 修复 Menu 溢出时下拉菜单的样式问题
Ant Design 5.0.3 版本中，修复了当 Menu 溢出时下拉菜单的样式问题。这个问题的解决方案可以在 GitHub 上的 issue [#39093](https://github.com/ant-design/ant-design/pull/39093) 中找到。

### 修复 hover 在 Menu.Item 外面时颜色变蓝的问题
在 Ant Design 5.0.3 版本中，修复了当在 Menu.Item 外面进行 hover 操作时，颜色变蓝的问题。这个问题的修复提交可以在 GitHub 上的 issue [#39077](https://github.com/ant-design/ant-design/pull/39077) 中查看。修复的提交者是 [@Pulset](https://github.com/Pulset)。

### 修复 Input.TextArea 没有重置样式导致 resize 行为和 4.x 不一致的问题
Ant Design 5.0.3 版本中，修复了 Input.TextArea 没有重置样式导致 resize 行为和 4.x 不一致的问题。这个问题的修复可在 [aa92f02](https://github.com/ant-design/ant-design/commit/aa92f02) 中查看。

### 修复 Upload 默认图标颜色
Ant Design 5.0.3 版本中，修复了 Upload 默认图标颜色的问题。该修复可在 GitHub 上的 issue [#39114](https://github.com/ant-design/ant-design/pull/39114) 中找到，并由 [@MARKX97](https://github.com/MARKX97) 提交了修复。

### 修复 `@ant-design/cssinjs` dev 下动态 hashId 导致的 ssr 注水失败的问题
在 Ant Design 5.0.3 版本中，修复了 `@ant-design/cssinjs` 在开发模式下动态 hashId 导致的 ssr 注水失败的问题。这个修复可在 GitHub 上的 issue [#39069](https://github.com/ant-design/ant-design/pull/39069) 中找到。

### 修复 FloatButton.Group 关闭时闪烁的问题
Ant Design 5.0.3 版本中，修复了 FloatButton.Group 在关闭时闪烁的问题。这个修复可在 GitHub 上的 issue [#39061](https://github.com/ant-design/ant-design/pull/39061) 中找到。

### 修复 Card.Meta 宽度没有默认填满容器的问题
在 Ant Design 5.0.3 版本中，修复了 Card.Meta 宽度没有默认填满容器的问题。该修复可在 GitHub 上的 issue [#39026](https://github.com/ant-design/ant-design/pull/39026) 中找到，并由 [@justanotheranonymoususer](https://github.com/justanotheranonymoususer) 提交了修复。

### 修复了 Card 组件设置 bodyStyle 的背景颜色后圆角失效的问题吗？
是的，根据提交记录[#38973](https://github.com/ant-design/ant-design/pull/38973)和贡献者[@Yukiniro](https://github.com/Yukiniro)的信息，Ant Design修复了Card组件设置bodyStyle的背景颜色后圆角失效的问题。

### Design Token 进行了怎样的优化？
Design Token进行了错误色的默认算法优化。根据提交记录[#38933](https://github.com/ant-design/ant-design/pull/38933)来看。

### RTL 模式下修复了哪些样式问题？
Ant Design修复了RTL模式下的样式问题。根据提交记录[#38829](https://github.com/ant-design/ant-design/pull/38829)和贡献者[@Wxh16144](https://github.com/Wxh16144)的信息来看。

### Space.Compact 组件有哪些更新和修复？
Space.Compact组件进行了如下更新和修复：
- 为Space.Compact组件包裹的单个子组件展示了该子组件本身的样式。根据提交记录[#38896](https://github.com/ant-design/ant-design/pull/38896)和贡献者[@foryuki](https://github.com/foryuki)的信息来看。
- 修复了Space.Compact组件嵌套Modal，Dropdown，Drawer等组件时的样式问题。根据提交记录[#38870](https://github.com/ant-design/ant-design/pull/38870)和贡献者[@foryuki](https://github.com/foryuki)的信息来看。

### 是否修复了横向 Menu 组件的宽度问题？
是的，Ant Design修复了横向Menu组件有溢出时的宽度问题。根据提交记录[#38989](https://github.com/ant-design/ant-design/pull/38989)来看。

### Table 组件是否修复了过滤列被移除后仍影响列表数据的问题？
是的，Ant Design修复了Table组件过滤列被移除后过滤效果仍然影响列表数据的问题。根据提交记录[#38982](https://github.com/ant-design/ant-design/pull/38982)来看。

### Select 和 Pagination 在暗色主题下的文字颜色是否修复？
是的，Ant Design修复了Select和Pagination在暗色主题下文字颜色不正确的问题。根据提交记录[#38979](https://github.com/ant-design/ant-design/pull/38979)和贡献者[@Dunqing](https://github.com/Dunqing)的信息来看。

### Mentions 的 options 是否修复了不生效的问题？
是的，Ant Design修复了Mentions的options不生效的问题。根据提交记录[#38968](https://github.com/ant-design/ant-design/pull/38968)和贡献者[@heiyu4585](https://github.com/heiyu4585)的信息来看。

### 是否修复了 reset.css 不会被打包的问题？
是的，Ant Design修复了reset.css不会被打包的问题。根据提交记录[#38956](https://github.com/ant-design/ant-design/pull/38956)和贡献者[@passerV](https://github.com/passerV)的信息来看。

### Badge 组件的 showZero 和 color 是否可以一起使用了？
是的，Ant Design修复了Badge组件的showZero和color不能一起使用的问题。根据提交记录[#38967](https://github.com/ant-design/ant-design/pull/38967)和贡献者[@Wxh16144](https://github.com/Wxh16144)的信息来看。

### Form 校验信息动画是否卡顿问题得到了解决吗？
是的，Ant Design修复了Form校验信息动画卡顿的问题。根据提交记录[#38962](https://github.com/ant-design/ant-design/pull/38962)来看。

### Tabs 下拉菜单的动画问题是否修复了？
是的，Ant Design修复了Tabs下拉菜单动画消失的问题。根据提交记录[#38892](https://github.com/ant-design/ant-design/pull/38892)来看。

### ConfigProvider 的 componentDisabled 是否修复了失效的问题？
是的，Ant Design修复了ConfigProvider的componentDisabled失效问题。根据提交记录[#38886](https://github.com/ant-design/ant-design/pull/38886)和贡献者[@lidianhao123](https://github.com/lidianhao123)的信息来看。

### Button 的 block 属性有时是否不生效的问题得到解决了吗？
是的，Ant Design修复了Button的block属性有时不生效的问题。根据提交记录[#38869](https://github.com/ant-design/ant-design/pull/38869)和贡献者[@jjlstruggle](https://github.com/jjlstruggle)的信息来看。

### Dropdown.Button 的 dropdownRender 是否修复未执行的问题？
是的，Ant Design修复了Dropdown.Button的dropdownRender未执行的问题。根据提交记录[#38862](https://github.com/ant-design/ant-design/pull/38862)和贡献者[@imoctopus](https://github.com/imoctopus)的信息来看。

### 5.0.1 版本更新

更新日期：2022-11-22

#### 优化 Empty 组件的暗色主题下的颜色

- 问题链接：[#38785](https://github.com/ant-design/ant-design/pull/38785)

#### 修复样式丢失的问题

- 问题链接：[#38742](https://github.com/ant-design/ant-design/pull/38742)
- 影响的组件：Form, Input, Select, Tree

#### 修复 Firefox 下拉菜单动画抖动的问题

- 问题链接：[#38729](https://github.com/ant-design/ant-design/pull/38729)
- 影响的组件：Dropdown

#### Menu 组件的修复

- 修复 Menu SubMenu 间距问题
  - 问题链接：[#38714](https://github.com/ant-design/ant-design/pull/38714)
  - 贡献者：[@JarvisArt](https://github.com/JarvisArt)
- 修复 Menu 暗色主题下高度多了 1px 的问题
  - 问题链接：[#38741](https://github.com/ant-design/ant-design/pull/38741)
  - 贡献者：[@LuciNyan](https://github.com/LuciNyan)
- 修复 Menu 展开 Submenu 时抖动的问题
  - 问题链接：[#38748](https://github.com/ant-design/ant-design/pull/38748)
  - 贡献者：[@JarvisArt](https://github.com/JarvisArt)

#### 修复 Table 组件展开 icon 不对齐的问题

- 问题链接：[#38823](https://github.com/ant-design/ant-design/pull/38823)
- 贡献者：[@turdiyev](https://github.com/turdiyev)

#### 修复 FloatButton.BackTop 组件动画丢失的问题

- 问题链接：[#38770](https://github.com/ant-design/ant-design/pull/38770)
- 贡献者：[@li-jia-nan](https://github.com/li-jia-nan)

#### 清除残留 Moment.js 依赖

- 问题链接：[#38762](https://github.com/ant-design/ant-design/pull/38762)

#### 修复组件类型报错

- 问题链接：[#38666](https://github.com/ant-design/ant-design/pull/38666)
- 贡献者：[@wangcch](https://github.com/wangcch)

#### 重新添加 lib 产物

- 问题链接：[#38832](https://github.com/ant-design/ant-design/pull/38832)
- 贡献者：[@chunsch](https://github.com/chunsch)

请根据上述信息生成 QA 文档。

#### Q1: Ant Design 5.x 有哪些新增的组件？
##### A1: 
Ant Design 5.x 新增的组件有：
- FloatButton 悬浮按钮
- Tour 漫游式引导

##### 相关链接：
- FloatButton 悬浮按钮：[#37520](https://github.com/ant-design/ant-design/pull/37520) [@li-jia-nan](https://github.com/li-jia-nan)
- Tour 漫游式引导：[#37867](https://github.com/ant-design/ant-design/pull/37867) [#38469](https://github.com/ant-design/ant-design/pull/38469) [@heiyu4585](https://github.com/heiyu4585)

#### Q2: Ant Design 5.x 有哪些新增的组件变体？
##### A2:
Ant Design 5.x 新增的组件变体有：
- DatePicker 新增 `presets` 属性用于预设时间范围快捷选择
- Progress `circle` 类型支持小尺寸自适应
- Steps 新增 `inline` 类型

##### 相关链接：
- DatePicker 新增 `presets` 属性用于预设时间范围快捷选择：[#38249](https://github.com/ant-design/ant-design/pull/38249)
- Progress `circle` 类型支持小尺寸自适应：[#38231](https://github.com/ant-design/ant-design/pull/38231) [@li-jia-nan](https://github.com/li-jia-nan)
- Steps 新增 `inline` 类型：[#38311](https://github.com/ant-design/ant-design/pull/38311) [@JarvisArt](https://github.com/JarvisArt)

#### Q3: Ant Design 5.x 有哪些设计变化？
##### A3:
Ant Design 5.x 的设计变化包括：
- 调整主色为 `#1677ff`
- 基础圆角调整为 `6px`，并支持梯度圆角
- 优化组件整体动画速度，效果更简练
- 对部分组件进行了去线框化和间距上的调整，整体风格更加简洁
- 优化部分组件 focus 样式
- 优化组件圆角较大时的部分样式
- 优化 Switch 组件动画效果
- 优化 Anchor 组件样式 UI 设计

##### 相关链接：
- 调整主色：[#37254](https://github.com/ant-design/ant-design/pull/37254)
- 基础圆角调整：[#37146](https://github.com/ant-design/ant-design/pull/37146) [#37369](https://github.com/ant-design/ant-design/pull/37369)
- 优化组件整体动画速度：[#37438](https://github.com/ant-design/ant-design/pull/37438)
- 去线框化和间距上的调整：[#37283](https://github.com/ant-design/ant-design/pull/37283)
- 优化部分组件 focus 样式：[#37483](https://github.com/ant-design/ant-design/pull/37483)
- 优化组件圆角较大时的样式：[#37370](https://github.com/ant-design/ant-design/pull/37370) [#37498](https://github.com/ant-design/ant-design/pull/37498) [#37491](https://github.com/ant-design/ant-design/pull/37491) [#37634](https://github.com/ant-design/ant-design/pull/37634) [#38009](https://github.com/ant-design/ant-design/pull/38009) [#37433](https://github.com/ant-design/ant-design/pull/37433)
- 优化 Switch 组件动画效果：[#37658](https://github.com/ant-design/ant-design/pull/37658)
- 优化 Anchor 组件样式 UI 设计：[#38616](https://github.com/ant-design/ant-design/pull/38616)

#### 相关链接：
[GitHub Pull Requests](https://github.com/ant-design/ant-design/pulls)

以上是关于 Ant Design 5.x 的主要变化的信息。请注意，这些信息可能会更新，建议参阅相关的 GitHub Pull Requests 获取最新的变化。