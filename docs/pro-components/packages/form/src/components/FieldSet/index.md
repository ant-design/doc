## 什么是 ProFormFields 表单项？

一个表单除了 Form 之外还是需要一系列的表单项。ProFormFields 是一套表单项组件，它是由 Form.Item 和 组件结合而成，可以将其当成一个 FormItem 来使用。每个表单项都支持各种 props，并且支持通过 fieldProps 设置输入组件的 props。同时，它们也支持透传 placeholder 属性，可以直接在组件上设置 placeholder。

### ProFormText 和 Input 有什么关系？

ProFormText 是一个 ProFormFields 的表单项组件，它由 Form.Item 和 Input 组件结合而成。你可以将其理解为以下代码的产物：

```tsx | pure
const ProFormText = (props) => {
  return (
    <ProForm.Item {...props}>
      <Input placeholder={props.placeholder} {...props.fieldProps} />
    </ProForm.Item>
  );
};
```

因此，我们给 ProFormText 设置的 props 实际上是 Form.Item 的 props，而包含的组件的 props 则是 fieldProps。请注意区分它们的作用。

### ProFormFields 表单项是否支持只读模式？

是的，每个表单项都支持 readonly 属性。不同的组件会有不同的只读样式，与 disable 相比，readonly 属性展示更加友好。此外，使用 readonly 生成的 DOM 也更小，例如 ProFormDigit 会自动格式化小数位数。因此，在需要只读模式的情况下，可以设置 readonly 属性来实现。

### ProFormText 的使用场景是什么？

ProFormText 是用于输入各类文本的组件，可以在表单中使用。

### ProFormDatePicker 和 ProFormDateTimePicker 的区别是什么？

ProFormDatePicker 是日期选择器，用于输入日期。而 ProFormDateTimePicker 是日期 + 时间选择器，用于输入日期和时间。

### ProFormCheckbox 和 ProFormRadio.Group 的区别是什么？

ProFormCheckbox 是复选框组件，支持在 Checkbox 基础上设置 layout，同时可以使用 `request` 和 `valueEnum` 两种方式生成子项。

ProFormRadio.Group 是单选按钮组件，支持在 Radio 基础上设置 layout，同时也可以使用 `request` 和 `valueEnum` 两种方式生成子项。它用于单选某项，但可以展示所有选项。

### 表单项

```tsx
import React from 'react';
import { Input } from 'antd';

const FormItem = () => {
  return (
    <div>
      <div className="label">姓名</div>
      <Input />
    </div>
  );
};

export default FormItem;
```

在这个例子中，我们展示了一个简单的表单项组件。其中包含一个 label 和一个 Input 组件。可以根据自己的需要，将这个组件进行定制和扩展。

### 查询表单

```tsx
import React from 'react';
import { Input, Button, Select } from 'antd';

const SearchForm = () => {
  return (
    <div>
      <div className="label">关键词</div>
      <Input />
      <div className="label">类型</div>
      <Select>
        <Select.Option value="1">类型1</Select.Option>
        <Select.Option value="2">类型2</Select.Option>
        <Select.Option value="3">类型3</Select.Option>
      </Select>
      <Button type="primary">查询</Button>
    </div>
  );
};

export default SearchForm;
```

这个例子展示了一个查询表单组件，包含一个关键词输入框、一个类型选择框和一个查询按钮。可以根据需求进行定制和样式修改。

### 结构化数据

```tsx
import React from 'react';
import { Checkbox, Form } from 'antd';

const FormData = () => {
  return (
    <Form>
      <Form.Item label="姓名">
        <Checkbox>选项1</Checkbox>
      </Form.Item>
      <Form.Item label="年龄">
        <Checkbox>选项2</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default FormData;
```

这个例子展示了一个结构化数据组件，使用了 Ant Design 的 Form 和 Checkbox 组件。可以根据自己的需求，进行表单项的添加和修改。

### 日期表单

```tsx
import React from 'react';
import { DatePicker } from 'antd';

const DateTimeForm = () => {
  return (
    <div>
      <div className="label">日期</div>
      <DatePicker />
    </div>
  );
};

export default DateTimeForm;
```

这个例子展示了一个日期表单组件，使用了 Ant Design 的 DatePicker 组件，可以选择日期。可以根据需求进行定制和样式修改。

### 上传表单

```tsx
import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadForm = () => {
  return (
    <div>
      <Upload>
        <Button icon={<UploadOutlined />}>点击上传</Button>
      </Upload>
    </div>
  );
};

export default UploadForm;
```

这个例子展示了一个上传表单组件，使用了 Ant Design 的 Upload 和 Button 组件。点击按钮后可以选择文件进行上传。可以根据需求进行定制和样式修改。

