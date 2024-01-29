## ModalForm 和 DrawerForm 是什么？

ModalForm 和 DrawerForm 是一种 ProForm 的变体，它们本质上仍然是表单。与 ProForm 相同，它们的表现也是一样的，可以直接从 ProForm 进行修改。

### 如何自定义 ModalForm 和 DrawerForm 的页脚？

由于 ModalForm 和 DrawerForm 本质上是表单，无法通过 `footer` 属性来自定义页脚。如果需要自定义页脚，可以使用 `submitter.render` 方法进行自定义。

### 如何控制 ModalForm 和 DrawerForm 的打开和关闭？

为了减少涉及状态的使用，ModalForm 和 DrawerForm 提供了触发器（trigger）。如果需要使用状态来控制它们的打开和关闭，可以使用 `open` 和 `onOpenChange` 这两个属性来进行控制。

### 如何使用 open 和 onOpenChange 属性？

要使用 open 和 onOpenChange 属性，你可以按照以下步骤进行操作：

1. 首先，确保你已经引入所需的组件。这些组件中包含了 open 和 onOpenChange 属性，例如上述代码示例中的 `visible-on-visible-change.tsx` 文件。

2. 在需要使用 open 和 onOpenChange 属性的组件上，使用 `<code>` 标签将代码包裹起来，并将代码文件的路径传入 `src` 属性中。

3. 在代码示例的 `title` 属性中，填写相应的标题名称，以便更好地描述这段代码的功能和使用场景。

4. 确保你的代码中已经定义了 `onOpenChange` 函数，它将作为回调函数，以响应开关状态的变化。

5. 将 `open` 属性设置为一个布尔值，用于控制组件的打开或关闭状态。

6. 当你需要在组件的打开或关闭状态发生变化时执行一些操作时，你可以在 `onOpenChange` 函数中编写相应的逻辑代码。

7. 最后，根据你的具体需求和应用场景，调整代码中的其他相关属性和参数。

通过遵循以上步骤，你可以成功使用 open 和 onOpenChange 属性，并根据需要对组件的打开和关闭状态进行控制和相应操作。

### open 和 onOpenChange 属性分别用于什么？

open 和 onOpenChange 属性在前端开发中常用于组件的状态管理和交互控制。

- open 属性用于控制组件的打开和关闭状态。它的值为布尔类型，当为 true 时表示组件处于打开状态，当为 false 时表示组件处于关闭状态。

- onOpenChange 属性是一个回调函数，用于监听组件的打开和关闭状态的变化。当组件的打开或关闭状态发生变化时，该函数会被触发，并执行相应的操作逻辑。

通过使用 open 和 onOpenChange 属性，你可以实现组件的状态控制和响应交互，以便根据用户的操作和需求对组件进行动态的打开和关闭操作，并在状态变化时执行相应的逻辑代码。

### 使用 open 和 onOpenChange 的注意事项

在使用 open 和 onOpenChange 属性时，需要注意以下几点：

- 确保你已经引入了支持这些属性的组件，并按照正确的方式使用它们。

- 在代码示例中，需要定义一个 `onOpenChange` 函数，该函数将作为回调函数，在组件的打开或关闭状态发生变化时被触发。

- open 属性的值应为一个布尔类型的变量，用于控制组件的打开和关闭状态。

- 根据你的具体需求和场景，可以根据组件的打开和关闭状态执行一些操作，例如切换样式、加载数据等。

- 确保你的代码中也包含了其他相关属性和参数，以满足你的具体需求和应用场景。

通过遵循以上注意事项，你可以更好地使用 open 和 onOpenChange 属性，并在前端开发中实现组件的状态控制和交互操作。

### ModalForm 组合了哪些组件？

ModalForm 组合了 Modal 和 ProForm 两个组件。

### ModalForm 中的 trigger 参数是用来做什么的？

trigger 参数是用来触发 Modal 打开的 DOM 元素，通常是一个按钮。

### ModalForm 中的 open 参数的类型是什么？

open 参数的类型是 open，具体含义未给出。

### ModalForm 中的 onOpenChange 参数是在什么情况下触发的？

onOpenChange 参数在 visible 改变时触发。

### ModalForm 中的 modalProps 参数是用来做什么的？

modalProps 参数是 Modal 组件的 props，可以使用与 antd 相同的方式进行配置。

### ModalForm 中的 title 参数表示什么？

title 参数表示弹框的标题。

### ModalForm 中的 width 参数表示什么？

width 参数表示弹框的宽度。

### ModalForm 中的 onFinish 参数在什么情况下触发？

onFinish 参数在提交数据时触发。

### ModalForm 中的 submitTimeout 参数是用来做什么的？

submitTimeout 参数是在提交数据时禁用取消按钮的超时时间（毫秒）。

### ModalForm 中的 submitter 参数与哪个组件的配置方式相同？

submitter 参数的配置方式与 ProForm 组件相同。

### DrawerForm 的触发方式是什么？可以使用什么类型的 dom？

DrawerForm 的触发方式是使用 trigger 参数来触发 Modal 打开，一般是 button。trigger 参数的类型是 ReactNode。

### DrawerForm 是否支持调整大小？怎么调整大小？

是的，DrawerForm 支持调整大小。调整大小的方式可以通过 resize 参数来实现。resize 参数可以是一个对象，包含 onResize、maxWidth 和 minWidth 属性，也可以是一个布尔值。onResize 用于定义调整大小时的回调函数，maxWidth 和 minWidth 分别用于定义宽度的最大值和最小值。

### DrawerForm 的 onFinish 事件是在什么时候触发？触发后会有什么效果？

DrawerForm 的 onFinish 事件是在提交数据时触发的。当触发 onFinish 事件后，会根据事件处理函数的返回值决定抽屉的行为。如果返回 true，抽屉会关闭，并且如果配置了 destroyOnClose 属性，表单会被重置。如果返回 false，则抽屉会保持打开状态，并且表单不会被重置。如果没有配置 onFinish 事件，提交数据后不会有任何效果。
