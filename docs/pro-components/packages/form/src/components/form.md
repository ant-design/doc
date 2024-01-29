### ProForm 的使用注意事项有哪些？

ProForm 的使用注意事项有如下几点：

1. 如果想要设置默认值，请使用 `initialValues` 属性，避免直接使用组件的 `value` 和 `onChange` 导致值绑定失效。
2. 如果想要实现表单联动或者处理依赖关系，可以使用 render props 模式，ProFormDependency 组件是最佳选择。
3. ProForm 的 `onFinish` 方法与 antd 的 Form 不同，返回一个 Promise，在正常返回时会自动设置按钮的加载效果。
4. 若要监听某个值的变化，请使用 `onValuesChange` 属性，保持单向的数据流，方便开发和维护。
5. ProForm 是 antd Form 的封装，支持自定义组件的使用，只需使用 Form.Item 组件包裹后即可混用。

### ProForm 如何设置默认值？

要设置 ProForm 的默认值，可以使用 `initialValues` 属性。例如：

```tsx | pure
<ProForm initialValues={obj} />
```

其中，`obj` 是一个包含表单字段名和对应默认值的对象。

### 如何在 ProForm 中实现组件联动？

在 ProForm 中实现组件联动，可以使用 render props 模式。例如：

```tsx | pure
<ProForm>
  <Form.Item noStyle shouldUpdate>
    {(form) => {
      return (
        <ProFormSelect
          options={[
            {
              value: "chapter",
              label: "盖章后生效",
            },
          ]}
          width="md"
          name="useMode"
          label={`与${form.getFieldValue("name")}合同约定生效方式`}
        />
      );
    }}
  </Form.Item>
</ProForm>
```

在上述代码中，根据 `name` 字段的值动态改变 `useMode` 字段对应的选项。

### 如何在 ProForm 中使用自定义组件？

要在 ProForm 中使用自定义组件，只需在 Form.Item 组件中包裹即可。例如：

```tsx | pure
<ProForm>
  <Form.Item name="switch" label="Switch" valuePropName="checked">
    <Switch />
  </Form.Item>
</ProForm>
```

上述代码中，将 antd 的 Switch 组件作为自定义组件使用，并与 `switch` 字段关联起来。

### 何时使用 ProForm？

当你想快速实现一个表单但不想花太多时间去布局时 ProForm 是最好的选择。

ProForm 是基于 antd Form 的可降级封装，与 antd 功能完全对齐，但是在其之上还增加一些预设行为和多种布局。这些布局之间可以无缝切换，并且拥有公共的 API。

#### ProForm 的使用场景是什么？

ProForm 适用于以下场景：
- 标准 Form，增加了 `onFinish` 中自动 `loading` 和根据 `request` 自动获取默认值的功能的情况下，可以使用 ProForm。
- 如果希望在 ProForm 的基础上增加 `trigger` 而无需维护 `visible` 状态，可以使用 ModalForm 或 DrawerForm。
- 如果需要作为筛选表单，并需要配合其他数据展示组件使用，可以使用 QueryFilter。
- 如果需要作为行内内置的筛选，比如卡片操作栏和表格操作栏，可以使用 LightFilter。
- 如果需要实现分步表单，需要配置 StepForm 使用 StepsForm。

#### 如何切换 ProForm 的布局？

可以根据需要切换 ProForm 的布局。以下是一个示例用于切换 Form 的 layout 的代码：

```tsx
import { ProForm, Radio } from 'antd';

const Demo = () => {
  return (
    <ProForm layout="horizontal">
      <Radio.Group defaultValue="vertical" buttonStyle="solid" onChange={(e) => {
        console.log('value:', e.target.value);
      }}>
        <Radio.Button value="vertical">Vertical</Radio.Button>
        <Radio.Button value="horizontal">Horizontal</Radio.Button>
        <Radio.Button value="inline">Inline</Radio.Button>
      </Radio.Group>
    </ProForm>
  )
}
```

