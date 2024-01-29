## 打包体积优化

**作者：zombieJ**  
**日期：2023-06-25**  
**原文链接：[打包体积优化](https://juejin.cn/post/7248424501813674021)**

### 问题 1：什么是 Tree Shaking？

在现代 JS 应用中，通过模块化打包工具可以自动将一些未使用的模块代码去除，这个过程叫做 Tree Shaking。它的作用是减少打包后的文件体积，去除未使用的代码，提高应用性能。

### 问题 2：Tree Shaking 在实际应用中是否完美？

虽然 Tree Shaking 理论上可以有效地优化打包体积，但在实际应用中，并不总是完美的。有时我们还需要进行一些额外的操作，才能达到最佳的体积优化效果。

### 问题 3：ConfigProvider 导致的 Tree Shaking 失效问题是什么？

ConfigProvider 是一个组件，它提供了一些全局的配置参数。但是，在某些情况下，使用 ConfigProvider 可能会导致 Tree Shaking 失效，即未使用的代码仍然保留在打包后的文件中，增加了文件的体积。

以上文章摘自作者 zombieJ 的文章《打包体积优化》，详细内容请读者点击[原文链接](https://juejin.cn/post/7248424501813674021)查看。

### ConfigProvider 与 rc-field-form 关于 BundleSize 的问题

在维护过程中发现使用 ConfigProvider 可能导致 BundleSize 变大的问题，社区中也有用户反馈了相关问题。其中几个反馈链接如下：

- [Issue 41607](https://github.com/ant-design/ant-design/issues/41607)
- [Issue 43019](https://github.com/ant-design/ant-design/issues/43019)
- [Issue 42499](https://github.com/ant-design/ant-design/issues/42499)

其中，社区通过反馈发现了错误打包进来的包 `rc-field-form`，下面是一张从 issue 中提取的图示，展示了 BundleSize 的变化情况：

<img alt="bundle size" src="https://user-images.githubusercontent.com/44499686/239506452-11161494-76d3-4e80-a53f-57b097008cac.png" />

ConfigProvider 提供了全局配置的能力，其中也包含了用于自定义表单校验信息模板的配置。示例代码如下：

```tsx
<ConfigProvider form={{ validateMessages }} />
```

下面是自定义模板配置的示意图：

<img width="501" alt="Customize" src="https://github.com/ant-design/ant-design/assets/5378891/40081170-af57-44f9-9088-c5cc55e65802">

该功能依赖于表单校验，因此它由底层的 `rc-field-form` 的 FormProvider 实现。在 antd 中，会将其与本地化的 `validateMessages` 聚合：

```tsx
// 仅为示例代码，非真实代码。
import { FormProvider } from 'rc-field-form';

const ConfigProvider = ({ validateMessages, children }) => {
  const mergedValidateMessages = React.useMemo(
    () => merge(antdDefaultValidateMessages, validateMessages),
    [validateMessages],
  );

  return (
    <FormProvider validateMessages={mergedValidateMessages}>
      <SomeOtherProvider>{children}</SomeOtherProvider>
    </FormProvider>
  );
};
```

而 FormProvider 本身又封装了 `rc-field-form` 的 FormContext，导致引入 FormProvider 后会将 `rc-field-form` 的更多内容打包进来：

<img height="300" alt="Deps" src="https://github.com/ant-design/ant-design/assets/5378891/938e2375-e143-4c93-bfc9-207039361479">

可能会有人考虑是否可以进行优化，如果没有配置 `validateMessages`，就不调用这个 FormProvider。然而，很遗憾，这是不可行的。Tree Shaking 是在静态编译过程中进行的，而 `validateMessages` 是运行时的配置。因此，在打包过程中我们无法得知 `validateMessages` 是否存在，因此无法进行此类优化。

### ConfigProvider 是否会导致 BundleSize 变大的问题？

通过社区反馈，我们发现使用 ConfigProvider 可能导致 BundleSize 变大的问题。具体的反馈链接如下：

- [Issue 41607](https://github.com/ant-design/ant-design/issues/41607)
- [Issue 43019](https://github.com/ant-design/ant-design/issues/43019)
- [Issue 42499](https://github.com/ant-design/ant-design/issues/42499)

用户在反馈中指出，使用 ConfigProvider 会导致打包进来一个错误的包 `rc-field-form`。下面是一张从 issue 中提取的图示，展示了 BundleSize 的变化情况：

<img alt="bundle size" src="https://user-images.githubusercontent.com/44499686/239506452-11161494-76d3-4e80-a53f-57b097008cac.png" />

ConfigProvider 提供了全局化配置的能力，其中包括了自定义表单校验信息的模板配置。示例代码如下：

```tsx
<ConfigProvider form={{ validateMessages }} />
```

下面是自定义模板配置的示意图：

<img width="501" alt="Customize" src="https://github.com/ant-design/ant-design/assets/5378891/40081170-af57-44f9-9088-c5cc55e65802">

这个功能依赖于底层的 `rc-field-form` 的 FormProvider 来实现。antd 会将其与本地化的 `validateMessages` 进行聚合：

```tsx
// 仅为示例代码，非真实代码。
import { FormProvider } from 'rc-field-form';

const ConfigProvider = ({ validateMessages, children }) => {
  const mergedValidateMessages = React.useMemo(
    () => merge(antdDefaultValidateMessages, validateMessages),
    [validateMessages],
  );

  return (
    <FormProvider validateMessages={mergedValidateMessages}>
      <SomeOtherProvider>{children}</SomeOtherProvider>
    </FormProvider>
  );
};
```

同时，FormProvider 又封装了 `rc-field-form` 的 FormContext，导致引入 FormProvider 后会将 `rc-field-form` 的更多内容打包进来：

<img height="300" alt="Deps" src="https://github.com/ant-design/ant-design/assets/5378891/938e2375-e143-4c93-bfc9-207039361479">

对于是否可以对此进行优化，即在没有配置 `validateMessages` 的情况下不调用 FormProvider，很遗憾，这是不可行的。Tree Shaking 是在静态编译过程中进行的，而 `validateMessages` 是运行时的配置。因此，在打包过程中我们无法得知 `validateMessages` 是否存在，因此无法进行此类优化。

### 如何优化 ConfigProvider 与 rc-field-form 的 BundleSize？

在使用 ConfigProvider 的过程中，我们遇到了关于 BundleSize 的问题。根据社区反馈，使用 ConfigProvider 会导致打包进来一个错误的包 `rc-field-form`。下面是一张从 issue 中提取的图示，展示了 BundleSize 的变化情况：

<img alt="bundle size" src="https://user-images.githubusercontent.com/44499686/239506452-11161494-76d3-4e80-a53f-57b097008cac.png" />

ConfigProvider 提供了全局化配置的能力，其中包含了用于自定义表单校验信息模板的配置。示例代码如下：

```tsx
<ConfigProvider form={{ validateMessages }} />
```

下面是自定义模板配置的示意图：

<img width="501" alt="Customize" src="https://github.com/ant-design/ant-design/assets/5378891/40081170-af57-44f9-9088-c5cc55e65802">

问题是，该功能依赖于底层的 `rc-field-form` 的 FormProvider 来实现，并且 FormProvider 又封装了 `rc-field-form` 的 FormContext，导致引入 FormProvider 后会将 `rc-field-form` 的更多内容打包进来：

<img height="300" alt="Deps" src="https://github.com/ant-design/ant-design/assets/5378891/938e2375-e143-4c93-bfc9-207039361479">

为了优化这个问题，我们可能会考虑在没有配置 `validateMessages` 的情况下不调用 FormProvider。然而，很遗憾，这是行不通的。Tree Shaking 是在静态编译过程中进行的，而 `validateMessages` 是运行时的配置。因此，在打包过程中我们无法得知 `validateMessages` 是否存在，因此无法进行此类优化。

### 如何解耦 ConfigProvider 和 FormProvider？

要解耦 ConfigProvider 和 FormProvider，我们可以通过引入一个新的 Context 来实现。我们可以创建一个名为 "ValidateMessageContext" 的 Context，将 ConfigProvider 中的 validateMessages 值传递给这个 Context，然后在 Form 组件中消费这个 Context。

具体实现如下所示：

```tsx
import { ValidateMessageContext } from '../form/context.ts';

const ConfigProvider = ({ validateMessages, children }) => {
  const mergedValidateMessages = ...

  return (
    <ValidateMessageContext.Provider value={mergedValidateMessages}>
      <SomeOtherProvider>{children}</SomeOtherProvider>
    </ValidateMessageContext.Provider>
  );
};
```

在 Form 组件中，我们可以使用 useContext hook 来消费这个 Context：

```tsx
import Form, { FormProvider } from 'rc-field-form';
import { ValidateMessageContext } from './context';

export default (props) => {
  const validateMessages = React.useContext(ValidateMessageContext);

  return (
    <FormProvider validateMessages={validateMessages}>
      <Form {...props} />
    </FormProvider>
  );
};
```

通过这样的实现方式，我们成功地将 ConfigProvider 和 FormProvider 解耦，从而实现了更灵活的依赖关系。

### 如何调整依赖关系并解耦？

通过引入一个新的 Context，我们可以调整依赖关系并解耦 ConfigProvider 和 FormProvider。具体来说，我们可以创建一个名为 "ValidateMessageContext" 的 Context，将 ConfigProvider 中的 validateMessages 值传递给这个 Context，然后在 Form 组件中消费这个 Context。

下面是具体的实现步骤：

1. 在 ConfigProvider 组件中，创建一个名为 "ValidateMessageContext" 的 Context，并将 ConfigProvider 中的 validateMessages 值传递给这个 Context。
2. 在 Form 组件中，使用 useContext hook 来消费 "ValidateMessageContext" 中的值，并将其传递给 FormProvider 组件。

通过这样的调整，我们成功地解耦了 ConfigProvider 和 FormProvider 的依赖关系，实现了更灵活的架构。

### 通过引入新的 Context 来解耦 ConfigProvider 和 FormProvider 有什么优势？

通过引入一个新的 Context 来解耦 ConfigProvider 和 FormProvider，我们可以实现以下优势：

1. **解耦性高**：通过将依赖的值传递给一个新的 Context，我们可以让 ConfigProvider 和 FormProvider 之间的耦合度更低。这样，我们可以轻松地调整它们之间的依赖关系，而不会影响到其他部分代码。

2. **灵活性强**：通过使用新的 Context，我们可以实现更加灵活的架构。例如，我们可以轻松地替换或扩展特定的功能，而不会对其他部分产生影响。

3. **可维护性好**：通过解耦依赖关系，我们可以更容易地理解和维护代码。我们可以集中精力解决特定的问题，而不需要同时处理与之相关的其他部分。

通过以上优势，我们可以大大提升代码的可维护性和可扩展性，从而为开发人员提供更好的开发体验。