group: title: 其他 order: 2 title: FAQ

以下整理了一些 Ant Design 社区常见的问题和官方答复，在提问之前建议找找有没有类似的问题。此外我们也维护了一个反馈较多 [FAQ issues 标签](http://u.ant.design/faq) 亦可参考。

Ant Design 5.x 如何使用 CSS 变量模式？

Ant Design 5.x 的 CSS 变量模式是从版本 5.12.0 开始重新支持的功能。与 4.x 版本不同的是，这次 Ant Design 融合了 CSS-in-JS 的能力，并将所有 Design Token 纳入了 CSS 变量的管理范畴。这意味着在同一组件中，不同主题下的样式可以共享，从而减少样式体积。此外，切换主题时不再需要重新序列化样式，提升了主题切换的性能。如果你的应用依赖 Ant Design 的主题能力，强烈建议开启 CSS 变量模式。

如何开启 Ant Design 的 CSS 变量模式？

要开启 Ant Design 的 CSS 变量模式，你需要在项目中使用 Ant Design 5.x 的版本，并在主题文件中设置 `@useCssVars: true`。这样，Ant Design 将会自动将 Design Token 转化为 CSS 变量，并应用到组件的样式中。具体的使用方法可以参考 Ant Design 官方文档中关于主题的章节。

CSS 变量模式能在已经使用了 Ant Design 4.x 的项目中引入吗？

CSS 变量模式是 Ant Design 从 5.12.0 版本开始支持的功能，与之前的 4.x 版本不兼容。如果你想在已经使用了 Ant Design 4.x 的项目中使用 CSS 变量模式，你需要进行较大的代码和样式改动。建议在新项目中尝试使用 CSS 变量模式，或者等待后续版本中更加完善的兼容性。

以上是关于 Ant Design 的 CSS 变量模式的常见问题和解答。如果你还有其他疑问，可以参考 [Ant Design FAQ issues](http://u.ant.design/faq) 中的问题，或者在社区中提问寻求帮助。

### 在 antd 的受控组件中，`undefined` 和 `null` 有区别吗？

在 antd 中，`undefined` 和 `null` 是有区别的。antd 的约定是：`undefined` 是非受控的标志，而 `null` 则被视为显式的受控空值。这样做的目的是为了处理一些特殊情况下的场景，比如当 `value` 由非空值变为 `undefined` 或 `null` 时，组件会被视为非受控。

### 在 antd 的输入元素中，`undefined` 和 `null` 的作用是什么？

在 React 的输入元素中，`undefined` 和 `null` 都被视为非受控的标志。当 `value` 的值从非空值变为 `undefined` 或 `null` 时，组件就会变成非受控状态。这种情况通常会在一些意外情况下发生。

### antd 中，何时应该使用 `undefined`，何时应该使用 `null`？

在 antd 中，使用 `undefined` 表示非受控的状态，而使用 `null` 则表示显式的受控空值。这样做的目的是为了处理一些特定的场景，比如当需要清空一个复杂数据类型的值时（例如使用 `allowClear` 清空 `value`），可以将 `value` 设置为 `null` 来达到将其置为空值的效果。

请注意，在类 `Select` 组件的 `options` 中，强烈建议不要使用 `undefined` 和 `null` 作为 `option` 的 `value`，而应该使用字符串或数字作为 `value` 的类型。

### 点击 `Select Dropdown DatePicker TimePicker Popover Popconfirm` 内的另一个 popup 组件时它会消失，如何解决？

该问题在 `3.11.0` 后已经解决。如果你仍在使用旧版本，你可以通过 `<Select getPopupContainer={trigger => trigger.parentElement}>` 来在 Popover 中渲染组件，或者使用其他的 `getXxxxContainer` 参数。

参考链接：[Select 属性](/components/select-cn#select-props)

相关 issue：[#3487](https://github.com/ant-design/ant-design/issues/3487) [#3438](https://github.com/ant-design/ant-design/issues/3438)

### 在哪个版本中解决了点击 `Select Dropdown DatePicker TimePicker Popover Popconfirm` 内的另一个 popup 组件消失的问题？

该问题在 `3.11.0` 后的版本中进行了解决。

相关 issue：[#3487](https://github.com/ant-design/ant-design/issues/3487) [#3438](https://github.com/ant-design/ant-design/issues/3438)

### 如何解决点击 `Select Dropdown DatePicker TimePicker Popover Popconfirm` 内的另一个 popup 组件消失的问题？

如果你使用的是旧版本的 Ant Design，你可以通过在 Popover 中渲染组件来解决该问题，具体方法是在 `<Select getPopupContainer={trigger => trigger.parentElement}>` 中设置参数。另外，你也可以尝试使用其他的 `getXxxxContainer` 参数来解决该问题。

相关 issue：[#3487](https://github.com/ant-design/ant-design/issues/3487) [#3438](https://github.com/ant-design/ant-design/issues/3438)

### `<Select>` 组件在滚动条中上下移动的问题如何解决？

要解决 `<Select>` 组件在滚动条中上下移动的问题，可以通过设置 `getPopupContainer` 属性来将组件渲染到滚动区域内。具体可以使用 `<Select getPopupContainer={trigger => trigger.parentElement}>` 这个 API 来实现。另外，也可以使用其他的 `getXxxxContainer` 参数来解决这个问题。如果需要全局解决这个问题，可以使用 `<ConfigProvider getPopupContainer={trigger => trigger.parentElement}>` 这个 API。

需要注意的是，要确保父元素（`parentElement`）的 `position` 属性为 `relative` 或 `absolute`。

相关 issue：[#3487](https://github.com/ant-design/ant-design/issues/3487) [#3438](https://github.com/ant-design/ant-design/issues/3438)

### 如何解决 `<Select>`、`<Dropdown>`、`<DatePicker>`、`<TimePicker>` 和 `<Popover>` 组件在滚动条中上下移动的问题？

要解决 `<Select>`、`<Dropdown>`、`<DatePicker>`、`<TimePicker>` 和 `<Popover>` 组件在滚动条中上下移动的问题，可以使用类似的方法。可以设置这些组件的 `getPopupContainer` 属性，将它们渲染到滚动区域内。具体可以使用 `<Select getPopupContainer={trigger => trigger.parentElement}>`、`<Dropdown getPopupContainer={trigger => trigger.parentElement}>`、`<DatePicker getPopupContainer={trigger => trigger.parentElement}>`、`<TimePicker getPopupContainer={trigger => trigger.parentElement}>` 和 `<Popover getPopupContainer={trigger => trigger.parentElement}>` 这些 API 来实现。

另外，也可以使用其他的 `getXxxxContainer` 参数来解决这个问题。如果需要全局解决这个问题，可以使用 `<ConfigProvider getPopupContainer={trigger => trigger.parentElement}>` 这个 API。

需要注意的是，要确保父元素（`parentElement`）的 `position` 属性为 `relative` 或 `absolute`。

相关 issue：[#3487](https://github.com/ant-design/ant-design/issues/3487) [#3438](https://github.com/ant-design/ant-design/issues/3438)

### 如何解决滚动条上下移动问题以及全局解决办法？

要解决组件在滚动条中上下移动的问题，可以通过设置 `getPopupContainer` 属性来将这些组件渲染到滚动区域内。具体可以使用 `<Select getPopupContainer={trigger => trigger.parentElement}>`、`<Dropdown getPopupContainer={trigger => trigger.parentElement}>`、`<DatePicker getPopupContainer={trigger => trigger.parentElement}>`、`<TimePicker getPopupContainer={trigger => trigger.parentElement}>` 和 `<Popover getPopupContainer={trigger => trigger.parentElement}>` 这些 API 来实现。

另外，也可以使用其他的 `getXxxxContainer` 参数来解决这个问题。如果需要全局解决这个问题，可以使用 `<ConfigProvider getPopupContainer={trigger => trigger.parentElement}>` 这个 API。

需要注意的是，要确保父元素（`parentElement`）的 `position` 属性为 `relative` 或 `absolute`。

相关 issue：[#3487](https://github.com/ant-design/ant-design/issues/3487) [#3438](https://github.com/ant-design/ant-design/issues/3438)

### 如何避免升级导致的破坏性变更？

要避免升级导致的破坏性变更，你可以遵循以下原则：

1. 使用出现在官方 Demo 中的写法 - 官方 Demo 中展示的写法是经过测试和验证的，更加稳定可靠。

2. 参考 FAQ 中的解法 - FAQ 中列出了常见问题的解决方案，其中包含了代码片段、codesandbox 示例以及被标记了当前版本的 FAQ。

这样做可以确保不会遇到由于升级而产生的破坏性变更问题。

需要注意的是，下面这些情况需要开发者自行校验：

1. 特定场景的错误用法 - 有些使用方法可能在特定场景下是错误的，例如在 Tabs 下直接包 div 的用法。这些用法可能会在升级后产生破坏性变更，请仔细检查你的代码是否存在这样的错误用法。

2. 不必要的魔改 - 有时候可以通过正常用法实现功能需求，但开发者却选择进行不必要的魔改。这些魔改可能会在升级后导致破坏性变更，请慎重判断是否真的有必要进行这些魔改。

总之，跟随官方的示例和解决方案，并避免特定错误用法和不必要的魔改，可以帮助你避免升级导致的破坏性变更。

### 为什么当我动态改变 `defaultValue` 的时候它并没有生效？

`Input`/`Select` 等的 `defaultXxxx`（例如 `defaultValue`）只有在第一次渲染的时候有效。这是因为这些属性是用于设置初始值的，并不会随着用户输入或其他操作而更新。如果你想要动态改变输入框的值，可以使用受控组件和 `value` 属性来实现。受控组件是由 React 来控制其值的组件，你需要手动更新 `value` 属性的值来反映用户输入的变化。你可以阅读 React 的文档了解更多关于受控组件的信息。

### 什么是受控组件？

受控组件是由 React 来控制其值的组件。它的值是通过 `props` 或 `state` 来定义和更新的。与受控组件相对的是非受控组件，非受控组件的值是由 DOM 元素自身来管理的。受控组件可以通过设置 `value` 属性来显示初始值，并且可以通过 `onChange` 事件来处理用户输入的变化。使用受控组件可以更好地控制表单的状态，并且可以方便地进行表单验证和处理。

### 在 React 中如何动态改变输入框的值？

要在 React 中动态改变输入框的值，可以使用受控组件和 `value` 属性。首先，定义一个状态来存储输入框的值，例如 `const [inputValue, setInputValue] = useState('')`。然后，将 `value` 属性设置为状态值，并通过 `onChange` 事件来更新状态值，例如 `<input value={inputValue} onChange={e => setInputValue(e.target.value)} />`。这样，当用户输入时，状态值会自动更新，并且输入框的值也会相应地改变。通过使用受控组件，你可以在 React 中方便地管理输入框的值和状态。

### 为什么修改组件传入的对象或数组属性组件不会更新？

antd 内部会对 props 进行浅比较实现性能优化。 当状态变更，你总是应该传递一个新的对象。

### antd 是如何实现性能优化的？

antd 内部通过对 props 进行浅比较来实现性能优化。这意味着当组件接收到的 props 对象或数组发生变化时，只有真正发生改变的部分才会触发组件重新渲染，从而提高性能。

### 在 React 中如何处理组件传入的对象或数组属性的更新？

在 React 中，当传入组件的对象或数组属性发生变化时，应该传递一个新的对象或数组。这样做可以避免遇到由于浅比较导致的组件不更新的问题。具体的处理方式可以参考 [React 的文档](https://zh-hans.reactjs.org/docs/thinking-in-react.html)。

### QA 为什么设置了 Input/Select 的 value 后无法修改？

当设置了 `Input`、`Select` 等表单组件的 `value` 属性后，它们的值将变为只读，无法通过用户输入进行修改。这是因为这些表单组件被称为受控组件（Controlled Components），其值受到 React 组件状态的控制，需要使用 `onChange` 来改变 `value`。

如果你想要动态更新这些表单组件的值，可以通过在组件上绑定 `onChange` 事件，并在事件处理函数中更新组件的状态，从而实现数据的双向绑定。

参考文档：[React 文档中关于受控组件的介绍](https://zh-hans.reactjs.org/docs/forms.html#controlled-components)

### QA 如何在 React 中使用 onChange 来改变 Input/Select 的 value？

在 React 中，你可以通过绑定 `onChange` 事件来实现 Input/Select 组件值的动态更新。

例如，对于一个 Input 组件，你可以这样编写代码：

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
```

对于 Select 组件，使用方式也类似：

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  );
}
```

在上述代码中，我们使用了 `useState` 钩子来定义值的状态，并通过 `onChange` 事件绑定了相应的事件处理函数来更新状态。

### QA 在 React 中如何使用受控组件解决无法修改 Input/Select 的 value 的问题？

要解决设置了 `Input`、`Select` 等表单组件的 `value` 后无法修改的问题，可以使用 React 中的受控组件（Controlled Components）来管理输入值。

例如，你可以在组件中定义状态，并通过 `onChange` 事件处理函数来更新状态：

```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
```

上述代码中，我们通过使用 `useState` 钩子来定义 `value` 状态，并将其绑定到 `input` 组件的 value 属性上。当用户输入文本时，`onChange` 事件会被触发，调用 `handleChange` 函数来更新 `value` 状态，实现了输入值的控制和反映。

对于 Select 组件，可以采用类似的方式进行处理。

希望以上解答能够帮到你，如果你还有其他问题，请随时提问！

### antd 覆盖了我的全局样式，怎么办？

antd 在设计的时候就是用来开发一个完整的应用的，为了方便使用，我们覆盖了一些全局样式。目前还不能移除这些全局样式，如果你想要了解更多关于这个问题的信息，可以追踪这个[issue](https://github.com/ant-design/ant-design/issues/4331)。另外，你也可以参考[这个教程](/docs/react/customize-theme-cn#how-to-avoid-modifying-global-styles)，了解如何避免修改全局样式。

### 我想移除 antd 覆盖的全局样式，该怎么做？

目前，antd 的设计初衷是为了开发完整的应用，所以默认会覆盖一些全局样式。不过，如果你想要移除这些全局样式，可能需要做一些定制化的工作。你可以参考这个[issue](https://github.com/ant-design/ant-design/issues/4331)了解更多关于这个问题的信息，或者查阅[这个教程](/docs/react/customize-theme-cn#how-to-avoid-modifying-global-styles)，了解如何避免修改全局样式。

### antd 覆盖全局样式有什么影响？

antd 在设计的时候就是为了开发完整的应用，所以会覆盖一些全局样式。这样做的目的是为了统一应用的样式，确保整个应用有一个一致的外观和用户体验。不过，这也可能会导致一些问题，比如可能会与你之前的全局样式冲突。如果你想要了解更多关于这个问题的信息，可以追踪这个[issue](https://github.com/ant-design/ant-design/issues/4331)，或者参考[这个教程](/docs/react/customize-theme-cn#how-to-avoid-modifying-global-styles)，了解如何避免修改全局样式。

### `antd` 在移动端体验不佳的原因是什么？

`antd` 是一个前端 UI 组件库，它并非专门为移动端设计。因此，在移动端使用 `antd` 可能会导致体验不佳。要了解更多详情，你可以访问 [Ant Design Mobile](http://mobile.ant.design) 网站。

### 我在移动端该使用哪个前端组件库？

如果你在移动端开发中需要一个适用于移动端的前端组件库，你可以尝试使用 [react-component](https://github.com/react-component/)。在该仓库中，你可以找到一些带有 'm-' 或 'rn-' 前缀的库，它们是专为移动端设计的。

### `antd` 是否有适用于移动端的版本？

`antd` 目前没有专门为移动端设计的版本。如果你需要在移动端使用 `antd`，可能会导致体验不佳。为了获得更好的移动端体验，建议你使用 [Ant Design Mobile](http://mobile.ant.design) 或其他适用于移动端的前端组件库。

### `antd` 是否有国内镜像？

是的，`antd` 有国内镜像。你可以通过以下地址访

- 官方镜像：[https://ant-design.antgroup.com](https://ant-design.antgroup.com)
- Gitee 镜像：[https://ant-design.gitee.io](https://ant-design.gitee.io)

在这些镜像网站上，你可以找到不同版本的 `antd` 文档和相关资源。

### `antd` 各个版本的镜像地址是什么？

以下是 `antd` 及其各个版本的镜像地址：

- Ant Design 5.x:

  - [https://ant-design.antgroup.com](https://ant-design.antgroup.com)
  - [https://ant-design.gitee.io](https://ant-design.gitee.io)

- Ant Design 4.x: [https://4x-ant-design.antgroup.com](https://4x-ant-design.antgroup.com)

- Ant Design 3.x: [https://ant-design-3x.gitee.io](https://ant-design-3x.gitee.io)

- Ant Design 2.x: [https://ant-design-2x.gitee.io](https://ant-design-2x.gitee.io)

- Ant Design 1.x: [https://ant-design-1x.gitee.io](https://ant-design-1x.gitee.io)

以上是关于 `antd` 不同版本的镜像地址，你可以根据自己的需求访问对应版本的文档和资源。

### `antd` 是否有其他相关产品的镜像？

是的，`antd` 除了提供前端组件库之外，还涵盖了一些相关产品。以下是它们的镜像地址：

- Ant Design Pro: [https://ant-design-pro.gitee.io/](https://ant-design-pro.gitee.io/)

- Ant Design Mobile:

  - [https://ant-design-mobile.antgroup.com/zh](https://ant-design-mobile.antgroup.com/zh)
  - [https://antd-mobile.gitee.io/](https://antd-mobile.gitee.io/)

- Ant Design Mini:

  - [https://ant-design-mini.antgroup.com](https://ant-design-mini.antgroup.com)
  - [https://antd-mobile.gitee.io/](https://antd-mobile.gitee.io/)

- Ant Design Charts:

  - [https://ant-design-charts.antgroup.com](https://ant-design-charts.antgroup.com)
  - [https://antd-mobile.gitee.io/](https://antd-mobile.gitee.io/)

- AntV: [https://antv.antgroup.com](https://antv.antgroup.com)

- Ant Motion: [https://ant-motion.gitee.io/](https://ant-motion.gitee.io/)

以上是 `antd` 相关产品的镜像地址，你可以根据需要访问对应产品的文档和资源。

### `antd` 是否可以像 `React` 一样使用单文件引入？

可以，你可以像使用 `React` 一样使用单文件引入 `antd`。你可以使用 script 标签引入 `antd`，具体的引入方式可以参考 [这个链接](https://ant.design/docs/react/introduce-cn#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%95%E5%85%A5)。不过，我们更推荐使用 `npm` 来引入 `antd`，这样可以更方便地进行维护。

### `antd` 的单文件引入方式和 `npm` 引入方式有什么区别？

`antd` 可以像 `React` 一样使用单文件引入，你可以通过 script 标签引入 `antd`，具体的引入方式可以参考 [这个链接](https://ant.design/docs/react/introduce-cn#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%95%E5%85%A5)。不过，我们更推荐使用 `npm` 来引入 `antd`，因为这样可以更简单方便地进行维护。

### 为什么 `antd` 推荐使用 `npm` 引入？

`antd` 推荐使用 `npm` 来引入，主要是因为这样更简单方便地进行维护。使用 `npm` 引入 `antd` 可以方便地进行版本管理和更新，同时也可以利用 `npm` 生态系统中的其他工具来提升开发效率。虽然 `antd` 可以像 `React` 一样使用单文件引入，但使用 `npm` 引入更符合前端开发的基础，并且更适合项目的长期维护。

### 如何解决在网络环境下无法获取到`icon`文件的问题？

在你的网络环境下无法获取到`icon`文件的问题可以通过自行部署`iconfont`文件到你的网络上来解决。你可以参考这个[例子](https://github.com/ant-design/antd-init/tree/7c1a33cadb98f2fd8688fe527dd7f98215b9bced/examples/local-iconfont)上的步骤来进行操作。详细的介绍可以在[#1070](https://github.com/ant-design/ant-design/issues/1070)中找到。

### 从 3.9.x 版本开始，Ant Design 使用了什么类型的图标？

从 Ant Design 的 3.9.x 版本开始，我们开始使用 SVG 图标作为默认图标类型。这意味着你不再需要担心本地部署`iconfont`的问题，可以直接使用 Ant Design 提供的 SVG 图标。关于 SVG 图标的更多信息，可以参考[这里](/components/icon-cn#svg-icons)。

### 如何自行部署 iconfont 文件到网络上？

如果你想在网络上自行部署`iconfont`文件，可以参考以下步骤：

1. 首先，找到你想要使用的图标集，可以从`iconfont`官网或者其他资源库中获取。
2. 下载图标集的文件，得到一个压缩包。
3. 解压缩文件，并找到其中的`iconfont.ttf`文件或者其他相关字体文件。
4. 将该字体文件放置在你的网络服务器上的合适位置。注意确保该位置可以被你的前端应用访问到。
5. 在你的前端应用中引入字体文件，并设置对应的 CSS 样式，使得图标能够正确显示。

通过以上步骤，你就可以成功地将`iconfont`文件部署到网络上，并在你的前端应用中使用了。

### 如何拓展 antd 的组件？

如果你需要一些 antd 没有包含的功能，你可以尝试通过 HOC（Higher Order Components）拓展 antd 的组件。HOC 是一种函数，接受一个组件作为输入，并返回一个新的组件。通过使用 HOC，你可以在不修改组件源码的情况下给组件增加新的能力。在 antd 中拓展组件的方法可以参考[HOC 示例](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775)。如果想了解更多关于 HOC 的知识，可以参考[这篇文章](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.eeu8q01s1)。

### 如何使用 HOC 拓展 antd 的组件？

如果你希望在 antd 的组件上添加一些自定义的功能，可以使用 HOC（Higher Order Components）来拓展 antd 的组件。HOC 是一种函数，它接受一个组件作为参数，并返回一个新的组件。通过使用 HOC，你可以在不修改 antd 组件的源代码的情况下，给组件添加额外的能力。antd 提供了一些例子来展示如何使用 HOC，你可以参考这些例子，了解如何拓展 antd 组件的功能。了解更多关于 HOC 的知识，你可以阅读这篇文章：[Mixins Are Dead. Long Live Higher Order Components!](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750)。

### antd 的组件如何进行拓展？

如果你需要在 antd 的组件中添加一些额外的功能，你可以使用 HOC（High Order Components）来拓展 antd 的组件。HOC 是一种函数，它接收一个组件作为输入，并返回一个新的组件。通过使用 HOC，你可以在不修改原始组件的情况下给它添加新的行为或功能。antd 提供了一些示例来展示如何使用 HOC 拓展其组件，你可以参考这些示例来了解如何使用 HOC 来拓展 antd 的组件。如果你想更深入地了解 HOC 的知识，你可以阅读这篇文章：[Mixins Are Dead. Long Live Higher Order Components!](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750)。

### 如何获取未导出的属性定义？

antd 提供了一些工具类型，可以帮助我们获取未导出的属性定义。以下是一些示例：

### Get Props

通过 `GetProps` 工具类型，我们可以获取基本组件定义的属性。比如，我们可以获取 `Checkbox.Group` 组件的属性定义：

```tsx
import type { Checkbox, CheckboxProps, GetProps } from 'antd';

type CheckboxGroupProps = GetProps<typeof Checkbox.Group>;
```

### Get Prop

使用 `GetProp` 工具类型，我们可以获取特定属性的定义。例如，我们可以获取 `Checkbox` 组件的 `value` 属性的定义：

```tsx
import type { Checkbox, CheckboxProps, GetProp } from 'antd';

type CheckboxValue = GetProp<CheckboxProps, 'value'>;
```

### Get Ref

如果需要获取组件的引用类型定义，可以使用 `GetRef` 工具类型。例如，我们可以获取 `Input` 组件的引用类型定义：

```tsx
import type { Input, GetRef } from 'antd';

type InputRef = GetRef<typeof Input>;
```

使用这些工具类型，我们可以更方便地获取 antd 未导出属性的定义。

### 我的组件默认语言是英文的？如何切回中文的。

请尝试使用 ConfigProvider 组件来包裹你的应用。这个组件可以用来配置应用的整体语言环境。你可以在官方文档的 [ConfigProvider](/components/config-provider-cn#components-config-provider-demo-locale) 页面中查看完整示例和使用方法。

### 如果日期组件的国际化仍未生效，请配置 `dayjs.locale('zh-cn')` 并检查你本地的 `dayjs` 版本和 `antd` 依赖的 `dayjs` 版本是否一致。

如果你的日期组件没有正确的国际化展示，可以尝试配置 `dayjs.locale('zh-cn')` 来强制将日期组件切换到中文环境。同时，还需要确保你本地的 dayjs 库版本和 antd 依赖的 dayjs 版本是一致的。这样才能保证日期组件的国际化工作正常。请检查这些配置并重新尝试。

### 如何解决组件默认语言是英文的问题？

如果你的组件默认语言是英文的，你可以使用 ConfigProvider 组件来切换回中文语言。将你的应用的根组件用 ConfigProvider 组件包裹起来，并设置 `locale` 属性为 `"zh_CN"`。这样就可以确保你的应用显示的是中文语言了。具体的使用方法和示例可以查看官方文档的 [ConfigProvider](/components/config-provider-cn#components-config-provider-demo-locale) 页面。

### 时间类组件的国际化 locale 设置不生效的原因是什么？

问题描述：我在项目中尝试设置时间类组件的国际化 locale，但并没有生效。请问可能是什么原因导致的？

解决方法：

1. 检查 dayjs 语言包的设置是否正确。为了确保时间类组件的国际化 locale 生效，我们需要正确引入 dayjs 的语言包，并设置 locale。

```js
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
```

2. 检查是否同时存在两个版本的 dayjs。可以使用以下命令来检查项目中 dayjs 的版本情况。

```jsx
npm ls dayjs
```

通常情况下，如果项目依赖的 dayjs 版本和 Ant Design 依赖的 dayjs 版本不兼容（semver 版本匹配失败），例如项目中的 dayjs 版本较低且写死了版本号，就会导致同时存在两个不同版本的 dayjs 实例，进而导致国际化失效。

以上是针对时间类组件的国际化 locale 设置不生效的常见解决方法。希望能对解决您的问题有所帮助。如果还有其他疑问，请随时提问。

### 为什么指定了 DatePicker/RangePicker 的 `mode` 属性后，无法选择年份/月份？

在业务开发中，当我们需要实现年份选择、月份范围选择或者周范围选择等需求时，我们会向现有的 DatePicker 或 RangePicker 组件添加 `mode` 属性。然而，你可能会发现在面板上点击后无法选择年份或月份，并且面板也不会关闭。即使添加了 `disabledDate` 属性也无法禁用对应的年/月/周。

这是因为 `mode` 属性并不等同于相应的组件，例如 `<DatePicker mode="year" />` 并不等同于 `YearPicker`，`<RangePicker mode="month" />` 并不等同于 `MonthRangePicker`。`mode` 属性是在 antd 3.0 版本中引入的，目的是为了控制面板展现状态，以支持一些特定的需求，例如展示时间面板等。`mode` 只会简单改变当前显示的面板，但并不会修改默认的交互行为（例如 DatePicker 仍然需要点击日期才能完成选择并关闭面板）。

另外，需要注意的是，`disabledDate` 属性只会在**日面板**上生效，对于任何 `<DatePicker mode="year/month" />` 等其他模式的年/月面板并不生效。

### 如何解决当指定了 DatePicker/RangePicker 的 `mode` 属性后，点击后无法选择年份/月份的问题？

在使用 `DatePicker` 或 `RangePicker` 组件时，当你指定了 `mode` 属性后，无法选择年份/月份的问题可以通过以下方法解决：

1. 对于 `DatePicker`，你可以使用 `YearPicker` 或 `MonthPicker` 组件来定制年份选择或月份选择。例如，可以使用 `<DatePicker mode="year" picker="year" />` 来实现年份选择，使用 `<DatePicker mode="month" picker="month" />` 来实现月份选择。这样可以确保面板能够正确显示和响应你的选择。

2. 对于 `RangePicker`，你可以使用 `MonthRangePicker` 组件来实现月份范围选择。例如，可以使用 `<RangePicker mode="month" picker="month" />` 来实现月份范围选择。同样地，使用正确的组件可以确保面板能够正确展现和响应你的操作。

请注意，上述解决方法仅适用于 `DatePicker` 和 `RangePicker` 组件，其他 antd 组件的使用可能会有不同的解决方案。

### `disabledDate` 属性在 `<DatePicker mode="year/month" />` 上如何生效？

请注意，`disabledDate` 属性仅在**日面板**上生效，并不会对 `<DatePicker mode="year/month" />` 等其他模式的年/月面板生效。

如果你想要在年/月面板中禁用某些选项，你可以考虑使用[其他的解决方案](https://github.com/ant-design/ant-design/issues/9008#issuecomment-358554118)，例如自定义面板渲染函数或者手动处理禁用逻辑。具体实现步骤可以参考相关的 GitHub Issue，链接为：[#9008](https://github.com/ant-design/ant-design/issues/9008#issuecomment-358554118)。

### 如何利用 `mode` 和 `onPanelChange` 方法封装一个年份选择器组件？

你可以通过以下步骤来封装一个年份选择器组件：

1. 创建一个名为 `YearPicker` 的组件。
2. 在组件中定义一个状态 `selectedYear`，用于存储选中的年份。
3. 在组件中渲染一个日期选择器，设置 `mode` 属性为 `"year"`，并将 `selectedYear` 作为 `value` 属性传入。
4. 为日期选择器添加一个 `onPanelChange` 方法，用于处理面板切换事件。在该方法中，将选中的年份更新到 `selectedYear` 状态中。
5. 在需要使用年份选择器的地方引入 `YearPicker` 组件，并传入相应的 props。

```jsx
import React, { useState } from 'react';
import { DatePicker } from 'antd';

const YearPicker = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handlePanelChange = (value) => {
    setSelectedYear(value.year());
  };

  return (
    <DatePicker
      mode="year"
      value={selectedYear}
      onPanelChange={handlePanelChange}
    />
  );
};

export default YearPicker;
```

使用 Example：

```jsx
import React from 'react';
import YearPicker from './YearPicker';

const App = () => {
  return (
    <div>
      <h1>年份选择器示例</h1>
      <YearPicker />
    </div>
  );
};

export default App;
```

### 在 antd@4.0 中如何使用直接的日期组件？

在 `antd@4.0` 中，您可以直接使用以下日期组件，而不需要使用 `mode` 属性：

1. `DatePicker`：用于选择日期。
2. `MonthPicker`：用于选择月份。
3. `WeekPicker`：用于选择星期。
4. `RangePicker`：用于选择日期范围。

这些组件支持直接的日期选择，无需显式地设置 `mode` 属性。您可以根据您的需求选择合适的组件进行使用。

另外，请注意 `disabledDate` 属性可以正确地应用于这些组件，以便您根据需要禁用特定的日期。

### 如何在 antd 中实现日期选择器的年份范围限制？

要限制日期选择器的年份范围，您可以使用 `disabledDate` 属性。

1. 首先，创建一个函数，该函数接受一个参数 `current`，表示当前的日期。
2. 在该函数内，您可以通过 `current.year()` 获取当前的年份。
3. 根据您的需求，您可以返回 `true` 或 `false`，以表示是否禁用当前日期。
4. 将该函数作为 `disabledDate` 属性传递给日期选择器组件。

以下是一个示例，用于禁用选择器范围在 2022 年之后的日期：

```jsx
import React from 'react';
import { DatePicker } from 'antd';

const disabledDate = (current) => {
  return current.year() > 2022;
};

const App = () => {
  return (
    <div>
      <DatePicker disabledDate={disabledDate} />
    </div>
  );
};

export default App;
```

通过这种方式，您可以根据需要灵活地限制日期选择器的年份范围。

### ConfigProvider 设置 `prefixCls` 后，message/notification/Modal.confirm 生成的节点样式丢失了？

问题描述：当在 ConfigProvider 中设置了 `prefixCls` 后，message/notification/Modal.confirm 方法生成的节点样式丢失了。

解决方式一：

使用官方提供的 `message.useMessage`、`notification.useNotification` 和 `Modal.useModal` 方法来调用这些方法，以获取正确的样式。

解决方式二：

使用 `App.useApp` 方法直接调用 message、notification、modal 实例方法，以确保节点样式正确。

请根据具体情况选择适合的解决方式，以解决节点样式丢失的问题。

### 为什么我不应该通过 ref 访问组件内部的 props 和 state？

通过 ref 访问组件内部的 `props` 和 `state` 并不是一个好的实践。这种方式会使你的代码与组件的版本强耦合，而且任何重构都可能导致你的代码无法正常工作。重构包括但不限于将组件改造成 [Hooks](https://reactjs.org/docs/hooks-intro.html) 版本、移除或更名内部的 `props` 和 `state`、调整内部的 React 节点结构等。

通过 ref 访问组件的内部状态是一种破坏组件封装性的做法。组件的 props 和 state 应该被视为私有信息，只有组件自己才应该有权限访问和修改它们。通过 ref 直接访问这些信息可能导致不可预料的副作用，因为你绕过了组件提供的方法来访问它们。

相反，应该优先使用组件提供的公开方法和回调函数来操作组件的内部状态。这样可以确保代码的可维护性和稳定性，同时也符合 React 的设计原则。

所以，请避免使用 ref 直接访问组件的 props 和 state，而是通过组件提供的方法进行操作。

### 弹层类组件为什么要统一至 `open` 属性？

为什么弹层类组件要统一使用 `open` 属性？

因为在过去的开发中，弹层类组件的展示命名并不统一，同时存在 `open` 和 `visible` 两种属性的使用。这导致非 tsx 用户在开发过程中面临记忆成本的问题。同时，在新增功能时，选择使用哪种属性命名也变得模棱两可。为了解决这个问题，我们希望统一使用 `open` 属性命名。当然，您仍然可以继续使用原来的 `visible` 属性，因为它仍然向下兼容。但是从 Ant Design 的版本 5 开始，我们将从文档中移除 `visible` 属性。

### 弹层类组件露出的命名有哪些不同？

弹层类组件的展示命名有什么不同之处？

弹层类组件的展示命名在过去并不统一，出现了两种常用的命名方式，即 `open` 和 `visible`。这种不一致导致非 tsx 用户在开发过程中遇到记忆成本较高的问题。另外，这也给新增功能时的命名选择带来了困惑。为了解决这个问题，我们决定统一弹层类组件的展示命名，推荐使用 `open` 属性。同时，从 Ant Design 的版本 5 开始，我们将从文档中移除 `visible` 属性，但仍然保持该属性的向下兼容性。

### 弹层类组件的属性命名为什么要统一？

为什么弹层类组件的属性命名需要统一？

过去，弹层类组件的属性命名存在不一致性，常用的命名方式包括 `open` 和 `visible`。这种不统一性导致非 tsx 用户在开发过程中需要记住不同的命名，增加了开发的复杂性。同时，在新增功能时，选择合适的命名方式也变得困难。为了解决这个问题，我们决定统一弹层类组件的属性命名，推荐使用 `open` 属性。考虑到兼容性，我们并未完全移除 `visible` 属性，但是从 Ant Design 的版本 5 开始，我们将从文档中移除对该属性的介绍。

### 如何关闭组件动画？

要关闭组件动画，可以通过 SeedToken 来实现。具体步骤如下：

1. 在代码中引入 ConfigProvider 组件：

```jsx
import { ConfigProvider } from 'antd';
```

2. 在 ConfigProvider 组件中设置 theme 属性，将 motion 设置为 false：

```jsx
<ConfigProvider theme={{ token: { motion: false } }}>
  {/* 在这里放置你的组件 */}
</ConfigProvider>
```

通过以上步骤，你就可以成功关闭组件动画了。

### 如何使用 SeedToken？

SeedToken 是一个用于配置主题的工具。通过配置 SeedToken，你可以实现组件动画的开启或关闭。具体步骤如下：

1. 在代码中引入 ConfigProvider 组件：

```jsx
import { ConfigProvider } from 'antd';
```

2. 在 ConfigProvider 组件中设置 theme 属性，通过 token 对象来配置 SeedToken：

```jsx
<ConfigProvider
  theme={{
    token: {
      /* 这里放置你的配置项 */
    },
  }}
>
  {/* 在这里放置你的组件 */}
</ConfigProvider>
```

3. 根据你的需求来配置 SeedToken 的属性，比如要关闭组件动画，可以将 motion 属性设置为 false：

```jsx
<ConfigProvider theme={{ token: { motion: false } }}>
  {/* 在这里放置你的组件 */}
</ConfigProvider>
```

通过以上步骤，你就可以成功使用 SeedToken 来配置主题了。

### 如何在应用中使用 SeedToken?

要在应用中使用 SeedToken，需要按照以下步骤进行配置：

1. 在代码中引入 ConfigProvider 组件：

```jsx
import { ConfigProvider } from 'antd';
```

2. 在 ConfigProvider 组件中设置 theme 属性，通过 token 对象来配置 SeedToken：

```jsx
<ConfigProvider
  theme={{
    token: {
      /* 这里放置你的配置项 */
    },
  }}
>
  {/* 在这里放置你的组件 */}
</ConfigProvider>
```

3. 根据你的需求来配置 SeedToken 的属性，比如要关闭组件动画，可以将 motion 属性设置为 false：

```jsx
<ConfigProvider theme={{ token: { motion: false } }}>
  {/* 在这里放置你的组件 */}
</ConfigProvider>
```

通过以上步骤，你就可以在你的应用中使用 SeedToken 来配置主题了。

### QV5 中的 `colorPrimary` 是属于哪种类型的变量？

A`colorPrimary` 是属于基础变量（Seed Token）类型的变量。

### QV5 中的 `colorInfo` 是属于哪种类型的变量？

A`colorInfo` 是属于基础变量（Seed Token）类型的变量。

### Q V5 中的 `colorLink` 和 `colorPrimary` 有什么关系？

A `colorLink` 是别名变量（Alias Token），默认继承 `colorInfo`，与 `colorPrimary` 无关。

### 如何正确拼写 Ant Design？

- **Ant Design**：用空格分隔的首字母大写单词，指代设计语言。

### 如何拼写 antd？

- **antd**：全小写，指代 React UI 组件库。

### 如何拼写 ant.design 的网址？

- **ant.design**：特指 ant.design 网站网址。

注意：以下拼写都是错误的：

- AntD
- Ant-D
- antD
- Antd
- ant design
- AntDesign
- antdesign
- Antdesign

### 表单组件的 `setFieldsValue` 方法如何处理含有 `null` 的对象类型？

当使用表单组件的表单实例中的 `setFieldsValue` 方法设置表单值时，如果在传入的对象中包含有 `null` 类型，会出现什么问题？

如果在传入的对象中包含 `null` 类型，会导致 TypeScript 类型报错。具体错误信息如下：`不能将类型“null”分配给类型“string[] | undefined”。`

### 如何解决表单组件的 `setFieldsValue` 方法中对象类型含有 `null` 时的 TS 类型报错？

在使用表单组件的表单实例中的 `setFieldsValue` 方法设置表单值时，如果在传入的对象中包含有 `null` 类型，导致 TypeScript 类型报错。请问如何解决这个问题？

如果遇到 TypeScript 类型报错，可以检查项目的 `tsconfig.json` 中是否包含以下配置项：`"strictNullChecks": true`。如果该配置项的值为 `true`，将会出现上述问题。如果项目中可以不需要严格的空值检查功能，可以将 `strictNullChecks` 的值改为 `false` 关闭该功能。如果确实需要开启这个功能，则需要在设计类型时，使用其他类型替代 `null` 来避免出现这种情况。

### 如何判断是否需要在 TypeScript 项目中开启 `strictNullChecks` 严格空值检查功能？

在 TypeScript 项目中，如何判断是否需要开启 `strictNullChecks` 严格空值检查功能？

在 TypeScript 项目中，可以通过查看项目的 `tsconfig.json` 文件中的 `"strictNullChecks"` 配置项来判断是否开启了严格空值检查功能。当该配置项的值为 `true` 时，表示开启了严格空值检查功能。要判断是否需要开启该功能，可以根据项目的具体需求来决定。要了解有关该配置项的详细信息，可以查阅 TypeScript 官方文档中关于 [strictNullChecks](https://www.typescriptlang.org/zh/tsconfig#strictNullChecks) 的内容。

### Next.js 的 App Router 使用时 antd 组件报错

在使用 Next.js 的 App Router 时，如果你在使用 antd 的某些组件的子组件（如：`Select.Option`、`Form.Item`、`Typography.Title` 等），可能会出现以下报错：

```bash
Error: Cannot access .Option on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.
```

目前这个问题需要等待 Next.js 官方给出解决方案，你可以关注[这个 GitHub 问题](https://github.com/vercel/next.js/issues/51593)以获取最新进展。

在等待官方解决方案之前，你可以尝试以下两种变通方法来在使用 App Router 的页面中使用子组件：

**1. 创建包裹组件并重新导出子组件：**

以 `Typography` 组件为例，你可以创建一个包裹组件，并在其中提取所需的子组件并重新导出。代码示例如下：

```tsx
'use client';

import React from 'react';
import { Typography as OriginTypography } from 'antd';
import type { LinkProps } from 'antd/es/typography/Link';
import type { ParagraphProps } from 'antd/es/typography/Paragraph';
import type { TextProps } from 'antd/es/typography/Text';
import type { TitleProps } from 'antd/es/typography/Title';

const Title = React.forwardRef<
  HTMLElement,
  TitleProps & React.RefAttributes<HTMLElement>
>((props, ref) => <OriginTypography.Title ref={ref} {...props} />);

const Paragraph = React.forwardRef<
  HTMLElement,
  ParagraphProps & React.RefAttributes<HTMLElement>
>((props, ref) => <OriginTypography.Paragraph ref={ref} {...props} />);

const Link = React.forwardRef<
  HTMLElement,
  LinkProps & React.RefAttributes<HTMLElement>
>((props, ref) => <OriginTypography.Link ref={ref} {...props} />);

const Text = React.forwardRef<
  HTMLElement,
  TextProps & React.RefAttributes<HTMLElement>
>((props, ref) => <OriginTypography.Text ref={ref} {...props} />);

export { Title, Link, Text, Paragraph };
```

**2. 在组件开头添加 "use client" 指令：**

如果你希望页面完全由客户端渲染，可以在组件的开头添加 "use client" 指令。例如：

```tsx
'use client';

// 非真实代码，仅做逻辑说明
export default () => (
  <div className="App">
    <Form>
      <Form.Item>
        <Button type="primary">Button</Button>
      </Form.Item>
    </Form>
  </div>
);
```

以上是解决该问题的两种临时方法，希望对你有帮助。如需进一步了解和跟踪问题解决进展，请访问上述提供的 GitHub 问题链接。