以上是关于 ProForm 的布局切换的示例代码，通过选择不同的选项可以切换表单的布局。

请参考以上信息来了解 ProForm 的使用场景、布局切换以及其他相关信息。

### convertValue 是什么？

convertValue 是一个用于在组件获得数据之前对数据进行转化的函数。它一般用于对后端直接给前端的数据进行精加工。

### convertValue 的参数是什么？

convertValue 的参数包括两个：value 和 namePath。value 是字段的值，namePath 是字段的名称。

### convertValue 的返回值是什么？

convertValue 的返回值可以是字符串、布尔值或者一个包含多个字段的对象。具体返回值的格式取决于具体的转换逻辑。例如，可以将一个字符串按逗号分隔后返回一个数组，将一个字符串解析为 JSON 对象，将一个数字转化为日期，或者将一个字符串转化为包含 value 和 label 字段的对象。

希望以上信息对你有所帮助！如果还有其他问题，请随时提问。

### transform 发生在什么时候？

transform 发生在提交的时候，一般是将数据发送给后端并存在数据库中。

### ProFormDependency 和 formRef 如何支持 transform？

`ProFormDependency` 和 `formRef` 提供了 `transform` 的支持，用于获取转化后的值。

使用示例：

```tsx | pure
<ProFormDependency>
  {(value, form) => {
    // value 是经过 transform 转化后的值
    // form 是当前的 formRef，可以获取未转化的值
    return ReactNode;
  }}
</ProFormDependency>
```

`formRef` 内置了几个方法，用于获取转化后的值。这是与 antd 的 Form 不同的功能。具体可查看 ProFormInstance 的类型定义。

```tsx | pure
/** 获取被 ProForm 格式化后的所有数据  */
getFieldsFormatValue?: (nameList?: true) => T;

/** 获取格式化之后的单个数据 */
getFieldFormatValue?: (nameList?: NamePath) => T;

/** 获取格式化之后的单个数据 */
getFieldFormatValueObject?: (nameList?: NamePath) => T;

/** 验字段后返回格式化之后的所有数据*/
validateFieldsReturnFormatValue?: (nameList?: NamePath[]) => Promise<T>;
```

### transform 的类型和用法是怎样的？

transform 的类型为 `SearchTransformKeyFn`，具体定义如下：

```tsx | pure
export type SearchTransformKeyFn = (
  value: any,
  namePath: string,
  allValues: any,
) => string | Record<string, any>;
```

transform 用于在提交时转化字段的值，常用于将值转化为提交的数据。

以下是一些 transform 的使用示例：

- 将数组转化为字符串：`value.join(",")`
- 将字符串转化为对象属性：`{ newName: value }`
- 将日期格式化为指定的字符串格式：`value.format("YYYY-MM-DD")`
- 将日期转化为时间戳：`value.valueOf()`
- 从对象中提取特定属性的值：`value.value`
- 将对象转化为多个属性的值：`{ valueName: value.value, labelName: value.name }`


### 栅格化布局

栅格化布局是一种常用的网页布局方式，可以将页面划分为等宽的列，通过不同的列数和偏移量来实现灵活的页面布局。

在前端开发中，栅格化布局被广泛应用于表单的布局中，可以使表单更加美观、易读，并且方便响应式设计。

Ant Design 提供了栅格化布局的支持，在 `ProForm`, `SchemaForm`, `ModalForm`, `DrawerForm`, `StepsForm` 这些组件中都可以使用栅格化布局。通过指定不同的参数，可以控制每个表单项的宽度以及在页面中所占的列数。

你可以查看以下示例代码和效果：

```tsx
import { ProForm, ProFormText } from 'antd';

const Demo = () => {
  return (
    <ProForm layout="vertical">
      <ProFormText name="name" label="姓名" />
      <ProFormText name="age" label="年龄" />
      <ProFormText name="email" label="邮箱" />
      <ProFormText name="phone" label="电话" />
    </ProForm>
  );
};

export default Demo;
```

