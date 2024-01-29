### 什么是 `:where` 选择器？

Ant Design 的 CSS-in-JS 默认通过 `:where` 选择器降低 CSS Selector 的优先级，以减少用户升级时额外调整自定义样式的成本。但是需要注意的是，`:where` 选择器的兼容性在低版本浏览器中相对较差。如果你需要支持旧版浏览器或与 TailwindCSS 的优先级冲突，可以使用 `@ant-design/cssinjs` 来取消默认的降权操作。通过配置 `hashPriority` 为 `"high"`，即可将样式从 `:where` 切换为类选择器。

### 如何使用 `@ant-design/cssinjs` 取消 `:where` 选择器的默认降权操作？

使用 `@ant-design/cssinjs` 取消 `:where` 选择器的默认降权操作需要引入 `StyleProvider` 组件。在 `StyleProvider` 组件内部，将 `hashPriority` 设置为 `"high"`，即可移除 `:where` 选择器的封装效果。

```tsx
import { StyleProvider } from "@ant-design/cssinjs";

export default () => (
  <StyleProvider hashPriority="high">
    <MyApp />
  </StyleProvider>
);
```

### 如何处理关闭 `:where` 降权后的样式的优先级调整？

关闭 `:where` 降权后，你可能需要手动调整一些样式的优先级。可以使用 PostCSS 插件来提升应用样式的优先级。PostCSS 提供了多种插件供选择，例如 `postcss-scopify`、`postcss-increase-specificity` 和 `postcss-add-root-selector`。

通过适当配置插件，在样式中添加根选择器 `#root` 可以提升样式的优先级，例如：

```diff
--  .my-btn {
++  #root .my-btn {
      background: red;
    }
```

以上是关于 Ant Design 的 CSS 变量模式如何使用的一些相关问题的回答和解释。

### 什么是 CSS 逻辑属性？

CSS 逻辑属性是为了统一 LTR（从左到右的文本方向）和 RTL（从右到左的文本方向）样式而引入的概念。Ant Design 使用了 CSS 逻辑属性来实现这一目的。举例来说，原来的 `margin-left` 在 LTR 和 RTL 下分别使用 `margin-inline-start` 来表示，以保证在不同的文本方向下都能正确显示样式。开发者需要了解 CSS 逻辑属性的用法和规则，以确保样式在不同的文本方向下保持一致。

### 如何使用 CSS 逻辑属性兼容旧版浏览器？

如果你的应用需要兼容旧版浏览器（例如 360 浏览器、QQ 浏览器等），你可以通过 `@ant-design/cssinjs` 库中的 `StyleProvider` 组件来进行配置。通过配置 `transformers` 属性，你可以使用 `legacyLogicalPropertiesTransformer` 转换器来将样式转换为 CSS 逻辑属性的兼容形式。

具体的配置代码示例如下：

```tsx
import {
  legacyLogicalPropertiesTransformer,
  StyleProvider,
} from "@ant-design/cssinjs";

// 使用 `transformers` 属性进行样式转换配置
export default () => (
  <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
    <MyApp />
  </StyleProvider>
);
```

配置完成后，样式中的属性将会被降级为 CSS 逻辑属性的兼容形式。例如，`.ant-modal-root` 中的样式将会变为：

```diff
.ant-modal-root {
-- inset: 0;
++ top: 0;
++ right: 0;
++ bottom: 0;
++ left: 0;
}
```

这样的配置可以确保样式在兼容旧版浏览器的同时，仍能正确地使用 CSS 逻辑属性。

### 为什么要使用 CSS 逻辑属性？

CSS 逻辑属性的引入是为了解决不同文本方向下样式的一致性问题。通过使用 CSS 逻辑属性，我们可以统一 LTR 和 RTL 的样式表达方式，减少代码的重复和维护成本。对于依赖 Ant Design 的主题能力的应用来说，使用 CSS 逻辑属性能够提升主题切换的性能，同时减少样式体积。因此，在开发应用时，强烈建议开启 CSS 逻辑属性模式，以获得更好的开发体验和性能优化。

### 1. 什么是 rem 适配？

在响应式网页开发中，为了实现页面的适配和响应式设计，我们需要一种方便且灵活的方式来处理样式中的像素单位。rem（root em）单位是相对于根元素（HTML 标签）的单位，通过将像素单位转换为 rem 单位，可以实现页面的自适应和响应式布局。

### 2. 如何使用 px2remTransformer 实现 px 到 rem 的转换？