### 只读表单

```tsx
import React from 'react';
import { Input } from 'antd';

const ReadonlyForm = () => {
  return (
    <div>
      <div className="label">姓名</div>
      <Input readOnly />
    </div>
  );
};

export default ReadonlyForm;
```

这个例子展示了一个只读表单组件，使用了 Ant Design 的 Input 组件，并设置为只读。可以根据需求进行定制和样式修改。

### 轻量筛选中使用 light

```tsx
import React from 'react';
import { Checkbox, Form } from 'antd';

const FieldSetLight = () => {
  return (
    <Form layout="vertical" size="small">
      <Form.Item label="选项1">
        <Checkbox.Group>
          <Checkbox value="1">选项1</Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item label="选项2">
        <Checkbox.Group>
          <Checkbox value="2">选项2</Checkbox>
        </Checkbox.Group>
      </Form.Item>
    </Form>
  );
};

export default FieldSetLight;
```

这个例子展示了一个轻量筛选中使用 light 的组件，使用了 Ant Design 的 Form 和 Checkbox 组件。通过将 Form 的 layout 属性设置为 "vertical"，可以实现纵向布局。通过将 Form.Item 的 size 属性设置为 "small"，可以实现更小的表单项样式。可以根据需求进行定制和样式修改。

### 通用的属性

### 参数：width

- 说明：Field 的长度，我们归纳了常用的 Field 长度以及适合的场景，支持了一些枚举 "xs" , "sm" , "md" ,"lg" , "xl"
- 类型：`number | "xs" | "sm" | "md" | "lg" | "xl"`
- 默认值：-

### 参数：rowProps