通过上述代码，我们可以实现一个基本的栅格化布局的表单，每个表单项占据一行，表单项的宽度自动适应页面宽度。

使用栅格化布局可以使表单更加整齐，方便用户填写，美化页面。在实际项目中，你还可以根据具体的设计要求，调整栅格的列数和偏移量，以实现更多样化的布局效果。

### 表单联动

在表单开发中，表单联动是一种常见的需求。通过联动，可以实现表单中的字段之间的交互和依赖关系，提升用户体验。

在 Ant Design 中，你可以通过简单的配置和代码来实现表单联动的效果。以下是一个示例代码和效果：

```tsx
import { Form, Input } from 'antd';
import React from 'react';

const Demo = () => {
  const [form] = Form.useForm();

  const handleInputChange = (value) => {
    const targetValue = Number(value);

    form.setFieldsValue({
      age: targetValue + 1,
    });
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item name="name" label="姓名">
        <Input />
      </Form.Item>
      <Form.Item name="age" label="年龄">
        <Input onChange={(e) => handleInputChange(e.target.value)} />
      </Form.Item>
    </Form>
  );
};

export default Demo;
```

在上述示例中，我们实现了一个简单的表单联动效果。当输入框中的值发生改变时，通过处理函数 `handleInputChange` 来更新年龄字段的值，使其加 1。

通过表单联动的功能，可以对表单中的字段进行更为复杂的依赖关系的控制，实现根据不同字段的值进行动态展示、禁用等操作，提供更好的用户体验。

### 表单方法调用

在前端开发中，常常需要对表单进行操作，如重置表单、设置表单的值、获取表单的值等等。

在 Ant Design 中，你可以通过获取表单的引用，并使用引用调用相应的方法，来实现对表单的操作。以下是一个示例代码和介绍：

```tsx
import { Form, Input, Button } from 'antd';
import React from 'react';

const Demo = () => {
  const formRef = React.useRef<FormInstance>();

  const handleResetForm = () => {
    formRef.current?.resetFields();
  };

  const handleSetForm = () => {
    formRef.current?.setFieldsValue({
      name: '张三',
      age: 18,
      email: 'zhangsan@example.com',
    });
  };

  const handleGetForm = () => {
    const formValues = formRef.current?.getFieldsValue();
    console.log(formValues);
  };

  return (
    <Form ref={formRef} layout="vertical">
      <Form.Item name="name" label="姓名">
        <Input />
      </Form.Item>
      <Form.Item name="age" label="年龄">
        <Input />
      </Form.Item>
      <Form.Item name="email" label="邮箱">
        <Input />
      </Form.Item>
      <Button onClick={handleResetForm}>重置表单</Button>
      <Button onClick={handleSetForm}>设置表单值</Button>
      <Button onClick={handleGetForm}>获取表单值</Button>
    </Form>
  );
};

export default Demo;
```

通过上述示例代码，我们演示了如何通过 `formRef` 获取到表单的引用，并通过引用调用不同的方法进行表单的重置、设置和获取操作。

使用表单的方法调用功能，可以更加灵活地控制表单的操作，提升用户体验和开发效率。你可以根据具体的需求，调用相应的方法，并结合其他功能一起使用。

### 同步提交结果到 URL

在前端开发中，我们经常需要将用户输入的数据提交到后端进行处理。有时候，我们也需要将数据同步到 URL 中，以便用户可以通过 URL 进行分享或保存当前状态。那么，如何将提交结果同步到 URL 呢？

在打开页面时，我们可以将 URL 的参数设置为默认值，以便页面加载时能够正确地显示数据。同时，我们可以使用 transform 来对字段进行映射，保证数据的准确性。

下面是一个示例代码，展示了如何实现将结果同步到 URL 的功能：

```tsx
<code src="../demos/sync-to-url.tsx" ></code>
```

