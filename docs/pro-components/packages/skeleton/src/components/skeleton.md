## QA 如何使用列表页面？

要使用列表页面，你可以根据下面的步骤进行操作：

1. 打开列表页面的源代码文件`list.tsx`。

2. 查看源代码文件中的示例代码，可以参考示例代码进行调整。

3. 根据项目需求，修改列表页面的数据和样式。

4. 运行项目，打开列表页面，查看效果。

### QA 如何使用静态列表？

要使用静态列表，你可以按照以下步骤进行操作：

1. 打开静态列表的源代码文件`list.static.tsx`。

2. 查看源代码文件中的示例代码，可以参考示例代码进行调整。

3. 根据项目需求，修改静态列表的数据和样式。

4. 运行项目，打开静态列表页面，查看效果。

如果需要进行调试，可以在代码中添加`debug`属性。

### QA 如何使用结果页？

要使用结果页，你可以按照以下步骤进行操作：

1. 打开结果页的源代码文件`result.tsx`。

2. 查看源代码文件中的示例代码，可以参考示例代码进行调整。

3. 根据项目需求，修改结果页的数据和样式。

4. 运行项目，打开结果页，查看效果。

希望以上信息对你有帮助！如果有任何问题，请随时提问。

### 骨架屏的不同类型有哪些?

参数 `type` 控制着骨架屏的类型，可选值为 `'list'`、`'result'`、`'descriptions'`。分别表示列表类型的骨架屏、结果类型的骨架屏和描述类型的骨架屏。默认值为 `'list'`。

### 如何控制骨架屏的动态显示?

参数 `active` 控制骨架屏是否显示动态效果，可以是一个布尔值，`true` 表示显示动态效果，`false` 表示不显示。默认值为 `true`。

### 是否可以为骨架屏添加 pageHeader?

参数 `pageHeader` 控制是否显示 pageHeader 的骨架屏，只有在类型为 `descriptions` 或 `list` 时才有效。该参数不需要传入具体的值，只需要填写 `-` 即可。

### 统计信息骨架屏的数量如何控制?

参数 `statistic` 用于控制统计信息骨架屏的数量，可以是一个数字或布尔值 `false`。当传入一个数字时，表示显示指定数量的统计信息骨架屏；当传入 `false` 时，表示不显示统计信息骨架屏。

### 列表骨架屏的数量如何控制?

参数 `list` 用于控制列表骨架屏的数量，可以是一个数字或布尔值 `false`。当传入一个数字时，表示显示指定数量的列表骨架屏；当传入 `false` 时，表示不显示列表骨架屏。

### 是否可以为列表骨架屏添加操作栏?

参数 `toolbar` 控制是否显示列表的操作栏骨架屏，可以是一个布尔值，`true` 表示显示操作栏骨架屏，`false` 表示不显示。该参数不需要传入具体的值，只需要填写 `-` 即可。

### 如何自定义编辑框的表现?

参数 `renderFormItem` 用于自定义在编辑模式下的表单项的显示形式，可以传入一个自定义的 DOM 元素。

### 如何自定义只读模式下的表现形式?

参数 `render` 用于自定义在只读模式下的表现形式，可以传入一个自定义的 DOM 元素。

请注意，所有参数均有默认值，具体的默认值请查看上方的表格。