使用 `px2remTransformer` 转换器可以快速而准确地将样式表中的像素单位转换为 rem 单位。首先，我们需要导入 `px2remTransformer` 和 `StyleProvider`，然后创建一个 `px2rem` 实例，指定 `rootValue`，即 32px = 1rem（默认为 16）。最后，在样式提供器 `<StyleProvider>` 的 `transformers` 属性中传入 `px2rem` 实例，将转换器应用到样式中。

```tsx
import { px2remTransformer, StyleProvider } from "@ant-design/cssinjs";

const px2rem = px2remTransformer({
  rootValue: 32, // 32px = 1rem; @default 16
});

export default () => (
  <StyleProvider transformers={[px2rem]}>
    <MyApp />
  </StyleProvider>
);
```

### 3. 如何查看最终转换后的样式？

在使用 `px2remTransformer` 转换器后，样式中的像素单位会被自动转换为相应的 rem 单位。以下是一个示例转换后的样式：

```diff
 .px2rem-box {
-  width: 400px;
+  width: 12.5rem;
   background-color: green;
-  font-size: 32px;
+  font-size: 1rem;
   border: 10PX solid #f0f;
 }

 @media only screen and (max-width: 600px) {
   .px2rem-box {
     background-color: red;
-    margin: 10px;
+    margin: 0.3125rem;
   }
 }
```

可以看到，宽度和字体大小的像素单位被转换为相应的 rem 单位，并且在响应式媒体查询中，边距也被正确地转换为 rem 单位。通过这种方式，我们可以在各种屏幕尺寸下实现自适应和响应式的页面布局。

### 问题 Ant Design 5.x 中的 CSS 变量模式需要配置哪些参数？

答：Ant Design 5.x 的 CSS 变量模式需要配置以下参数：

- `rootValue`：根元素字体大小，默认值为 16
- `precision`：转换后的小数点位数，默认值为 5
- `mediaQuery`：是否转换媒体查询中的 px，默认值为 false

你可以参考 [px2rem.ts#Options](https://github.com/ant-design/cssinjs/blob/master/src/transformers/px2rem.ts) 获取更详细的配置信息。

### 问题 在 Ant Design 5.x 中，如何设置根元素的字体大小？

答：在 Ant Design 5.x 中，可以通过配置 `rootValue` 参数来设置根元素的字体大小。默认值为 16，可以根据具体需求进行调整。

### 问题 在 Ant Design 5.x 中，是否可以转换媒体查询中的 px？

答：是的，在 Ant Design 5.x 中，可以通过配置 `mediaQuery` 参数来决定是否转换媒体查询中的 px。默认值为 false，如果需要转换，请将该参数设置为 true。

### 在 Shadow DOM 场景中，为什么需要使用 `StyleProvider` 组件？

在 Shadow DOM 场景中，由于其添加 `<style />` 标签的方式与普通 DOM 不同，所以需要使用 `StyleProvider` 组件来配置 `container` 属性用于设置插入位置。这样可以确保样式正确地应用到 Shadow DOM 中。

### 如何在 React 项目中使用 `StyleProvider` 组件？

在 React 项目中，可以通过引入 `StyleProvider` 组件来使用。首先，使用 `attachShadow` 方法在 Shadow DOM 中创建一个 `shadowRoot` 并添加一个 `container` 容器元素。然后，使用 `createRoot` 方法在该容器元素中渲染应用的根组件。最后，将 `StyleProvider` 组件作为根组件的父组件，并将 `container` 属性设置为 `shadowRoot`，这样就可以正确地在 Shadow DOM 中使用样式。

具体代码如下：

```tsx
import { StyleProvider } from "@ant-design/cssinjs";
import { createRoot } from "react-dom/client";

const shadowRoot = someEle.attachShadow({ mode: "open" });
const container = document.createElement("div");
shadowRoot.appendChild(container);
const root = createRoot(container);

root.render(
  <StyleProvider container={shadowRoot}>
    <MyApp />
  </StyleProvider>,
);
```

### `StyleProvider` 组件的 `container` 属性具体作用是什么？

在使用 `StyleProvider` 组件时，可以通过设置 `container` 属性来指定样式的插入位置。在 Shadow DOM 场景中，这个属性需要被设置为 `shadowRoot`，以确保样式正确地应用到 Shadow DOM 中。通过指定插入位置，可以使样式在 Shadow DOM 中生效并影响相应的组件样式。