通过以上代码示例，我们可以学习到如何在前端中实现将结果同步到 URL 的功能。通过将用户输入的数据同步到 URL 中，我们可以方便地分享或保存当前状态，提升用户体验。

### 金额

在前端开发中，金额的展示和处理是一个常见需求。为了更好地满足用户的需求，我们需要对金额进行格式化和展示。下面是一个展示金额的示例代码：

```tsx
<code src="../demos/money.tsx" title="金额"></code>
```

通过以上代码示例，我们可以学习到如何在前端中展示和处理金额。通过格式化金额，我们可以使金额更易读，并提升用户的体验。

### 固定页脚

在页面设计中，有时我们需要将页脚固定在页面底部，以保持页面的整体美观性和一致性。下面是一个展示如何固定页脚的示例代码：

```tsx
<code src="../demos/layout-footer.tsx" iframe="580" title="固定页脚"></code>
```

通过以上代码示例，我们可以学习到如何在前端中实现固定页脚的效果。通过固定页脚，我们可以使页面的布局更加合理和美观。

### ProForm 和 EditableTable 同时使用

在某些场景下，我们可能需要使用 ProForm 和 EditableTable 两个库来实现表单和可编辑表格的功能。下面是一个示例代码，展示了如何同时使用 ProForm 和 EditableTable：

```tsx
<code src="../demos/pro-form-editableTable.tsx" title="ProForm 和 EditableTable 同时使用"></code>
```

通过以上代码示例，我们可以学习到如何在前端中同时使用 ProForm 和 EditableTable 来实现复杂的表单和表格功能。

通过以上三个示例，我们可以了解到在前端开发中常见的一些功能实现方法，包括将结果同步到 URL、展示和处理金额、固定页脚以及同时使用 ProForm 和 EditableTable。希望这些示例能对你的前端开发工作有所帮助！

### 劫持渲染函数的组件是用来做什么的？

劫持渲染函数的组件是为了更好地聚合带请求的业务代码和完成自定义表单项的功能。在中后台项目中，表单是必不可少的，通常还会包含一些非标准控件和复杂的表单项。使用劫持渲染函数的组件可以通过 render props 的方式来组织代码，方便地封装自定义表单项，并提供 value 和 onChange 的实现。

### useControlModel 和 withFormItemRender 有什么作用？

- useControlModel 用来快速创建自定义表单项，并且支持单实例或多实例的场景。适用于需要封装自定义表单组件，并在多个地方使用的情况。

- withFormItemRender 用来生成一个 FormItemRender，以内联的方式组织代码。适用于只被使用一次或需要许多上下文参数的场景。通过使用 withFormItemRender，可以更方便地封装和使用自定义表单项。

### FormControlRender 是用来做什么的？

FormControlRender 的作用是将一个 form 组件转换成 render props 的形式。这在特定情况下非常有用，例如在@alipay/techui-rule-tree 组件中，render 内部的组件不允许调用 onChange 方法。使用 FormControlRender 可以解决这个问题，将 form 组件转换成 render props 形式后，就可以在 render props 中进行操作。

另外，还可以通过在 Form.Item 中嵌套使用 Form.Item 或设置外层 Form.Item 的 noStyle 属性的方式来组织代码。这样做会多一些 div 元素的包裹，如果对样式没有影响，也可以采用这种方式组织代码。

### 如何使用 useControlModel？

你可以使用 `useControlModel` 钩子函数来创建自定义表单项。下面是一个例子，演示了如何使用 `useControlModel` 来自定义一个带有按钮的表单项：

```jsx
import { useControlModel } from 'rc-field-form';

const CustomControl = () => {
  const control = useControlModel();

  return (
    <>
      <Button onClick={() => control.setValue('custom value')}>设置自定义值</Button>
      <input value={control.value} onChange={(e) => control.onChange(e.target.value)} />
    </>
  );
};

const CustomForm = () => {
  const [form] = useForm();
  const onSubmit = (values) => {
    console.log('表单提交的值:', values);
  };

  return (
    <Form form={form} onFinish={onSubmit}>
      <Form.Item name="custom">
        <CustomControl />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};
```

