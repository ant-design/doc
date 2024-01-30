## pro-components 的 Table 有哪些配置？

#### ProTable - ProTable

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| request | 获取 `dataSource` 的方法 | `(params?: {pageSize,current},sort,filter) => {data,success,total}` | - |
| params | 用于 `request` 查询的额外参数，一旦变化会触发重新加载 | `object` | - |
| postData | 对通过 `request` 获取的数据进行处理 | `(data: T[]) => T[]` | - |
| defaultData | 默认的数据 | `T[]` | - |
| dataSource | Table 的数据，ProTable 推荐使用 `request` 来加载 | `T[]` | - |
| onDataSourceChange | Table 的数据发生改变时触发 | `(dataSource: T[]) => void` | - |
| actionRef | Table action 的引用，便于自定义触发 | `MutableRefObject<ActionType>` | - |
| formRef | 可以获取到查询表单的 form 实例，用于一些灵活的配置 | `MutableRefObject<FormInstance>` | - |
| toolBarRender | 渲染工具栏，支持返回一个 dom 数组，会自动增加 margin-right | `(action) => ReactNode[]` | - |
| onLoad | 数据加载完成后触发，会多次触发 | `(dataSource: T[]) => void` | - |
| onLoadingChange | loading 被修改时触发，一般是网络请求导致的 | `(loading:boolean)=>void` | - |
| onRequestError | 数据加载失败时触发 | `(error) => void` | - |
| tableClassName | 封装的 table 的 className | `string` | - |
| tableStyle | 封装的 table 的 style | - |
| options | table 工具栏，设为 false 时不显示，传入 function 会点击时触发 | `{{ density?: boolean, fullScreen?: boolean \| function, reload?: boolean \| function, reloadIcon?: React.ReactNode, densityIcon?: React.ReactNode, setting?: boolean \|` [SettingOptionType](#菜单栏-options-配置) `}}` | `{ fullScreen: false, reload: true, density: true, setting: true }` |
| search | 是否显示搜索表单，传入对象时为搜索表单的配置 | `false` \| [SearchConfig](#search-搜索表单) | - |
| defaultSize | 默认的 size | SizeType | - |
| dateFormatter | 转化 moment 格式数据为特定类型，false 不做转化 | `"string"` \| `"number"` \| ((value: Moment, valueType: string) => string \| number) \| `false` | `"string"` |
| beforeSearchSubmit | 搜索之前进行一些修改 | `(params:T)=>T` | - |
| onSizeChange | table 尺寸发生改变 | `(size: 'default' \| 'middle' \| 'small') => void` | - |
| type | pro-table 类型 | `"form"` | - |
| form | antd form 的配置 | - |
| onSubmit | 提交表单时触发 | `(params: U) => void` | - |
| onReset | 重置表单时触发 | `() => void` | - |
| columnEmptyText | 空值时的显示，不设置时显示 `-`， false 可以关闭此功能 | `string` \| `false` | false |
| tableRender | 自定义渲染表格函数 | `(props,dom,domList:{ toolbar,alert,table}) => ReactNode` | - |
| toolbar | 透传 `ListToolBar` 配置项 | - |
| tableExtraRender | 自定义表格的主体函数 | `(props: ProTableProps<T, U>, dataSource: T[]) => ReactNode;` | - |
| manualRequest | 是否需要手动触发首次请求，配置为 `true` 时不可隐藏搜索表单 | `boolean` | false |
| editable | 可编辑表格的相关配置 | - |
| cardBordered | Table 和 Search 外围 Card 组件的边框 | `boolean \| {search?: boolean, table?: boolean}` | false |
| ghost | 幽灵模式，即是否取消表格区域的 padding | `boolean` | false |
| debounceTime | 防抖时间 | `number` | 10 |
| revalidateOnFocus | 窗口聚焦时自动重新请求 | `boolean` | `true` |
| columnsState | 受控的列状态，可以操作显示隐藏 | `ColumnStateType` | - |
| ErrorBoundary | 自带了错误处理功能，防止白屏，`ErrorBoundary=false` 关闭默认错误边界 | `ReactNode` | 内置 ErrorBoundary |

#### ProTable - RecordCreator

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| record | 需要新增的行数据，一般来说包含唯一 key | `T` | `{}` |
| position | 行增加在哪里，开始或者末尾 | `top` \| `bottom` | `bottom` |
| (...buttonProps) | antd 的 [ButtonProps](https://ant.design/components/button-cn/#API) | ButtonProps | — |

#### ProTable - ColumnStateType

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 列状态的默认值，只有初次生效，并用于重置使用 | `Record<string, ColumnsState>;` | - |
| value | 列状态的值，支持受控模式 | `Record<string, ColumnsState>;` | - |
| onChange | 列状态的值发生改变之后触发 | `(value:Record<string, ColumnsState>)=>void` | - |
| persistenceKey | 持久化列的 key，用于判断是否是同一个 table | `string \| number` | - |
| persistenceType | 持久化列的类型，localStorage 设置在关闭浏览器后也是存在的，sessionStorage 关闭浏览器后会丢失 | `localStorage \| sessionStorage` | - |

#### ProTable - Search 搜索表单

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| filterType | 过滤表单类型 | `'query'` \| `'light'` | `'query'` |
| searchText | 查询按钮的文本 | `string` | 查询 |
| resetText | 重置按钮的文本 | `string` | 重置 |
| submitText | 提交按钮的文本 | `string` | 提交 |
| labelWidth | 标签的宽度 | `'number'` \| `'auto'` | 80 |
| span | 配置查询表单的列数 | `'number'` \| [`'ColConfig'`](#ColConfig) | defaultColConfig |
| className | 封装的搜索 Form 的 className | `string` | - |
| collapseRender | 收起按钮的 render | `((collapsed: boolean,showCollapseButton?: boolean) => ReactNode)`\|`false` | - |
| defaultCollapsed | 默认是否收起 | `boolean` | `true` |
| collapsed | 是否收起 | `boolean` | - |
| onCollapse | 收起按钮的事件 | `(collapsed: boolean) => void;` | - |
| optionRender | 自定义操作栏 | `((searchConfig,formProps,dom) => ReactNode[])`\|`false` | - |
| showHiddenNum | 是否显示收起之后显示隐藏个数 | `boolean` | `false` |

#### ProTable - Columns 列定义

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 与 antd 中基本相同，但是支持通过传入一个方法 | `ReactNode \| ((config: ProColumnType<T>, type: ProTableTypes) => ReactNode)` | - |
| tooltip | 会在 title 之后展示一个 icon，hover 之后提示一些信息 | `string` | - |
| ellipsis | 是否自动缩略 | `boolean` \| `{showTitle?: boolean}` | - |
| copyable | 是否支持复制 | `boolean` | - |
| valueEnum | 值的枚举，会自动转化把值当成 key 来取出要显示的内容 | - |
| valueType | 值的类型，会生成不同的渲染器 | `text` |
| order | 查询表单中的权重，权重大排序靠前 | `number` | - |
| fieldProps | 查询表单的 props，会透传给表单项，如果渲染出来是 Input，就支持 Input 的所有 props，同理如果是 select，也支持 select 的所有 props。也支持方法传入 | `(form,config)=>Record \| Record` | - |
| `formItemProps` | 传递给 Form.Item 的配置，可以配置 rules，但是默认的查询表单 rules 是不生效的。需要配置 `ignoreRules` | `(form,config)=>formItemProps` \| `formItemProps` | - |
| renderText | 类似 table 的 render，但是必须返回 string，如果只是希望转化枚举，可以使用 [valueEnum](/components/schema#valueenum) | `(text: any,record: T,index: number,action: UseFetchDataAction<T>) => string` | - |
| render | 类似 table 的 render，第一个参数变成了 dom，增加了第四个参数 action | `(text: ReactNode,record: T,index: number,action: UseFetchDataAction<T>) => ReactNode \| ReactNode[]` | - |
| renderFormItem | 渲染查询表单的输入组件 | `(item,{ type, defaultRender, formItemProps, fieldProps, ...rest },form) => ReactNode` | - |
| search | 配置列的搜索相关，false 为隐藏 | `false` \| `{ transform: (value: any) => any }` | true |
| search.transform | 转化值的 key, 一般用于时间区间的转化 | `(value: any) => any` | - |
| 在编辑表格中是否可编辑的，函数的参数和 table 的 render 一样 | `false` \| `(text: any, record: T,index: number) => boolean` | true |
| colSize | 一个表单项占用的格子数量，`占比= colSize*span`，`colSize` 默认为 1 ，`span` 为 8，`span`是`form={{span:8}}` 全局设置的 | `number` | - |
| hideInSearch | 在查询表单中不展示此项 | `boolean` | - |
| hideInTable | 在 Table 中不展示此列 | `boolean` | - |
| hideInForm | 在 Form 中不展示此列 | `boolean` | - |
| hideInDescriptions | 在 Descriptions 中不展示此列 | `boolean` | - |
| filters | 表头的筛选菜单项，当值为 true 时，自动使用 valueEnum 生成 | `boolean` \| `object[]` | false |
| onFilter | 筛选表单，为 true 时使用 ProTable 自带的，为 false 时关闭本地筛选 | `(value, record) => boolean` \| `false` | false |
| request | 从服务器请求枚举 | - |
| initialValue | 查询表单项初始值 | `any` | - |
| disable | 列设置中`disabled`的状态 | `boolean` \| `{ checkbox: boolean; }` | - |

#### ProTable - 批量操作

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| alwaysShowAlert | 总是展示 alert，默认无选择不展示（`rowSelection`内置属性） | `boolean` | - |
| tableAlertRender | 自定义批量操作工具栏左侧信息区域，false 时不显示 | `({ selectedRowKeys: Key[], selectedRows: T[], onCleanSelected: ()=>void }) => ReactNode)`\|`false` | - |
| tableAlertOptionRender | 自定义批量操作工具栏右侧选项区域，false 时不显示 | `({ selectedRowKeys: Key[], selectedRows: T[], onCleanSelected: ()=>void }) => ReactNode)`\|`false` | - |

#### ProTable - ListToolBarProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `ReactNode` | - |
| subTitle | 子标题 | `ReactNode` | - |
| tooltip | tooltip 描述 | `string` | - |
| search | 查询区 | `ReactNode` \| `SearchProps` | - |
| actions | 操作区 | `ReactNode[]` | - |
| settings | 设置区 | `(ReactNode \| Setting)[]` | - |
| filter | 过滤区，通常配合 `LightFilter` 使用 | `ReactNode` | - |
| multipleLine | 是否多行展示 | `boolean` | `false` |
| menu | 菜单配置 | `ListToolBarMenu` | - |
| tabs | 标签页配置，仅当 `multipleLine` 为 true 时有效 | `ListToolBarTabs` | - |

#### ProTable - Setting

| 参数    | 说明         | 类型                  | 默认值 |
| ------- | ------------ | --------------------- | ------ |
| icon    | 图标         | `ReactNode`           | -      |
| tooltip | tooltip 描述 | `string`              | -      |
| key     | 操作唯一标识 | `string`              | -      |
| onClick | 设置被触发   | `(key: string)=>void` | -      |

#### ProTable - ListToolBarMenu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `inline` \| `dropdown` \| `tab` | `inline` |
| activeKey | 当前值 | `string` | - |
| items | 菜单项 | `{ key: string; label: ReactNode }[]` | - |
| onChange | 切换菜单的回调 | `(activeKey)=>void` | - |

#### ProTable - ListToolBarTabs

| 参数      | 说明           | 类型                                | 默认值 |
| --------- | -------------- | ----------------------------------- | ------ |
| activeKey | 当前选中项     | `string`                            | -      |
| items     | 菜单项         | `{ key: string; tab: ReactNode }[]` | -      |
| onChange  | 切换菜单的回调 | `(activeKey)=>void`                 | -      |

#### ProTable - TableDropdown

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标志 | `string` | - |
| name | 内容 | `ReactNode` | - |
| (...Menu.Item) | antd 的 [Menu.Item](https://ant.design/components/menu-cn/#Menu.Item) | `Menu.Item` | - |

### pro-components 的 ProTable - ProTable 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| request | 获取 `dataSource` 的方法 | `(params?: {pageSize,current},sort,filter) => {data,success,total}` | - |
| params | 用于 `request` 查询的额外参数，一旦变化会触发重新加载 | `object` | - |
| postData | 对通过 `request` 获取的数据进行处理 | `(data: T[]) => T[]` | - |
| defaultData | 默认的数据 | `T[]` | - |
| dataSource | Table 的数据，ProTable 推荐使用 `request` 来加载 | `T[]` | - |
| onDataSourceChange | Table 的数据发生改变时触发 | `(dataSource: T[]) => void` | - |
| actionRef | Table action 的引用，便于自定义触发 | `MutableRefObject<ActionType>` | - |
| formRef | 可以获取到查询表单的 form 实例，用于一些灵活的配置 | `MutableRefObject<FormInstance>` | - |
| toolBarRender | 渲染工具栏，支持返回一个 dom 数组，会自动增加 margin-right | `(action) => ReactNode[]` | - |
| onLoad | 数据加载完成后触发，会多次触发 | `(dataSource: T[]) => void` | - |
| onLoadingChange | loading 被修改时触发，一般是网络请求导致的 | `(loading:boolean)=>void` | - |
| onRequestError | 数据加载失败时触发 | `(error) => void` | - |
| tableClassName | 封装的 table 的 className | `string` | - |
| tableStyle | 封装的 table 的 style | - |
| options | table 工具栏，设为 false 时不显示，传入 function 会点击时触发 | `{{ density?: boolean, fullScreen?: boolean \| function, reload?: boolean \| function, reloadIcon?: React.ReactNode, densityIcon?: React.ReactNode, setting?: boolean \|` [SettingOptionType](#菜单栏-options-配置) `}}` | `{ fullScreen: false, reload: true, density: true, setting: true }` |
| search | 是否显示搜索表单，传入对象时为搜索表单的配置 | `false` \| [SearchConfig](#search-搜索表单) | - |
| defaultSize | 默认的 size | SizeType | - |
| dateFormatter | 转化 moment 格式数据为特定类型，false 不做转化 | `"string"` \| `"number"` \| ((value: Moment, valueType: string) => string \| number) \| `false` | `"string"` |
| beforeSearchSubmit | 搜索之前进行一些修改 | `(params:T)=>T` | - |
| onSizeChange | table 尺寸发生改变 | `(size: 'default' \| 'middle' \| 'small') => void` | - |
| type | pro-table 类型 | `"form"` | - |
| form | antd form 的配置 | - |
| onSubmit | 提交表单时触发 | `(params: U) => void` | - |
| onReset | 重置表单时触发 | `() => void` | - |
| columnEmptyText | 空值时的显示，不设置时显示 `-`， false 可以关闭此功能 | `string` \| `false` | false |
| tableRender | 自定义渲染表格函数 | `(props,dom,domList:{ toolbar,alert,table}) => ReactNode` | - |
| toolbar | 透传 `ListToolBar` 配置项 | - |
| tableExtraRender | 自定义表格的主体函数 | `(props: ProTableProps<T, U>, dataSource: T[]) => ReactNode;` | - |
| manualRequest | 是否需要手动触发首次请求，配置为 `true` 时不可隐藏搜索表单 | `boolean` | false |
| editable | 可编辑表格的相关配置 | - |
| cardBordered | Table 和 Search 外围 Card 组件的边框 | `boolean \| {search?: boolean, table?: boolean}` | false |
| ghost | 幽灵模式，即是否取消表格区域的 padding | `boolean` | false |
| debounceTime | 防抖时间 | `number` | 10 |
| revalidateOnFocus | 窗口聚焦时自动重新请求 | `boolean` | `true` |
| columnsState | 受控的列状态，可以操作显示隐藏 | `ColumnStateType` | - |
| ErrorBoundary | 自带了错误处理功能，防止白屏，`ErrorBoundary=false` 关闭默认错误边界 | `ReactNode` | 内置 ErrorBoundary |

### pro-components 的 ProTable - RecordCreator 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| record | 需要新增的行数据，一般来说包含唯一 key | `T` | `{}` |
| position | 行增加在哪里，开始或者末尾 | `top` \| `bottom` | `bottom` |
| (...buttonProps) | antd 的 [ButtonProps](https://ant.design/components/button-cn/#API) | ButtonProps | — |

### pro-components 的 ProTable - ColumnStateType 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 列状态的默认值，只有初次生效，并用于重置使用 | `Record<string, ColumnsState>;` | - |
| value | 列状态的值，支持受控模式 | `Record<string, ColumnsState>;` | - |
| onChange | 列状态的值发生改变之后触发 | `(value:Record<string, ColumnsState>)=>void` | - |
| persistenceKey | 持久化列的 key，用于判断是否是同一个 table | `string \| number` | - |
| persistenceType | 持久化列的类型，localStorage 设置在关闭浏览器后也是存在的，sessionStorage 关闭浏览器后会丢失 | `localStorage \| sessionStorage` | - |

### pro-components 的 ProTable - Search 搜索表单 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| filterType | 过滤表单类型 | `'query'` \| `'light'` | `'query'` |
| searchText | 查询按钮的文本 | `string` | 查询 |
| resetText | 重置按钮的文本 | `string` | 重置 |
| submitText | 提交按钮的文本 | `string` | 提交 |
| labelWidth | 标签的宽度 | `'number'` \| `'auto'` | 80 |
| span | 配置查询表单的列数 | `'number'` \| [`'ColConfig'`](#ColConfig) | defaultColConfig |
| className | 封装的搜索 Form 的 className | `string` | - |
| collapseRender | 收起按钮的 render | `((collapsed: boolean,showCollapseButton?: boolean) => ReactNode)`\|`false` | - |
| defaultCollapsed | 默认是否收起 | `boolean` | `true` |
| collapsed | 是否收起 | `boolean` | - |
| onCollapse | 收起按钮的事件 | `(collapsed: boolean) => void;` | - |
| optionRender | 自定义操作栏 | `((searchConfig,formProps,dom) => ReactNode[])`\|`false` | - |
| showHiddenNum | 是否显示收起之后显示隐藏个数 | `boolean` | `false` |

### pro-components 的 ProTable - Columns 列定义 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 与 antd 中基本相同，但是支持通过传入一个方法 | `ReactNode \| ((config: ProColumnType<T>, type: ProTableTypes) => ReactNode)` | - |
| tooltip | 会在 title 之后展示一个 icon，hover 之后提示一些信息 | `string` | - |
| ellipsis | 是否自动缩略 | `boolean` \| `{showTitle?: boolean}` | - |
| copyable | 是否支持复制 | `boolean` | - |
| valueEnum | 值的枚举，会自动转化把值当成 key 来取出要显示的内容 | - |
| valueType | 值的类型，会生成不同的渲染器 | `text` |
| order | 查询表单中的权重，权重大排序靠前 | `number` | - |
| fieldProps | 查询表单的 props，会透传给表单项，如果渲染出来是 Input，就支持 Input 的所有 props，同理如果是 select，也支持 select 的所有 props。也支持方法传入 | `(form,config)=>Record \| Record` | - |
| `formItemProps` | 传递给 Form.Item 的配置，可以配置 rules，但是默认的查询表单 rules 是不生效的。需要配置 `ignoreRules` | `(form,config)=>formItemProps` \| `formItemProps` | - |
| renderText | 类似 table 的 render，但是必须返回 string，如果只是希望转化枚举，可以使用 [valueEnum](/components/schema#valueenum) | `(text: any,record: T,index: number,action: UseFetchDataAction<T>) => string` | - |
| render | 类似 table 的 render，第一个参数变成了 dom，增加了第四个参数 action | `(text: ReactNode,record: T,index: number,action: UseFetchDataAction<T>) => ReactNode \| ReactNode[]` | - |
| renderFormItem | 渲染查询表单的输入组件 | `(item,{ type, defaultRender, formItemProps, fieldProps, ...rest },form) => ReactNode` | - |
| search | 配置列的搜索相关，false 为隐藏 | `false` \| `{ transform: (value: any) => any }` | true |
| search.transform | 转化值的 key, 一般用于时间区间的转化 | `(value: any) => any` | - |
| 在编辑表格中是否可编辑的，函数的参数和 table 的 render 一样 | `false` \| `(text: any, record: T,index: number) => boolean` | true |
| colSize | 一个表单项占用的格子数量，`占比= colSize*span`，`colSize` 默认为 1 ，`span` 为 8，`span`是`form={{span:8}}` 全局设置的 | `number` | - |
| hideInSearch | 在查询表单中不展示此项 | `boolean` | - |
| hideInTable | 在 Table 中不展示此列 | `boolean` | - |
| hideInForm | 在 Form 中不展示此列 | `boolean` | - |
| hideInDescriptions | 在 Descriptions 中不展示此列 | `boolean` | - |
| filters | 表头的筛选菜单项，当值为 true 时，自动使用 valueEnum 生成 | `boolean` \| `object[]` | false |
| onFilter | 筛选表单，为 true 时使用 ProTable 自带的，为 false 时关闭本地筛选 | `(value, record) => boolean` \| `false` | false |
| request | 从服务器请求枚举 | - |
| initialValue | 查询表单项初始值 | `any` | - |
| disable | 列设置中`disabled`的状态 | `boolean` \| `{ checkbox: boolean; }` | - |

### pro-components 的 ProTable - 批量操作 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| alwaysShowAlert | 总是展示 alert，默认无选择不展示（`rowSelection`内置属性） | `boolean` | - |
| tableAlertRender | 自定义批量操作工具栏左侧信息区域，false 时不显示 | `({ selectedRowKeys: Key[], selectedRows: T[], onCleanSelected: ()=>void }) => ReactNode)`\|`false` | - |
| tableAlertOptionRender | 自定义批量操作工具栏右侧选项区域，false 时不显示 | `({ selectedRowKeys: Key[], selectedRows: T[], onCleanSelected: ()=>void }) => ReactNode)`\|`false` | - |

### pro-components 的 ProTable - ListToolBarProps 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `ReactNode` | - |
| subTitle | 子标题 | `ReactNode` | - |
| tooltip | tooltip 描述 | `string` | - |
| search | 查询区 | `ReactNode` \| `SearchProps` | - |
| actions | 操作区 | `ReactNode[]` | - |
| settings | 设置区 | `(ReactNode \| Setting)[]` | - |
| filter | 过滤区，通常配合 `LightFilter` 使用 | `ReactNode` | - |
| multipleLine | 是否多行展示 | `boolean` | `false` |
| menu | 菜单配置 | `ListToolBarMenu` | - |
| tabs | 标签页配置，仅当 `multipleLine` 为 true 时有效 | `ListToolBarTabs` | - |

### pro-components 的 ProTable - Setting 有哪些配置？

| 参数    | 说明         | 类型                  | 默认值 |
| ------- | ------------ | --------------------- | ------ |
| icon    | 图标         | `ReactNode`           | -      |
| tooltip | tooltip 描述 | `string`              | -      |
| key     | 操作唯一标识 | `string`              | -      |
| onClick | 设置被触发   | `(key: string)=>void` | -      |

### pro-components 的 ProTable - ListToolBarMenu 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `inline` \| `dropdown` \| `tab` | `inline` |
| activeKey | 当前值 | `string` | - |
| items | 菜单项 | `{ key: string; label: ReactNode }[]` | - |
| onChange | 切换菜单的回调 | `(activeKey)=>void` | - |

### pro-components 的 ProTable - ListToolBarTabs 有哪些配置？

| 参数      | 说明           | 类型                                | 默认值 |
| --------- | -------------- | ----------------------------------- | ------ |
| activeKey | 当前选中项     | `string`                            | -      |
| items     | 菜单项         | `{ key: string; tab: ReactNode }[]` | -      |
| onChange  | 切换菜单的回调 | `(activeKey)=>void`                 | -      |

### pro-components 的 ProTable - TableDropdown 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标志 | `string` | - |
| name | 内容 | `ReactNode` | - |
| (...Menu.Item) | antd 的 [Menu.Item](https://ant.design/components/menu-cn/#Menu.Item) | `Menu.Item` | - |

## pro-components 的 Table 有哪些配置？

#### ProTable - API

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 同 dataSource，传入一个数组，是 table 渲染的元数据 | `T[]` | `undefined` |
| `onChange` | dataSource 修改时触发，删除和修改都会触发，如果设置了 value，Table 会成为一个受控组件。 | `(value:T[])=>void` | `undefined` |
| `recordCreatorProps` | 新建一行数据的相关配置 | - |
| `maxLength` | 最大的行数，到达最大行数新建按钮会自动消失 | number | - |
| `editable` | 可编辑表格的相关配置 | - |
| `controlled` | 是否受控，如果受控每次编辑都会触发 onChange，并且会修改 dataSource | `boolean` | false |
| `editableFormRef` | table 所有的 form，带了一些表格特有的操作 | `React.Ref<EditableFormInstance<T>>` | `undefined` |

#### ProTable - editable 编辑行配置

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 可编辑表格的类型，单行编辑或者多行编辑 | `single` \| `multiple` | - |
| form | 可编辑表格的 form 实例，使用 `Form.useForm` 生成后使用 | `FormInstance` | - |
| formProps | 可以配置 form 的属性，但是不支持 onFinish | - |
| editableKeys | 正在编辑的行，受控属性。 默认 `key` 会使用 `rowKey` 的配置，如果没有配置会使用 `index`，建议使用 rowKey | `Key[]` | - |
| onChange | 行数据被修改的时候触发 | `(editableKeys: Key[], editableRows: T[]) => void` | - |
| onSave | 保存一行的时候触发 | `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>` | - |
| saveText | 保存一行的文字 | `React.ReactNode` | `保存` |
| onDelete | 删除一行的时候触发 | `(key: Key, row: T) => Promise<any>` | - |
| deleteText | 删除一行的文字 | `React.ReactNode` | `删除` |
| onCancel | 取消编辑一行时触发 | `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>` | - |
| cancelText | 取消编辑一行的文字 | `React.ReactNode` | `取消` |
| actionRender | 自定义编辑模式的操作栏 | `(row: T, config: ActionRenderConfig<T>) => ReactNode[]` | - |
| deletePopconfirmMessage | 删除时弹出的确认框提示消息 | `ReactNode` | `删除此项？` |
| onlyOneLineEditorAlertMessage | 只能编辑一行的的提示 | `ReactNode` | `只能同时编辑一行` |
| onlyAddOneLineAlertMessage | 只能同时新增一行的提示 | `ReactNode` | `只能新增一行` |

### pro-components 的 ProTable - API 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 同 dataSource，传入一个数组，是 table 渲染的元数据 | `T[]` | `undefined` |
| `onChange` | dataSource 修改时触发，删除和修改都会触发，如果设置了 value，Table 会成为一个受控组件。 | `(value:T[])=>void` | `undefined` |
| `recordCreatorProps` | 新建一行数据的相关配置 | - |
| `maxLength` | 最大的行数，到达最大行数新建按钮会自动消失 | number | - |
| `editable` | 可编辑表格的相关配置 | - |
| `controlled` | 是否受控，如果受控每次编辑都会触发 onChange，并且会修改 dataSource | `boolean` | false |
| `editableFormRef` | table 所有的 form，带了一些表格特有的操作 | `React.Ref<EditableFormInstance<T>>` | `undefined` |

### pro-components 的 ProTable - editable 编辑行配置 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 可编辑表格的类型，单行编辑或者多行编辑 | `single` \| `multiple` | - |
| form | 可编辑表格的 form 实例，使用 `Form.useForm` 生成后使用 | `FormInstance` | - |
| formProps | 可以配置 form 的属性，但是不支持 onFinish | - |
| editableKeys | 正在编辑的行，受控属性。 默认 `key` 会使用 `rowKey` 的配置，如果没有配置会使用 `index`，建议使用 rowKey | `Key[]` | - |
| onChange | 行数据被修改的时候触发 | `(editableKeys: Key[], editableRows: T[]) => void` | - |
| onSave | 保存一行的时候触发 | `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>` | - |
| saveText | 保存一行的文字 | `React.ReactNode` | `保存` |
| onDelete | 删除一行的时候触发 | `(key: Key, row: T) => Promise<any>` | - |
| deleteText | 删除一行的文字 | `React.ReactNode` | `删除` |
| onCancel | 取消编辑一行时触发 | `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>` | - |
| cancelText | 取消编辑一行的文字 | `React.ReactNode` | `取消` |
| actionRender | 自定义编辑模式的操作栏 | `(row: T, config: ActionRenderConfig<T>) => ReactNode[]` | - |
| deletePopconfirmMessage | 删除时弹出的确认框提示消息 | `ReactNode` | `删除此项？` |
| onlyOneLineEditorAlertMessage | 只能编辑一行的的提示 | `ReactNode` | `只能同时编辑一行` |
| onlyAddOneLineAlertMessage | 只能同时新增一行的提示 | `ReactNode` | `只能新增一行` |

## pro-components 的 Table 有哪些配置？

#### ProTable - API

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dragSortKey | 如配置此参数，则会在该 key 对应的行显示拖拽排序把手，允许拖拽排序 | `string` | - |
| dragSortHandlerRender | 渲染自定义拖动排序把手的函数 如配置了 dragSortKey 但未配置此参数，则使用默认把手图标 | `(rowData: T, idx: number) => React.ReactNode` | `<MenuOutlined className="dragSortDefaultHandle" style={{ cursor: 'grab', color: '#999' }} />` |
| onDragSortEnd | 拖动排序完成回调 | `(beforeIndex: number, afterIndex: number, newDataSource: T[]) => Promise<void> \| void` | - |

### pro-components 的 ProTable - API 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dragSortKey | 如配置此参数，则会在该 key 对应的行显示拖拽排序把手，允许拖拽排序 | `string` | - |
| dragSortHandlerRender | 渲染自定义拖动排序把手的函数 如配置了 dragSortKey 但未配置此参数，则使用默认把手图标 | `(rowData: T, idx: number) => React.ReactNode` | `<MenuOutlined className="dragSortDefaultHandle" style={{ cursor: 'grab', color: '#999' }} />` |
| onDragSortEnd | 拖动排序完成回调 | `(beforeIndex: number, afterIndex: number, newDataSource: T[]) => Promise<void> \| void` | - |

## pro-components 的 Skeleton 有哪些配置？

#### ProSkeleton - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 不同类型的骨架屏 | `'list' \| 'result' \| 'descriptions'` | list |
| active | 是否显示动态 | boolean | true |
| pageHeader | 是否显示 pageHeader 的骨架屏 descriptions 和 list 有效 | - | - |
| statistic | 统计信息骨架屏的数量 | `number` \| `false` | - |
| list | 列表的骨架屏，可以控制数量 | `number` \| `false` | - |
| toolbar | 列表的操作栏骨架屏 | boolean | - |
| renderFormItem | 自定义 `mode=update 或 edit` 下的 dom 表现，一般用于渲染编辑框 | - | - |
| render | 自定义 `mode=read` 下的 dom 表现，只是单纯的表现形式 | - | - |

### pro-components 的 ProSkeleton - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 不同类型的骨架屏 | `'list' \| 'result' \| 'descriptions'` | list |
| active | 是否显示动态 | boolean | true |
| pageHeader | 是否显示 pageHeader 的骨架屏 descriptions 和 list 有效 | - | - |
| statistic | 统计信息骨架屏的数量 | `number` \| `false` | - |
| list | 列表的骨架屏，可以控制数量 | `number` \| `false` | - |
| toolbar | 列表的操作栏骨架屏 | boolean | - |
| renderFormItem | 自定义 `mode=update 或 edit` 下的 dom 表现，一般用于渲染编辑框 | - | - |
| render | 自定义 `mode=read` 下的 dom 表现，只是单纯的表现形式 | - | - |

## pro-components 的 List 有哪些配置？

#### ProList - ProList API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 与 antd 相同的[配置](https://ant.design/components/list-cn/#API) | `any[]` | `false` |
| actionRef | Table action 的引用，便于自定义触发 | `MutableRefObject<ActionType>` | - |
| metas | 列表项配置，类似 Table 中的 columns | `Metas` | - |
| rowKey | 行的 key，一般是行 id | `string` \| `(row,index)=>string` | `'id'` |
| headerTitle | 列表头部主标题 | `React.ReactNode` | - |
| loading | 是否加载中 | `boolean` \| `(item: any) => boolean` | `false` |
| split | 是否有分割线 | `boolean` | `false` |
| rowSelection | 与 antd 相同的[配置](https://ant.design/components/table-cn/#rowSelection) | `object` \|`boolean` | false |
| expandable | 与 antd 相同的[配置](https://ant.design/components/table-cn/#expandable) | `object` \| `false` | - |
| showActions | 何时展示 actions，CardList 模式下不生效 | `'hover'` \| `'always'` | `'always'` |
| showExtra | 何时展示 extra | `'hover'` \| `'always'` | `'always'` |
| onRow | 与 antd 相同的[配置](https://ant.design/components/table-cn/#onRow-%E7%94%A8%E6%B3%95)，用户传入`grid`属性时，列表将会以卡片模式进行渲染，此事件将不会触发，请使用`onItem` | `function(record, index)` | - |
| onItem | 与 antd 相同的[配置](https://ant.design/components/table-cn/#onRow-%E7%94%A8%E6%B3%95)，在所有类型点击某个项目都会触发该事件。 | `function(record, index)` | - |
| rowClassName | 自定义列表行的类名 | `string`\| `(row, index) => string` | - |
| itemHeaderRender | 自定义每一列的 header，与 itemRender 不同的时，它会保留多选和展开收起 | - | - |
| itemCardProps | 自定义卡片列表的 proCard props，只在卡片列表下生效 | - | - |

#### ProList - Metas.[Meta] 通用 API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | 数据在数据项中对应的路径，支持通过数组查询嵌套路径 | `string` \| `string[]` | - |
| valueType | 值的类型，和 ProTable 一致 | `'text'` \| `'date'` ... | `'text'` |
| render | 自定义渲染函数 | `(text: React.ReactNode,record: T,index: number) => React.ReactNode \| React.ReactNode[]` | - |

#### ProList - Metas.type

| 参数      | 说明 | 类型 | 默认值   |
| --------- | ---- | ---- | -------- |
| dataIndex | -    | -    | `'type'` |

#### ProList - Metas.title

| 参数      | 说明 | 类型 | 默认值    |
| --------- | ---- | ---- | --------- |
| dataIndex | -    | -    | `'title'` |

#### ProList - Metas.subTitle

| 参数      | 说明 | 类型 | 默认值       |
| --------- | ---- | ---- | ------------ |
| dataIndex | -    | -    | `'subTitle'` |

#### ProList - Metas.description

| 参数      | 说明 | 类型 | 默认值          |
| --------- | ---- | ---- | --------------- |
| dataIndex | -    | -    | `'description'` |

#### ProList - Metas.avatar

| 参数      | 说明 | 类型 | 默认值     |
| --------- | ---- | ---- | ---------- |
| dataIndex | -    | -    | `'avatar'` |

#### ProList - Metas.actions

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'actions'` |
| cardActionProps | 设置卡片列表把 action 渲染到哪里｜`extra`｜`'actions' \| 'extra'` |

#### ProList - Metas.content

| 参数      | 说明 | 类型 | 默认值      |
| --------- | ---- | ---- | ----------- |
| dataIndex | -    | -    | `'content'` |

#### ProList - Metas.extra

| 参数      | 说明 | 类型 | 默认值    |
| --------- | ---- | ---- | --------- |
| dataIndex | -    | -    | `'extra'` |

### pro-components 的 ProList - ProList API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 与 antd 相同的[配置](https://ant.design/components/list-cn/#API) | `any[]` | `false` |
| actionRef | Table action 的引用，便于自定义触发 | `MutableRefObject<ActionType>` | - |
| metas | 列表项配置，类似 Table 中的 columns | `Metas` | - |
| rowKey | 行的 key，一般是行 id | `string` \| `(row,index)=>string` | `'id'` |
| headerTitle | 列表头部主标题 | `React.ReactNode` | - |
| loading | 是否加载中 | `boolean` \| `(item: any) => boolean` | `false` |
| split | 是否有分割线 | `boolean` | `false` |
| rowSelection | 与 antd 相同的[配置](https://ant.design/components/table-cn/#rowSelection) | `object` \|`boolean` | false |
| expandable | 与 antd 相同的[配置](https://ant.design/components/table-cn/#expandable) | `object` \| `false` | - |
| showActions | 何时展示 actions，CardList 模式下不生效 | `'hover'` \| `'always'` | `'always'` |
| showExtra | 何时展示 extra | `'hover'` \| `'always'` | `'always'` |
| onRow | 与 antd 相同的[配置](https://ant.design/components/table-cn/#onRow-%E7%94%A8%E6%B3%95)，用户传入`grid`属性时，列表将会以卡片模式进行渲染，此事件将不会触发，请使用`onItem` | `function(record, index)` | - |
| onItem | 与 antd 相同的[配置](https://ant.design/components/table-cn/#onRow-%E7%94%A8%E6%B3%95)，在所有类型点击某个项目都会触发该事件。 | `function(record, index)` | - |
| rowClassName | 自定义列表行的类名 | `string`\| `(row, index) => string` | - |
| itemHeaderRender | 自定义每一列的 header，与 itemRender 不同的时，它会保留多选和展开收起 | - | - |
| itemCardProps | 自定义卡片列表的 proCard props，只在卡片列表下生效 | - | - |

### pro-components 的 ProList - Metas.[Meta] 通用 API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | 数据在数据项中对应的路径，支持通过数组查询嵌套路径 | `string` \| `string[]` | - |
| valueType | 值的类型，和 ProTable 一致 | `'text'` \| `'date'` ... | `'text'` |
| render | 自定义渲染函数 | `(text: React.ReactNode,record: T,index: number) => React.ReactNode \| React.ReactNode[]` | - |

### pro-components 的 ProList - Metas.type 有哪些配置？

| 参数      | 说明 | 类型 | 默认值   |
| --------- | ---- | ---- | -------- |
| dataIndex | -    | -    | `'type'` |

### pro-components 的 ProList - Metas.title 有哪些配置？

| 参数      | 说明 | 类型 | 默认值    |
| --------- | ---- | ---- | --------- |
| dataIndex | -    | -    | `'title'` |

### pro-components 的 ProList - Metas.subTitle 有哪些配置？

| 参数      | 说明 | 类型 | 默认值       |
| --------- | ---- | ---- | ------------ |
| dataIndex | -    | -    | `'subTitle'` |

### pro-components 的 ProList - Metas.description 有哪些配置？

| 参数      | 说明 | 类型 | 默认值          |
| --------- | ---- | ---- | --------------- |
| dataIndex | -    | -    | `'description'` |

### pro-components 的 ProList - Metas.avatar 有哪些配置？

| 参数      | 说明 | 类型 | 默认值     |
| --------- | ---- | ---- | ---------- |
| dataIndex | -    | -    | `'avatar'` |

### pro-components 的 ProList - Metas.actions 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'actions'` |
| cardActionProps | 设置卡片列表把 action 渲染到哪里｜`extra`｜`'actions' \| 'extra'` |

### pro-components 的 ProList - Metas.content 有哪些配置？

| 参数      | 说明 | 类型 | 默认值      |
| --------- | ---- | ---- | ----------- |
| dataIndex | -    | -    | `'content'` |

### pro-components 的 ProList - Metas.extra 有哪些配置？

| 参数      | 说明 | 类型 | 默认值    |
| --------- | ---- | ---- | --------- |
| dataIndex | -    | -    | `'extra'` |

## pro-components 的 Layout 有哪些配置？

#### ProLayout - ProLayout

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | layout 的左上角的 title | `ReactNode` | `'Ant Design Pro'` |
| logo | layout 的左上角 logo 的 url | `ReactNode` \| `()=> ReactNode` | - |
| pure | 是否删除掉所有的自带界面 | `boolean` | - |
| loading | layout 的加载态 | `boolean` | - |
| location | 当前应用会话的位置信息。如果你的应用创建了自定义的 history，则需要显示指定 location 属性，详见 [issue](https://github.com/ant-design/pro-components/issues/327) | isBrowser ? window.location : undefined |
| appList | 跨站点导航列表 | `{ icon, title, desc, url, target, children }[]` | - |
| appListRender | 自定义跨站点导航列表的 render 方法 | `(props: AppListProps, defaultDom: React.ReactNode) => ReactNode` | - |
| menuHeaderRender | 渲染 logo 和 title, 优先级比 `headerTitleRender` 更高 | `ReactNode` \| `(logo,title)=>ReactNode` | - |
| menuFooterRender | 在 layout 底部渲染一个块 | `(menuProps)=>ReactNode` | - |
| onMenuHeaderClick | menu 菜单的头部点击事件 | `(e: React.MouseEvent<HTMLDivElement>) => void` | - |
| menuExtraRender | 在菜单标题的下面渲染一个区域 | `(menuProps)=>ReactNode` | - |
| onTopMixMenuHeaderClick | mix 模式下顶部栏的头部点击事件 | `(e: React.MouseEvent<HTMLDivElement>) => void` | - |
| contentStyle | layout 的内容区 style | CSSProperties | - |
| layout | layout 的菜单模式，side：右侧导航，top：顶部导航 | `side` \| `top`\|`mix` | `side` |
| contentWidth | layout 的内容模式，Fluid：自适应，Fixed：定宽 1200px | `Fluid` \| `Fixed` | `Fluid` |
| actionRef | layout 的常见操作，比如刷新菜单 | `MutableRefObject<ActionType>` | - |
| fixedHeader | 是否固定 header 到顶部 | `boolean` | `false` |
| fixSiderbar | 是否固定导航 | `boolean` | `false` |
| breakpoint | 触发响应式布局的[断点](https://ant.design/components/grid-cn/#Col) | `Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' }` | `lg` |
| menu | 关于 [menu](#menu) 的配置，暂时只有 locale，locale 可以关闭 menu 的自带的全球化 | `{ locale: true }` |
| iconfontUrl | 使用 [IconFont](https://ant.design/components/icon-cn/#components-icon-demo-iconfont) 的图标配置 | `URL` | - |
| locale | 当前 layout 的语言设置 | `zh-CN` \| `zh-TW` \| `en-US` | navigator.language |
| settings | layout 的设置 | - |
| siderWidth | 侧边菜单宽度 | `number` | 208 |
| suppressSiderWhenMenuEmpty | 在菜单为空时隐藏 Sider | `boolean` | - |
| defaultCollapsed | 默认的菜单的收起和展开，会受到 `breakpoint` 的影响，`breakpoint=false` 生效 | `boolean` | - |
| collapsed | 控制菜单的收起和展开 | `boolean` | - |
| onCollapse | 菜单的折叠收起事件 | `(collapsed: boolean) => void` | - |
| onPageChange | 页面切换时触发 | `(location: Location) => void` | - |
| headerRender | 自定义头的 render 方法 | `(props: ProLayoutProps) => ReactNode` | - |
| headerTitleRender | 自定义头标题的方法，mix 模式和 top 模式下生效 | `(logo,title,props)=>ReactNode` | - |
| headerContentRender | 自定义头内容的方法 | `(props: ProLayoutProps) => ReactNode` | - |
| avatarProps | layout 的头像设置，不同的 layout 放在不同的位置 | - |
| actionsRender | 自定义操作列表 | `(layoutProps)=>ReactNode[]` | - |
| collapsedButtonRender | 自定义 collapsed button 的方法 | `(collapsed: boolean) => ReactNode` | - |
| footerRender | 自定义页脚的 render 方法 | `(props: ProLayoutProps) => JSX.Element \| false` | - |
| pageTitleRender | 自定义页面标题的显示方法 | `(props: ProLayoutProps) => string` | - |
| menuRender | 自定义菜单的 render 方法 | `(props: HeaderViewProps) => ReactNode` | - |
| postMenuData | 在显示前对菜单数据进行查看，修改不会触发重新渲染 | `(menuData: MenuDataItem[]) => MenuDataItem[]` | - |
| menuItemRender | 自定义菜单项的 render 方法 | - |
| subMenuItemRender | 自定义拥有子菜单菜单项的 render 方法 | - |
| menuDataRender | menuData 的 render 方法，用来自定义 menuData | `(menuData: MenuDataItem[]) => MenuDataItem[]` | - |
| breadcrumbRender | 自定义面包屑的数据 | `(route)=>route` | - |
| breadcrumbProps | 传递到 antd Breadcrumb 组件的 props, 参考 [面包屑](https://ant.design/components/breadcrumb-cn/) | `breadcrumbProps` | undefined |
| route | 用于生成菜单和面包屑。Umi 的 Layout 会自动带有 | - |
| disableMobile | 禁止自动切换到移动页面 | `boolean` | false |
| ErrorBoundary | 自带了错误处理功能，防止白屏，`ErrorBoundary=false` 关闭默认错误边界 | `ReactNode` | 内置 ErrorBoundary |
| links | 显示在菜单右下角的快捷操作 | `ReactNode[]` | - |
| menuProps | 传递到 antd menu 组件的 props, 参考 [导航菜单](https://ant.design/components/menu-cn/) | `MenuProps` | undefined |
| waterMarkProps | 配置水印，水印是 PageContainer 的功能，layout 只是透传给 PageContainer | - |

#### ProLayout - menu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | menu 是否使用国际化，还需要 formatMessage 的配合。 | `boolean` | `true` |
| defaultOpenAll | 默认打开所有的菜单项，要注意只有 layout 挂载之前生效，异步加载菜单是不支持的 | `boolean` | `false` |
| ignoreFlatMenu | 是否忽略手动折叠过的菜单状态，结合 defaultOpenAll 可实现折叠按钮切换后，同样可以展开所有子菜单 | `boolean` | `false` |
| type | 菜单的类型 | `sub` \| `group` | `group` |
| autoClose | 选中菜单是否自动关闭菜单 | `boolean` | `true` |
| loading | 菜单是否正在加载中 | `boolean` | `false` |
| onLoadingChange | 菜单的加载状态变更 | `(loading)=>void` | - |
| request | 远程加载菜单的方法，会自动修改 loading 状态 | `(params,defaultMenuDat) => Promise<MenuDataItem[]>` | - |

#### ProLayout - SettingDrawer

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| collapse | 控制 SettingDrawer 的收起和展开 | `boolean` | - |
| onCollapseChange | SettingDrawer 的折叠收起事件 | `(collapsed: boolean) => void` | - |
| settings | layout 的设置 | - |
| onSettingChange | `(settings: [`Settings`](#Settings) ) => void` | - |
| hideHintAlert | 删除下方的提示信息 | `boolean` | - |
| hideCopyButton | 不展示 copy 功能 | `boolean` | - |
| disableUrlParams | 禁止同步设置到查询参数 | `boolean` | `false` |
| enableDarkTheme | 打开黑色主题切换功能 ｜ `boolean` | `false` |
| colorList | 自带的颜色切换系统 (ColorList 的 title 会作为 Tooltip 显示) ｜ `{key,color,title?}[]` | `ColorList` |

#### ProLayout - PageLoading

| 参数                            | 说明 | 类型 |
| ------------------------------- | ---- | ---- |
| 支持所有的 antd `Spin` 组件参数 | -    | -    |

#### ProLayout - getMenuData

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- |
| routes | 路由的配置信息 | - |
| menu | menu 的配置项，默认 `{locale: true}` | `{ locale: boolean }` | - |
| menuDataRender | menuData 的 render 方法，用来自定义 menuData | `(menuData: MenuDataItem[]) => MenuDataItem[]` | - |
| formatMessage | react-intl 的 formatMessage 方法 | `(data: { id: any; defaultMessage?: string }) => string;` | - |

#### ProLayout - getPageTitle

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pathname | 当前的 pathname | location.pathname | - |
| breadcrumb | MenuDataItem 的合集 | `{ [path: string]: MenuDataItem }` | - |
| menu | menu 的配置项，默认 `{locale: true}` | `{ locale: boolean }` | - |
| title | title 的类型 | string | 'Ant Design Pro' |
| formatMessage | react-intl 的 formatMessage 方法 | `(data: { id: any; defaultMessage?: string }) => string;` | - |

#### ProLayout - GridContent

| 参数         | 说明     | 类型               | 默认值 |
| ------------ | -------- | ------------------ | ------ |
| contentWidth | 内容模式 | `Fluid` \| `Fixed` | -      |

#### ProLayout - Layout 的 token

| token | 说明 | 默认值 |
| --- | --- | --- |
| bgLayout | layout 的背景颜色 | `linear-gradient(${antdToken.colorBgContainer}, ${antdToken.colorBgLayout} 28%)` |
| colorTextAppListIcon | 跨站点应用的图标颜色 | `#666` |
| colorTextAppListIconHover | 跨站点应用的图标 hover 颜色 | `rgba(0, 0, 0, 0.65)` |
| colorBgAppListIconHover | 跨站点应用的图标 hover 背景颜色 | `rgba(0, 0, 0, 0.04)` |

#### ProLayout - Sider Token

| token | 说明 | 默认值 |
| --- | --- | --- |
| colorMenuBackground | menu 的背景颜色 | `transparent` |
| colorTextMenuTitle | sider 的标题字体颜色 | `colorTextHeading` |
| colorMenuItemDivider | menuItem 分割线的颜色 | `colorSplit` |
| colorTextMenu | menuItem 的字体颜色 | `colorText` |
| colorTextMenuSecondary | menu 的二级字体颜色，比如 footer 和 action 的 icon | `colorText` |
| colorTextMenuSelected | menuItem 的选中字体颜色 | `rgb(0,0,0)` |
| colorTextMenuActive | menuItem hover 的选中字体颜色 | `rgba(0, 0, 0, 0.85)` |
| colorTextMenuItemHover | menuItem 的 hover 字体颜色 | `rgba(255,255,255,0.75)` |
| colorBgMenuItemHover | menuItem 的 hover 背景颜色 | `rgba(90, 75, 75, 0.03)` |
| colorBgMenuItemSelected | menuItem 的选中背景颜色 | `rgba(0, 0, 0, 0.04)` |
| colorBgMenuItemCollapsedElevated | 收起 menuItem 的弹出菜单背景颜色 | `transparent` |
| colorBgCollapsedButton | 展开收起按钮背景颜色 | `#fff` |
| colorTextCollapsedButton | 展开收起按钮字体颜色 | `colorTextMenuSecondary` |
| colorTextCollapsedButtonHover | 展开收起按钮 hover 时字体颜色 | `colorTextMenu` |

#### ProLayout - Header Token

| token | 说明 | 默认值 |
| --- | --- | --- |
| colorBgHeader | header 的背景颜色 | `rgba(240, 242, 245, 0.4)` |
| colorHeaderTitle | sider 的标题字体颜色 | `colorTextHeading` |
| colorTextMenu | menuItem 的字体颜色 | `colorText` |
| colorTextMenuSecondary | menu 的二级字体颜色，比如 footer 和 action 的 icon | `colorText` |
| colorTextMenuSelected | menuItem 的选中字体颜色 | `rgb(0,0,0)` |
| colorTextMenuActive | menuItem hover 的选中字体颜色 | `rgba(0, 0, 0, 0.85)` |
| colorBgMenuItemHover | menuItem 的 hover 背景颜色 | `rgba(90, 75, 75, 0.03)` |
| colorBgMenuItemSelected | menuItem 的选中背景颜色 | `rgba(0, 0, 0, 0.04)` |
| colorTextRightActionsItem | 右上角字体颜色 | `colorTextSecondary` |
| colorBgRightActionsItemHover | 右上角选中的 hover 颜色 | `rgba(0, 0, 0, 0.03)` |
| heightLayoutHeader | header 高度 | 56 |

#### ProLayout - pageContainer Token

| token | 说明 | 默认值 |
| --- | --- | --- |
| paddingBlockPageContainerContent | pageContainer 自带的 padding block | `24` |
| paddingInlinePageContainerContent | pageContainer 自带的 padding inline | `40` |
| colorBgPageContainer | pageContainer 的背景颜色 | `transparent` |
| colorBgPageContainerFixed | pageContainer 被固定时的背景颜色 | `#FFF` |

### pro-components 的 ProLayout - ProLayout 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | layout 的左上角的 title | `ReactNode` | `'Ant Design Pro'` |
| logo | layout 的左上角 logo 的 url | `ReactNode` \| `()=> ReactNode` | - |
| pure | 是否删除掉所有的自带界面 | `boolean` | - |
| loading | layout 的加载态 | `boolean` | - |
| location | 当前应用会话的位置信息。如果你的应用创建了自定义的 history，则需要显示指定 location 属性，详见 [issue](https://github.com/ant-design/pro-components/issues/327) | isBrowser ? window.location : undefined |
| appList | 跨站点导航列表 | `{ icon, title, desc, url, target, children }[]` | - |
| appListRender | 自定义跨站点导航列表的 render 方法 | `(props: AppListProps, defaultDom: React.ReactNode) => ReactNode` | - |
| menuHeaderRender | 渲染 logo 和 title, 优先级比 `headerTitleRender` 更高 | `ReactNode` \| `(logo,title)=>ReactNode` | - |
| menuFooterRender | 在 layout 底部渲染一个块 | `(menuProps)=>ReactNode` | - |
| onMenuHeaderClick | menu 菜单的头部点击事件 | `(e: React.MouseEvent<HTMLDivElement>) => void` | - |
| menuExtraRender | 在菜单标题的下面渲染一个区域 | `(menuProps)=>ReactNode` | - |
| onTopMixMenuHeaderClick | mix 模式下顶部栏的头部点击事件 | `(e: React.MouseEvent<HTMLDivElement>) => void` | - |
| contentStyle | layout 的内容区 style | CSSProperties | - |
| layout | layout 的菜单模式，side：右侧导航，top：顶部导航 | `side` \| `top`\|`mix` | `side` |
| contentWidth | layout 的内容模式，Fluid：自适应，Fixed：定宽 1200px | `Fluid` \| `Fixed` | `Fluid` |
| actionRef | layout 的常见操作，比如刷新菜单 | `MutableRefObject<ActionType>` | - |
| fixedHeader | 是否固定 header 到顶部 | `boolean` | `false` |
| fixSiderbar | 是否固定导航 | `boolean` | `false` |
| breakpoint | 触发响应式布局的[断点](https://ant.design/components/grid-cn/#Col) | `Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' }` | `lg` |
| menu | 关于 [menu](#menu) 的配置，暂时只有 locale，locale 可以关闭 menu 的自带的全球化 | `{ locale: true }` |
| iconfontUrl | 使用 [IconFont](https://ant.design/components/icon-cn/#components-icon-demo-iconfont) 的图标配置 | `URL` | - |
| locale | 当前 layout 的语言设置 | `zh-CN` \| `zh-TW` \| `en-US` | navigator.language |
| settings | layout 的设置 | - |
| siderWidth | 侧边菜单宽度 | `number` | 208 |
| suppressSiderWhenMenuEmpty | 在菜单为空时隐藏 Sider | `boolean` | - |
| defaultCollapsed | 默认的菜单的收起和展开，会受到 `breakpoint` 的影响，`breakpoint=false` 生效 | `boolean` | - |
| collapsed | 控制菜单的收起和展开 | `boolean` | - |
| onCollapse | 菜单的折叠收起事件 | `(collapsed: boolean) => void` | - |
| onPageChange | 页面切换时触发 | `(location: Location) => void` | - |
| headerRender | 自定义头的 render 方法 | `(props: ProLayoutProps) => ReactNode` | - |
| headerTitleRender | 自定义头标题的方法，mix 模式和 top 模式下生效 | `(logo,title,props)=>ReactNode` | - |
| headerContentRender | 自定义头内容的方法 | `(props: ProLayoutProps) => ReactNode` | - |
| avatarProps | layout 的头像设置，不同的 layout 放在不同的位置 | - |
| actionsRender | 自定义操作列表 | `(layoutProps)=>ReactNode[]` | - |
| collapsedButtonRender | 自定义 collapsed button 的方法 | `(collapsed: boolean) => ReactNode` | - |
| footerRender | 自定义页脚的 render 方法 | `(props: ProLayoutProps) => JSX.Element \| false` | - |
| pageTitleRender | 自定义页面标题的显示方法 | `(props: ProLayoutProps) => string` | - |
| menuRender | 自定义菜单的 render 方法 | `(props: HeaderViewProps) => ReactNode` | - |
| postMenuData | 在显示前对菜单数据进行查看，修改不会触发重新渲染 | `(menuData: MenuDataItem[]) => MenuDataItem[]` | - |
| menuItemRender | 自定义菜单项的 render 方法 | - |
| subMenuItemRender | 自定义拥有子菜单菜单项的 render 方法 | - |
| menuDataRender | menuData 的 render 方法，用来自定义 menuData | `(menuData: MenuDataItem[]) => MenuDataItem[]` | - |
| breadcrumbRender | 自定义面包屑的数据 | `(route)=>route` | - |
| breadcrumbProps | 传递到 antd Breadcrumb 组件的 props, 参考 [面包屑](https://ant.design/components/breadcrumb-cn/) | `breadcrumbProps` | undefined |
| route | 用于生成菜单和面包屑。Umi 的 Layout 会自动带有 | - |
| disableMobile | 禁止自动切换到移动页面 | `boolean` | false |
| ErrorBoundary | 自带了错误处理功能，防止白屏，`ErrorBoundary=false` 关闭默认错误边界 | `ReactNode` | 内置 ErrorBoundary |
| links | 显示在菜单右下角的快捷操作 | `ReactNode[]` | - |
| menuProps | 传递到 antd menu 组件的 props, 参考 [导航菜单](https://ant.design/components/menu-cn/) | `MenuProps` | undefined |
| waterMarkProps | 配置水印，水印是 PageContainer 的功能，layout 只是透传给 PageContainer | - |

### pro-components 的 ProLayout - menu 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | menu 是否使用国际化，还需要 formatMessage 的配合。 | `boolean` | `true` |
| defaultOpenAll | 默认打开所有的菜单项，要注意只有 layout 挂载之前生效，异步加载菜单是不支持的 | `boolean` | `false` |
| ignoreFlatMenu | 是否忽略手动折叠过的菜单状态，结合 defaultOpenAll 可实现折叠按钮切换后，同样可以展开所有子菜单 | `boolean` | `false` |
| type | 菜单的类型 | `sub` \| `group` | `group` |
| autoClose | 选中菜单是否自动关闭菜单 | `boolean` | `true` |
| loading | 菜单是否正在加载中 | `boolean` | `false` |
| onLoadingChange | 菜单的加载状态变更 | `(loading)=>void` | - |
| request | 远程加载菜单的方法，会自动修改 loading 状态 | `(params,defaultMenuDat) => Promise<MenuDataItem[]>` | - |

### pro-components 的 ProLayout - SettingDrawer 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| collapse | 控制 SettingDrawer 的收起和展开 | `boolean` | - |
| onCollapseChange | SettingDrawer 的折叠收起事件 | `(collapsed: boolean) => void` | - |
| settings | layout 的设置 | - |
| onSettingChange | `(settings: [`Settings`](#Settings) ) => void` | - |
| hideHintAlert | 删除下方的提示信息 | `boolean` | - |
| hideCopyButton | 不展示 copy 功能 | `boolean` | - |
| disableUrlParams | 禁止同步设置到查询参数 | `boolean` | `false` |
| enableDarkTheme | 打开黑色主题切换功能 ｜ `boolean` | `false` |
| colorList | 自带的颜色切换系统 (ColorList 的 title 会作为 Tooltip 显示) ｜ `{key,color,title?}[]` | `ColorList` |

### pro-components 的 ProLayout - PageLoading 有哪些配置？

| 参数                            | 说明 | 类型 |
| ------------------------------- | ---- | ---- |
| 支持所有的 antd `Spin` 组件参数 | -    | -    |

### pro-components 的 ProLayout - getMenuData 有哪些配置？

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- |
| routes | 路由的配置信息 | - |
| menu | menu 的配置项，默认 `{locale: true}` | `{ locale: boolean }` | - |
| menuDataRender | menuData 的 render 方法，用来自定义 menuData | `(menuData: MenuDataItem[]) => MenuDataItem[]` | - |
| formatMessage | react-intl 的 formatMessage 方法 | `(data: { id: any; defaultMessage?: string }) => string;` | - |

### pro-components 的 ProLayout - getPageTitle 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pathname | 当前的 pathname | location.pathname | - |
| breadcrumb | MenuDataItem 的合集 | `{ [path: string]: MenuDataItem }` | - |
| menu | menu 的配置项，默认 `{locale: true}` | `{ locale: boolean }` | - |
| title | title 的类型 | string | 'Ant Design Pro' |
| formatMessage | react-intl 的 formatMessage 方法 | `(data: { id: any; defaultMessage?: string }) => string;` | - |

### pro-components 的 ProLayout - GridContent 有哪些配置？

| 参数         | 说明     | 类型               | 默认值 |
| ------------ | -------- | ------------------ | ------ |
| contentWidth | 内容模式 | `Fluid` \| `Fixed` | -      |

### pro-components 的 ProLayout - Layout 的 token 有哪些配置？

| token | 说明 | 默认值 |
| --- | --- | --- |
| bgLayout | layout 的背景颜色 | `linear-gradient(${antdToken.colorBgContainer}, ${antdToken.colorBgLayout} 28%)` |
| colorTextAppListIcon | 跨站点应用的图标颜色 | `#666` |
| colorTextAppListIconHover | 跨站点应用的图标 hover 颜色 | `rgba(0, 0, 0, 0.65)` |
| colorBgAppListIconHover | 跨站点应用的图标 hover 背景颜色 | `rgba(0, 0, 0, 0.04)` |

### pro-components 的 ProLayout - Sider Token 有哪些配置？

| token | 说明 | 默认值 |
| --- | --- | --- |
| colorMenuBackground | menu 的背景颜色 | `transparent` |
| colorTextMenuTitle | sider 的标题字体颜色 | `colorTextHeading` |
| colorMenuItemDivider | menuItem 分割线的颜色 | `colorSplit` |
| colorTextMenu | menuItem 的字体颜色 | `colorText` |
| colorTextMenuSecondary | menu 的二级字体颜色，比如 footer 和 action 的 icon | `colorText` |
| colorTextMenuSelected | menuItem 的选中字体颜色 | `rgb(0,0,0)` |
| colorTextMenuActive | menuItem hover 的选中字体颜色 | `rgba(0, 0, 0, 0.85)` |
| colorTextMenuItemHover | menuItem 的 hover 字体颜色 | `rgba(255,255,255,0.75)` |
| colorBgMenuItemHover | menuItem 的 hover 背景颜色 | `rgba(90, 75, 75, 0.03)` |
| colorBgMenuItemSelected | menuItem 的选中背景颜色 | `rgba(0, 0, 0, 0.04)` |
| colorBgMenuItemCollapsedElevated | 收起 menuItem 的弹出菜单背景颜色 | `transparent` |
| colorBgCollapsedButton | 展开收起按钮背景颜色 | `#fff` |
| colorTextCollapsedButton | 展开收起按钮字体颜色 | `colorTextMenuSecondary` |
| colorTextCollapsedButtonHover | 展开收起按钮 hover 时字体颜色 | `colorTextMenu` |

### pro-components 的 ProLayout - Header Token 有哪些配置？

| token | 说明 | 默认值 |
| --- | --- | --- |
| colorBgHeader | header 的背景颜色 | `rgba(240, 242, 245, 0.4)` |
| colorHeaderTitle | sider 的标题字体颜色 | `colorTextHeading` |
| colorTextMenu | menuItem 的字体颜色 | `colorText` |
| colorTextMenuSecondary | menu 的二级字体颜色，比如 footer 和 action 的 icon | `colorText` |
| colorTextMenuSelected | menuItem 的选中字体颜色 | `rgb(0,0,0)` |
| colorTextMenuActive | menuItem hover 的选中字体颜色 | `rgba(0, 0, 0, 0.85)` |
| colorBgMenuItemHover | menuItem 的 hover 背景颜色 | `rgba(90, 75, 75, 0.03)` |
| colorBgMenuItemSelected | menuItem 的选中背景颜色 | `rgba(0, 0, 0, 0.04)` |
| colorTextRightActionsItem | 右上角字体颜色 | `colorTextSecondary` |
| colorBgRightActionsItemHover | 右上角选中的 hover 颜色 | `rgba(0, 0, 0, 0.03)` |
| heightLayoutHeader | header 高度 | 56 |

### pro-components 的 ProLayout - pageContainer Token 有哪些配置？

| token | 说明 | 默认值 |
| --- | --- | --- |
| paddingBlockPageContainerContent | pageContainer 自带的 padding block | `24` |
| paddingInlinePageContainerContent | pageContainer 自带的 padding inline | `40` |
| colorBgPageContainer | pageContainer 的背景颜色 | `transparent` |
| colorBgPageContainerFixed | pageContainer 被固定时的背景颜色 | `#FFF` |

## pro-components 的 Layout 有哪些配置？

#### ProLayout - 基础参数

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| width | 水印的宽度 | number | 120 | 2.2.0 |
| height | 水印的高度 | number | 64 | 2.2.0 |
| rotate | 水印绘制时，旋转的角度，单位 ° | number | -22 | 2.2.0 |
| image | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | `string` | - | 2.2.0 |
| zIndex | 追加的水印元素的 z-index | number | 9 | 2.2.0 |
| content | 水印文字内容 | `string` \| `string[]` | - | 2.2.0 |
| fontColor | 水印文字颜色 | `string` | `rgba(0,0,0,.15)` | 2.2.0 |
| fontSize | 文字大小 | `string` \| `number` | 16 | 2.2.0 |

#### ProLayout - 高级参数

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| markStyle | 水印层的样式 | React.CSSProperties | - | 2.3.0 |
| markClassName | 水印层的类名 | string | - | 2.3.0 |
| gapX | 水印之间的水平间距 | number | 212 | 2.4.0 |
| gapY | 水印之间的垂直间距 | number | 222 | 2.4.0 |
| offsetLeft | 水印在 canvas 画布上绘制的水平偏移量，正常情况下，水印绘制在中间位置，即 `offsetLeft = gapX / 2` | number | `offsetLeft = gapX / 2` | 2.4.0 |
| offsetTop | 水印在 canvas 画布上绘制的垂直偏移量，正常情况下，水印绘制在中间位置，即 `offsetTop = gapY / 2` | number | `offsetTop = gapY / 2` | 2.4.0 |

### pro-components 的 ProLayout - 基础参数 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| width | 水印的宽度 | number | 120 | 2.2.0 |
| height | 水印的高度 | number | 64 | 2.2.0 |
| rotate | 水印绘制时，旋转的角度，单位 ° | number | -22 | 2.2.0 |
| image | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | `string` | - | 2.2.0 |
| zIndex | 追加的水印元素的 z-index | number | 9 | 2.2.0 |
| content | 水印文字内容 | `string` \| `string[]` | - | 2.2.0 |
| fontColor | 水印文字颜色 | `string` | `rgba(0,0,0,.15)` | 2.2.0 |
| fontSize | 文字大小 | `string` \| `number` | 16 | 2.2.0 |

### pro-components 的 ProLayout - 高级参数 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| markStyle | 水印层的样式 | React.CSSProperties | - | 2.3.0 |
| markClassName | 水印层的类名 | string | - | 2.3.0 |
| gapX | 水印之间的水平间距 | number | 212 | 2.4.0 |
| gapY | 水印之间的垂直间距 | number | 222 | 2.4.0 |
| offsetLeft | 水印在 canvas 画布上绘制的水平偏移量，正常情况下，水印绘制在中间位置，即 `offsetLeft = gapX / 2` | number | `offsetLeft = gapX / 2` | 2.4.0 |
| offsetTop | 水印在 canvas 画布上绘制的垂直偏移量，正常情况下，水印绘制在中间位置，即 `offsetTop = gapY / 2` | number | `offsetTop = gapY / 2` | 2.4.0 |

## pro-components 的 Layout 有哪些配置？

#### ProLayout - API

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- | --- |
| avatar | 标题栏旁的头像 | - |
| backIcon | 自定义 back icon ，如果为 false 不渲染 back icon | ReactNode \| boolean | \<ArrowLeft /> |
| breadcrumb | 面包屑的配置 | - |
| breadcrumbRender | 自定义面包屑区域的内容 | `(props, originBreadcrumb) => ReactNode` | - | 4.11.0 |
| extra | 操作区，位于 title 行的行尾 | ReactNode | - |
| footer | PageHeader 的页脚，一般用于渲染 TabBar | ReactNode | - |
| ghost | pageHeader 的类型，将会改变背景颜色 | boolean | true |
| subTitle | 自定义的二级标题文字 | ReactNode | - |
| tags | title 旁的 tag 列表 | - |
| title | 自定义标题文字 | ReactNode | - |
| onBack | 返回按钮的点击事件 | () => void | - |

### pro-components 的 ProLayout - API 有哪些配置？

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- | --- |
| avatar | 标题栏旁的头像 | - |
| backIcon | 自定义 back icon ，如果为 false 不渲染 back icon | ReactNode \| boolean | \<ArrowLeft /> |
| breadcrumb | 面包屑的配置 | - |
| breadcrumbRender | 自定义面包屑区域的内容 | `(props, originBreadcrumb) => ReactNode` | - | 4.11.0 |
| extra | 操作区，位于 title 行的行尾 | ReactNode | - |
| footer | PageHeader 的页脚，一般用于渲染 TabBar | ReactNode | - |
| ghost | pageHeader 的类型，将会改变背景颜色 | boolean | true |
| subTitle | 自定义的二级标题文字 | ReactNode | - |
| tags | title 旁的 tag 列表 | - |
| title | 自定义标题文字 | ReactNode | - |
| onBack | 返回按钮的点击事件 | () => void | - |

## pro-components 的 Layout 有哪些配置？

#### ProLayout - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 内容区 | ReactNode | - |
| extraContent | 额外内容区，位于 content 的右侧 | ReactNode | - |
| tabList | tab 标题列表 | `{key: string, tab: ReactNode}[]` | - |
| tabActiveKey | 当前高亮的 tab 项 | string | - |
| onTabChange | 切换面板的回调 | `(key) => void` | - |
| tabBarExtraContent | tab bar 上额外的元素 | `React.ReactNode` | - |
| header | `PageHeaderProps` | - |
| ghost | 配置头部区域的背景颜色为透明 | boolean | false |
| fixedHeader | 固定 pageHeader 的内容到顶部，如果页面内容较少，最好不要使用，会有严重的遮挡问题 | `boolean` | - |
| affixProps | 固钉的配置，与 antd 完全相同 | `AffixProps` | - |
| footer | 悬浮在底部的操作栏，传入一个数组，会自动加空格 | `ReactNode[]` | - |
| waterMarkProps | 配置水印，Layout 会透传给 PageContainer，但是以 PageContainer 的配置优先 | - |
| tabProps | Tabs 的相关属性，只有卡片样式的页签支持新增和关闭选项。使用 `closable={false}` 禁止关闭 | - |

#### ProLayout - FooterToolbar

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extra | 额外内容区，位于 content 的右侧 | `ReactNode` | - |
| children | 内容区域 | `ReactNode`\|`ReactNode[]` | - |

### pro-components 的 ProLayout - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 内容区 | ReactNode | - |
| extraContent | 额外内容区，位于 content 的右侧 | ReactNode | - |
| tabList | tab 标题列表 | `{key: string, tab: ReactNode}[]` | - |
| tabActiveKey | 当前高亮的 tab 项 | string | - |
| onTabChange | 切换面板的回调 | `(key) => void` | - |
| tabBarExtraContent | tab bar 上额外的元素 | `React.ReactNode` | - |
| header | `PageHeaderProps` | - |
| ghost | 配置头部区域的背景颜色为透明 | boolean | false |
| fixedHeader | 固定 pageHeader 的内容到顶部，如果页面内容较少，最好不要使用，会有严重的遮挡问题 | `boolean` | - |
| affixProps | 固钉的配置，与 antd 完全相同 | `AffixProps` | - |
| footer | 悬浮在底部的操作栏，传入一个数组，会自动加空格 | `ReactNode[]` | - |
| waterMarkProps | 配置水印，Layout 会透传给 PageContainer，但是以 PageContainer 的配置优先 | - |
| tabProps | Tabs 的相关属性，只有卡片样式的页签支持新增和关闭选项。使用 `closable={false}` 禁止关闭 | - |

### pro-components 的 ProLayout - FooterToolbar 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extra | 额外内容区，位于 content 的右侧 | `ReactNode` | - |
| children | 内容区域 | `ReactNode`\|`ReactNode[]` | - |

## pro-components 的 Form 有哪些配置？

#### ProForm - 何时使用 ProForm？

| 布局 |
| --- |
| 标准 Form，增加了 `onFinish` 中自动 `loading` 和根据 `request` 自动获取默认值的功能。 |
| 在 ProForm 的基础上增加了 `trigger` ，无需维护 `visible` 状态。 |
| 一般用于作为筛选表单，需要配合其他数据展示组件使用。 |
| 一般用于作为行内内置的筛选，比如卡片操作栏和表格操作栏。 |
| 分步表单，需要配置 StepForm 使用。 |

#### ProForm - ProForm

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onFinish | 提交表单且数据验证成功后回调事件，同 antd 4 `Form` 组件 API | `(values)=>Promise<void>` | - |
| onReset | 点击重置按钮的回调 | `(e)=>void` | - |
| submitter | 提交按钮相关配置 | `boolean` \| `SubmitterProps` | `true` |
| syncToUrl | 同步参数到 url 上，url 只支持 string，在使用之前最好读一下[url 中的参数类型](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) | `true` \| `(values,type)=>values` | - |
| syncToInitialValues | 同步结果到 initialValues，默认为 true，如果为 false，form.reset 的时候将会忽略从 url 上获取的数据 | `boolean` | `true` |
| dateFormatter | 自动格式化数据，主要是 moment 的表单，支持 string 和 number 两种模式，此外还支持指定函数进行格式化。 | `string\| number \| ((value: Moment, valueType: string) => string \| number) \| false` | string |
| omitNil | ProForm 会自动清空 null 和 undefined 的数数据，如果你约定了 nil 代表某种数据，可以设置为 false 关闭此功能 | `boolean` | true |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| request | 发起网络请求的参数，返回值会覆盖给 initialValues | `(params)=>Promise<data>` | - |
| isKeyPressSubmit | 是否使用回车提交 | `boolean` | - |
| formRef | 获取表单所使用的 form | `MutableRefObject<Instance<T>>` | - |
| autoFocusFirstInput | 自动 focus 表单第一个输入框 | `boolean` | - |
| `grid` | 开启栅格化模式，宽度默认百分比，请使用 `colProps` 控制宽度 [查看示例](/components/form#栅格化布局) | `boolean` | - |
| rowProps | 开启 `grid` 模式时传递给 `Row`, 仅在`ProFormGroup`, `ProFormList`, `ProFormFieldSet` 中有效 | { gutter: 8 } |
| 注意 `LightFilter` 和 `QueryFilter` 仅支持除 `wrapperCol` \| `labelCol` \| `layout` 外的其他 antd `Form` 组件参数 | - | - |

#### ProForm - ProForm.Group

| 参数     | 说明                 | 类型              | 默认值 |
| -------- | -------------------- | ----------------- | ------ |
| title    | 标题                 | `string`          | -      |
| children | 表单控件或者其他元素 | `React.ReactNode` | -      |

#### ProForm - submitter

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onSubmit | 提交方法 | `()=>void` | - |
| onReset | 重置方法 | `()=>void` | - |
| searchConfig | 搜索的配置，一般用来配置文本 | `{resetText,submitText}` | - |
| submitButtonProps | 提交按钮的 props | - |
| resetButtonProps | 重置按钮的 props | - |
| render | 自定义操作的渲染 | `false`\|`(props,dom:JSX[])=>ReactNode[]` | - |

#### ProForm - formRef

| 方法名 | 使用描述 |
| --- | --- |
| `getFieldsFormatValue` | 使用方法与 `FormInstance` 的 `getFieldsValue` 方法相同，将返回格式化后的所有数据 |
| `getFieldFormatValue` | 使用方法与 `FormInstance` 的 `getFieldValue` 方法相同，将返回格式化后的指定数据 |
| `validateFieldsReturnFormatValue` | 使用方法与 `FormInstance` 的 `validateFields` 方法相同，验证通过后将返回格式化后的所有数据 |

### pro-components 的 ProForm - 何时使用 ProForm？ 有哪些配置？

| 布局 |
| --- |
| 标准 Form，增加了 `onFinish` 中自动 `loading` 和根据 `request` 自动获取默认值的功能。 |
| 在 ProForm 的基础上增加了 `trigger` ，无需维护 `visible` 状态。 |
| 一般用于作为筛选表单，需要配合其他数据展示组件使用。 |
| 一般用于作为行内内置的筛选，比如卡片操作栏和表格操作栏。 |
| 分步表单，需要配置 StepForm 使用。 |

### pro-components 的 ProForm - ProForm 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onFinish | 提交表单且数据验证成功后回调事件，同 antd 4 `Form` 组件 API | `(values)=>Promise<void>` | - |
| onReset | 点击重置按钮的回调 | `(e)=>void` | - |
| submitter | 提交按钮相关配置 | `boolean` \| `SubmitterProps` | `true` |
| syncToUrl | 同步参数到 url 上，url 只支持 string，在使用之前最好读一下[url 中的参数类型](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) | `true` \| `(values,type)=>values` | - |
| syncToInitialValues | 同步结果到 initialValues，默认为 true，如果为 false，form.reset 的时候将会忽略从 url 上获取的数据 | `boolean` | `true` |
| dateFormatter | 自动格式化数据，主要是 moment 的表单，支持 string 和 number 两种模式，此外还支持指定函数进行格式化。 | `string\| number \| ((value: Moment, valueType: string) => string \| number) \| false` | string |
| omitNil | ProForm 会自动清空 null 和 undefined 的数数据，如果你约定了 nil 代表某种数据，可以设置为 false 关闭此功能 | `boolean` | true |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| request | 发起网络请求的参数，返回值会覆盖给 initialValues | `(params)=>Promise<data>` | - |
| isKeyPressSubmit | 是否使用回车提交 | `boolean` | - |
| formRef | 获取表单所使用的 form | `MutableRefObject<Instance<T>>` | - |
| autoFocusFirstInput | 自动 focus 表单第一个输入框 | `boolean` | - |
| `grid` | 开启栅格化模式，宽度默认百分比，请使用 `colProps` 控制宽度 [查看示例](/components/form#栅格化布局) | `boolean` | - |
| rowProps | 开启 `grid` 模式时传递给 `Row`, 仅在`ProFormGroup`, `ProFormList`, `ProFormFieldSet` 中有效 | { gutter: 8 } |
| 注意 `LightFilter` 和 `QueryFilter` 仅支持除 `wrapperCol` \| `labelCol` \| `layout` 外的其他 antd `Form` 组件参数 | - | - |

### pro-components 的 ProForm - ProForm.Group 有哪些配置？

| 参数     | 说明                 | 类型              | 默认值 |
| -------- | -------------------- | ----------------- | ------ |
| title    | 标题                 | `string`          | -      |
| children | 表单控件或者其他元素 | `React.ReactNode` | -      |

### pro-components 的 ProForm - submitter 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onSubmit | 提交方法 | `()=>void` | - |
| onReset | 重置方法 | `()=>void` | - |
| searchConfig | 搜索的配置，一般用来配置文本 | `{resetText,submitText}` | - |
| submitButtonProps | 提交按钮的 props | - |
| resetButtonProps | 重置按钮的 props | - |
| render | 自定义操作的渲染 | `false`\|`(props,dom:JSX[])=>ReactNode[]` | - |

### pro-components 的 ProForm - formRef 有哪些配置？

| 方法名 | 使用描述 |
| --- | --- |
| `getFieldsFormatValue` | 使用方法与 `FormInstance` 的 `getFieldsValue` 方法相同，将返回格式化后的所有数据 |
| `getFieldFormatValue` | 使用方法与 `FormInstance` 的 `getFieldValue` 方法相同，将返回格式化后的指定数据 |
| `validateFieldsReturnFormatValue` | 使用方法与 `FormInstance` 的 `validateFields` 方法相同，验证通过后将返回格式化后的所有数据 |

## pro-components 的 Form 有哪些配置？

#### ProForm - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前表单的步骤数，从 `0` 开始 | `number` | 0 |
| onCurrentChange | current 发生改变的事件 | `(current:number)=>void` | - |
| onFinish | 表单最后一步提交成功触发，如果返回`true`就会自动重置表单（包括`StepForm`变回第一步） | `(values:T)=>void \| boolean` | - |
| stepsProps | StepsForm 自带的 Steps 的 props，使用方式与 [antd](https://ant.design/components/steps-cn/) 相同，但是去掉了 current 和 onChange | - |
| stepFormRender | 自定义当前展示的表单，返回 dom 在表单内部 | `(form) => ReactNode` | - |
| stepsFormRender | 自定义整个表单区域，返回的 dom 在表单的外部 | `(form,submitter) => ReactNode` | - |
| stepsRender | 自定义步骤器 | `(steps,dom)=>ReactNode` | - |
| formRef | StepForm action 的引用，便于自定义触发 | `MutableRefObject<FormInstance>` | - |

#### ProForm - StepForm

| 参数     | 说明             | 类型                         | 默认值 |
| -------- | ---------------- | ---------------------------- | ------ |
| onFinish | 表单提交成功触发 | `(values:T)=>Promise<false>` | -      |

### pro-components 的 ProForm - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前表单的步骤数，从 `0` 开始 | `number` | 0 |
| onCurrentChange | current 发生改变的事件 | `(current:number)=>void` | - |
| onFinish | 表单最后一步提交成功触发，如果返回`true`就会自动重置表单（包括`StepForm`变回第一步） | `(values:T)=>void \| boolean` | - |
| stepsProps | StepsForm 自带的 Steps 的 props，使用方式与 [antd](https://ant.design/components/steps-cn/) 相同，但是去掉了 current 和 onChange | - |
| stepFormRender | 自定义当前展示的表单，返回 dom 在表单内部 | `(form) => ReactNode` | - |
| stepsFormRender | 自定义整个表单区域，返回的 dom 在表单的外部 | `(form,submitter) => ReactNode` | - |
| stepsRender | 自定义步骤器 | `(steps,dom)=>ReactNode` | - |
| formRef | StepForm action 的引用，便于自定义触发 | `MutableRefObject<FormInstance>` | - |

### pro-components 的 ProForm - StepForm 有哪些配置？

| 参数     | 说明             | 类型                         | 默认值 |
| -------- | ---------------- | ---------------------------- | ------ |
| onFinish | 表单提交成功触发 | `(values:T)=>Promise<false>` | -      |

## pro-components 的 Form 有哪些配置？

#### ProForm - API

| 字段名称 | 类型 |
| --- | --- | --- |
| `layoutType` | 使用的表单布局模式 |
| `steps` | `StepFormProps[]` | `layoutType=steps`中的分步表单配置，需要配置 columns 为数组使用 |
| `columns` | 表单的定义，一般是 json 对象，如果是分步表单，需要使用 json 数组来生成多个表单 |
| `shouldUpdate` | `(newValues: Record<string, any>, oldValues: Record<string, any>) => boolean \| boolean` | 细粒化控制是否渲染。<br /> 为`true`时会自动重新渲染表单项。<br /> 为`false`时不会更新表单项但可以使用[dependencies 触发更新](#结合-shouldupdatefalse-和-dependencies-触发更新)，<br /> 为`function` 时根据返回值判断是否重新渲染表单项，等同直接赋值 `true` 或 `false` [参考示例](#动态控制是否重渲染) |

#### ProForm - ProFormLayoutType

| 字段名称                |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `Form`                  |
| `ModalForm`             | 弹框表单，配置之后支持 [ModalForm](/components/modal-form) 的所有配置                                                                   |
| `DrawerForm`            | 抽屉表单，配置之后支持 [DrawerForm](/components/modal-form) 的所有配置                                                                  |
| `StepsForm`\|`StepForm` | 配置之后为分步表单，有两种模式一种使用 `steps` 和 `columns` 来生成，一种是通过 `layoutType=StepsForm` 嵌套 `layoutType=StepForm` 来实现 |
| `LightFilter`           | 轻量筛选，配置之后支持 [`LightFilter`](/components/query-filter) 的所有配置                                                             |
| `QueryFilter`           | 查询表单，配置之后支持 [`QueryFilter`](/components/query-filter) 的所有配置                                                             |
| `Embed`                 | 内嵌模式，只生成表单项，不生成 Form 可以混合使用                                                                                        |

#### ProForm - Schema 定义

| 字段名称 | 类型 | 说明 |
| --- | --- | --- |
| `key` | `React.key` | 确定这个列的唯一值，一般用于 dataIndex 重复的情况 |
| `dataIndex` | `React.key` \| `React.key[]` | 与实体映射的 key，数组会被转化 `[a,b] => Entity.a.b` |
| `valueType` | `ProFieldValueType` | 数据的渲渲染方式，我们自带了一部分，你也可以自定义 valueType |
| `title` | `ReactNode` \|`(props,type,dom)=> ReactNode` | 标题的内容，在 form 中是 label |
| `tooltip` | `string` | 会在 title 旁边展示一个 icon，鼠标浮动之后展示 |
| `valueEnum` | `(Entity)=> ValueEnum` \| `ValueEnum` | 支持 object 和 Map，Map 是支持其他基础类型作为 key |
| `fieldProps` | `(form,config)=>fieldProps`\| `fieldProps` | 传给渲染的组件的 props，自定义的时候也会传递 |
| `formItemProps` | `(form,config)=>formItemProps` \| `formItemProps` | 传递给 Form.Item 的配置 |
| `formItemProps.rules` | `Rule[]` | 表单项的校验规则。需要注意的是，如果当前表单项为`formList`时，此规则仅校验列表是否为空，且仅接受元组`[{required: boolean, message: string}]`，用于开启和关闭非空校验及指定空列表提示消息 |
| `proFieldProps` | `proFieldProps` | 设置到 `ProField` 上面的 `props`，内部属性 |
| `renderText` | `(text: any, record: Entity, index: number, action: ProCoreActionType) => any` | 修改的数据是会被 valueType 定义的渲染组件消费 |
| `render` | `(dom,entity,index, action, schema) => React.ReactNode` | 自定义只读模式的 dom,`render` 方法只管理的只读模式，编辑模式需要使用 `renderFormItem` |
| `renderFormItem` | `(schema,config,form) => React.ReactNode` | 自定义编辑模式，返回一个 ReactNode，会自动包裹 value 和 onChange。 请使用 dependency 组件控制是否渲染列 |
| `request` | `(params,props) => Promise<{label,value}[]>` | 从远程请求网络数据，一般用于选择类组件 |
| `params` | `Record<string, any>` | 额外传递给 `request` 的参数，组件不做处理，但是变化会引起`request` 重新请求数据 |
| `dependencies` | `string \| number \| (string \| number)[]` | 所依赖的 values 变化后，触发 renderFormItem，fieldProps，formItemProps 重新执行，并把 values 注入到 params 里 [示例](#使用-dependencies-触发-fieldpropsformitempropsrenderformitem-更新) |
| `hideInDescriptions` | `boolean` | 在 descriptions 中隐藏 |
| `hideInForm` | `boolean` | 在 Form 中隐藏 |
| `hideInTable` | `boolean` | 在 Table 中隐藏 |
| `hideInSearch` | `boolean` | 在 Table 的查询表格中隐藏 |
| `columns` | `ProFormColumnsType[] \| (values) => ProFormColumnsType[]` | 嵌套子项，valueType 为 dependency 时，请使用`(values) => ProFormColumnsType[]`其他情况使用 `ProFormColumnsType[]` |
| `colProps` | 在开启 grid 模式时传递给 Col |
| `rowProps` | 开启栅格化模式时传递给 Row |

### pro-components 的 ProForm - API 有哪些配置？

| 字段名称 | 类型 |
| --- | --- | --- |
| `layoutType` | 使用的表单布局模式 |
| `steps` | `StepFormProps[]` | `layoutType=steps`中的分步表单配置，需要配置 columns 为数组使用 |
| `columns` | 表单的定义，一般是 json 对象，如果是分步表单，需要使用 json 数组来生成多个表单 |
| `shouldUpdate` | `(newValues: Record<string, any>, oldValues: Record<string, any>) => boolean \| boolean` | 细粒化控制是否渲染。<br /> 为`true`时会自动重新渲染表单项。<br /> 为`false`时不会更新表单项但可以使用[dependencies 触发更新](#结合-shouldupdatefalse-和-dependencies-触发更新)，<br /> 为`function` 时根据返回值判断是否重新渲染表单项，等同直接赋值 `true` 或 `false` [参考示例](#动态控制是否重渲染) |

### pro-components 的 ProForm - ProFormLayoutType 有哪些配置？

| 字段名称                |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `Form`                  |
| `ModalForm`             | 弹框表单，配置之后支持 [ModalForm](/components/modal-form) 的所有配置                                                                   |
| `DrawerForm`            | 抽屉表单，配置之后支持 [DrawerForm](/components/modal-form) 的所有配置                                                                  |
| `StepsForm`\|`StepForm` | 配置之后为分步表单，有两种模式一种使用 `steps` 和 `columns` 来生成，一种是通过 `layoutType=StepsForm` 嵌套 `layoutType=StepForm` 来实现 |
| `LightFilter`           | 轻量筛选，配置之后支持 [`LightFilter`](/components/query-filter) 的所有配置                                                             |
| `QueryFilter`           | 查询表单，配置之后支持 [`QueryFilter`](/components/query-filter) 的所有配置                                                             |
| `Embed`                 | 内嵌模式，只生成表单项，不生成 Form 可以混合使用                                                                                        |

### pro-components 的 ProForm - Schema 定义 有哪些配置？

| 字段名称 | 类型 | 说明 |
| --- | --- | --- |
| `key` | `React.key` | 确定这个列的唯一值，一般用于 dataIndex 重复的情况 |
| `dataIndex` | `React.key` \| `React.key[]` | 与实体映射的 key，数组会被转化 `[a,b] => Entity.a.b` |
| `valueType` | `ProFieldValueType` | 数据的渲渲染方式，我们自带了一部分，你也可以自定义 valueType |
| `title` | `ReactNode` \|`(props,type,dom)=> ReactNode` | 标题的内容，在 form 中是 label |
| `tooltip` | `string` | 会在 title 旁边展示一个 icon，鼠标浮动之后展示 |
| `valueEnum` | `(Entity)=> ValueEnum` \| `ValueEnum` | 支持 object 和 Map，Map 是支持其他基础类型作为 key |
| `fieldProps` | `(form,config)=>fieldProps`\| `fieldProps` | 传给渲染的组件的 props，自定义的时候也会传递 |
| `formItemProps` | `(form,config)=>formItemProps` \| `formItemProps` | 传递给 Form.Item 的配置 |
| `formItemProps.rules` | `Rule[]` | 表单项的校验规则。需要注意的是，如果当前表单项为`formList`时，此规则仅校验列表是否为空，且仅接受元组`[{required: boolean, message: string}]`，用于开启和关闭非空校验及指定空列表提示消息 |
| `proFieldProps` | `proFieldProps` | 设置到 `ProField` 上面的 `props`，内部属性 |
| `renderText` | `(text: any, record: Entity, index: number, action: ProCoreActionType) => any` | 修改的数据是会被 valueType 定义的渲染组件消费 |
| `render` | `(dom,entity,index, action, schema) => React.ReactNode` | 自定义只读模式的 dom,`render` 方法只管理的只读模式，编辑模式需要使用 `renderFormItem` |
| `renderFormItem` | `(schema,config,form) => React.ReactNode` | 自定义编辑模式，返回一个 ReactNode，会自动包裹 value 和 onChange。 请使用 dependency 组件控制是否渲染列 |
| `request` | `(params,props) => Promise<{label,value}[]>` | 从远程请求网络数据，一般用于选择类组件 |
| `params` | `Record<string, any>` | 额外传递给 `request` 的参数，组件不做处理，但是变化会引起`request` 重新请求数据 |
| `dependencies` | `string \| number \| (string \| number)[]` | 所依赖的 values 变化后，触发 renderFormItem，fieldProps，formItemProps 重新执行，并把 values 注入到 params 里 [示例](#使用-dependencies-触发-fieldpropsformitempropsrenderformitem-更新) |
| `hideInDescriptions` | `boolean` | 在 descriptions 中隐藏 |
| `hideInForm` | `boolean` | 在 Form 中隐藏 |
| `hideInTable` | `boolean` | 在 Table 中隐藏 |
| `hideInSearch` | `boolean` | 在 Table 的查询表格中隐藏 |
| `columns` | `ProFormColumnsType[] \| (values) => ProFormColumnsType[]` | 嵌套子项，valueType 为 dependency 时，请使用`(values) => ProFormColumnsType[]`其他情况使用 `ProFormColumnsType[]` |
| `colProps` | 在开启 grid 模式时传递给 Col |
| `rowProps` | 开启栅格化模式时传递给 Row |

## pro-components 的 Form 有哪些配置？

#### ProForm - QueryFilter

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| collapsed | 是否折叠超出的表单项，用于受控模式 | `boolean` | - |
| defaultCollapsed | 默认状态下是否折叠超出的表单项 | `boolean` | true |
| onCollapse | 切换表单折叠状态时的回调 | `(collapsed)=>void` | - |
| hideRequiredMark | 隐藏所有表单项的必选标记，**默认隐藏** | `boolean` | true |
| submitterColSpanProps | 提交按钮所在 col 的 props | ColProps | - |
| defaultColsNumber | 自定义折叠状态下默认显示的表单控件数量，没有设置或小于 0，则显示一行控件；数量大于等于控件数量则隐藏展开按钮 | `number` | - |
| labelWidth | label 宽度 | `number` \| `'auto'` | `80` |
| span | 表单项宽度 | `number[0 - 24]` | - |
| split | 每一行是否有分割线 | `boolean` | - |
| preserve | 是否能够查询收起的数据，如果设置为 false，收起后的表单数据将会丢失 | `boolean` | true |

#### ProForm - 默认布局时的规则

| 容器宽度断点          | 单行展示表单列数（包含操作区域） | 默认布局     |
| --------------------- | -------------------------------- | ------------ |
| `≧ 1352px`            | 4 列                             | `horizontal` |
| `≧ 1062px`            | 3 列                             | `horizontal` |
| `≧ 701px && < 1063px` | 3 列                             | `horizontal` |
| `≧ 513px && < 701px`  | 2 列                             | `vertical`   |
| `< 513px`             | 1 列                             | `vertical`   |

#### ProForm - 强制上下布局时的规则

| 容器宽度断点          | 单行展示表单列数（包含操作区域） |
| --------------------- | -------------------------------- |
| `≧ 1057px`            | 4 列                             |
| `≧ 785px && < 1057px` | 3 列                             |
| `≧ 513px && < 785px`  | 2 列                             |
| `< 513px`             | 1 列                             |

#### ProForm - LightFilter

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| collapse | 是否默认折叠全部字段 | `boolean` | `false` |
| collapseLabel | 折叠区域的标签 | `ReactNode` | `更多筛选 <DownOutlined/>` |
| footerRender | 底部内容，当不需要默认底部按钮时，可以设为 footer={false} | `(onClear?: () => void, onConfirm: () => void) => JSX.Element \| false)`\|`false` | - |
| placement | 选择框弹出的位置 ：`bottomLeft` `bottomRight` `topLeft` `topRight` | string | bottomLeft |

### pro-components 的 ProForm - QueryFilter 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| collapsed | 是否折叠超出的表单项，用于受控模式 | `boolean` | - |
| defaultCollapsed | 默认状态下是否折叠超出的表单项 | `boolean` | true |
| onCollapse | 切换表单折叠状态时的回调 | `(collapsed)=>void` | - |
| hideRequiredMark | 隐藏所有表单项的必选标记，**默认隐藏** | `boolean` | true |
| submitterColSpanProps | 提交按钮所在 col 的 props | ColProps | - |
| defaultColsNumber | 自定义折叠状态下默认显示的表单控件数量，没有设置或小于 0，则显示一行控件；数量大于等于控件数量则隐藏展开按钮 | `number` | - |
| labelWidth | label 宽度 | `number` \| `'auto'` | `80` |
| span | 表单项宽度 | `number[0 - 24]` | - |
| split | 每一行是否有分割线 | `boolean` | - |
| preserve | 是否能够查询收起的数据，如果设置为 false，收起后的表单数据将会丢失 | `boolean` | true |

### pro-components 的 ProForm - 默认布局时的规则 有哪些配置？

| 容器宽度断点          | 单行展示表单列数（包含操作区域） | 默认布局     |
| --------------------- | -------------------------------- | ------------ |
| `≧ 1352px`            | 4 列                             | `horizontal` |
| `≧ 1062px`            | 3 列                             | `horizontal` |
| `≧ 701px && < 1063px` | 3 列                             | `horizontal` |
| `≧ 513px && < 701px`  | 2 列                             | `vertical`   |
| `< 513px`             | 1 列                             | `vertical`   |

### pro-components 的 ProForm - 强制上下布局时的规则 有哪些配置？

| 容器宽度断点          | 单行展示表单列数（包含操作区域） |
| --------------------- | -------------------------------- |
| `≧ 1057px`            | 4 列                             |
| `≧ 785px && < 1057px` | 3 列                             |
| `≧ 513px && < 785px`  | 2 列                             |
| `< 513px`             | 1 列                             |

### pro-components 的 ProForm - LightFilter 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| collapse | 是否默认折叠全部字段 | `boolean` | `false` |
| collapseLabel | 折叠区域的标签 | `ReactNode` | `更多筛选 <DownOutlined/>` |
| footerRender | 底部内容，当不需要默认底部按钮时，可以设为 footer={false} | `(onClear?: () => void, onConfirm: () => void) => JSX.Element \| false)`\|`false` | - |
| placement | 选择框弹出的位置 ：`bottomLeft` `bottomRight` `topLeft` `topRight` | string | bottomLeft |

## pro-components 的 Form 有哪些配置？

#### ProForm - ModalForm

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 用于触发 Modal 打开的 dom，一般是 button | `ReactNode` | - |
| open | 是否打开 | `open` | - |
| onOpenChange | visible 改变时触发 | `(open:boolean)=>void` | - |
| modalProps | Modal 的 props，使用方式与 [antd](https://ant.design/components/modal-cn/) 相同。注意：不支持 'visible'，请使用全局的 visible | - |
| title | 弹框的标题 | `ReactNode` | - |
| width | 弹框的宽度 | `Number` | - |
| onFinish | 提交数据时触发，如果返回一个 true。会关掉抽屉，如果配置了 `destroyOnClose` 还会重置表单。 | `async (values)=>boolean` | - |
| submitTimeout | 提交数据时，禁用取消按钮的超时时间（毫秒）。 | `Number` | - |
| submitter | 提交按钮相关配置，使用方式与 [ProForm](https://procomponents.ant.design/components/form) 相同。 | - |

#### ProForm - DrawerForm

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 用于触发 Modal 打开的 dom，一般是 button | `ReactNode` | - |
| resize | 是否调整大小 | `{onResize,maxWidth,minWidth}` \| `Boolean` | { onResize: () => { }, maxWidth: window.innerWidth \* 0.8, minWidth: 300} |
| onOpenChange | open 改变时触发 | `(open:boolean)=>void` | - |
| drawerProps | Drawer 的 props，使用方式与 [antd](https://ant.design/components/drawer-cn/) 相同。注意：不支持 'visible'，请使用全局的 visible | - |
| title | 抽屉的标题 | `ReactNode` | - |
| width | 抽屉的宽度（受控属性，使用时权重高于 resize） | `Number` | - |
| onFinish | 提交数据时触发，如果返回一个 true。会关掉抽屉，如果配置了 `destroyOnClose` 还会重置表单。 | `async (values)=>boolean` | - |
| submitTimeout | 提交数据时，禁用取消按钮的超时时间（毫秒）。 | `Number` | - |

### pro-components 的 ProForm - ModalForm 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 用于触发 Modal 打开的 dom，一般是 button | `ReactNode` | - |
| open | 是否打开 | `open` | - |
| onOpenChange | visible 改变时触发 | `(open:boolean)=>void` | - |
| modalProps | Modal 的 props，使用方式与 [antd](https://ant.design/components/modal-cn/) 相同。注意：不支持 'visible'，请使用全局的 visible | - |
| title | 弹框的标题 | `ReactNode` | - |
| width | 弹框的宽度 | `Number` | - |
| onFinish | 提交数据时触发，如果返回一个 true。会关掉抽屉，如果配置了 `destroyOnClose` 还会重置表单。 | `async (values)=>boolean` | - |
| submitTimeout | 提交数据时，禁用取消按钮的超时时间（毫秒）。 | `Number` | - |
| submitter | 提交按钮相关配置，使用方式与 [ProForm](https://procomponents.ant.design/components/form) 相同。 | - |

### pro-components 的 ProForm - DrawerForm 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 用于触发 Modal 打开的 dom，一般是 button | `ReactNode` | - |
| resize | 是否调整大小 | `{onResize,maxWidth,minWidth}` \| `Boolean` | { onResize: () => { }, maxWidth: window.innerWidth \* 0.8, minWidth: 300} |
| onOpenChange | open 改变时触发 | `(open:boolean)=>void` | - |
| drawerProps | Drawer 的 props，使用方式与 [antd](https://ant.design/components/drawer-cn/) 相同。注意：不支持 'visible'，请使用全局的 visible | - |
| title | 抽屉的标题 | `ReactNode` | - |
| width | 抽屉的宽度（受控属性，使用时权重高于 resize） | `Number` | - |
| onFinish | 提交数据时触发，如果返回一个 true。会关掉抽屉，如果配置了 `destroyOnClose` 还会重置表单。 | `async (values)=>boolean` | - |
| submitTimeout | 提交数据时，禁用取消按钮的超时时间（毫秒）。 | `Number` | - |

## pro-components 的 Form 有哪些配置？

#### ProForm - LoginForm

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| logo | logo 的配置，支持 ReactNode 和 string | `ReactNode \| url` | - |
| title | 标题，可以配置为空 | `ReactNode` | - |
| subTitle | 二级标题，可以配置为空 | `ReactNode` | - |
| actions | 自定义额外的登录功能 | `ReactNode` |
| message | form 顶部的一个提示配置，可以配置一些错误的提示信息 | `ReactNode` | - |

#### ProForm - LoginFormPage

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| logo | logo 的配置，支持 ReactNode 和 string | `ReactNode \| url` | - |
| title | 标题，可以配置为空 | `ReactNode` | - |
| subTitle | 二级标题，可以配置为空 | `ReactNode` | - |
| actions | 自定义额外的登录功能 | `ReactNode` |
| message | form 顶部的一个提示配置，可以配置一些错误的提示信息 | `ReactNode` | - |
| backgroundImageUrl | 整个区域的背景图片配置，手机端不会展示 | `url` | - |
| activityConfig | 活动的配置，包含 title，subTitle，action，分别代表标题，次标题和行动按钮，也可配置 style 来控制区域的样式 | `{title,subTitle,action,style}` | - |

### pro-components 的 ProForm - LoginForm 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| logo | logo 的配置，支持 ReactNode 和 string | `ReactNode \| url` | - |
| title | 标题，可以配置为空 | `ReactNode` | - |
| subTitle | 二级标题，可以配置为空 | `ReactNode` | - |
| actions | 自定义额外的登录功能 | `ReactNode` |
| message | form 顶部的一个提示配置，可以配置一些错误的提示信息 | `ReactNode` | - |

### pro-components 的 ProForm - LoginFormPage 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| logo | logo 的配置，支持 ReactNode 和 string | `ReactNode \| url` | - |
| title | 标题，可以配置为空 | `ReactNode` | - |
| subTitle | 二级标题，可以配置为空 | `ReactNode` | - |
| actions | 自定义额外的登录功能 | `ReactNode` |
| message | form 顶部的一个提示配置，可以配置一些错误的提示信息 | `ReactNode` | - |
| backgroundImageUrl | 整个区域的背景图片配置，手机端不会展示 | `url` | - |
| activityConfig | 活动的配置，包含 title，subTitle，action，分别代表标题，次标题和行动按钮，也可配置 style 来控制区域的样式 | `{title,subTitle,action,style}` | - |

## pro-components 的 Form 有哪些配置？

#### ProForm - ProFormList API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| itemRender | 自定义 Item，可以用来将 action 放到别的地方 | `(doms,listMeta)=> ReactNode` | - |
| creatorRecord | 新建一行的默认值 | `Record<string, any> \| () => Record<string, any>` | - |
| creatorButtonProps | 新建一行按钮的配置 | `buttonProps & { creatorButtonText:string,position:"top"\|"bottom" }` | `{creatorButtonText:"新建一行"}` |
| label | 与 From.Item 相同 | `ReactNode` | - |
| name | list 在 form 中的值，必填项 | `NamePath` | - |
| alwaysShowItemLabel | Item 中总是展示 label | `boolean` | - |
| actionRef | 当前 List 的自带操作，可以增删改查列表项 | `{add,remove,move,get}` | - |
| actionGuard | FormItem 的拦截器，包含删除和添加的拦截，可以用 actionRef 拿到当前行的值 | `{beforeAddRow:(index)=>boolean,beforeRemoveRow:(index)=>boolean}` | - |
| min | 最少条目，删除时如果当前数据条目少于该数则无法删除 | `number` | - |
| max | 最多条目，新增或复制时如果当前数据条目多于该数则无法新增或复制 | `number` | - |
| copyIconProps | 复制按钮的配置，false 可以取消 | `{ Icon?: React.FC<any>; tooltipText?: string; } \| false` | - |
| deleteIconProps | 删除按钮的配置，false 可以取消 | `{ Icon?: React.FC<any>; tooltipText?: string; } \| false` | - |
| actionRender | 自定义操作按钮 | `(field,action,defaultActionDom,count)=>React.ReactNode[]` | - |
| onAfterAdd | 新增数据后的钩子 | `(defaultValue: StoreValue, insertIndex: number, count: number) => void` | - |
| onAfterRemove | 删除数据后的钩子 | `(index: number, count: number) => void` | - |

### pro-components 的 ProForm - ProFormList API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| itemRender | 自定义 Item，可以用来将 action 放到别的地方 | `(doms,listMeta)=> ReactNode` | - |
| creatorRecord | 新建一行的默认值 | `Record<string, any> \| () => Record<string, any>` | - |
| creatorButtonProps | 新建一行按钮的配置 | `buttonProps & { creatorButtonText:string,position:"top"\|"bottom" }` | `{creatorButtonText:"新建一行"}` |
| label | 与 From.Item 相同 | `ReactNode` | - |
| name | list 在 form 中的值，必填项 | `NamePath` | - |
| alwaysShowItemLabel | Item 中总是展示 label | `boolean` | - |
| actionRef | 当前 List 的自带操作，可以增删改查列表项 | `{add,remove,move,get}` | - |
| actionGuard | FormItem 的拦截器，包含删除和添加的拦截，可以用 actionRef 拿到当前行的值 | `{beforeAddRow:(index)=>boolean,beforeRemoveRow:(index)=>boolean}` | - |
| min | 最少条目，删除时如果当前数据条目少于该数则无法删除 | `number` | - |
| max | 最多条目，新增或复制时如果当前数据条目多于该数则无法新增或复制 | `number` | - |
| copyIconProps | 复制按钮的配置，false 可以取消 | `{ Icon?: React.FC<any>; tooltipText?: string; } \| false` | - |
| deleteIconProps | 删除按钮的配置，false 可以取消 | `{ Icon?: React.FC<any>; tooltipText?: string; } \| false` | - |
| actionRender | 自定义操作按钮 | `(field,action,defaultActionDom,count)=>React.ReactNode[]` | - |
| onAfterAdd | 新增数据后的钩子 | `(defaultValue: StoreValue, insertIndex: number, count: number) => void` | - |
| onAfterRemove | 删除数据后的钩子 | `(index: number, count: number) => void` | - |

## pro-components 的 Form 有哪些配置？

#### ProForm - 组件列表

| 组件 |
| --- | --- |
| 用于输入各类文本 |
| 用于输入数字，它自带了一个格式化 (保留 2 位小数，最小值为 0)，有需要你可以关掉它。 |
| 用于输入密码 |
| 用于输入多行文本 |
| ProFormCaptcha | 用于输入验证码， 一般需要与发送验证码接口一起使用 |
| 日期选择器用于输入日期 |
| 日期 + 时间选择器，用于输入日期和时间 |
| 日期区间选择器用于输入一个日期区间 |
| 日期 + 时间区间选择器，用于输入一个日期 + 时间的区间 |
| 支持 `request` 和 `valueEnum` 两种方式来生成子项，用于从两项以上中选择一项 |
| 支持 `request` 和 `valueEnum` 两种方式来生成子项，用于从两项以上中选择一项 |
| 在 Checkbox 基础上支持了 layout，也支持 `request` 和 `valueEnum` 两种方式来生成子项 |
| 在 Radio 基础上也支持 `request` 和 `valueEnum` 两种方式来生成子项，用于单选某项，但是可以展示出来所有选项。 |
| 当用户需要在数值区间 / 自定义区间内进行选择时，可为连续或离散值。 |
| 用于输入互斥的两个选项，一般是 true 和 false |
| 按钮样式的上传文件 |
| 区域的上传文件，一般用于突出上传文件的表单中 |
| ProFormMoney | 通用金额输入组件 |
| 分段控制器 |

#### ProForm - 通用的属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | Field 的长度，我们归纳了常用的 Field 长度以及适合的场景，支持了一些枚举 "xs" , "sm" , "md" ,"lg" , "xl" | `number \| "xs" \| "sm" \| "md" \| "lg" \| "xl"` | - |
| rowProps | 开启 `grid` 模式时传递给 Row, 仅在`ProFormGroup`, `ProFormList`, `ProFormFieldSet` 中有效 | { gutter: 8 } |
| colProps | 开启 `grid` 模式时传递给 Col | { xs: 24 } |
| tooltip | 会在 label 旁增加一个 icon，悬浮后展示配置的信息 | `string \| tooltipProps` | - |
| secondary | 是否是次要控件，只针对 LightFilter 下有效 | `boolean` | `false` |
| allowClear | 支持清除，针对 LightFilter 下有效，主动设置情况下同时也会透传给 `fieldProps` | `boolean` | `true` |

#### ProForm - ProFormCaptcha

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onGetCaptcha | 点击获取验证码的事件，如果配置了 phoneName 会自动注入 | `(phone)=>Promise<any>` | - |
| onTiming | 计时数字监听 | `(count: number)=>void` | - |
| captchaProps | 获取验证码按钮的 props，与 antd 的 props 相同 | `ButtonProps` | - |
| countDown | 倒计时的秒数 | number | 60 |
| captchaTextRender | 渲染计时的文案 | `(timing: boolean, count: number) => React.ReactNode` | - |

#### ProForm - ProFormSelect

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueEnum | 当前列值的枚举 [valueEnum](/components/table#valueenum) | `Record` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| debounceTime | 防抖动时间，与 request 配合使用 | `number` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `SelectProps ` | - |

#### ProForm - ProFormTreeSelect

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueEnum | 当前列值的枚举 [valueEnum](/components/table#valueenum) | `Record` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| debounceTime | 防抖动时间，与 request 配合使用 | `number` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `TreeSelectProps` | - |

#### ProForm - ProFormCheckbox

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 与 select 相同，根据 options 生成子节点，推荐使用。 | `string[]` \| `{label:ReactNode,value:string}[]` | - |
| layout | 配置 checkbox 的样子，支持垂直`vertical` 和 `horizontal` | `horizontal` \| `vertical` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `CheckboxProps` | - |

#### ProForm - ProFormRadio.Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 与 select 相同，根据 options 生成子节点，推荐使用。 | `string[]` \| `{label:ReactNode,value:string}[]` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| radioType | 设置是按钮模式还是 radio 模式 | `default`\|`button` | `default` |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `RadioProps` | - |

#### ProForm - ProFormCascader

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 与 cascader 相同，根据 options 生成子节点，推荐使用。 | `string[]` \| `{label:ReactNode,value:string}[]` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `CascaderProps` | - |

#### ProForm - ProFormSwitch

| 参数       | 说明              | 类型          | 默认值 |
| ---------- | ----------------- | ------------- | ------ |
| fieldProps | antd 组件的 props | `SwitchProps` | -      |

#### ProForm - ProFormRate

| 参数       | 说明              | 类型        | 默认值 |
| ---------- | ----------------- | ----------- | ------ |
| fieldProps | antd 组件的 props | `RateProps` | -      |

#### ProForm - ProFormSlider

| 参数       | 说明              | 类型          | 默认值 |
| ---------- | ----------------- | ------------- | ------ |
| fieldProps | antd 组件的 props | `SliderProps` | -      |

#### ProForm - ProFormUploadDragger

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | Dragger 的图标 | `ReactNode` | InboxOutlined |
| title | Dragger 的标题 | `ReactNode` | ' 单击或拖动文件到此区域进行上传' |
| description | Dragger 的描述 | `ReactNode` | ' 支持单次或批量上传' |

#### ProForm - ProFormUploadButton

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | Button 的图标 | `ReactNode` | UploadOutlined |
| title | Button 的标题 | `ReactNode` | 单击上传 |
| max | 最大上传数量，超过最大数量就会隐藏上传按钮 | `number` | - |

#### ProForm - ProFormMoney

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | 单独设置的国际化地区值，根据不同的地区显示不同的货币符号，支持地区详见下面的地区目录 | `string` | `zh-Hans-CN` |
| customSymbol | 自定义金额符号 | `string` | - |
| numberPopoverRender | 自定义 Popover 的值，false 可以关闭他 | `((props: InputNumberProps, defaultText: string) => React.ReactNode)`\| `boolean` | false |
| numberFormatOptions | NumberFormat 的配置，文档可以查看 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) | NumberFormatOptions | - |
| min | 最小值 | `number` | - |
| max | 最大值 | `number` | - |

#### ProForm - ProFormSegmented

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueEnum | 当前列值的枚举 [valueEnum](/components/table#valueenum) | `Record` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| debounceTime | 防抖动时间，与 request 配合使用 | `number` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `Segmented` | - |

### pro-components 的 ProForm - 组件列表 有哪些配置？

| 组件 |
| --- | --- |
| 用于输入各类文本 |
| 用于输入数字，它自带了一个格式化 (保留 2 位小数，最小值为 0)，有需要你可以关掉它。 |
| 用于输入密码 |
| 用于输入多行文本 |
| ProFormCaptcha | 用于输入验证码， 一般需要与发送验证码接口一起使用 |
| 日期选择器用于输入日期 |
| 日期 + 时间选择器，用于输入日期和时间 |
| 日期区间选择器用于输入一个日期区间 |
| 日期 + 时间区间选择器，用于输入一个日期 + 时间的区间 |
| 支持 `request` 和 `valueEnum` 两种方式来生成子项，用于从两项以上中选择一项 |
| 支持 `request` 和 `valueEnum` 两种方式来生成子项，用于从两项以上中选择一项 |
| 在 Checkbox 基础上支持了 layout，也支持 `request` 和 `valueEnum` 两种方式来生成子项 |
| 在 Radio 基础上也支持 `request` 和 `valueEnum` 两种方式来生成子项，用于单选某项，但是可以展示出来所有选项。 |
| 当用户需要在数值区间 / 自定义区间内进行选择时，可为连续或离散值。 |
| 用于输入互斥的两个选项，一般是 true 和 false |
| 按钮样式的上传文件 |
| 区域的上传文件，一般用于突出上传文件的表单中 |
| ProFormMoney | 通用金额输入组件 |
| 分段控制器 |

### pro-components 的 ProForm - 通用的属性 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | Field 的长度，我们归纳了常用的 Field 长度以及适合的场景，支持了一些枚举 "xs" , "sm" , "md" ,"lg" , "xl" | `number \| "xs" \| "sm" \| "md" \| "lg" \| "xl"` | - |
| rowProps | 开启 `grid` 模式时传递给 Row, 仅在`ProFormGroup`, `ProFormList`, `ProFormFieldSet` 中有效 | { gutter: 8 } |
| colProps | 开启 `grid` 模式时传递给 Col | { xs: 24 } |
| tooltip | 会在 label 旁增加一个 icon，悬浮后展示配置的信息 | `string \| tooltipProps` | - |
| secondary | 是否是次要控件，只针对 LightFilter 下有效 | `boolean` | `false` |
| allowClear | 支持清除，针对 LightFilter 下有效，主动设置情况下同时也会透传给 `fieldProps` | `boolean` | `true` |

### pro-components 的 ProForm - ProFormCaptcha 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onGetCaptcha | 点击获取验证码的事件，如果配置了 phoneName 会自动注入 | `(phone)=>Promise<any>` | - |
| onTiming | 计时数字监听 | `(count: number)=>void` | - |
| captchaProps | 获取验证码按钮的 props，与 antd 的 props 相同 | `ButtonProps` | - |
| countDown | 倒计时的秒数 | number | 60 |
| captchaTextRender | 渲染计时的文案 | `(timing: boolean, count: number) => React.ReactNode` | - |

### pro-components 的 ProForm - ProFormSelect 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueEnum | 当前列值的枚举 [valueEnum](/components/table#valueenum) | `Record` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| debounceTime | 防抖动时间，与 request 配合使用 | `number` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `SelectProps ` | - |

### pro-components 的 ProForm - ProFormTreeSelect 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueEnum | 当前列值的枚举 [valueEnum](/components/table#valueenum) | `Record` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| debounceTime | 防抖动时间，与 request 配合使用 | `number` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `TreeSelectProps` | - |

### pro-components 的 ProForm - ProFormCheckbox 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 与 select 相同，根据 options 生成子节点，推荐使用。 | `string[]` \| `{label:ReactNode,value:string}[]` | - |
| layout | 配置 checkbox 的样子，支持垂直`vertical` 和 `horizontal` | `horizontal` \| `vertical` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `CheckboxProps` | - |

### pro-components 的 ProForm - ProFormRadio.Group 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 与 select 相同，根据 options 生成子节点，推荐使用。 | `string[]` \| `{label:ReactNode,value:string}[]` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| radioType | 设置是按钮模式还是 radio 模式 | `default`\|`button` | `default` |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `RadioProps` | - |

### pro-components 的 ProForm - ProFormCascader 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 与 cascader 相同，根据 options 生成子节点，推荐使用。 | `string[]` \| `{label:ReactNode,value:string}[]` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `CascaderProps` | - |

### pro-components 的 ProForm - ProFormSwitch 有哪些配置？

| 参数       | 说明              | 类型          | 默认值 |
| ---------- | ----------------- | ------------- | ------ |
| fieldProps | antd 组件的 props | `SwitchProps` | -      |

### pro-components 的 ProForm - ProFormRate 有哪些配置？

| 参数       | 说明              | 类型        | 默认值 |
| ---------- | ----------------- | ----------- | ------ |
| fieldProps | antd 组件的 props | `RateProps` | -      |

### pro-components 的 ProForm - ProFormSlider 有哪些配置？

| 参数       | 说明              | 类型          | 默认值 |
| ---------- | ----------------- | ------------- | ------ |
| fieldProps | antd 组件的 props | `SliderProps` | -      |

### pro-components 的 ProForm - ProFormUploadDragger 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | Dragger 的图标 | `ReactNode` | InboxOutlined |
| title | Dragger 的标题 | `ReactNode` | ' 单击或拖动文件到此区域进行上传' |
| description | Dragger 的描述 | `ReactNode` | ' 支持单次或批量上传' |

### pro-components 的 ProForm - ProFormUploadButton 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | Button 的图标 | `ReactNode` | UploadOutlined |
| title | Button 的标题 | `ReactNode` | 单击上传 |
| max | 最大上传数量，超过最大数量就会隐藏上传按钮 | `number` | - |

### pro-components 的 ProForm - ProFormMoney 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | 单独设置的国际化地区值，根据不同的地区显示不同的货币符号，支持地区详见下面的地区目录 | `string` | `zh-Hans-CN` |
| customSymbol | 自定义金额符号 | `string` | - |
| numberPopoverRender | 自定义 Popover 的值，false 可以关闭他 | `((props: InputNumberProps, defaultText: string) => React.ReactNode)`\| `boolean` | false |
| numberFormatOptions | NumberFormat 的配置，文档可以查看 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) | NumberFormatOptions | - |
| min | 最小值 | `number` | - |
| max | 最大值 | `number` | - |

### pro-components 的 ProForm - ProFormSegmented 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueEnum | 当前列值的枚举 [valueEnum](/components/table#valueenum) | `Record` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| debounceTime | 防抖动时间，与 request 配合使用 | `number` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `Segmented` | - |

## pro-components 的 Field 有哪些配置？

#### ProField - 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 需要格式化的值 | any | - |
| valueType | 格式化的类型 | ValueType | - |
| mode | 组件的模式 | - | - |
| plain | 精简模式 | - | - |
| renderFormItem | 自定义 `mode=update \| edit` 下的 dom 表现，一般用于渲染编辑框 | - | - |
| render | 自定义 `mode=read` 下的 dom 表现，只是单纯的表现形式 | - | - |

### pro-components 的 ProField - 参数 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 需要格式化的值 | any | - |
| valueType | 格式化的类型 | ValueType | - |
| mode | 组件的模式 | - | - |
| plain | 精简模式 | - | - |
| renderFormItem | 自定义 `mode=update \| edit` 下的 dom 表现，一般用于渲染编辑框 | - | - |
| render | 自定义 `mode=read` 下的 dom 表现，只是单纯的表现形式 | - | - |

## pro-components 的 Descriptions 有哪些配置？

#### ProDescriptions - ProDescriptions

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 描述列表的标题，显示在最顶部 | `ReactNode` | - |
| tooltip | 内容的补充描述，hover 后显示 | `string` | - |
| loading | 展示一个加载的骨架屏，骨架屏和 dom 不会一一对应 | `boolean` | - |
| extra | 描述列表的操作区域，显示在右上方 | `string` \| `ReactNode` | - |
| bordered | 是否展示边框 | boolean | false |
| column | 一行的 `ProDescriptionsItems` 数量，可以写成像素值或支持响应式的对象写法 `{ xs: 1, sm: 2, md: 3}` | number | 3 |
| size | 设置列表的大小。可以设置为 `middle` 、`small`，或不填（只有设置 `bordered={true}` 生效） | `default` \| `middle` \| `small` | - |
| layout | 描述布局 | `horizontal` \| `vertical` | `horizontal` |
| colon | 配置 `ProDescriptions.Item` 的 `colon` 的默认值 | boolean | true |
| request | 请求数据，不设置 columns 时 ProDescriptions.Item 需设置对应的 dataIndex | - | - |
| onRequestError | 处理 request 的错误，默认会直接抛出错误 | - | - |
| columns | 列定义，与 request 配合使用 [columns](/components/table#columns) | - | - |
| editable | 编辑的相关配置 | - |

#### ProDescriptions - editable 编辑配置

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form | 可编辑表格的 form 实例，使用 `Form.useForm` 生成后使用 | `FormInstance` | - |
| formProps | 可以配置 form 的属性，但是不支持 onFinish | - |
| editableKeys | 正在编辑的行，受控属性。 默认 `key` 会使用 `rowKey` 的配置，如果没有配置会使用 `index`，建议使用 rowKey | `Key[]` | - |
| onChange | 行数据被修改的时候触发 | `(editableKeys: Key[], editableRows: T[]) => void` | - |
| onSave | 保存一行的时候触发 | `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>` | - |
| saveText | 保存一行的文字 | `React.ReactNode` | `保存` |
| onDelete | 删除一行的时候触发 | `(key: Key, row: T) => Promise<any>` | - |
| deleteText | 删除一行的文字 | `React.ReactNode` | `删除` |
| onCancel | 取消编辑一行时触发 | `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>` | - |
| cancelText | 取消编辑一行的文字 | `React.ReactNode` | `取消` |
| actionRender | 自定义编辑模式的操作栏 | `(row: T, config: ActionRenderConfig,defaultDom) => ReactNode[]` | - |
| deletePopconfirmMessage | 删除时弹出的确认框提示消息 | `ReactNode` | `删除此项？` |
| onlyOneLineEditorAlertMessage | 只能编辑一行的的提示 | `ReactNode` | `只能同时编辑一行` |
| onlyAddOneLineAlertMessage | 只能同时新增一行的提示 | `ReactNode` | `只能新增一行` |

#### ProDescriptions - ProDescriptions.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 内容的描述 | ReactNode | - |
| tooltip | 内容的补充描述，hover 后显示 | string | - |
| ellipsis | 是否自动缩略 | `boolean` | - |
| copyable | 是否支持复制 | `boolean` | - |
| span | 包含列的数量 | number | 1 |
| valueType | 格式化的类型 | `ValueType` | - |
| valueEnum | 当前列值的枚举 [valueEnum](/components/table#valueenum) | `Record` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{[key:string`\|`number]:any}>` | - |
| dataIndex | 返回数据的 key 与 ProDescriptions 的 request 配合使用，用于配置式的定义列表 | `React.Text` \| `React.Text[]` | - |
| editable | 在编辑表格中是否可编辑的，函数的参数和 table 的 render 一样 | `false` \| `(text: any, record: T,index: number) => boolean` | true |

### pro-components 的 ProDescriptions - ProDescriptions 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 描述列表的标题，显示在最顶部 | `ReactNode` | - |
| tooltip | 内容的补充描述，hover 后显示 | `string` | - |
| loading | 展示一个加载的骨架屏，骨架屏和 dom 不会一一对应 | `boolean` | - |
| extra | 描述列表的操作区域，显示在右上方 | `string` \| `ReactNode` | - |
| bordered | 是否展示边框 | boolean | false |
| column | 一行的 `ProDescriptionsItems` 数量，可以写成像素值或支持响应式的对象写法 `{ xs: 1, sm: 2, md: 3}` | number | 3 |
| size | 设置列表的大小。可以设置为 `middle` 、`small`，或不填（只有设置 `bordered={true}` 生效） | `default` \| `middle` \| `small` | - |
| layout | 描述布局 | `horizontal` \| `vertical` | `horizontal` |
| colon | 配置 `ProDescriptions.Item` 的 `colon` 的默认值 | boolean | true |
| request | 请求数据，不设置 columns 时 ProDescriptions.Item 需设置对应的 dataIndex | - | - |
| onRequestError | 处理 request 的错误，默认会直接抛出错误 | - | - |
| columns | 列定义，与 request 配合使用 [columns](/components/table#columns) | - | - |
| editable | 编辑的相关配置 | - |

### pro-components 的 ProDescriptions - editable 编辑配置 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form | 可编辑表格的 form 实例，使用 `Form.useForm` 生成后使用 | `FormInstance` | - |
| formProps | 可以配置 form 的属性，但是不支持 onFinish | - |
| editableKeys | 正在编辑的行，受控属性。 默认 `key` 会使用 `rowKey` 的配置，如果没有配置会使用 `index`，建议使用 rowKey | `Key[]` | - |
| onChange | 行数据被修改的时候触发 | `(editableKeys: Key[], editableRows: T[]) => void` | - |
| onSave | 保存一行的时候触发 | `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>` | - |
| saveText | 保存一行的文字 | `React.ReactNode` | `保存` |
| onDelete | 删除一行的时候触发 | `(key: Key, row: T) => Promise<any>` | - |
| deleteText | 删除一行的文字 | `React.ReactNode` | `删除` |
| onCancel | 取消编辑一行时触发 | `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>` | - |
| cancelText | 取消编辑一行的文字 | `React.ReactNode` | `取消` |
| actionRender | 自定义编辑模式的操作栏 | `(row: T, config: ActionRenderConfig,defaultDom) => ReactNode[]` | - |
| deletePopconfirmMessage | 删除时弹出的确认框提示消息 | `ReactNode` | `删除此项？` |
| onlyOneLineEditorAlertMessage | 只能编辑一行的的提示 | `ReactNode` | `只能同时编辑一行` |
| onlyAddOneLineAlertMessage | 只能同时新增一行的提示 | `ReactNode` | `只能新增一行` |

### pro-components 的 ProDescriptions - ProDescriptions.Item 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 内容的描述 | ReactNode | - |
| tooltip | 内容的补充描述，hover 后显示 | string | - |
| ellipsis | 是否自动缩略 | `boolean` | - |
| copyable | 是否支持复制 | `boolean` | - |
| span | 包含列的数量 | number | 1 |
| valueType | 格式化的类型 | `ValueType` | - |
| valueEnum | 当前列值的枚举 [valueEnum](/components/table#valueenum) | `Record` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{[key:string`\|`number]:any}>` | - |
| dataIndex | 返回数据的 key 与 ProDescriptions 的 request 配合使用，用于配置式的定义列表 | `React.Text` \| `React.Text[]` | - |
| editable | 在编辑表格中是否可编辑的，函数的参数和 table 的 render 一样 | `false` \| `(text: any, record: T,index: number) => boolean` | true |

## pro-components 的 Card 有哪些配置？

#### ProCard - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 标题 | `React.ReactNode` | - |
| subTitle | 副标题 | `React.ReactNode` | - |
| tooltip | 标题右侧图标 hover 提示信息 | `string` | - |
| headStyle | 标题的 style 样式 | `CSSProperties` | - |
| bodyStyle | 内容区的 style 样式 | `CSSProperties` | - |
| extra | 右上角自定义区域 | `React.ReactNode` | - |
| layout | 内容布局，支持垂直居中 | `default` \| `center` | default |
| loading | 加载中，支持自定义 loading 样式 | `boolean` \| `ReactNode` | false |
| colSpan | 栅格布局宽度，24 栅格，支持指定宽度 px 或百分比，支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}`, 仅在嵌套的子卡片上设置有效。 | `number` \| `string` | 24 |
| gutter | 数字或使用数组形式同时设置 [水平间距，垂直间距], 支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` | `number` \| `array` | 0 |
| split | 拆分卡片的方向 | `vertical` \| `horizontal` | - |
| type | 卡片类型 | `inner` \| `default` | - |
| size | 卡片尺寸 | `default` \| `small` | - |
| actions | 卡片操作组，位置在卡片底部 | `Array&lt;ReactNode>` | - |
| direction | 指定 Flex 方向，仅在嵌套子卡片时有效，默认方向为 row 横向 | `column` | - |
| wrap | 是否支持换行，仅在嵌套子卡片时有效 | false | - | 1.12.0 |
| bordered | 是否有边框 | `boolean` | false |
| ghost | 幽灵模式，即是否取消卡片内容区域的 padding 和 卡片的背景颜色。 | `boolean` | false |
| headerBordered | 页头是否有分割线 | `boolean` | false |
| collapsed | 受控属性，是否折叠 | `boolean` | false |
| collapsible | 配置是否可折叠，受控时无效 | `boolean` | false |
| collapsibleIconRender | 替换默认折叠图标 | `({ collapsed }: { collapsed: boolean }) => React.ReactNode` | - |
| defaultCollapsed | 默认折叠，受控时无效 | `boolean` | false |
| onCollapse | 收起卡片的事件，受控时无效 | `(collapsed: boolean) => void` | - |
| tabs | 标签页配置 | 见下面 ProCardTabs | - |

#### ProCard - ProCardTabs

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前选中项 | string | - |
| type | 页签的基本样式，可选 `line`、`card`、`editable-card` 类型 | string | inline |
| onChange | 回调 | `(activeKey: string) => void;` | - |
| items | 基于 antd 拓展的页签的基本配置，必填 | `ItemsProps` | - |

#### ProCard - ItemsProps

| 参数      | 说明                 | 类型      | 默认值 |
| --------- | -------------------- | --------- | ------ |
| cardProps | ProCard 卡片属性透传 | `ProCard` | -      |

#### ProCard - ProCard.TabPane

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 对应 activeKey，用于标定是否选中和 dom 更新，一定不要重复，不然会造成表现异常 | `string` | - |
| tab | 选项卡头显示文字 | `ReactNode` | - |
| disabled | 不可用 | `boolean` | false |
| cardProps | ProCard 卡片属性透传 | `ProCard` | - |

#### ProCard - ProCard.Divider

| 参数 | 说明     | 类型                     | 默认值 |
| ---- | -------- | ------------------------ | ------ |
| type | 分隔类型 | `horizontal \| vertical` | -      |

### pro-components 的 ProCard - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 标题 | `React.ReactNode` | - |
| subTitle | 副标题 | `React.ReactNode` | - |
| tooltip | 标题右侧图标 hover 提示信息 | `string` | - |
| headStyle | 标题的 style 样式 | `CSSProperties` | - |
| bodyStyle | 内容区的 style 样式 | `CSSProperties` | - |
| extra | 右上角自定义区域 | `React.ReactNode` | - |
| layout | 内容布局，支持垂直居中 | `default` \| `center` | default |
| loading | 加载中，支持自定义 loading 样式 | `boolean` \| `ReactNode` | false |
| colSpan | 栅格布局宽度，24 栅格，支持指定宽度 px 或百分比，支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}`, 仅在嵌套的子卡片上设置有效。 | `number` \| `string` | 24 |
| gutter | 数字或使用数组形式同时设置 [水平间距，垂直间距], 支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` | `number` \| `array` | 0 |
| split | 拆分卡片的方向 | `vertical` \| `horizontal` | - |
| type | 卡片类型 | `inner` \| `default` | - |
| size | 卡片尺寸 | `default` \| `small` | - |
| actions | 卡片操作组，位置在卡片底部 | `Array&lt;ReactNode>` | - |
| direction | 指定 Flex 方向，仅在嵌套子卡片时有效，默认方向为 row 横向 | `column` | - |
| wrap | 是否支持换行，仅在嵌套子卡片时有效 | false | - | 1.12.0 |
| bordered | 是否有边框 | `boolean` | false |
| ghost | 幽灵模式，即是否取消卡片内容区域的 padding 和 卡片的背景颜色。 | `boolean` | false |
| headerBordered | 页头是否有分割线 | `boolean` | false |
| collapsed | 受控属性，是否折叠 | `boolean` | false |
| collapsible | 配置是否可折叠，受控时无效 | `boolean` | false |
| collapsibleIconRender | 替换默认折叠图标 | `({ collapsed }: { collapsed: boolean }) => React.ReactNode` | - |
| defaultCollapsed | 默认折叠，受控时无效 | `boolean` | false |
| onCollapse | 收起卡片的事件，受控时无效 | `(collapsed: boolean) => void` | - |
| tabs | 标签页配置 | 见下面 ProCardTabs | - |

### pro-components 的 ProCard - ProCardTabs 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前选中项 | string | - |
| type | 页签的基本样式，可选 `line`、`card`、`editable-card` 类型 | string | inline |
| onChange | 回调 | `(activeKey: string) => void;` | - |
| items | 基于 antd 拓展的页签的基本配置，必填 | `ItemsProps` | - |

### pro-components 的 ProCard - ItemsProps 有哪些配置？

| 参数      | 说明                 | 类型      | 默认值 |
| --------- | -------------------- | --------- | ------ |
| cardProps | ProCard 卡片属性透传 | `ProCard` | -      |

### pro-components 的 ProCard - ProCard.TabPane 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 对应 activeKey，用于标定是否选中和 dom 更新，一定不要重复，不然会造成表现异常 | `string` | - |
| tab | 选项卡头显示文字 | `ReactNode` | - |
| disabled | 不可用 | `boolean` | false |
| cardProps | ProCard 卡片属性透传 | `ProCard` | - |

### pro-components 的 ProCard - ProCard.Divider 有哪些配置？

| 参数 | 说明     | 类型                     | 默认值 |
| ---- | -------- | ------------------------ | ------ |
| type | 分隔类型 | `horizontal \| vertical` | -      |

## pro-components 的 Card 有哪些配置？

#### ProCard - StatisticCard

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | `string\|ReactNode` | - |
| extra | 卡片右上角的操作区域 | `string\|ReactNode` | - |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| bordered | 是否有边框 | boolean | true |
| chart | 图表卡片 | ReactNode | - |
| statistic | 数值统计配置，布局默认为 `vertical` | 参数见下 Statistic | - |
| chartPlacement | 图表位置，相对于 statistic 的位置 | `left \| right \| bottom` | - |
| footer | 额外指标展示 | `ReactNode` | - |

#### ProCard - Statistic

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prefix | 设置数值的前缀 | string \| ReactNode | - |
| suffix | 设置数值的后缀 | string \| ReactNode | - |
| title | 数值的标题 | string \| ReactNode | - |
| tip | 标题提示 | string\| ReactNode | - |
| value | 数值内容 | string \| number | - |
| icon | 图标 | ReactNode | - |
| status | 设置状态点，同 Badge 组件 | `Enum{ 'success', 'processing, 'default', 'error', 'warning' }` | - |
| valueStyle | 设置数值的样式 | style | - |
| description | 描述性标签 | React.ReactNode \| () => React.ReactNode | - |
| layout | 布局 | `horizontal \| vertical \| inline` | `inline` |
| trend | 趋势 | `up \| down \|` | - |

#### ProCard - Divider

| 参数 | 说明     | 类型                     | 默认值 |
| ---- | -------- | ------------------------ | ------ |
| type | 分隔类型 | `horizontal \| vertical` | -      |

### pro-components 的 ProCard - StatisticCard 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | `string\|ReactNode` | - |
| extra | 卡片右上角的操作区域 | `string\|ReactNode` | - |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| bordered | 是否有边框 | boolean | true |
| chart | 图表卡片 | ReactNode | - |
| statistic | 数值统计配置，布局默认为 `vertical` | 参数见下 Statistic | - |
| chartPlacement | 图表位置，相对于 statistic 的位置 | `left \| right \| bottom` | - |
| footer | 额外指标展示 | `ReactNode` | - |

### pro-components 的 ProCard - Statistic 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prefix | 设置数值的前缀 | string \| ReactNode | - |
| suffix | 设置数值的后缀 | string \| ReactNode | - |
| title | 数值的标题 | string \| ReactNode | - |
| tip | 标题提示 | string\| ReactNode | - |
| value | 数值内容 | string \| number | - |
| icon | 图标 | ReactNode | - |
| status | 设置状态点，同 Badge 组件 | `Enum{ 'success', 'processing, 'default', 'error', 'warning' }` | - |
| valueStyle | 设置数值的样式 | style | - |
| description | 描述性标签 | React.ReactNode \| () => React.ReactNode | - |
| layout | 布局 | `horizontal \| vertical \| inline` | `inline` |
| trend | 趋势 | `up \| down \|` | - |

### pro-components 的 ProCard - Divider 有哪些配置？

| 参数 | 说明     | 类型                     | 默认值 |
| ---- | -------- | ------------------------ | ------ |
| type | 分隔类型 | `horizontal \| vertical` | -      |

## pro-components 的 Card 有哪些配置？

#### ProCard - CheckCard

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |
| bordered | 是否显示边框 | boolean | true | 1.20.0 |
| value | 选项值 | string | - |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| size | 选择框大小，可选 `large` `small` | string | `default` |
| onChange | 变化时回调函数 | Function(checked) | - |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| title | 标题 | string \| ReactNode | - |
| description | 描述 | ReactNode | - |
| avatar | 选项元素的图片地址 | link \| ReactNode | - |
| extra | 动作区域 | 卡片右上角的操作区域 | - |
| cover | 卡片背景图片，注意使用该选项后`title`，`description`和`avatar`失效 | ReactNode | - |

#### ProCard - CheckCard.Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| multiple | 多选 | boolean | false |
| bordered | 是否显示边框 | boolean | true | 1.20.0 |
| defaultValue | 默认选中的选项 | string \| string[] | - |
| disabled | 整组失效 | boolean | false |
| loading | 当卡片组内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| options | 指定可选项 | string[] \| Array<{ title: ReactNode, value: string, description?: ReactNode, avatar?: link or ReactNode, cover?:ReactNode, disabled?: boolean }> | \[] |
| value | 指定选中的选项 | string \| string[] | - |
| size | 选择框大小，可选 `large` `small` | string | `default` |
| onChange | 变化时回调函数 | Function(checkedValue) | - |

### pro-components 的 ProCard - CheckCard 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false |
| bordered | 是否显示边框 | boolean | true | 1.20.0 |
| value | 选项值 | string | - |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| size | 选择框大小，可选 `large` `small` | string | `default` |
| onChange | 变化时回调函数 | Function(checked) | - |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| title | 标题 | string \| ReactNode | - |
| description | 描述 | ReactNode | - |
| avatar | 选项元素的图片地址 | link \| ReactNode | - |
| extra | 动作区域 | 卡片右上角的操作区域 | - |
| cover | 卡片背景图片，注意使用该选项后`title`，`description`和`avatar`失效 | ReactNode | - |

### pro-components 的 ProCard - CheckCard.Group 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| multiple | 多选 | boolean | false |
| bordered | 是否显示边框 | boolean | true | 1.20.0 |
| defaultValue | 默认选中的选项 | string \| string[] | - |
| disabled | 整组失效 | boolean | false |
| loading | 当卡片组内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| options | 指定可选项 | string[] \| Array<{ title: ReactNode, value: string, description?: ReactNode, avatar?: link or ReactNode, cover?:ReactNode, disabled?: boolean }> | \[] |
| value | 指定选中的选项 | string \| string[] | - |
| size | 选择框大小，可选 `large` `small` | string | `default` |
| onChange | 变化时回调函数 | Function(checkedValue) | - |
