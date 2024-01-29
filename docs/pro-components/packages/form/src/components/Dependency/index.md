### ProFormDependency 是什么？

ProFormDependency 是一个简化版本的 Form.Item，它内置了 noStyle 与 shouldUpdate，可以方便地处理表单依赖关系。通过配置 name 参数来确定依赖的数据，ProFormDependency 会自动处理数据的差异，并从表单中提取相应的值。

### 如何配置 ProFormDependency 的 name 参数？

name 参数必须是一个数组。如果涉及到嵌套的结构，可以通过以下方式进行配置：

```tsx | pure
<ProFormDependency name={['name', ['name2', 'text']]}></ProFormDependency>
```

配置的 name 值将在 renderProps 中传入。

### 如何使用 ProFormDependency？

可以在 ProFormDependency 的子组件中，通过 renderProps 的方式来使用 ProFormDependency，例如：

```tsx | pure
<ProFormDependency name={['name']}>
  {({ name }) => {
    return (
      <ProFormSelect
        options={[
          {
            value: 'chapter',
            label: '盖章后生效',
          },
        ]}
        width="md"
        name="useMode"
        label={`与《${name}》合同约定生效方式`}
      />
    );
  }}
</ProFormDependency>
```

通过 renderProps 中传入的 name 值，可以在子组件中动态使用该值。

### ProFormDependency 不在 ProFormList 中

当`<ProFormDependency>`不在`<ProFormList>`中时，依赖的取值顺序如下：

1. 根据`name`声明的依赖项，从全局取值。

这意味着无论组件是否嵌套在`<ProFormList>`中，都会从全局取值。

### ProFormDependency 在 ProFormList 中，ignoreFormListField 为 true

当`<ProFormDependency>`在`<ProFormList>`中，并且设置`ignoreFormListField`为`true`时，依赖的取值顺序如下：

1. 根据`name`声明的依赖项，从全局取值。

即使组件嵌套在`<ProFormList>`中，也会从全局取值。

### ProFormDependency 在 ProFormList 中，ignoreFormListField 为 false

当`<ProFormDependency>`在`<ProFormList>`中，并且设置`ignoreFormListField`为`false`时，依赖的取值顺序如下：

1. 根据`name`声明的依赖项，从局部取值。

这意味着组件会优先从当前`<ProFormList>`所在范围内的表单字段中取值，而不是从全局取值。如果找不到对应的局部取值，才会从全局取值。