通过使用 `useControlModel` 钩子函数，你可以自定义表单项的交互逻辑，并与 Ant Design 的表单组件无缝集成。

### 如何使用和 hooks 改造自定义表单项？

要将自定义表单项与 hooks 结合使用，可以使用 `useForm` 和 `useFieldArray` 方法。下面是一个示例，展示了如何使用 hooks 改造自定义表单项：

```jsx
import { useForm, useFieldArray } from 'react-hook-form';

const CustomForm = () => {
  const { control, handleSubmit } = useForm();
  const { fields, append } = useFieldArray({ control, name: 'custom' });

  const onFormSubmit = (data) => {
    console.log('表单提交的值:', data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {fields.map((item, index) => (
        <div key={item.id}>
          <input defaultValue={item.value} {...useControlModel({ name: `custom[${index}].value` })} />
        </div>
      ))}
      <button type="button" onClick={() => append()}>添加</button>
      <button type="submit">提交</button>
    </form>
  );
};
```

通过使用 `useForm` 获取表单的控制对象和提交处理程序，以及使用 `useFieldArray` 管理数组字段，你可以方便地为自定义表单项添加和删除项，并收集表单数据。

### 如何嵌套使用自定义表单项？

如果你想在嵌套的表单中使用自定义表单项，你可以将其放在 `Form.Item` 中。下面是一个示例：

```jsx
const NestedForm = () => {
  return (
    <Form>
      <Form.Item name="nested">
        <Form>
          <Form.Item name="custom">
            <CustomControl />
          </Form.Item>
        </Form>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">提交</Button>
      </Form.Item>
    </Form>
  );
};
```

在嵌套表单中使用自定义表单项时，需要将其包裹在 `Form.Item` 中，以确保表单项的值能够正确地关联到相应的父表单项。

希望以上信息能对你有所帮助！如果还有其他问题，请随时提问。

### FormControlRender 是什么？

FormControlRender 是一个用于内联书写代码和编写逻辑的工具，适用于一些组件外层包裹了 ProForm.Item 或者 Form.Item 的情况。它可以解决使用 Form.Item.useStatus 必须满足 hooks 使用规范的问题，可以让开发者在内联使用时更加灵活。

### 如何使用 FormControlRender？

可以使用下面的代码作为参考：

```tsx
import { FormControlRender } from 'antd';

<FormControlRender>
  {(context) => (
    <div>
      <ProForm.Item name="name" label="Name">
        <Input />
      </ProForm.Item>
      {context.form.getFieldValue('name') === 'foo' && (
        <ProForm.Item name="bar" label="Bar">
          <Input />
        </ProForm.Item>
      )}
    </div>
  )}
</FormControlRender>;
```

以上代码会在 `FormControlRender` 组件内部执形 `ProForm.Item` 的逻辑，并且根据某个条件动态渲染 `ProForm.Item`。

### FormControlRender 解决了什么问题？

FormControlRender 解决了在内联使用 `Form.Item.useStatus` 时必须满足 hooks 使用规范的问题。它允许开发者在内联使用时更加灵活，并且可以根据条件动态渲染 `Form.Item` 组件内容。

### 什么是 FormItemRender？

FormItemRender 是一种在 Form 组件中书写表单项的方式。它可以提供更方便的方式来定义表单项的样式和布局。

### 什么是 ProFormItemRender？

ProFormItemRender 是一种在 Form 组件中书写表单项的高级方式。它可以帮助开发者更灵活地定义表单项之间的联动关系和依赖关系。

### FormItemRender 和 ProFormItemRender 的示例代码在哪里？

示例代码可以在以下链接中找到：