- 说明：[RowProps](https://ant.design/components/grid/#Row)，开启 `grid` 模式时传递给 Row, 仅在`ProFormGroup`, `ProFormList`, `ProFormFieldSet` 中有效
- 默认值：{ gutter: 8 }

### 参数：colProps

- 说明：[ColProps](https://ant.design/components/grid/#Col)，开启 `grid` 模式时传递给 Col
- 默认值：{ xs: 24 }

### 参数：tooltip

- 说明：会在 label 旁增加一个 icon，悬浮后展示配置的信息
- 类型：`string | tooltipProps`
- 默认值：-

### 参数：secondary

- 说明：是否是次要控件，只针对 LightFilter 下有效
- 类型：`boolean`
- 默认值：`false`

### 参数：allowClear

- 说明：支持清除，针对 LightFilter 下有效，主动设置情况下同时也会透传给 `fieldProps`
- 类型：`boolean`
- 默认值：`true`

### 输入框的宽度是如何确定的？

在不同的场景下，输入框的宽度会根据内容的长度来进行适配，同时也有一些默认的宽度规则。

- `XS=104px` 这个宽度适用于短数字、短文本或选项的输入框。
- `SM=216px` 如果需要输入较短的字段，比如姓名、电话、ID 等，可以使用这个宽度。
- `MD=328px` 这个宽度是用于大部分字段长度的标准宽度。
- `LG=440px` 如果需要输入较长的字段，比如长网址、标签组、文件路径等，可以选择这个宽度。
- `XL=552px` 如果需要输入较长的文本，比如长链接、描述、备注等，通常会结合自适应多行输入框或定高文本域来使用。

根据不同的需求和场景，选择适合的宽度可以更好地展示输入框的内容。

### 如何设置输入框的宽度？

如果你需要设置输入框的宽度，可以根据上述的宽度规则进行选择。在 Ant Design 中，可以使用相应的尺寸值来设置输入框的宽度。例如，要设置一个宽度为 `SM=216px` 的输入框，可以使用以下代码：

```jsx
<Input style={{ width: '216px' }} />
```

通过设置 `style` 属性中的 `width` 属性来指定输入框的宽度。

### 输入框宽度规则示例

为了更好地理解输入框宽度的规则，下面举几个例子：

- 如果要创建一个用于输入短文本的输入框，可以使用 `XS=104px` 的宽度。
- 如果要创建一个用于输入较短字段的输入框，如姓名、电话、ID 等，可以使用 `SM=216px` 的宽度。
- 对于大部分字段长度，可以使用 `MD=328px` 的标准宽度。
- 如果需要输入较长的字段，比如长网址、标签组、文件路径等，可以使用 `LG=440px` 的宽度。
- 如果需要输入较长的文本，比如长链接、描述、备注等，可以使用 `XL=552px` 的宽度。

根据实际需求，选择合适的宽度可以使输入框更加美观和适配。

### ProFormText

### ProFormText 是什么？

ProFormText 是一个表单组件，它与 Ant Design 的 [Input](https://ant.design/components/input-cn/) 组件具有相同的功能。

### 如何使用 ProFormText 组件？

下面是一个示例的代码片段，演示了如何使用 ProFormText 组件：

```tsx | pure
<ProFormText
  name="text"
  label="名称"
  placeholder="请输入名称"
  fieldProps={inputProps}
/>
```

### ProFormText 的属性说明：

- `name`：设置组件的名称。
- `label`：设置组件的标签。
- `placeholder`：设置组件的占位文本。
- `fieldProps`：设置组件的额外属性。

请根据以上信息，使用 ProFormText 组件完成你的表单需求。

### ProFormCaptcha 组件是用来支持中后台中常见的验证码功能的吗？

是的，ProFormCaptcha 组件是专门为了支持中后台中常见的验证码功能而开发的。

### 如何在页面中使用 ProFormCaptcha 组件？

你可以在页面中使用以下代码示例来使用 ProFormCaptcha 组件：

```tsx | pure
<ProFormCaptcha
  fieldProps={{
    size: 'large',
    prefix: <MailTwoTone />,
  }}
  captchaProps={{
    size: 'large',
  }}
  phoneName="phone"
  name="captcha"
  rules={[
    {
      required: true,
      message: '请输入验证码',
    },
  ]}
  placeholder="请输入验证码"
  onGetCaptcha={async (phone) => {
    await waitTime(1000);
    message.success(`手机号 ${phone} 验证码发送成功!`);
  }}
/>
```

### ProFormCaptcha 组件支持哪些参数配置？

ProFormCaptcha 组件支持以下参数配置：

- onGetCaptch 点击获取验证码的事件，当配置了 phoneName 时会自动注入。
- onTiming: 计时数字监听。
- captchaProps: 获取验证码按钮的属性，与 antd 的属性相同。
- countDown: 倒计时的秒数，默认为 60。
- captchaTextRender: 渲染计时文案的方法。

以上就是关于 ProFormCaptcha 组件的介绍和用法，希望对你有所帮助！如果还有其他问题，请随时提问。

### ProFormText.Password 和 Input.Password 有什么区别？

ProFormText.Password 和 Input.Password 在功能上是相同的。它们都用于输入密码并隐藏输入内容。然而，它们的用法略有不同。ProFormText.Password 是基于 [ProForm](https://prolayout.ant.design/components/form-config)，而 Input.Password 是基于 [Ant Design](https://ant.design/components/input-cn/#Input.Password)。因此，如果你使用 ProForm 组件来构建表单，建议使用 ProFormText.Password；如果你只是简单地使用 Ant Design 组件，那么可以使用 Input.Password。

### 如何使用 ProFormText.Password 组件？

首先，确保你已经安装了相关依赖，并导入所需的组件。

```tsx
import ProFormText from '@ant-design/pro-form';
import { Password } from 'antd';
```

然后，在你的表单中使用 ProFormText.Password 组件。

```tsx
<ProFormText.Password label="InputPassword" name="input-password" />
```

### 如何使用 Input.Password 组件？

首先，确保你已经安装了相关依赖，并导入所需的组件。

```tsx
import { Input } from 'antd';
```

然后，在你的表单中使用 Input.Password 组件。

```tsx
<Input.Password />
```

以上是使用 ProFormText.Password 和 Input.Password 组件的基本示例。根据你的具体需求选择适合的组件使用即可。

### ProFormTextArea 是什么？

ProFormTextArea 是一个与 [Input.TextArea](https://ant.design/components/input-cn/#Input.TextArea) 功能相同的组件。

### ProFormTextArea 的属性有哪些？

ProFormTextArea 的属性如下：

- `name`：用于设置输入框字段的名称。
- `label`：用于设置输入框的标签。
- `placeholder`：设置输入框的占位文本。
- `fieldProps`：用于设置输入框的其他属性。

### 如何使用 ProFormTextArea 组件？

你可以使用以下代码示例来使用 ProFormTextArea 组件：

```tsx | pure
<ProFormTextArea
  name="text"
  label="名称"
  placeholder="请输入名称"
  fieldProps={inputTextAreaProps}
/>
```

请将 `inputTextAreaProps` 替换为您想要传递给 ProFormTextArea 组件的其他属性。

### 什么是 ProFormDigit 组件？

ProFormDigit 组件是一个提供输入数字的表单项，它与 Ant Design 的 inputNumber 组件相同。不同之处在于，ProFormDigit 组件自带了数字格式化功能，它会保留两位小数并设置最小值为 0。如果需要，你可以关闭该格式化功能。

### 如何使用 ProFormDigit 组件？

你可以通过以下代码示例来使用 ProFormDigit 组件：

```tsx | pure
<ProFormDigit label="InputNumber" name="input-number" min={1} max={10} />
```

上述示例中，我们使用了 label 属性来设置输入框的标签，name 属性来设置字段名，min 属性来设置最小值为 1，max 属性来设置最大值为 10。

如果你想修改小数的位数，可以使用 fieldProps 属性，并设置其 precision 值，例如：

```tsx | pure
<ProFormDigit
  label="InputNumber"
  name="input-number"
  min={1}
  max={10}
  fieldProps={{ precision: 0 }}
/>
```

上述示例中，我们将 precision 属性设置为 0，表示不保留小数位数。

### ProFormDigitRange 是什么？

ProFormDigitRange 是一个类似于 inputNumber 的组件，用于输入数字范围。它提供了一个标签为 "InputNumberRange" 的表单项。

### ProFormDigitRange 的使用示例是什么？

以下是一个使用 ProFormDigitRange 的示例代码：

```tsx | pure
<ProFormDigitRange label="InputNumberRange" name="input-number-range" />
```

### ProFormDigitRange 类型的标签名是什么？

ProFormDigitRange 类型的标签名为 "InputNumberRange"。

### ProFormDatePicker 是什么组件？

ProFormDatePicker 是一个基于 Ant Design 的 DatePicker 组件进行封装的组件。它可以在表单中使用，并提供日期选择的功能。

### ProFormDatePicker 如何使用？

你可以按照以下步骤来使用 ProFormDatePicker 组件：

1. 在你的项目中引入 ProFormDatePicker 组件。
2. 在表单中使用 `<ProFormDatePicker>` 标签，并给定 name 和 label 属性。
3. 在 `<ProFormDatePicker>` 标签中设置其他相关属性和配置，以满足你的需求。

以下是一个例子：

```tsx | pure
<ProFormDatePicker name="date" label="日期" />
```

### ProFormDatePicker 有哪些属性和配置？

ProFormDatePicker 组件继承了 DatePicker 组件的所有属性和配置，你可以参考 [Ant Design DatePicker](https://ant.design/components/date-picker-cn/) 的文档来了解更多细节。

除了继承的属性和配置外，ProFormDatePicker 还可以接受一些额外的属性和配置，用于表单的验证和提交操作。你可以参考 ProFormDatePicker 的文档或源代码来获取更详细的信息。

ProFormDateTimePicker 是什么？

ProFormDateTimePicker 是一个组件，它与 Ant Design 的 DatePicker 相同。

ProFormDateTimePicker 如何使用？

可以通过以下方式使用 ProFormDateTimePicker 组件：

```tsx | pure
<ProFormDateTimePicker name="datetime" label="日期时间" />
```

ProFormDateTimePicker 有哪些属性？

ProFormDateTimePicker 组件有以下属性：

- name: 指定组件的名称
- label: 指定组件的标签

### 什么是 ProFormDateRangePicker 组件？

ProFormDateRangePicker 组件是一个基于 Ant Design 的 DatePicker.RangePicker 组件的封装组件。通过使用 ProFormDateRangePicker 组件，可以方便地在表单中添加日期范围选择的功能。

### 如何使用 ProFormDateRangePicker 组件？

在 React 组件中，使用如下代码可以渲染一个 ProFormDateRangePicker 组件：

```tsx | pure
<ProFormDateRangePicker name="dateRange" label="日期" />
```

在 ProFormDateRangePicker 组件中，name 属性用于指定数据的字段名，label 属性用于显示在表单中的标签。

### ProFormDateRangePicker 与 DatePicker.RangePicker 有何区别？

ProFormDateRangePicker 组件和 DatePicker.RangePicker 组件是相似的，但 ProFormDateRangePicker 组件是基于 Ant Design 的 ProForm 表单进行封装的，而 DatePicker.RangePicker 组件是原生的 Ant Design 组件。通过使用 ProFormDateRangePicker 组件，可以更方便地在 ProForm 表单中添加日期范围选择的功能。

### ProFormDateTimeRangePicker 是什么？

ProFormDateTimeRangePicker 是一个 React 组件，它是基于 Ant Design 的 DatePicker.RangePicker 组件封装而成的。它用于选择一个日期时间范围。

### 如何使用 ProFormDateTimeRangePicker？

你可以按照以下步骤使用 ProFormDateTimeRangePicker：

1. 在你的代码中引入 ProFormDateTimeRangePicker 组件。
2. 在 ProFormDateTimeRangePicker 组件上设置 name 属性，用于表单提交。
3. 可选地设置 label 属性，用于显示一个标签在表单中。

以下是一个使用 ProFormDateTimeRangePicker 的示例代码：

```tsx
<ProFormDateTimeRangePicker name="datetimeRange" label="日期时间" />
```

### ProFormDateTimeRangePicker 与 DatePicker.RangePicker 的区别是什么？

ProFormDateTimeRangePicker 是基于 Ant Design 的 DatePicker.RangePicker 组件进行封装的，它们具有相同的功能和用法。唯一的区别在于 ProFormDateTimeRangePicker 是适用于表单提交的。

你可以参考 [DatePicker.RangePicker](https://ant.design/components/date-picker-cn/#RangePicker) 的文档了解更多关于 DatePicker.RangePicker 组件的详细信息。

### 什么是 ProFormTimePicker？

ProFormTimePicker 是一个用于选择时间的表单组件。它类似于 Ant Design 的 [DatePicker](https://ant.design/components/time-picker-cn/) 组件。

### 如何使用 ProFormTimePicker？

使用以下代码可以在表单中添加 ProFormTimePicker 组件：

```tsx | pure
<ProFormTimePicker name="time" label="时间" />
<ProFormTimePicker.RangePicker name="timeRange" label="时间区间" />
```

### ProFormTimePicker 和 DatePicker 有什么区别？

ProFormTimePicker 和 DatePicker 都是 Ant Design 提供的时间选择组件，用于在表单中选择时间。它们的功能和用法基本相同，但是 ProFormTimePicker 可以更好地与 ProForm 表单组件配合使用，而 DatePicker 则是普通的 Ant Design 组件。

### ProFormSelect 组件如何工作？

ProFormSelect 组件是在 Ant Design 的 select 组件的基础上进行了扩展。它支持通过 request 和 valueEnum 两种方式来生成选项。

- 当使用 valueEnum 来定义选项时，可以将当前列值与相应的枚举值进行关联。valueEnum 是一个记录类型（Record），用于定义列值的枚举。例如，可以将 "open" 关联到 "未解决"，将 "closed" 关联到 "已解决"。

- 当使用 request 来获取选项时，ProFormSelect 会从网络请求数据作为选项。request 是一个函数，可以返回一个 Promise，该 Promise 解析后返回一个包含 label 和 value 的对象数组。例如，可以通过异步请求获取如下的选项数组：{ label: '全部', value: 'all' }, { label: '未解决', value: 'open' }, { label: '已解决', value: 'closed' }, { label: '解决中', value: 'processing' }。

除此之外，还可以使用 debounceTime 和 params 参数来进一步控制请求行为。

- debounceTime 参数用于设置防抖动时间，与 request 参数配合使用。通过设置 debounceTime，可以限制请求的频率，避免过度请求。

- params 参数用于设置发起请求时的参数，与 request 参数配合使用。通过设置 params，可以将额外的信息传递给请求函数。

最后，ProFormSelect 还支持 fieldProps 参数来设置 antd 组件的 props。可以根据需求对下拉选项进行自定义设定。

### 如何实现联动的 ProFormSelect？

要实现联动的 ProFormSelect，可以使用 ProFormSelect 的 dependencies 参数。这个参数用于定义联动依赖关系，当指定的字段的值发生变化时，请求函数会被调用，并相应地更新选项。例如，当 name 字段的值发生变化时，联动的选择器会使用新的 name 值进行请求，并更新选项。

在请求函数中，可以根据传入的参数来动态生成选项。在这个例子中，根据 name 字段的值进行请求，并返回一个包含 label 和 value 的对象数组。

### 如何自定义 ProFormSelect 的选项？

要自定义 ProFormSelect 的选项，可以使用 options 参数。options 是一个包含 label 和 value 的对象数组，用于指定下拉选项的内容。在这个例子中，可以将自定义的选项数组作为 options 参数的值。

此外，还可以使用 fieldProps 参数来设置 antd 组件的 props。通过设置 optionItemRender 方法，可以自定义每个选项的渲染方式。在这个例子中，可以使用 optionItemRender 方法来动态生成每个选项的文本内容。

需要注意的是，当自定义选项时，可以根据需要设置 placeholder 和 rules 参数，以及其他必要的验证规则。

希望以上对 ProFormSelect 组件的说明能帮助到你！如果有任何疑问，请随时提问。

### ProFormTreeSelect 支持哪些参数？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueEnum | 当前列值的枚举 [valueEnum](/components/table#valueenum) | `Record` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| debounceTime | 防抖动时间，与 request 配合使用 | `number` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `TreeSelectProps` | - |

### ProFormTreeSelect 的 request 参数是用来做什么的？

ProFormTreeSelect 的 request 参数是用来从网络请求枚举数据的。通过提供一个返回 Promise 的函数，可以实现异步获取数据的功能。

### ProFormTreeSelect 的 valueEnum 参数有什么作用？

ProFormTreeSelect 的 valueEnum 参数用于指定当前列值的枚举类型，可以与 table、descriptions 等组件共用，在工程化上具有优势。它是一个 Record 类型的参数。

### ProFormCheckbox 是什么？

ProFormCheckbox 是一个可以生成 checkbox 组件的 ProForm 组件。它类似于 antd 的 checkbox 组件，但是增加了一些额外的功能，例如支持 options 和 layout，以及从网络请求枚举数据。

### ProFormCheckbox 的使用方法是什么？

你可以通过以下步骤来使用 ProFormCheckbox 组件：

1. 引入 ProFormCheckbox 组件。
2. 在 ProForm 表单中使用 ProFormCheckbox 组件，并设置相关的属性，如 name、layout、options、request、params 和 fieldProps。
3. 可选的，你可以通过设置 options 属性来手动配置 checkbox 的选项。
4. 将 ProFormCheckbox 组件放置在你的表单中，并根据需要进行样式和布局的调整。

下面是一个使用 ProFormCheckbox 组件的示例代码：

```tsx | pure
<ProFormCheckbox.Group
  name="checkbox"
  layout="vertical"
  label="行业分布"
  options={['农业', '制造业', '互联网']}
/>
```

### ProFormCheckbox 的参数说明是什么？

ProFormCheckbox 组件具有以下参数：

- options：一个数组或对象，用于生成 checkbox 的选项。推荐使用对象格式，每个选项包含 label 和 value 属性。
- layout：配置 checkbox 的样式，可以是水平布局（horizontal）或垂直布局（vertical）。
- request：一个函数，用于从网络请求枚举数据。该函数应返回一个 Promise，Promise 解析后的数据应为包含 label 和 value 属性的对象。
- params：发起网络请求的参数，与 request 配合使用。params 应为一个对象。
- fieldProps：antd checkbox 组件的 props。可以使用此参数来设置 checkbox 的其他属性和事件。

请注意，除了 options 参数外，其他参数都是可选的。

以上是关于 ProFormCheckbox 组件的简要说明和使用方法，请根据你的具体需求设置相关的属性来使用该组件。如果需要更详细的说明，可以参考 [这里](https://procomponents.ant.design/components/schema#request-%E5%92%8C-params) 的文档。

### ProFormRadio.Group 是什么？

ProFormRadio.Group 是一个前端组件，它是基于 Ant Design 的 radio 组件进行扩展的。与普通的 radio 组件不同的是，ProFormRadio.Group 支持了 options 参数，可以根据 options 自动生成子节点。此外，ProFormRadio.Group 还支持通过请求远程数据来获取枚举数据。

### ProFormRadio.Group 的参数有哪些？

ProFormRadio.Group 的常用参数如下：

- options：一个数组或对象，根据这些值生成子节点。
- request：一个方法，用于从网络请求枚举数据。
- radioType：设置按钮模式还是 radio 模式。
- params：发起网络请求时的参数。
- fieldProps：antd 组件的其他参数。

### 如何使用 ProFormRadio.Group 组件？

你可以按照下面的示例代码使用 ProFormRadio.Group 组件：

```tsx
<ProFormRadio.Group
  name="radio-group"
  label="Radio.Group"
  options={[
    {
      label: 'item 1',
      value: 'a',
    },
    {
      label: 'item 2',
      value: 'b',
    },
    {
      label: 'item 3',
      value: 'c',
    },
  ]}
/>
```

在这个示例中，我们设置了 name 属性为 "radio-group"，label 属性为 "Radio.Group"，并通过 options 参数传入了三个选项。

### 如何请求远程数据并使用 ProFormRadio.Group 组件？

如果你需要从网络请求枚举数据并使用 ProFormRadio.Group 组件，可以使用 request 和 params 参数。你可以定义一个返回 Promise 的方法，并在 request 参数中传入该方法。同时，你可以通过 params 参数传入请求的参数。

具体示例可以参考[这里](https://procomponents.ant.design/components/schema#request-%E5%92%8C-params)。

### ProFormCascader 的 options 参数是用来生成子节点的吗？

是的，ProFormCascader 组件的 options 参数用于生成 cascader 的子节点。你可以传入一个字符串数组或者一个包含 label 和 value 属性的对象数组作为 options 的值。

### ProFormCascader 是否支持从网络请求枚举数据？

是的，ProFormCascader 组件支持通过 request 属性从网络请求枚举数据。你可以传入一个返回 Promise 的函数，该函数在请求完成后会返回一个包含 label 和 value 属性的对象。

### ProFormCascader 的 fieldProps 参数是用来配置 antd 组件的 props 的吗？

是的，ProFormCascader 组件的 fieldProps 参数用于配置 Ant Design 组件的 props。你可以将所有 Ant Design Cascader 组件支持的 props 传递给 fieldProps。

### ProFormSwitch 组件如何使用？

ProFormSwitch 是一个与 Ant Design 的 [switch](https://ant.design/components/switch-cn/) 组件相似的组件，你可以通过 fieldProps 属性来配置 switch 的数据。

参数列表如下：

- `fieldProps`：antd 组件的 props，类型为 `SwitchProps`，默认值为 `-`。

以下是一个示例，展示了如何使用 ProFormSwitch 组件：

```tsx | pure
<ProFormSwitch name="switch" label="Switch" />
```

### ProFormSwitch 组件的属性说明

ProFormSwitch 组件的属性列表如下：

- `fieldProps`：antd 组件的 props，类型为 `SwitchProps`，默认值为 `-`。

请注意，以上属性将用于配置 Ant Design 中的 switch 组件。

### ProFormSwitch 组件的示例代码

以下是一个示例代码，展示了如何使用 ProFormSwitch 组件：

```tsx | pure
<ProFormSwitch name="switch" label="Switch" />
```

请根据需要进行相应的配置和修改。

### ProFormRate 组件的参数有哪些？

| 参数       | 说明              | 类型      | 默认值 |
| ---------- | ----------------- | --------- | ------ |
| fieldProps | antd 组件的 props | RateProps | -      |

### ProFormRate 组件是如何配置 rate 的数据的？

ProFormRate 组件通过 `fieldProps` 参数配置 rate 的数据。

### ProFormRate 组件的示例代码是什么？

```tsx | pure
<ProFormRate name="rate" label="Rate" />
```

### ProFormSlider 组件是什么?

ProFormSlider 组件是一个基于 antd 的 slider 组件进行封装的组件，通过 fieldProps 配置 slider 的数据。

### ProFormSlider 组件有哪些参数？

ProFormSlider 组件有以下参数：

- name（类型：字符串）：表示字段名。

- label（类型：字符串）：表示标签名。

- marks（类型：对象）：表示滑块上的标记，默认值为一个空对象。

### ProFormSlider 组件的默认值是什么？

ProFormSlider 组件的默认值为 `-`。

### 如何使用 ProFormSlider 组件？

```tsx
<ProFormSlider
  name="slider"
  label="Slider"
  marks={{
    0: 'A',
    20: 'B',
    40: 'C',
    60: 'D',
    80: 'E',
    100: 'F',
  }}
/>
```

以上是一个使用 ProFormSlider 组件的示例代码，通过配置 name、label 和 marks 参数，可以显示一个带有标记的滑块组件。

### 什么是 ProFormUploadDragger 组件？

ProFormUploadDragger 是一个预设了 Dragger 样式的上传组件，它与 [upload](https://ant.design/components/upload-cn/) 组件相同。可以通过设置参数来自定义组件的图标、标题和描述。

### ProFormUploadDragger 组件的参数有哪些？

ProFormUploadDragger 组件支持以下参数：

- icon：Dragger 的图标，类型为 ReactNode，默认值为 InboxOutlined。
- title：Dragger 的标题，类型为 ReactNode，默认值为 '单击或拖动文件到此区域进行上传'。
- description：Dragger 的描述，类型为 ReactNode，默认值为 '支持单次或批量上传'。

### 如何使用 ProFormUploadDragger 组件？

可以在代码中使用 ProFormUploadDragger 组件，并设置相关参数。以下是一个示例：

```tsx
import { ProFormUploadDragger } from 'antd';

// ...

<ProFormUploadDragger label="Dragger" name="dragger" action="upload.do" />;
```

在以上示例中，我们使用了 ProFormUploadDragger 组件，并通过 label 属性设置了标签显示的文本，通过 name 属性设置了表单字段的名称，action 属性设置了上传文件的后端接口。你可以根据自己的需求进行自定义配置。

### ProFormUploadButton 组件有哪些参数？

ProFormUploadButton 组件有以下参数：

- icon：Button 的图标，类型为 `ReactNode`，默认值为 UploadOutlined。
- title：Button 的标题，类型为 `ReactNode`，默认值为 单击上传。
- max：最大上传数量，超过最大数量就会隐藏上传按钮，类型为 `number`，无默认值。

### ProFormUploadButton 组件是什么？

ProFormUploadButton 组件是一个预设了 Button 样式的组件，与 [upload](https://ant.design/components/upload-cn/) 组件相同，其他属性与 Upload 组件相同。

### 如何使用 ProFormUploadButton 组件？

可以使用以下方式来使用 ProFormUploadButton 组件：

```tsx | pure
<ProFormUploadButton label="upload" name="upload" action="upload.do" />
```

以上代码中，`label` 表示标签名称，`name` 表示组件名字，`action` 表示上传的地址。

注意：需要导入 ProFormUploadButton 组件并确保相关依赖已经安装。

### ProFormMoney 的使用示例

ProFormMoney 是一个用于输入金额的输入框组件，具有以下特点和功能：

1. 支持根据全局国际化显示货币符号；
2. 支持输入负数；
3. 支持自定义货币符号。

示例代码如下：

```tsx
import React from 'react';
import ProFormMoney from 'xxx';

// 示例1：限制金额最小为0
<ProFormMoney
  label="限制金额最小为0"
  name="amount1"
  locale="en-US"
  initialValue={22.22}
  min={0}
/>

// 示例2：不限制金额大小
<ProFormMoney
  label="不限制金额大小"
  name="amount2"
  locale="en-GB"
  initialValue={22.22}
/>

// 示例3：货币符号跟随全局国际化
<ProFormMoney
  label="货币符号跟随全局国际化"
  name="amount3"
  initialValue={22.22}
/>

// 示例4：自定义货币符号
<ProFormMoney
  label="自定义货币符号"
  name="amount4"
  initialValue={22.22}
  customSymbol="💰"
/>
```

### ProFormMoney 的参数说明

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | 单独设置的国际化地区值，根据不同的地区显示不同的货币符号，支持地区详见下面的地区目录 | string | `zh-Hans-CN` |
| customSymbol | 自定义金额符号 | string | - |
| numberPopoverRender | 自定义 Popover 的值，false 可以关闭它 | ((props: InputNumberProps, defaultText: string) => React.ReactNode) \| boolean | false |
| numberFormatOptions | NumberFormat 的配置，文档可以查看 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) | NumberFormatOptions | - |
| min | 最小值 | number | - |
| max | 最大值 | number | - |

以上是 ProFormMoney 组件的使用示例和参数说明，根据需要选择和配置相应的参数来实现所需的功能。如果您有任何疑问，请参考示例代码和参数说明，或者查阅相关文档获取更多信息。

### 1

### 地区编码 "zh-CN" 对应的货币符号是什么？

地区编码 "zh-CN" 对应的货币符号是 "¥"。

### 2

### 地区编码 "es-ES" 对应的货币符号是什么？

地区编码 "es-ES" 对应的货币符号是 "€"。

### 3

### 地区编码 "ko-KR" 对应的货币符号是什么？

地区编码 "ko-KR" 对应的货币符号是 "₩"。

### ProFormSegmented 组件的作用是什么？

ProFormSegmented 组件是 antd 的一个表单组件，用于显示一个分段选择器。它可以通过传入 valueEnum 属性或者 request 属性来生成选项。

### ProFormSegmented 组件支持的参数有哪些？

ProFormSegmented 组件支持以下参数：

- valueEnum：当前列值的枚举，类型为 Record。
- request：从网络请求枚举数据的函数，类型为 () => Promise<{label,value}>。
- debounceTime：防抖动时间，与 request 配合使用，类型为 number。
- params：发起网络请求的参数，与 request 配合使用，类型为 Record。
- fieldProps：antd 组件的 props，类型为 Segmented。

### ProFormSegmented 组件的使用示例是什么？

下面是一个使用 ProFormSegmented 组件的示例：

```tsx
<>
  <ProFormSegmented
    name="segmented"
    label="segmented"
    valueEnum={{
      open: '未解决',
      closed: '已解决',
    }}
    rules={[{ required: true, message: 'Please select your country!' }]}
  />

  <ProFormSegmented
    name="segmented"
    label="segmented"
    request={async () => [
      { label: '全部', value: 'all' },
      { label: '未解决', value: 'open' },
      { label: '已解决', value: 'closed' },
      { label: '解决中', value: 'processing' },
    ]}
    rules={[{ required: true, message: 'Please select your country!' }]}
  />
</>
```

第一个 ProFormSegmented 组件使用了 valueEnum 属性生成选项，第二个 ProFormSegmented 组件使用了 request 属性从网络请求枚举数据。

### ProFormSegmented 组件如何与其他组件工程化上有优势？

ProFormSegmented 组件的 valueEnum 属性可以与 table 和 descriptions 共用，从而在工程化上带来一些优势。
