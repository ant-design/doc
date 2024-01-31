### ProFormList 与 Form.List 有什么区别？

ProFormList 与 [Form.List](https://ant.design/components/form-cn/#Form.List) API 基本相同，但是 ProFormList 增加了自带的操作按钮：删除和复制，并且还自带了一个`新建一行`按钮，方便用户进行行操作。

### ProFormList 的使用示例是什么？

以下是一个 ProFormList 的使用示例：

```tsx | pure
<ProFormList
  name="users"
  initialValue={[
    {
      useMode: 'chapter',
    },
  ]}
  creatorButtonProps={{
    position: 'top',
    creatorButtonText: '再建一行',
  }}
  creatorRecord={{
    useMode: 'none',
  }}
>
  <ProFormSelect
    key="useMode"
    options={[
      {
        value: 'chapter',
        label: '盖章后生效',
      },
      {
        value: 'none',
        label: '不生效',
      },
    ]}
    width="md"
    name="useMode"
    label="合同约定生效方式"
  />
</ProFormList>
```

在该示例中，ProFormList 使用了 `name` 属性来指定字段名，`initialValue` 属性来设置初始值，`creatorButtonProps` 属性来设置新建一行按钮的显示位置和文本，`creatorRecord` 属性来设置新建行的初始值。在 ProFormList 内部，可以嵌套其他表单组件，如上述示例中的 ProFormSelect。

### ProFormList 的操作按钮有哪些？

ProFormList 自带了两个操作按钮：删除按钮和复制按钮。用户可以通过点击删除按钮来删除当前行，点击复制按钮来复制当前行的内容并新增一行。这样的操作按钮帮助用户方便地进行行操作。

### ProFormList API - itemRender 参数

**参数说明：** 自定义 Item，可以用来将 action 放到别的地方

**类型：** `(doms,listMeta)=> ReactNode`

**默认值：** -

### ProFormList API - creatorRecord 参数

**参数说明：** 新建一行的默认值

**类型：** `Record<string, any> \| () => Record<string, any>`

**默认值：** -

### ProFormList API - creatorButtonProps 参数

**参数说明：** 新建一行按钮的配置

**类型：** `buttonProps & { creatorButtonText:string,position:"top"\|"bottom" }`

**默认值：** `{creatorButtonText:"新建一行"}`

### ProFormList API - label 参数

**参数说明：** 与 From.Item 相同

**类型：** `ReactNode`

**默认值：** -

### ProFormList API - name 参数

**参数说明：** list 在 form 中的值，必填项

**类型：** `NamePath`

**默认值：** -

### ProFormList API - alwaysShowItemLabel 参数

**参数说明：** Item 中总是展示 label

**类型：** `boolean`

**默认值：** -

### ProFormList API - actionRef 参数

**参数说明：** 当前 List 的自带操作，可以增删改查列表项

**类型：** `{add,remove,move,get}`

**默认值：** -

### ProFormList API - actionGuard 参数

**参数说明：** FormItem 的拦截器，包含删除和添加的拦截，可以用 actionRef 拿到当前行的值

**类型：** `{beforeAddRow:(index)=>boolean,beforeRemoveRow:(index)=>boolean}`

**默认值：** -

### ProFormList API - min 参数

**参数说明：** 最少条目，删除时如果当前数据条目少于该数则无法删除

**类型：** `number`

**默认值：** -

### ProFormList API - max 参数

**参数说明：** 最多条目，新增或复制时如果当前数据条目多于该数则无法新增或复制

**类型：** `number`

**默认值：** -

### ProFormList API - copyIconProps 参数

**参数说明：** 复制按钮的配置，false 可以取消

**类型：** `{ Icon?: React.FC<any>; tooltipText?: string; } \| false`

**默认值：** -

### ProFormList API - deleteIconProps 参数

**参数说明：** 删除按钮的配置，false 可以取消

**类型：** `{ Icon?: React.FC<any>; tooltipText?: string; } \| false`

**默认值：** -

### ProFormList API - actionRender 参数

**参数说明：** 自定义操作按钮

**类型：** `(field,action,defaultActionDom,count)=>React.ReactNode[]`

**默认值：** -

### ProFormList API - onAfterAdd 参数

**参数说明：** 新增数据后的钩子

**类型：** `(defaultValue: StoreValue, insertIndex: number, count: number) => void`

**默认值：** -

### ProFormList API - onAfterRemove 参数

**参数说明：** 删除数据后的钩子

**类型：** `(index: number, count: number) => void`

**默认值：** -

### 如何使用 actionRef 操作项目实例？

答案 1：你可以使用 `actionRef` 来操作项目实例。在给表单列表组件（`<ProFormList>`）传递 `actionRef` 属性后，你可以通过访问 `actionRef.current` 来获取操作实例。下面是几个常用的操作示例：

- 增加一行：使用 `actionRef.current.add` 方法，传递一个对象和索引值作为参数，例如 `actionRef?.current.add?.({}, 1)`。

- 删除一行：使用 `actionRef.current.remove` 方法，传递要删除的行的索引值作为参数，例如 `actionRef?.current.remove?.(1)`。

- 移动行：使用 `actionRef.current.move` 方法，传递要移动的行的索引值和目标索引值作为参数，例如 `actionRef?.current.move?.(1, 2)`。

- 获取一行数据：使用 `actionRef.current.get` 方法，传递要获取的行的索引值作为参数，例如 `actionRef?.current.get?.(1)`。

- 获取所有数据：使用 `actionRef.current.getList` 方法，例如 `actionRef?.current.getList?.()`。

### 如何在表单列表中使用 actionRef 进行操作？

答案 2：要在表单列表组件中使用 `actionRef` 进行操作，你需要将 `actionRef` 属性传递给 `<ProFormList>` 组件。下面是一个示例：

```tsx | pure
<ProFormList actionRef={actionRef}>
  <ProFormText key="useMode" name="name" label="姓名" />
</ProFormList>
```

请确保在 `<ProFormList>` 组件外部创建和定义 `actionRef`。然后，你可以在相关按钮的 `onClick` 事件中调用 `actionRef.current` 来执行具体的操作。

### 如何使用 actionRef 进行操作的权限控制？

答案 3：如果你想要在使用 `actionRef` 进行具体操作之前进行权限控制，你可以使用 `actionGuard` 属性来指定权限控制的函数。该函数会在每次操作前被调用，并接收操作名称和相关参数作为参数。你可以在函数内部进行权限判断和限制。例如：

```tsx | pure
const actionGuard = (action: string, params: any) => {
  // 在这里根据具体的权限逻辑来控制操作的可执行性
  if (action === 'add' && params.name === 'admin') {
    return false; // 不能进行添加名为 "admin" 的行操作
  }
  return true; // 默认返回可执行
};

<ProFormList actionRef={actionRef} actionGuard={actionGuard}>
  {/* 表单字段等 */}
</ProFormList>;
```

通过指定 `actionGuard` 属性并传递权限控制函数，你可以在每次操作之前进行权限判断，从而控制操作的可执行性。

### actionGuard 拦截器

### 什么是 actionGuard 拦截器？

actionGuard 拦截器是用于拦截 list 操作的机制。它包含两个事件：`beforeAddRow` 和 `beforeRemoveRow`。通过使用这些拦截器，我们可以在执行添加或删除行的操作之前进行一些自定义逻辑处理。

### 如何使用 actionGuard 拦截器？

在上述代码中，我们可以看到如何使用 actionGuard 拦截器。首先，我们需要通过 `useRef` 创建一个 `actionRef` 引用对象，它用于操作 ProFormList 的方法。然后，我们定义了一个名为 `actionGuard` 的对象，其中包含了两个拦截器事件的处理逻辑。在 `beforeAddRow` 事件中，我们使用了异步的方式来处理逻辑，并最终返回一个 Promise 对象。在 `beforeRemoveRow` 事件中，我们同样需要使用异步的方式，并根据具体的条件来确定是否执行删除操作。最后，我们将 `actionGuard` 对象和 `actionRef` 引用对象传递给 ProFormList 组件，以实现拦截器的功能。

### 为什么要使用 actionGuard 拦截器？

使用 actionGuard 拦截器可以让我们在执行 list 操作之前进行一些自定义逻辑处理。例如，在添加行之前，我们可以验证表单数据的合法性或执行其他业务逻辑。在删除行之前，我们可以根据特定的条件确定是否允许删除行。通过使用拦截器，我们可以更加灵活地控制表单列表的操作，并提供更好的用户体验。

以上就是关于 actionGuard 拦截器的介绍和使用方法。希望对你有所帮助！如果你还有其他问题，请随时提问。

### 什么是 `actionRender` 自定义操作按钮？

`actionRender` 是一个用于自定义操作按钮的属性。它可以让我们在表单列表中添加自定义的操作按钮，比如删除、移动等。通过 `actionRender`，我们可以控制操作按钮的显示和行为。

### 如何使用 `actionRender` 自定义操作按钮？

使用 `actionRender` 自定义操作按钮很简单。我们只需要在定义表单列表时，给 `actionRender` 属性传入一个函数即可。这个函数接受四个参数：`field`、`action`、`defaultActionDom` 和 `count`。其中，`field` 表示当前字段的数据，`action` 是一个描述操作能力的对象，`defaultActionDom` 是默认的操作按钮列表，`count` 表示当前共有几个列表项。

我们可以根据这些参数来决定自定义操作按钮的显示和行为。比如，我们可以根据条件判断来添加或删除按钮，也可以根据具体的需求来定义按钮的点击事件。

### `actionRender` 自定义操作按钮的示例

下面是一个使用 `actionRender` 自定义操作按钮的示例：

```tsx | pure
actionRender: (field, action, defaultActionDom, count) => {
  const customActionDom = [];

  // 添加自定义按钮
  customActionDom.push(<a onClick={() => action.add({ id: 'xx' })}>新增</a>);

  // 如果超过三行，则禁用删除按钮
  if (count > 3) {
    customActionDom.push(<a disabled>删除</a>);
  } else {
    // 否则添加删除按钮
    customActionDom.push(<a onClick={() => action.remove(field.name)}>删除</a>);
  }

  // 返回自定义操作按钮列表
  return [...defaultActionDom, ...customActionDom];
};
```

在上面的例子中，我们首先定义了一个空数组 `customActionDom`，用于存放自定义的操作按钮。

然后，我们根据具体需求来添加自定义按钮。比如，我们通过 `action.add()` 方法来新增一行，通过 `action.remove()` 方法来删除一行。同时，我们还根据条件判断来切换按钮的显示和行为。

最后，我们将自定义按钮列表和默认按钮列表进行合并，并返回最终的操作按钮列表。

通过以上示例，我们可以实现对表单列表的操作按钮进行自定义，根据具体需求来定义按钮的显示和行为。

### 什么是 ProFormList 的 RenderProps 模式？

ProFormList 是一个 React 组件，它支持使用 RenderProps 模式来获取当前行的信息和快捷操作。这种模式对于处理复杂的联动逻辑非常方便。

### ProFormList 的 RenderProps 模式如何使用？

使用 RenderProps 模式时，在 ProFormList 组件中传入一个方法作为参数。该方法接收四个参数：

1. `meta`：表示当前行的基本信息，包括 `name` 和 `key` 两个属性。
2. `index`：表示当前行的行号。
3. `action`：表示用于操作行的一些快捷方法。
4. `count`：表示总行数。

在这个方法中，可以根据需要来定义当前行的内容和操作。例如，在该方法中可以使用 ProFormText 组件来展示当前行的表单字段。

### ProFormList 的 RenderProps 模式参数说明

在 ProFormList 的 RenderProps 模式中，传入的方法可以接收四个参数，它们的类型定义如下：

```tsx | pure
type RenderActionParams = {
  /**
   * @name 当前行的meta信息
   * @example {name: number; key: number}
   */
  metFormListFieldData;
  /**
   * @name 当前行的行号
   */
  index: number;
  /**
   * @name 用于操作行的一些快捷方法
   * @example 给第二行增加数据 action.add?.({},1);
   * @example 删除第二行 action.remove?.(1);
   * @example 从 1 移到 action.move?.(2,1);
   * @example 获取当前行的数据: action.getCurrentRowData() -> {id:"xxx",name:'123',age:18}
   * @example 设置当前行的数据: {id:"123",name:'123'} -> action.setCurrentRowData({name:'xxx'}) -> {id:"123",name:'xxx'}
   * @example 清空当前行的数据：{id:"123",name:'123'} -> action.setCurrentRowData({name:undefined}) -> {id:"123"}
   */
  action: FormListOperation & {
    /**
     * @name 获取当前行的数据
     * @example getCurrentRowData -> {id:"xxx",name:'123',age:18}
     */
    getCurrentRowDat() => any;
    /**
     * @name 设置当前行的数据
     * @example {id:"123",name:'123'} -> setCurrentRowData({name:'xxx'}) -> {id:"123",name:'123'}
     * @example {id:"123",name:'123'} -> setCurrentRowData({name:undefined}) -> {id:"123"}
     */
    setCurrentRowDat(datany) => void;
  };
  /**
   * @name 总行数
   */
  count: number;
};
```

以上是对 ProFormList 的 RenderProps 模式参数的详细说明。通过了解这些参数，可以更好地理解和使用 ProFormList 的 RenderProps 模式。

### `ProFormFieldSet` 是用来做什么的？

`ProFormFieldSet` 可以将内部的多个 children 的值组合并且存储在 `ProForm` 中。

### `ProFormFieldSet`怎样进行数据转化？

在提交时，可以通过 `transform` 属性对值进行转化。

### `ProFormFieldSet` 可以用来组合哪些输入框？

`ProFormFieldSet` 可以方便地组合多个输入框，例如 `ProFormText`。

### ProFormDependency 的作用是什么？

ProFormDependency 是一个简化版本的 Form.Item。它内置了 noStyle 和 shouldUpdate 选项，可以自动处理 diff 并从表单中提取相应的值。我们可以通过配置 name 参数来确定我们依赖的数据。

### 如何配置 ProFormDependency 的 name 参数？

name 参数必须是一个数组。如果需要配置嵌套的结构，可以使用数组的嵌套形式，例如 `name={['name', ['name2', 'text']]}`。配置的 name 的值会在 renderProps 中传入。

### 在 ProFormDependency 中如何使用 name 的值？

在 ProFormDependency 中，我们可以通过 renderProps 获取 name 的值。使用示例代码中的例子，我们从 renderProps 中获取到 name 的值，并将该值应用于 ProFormSelect 的 label 属性中。