- FormItemRender 示例：[form-item-render.tsx](../demos/form-item-render.tsx)
- ProFormItemRender 示例：[linkage-customization.tsx](../demos/linkage-customization.tsx)
- ProFormItemRender 依赖关系示例：[pro-form-dependency.debug.tsx](../demos/pro-form-dependency.debug.tsx)
- FormItemRender 布局示例：[label-col.tsx](../demos/label-col.tsx)

### ProForm 是什么？

ProForm 是对 antd Form 的再封装。它提供了与 antd Form 相同的自定义表单元素的方式，可以使用 FormItem + 自定义组件来自定义表单元素。ProForm 还可以与其他组件，如 QueryFilter 等组件一起使用。

### ProForm 的常用参数有哪些？

以下是 ProForm 的常用参数：

- onFinish：提交表单且数据验证成功后的回调事件。
- onReset：点击重置按钮的回调。
- submitter：提交按钮相关配置。
- syncToUrl：将参数同步到 URL 上。
- syncToInitialValues：将结果同步到初始值。
- dateFormatter：自动格式化数据的方式。
- omitNil：自动清空 null 和 undefined 的数据。
- params：发起网络请求的参数。
- request：发起网络请求的参数，返回值会覆盖给初始值。
- isKeyPressSubmit：是否使用回车提交。
- formRef：获取表单所使用的 form。
- autoFocusFirstInput：自动聚焦第一个输入框。
- grid：是否开启栅格化模式。
- rowProps：在 grid 模式下传递给 Row 的属性。
- 其他参数（参考 antd Form）。

### ProForm 的文档相关资源有哪些？

