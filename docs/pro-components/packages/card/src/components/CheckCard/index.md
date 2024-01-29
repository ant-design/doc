### 基本使用

最常用的选项卡示例，包括头像，标题，描述等部分，可被选择。

[代码示例](./demos/basic.tsx)

### 多选选项卡

在多个选项存在的情况下可通过 `CheckCard.Group` 分组，默认选项卡组件为单选模式。

![多选选项卡](https://gw.alipayobjects.com/zos/bmw-prod/be0fcade-afae-4e85-95ef-a3cc90f6d4b3/kc60kq47_w1362_h412.jpeg)

[代码示例](./demos/single.tsx)

### 多选模式

通过设置 `CheckCard.Group` 的 `multiple` 属性配置多选，注意多选模式下表单项返回值为数组。

![多选模式](https://gw.alipayobjects.com/zos/bmw-prod/06963ad4-ba2b-4733-a1c5-778e7f696ac1/kc61xhvk_w1364_h280.jpeg)

[代码示例](./demos/multiple.tsx)

### CheckCard 如何和表单组件一起使用？

CheckCard 可以和表单组件一起使用，以下是一个演示示例。

示例代码如下：

```tsx
import React from "react";
import { Form, Checkbox } from "antd";

const Demo = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form form={form} name="dynamic_form_item" onFinish={onFinish}>
      <Form.List name="checkCards">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...field}
                key={field.key}
                style={{ marginBottom: "8px" }}
              >
                <Checkbox.Group>
                  <Checkbox value="check">Check</Checkbox>
                  <Checkbox value="card">Card</Checkbox>
                </Checkbox.Group>
              </Form.Item>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                添加 CheckCard
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
```

在以上示例中，我们使用了 `Form`、`Checkbox` 和 `Button` 组件，通过 `Form.List` 和 `Form.Item` 实现了多选卡片的功能。在表单提交时，可以通过回调函数 `onFinish` 获取表单的值。在 `Form.List` 中可以动态地添加和移除多个卡片项。

### CheckCard 在表单中的使用有哪些注意事项？

在使用 CheckCard 组件时，请注意以下几点：

1. 需要将 CheckCard 与表单组件配合使用，以便实现表单的提交和数据管理。
2. 使用 `Form.List` 组件可以处理动态的多个卡片项，并提供了添加和移除的功能。
3. 在表单提交时，可以通过回调函数 `onFinish` 获取表单的值，进行后续处理。
4. 可以根据具体需求，自定义 CheckCard 的样式和布局。

以上是在表单中使用 CheckCard 的注意事项，希望对你有帮助！如果还有其他问题，请随时提问。

### CheckCard 组件的参数说明有哪些？

CheckCard 组件的参数说明如下：

| 参数           | 说明                                                               | 类型                | 默认值    | 版本   |
| -------------- | ------------------------------------------------------------------ | ------------------- | --------- | ------ |
| checked        | 指定当前是否选中                                                   | boolean             | false     |        |
| bordered       | 是否显示边框                                                       | boolean             | true      | 1.20.0 |
| value          | 选项值                                                             | string              | -         |        |
| defaultChecked | 初始是否选中                                                       | boolean             | false     |        |
| disabled       | 失效状态                                                           | boolean             | false     |        |
| size           | 选择框大小，可选 `large` `small`                                   | string              | `default` |        |
| onChange       | 变化时回调函数                                                     | Function(checked)   | -         |        |
| loading        | 当卡片内容还在加载中时，可以用 loading 展示一个占位                | boolean             | false     |        |
| title          | 标题                                                               | string \| ReactNode | -         |        |
| description    | 描述                                                               | ReactNode           | -         |        |
| avatar         | 选项元素的图片地址                                                 | link \| ReactNode   | -         |        |
| extra          | 动作区域，即卡片右上角的操作区域                                   | ReactNode           | -         |        |
| cover          | 卡片背景图片，注意使用该选项后`title`，`description`和`avatar`失效 | ReactNode           | -         |        |

### CheckCard 组件的默认值是什么？

CheckCard 组件的默认值如下：

- checked: false
- bordered: true
- defaultChecked: false
- disabled: false
- size: 'default'
- loading: false
- title: -
- description: -
- avatar: -
- extr-
- cover: -

### CheckCard 组件的版本变化有哪些？

CheckCard 组件的版本变化如下：

- 1.20.0：增加了 bordered 参数的支持。

### CheckCard.Group 的多选功能是什么意思？

- 说明：多选是指可以同时选择多个选项。
- 类型：boolean
- 默认值：false
- 版本：无

### CheckCard.Group 是否可以显示边框？

- 说明：bordered 是指确定是否在卡片组周围显示边框。
- 类型：boolean
- 默认值：true
- 版本：1.20.0

### CheckCard.Group 的 loading 属性有什么作用？

- 说明：loading 属性用于在卡片组内容还在加载中时，展示一个占位。
- 类型：boolean
- 默认值：false
- 版本：无
