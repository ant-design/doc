### ProTable 的底层实现是什么？

ProTable 是基于 ProField 进行封装的，根据 valueType 的不同来渲染不同的 ProField。这样的设计使得 ProTable 具有灵活性和可扩展性。

### ProForm 的特点是什么？

ProForm 是基于 FormField 进行封装的，通过不同的 FormField 来实现不同的功能。其中，ProForm 可以方便地实现只读模式，对于表单的展示有很大的便利性。

### ProDescriptions 可以实现什么功能？

ProDescriptions 是另一个基于 ProField 的封装组件，它可以实现节点的编辑功能。通过 ProDescriptions，可以方便地进行节点的展示和编辑操作。

请参考以下示例代码了解更多关于 ProTable、ProForm 和 ProDescriptions 的用法：

```jsx
<code src="../../packages/table/src/demos/crud.tsx" iframe="650"></code>
```