- [antd 的 Form API](https://ant.design/components/form-cn/)
- [initialValues 相关知识](https://procomponents.ant.design/docs/faq)

以上是关于 ProForm 的常用参数和相关资源的说明。

### ProFormInstance 的 getFieldsFormatValue 方法如何使用？

ProFormInstance 中的 getFieldsFormatValue 方法用于获取被 ProForm 格式化后的所有数据。它接受一个可选的 nameList 参数，类型为布尔值。如果不传入 nameList 参数，则该方法将返回所有数据，包括没有被 form 托管的数据。如果传入了 nameList 参数，并且值为 true，那么即使没有被 form 托管的数据也会被返回。

例如，调用 getFieldsFormatValue() 方法会返回所有数据，而调用 getFieldsFormatValue(true) 方法也会返回所有数据，即使没有被 form 托管的。

### ProFormInstance 的 getFieldFormatValue 方法如何使用？

ProFormInstance 中的 getFieldFormatValue 方法用于获取被 ProForm 格式化后的单个数据。它接受一个 nameList 参数，类型为字符串数组或数字数组，表示要获取的数据的路径。例如，如果有一个字段的路径为 `a.b`，那么调用 getFieldFormatValue(['a', 'b']) 方法将返回该字段的值。

例如，如果有一个数据结构为 `{a:{b:value}}`，那么调用 getFieldFormatValue(['a', 'b']) 方法将返回 value。

### ProFormInstance 的 getFieldFormatValueObject 方法如何使用？

ProFormInstance 中的 getFieldFormatValueObject 方法用于获取被 ProForm 格式化后的单个数据，包含它的 name。它接受一个 nameList 参数，类型为字符串数组或数字数组，表示要获取的数据的路径。

例如，如果有一个数据结构为 `{a:{b:value}}`，那么调用 getFieldFormatValueObject(['a', 'b']) 方法将返回 `{a:{b:value}}`。

### ProFormInstance 的 validateFieldsReturnFormatValue 方法如何使用？

ProFormInstance 中的 validateFieldsReturnFormatValue 方法用于验证字段，并在验证通过后返回格式化之后的所有数据。它接受一个可选的 nameList 参数，类型为字符串数组或数字数组，表示要验证的字段的路径。

例如，调用 validateFieldsReturnFormatValue() 方法将返回经过格式化后的所有数据对象，例如 `{a:{b:value}}`。

### 1. ProForm.Group 中的 title 参数有什么作用？

- 说明：标题
- 类型：string
- 默认值：无

### 2. ProForm.Group 中的 children 参数可以接受哪些类型的元素？

- 说明：表单控件或者其他元素
- 类型：React.ReactNode
- 默认值：无

### 3. ProForm.Group 是否有默认值？

- 说明：无
- 类型：无
- 默认值：无

#### ProForm 中 submitter 的作用是什么？

submitter 是 ProForm 组件中的一个配置项，用于配置提交按钮和重置按钮的相关属性和行为。可以通过 submitter 来设置按钮的文本、隐藏重置按钮、自定义整个区域等。

#### submitter 的参数有哪些以及其作用是什么？

submitter 的参数包括：
- onSubmit: 提交方法，当提交按钮被点击时触发的回调函数。
- onReset: 重置方法，当重置按钮被点击时触发的回调函数。
- searchConfig: 搜索的配置，用于配置提交按钮和重置按钮的文本。
- submitButtonProps: 提交按钮的属性，可以设置按钮的样式、禁用状态等。
- resetButtonProps: 重置按钮的属性，可以设置按钮的样式、禁用状态等。
- render: 自定义操作的渲染方法，可以根据需求完全自定义整个区域的内容。

#### 如何使用 submitter 的 render 方法自定义整个区域？

在 submitter 的 render 方法中，可以通过参数获取到 props（包括 form 等信息）和默认的 dom 数组。根据需要可以自定义整个区域的内容，例如自定义按钮，添加其他操作等。返回一个 ReactNode 数组，即可实现自定义操作的渲染。

以示例代码为例，render 方法实现了两个自定义按钮，分别是重置按钮和提交按钮。点击重置按钮时，调用 form 的 resetFields 方法重置表单；点击提交按钮时，调用 form 的 submit 方法提交表单。

### formRef 是什么？

`formRef` 是在 `ProForm` 组件基础上增加的一个属性，它是对 `FormInstance` 的进一步封装，提供了一些方便的方法。例如，可以使用 `formRef.current.setFieldsValue()` 来设置表单字段的值，使用 `formRef.current.getFieldValue()` 来获取指定字段的值。

### 如何使用 formRef？

要使用 `formRef`，首先需要在 `ProForm` 组件上设置 `formRef` 属性，将 `formRef` 对象绑定到表单组件上。然后，可以使用 `formRef.current` 来获取 `ProFormInstance` 实例，进而调用相关方法。

以下是一个使用 `formRef` 的示例代码：

```tsx
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useRef } from 'react';

export default () => {
  const formRef = useRef<ProFormInstance>();

  const onFill = () => {
    formRef?.current?.setFieldsValue({
      name: '张三',
      company: '蚂蚁金服',
    });
  };

  return (
    <ProForm
      formRef={formRef}
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <ProFormText name="name" label="姓名" />
      <ProFormText name="company" label="公司" />
      <button onClick={onFill}>填充表单</button>
    </ProForm>
  );
};
```

在上述示例中，通过 `formRef` 来设置和获取表单字段的值，并通过 `onFill` 方法来填充表单。

### `ProFormInstance` 有哪些方法？

`ProFormInstance` 在原有的 `FormInstance` 的基础上增加了如下方法：

- `getFieldsFormatValue()`: 返回格式化后的所有数据。
- `getFieldFormatValue(name: string)`: 返回格式化后的指定字段数据。
- `validateFieldsReturnFormatValue()`: 校验表单并返回格式化后的所有数据。

这些方法可以通过 `formRef.current` 来获取 `ProFormInstance` 实例并调用。在上述示例代码中，`getFieldsFormatValue()` 和 `validateFieldsReturnFormatValue()` 分别通过 `formRef.current.getFieldsFormatValue()` 和 `formRef.current.validateFieldsReturnFormatValue()` 进行调用。