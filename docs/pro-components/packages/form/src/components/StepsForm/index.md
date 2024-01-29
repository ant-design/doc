## 什么是 StepsForm？

StepsForm 是一个分步表单组件，通过使用 Provider 来管理子表单的数据。每个子表单都是完整的数据，在 StepsForm 组合成最后的数据。该组件还自带一个进度条和一些管理进度条的相关 API。

### StepsForm 继承自哪个组件？它有什么功能？

StepsForm 继承自 Form.Provider 组件。可以查看[这里](https://ant.design/components/form-cn/#Form.Provider)了解更多关于 Form.Provider 组件的信息。

StepsForm 还提供了转化 moment 值的功能，这是由 ProForm 提供的功能。因此，在 `onFormFinish` 和 `onFormChange` 事件中，所传递的值都是未经转化的值。你可以使用这些值进行进一步处理或操作。

### StepsForm 如何管理进度条？

StepsForm 自带了一个进度条，以帮助用户了解当前分步表单的进度。此外，StepsForm 还提供了一些管理进度条的相关 API，你可以使用这些 API 来控制进度条的显示和行为。具体的管理进度条的相关 API 可以在官方文档中找到。

1. ### `current` 参数的作用是什么？

- 说明：`current` 是当前表单的步骤数，从 0 开始计数。
- 类型：`number`
- 默认值：0

2. ### `onCurrentChange` 是一个什么样的事件？

- 说明：`onCurrentChange` 是当 `current` 发生改变时触发的事件。
- 类型：`(current:number)=>void`
- 参数：`current`，表示当前的步骤数。

3. ### `onFinish` 事件的触发条件是什么？

- 说明：`onFinish` 是在表单的最后一步提交成功之后触发的事件。
- 类型：`(values:T)=>void | boolean`
- 参数：`values`，表单提交成功后返回的值。
- 返回值：如果返回 `true`，表单将会自动重置（包括 `StepForm` 返回第一步）。

4. ### `stepsProps` 是什么？

- 说明：`stepsProps` 是 `StepsForm` 自带的 `Steps` 组件的属性，使用方式同 [antd](https://ant.design/components/steps-cn/) 组件相同，但去掉了 `current` 和 `onChange`。
- 类型：[props](https://ant.design/components/steps-cn/#API)

5. ### `stepFormRender` 的作用是什么？

- 说明：`stepFormRender` 是用于自定义当前展示的表单的函数，返回的 DOM 会在表单内部显示。
- 参数：`form`，表单的引用对象。
- 返回值：返回一个 `ReactNode`，表示自定义的表单展示内容。

6. ### `stepsFormRender` 的作用是什么？

- 说明：`stepsFormRender` 是用于自定义整个表单区域的函数，返回的 DOM 会在表单的外部显示。
- 参数：`form`，表单的引用对象；`submitter`，表单自带的提交区域。
- 返回值：返回一个 `ReactNode`，表示自定义的表单区域展示内容。

7. ### `stepsRender` 的作用是什么？

- 说明：`stepsRender` 是用于自定义步骤器的函数。
- 参数：`steps`，当前的步骤器；`dom`，DOM 节点。
- 返回值：返回一个 `ReactNode`，表示自定义的步骤器展示内容。

8. ### `formRef` 是什么？

- 说明：`formRef` 是 `StepForm` 引用的对象，方便自定义触发操作。
- 类型：`MutableRefObject<FormInstance>`

### StepForm 是什么？

StepForm 是一个基于 ProForm 的组件，提供了与 ProForm 相同的功能，只是在 `onFinish` 回调中支持 Promise。当 `onFinish` 返回 `false` 时，StepForm 不会跳转到下一步。

### StepForm 的参数有哪些？

StepForm 的参数如下：

- `onFinish`：当表单提交成功时触发的回调函数，类型为`(values:T) => Promise<false>`。

### StepForm 的默认值是什么？

StepForm 没有默认值。

### StepForm 的 onFinish 参数是什么类型的？

StepForm 的 `onFinish` 参数类型为 `(values:T) => Promise<false>`，其中 `values` 表示表单提交时的值。返回的 Promise 中如果是 `false`，则 StepForm 不会跳转到下一步。

请注意，以上内容的示例是基于 ProForm 组件，详情请参考 [ProForm](/components/form)。
