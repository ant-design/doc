### pro-components 的 Table 有哪些配置？

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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标 | `ReactNode` | - |
| tooltip | tooltip 描述 | `string` | - |
| key | 操作唯一标识 | `string` | - |
| onClick | 设置被触发 | `(key: string)=>void` | - |


#### ProTable - ListToolBarMenu 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `inline` \| `dropdown` \| `tab` | `inline` |
| activeKey | 当前值 | `string` | - |
| items | 菜单项 | `{ key: string; label: ReactNode }[]` | - |
| onChange | 切换菜单的回调 | `(activeKey)=>void` | - |


#### ProTable - ListToolBarTabs 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前选中项 | `string` | - |
| items | 菜单项 | `{ key: string; tab: ReactNode }[]` | - |
| onChange | 切换菜单的回调 | `(activeKey)=>void` | - |


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


### pro-components 中 ProTable - ProTable的request属性如何使用？ 

属性: request 

描述: 获取 `dataSource` 的方法 

类型: `(params?: {pageSize,current},sort,filter) => {data,success,total}` 

默认值: -

### pro-components 中 ProTable - ProTable的params属性如何使用？ 

属性: params 

描述: 用于 `request` 查询的额外参数，一旦变化会触发重新加载 

类型: `object` 

默认值: -

### pro-components 中 ProTable - ProTable的postData属性如何使用？ 

属性: postData 

描述: 对通过 `request` 获取的数据进行处理 

类型: `(data: T[]) => T[]` 

默认值: -

### pro-components 中 ProTable - ProTable的defaultData属性如何使用？ 

属性: defaultData 

描述: 默认的数据 

类型: `T[]` 

默认值: -

### pro-components 中 ProTable - ProTable的dataSource属性如何使用？ 

属性: dataSource 

描述: Table 的数据，ProTable 推荐使用 `request` 来加载 

类型: `T[]` 

默认值: -

### pro-components 中 ProTable - ProTable的onDataSourceChange属性如何使用？ 

属性: onDataSourceChange 

描述: Table 的数据发生改变时触发 

类型: `(dataSource: T[]) => void` 

默认值: -

### pro-components 中 ProTable - ProTable的actionRef属性如何使用？ 

属性: actionRef 

描述: Table action 的引用，便于自定义触发 

类型: `MutableRefObject<ActionType>` 

默认值: -

### pro-components 中 ProTable - ProTable的formRef属性如何使用？ 

属性: formRef 

描述: 可以获取到查询表单的 form 实例，用于一些灵活的配置 

类型: `MutableRefObject<FormInstance>` 

默认值: -

### pro-components 中 ProTable - ProTable的toolBarRender属性如何使用？ 

属性: toolBarRender 

描述: 渲染工具栏，支持返回一个 dom 数组，会自动增加 margin-right 

类型: `(action) => ReactNode[]` 

默认值: -

### pro-components 中 ProTable - ProTable的onLoad属性如何使用？ 

属性: onLoad 

描述: 数据加载完成后触发，会多次触发 

类型: `(dataSource: T[]) => void` 

默认值: -

### pro-components 中 ProTable - ProTable的onLoadingChange属性如何使用？ 

属性: onLoadingChange 

描述: loading 被修改时触发，一般是网络请求导致的 

类型: `(loading:boolean)=>void` 

默认值: -

### pro-components 中 ProTable - ProTable的onRequestError属性如何使用？ 

属性: onRequestError 

描述: 数据加载失败时触发 

类型: `(error) => void` 

默认值: -

### pro-components 中 ProTable - ProTable的tableClassName属性如何使用？ 

属性: tableClassName 

描述: 封装的 table 的 className 

类型: `string` 

默认值: -

### pro-components 中 ProTable - ProTable的tableStyle属性如何使用？ 

属性: tableStyle 

描述: 封装的 table 的 style 

类型: -

### pro-components 中 ProTable - ProTable的options属性如何使用？ 

属性: options 

描述: table 工具栏，设为 false 时不显示，传入 function 会点击时触发 

类型: `{{ density?: boolean, fullScreen?: boolean | function, reload?: boolean | function, reloadIcon?: React.ReactNode, densityIcon?: React.ReactNode, setting?: boolean |` [SettingOptionType](#菜单栏-options-配置) `}}` 

默认值: `{ fullScreen: false, reload: true, density: true, setting: true }`

### pro-components 中 ProTable - ProTable的search属性如何使用？ 

属性: search 

描述: 是否显示搜索表单，传入对象时为搜索表单的配置 

类型: `false` | [SearchConfig](#search-搜索表单) 

默认值: -

### pro-components 中 ProTable - ProTable的defaultSize属性如何使用？ 

属性: defaultSize 

描述: 默认的 size 

类型: SizeType 

默认值: -

### pro-components 中 ProTable - ProTable的dateFormatter属性如何使用？ 

属性: dateFormatter 

描述: 转化 moment 格式数据为特定类型，false 不做转化 

类型: `"string"` | `"number"` | ((value: Moment, valueType: string) => string | number) | `false` 

默认值: `"string"`

### pro-components 中 ProTable - ProTable的beforeSearchSubmit属性如何使用？ 

属性: beforeSearchSubmit 

描述: 搜索之前进行一些修改 

类型: `(params:T)=>T` 

默认值: -

### pro-components 中 ProTable - ProTable的onSizeChange属性如何使用？ 

属性: onSizeChange 

描述: table 尺寸发生改变 

类型: `(size: 'default' | 'middle' | 'small') => void` 

默认值: -

### pro-components 中 ProTable - ProTable的type属性如何使用？ 

属性: type 

描述: pro-table 类型 

类型: `"form"` 

默认值: -

### pro-components 中 ProTable - ProTable的form属性如何使用？ 

属性: form 

描述: antd form 的配置 

类型: -

### pro-components 中 ProTable - ProTable的onSubmit属性如何使用？ 

属性: onSubmit 

描述: 提交表单时触发 

类型: `(params: U) => void` 

默认值: -

### pro-components 中 ProTable - ProTable的onReset属性如何使用？ 

属性: onReset 

描述: 重置表单时触发 

类型: `() => void` 

默认值: -

### pro-components 中 ProTable - ProTable的columnEmptyText属性如何使用？ 

属性: columnEmptyText 

描述: 空值时的显示，不设置时显示 `-`， false 可以关闭此功能 

类型: `string` | `false` 

默认值: false

### pro-components 中 ProTable - ProTable的tableRender属性如何使用？ 

属性: tableRender 

描述: 自定义渲染表格函数 

类型: `(props,dom,domList:{ toolbar,alert,table}) => ReactNode` 

默认值: -

### pro-components 中 ProTable - ProTable的toolbar属性如何使用？ 

属性: toolbar 

描述: 透传 `ListToolBar` 配置项 

类型: -

### pro-components 中 ProTable - ProTable的tableExtraRender属性如何使用？ 

属性: tableExtraRender 

描述: 自定义表格的主体函数 

类型: `(props: ProTableProps<T, U>, dataSource: T[]) => ReactNode;` 

默认值: -

### pro-components 中 ProTable - ProTable的manualRequest属性如何使用？ 

属性: manualRequest 

描述: 是否需要手动触发首次请求，配置为 `true` 时不可隐藏搜索表单 

类型: `boolean` 

默认值: false

### pro-components 中 ProTable - ProTable的editable属性如何使用？ 

属性: editable 

描述: 可编辑表格的相关配置 

类型: -

### pro-components 中 ProTable - ProTable的cardBordered属性如何使用？ 

属性: cardBordered 

描述: Table 和 Search 外围 Card 组件的边框 

类型: `boolean | {search?: boolean, table?: boolean}` 

默认值: false

### pro-components 中 ProTable - ProTable的ghost属性如何使用？ 

属性: ghost 

描述: 幽灵模式，即是否取消表格区域的 padding 

类型: `boolean` 

默认值: false

### pro-components 中 ProTable - ProTable的debounceTime属性如何使用？ 

属性: debounceTime 

描述: 防抖时间 

类型: `number` 

默认值: 10

### pro-components 中 ProTable - ProTable的revalidateOnFocus属性如何使用？ 

属性: revalidateOnFocus 

描述: 窗口聚焦时自动重新请求 

类型: `boolean` 

默认值: `true`

### pro-components 中 ProTable - ProTable的columnsState属性如何使用？ 

属性: columnsState 

描述: 受控的列状态，可以操作显示隐藏 

类型: `ColumnStateType` 

默认值: -

### pro-components 中 ProTable - ProTable的ErrorBoundary属性如何使用？ 

属性: ErrorBoundary 

描述: 自带了错误处理功能，防止白屏，`ErrorBoundary=false` 关闭默认错误边界 

类型: `ReactNode` 

默认值: 内置 ErrorBoundary

### pro-components 的 ProTable - RecordCreator 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| record | 需要新增的行数据，一般来说包含唯一 key | `T` | `{}` |
| position | 行增加在哪里，开始或者末尾 | `top` \| `bottom` | `bottom` |
| (...buttonProps) | antd 的 [ButtonProps](https://ant.design/components/button-cn/#API) | ButtonProps | — |


### pro-components 中 ProTable - RecordCreator的record属性如何使用？ 

属性: record 

描述: 需要新增的行数据，一般来说包含唯一 key 

类型: `T` 

默认值: `{}`

### pro-components 中 ProTable - RecordCreator的position属性如何使用？ 

属性: position 

描述: 行增加在哪里，开始或者末尾 

类型: `top` | `bottom` 

默认值: `bottom`

### pro-components 中 ProTable - RecordCreator的(...buttonProps)属性如何使用？ 

属性: (...buttonProps) 

描述: antd 的 [ButtonProps](https://ant.design/components/button-cn/#API) 

类型: ButtonProps 

默认值: —

### pro-components 的 ProTable - ColumnStateType 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 列状态的默认值，只有初次生效，并用于重置使用 | `Record<string, ColumnsState>;` | - |
| value | 列状态的值，支持受控模式 | `Record<string, ColumnsState>;` | - |
| onChange | 列状态的值发生改变之后触发 | `(value:Record<string, ColumnsState>)=>void` | - |
| persistenceKey | 持久化列的 key，用于判断是否是同一个 table | `string \| number` | - |
| persistenceType | 持久化列的类型，localStorage 设置在关闭浏览器后也是存在的，sessionStorage 关闭浏览器后会丢失 | `localStorage \| sessionStorage` | - |


### pro-components 中 ProTable - ColumnStateType的defaultValue属性如何使用？ 

属性: defaultValue 

描述: 列状态的默认值，只有初次生效，并用于重置使用 

类型: `Record<string, ColumnsState>;` 

默认值: -

### pro-components 中 ProTable - ColumnStateType的value属性如何使用？ 

属性: value 

描述: 列状态的值，支持受控模式 

类型: `Record<string, ColumnsState>;` 

默认值: -

### pro-components 中 ProTable - ColumnStateType的onChange属性如何使用？ 

属性: onChange 

描述: 列状态的值发生改变之后触发 

类型: `(value:Record<string, ColumnsState>)=>void` 

默认值: -

### pro-components 中 ProTable - ColumnStateType的persistenceKey属性如何使用？ 

属性: persistenceKey 

描述: 持久化列的 key，用于判断是否是同一个 table 

类型: `string | number` 

默认值: -

### pro-components 中 ProTable - ColumnStateType的persistenceType属性如何使用？ 

属性: persistenceType 

描述: 持久化列的类型，localStorage 设置在关闭浏览器后也是存在的，sessionStorage 关闭浏览器后会丢失 

类型: `localStorage | sessionStorage` 

默认值: -

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


### pro-components 中 ProTable - Search 搜索表单的filterType属性如何使用？ 

属性: filterType 

描述: 过滤表单类型 

类型: `'query'` | `'light'` 

默认值: `'query'`

### pro-components 中 ProTable - Search 搜索表单的searchText属性如何使用？ 

属性: searchText 

描述: 查询按钮的文本 

类型: `string` 

默认值: 查询

### pro-components 中 ProTable - Search 搜索表单的resetText属性如何使用？ 

属性: resetText 

描述: 重置按钮的文本 

类型: `string` 

默认值: 重置

### pro-components 中 ProTable - Search 搜索表单的submitText属性如何使用？ 

属性: submitText 

描述: 提交按钮的文本 

类型: `string` 

默认值: 提交

### pro-components 中 ProTable - Search 搜索表单的labelWidth属性如何使用？ 

属性: labelWidth 

描述: 标签的宽度 

类型: `'number'` | `'auto'` 

默认值: 80

### pro-components 中 ProTable - Search 搜索表单的span属性如何使用？ 

属性: span 

描述: 配置查询表单的列数 

类型: `'number'` | [`'ColConfig'`](#ColConfig) 

默认值: defaultColConfig

### pro-components 中 ProTable - Search 搜索表单的className属性如何使用？ 

属性: className 

描述: 封装的搜索 Form 的 className 

类型: `string` 

默认值: -

### pro-components 中 ProTable - Search 搜索表单的collapseRender属性如何使用？ 

属性: collapseRender 

描述: 收起按钮的 render 

类型: `((collapsed: boolean,showCollapseButton?: boolean) => ReactNode)`|`false` 

默认值: -

### pro-components 中 ProTable - Search 搜索表单的defaultCollapsed属性如何使用？ 

属性: defaultCollapsed 

描述: 默认是否收起 

类型: `boolean` 

默认值: `true`

### pro-components 中 ProTable - Search 搜索表单的collapsed属性如何使用？ 

属性: collapsed 

描述: 是否收起 

类型: `boolean` 

默认值: -

### pro-components 中 ProTable - Search 搜索表单的onCollapse属性如何使用？ 

属性: onCollapse 

描述: 收起按钮的事件 

类型: `(collapsed: boolean) => void;` 

默认值: -

### pro-components 中 ProTable - Search 搜索表单的optionRender属性如何使用？ 

属性: optionRender 

描述: 自定义操作栏 

类型: `((searchConfig,formProps,dom) => ReactNode[])`|`false` 

默认值: -

### pro-components 中 ProTable - Search 搜索表单的showHiddenNum属性如何使用？ 

属性: showHiddenNum 

描述: 是否显示收起之后显示隐藏个数 

类型: `boolean` 

默认值: `false`

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


### pro-components 中 ProTable - Columns 列定义的title属性如何使用？ 

属性: title 

描述: 与 antd 中基本相同，但是支持通过传入一个方法 

类型: `ReactNode | ((config: ProColumnType<T>, type: ProTableTypes) => ReactNode)` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的tooltip属性如何使用？ 

属性: tooltip 

描述: 会在 title 之后展示一个 icon，hover 之后提示一些信息 

类型: `string` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的ellipsis属性如何使用？ 

属性: ellipsis 

描述: 是否自动缩略 

类型: `boolean` | `{showTitle?: boolean}` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的copyable属性如何使用？ 

属性: copyable 

描述: 是否支持复制 

类型: `boolean` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的valueEnum属性如何使用？ 

属性: valueEnum 

描述: 值的枚举，会自动转化把值当成 key 来取出要显示的内容 

类型: -

### pro-components 中 ProTable - Columns 列定义的valueType属性如何使用？ 

属性: valueType 

描述: 值的类型，会生成不同的渲染器 

类型: `text`

### pro-components 中 ProTable - Columns 列定义的order属性如何使用？ 

属性: order 

描述: 查询表单中的权重，权重大排序靠前 

类型: `number` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的fieldProps属性如何使用？ 

属性: fieldProps 

描述: 查询表单的 props，会透传给表单项，如果渲染出来是 Input，就支持 Input 的所有 props，同理如果是 select，也支持 select 的所有 props。也支持方法传入 

类型: `(form,config)=>Record | Record` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的`formItemProps`属性如何使用？ 

属性: `formItemProps` 

描述: 传递给 Form.Item 的配置，可以配置 rules，但是默认的查询表单 rules 是不生效的。需要配置 `ignoreRules` 

类型: `(form,config)=>formItemProps` | `formItemProps` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的renderText属性如何使用？ 

属性: renderText 

描述: 类似 table 的 render，但是必须返回 string，如果只是希望转化枚举，可以使用 [valueEnum](/components/schema#valueenum) 

类型: `(text: any,record: T,index: number,action: UseFetchDataAction<T>) => string` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的render属性如何使用？ 

属性: render 

描述: 类似 table 的 render，第一个参数变成了 dom，增加了第四个参数 action 

类型: `(text: ReactNode,record: T,index: number,action: UseFetchDataAction<T>) => ReactNode | ReactNode[]` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的renderFormItem属性如何使用？ 

属性: renderFormItem 

描述: 渲染查询表单的输入组件 

类型: `(item,{ type, defaultRender, formItemProps, fieldProps, ...rest },form) => ReactNode` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的search属性如何使用？ 

属性: search 

描述: 配置列的搜索相关，false 为隐藏 

类型: `false` | `{ transform: (value: any) => any }` 

默认值: true

### pro-components 中 ProTable - Columns 列定义的search.transform属性如何使用？ 

属性: search.transform 

描述: 转化值的 key, 一般用于时间区间的转化 

类型: `(value: any) => any` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的在编辑表格中是否可编辑的，函数的参数和 table 的 render 一样属性如何使用？ 

属性: 在编辑表格中是否可编辑的，函数的参数和 table 的 render 一样 

描述: `false` | `(text: any, record: T,index: number) => boolean` 

类型: true

### pro-components 中 ProTable - Columns 列定义的colSize属性如何使用？ 

属性: colSize 

描述: 一个表单项占用的格子数量，`占比= colSize*span`，`colSize` 默认为 1 ，`span` 为 8，`span`是`form={{span:8}}` 全局设置的 

类型: `number` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的hideInSearch属性如何使用？ 

属性: hideInSearch 

描述: 在查询表单中不展示此项 

类型: `boolean` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的hideInTable属性如何使用？ 

属性: hideInTable 

描述: 在 Table 中不展示此列 

类型: `boolean` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的hideInForm属性如何使用？ 

属性: hideInForm 

描述: 在 Form 中不展示此列 

类型: `boolean` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的hideInDescriptions属性如何使用？ 

属性: hideInDescriptions 

描述: 在 Descriptions 中不展示此列 

类型: `boolean` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的filters属性如何使用？ 

属性: filters 

描述: 表头的筛选菜单项，当值为 true 时，自动使用 valueEnum 生成 

类型: `boolean` | `object[]` 

默认值: false

### pro-components 中 ProTable - Columns 列定义的onFilter属性如何使用？ 

属性: onFilter 

描述: 筛选表单，为 true 时使用 ProTable 自带的，为 false 时关闭本地筛选 

类型: `(value, record) => boolean` | `false` 

默认值: false

### pro-components 中 ProTable - Columns 列定义的request属性如何使用？ 

属性: request 

描述: 从服务器请求枚举 

类型: -

### pro-components 中 ProTable - Columns 列定义的initialValue属性如何使用？ 

属性: initialValue 

描述: 查询表单项初始值 

类型: `any` 

默认值: -

### pro-components 中 ProTable - Columns 列定义的disable属性如何使用？ 

属性: disable 

描述: 列设置中`disabled`的状态 

类型: `boolean` | `{ checkbox: boolean; }` 

默认值: -

### pro-components 的 ProTable - 批量操作 有哪些配置？

| 属性 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| alwaysShowAlert | 总是展示 alert，默认无选择不展示（`rowSelection`内置属性） | `boolean` | - |
| tableAlertRender | 自定义批量操作工具栏左侧信息区域，false 时不显示 | `({ selectedRowKeys: Key[], selectedRows: T[], onCleanSelected: ()=>void }) => ReactNode)`\|`false` | - |
| tableAlertOptionRender | 自定义批量操作工具栏右侧选项区域，false 时不显示 | `({ selectedRowKeys: Key[], selectedRows: T[], onCleanSelected: ()=>void }) => ReactNode)`\|`false` | - |


### pro-components 中 ProTable - 批量操作的alwaysShowAlert属性如何使用？ 

属性: alwaysShowAlert 

描述: 总是展示 alert，默认无选择不展示（`rowSelection`内置属性） 

类型: `boolean` 

默认值: -

### pro-components 中 ProTable - 批量操作的tableAlertRender属性如何使用？ 

属性: tableAlertRender 

描述: 自定义批量操作工具栏左侧信息区域，false 时不显示 

类型: `({ selectedRowKeys: Key[], selectedRows: T[], onCleanSelected: ()=>void }) => ReactNode)`|`false` 

默认值: -

### pro-components 中 ProTable - 批量操作的tableAlertOptionRender属性如何使用？ 

属性: tableAlertOptionRender 

描述: 自定义批量操作工具栏右侧选项区域，false 时不显示 

类型: `({ selectedRowKeys: Key[], selectedRows: T[], onCleanSelected: ()=>void }) => ReactNode)`|`false` 

默认值: -

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


### pro-components 中 ProTable - ListToolBarProps的title属性如何使用？ 

参数: title 

说明: 标题 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProTable - ListToolBarProps的subTitle属性如何使用？ 

参数: subTitle 

说明: 子标题 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProTable - ListToolBarProps的tooltip属性如何使用？ 

参数: tooltip 

说明: tooltip 描述 

类型: `string` 

默认值: -

### pro-components 中 ProTable - ListToolBarProps的search属性如何使用？ 

参数: search 

说明: 查询区 

类型: `ReactNode` | `SearchProps` 

默认值: -

### pro-components 中 ProTable - ListToolBarProps的actions属性如何使用？ 

参数: actions 

说明: 操作区 

类型: `ReactNode[]` 

默认值: -

### pro-components 中 ProTable - ListToolBarProps的settings属性如何使用？ 

参数: settings 

说明: 设置区 

类型: `(ReactNode | Setting)[]` 

默认值: -

### pro-components 中 ProTable - ListToolBarProps的filter属性如何使用？ 

参数: filter 

说明: 过滤区，通常配合 `LightFilter` 使用 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProTable - ListToolBarProps的multipleLine属性如何使用？ 

参数: multipleLine 

说明: 是否多行展示 

类型: `boolean` 

默认值: `false`

### pro-components 中 ProTable - ListToolBarProps的menu属性如何使用？ 

参数: menu 

说明: 菜单配置 

类型: `ListToolBarMenu` 

默认值: -

### pro-components 中 ProTable - ListToolBarProps的tabs属性如何使用？ 

参数: tabs 

说明: 标签页配置，仅当 `multipleLine` 为 true 时有效 

类型: `ListToolBarTabs` 

默认值: -

### pro-components 的 ProTable - Setting 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标 | `ReactNode` | - |
| tooltip | tooltip 描述 | `string` | - |
| key | 操作唯一标识 | `string` | - |
| onClick | 设置被触发 | `(key: string)=>void` | - |


### pro-components 中 ProTable - Setting的icon属性如何使用？ 

参数: icon 

说明: 图标 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProTable - Setting的tooltip属性如何使用？ 

参数: tooltip 

说明: tooltip 描述 

类型: `string` 

默认值: -

### pro-components 中 ProTable - Setting的key属性如何使用？ 

参数: key 

说明: 操作唯一标识 

类型: `string` 

默认值: -

### pro-components 中 ProTable - Setting的onClick属性如何使用？ 

参数: onClick 

说明: 设置被触发 

类型: `(key: string)=>void` 

默认值: -

### pro-components 的 ProTable - ListToolBarMenu 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `inline` \| `dropdown` \| `tab` | `inline` |
| activeKey | 当前值 | `string` | - |
| items | 菜单项 | `{ key: string; label: ReactNode }[]` | - |
| onChange | 切换菜单的回调 | `(activeKey)=>void` | - |


### pro-components 中 ProTable - ListToolBarMenu的type属性如何使用？ 

参数: type 

说明: 类型 

类型: `inline` | `dropdown` | `tab` 

默认值: `inline`

### pro-components 中 ProTable - ListToolBarMenu的activeKey属性如何使用？ 

参数: activeKey 

说明: 当前值 

类型: `string` 

默认值: -

### pro-components 中 ProTable - ListToolBarMenu的items属性如何使用？ 

参数: items 

说明: 菜单项 

类型: `{ key: string; label: ReactNode }[]` 

默认值: -

### pro-components 中 ProTable - ListToolBarMenu的onChange属性如何使用？ 

参数: onChange 

说明: 切换菜单的回调 

类型: `(activeKey)=>void` 

默认值: -

### pro-components 的 ProTable - ListToolBarTabs 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前选中项 | `string` | - |
| items | 菜单项 | `{ key: string; tab: ReactNode }[]` | - |
| onChange | 切换菜单的回调 | `(activeKey)=>void` | - |


### pro-components 中 ProTable - ListToolBarTabs的activeKey属性如何使用？ 

参数: activeKey 

说明: 当前选中项 

类型: `string` 

默认值: -

### pro-components 中 ProTable - ListToolBarTabs的items属性如何使用？ 

参数: items 

说明: 菜单项 

类型: `{ key: string; tab: ReactNode }[]` 

默认值: -

### pro-components 中 ProTable - ListToolBarTabs的onChange属性如何使用？ 

参数: onChange 

说明: 切换菜单的回调 

类型: `(activeKey)=>void` 

默认值: -

### pro-components 的 ProTable - TableDropdown 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标志 | `string` | - |
| name | 内容 | `ReactNode` | - |
| (...Menu.Item) | antd 的 [Menu.Item](https://ant.design/components/menu-cn/#Menu.Item) | `Menu.Item` | - |


### pro-components 中 ProTable - TableDropdown的key属性如何使用？ 

参数: key 

说明: 唯一标志 

类型: `string` 

默认值: -

### pro-components 中 ProTable - TableDropdown的name属性如何使用？ 

参数: name 

说明: 内容 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProTable - TableDropdown的(...Menu.Item)属性如何使用？ 

参数: (...Menu.Item) 

说明: antd 的 [Menu.Item](https://ant.design/components/menu-cn/#Menu.Item) 

类型: `Menu.Item` 

默认值: -

### pro-components 的 Table 有哪些配置？

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


### pro-components 中 ProTable - API的`value`属性如何使用？ 

属性: `value` 

描述: 同 dataSource，传入一个数组，是 table 渲染的元数据 

类型: `T[]` 

默认值: `undefined`

### pro-components 中 ProTable - API的`onChange`属性如何使用？ 

属性: `onChange` 

描述: dataSource 修改时触发，删除和修改都会触发，如果设置了 value，Table 会成为一个受控组件。 

类型: `(value:T[])=>void` 

默认值: `undefined`

### pro-components 中 ProTable - API的`recordCreatorProps`属性如何使用？ 

属性: `recordCreatorProps` 

描述: 新建一行数据的相关配置 

类型: -

### pro-components 中 ProTable - API的`maxLength`属性如何使用？ 

属性: `maxLength` 

描述: 最大的行数，到达最大行数新建按钮会自动消失 

类型: number 

默认值: -

### pro-components 中 ProTable - API的`editable`属性如何使用？ 

属性: `editable` 

描述: 可编辑表格的相关配置 

类型: -

### pro-components 中 ProTable - API的`controlled`属性如何使用？ 

属性: `controlled` 

描述: 是否受控，如果受控每次编辑都会触发 onChange，并且会修改 dataSource 

类型: `boolean` 

默认值: false

### pro-components 中 ProTable - API的`editableFormRef`属性如何使用？ 

属性: `editableFormRef` 

描述: table 所有的 form，带了一些表格特有的操作 

类型: `React.Ref<EditableFormInstance<T>>` 

默认值: `undefined`

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


### pro-components 中 ProTable - editable 编辑行配置的type属性如何使用？ 

属性: type 

描述: 可编辑表格的类型，单行编辑或者多行编辑 

类型: `single` | `multiple` 

默认值: -

### pro-components 中 ProTable - editable 编辑行配置的form属性如何使用？ 

属性: form 

描述: 可编辑表格的 form 实例，使用 `Form.useForm` 生成后使用 

类型: `FormInstance` 

默认值: -

### pro-components 中 ProTable - editable 编辑行配置的formProps属性如何使用？ 

属性: formProps 

描述: 可以配置 form 的属性，但是不支持 onFinish 

类型: -

### pro-components 中 ProTable - editable 编辑行配置的editableKeys属性如何使用？ 

属性: editableKeys 

描述: 正在编辑的行，受控属性。 默认 `key` 会使用 `rowKey` 的配置，如果没有配置会使用 `index`，建议使用 rowKey 

类型: `Key[]` 

默认值: -

### pro-components 中 ProTable - editable 编辑行配置的onChange属性如何使用？ 

属性: onChange 

描述: 行数据被修改的时候触发 

类型: `(editableKeys: Key[], editableRows: T[]) => void` 

默认值: -

### pro-components 中 ProTable - editable 编辑行配置的onSave属性如何使用？ 

属性: onSave 

描述: 保存一行的时候触发 

类型: `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>` 

默认值: -

### pro-components 中 ProTable - editable 编辑行配置的saveText属性如何使用？ 

属性: saveText 

描述: 保存一行的文字 

类型: `React.ReactNode` 

默认值: `保存`

### pro-components 中 ProTable - editable 编辑行配置的onDelete属性如何使用？ 

属性: onDelete 

描述: 删除一行的时候触发 

类型: `(key: Key, row: T) => Promise<any>` 

默认值: -

### pro-components 中 ProTable - editable 编辑行配置的deleteText属性如何使用？ 

属性: deleteText 

描述: 删除一行的文字 

类型: `React.ReactNode` 

默认值: `删除`

### pro-components 中 ProTable - editable 编辑行配置的onCancel属性如何使用？ 

属性: onCancel 

描述: 取消编辑一行时触发 

类型: `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>` 

默认值: -

### pro-components 中 ProTable - editable 编辑行配置的cancelText属性如何使用？ 

属性: cancelText 

描述: 取消编辑一行的文字 

类型: `React.ReactNode` 

默认值: `取消`

### pro-components 中 ProTable - editable 编辑行配置的actionRender属性如何使用？ 

属性: actionRender 

描述: 自定义编辑模式的操作栏 

类型: `(row: T, config: ActionRenderConfig<T>) => ReactNode[]` 

默认值: -

### pro-components 中 ProTable - editable 编辑行配置的deletePopconfirmMessage属性如何使用？ 

属性: deletePopconfirmMessage 

描述: 删除时弹出的确认框提示消息 

类型: `ReactNode` 

默认值: `删除此项？`

### pro-components 中 ProTable - editable 编辑行配置的onlyOneLineEditorAlertMessage属性如何使用？ 

属性: onlyOneLineEditorAlertMessage 

描述: 只能编辑一行的的提示 

类型: `ReactNode` 

默认值: `只能同时编辑一行`

### pro-components 中 ProTable - editable 编辑行配置的onlyAddOneLineAlertMessage属性如何使用？ 

属性: onlyAddOneLineAlertMessage 

描述: 只能同时新增一行的提示 

类型: `ReactNode` 

默认值: `只能新增一行`

### pro-components 的 Table 有哪些配置？

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


### pro-components 中 ProTable - API的dragSortKey属性如何使用？ 

属性: dragSortKey 

描述: 如配置此参数，则会在该 key 对应的行显示拖拽排序把手，允许拖拽排序 

类型: `string` 

默认值: -

### pro-components 中 ProTable - API的dragSortHandlerRender属性如何使用？ 

属性: dragSortHandlerRender 

描述: 渲染自定义拖动排序把手的函数 如配置了 dragSortKey 但未配置此参数，则使用默认把手图标 

类型: `(rowData: T, idx: number) => React.ReactNode` 

默认值: `<MenuOutlined className="dragSortDefaultHandle" style={{ cursor: 'grab', color: '#999' }} />`

### pro-components 中 ProTable - API的onDragSortEnd属性如何使用？ 

属性: onDragSortEnd 

描述: 拖动排序完成回调 

类型: `(beforeIndex: number, afterIndex: number, newDataSource: T[]) => Promise<void> | void` 

默认值: -

### pro-components 的 Skeleton 有哪些配置？

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


### pro-components 中 ProSkeleton - API的type属性如何使用？ 

参数: type 

说明: 不同类型的骨架屏 

类型: `'list' | 'result' | 'descriptions'` 

默认值: list

### pro-components 中 ProSkeleton - API的active属性如何使用？ 

参数: active 

说明: 是否显示动态 

类型: boolean 

默认值: true

### pro-components 中 ProSkeleton - API的pageHeader属性如何使用？ 

参数: pageHeader 

说明: 是否显示 pageHeader 的骨架屏 descriptions 和 list 有效 

类型: - 

默认值: -

### pro-components 中 ProSkeleton - API的statistic属性如何使用？ 

参数: statistic 

说明: 统计信息骨架屏的数量 

类型: `number` | `false` 

默认值: -

### pro-components 中 ProSkeleton - API的list属性如何使用？ 

参数: list 

说明: 列表的骨架屏，可以控制数量 

类型: `number` | `false` 

默认值: -

### pro-components 中 ProSkeleton - API的toolbar属性如何使用？ 

参数: toolbar 

说明: 列表的操作栏骨架屏 

类型: boolean 

默认值: -

### pro-components 中 ProSkeleton - API的renderFormItem属性如何使用？ 

参数: renderFormItem 

说明: 自定义 `mode=update 或 edit` 下的 dom 表现，一般用于渲染编辑框 

类型: - 

默认值: -

### pro-components 中 ProSkeleton - API的render属性如何使用？ 

参数: render 

说明: 自定义 `mode=read` 下的 dom 表现，只是单纯的表现形式 

类型: - 

默认值: -

### pro-components 的 List 有哪些配置？

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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'type'` |


#### ProList - Metas.title 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'title'` |


#### ProList - Metas.subTitle 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'subTitle'` |


#### ProList - Metas.description 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'description'` |


#### ProList - Metas.avatar 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'avatar'` |


#### ProList - Metas.actions 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'actions'` |
| cardActionProps | 设置卡片列表把 action 渲染到哪里｜`extra`｜`'actions' \| 'extra'` |


#### ProList - Metas.content 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'content'` |


#### ProList - Metas.extra 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'extra'` |


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


### pro-components 中 ProList - ProList API的dataSource属性如何使用？ 

参数: dataSource 

说明: 与 antd 相同的[配置](https://ant.design/components/list-cn/#API) 

类型: `any[]` 

默认值: `false`

### pro-components 中 ProList - ProList API的actionRef属性如何使用？ 

参数: actionRef 

说明: Table action 的引用，便于自定义触发 

类型: `MutableRefObject<ActionType>` 

默认值: -

### pro-components 中 ProList - ProList API的metas属性如何使用？ 

参数: metas 

说明: 列表项配置，类似 Table 中的 columns 

类型: `Metas` 

默认值: -

### pro-components 中 ProList - ProList API的rowKey属性如何使用？ 

参数: rowKey 

说明: 行的 key，一般是行 id 

类型: `string` | `(row,index)=>string` 

默认值: `'id'`

### pro-components 中 ProList - ProList API的headerTitle属性如何使用？ 

参数: headerTitle 

说明: 列表头部主标题 

类型: `React.ReactNode` 

默认值: -

### pro-components 中 ProList - ProList API的loading属性如何使用？ 

参数: loading 

说明: 是否加载中 

类型: `boolean` | `(item: any) => boolean` 

默认值: `false`

### pro-components 中 ProList - ProList API的split属性如何使用？ 

参数: split 

说明: 是否有分割线 

类型: `boolean` 

默认值: `false`

### pro-components 中 ProList - ProList API的rowSelection属性如何使用？ 

参数: rowSelection 

说明: 与 antd 相同的[配置](https://ant.design/components/table-cn/#rowSelection) 

类型: `object` |`boolean` 

默认值: false

### pro-components 中 ProList - ProList API的expandable属性如何使用？ 

参数: expandable 

说明: 与 antd 相同的[配置](https://ant.design/components/table-cn/#expandable) 

类型: `object` | `false` 

默认值: -

### pro-components 中 ProList - ProList API的showActions属性如何使用？ 

参数: showActions 

说明: 何时展示 actions，CardList 模式下不生效 

类型: `'hover'` | `'always'` 

默认值: `'always'`

### pro-components 中 ProList - ProList API的showExtra属性如何使用？ 

参数: showExtra 

说明: 何时展示 extra 

类型: `'hover'` | `'always'` 

默认值: `'always'`

### pro-components 中 ProList - ProList API的onRow属性如何使用？ 

参数: onRow 

说明: 与 antd 相同的[配置](https://ant.design/components/table-cn/#onRow-%E7%94%A8%E6%B3%95)，用户传入`grid`属性时，列表将会以卡片模式进行渲染，此事件将不会触发，请使用`onItem` 

类型: `function(record, index)` 

默认值: -

### pro-components 中 ProList - ProList API的onItem属性如何使用？ 

参数: onItem 

说明: 与 antd 相同的[配置](https://ant.design/components/table-cn/#onRow-%E7%94%A8%E6%B3%95)，在所有类型点击某个项目都会触发该事件。 

类型: `function(record, index)` 

默认值: -

### pro-components 中 ProList - ProList API的rowClassName属性如何使用？ 

参数: rowClassName 

说明: 自定义列表行的类名 

类型: `string`| `(row, index) => string` 

默认值: -

### pro-components 中 ProList - ProList API的itemHeaderRender属性如何使用？ 

参数: itemHeaderRender 

说明: 自定义每一列的 header，与 itemRender 不同的时，它会保留多选和展开收起 

类型: - 

默认值: -

### pro-components 中 ProList - ProList API的itemCardProps属性如何使用？ 

参数: itemCardProps 

说明: 自定义卡片列表的 proCard props，只在卡片列表下生效 

类型: - 

默认值: -

### pro-components 的 ProList - Metas.[Meta] 通用 API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | 数据在数据项中对应的路径，支持通过数组查询嵌套路径 | `string` \| `string[]` | - |
| valueType | 值的类型，和 ProTable 一致 | `'text'` \| `'date'` ... | `'text'` |
| render | 自定义渲染函数 | `(text: React.ReactNode,record: T,index: number) => React.ReactNode \| React.ReactNode[]` | - |


### pro-components 中 ProList - Metas.[Meta] 通用 API的dataIndex属性如何使用？ 

参数: dataIndex 

说明: 数据在数据项中对应的路径，支持通过数组查询嵌套路径 

类型: `string` | `string[]` 

默认值: -

### pro-components 中 ProList - Metas.[Meta] 通用 API的valueType属性如何使用？ 

参数: valueType 

说明: 值的类型，和 ProTable 一致 

类型: `'text'` | `'date'` ... 

默认值: `'text'`

### pro-components 中 ProList - Metas.[Meta] 通用 API的render属性如何使用？ 

参数: render 

说明: 自定义渲染函数 

类型: `(text: React.ReactNode,record: T,index: number) => React.ReactNode | React.ReactNode[]` 

默认值: -

### pro-components 的 ProList - Metas.type 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'type'` |


### pro-components 中 ProList - Metas.type的dataIndex属性如何使用？ 

参数: dataIndex 

说明: - 

类型: - 

默认值: `'type'`

### pro-components 的 ProList - Metas.title 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'title'` |


### pro-components 中 ProList - Metas.title的dataIndex属性如何使用？ 

参数: dataIndex 

说明: - 

类型: - 

默认值: `'title'`

### pro-components 的 ProList - Metas.subTitle 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'subTitle'` |


### pro-components 中 ProList - Metas.subTitle的dataIndex属性如何使用？ 

参数: dataIndex 

说明: - 

类型: - 

默认值: `'subTitle'`

### pro-components 的 ProList - Metas.description 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'description'` |


### pro-components 中 ProList - Metas.description的dataIndex属性如何使用？ 

参数: dataIndex 

说明: - 

类型: - 

默认值: `'description'`

### pro-components 的 ProList - Metas.avatar 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'avatar'` |


### pro-components 中 ProList - Metas.avatar的dataIndex属性如何使用？ 

参数: dataIndex 

说明: - 

类型: - 

默认值: `'avatar'`

### pro-components 的 ProList - Metas.actions 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'actions'` |
| cardActionProps | 设置卡片列表把 action 渲染到哪里｜`extra`｜`'actions' \| 'extra'` |


### pro-components 中 ProList - Metas.actions的dataIndex属性如何使用？ 

参数: dataIndex 

说明: - 

类型: - 

默认值: `'actions'`

### pro-components 中 ProList - Metas.actions的cardActionProps属性如何使用？ 

参数: cardActionProps 

说明: 设置卡片列表把 action 渲染到哪里｜`extra`｜`'actions' | 'extra'`

### pro-components 的 ProList - Metas.content 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'content'` |


### pro-components 中 ProList - Metas.content的dataIndex属性如何使用？ 

参数: dataIndex 

说明: - 

类型: - 

默认值: `'content'`

### pro-components 的 ProList - Metas.extra 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataIndex | - | - | `'extra'` |


### pro-components 中 ProList - Metas.extra的dataIndex属性如何使用？ 

参数: dataIndex 

说明: - 

类型: - 

默认值: `'extra'`

### pro-components 的 Layout 有哪些配置？

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

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| 支持所有的 antd `Spin` 组件参数 | - | - |


#### ProLayout - getMenuData 

| 参数 | 说明 | 类型 |
| --- | --- | --- |
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| contentWidth | 内容模式 | `Fluid` \| `Fixed` | - |


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


### pro-components 中 ProLayout - ProLayout的title属性如何使用？ 

参数: title 

说明: layout 的左上角的 title 

类型: `ReactNode` 

默认值: `'Ant Design Pro'`

### pro-components 中 ProLayout - ProLayout的logo属性如何使用？ 

参数: logo 

说明: layout 的左上角 logo 的 url 

类型: `ReactNode` | `()=> ReactNode` 

默认值: -

### pro-components 中 ProLayout - ProLayout的pure属性如何使用？ 

参数: pure 

说明: 是否删除掉所有的自带界面 

类型: `boolean` 

默认值: -

### pro-components 中 ProLayout - ProLayout的loading属性如何使用？ 

参数: loading 

说明: layout 的加载态 

类型: `boolean` 

默认值: -

### pro-components 中 ProLayout - ProLayout的location属性如何使用？ 

参数: location 

说明: 当前应用会话的位置信息。如果你的应用创建了自定义的 history，则需要显示指定 location 属性，详见 [issue](https://github.com/ant-design/pro-components/issues/327) 

类型: isBrowser ? window.location : undefined

### pro-components 中 ProLayout - ProLayout的appList属性如何使用？ 

参数: appList 

说明: 跨站点导航列表 

类型: `{ icon, title, desc, url, target, children }[]` 

默认值: -

### pro-components 中 ProLayout - ProLayout的appListRender属性如何使用？ 

参数: appListRender 

说明: 自定义跨站点导航列表的 render 方法 

类型: `(props: AppListProps, defaultDom: React.ReactNode) => ReactNode` 

默认值: -

### pro-components 中 ProLayout - ProLayout的menuHeaderRender属性如何使用？ 

参数: menuHeaderRender 

说明: 渲染 logo 和 title, 优先级比 `headerTitleRender` 更高 

类型: `ReactNode` | `(logo,title)=>ReactNode` 

默认值: -

### pro-components 中 ProLayout - ProLayout的menuFooterRender属性如何使用？ 

参数: menuFooterRender 

说明: 在 layout 底部渲染一个块 

类型: `(menuProps)=>ReactNode` 

默认值: -

### pro-components 中 ProLayout - ProLayout的onMenuHeaderClick属性如何使用？ 

参数: onMenuHeaderClick 

说明: menu 菜单的头部点击事件 

类型: `(e: React.MouseEvent<HTMLDivElement>) => void` 

默认值: -

### pro-components 中 ProLayout - ProLayout的menuExtraRender属性如何使用？ 

参数: menuExtraRender 

说明: 在菜单标题的下面渲染一个区域 

类型: `(menuProps)=>ReactNode` 

默认值: -

### pro-components 中 ProLayout - ProLayout的onTopMixMenuHeaderClick属性如何使用？ 

参数: onTopMixMenuHeaderClick 

说明: mix 模式下顶部栏的头部点击事件 

类型: `(e: React.MouseEvent<HTMLDivElement>) => void` 

默认值: -

### pro-components 中 ProLayout - ProLayout的contentStyle属性如何使用？ 

参数: contentStyle 

说明: layout 的内容区 style 

类型: CSSProperties 

默认值: -

### pro-components 中 ProLayout - ProLayout的layout属性如何使用？ 

参数: layout 

说明: layout 的菜单模式，side：右侧导航，top：顶部导航 

类型: `side` | `top`|`mix` 

默认值: `side`

### pro-components 中 ProLayout - ProLayout的contentWidth属性如何使用？ 

参数: contentWidth 

说明: layout 的内容模式，Fluid：自适应，Fixed：定宽 1200px 

类型: `Fluid` | `Fixed` 

默认值: `Fluid`

### pro-components 中 ProLayout - ProLayout的actionRef属性如何使用？ 

参数: actionRef 

说明: layout 的常见操作，比如刷新菜单 

类型: `MutableRefObject<ActionType>` 

默认值: -

### pro-components 中 ProLayout - ProLayout的fixedHeader属性如何使用？ 

参数: fixedHeader 

说明: 是否固定 header 到顶部 

类型: `boolean` 

默认值: `false`

### pro-components 中 ProLayout - ProLayout的fixSiderbar属性如何使用？ 

参数: fixSiderbar 

说明: 是否固定导航 

类型: `boolean` 

默认值: `false`

### pro-components 中 ProLayout - ProLayout的breakpoint属性如何使用？ 

参数: breakpoint 

说明: 触发响应式布局的[断点](https://ant.design/components/grid-cn/#Col) 

类型: `Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' }` 

默认值: `lg`

### pro-components 中 ProLayout - ProLayout的menu属性如何使用？ 

参数: menu 

说明: 关于 [menu](#menu) 的配置，暂时只有 locale，locale 可以关闭 menu 的自带的全球化 

类型: `{ locale: true }`

### pro-components 中 ProLayout - ProLayout的iconfontUrl属性如何使用？ 

参数: iconfontUrl 

说明: 使用 [IconFont](https://ant.design/components/icon-cn/#components-icon-demo-iconfont) 的图标配置 

类型: `URL` 

默认值: -

### pro-components 中 ProLayout - ProLayout的locale属性如何使用？ 

参数: locale 

说明: 当前 layout 的语言设置 

类型: `zh-CN` | `zh-TW` | `en-US` 

默认值: navigator.language

### pro-components 中 ProLayout - ProLayout的settings属性如何使用？ 

参数: settings 

说明: layout 的设置 

类型: -

### pro-components 中 ProLayout - ProLayout的siderWidth属性如何使用？ 

参数: siderWidth 

说明: 侧边菜单宽度 

类型: `number` 

默认值: 208

### pro-components 中 ProLayout - ProLayout的suppressSiderWhenMenuEmpty属性如何使用？ 

参数: suppressSiderWhenMenuEmpty 

说明: 在菜单为空时隐藏 Sider 

类型: `boolean` 

默认值: -

### pro-components 中 ProLayout - ProLayout的defaultCollapsed属性如何使用？ 

参数: defaultCollapsed 

说明: 默认的菜单的收起和展开，会受到 `breakpoint` 的影响，`breakpoint=false` 生效 

类型: `boolean` 

默认值: -

### pro-components 中 ProLayout - ProLayout的collapsed属性如何使用？ 

参数: collapsed 

说明: 控制菜单的收起和展开 

类型: `boolean` 

默认值: -

### pro-components 中 ProLayout - ProLayout的onCollapse属性如何使用？ 

参数: onCollapse 

说明: 菜单的折叠收起事件 

类型: `(collapsed: boolean) => void` 

默认值: -

### pro-components 中 ProLayout - ProLayout的onPageChange属性如何使用？ 

参数: onPageChange 

说明: 页面切换时触发 

类型: `(location: Location) => void` 

默认值: -

### pro-components 中 ProLayout - ProLayout的headerRender属性如何使用？ 

参数: headerRender 

说明: 自定义头的 render 方法 

类型: `(props: ProLayoutProps) => ReactNode` 

默认值: -

### pro-components 中 ProLayout - ProLayout的headerTitleRender属性如何使用？ 

参数: headerTitleRender 

说明: 自定义头标题的方法，mix 模式和 top 模式下生效 

类型: `(logo,title,props)=>ReactNode` 

默认值: -

### pro-components 中 ProLayout - ProLayout的headerContentRender属性如何使用？ 

参数: headerContentRender 

说明: 自定义头内容的方法 

类型: `(props: ProLayoutProps) => ReactNode` 

默认值: -

### pro-components 中 ProLayout - ProLayout的avatarProps属性如何使用？ 

参数: avatarProps 

说明: layout 的头像设置，不同的 layout 放在不同的位置 

类型: -

### pro-components 中 ProLayout - ProLayout的actionsRender属性如何使用？ 

参数: actionsRender 

说明: 自定义操作列表 

类型: `(layoutProps)=>ReactNode[]` 

默认值: -

### pro-components 中 ProLayout - ProLayout的collapsedButtonRender属性如何使用？ 

参数: collapsedButtonRender 

说明: 自定义 collapsed button 的方法 

类型: `(collapsed: boolean) => ReactNode` 

默认值: -

### pro-components 中 ProLayout - ProLayout的footerRender属性如何使用？ 

参数: footerRender 

说明: 自定义页脚的 render 方法 

类型: `(props: ProLayoutProps) => JSX.Element | false` 

默认值: -

### pro-components 中 ProLayout - ProLayout的pageTitleRender属性如何使用？ 

参数: pageTitleRender 

说明: 自定义页面标题的显示方法 

类型: `(props: ProLayoutProps) => string` 

默认值: -

### pro-components 中 ProLayout - ProLayout的menuRender属性如何使用？ 

参数: menuRender 

说明: 自定义菜单的 render 方法 

类型: `(props: HeaderViewProps) => ReactNode` 

默认值: -

### pro-components 中 ProLayout - ProLayout的postMenuData属性如何使用？ 

参数: postMenuData 

说明: 在显示前对菜单数据进行查看，修改不会触发重新渲染 

类型: `(menuData: MenuDataItem[]) => MenuDataItem[]` 

默认值: -

### pro-components 中 ProLayout - ProLayout的menuItemRender属性如何使用？ 

参数: menuItemRender 

说明: 自定义菜单项的 render 方法 

类型: -

### pro-components 中 ProLayout - ProLayout的subMenuItemRender属性如何使用？ 

参数: subMenuItemRender 

说明: 自定义拥有子菜单菜单项的 render 方法 

类型: -

### pro-components 中 ProLayout - ProLayout的menuDataRender属性如何使用？ 

参数: menuDataRender 

说明: menuData 的 render 方法，用来自定义 menuData 

类型: `(menuData: MenuDataItem[]) => MenuDataItem[]` 

默认值: -

### pro-components 中 ProLayout - ProLayout的breadcrumbRender属性如何使用？ 

参数: breadcrumbRender 

说明: 自定义面包屑的数据 

类型: `(route)=>route` 

默认值: -

### pro-components 中 ProLayout - ProLayout的breadcrumbProps属性如何使用？ 

参数: breadcrumbProps 

说明: 传递到 antd Breadcrumb 组件的 props, 参考 [面包屑](https://ant.design/components/breadcrumb-cn/) 

类型: `breadcrumbProps` 

默认值: undefined

### pro-components 中 ProLayout - ProLayout的route属性如何使用？ 

参数: route 

说明: 用于生成菜单和面包屑。Umi 的 Layout 会自动带有 

类型: -

### pro-components 中 ProLayout - ProLayout的disableMobile属性如何使用？ 

参数: disableMobile 

说明: 禁止自动切换到移动页面 

类型: `boolean` 

默认值: false

### pro-components 中 ProLayout - ProLayout的ErrorBoundary属性如何使用？ 

参数: ErrorBoundary 

说明: 自带了错误处理功能，防止白屏，`ErrorBoundary=false` 关闭默认错误边界 

类型: `ReactNode` 

默认值: 内置 ErrorBoundary

### pro-components 中 ProLayout - ProLayout的links属性如何使用？ 

参数: links 

说明: 显示在菜单右下角的快捷操作 

类型: `ReactNode[]` 

默认值: -

### pro-components 中 ProLayout - ProLayout的menuProps属性如何使用？ 

参数: menuProps 

说明: 传递到 antd menu 组件的 props, 参考 [导航菜单](https://ant.design/components/menu-cn/) 

类型: `MenuProps` 

默认值: undefined

### pro-components 中 ProLayout - ProLayout的waterMarkProps属性如何使用？ 

参数: waterMarkProps 

说明: 配置水印，水印是 PageContainer 的功能，layout 只是透传给 PageContainer 

类型: -

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


### pro-components 中 ProLayout - menu的locale属性如何使用？ 

参数: locale 

说明: menu 是否使用国际化，还需要 formatMessage 的配合。 

类型: `boolean` 

默认值: `true`

### pro-components 中 ProLayout - menu的defaultOpenAll属性如何使用？ 

参数: defaultOpenAll 

说明: 默认打开所有的菜单项，要注意只有 layout 挂载之前生效，异步加载菜单是不支持的 

类型: `boolean` 

默认值: `false`

### pro-components 中 ProLayout - menu的ignoreFlatMenu属性如何使用？ 

参数: ignoreFlatMenu 

说明: 是否忽略手动折叠过的菜单状态，结合 defaultOpenAll 可实现折叠按钮切换后，同样可以展开所有子菜单 

类型: `boolean` 

默认值: `false`

### pro-components 中 ProLayout - menu的type属性如何使用？ 

参数: type 

说明: 菜单的类型 

类型: `sub` | `group` 

默认值: `group`

### pro-components 中 ProLayout - menu的autoClose属性如何使用？ 

参数: autoClose 

说明: 选中菜单是否自动关闭菜单 

类型: `boolean` 

默认值: `true`

### pro-components 中 ProLayout - menu的loading属性如何使用？ 

参数: loading 

说明: 菜单是否正在加载中 

类型: `boolean` 

默认值: `false`

### pro-components 中 ProLayout - menu的onLoadingChange属性如何使用？ 

参数: onLoadingChange 

说明: 菜单的加载状态变更 

类型: `(loading)=>void` 

默认值: -

### pro-components 中 ProLayout - menu的request属性如何使用？ 

参数: request 

说明: 远程加载菜单的方法，会自动修改 loading 状态 

类型: `(params,defaultMenuDat) => Promise<MenuDataItem[]>` 

默认值: -

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


### pro-components 中 ProLayout - SettingDrawer的collapse属性如何使用？ 

参数: collapse 

说明: 控制 SettingDrawer 的收起和展开 

类型: `boolean` 

默认值: -

### pro-components 中 ProLayout - SettingDrawer的onCollapseChange属性如何使用？ 

参数: onCollapseChange 

说明: SettingDrawer 的折叠收起事件 

类型: `(collapsed: boolean) => void` 

默认值: -

### pro-components 中 ProLayout - SettingDrawer的settings属性如何使用？ 

参数: settings 

说明: layout 的设置 

类型: -

### pro-components 中 ProLayout - SettingDrawer的onSettingChange属性如何使用？ 

参数: onSettingChange 

说明: `(settings: [`Settings`](#Settings) ) => void` 

类型: -

### pro-components 中 ProLayout - SettingDrawer的hideHintAlert属性如何使用？ 

参数: hideHintAlert 

说明: 删除下方的提示信息 

类型: `boolean` 

默认值: -

### pro-components 中 ProLayout - SettingDrawer的hideCopyButton属性如何使用？ 

参数: hideCopyButton 

说明: 不展示 copy 功能 

类型: `boolean` 

默认值: -

### pro-components 中 ProLayout - SettingDrawer的disableUrlParams属性如何使用？ 

参数: disableUrlParams 

说明: 禁止同步设置到查询参数 

类型: `boolean` 

默认值: `false`

### pro-components 中 ProLayout - SettingDrawer的enableDarkTheme属性如何使用？ 

参数: enableDarkTheme 

说明: 打开黑色主题切换功能 ｜ `boolean` 

类型: `false`

### pro-components 中 ProLayout - SettingDrawer的colorList属性如何使用？ 

参数: colorList 

说明: 自带的颜色切换系统 (ColorList 的 title 会作为 Tooltip 显示) ｜ `{key,color,title?}[]` 

类型: `ColorList`

### pro-components 的 ProLayout - PageLoading 有哪些配置？

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| 支持所有的 antd `Spin` 组件参数 | - | - |


### pro-components 中 ProLayout - PageLoading的支持所有的 antd `Spin` 组件参数属性如何使用？ 

参数: 支持所有的 antd `Spin` 组件参数 

说明: - 

类型: -

### pro-components 的 ProLayout - getMenuData 有哪些配置？

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| routes | 路由的配置信息 | - |
| menu | menu 的配置项，默认 `{locale: true}` | `{ locale: boolean }` | - |
| menuDataRender | menuData 的 render 方法，用来自定义 menuData | `(menuData: MenuDataItem[]) => MenuDataItem[]` | - |
| formatMessage | react-intl 的 formatMessage 方法 | `(data: { id: any; defaultMessage?: string }) => string;` | - |


### pro-components 中 ProLayout - getMenuData的routes属性如何使用？ 

参数: routes 

说明: 路由的配置信息 

类型: -

### pro-components 中 ProLayout - getMenuData的menu属性如何使用？ 

参数: menu 

说明: menu 的配置项，默认 `{locale: true}` 

类型: `{ locale: boolean }` 

默认值: -

### pro-components 中 ProLayout - getMenuData的menuDataRender属性如何使用？ 

参数: menuDataRender 

说明: menuData 的 render 方法，用来自定义 menuData 

类型: `(menuData: MenuDataItem[]) => MenuDataItem[]` 

默认值: -

### pro-components 中 ProLayout - getMenuData的formatMessage属性如何使用？ 

参数: formatMessage 

说明: react-intl 的 formatMessage 方法 

类型: `(data: { id: any; defaultMessage?: string }) => string;` 

默认值: -

### pro-components 的 ProLayout - getPageTitle 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pathname | 当前的 pathname | location.pathname | - |
| breadcrumb | MenuDataItem 的合集 | `{ [path: string]: MenuDataItem }` | - |
| menu | menu 的配置项，默认 `{locale: true}` | `{ locale: boolean }` | - |
| title | title 的类型 | string | 'Ant Design Pro' |
| formatMessage | react-intl 的 formatMessage 方法 | `(data: { id: any; defaultMessage?: string }) => string;` | - |


### pro-components 中 ProLayout - getPageTitle的pathname属性如何使用？ 

参数: pathname 

说明: 当前的 pathname 

类型: location.pathname 

默认值: -

### pro-components 中 ProLayout - getPageTitle的breadcrumb属性如何使用？ 

参数: breadcrumb 

说明: MenuDataItem 的合集 

类型: `{ [path: string]: MenuDataItem }` 

默认值: -

### pro-components 中 ProLayout - getPageTitle的menu属性如何使用？ 

参数: menu 

说明: menu 的配置项，默认 `{locale: true}` 

类型: `{ locale: boolean }` 

默认值: -

### pro-components 中 ProLayout - getPageTitle的title属性如何使用？ 

参数: title 

说明: title 的类型 

类型: string 

默认值: 'Ant Design Pro'

### pro-components 中 ProLayout - getPageTitle的formatMessage属性如何使用？ 

参数: formatMessage 

说明: react-intl 的 formatMessage 方法 

类型: `(data: { id: any; defaultMessage?: string }) => string;` 

默认值: -

### pro-components 的 ProLayout - GridContent 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| contentWidth | 内容模式 | `Fluid` \| `Fixed` | - |


### pro-components 中 ProLayout - GridContent的contentWidth属性如何使用？ 

参数: contentWidth 

说明: 内容模式 

类型: `Fluid` | `Fixed` 

默认值: -

### pro-components 的 ProLayout - Layout 的 token 有哪些配置？

| token | 说明 | 默认值 |
| --- | --- | --- |
| bgLayout | layout 的背景颜色 | `linear-gradient(${antdToken.colorBgContainer}, ${antdToken.colorBgLayout} 28%)` |
| colorTextAppListIcon | 跨站点应用的图标颜色 | `#666` |
| colorTextAppListIconHover | 跨站点应用的图标 hover 颜色 | `rgba(0, 0, 0, 0.65)` |
| colorBgAppListIconHover | 跨站点应用的图标 hover 背景颜色 | `rgba(0, 0, 0, 0.04)` |


### pro-components 中 ProLayout - Layout 的 token的bgLayout属性如何使用？ 

token: bgLayout 

说明: layout 的背景颜色 

默认值: `linear-gradient(${antdToken.colorBgContainer}, ${antdToken.colorBgLayout} 28%)`

### pro-components 中 ProLayout - Layout 的 token的colorTextAppListIcon属性如何使用？ 

token: colorTextAppListIcon 

说明: 跨站点应用的图标颜色 

默认值: `#666`

### pro-components 中 ProLayout - Layout 的 token的colorTextAppListIconHover属性如何使用？ 

token: colorTextAppListIconHover 

说明: 跨站点应用的图标 hover 颜色 

默认值: `rgba(0, 0, 0, 0.65)`

### pro-components 中 ProLayout - Layout 的 token的colorBgAppListIconHover属性如何使用？ 

token: colorBgAppListIconHover 

说明: 跨站点应用的图标 hover 背景颜色 

默认值: `rgba(0, 0, 0, 0.04)`

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


### pro-components 中 ProLayout - Sider Token的colorMenuBackground属性如何使用？ 

token: colorMenuBackground 

说明: menu 的背景颜色 

默认值: `transparent`

### pro-components 中 ProLayout - Sider Token的colorTextMenuTitle属性如何使用？ 

token: colorTextMenuTitle 

说明: sider 的标题字体颜色 

默认值: `colorTextHeading`

### pro-components 中 ProLayout - Sider Token的colorMenuItemDivider属性如何使用？ 

token: colorMenuItemDivider 

说明: menuItem 分割线的颜色 

默认值: `colorSplit`

### pro-components 中 ProLayout - Sider Token的colorTextMenu属性如何使用？ 

token: colorTextMenu 

说明: menuItem 的字体颜色 

默认值: `colorText`

### pro-components 中 ProLayout - Sider Token的colorTextMenuSecondary属性如何使用？ 

token: colorTextMenuSecondary 

说明: menu 的二级字体颜色，比如 footer 和 action 的 icon 

默认值: `colorText`

### pro-components 中 ProLayout - Sider Token的colorTextMenuSelected属性如何使用？ 

token: colorTextMenuSelected 

说明: menuItem 的选中字体颜色 

默认值: `rgb(0,0,0)`

### pro-components 中 ProLayout - Sider Token的colorTextMenuActive属性如何使用？ 

token: colorTextMenuActive 

说明: menuItem hover 的选中字体颜色 

默认值: `rgba(0, 0, 0, 0.85)`

### pro-components 中 ProLayout - Sider Token的colorTextMenuItemHover属性如何使用？ 

token: colorTextMenuItemHover 

说明: menuItem 的 hover 字体颜色 

默认值: `rgba(255,255,255,0.75)`

### pro-components 中 ProLayout - Sider Token的colorBgMenuItemHover属性如何使用？ 

token: colorBgMenuItemHover 

说明: menuItem 的 hover 背景颜色 

默认值: `rgba(90, 75, 75, 0.03)`

### pro-components 中 ProLayout - Sider Token的colorBgMenuItemSelected属性如何使用？ 

token: colorBgMenuItemSelected 

说明: menuItem 的选中背景颜色 

默认值: `rgba(0, 0, 0, 0.04)`

### pro-components 中 ProLayout - Sider Token的colorBgMenuItemCollapsedElevated属性如何使用？ 

token: colorBgMenuItemCollapsedElevated 

说明: 收起 menuItem 的弹出菜单背景颜色 

默认值: `transparent`

### pro-components 中 ProLayout - Sider Token的colorBgCollapsedButton属性如何使用？ 

token: colorBgCollapsedButton 

说明: 展开收起按钮背景颜色 

默认值: `#fff`

### pro-components 中 ProLayout - Sider Token的colorTextCollapsedButton属性如何使用？ 

token: colorTextCollapsedButton 

说明: 展开收起按钮字体颜色 

默认值: `colorTextMenuSecondary`

### pro-components 中 ProLayout - Sider Token的colorTextCollapsedButtonHover属性如何使用？ 

token: colorTextCollapsedButtonHover 

说明: 展开收起按钮 hover 时字体颜色 

默认值: `colorTextMenu`

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


### pro-components 中 ProLayout - Header Token的colorBgHeader属性如何使用？ 

token: colorBgHeader 

说明: header 的背景颜色 

默认值: `rgba(240, 242, 245, 0.4)`

### pro-components 中 ProLayout - Header Token的colorHeaderTitle属性如何使用？ 

token: colorHeaderTitle 

说明: sider 的标题字体颜色 

默认值: `colorTextHeading`

### pro-components 中 ProLayout - Header Token的colorTextMenu属性如何使用？ 

token: colorTextMenu 

说明: menuItem 的字体颜色 

默认值: `colorText`

### pro-components 中 ProLayout - Header Token的colorTextMenuSecondary属性如何使用？ 

token: colorTextMenuSecondary 

说明: menu 的二级字体颜色，比如 footer 和 action 的 icon 

默认值: `colorText`

### pro-components 中 ProLayout - Header Token的colorTextMenuSelected属性如何使用？ 

token: colorTextMenuSelected 

说明: menuItem 的选中字体颜色 

默认值: `rgb(0,0,0)`

### pro-components 中 ProLayout - Header Token的colorTextMenuActive属性如何使用？ 

token: colorTextMenuActive 

说明: menuItem hover 的选中字体颜色 

默认值: `rgba(0, 0, 0, 0.85)`

### pro-components 中 ProLayout - Header Token的colorBgMenuItemHover属性如何使用？ 

token: colorBgMenuItemHover 

说明: menuItem 的 hover 背景颜色 

默认值: `rgba(90, 75, 75, 0.03)`

### pro-components 中 ProLayout - Header Token的colorBgMenuItemSelected属性如何使用？ 

token: colorBgMenuItemSelected 

说明: menuItem 的选中背景颜色 

默认值: `rgba(0, 0, 0, 0.04)`

### pro-components 中 ProLayout - Header Token的colorTextRightActionsItem属性如何使用？ 

token: colorTextRightActionsItem 

说明: 右上角字体颜色 

默认值: `colorTextSecondary`

### pro-components 中 ProLayout - Header Token的colorBgRightActionsItemHover属性如何使用？ 

token: colorBgRightActionsItemHover 

说明: 右上角选中的 hover 颜色 

默认值: `rgba(0, 0, 0, 0.03)`

### pro-components 中 ProLayout - Header Token的heightLayoutHeader属性如何使用？ 

token: heightLayoutHeader 

说明: header 高度 

默认值: 56

### pro-components 的 ProLayout - pageContainer Token 有哪些配置？

| token | 说明 | 默认值 |
| --- | --- | --- |
| paddingBlockPageContainerContent | pageContainer 自带的 padding block | `24` |
| paddingInlinePageContainerContent | pageContainer 自带的 padding inline | `40` |
| colorBgPageContainer | pageContainer 的背景颜色 | `transparent` |
| colorBgPageContainerFixed | pageContainer 被固定时的背景颜色 | `#FFF` |


### pro-components 中 ProLayout - pageContainer Token的paddingBlockPageContainerContent属性如何使用？ 

token: paddingBlockPageContainerContent 

说明: pageContainer 自带的 padding block 

默认值: `24`

### pro-components 中 ProLayout - pageContainer Token的paddingInlinePageContainerContent属性如何使用？ 

token: paddingInlinePageContainerContent 

说明: pageContainer 自带的 padding inline 

默认值: `40`

### pro-components 中 ProLayout - pageContainer Token的colorBgPageContainer属性如何使用？ 

token: colorBgPageContainer 

说明: pageContainer 的背景颜色 

默认值: `transparent`

### pro-components 中 ProLayout - pageContainer Token的colorBgPageContainerFixed属性如何使用？ 

token: colorBgPageContainerFixed 

说明: pageContainer 被固定时的背景颜色 

默认值: `#FFF`

### pro-components 的 Layout 有哪些配置？

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


### pro-components 中 ProLayout - 基础参数的width属性如何使用？ 

参数: width 

说明: 水印的宽度 

类型: number 

默认值: 120 

版本: 2.2.0

### pro-components 中 ProLayout - 基础参数的height属性如何使用？ 

参数: height 

说明: 水印的高度 

类型: number 

默认值: 64 

版本: 2.2.0

### pro-components 中 ProLayout - 基础参数的rotate属性如何使用？ 

参数: rotate 

说明: 水印绘制时，旋转的角度，单位 ° 

类型: number 

默认值: -22 

版本: 2.2.0

### pro-components 中 ProLayout - 基础参数的image属性如何使用？ 

参数: image 

说明: 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 

类型: `string` 

默认值: - 

版本: 2.2.0

### pro-components 中 ProLayout - 基础参数的zIndex属性如何使用？ 

参数: zIndex 

说明: 追加的水印元素的 z-index 

类型: number 

默认值: 9 

版本: 2.2.0

### pro-components 中 ProLayout - 基础参数的content属性如何使用？ 

参数: content 

说明: 水印文字内容 

类型: `string` | `string[]` 

默认值: - 

版本: 2.2.0

### pro-components 中 ProLayout - 基础参数的fontColor属性如何使用？ 

参数: fontColor 

说明: 水印文字颜色 

类型: `string` 

默认值: `rgba(0,0,0,.15)` 

版本: 2.2.0

### pro-components 中 ProLayout - 基础参数的fontSize属性如何使用？ 

参数: fontSize 

说明: 文字大小 

类型: `string` | `number` 

默认值: 16 

版本: 2.2.0

### pro-components 的 ProLayout - 高级参数 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| markStyle | 水印层的样式 | React.CSSProperties | - | 2.3.0 |
| markClassName | 水印层的类名 | string | - | 2.3.0 |
| gapX | 水印之间的水平间距 | number | 212 | 2.4.0 |
| gapY | 水印之间的垂直间距 | number | 222 | 2.4.0 |
| offsetLeft | 水印在 canvas 画布上绘制的水平偏移量，正常情况下，水印绘制在中间位置，即 `offsetLeft = gapX / 2` | number | `offsetLeft = gapX / 2` | 2.4.0 |
| offsetTop | 水印在 canvas 画布上绘制的垂直偏移量，正常情况下，水印绘制在中间位置，即 `offsetTop = gapY / 2` | number | `offsetTop = gapY / 2` | 2.4.0 |


### pro-components 中 ProLayout - 高级参数的markStyle属性如何使用？ 

参数: markStyle 

说明: 水印层的样式 

类型: React.CSSProperties 

默认值: - 

版本: 2.3.0

### pro-components 中 ProLayout - 高级参数的markClassName属性如何使用？ 

参数: markClassName 

说明: 水印层的类名 

类型: string 

默认值: - 

版本: 2.3.0

### pro-components 中 ProLayout - 高级参数的gapX属性如何使用？ 

参数: gapX 

说明: 水印之间的水平间距 

类型: number 

默认值: 212 

版本: 2.4.0

### pro-components 中 ProLayout - 高级参数的gapY属性如何使用？ 

参数: gapY 

说明: 水印之间的垂直间距 

类型: number 

默认值: 222 

版本: 2.4.0

### pro-components 中 ProLayout - 高级参数的offsetLeft属性如何使用？ 

参数: offsetLeft 

说明: 水印在 canvas 画布上绘制的水平偏移量，正常情况下，水印绘制在中间位置，即 `offsetLeft = gapX / 2` 

类型: number 

默认值: `offsetLeft = gapX / 2` 

版本: 2.4.0

### pro-components 中 ProLayout - 高级参数的offsetTop属性如何使用？ 

参数: offsetTop 

说明: 水印在 canvas 画布上绘制的垂直偏移量，正常情况下，水印绘制在中间位置，即 `offsetTop = gapY / 2` 

类型: number 

默认值: `offsetTop = gapY / 2` 

版本: 2.4.0

### pro-components 的 Layout 有哪些配置？

#### ProLayout - API 

| 参数 | 说明 | 类型 |
| --- | --- | --- |
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
| --- | --- | --- |
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


### pro-components 中 ProLayout - API的avatar属性如何使用？ 

参数: avatar 

说明: 标题栏旁的头像 

类型: -

### pro-components 中 ProLayout - API的backIcon属性如何使用？ 

参数: backIcon 

说明: 自定义 back icon ，如果为 false 不渲染 back icon 

类型: ReactNode | boolean 

默认值: \<ArrowLeft />

### pro-components 中 ProLayout - API的breadcrumb属性如何使用？ 

参数: breadcrumb 

说明: 面包屑的配置 

类型: -

### pro-components 中 ProLayout - API的breadcrumbRender属性如何使用？ 

参数: breadcrumbRender 

说明: 自定义面包屑区域的内容 

类型: `(props, originBreadcrumb) => ReactNode` 

默认值: - 

版本: 4.11.0

### pro-components 中 ProLayout - API的extra属性如何使用？ 

参数: extra 

说明: 操作区，位于 title 行的行尾 

类型: ReactNode 

默认值: -

### pro-components 中 ProLayout - API的footer属性如何使用？ 

参数: footer 

说明: PageHeader 的页脚，一般用于渲染 TabBar 

类型: ReactNode 

默认值: -

### pro-components 中 ProLayout - API的ghost属性如何使用？ 

参数: ghost 

说明: pageHeader 的类型，将会改变背景颜色 

类型: boolean 

默认值: true

### pro-components 中 ProLayout - API的subTitle属性如何使用？ 

参数: subTitle 

说明: 自定义的二级标题文字 

类型: ReactNode 

默认值: -

### pro-components 中 ProLayout - API的tags属性如何使用？ 

参数: tags 

说明: title 旁的 tag 列表 

类型: -

### pro-components 中 ProLayout - API的title属性如何使用？ 

参数: title 

说明: 自定义标题文字 

类型: ReactNode 

默认值: -

### pro-components 中 ProLayout - API的onBack属性如何使用？ 

参数: onBack 

说明: 返回按钮的点击事件 

类型: () => void 

默认值: -

### pro-components 的 Layout 有哪些配置？

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


### pro-components 中 ProLayout - API的content属性如何使用？ 

参数: content 

说明: 内容区 

类型: ReactNode 

默认值: -

### pro-components 中 ProLayout - API的extraContent属性如何使用？ 

参数: extraContent 

说明: 额外内容区，位于 content 的右侧 

类型: ReactNode 

默认值: -

### pro-components 中 ProLayout - API的tabList属性如何使用？ 

参数: tabList 

说明: tab 标题列表 

类型: `{key: string, tab: ReactNode}[]` 

默认值: -

### pro-components 中 ProLayout - API的tabActiveKey属性如何使用？ 

参数: tabActiveKey 

说明: 当前高亮的 tab 项 

类型: string 

默认值: -

### pro-components 中 ProLayout - API的onTabChange属性如何使用？ 

参数: onTabChange 

说明: 切换面板的回调 

类型: `(key) => void` 

默认值: -

### pro-components 中 ProLayout - API的tabBarExtraContent属性如何使用？ 

参数: tabBarExtraContent 

说明: tab bar 上额外的元素 

类型: `React.ReactNode` 

默认值: -

### pro-components 中 ProLayout - API的header属性如何使用？ 

参数: header 

说明: `PageHeaderProps` 

类型: -

### pro-components 中 ProLayout - API的ghost属性如何使用？ 

参数: ghost 

说明: 配置头部区域的背景颜色为透明 

类型: boolean 

默认值: false

### pro-components 中 ProLayout - API的fixedHeader属性如何使用？ 

参数: fixedHeader 

说明: 固定 pageHeader 的内容到顶部，如果页面内容较少，最好不要使用，会有严重的遮挡问题 

类型: `boolean` 

默认值: -

### pro-components 中 ProLayout - API的affixProps属性如何使用？ 

参数: affixProps 

说明: 固钉的配置，与 antd 完全相同 

类型: `AffixProps` 

默认值: -

### pro-components 中 ProLayout - API的footer属性如何使用？ 

参数: footer 

说明: 悬浮在底部的操作栏，传入一个数组，会自动加空格 

类型: `ReactNode[]` 

默认值: -

### pro-components 中 ProLayout - API的waterMarkProps属性如何使用？ 

参数: waterMarkProps 

说明: 配置水印，Layout 会透传给 PageContainer，但是以 PageContainer 的配置优先 

类型: -

### pro-components 中 ProLayout - API的tabProps属性如何使用？ 

参数: tabProps 

说明: Tabs 的相关属性，只有卡片样式的页签支持新增和关闭选项。使用 `closable={false}` 禁止关闭 

类型: -

### pro-components 的 ProLayout - FooterToolbar 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extra | 额外内容区，位于 content 的右侧 | `ReactNode` | - |
| children | 内容区域 | `ReactNode`\|`ReactNode[]` | - |


### pro-components 中 ProLayout - FooterToolbar的extra属性如何使用？ 

参数: extra 

说明: 额外内容区，位于 content 的右侧 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProLayout - FooterToolbar的children属性如何使用？ 

参数: children 

说明: 内容区域 

类型: `ReactNode`|`ReactNode[]` 

默认值: -

### pro-components 的 Form 有哪些配置？

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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| children | 表单控件或者其他元素 | `React.ReactNode` | - |


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


### pro-components 中 ProForm - 何时使用 ProForm？的标准 Form，增加了 `onFinish` 中自动 `loading` 和根据 `request` 自动获取默认值的功能。属性如何使用？ 

布局: 标准 Form，增加了 `onFinish` 中自动 `loading` 和根据 `request` 自动获取默认值的功能。

### pro-components 中 ProForm - 何时使用 ProForm？的在 ProForm 的基础上增加了 `trigger` ，无需维护 `visible` 状态。属性如何使用？ 

布局: 在 ProForm 的基础上增加了 `trigger` ，无需维护 `visible` 状态。

### pro-components 中 ProForm - 何时使用 ProForm？的一般用于作为筛选表单，需要配合其他数据展示组件使用。属性如何使用？ 

布局: 一般用于作为筛选表单，需要配合其他数据展示组件使用。

### pro-components 中 ProForm - 何时使用 ProForm？的一般用于作为行内内置的筛选，比如卡片操作栏和表格操作栏。属性如何使用？ 

布局: 一般用于作为行内内置的筛选，比如卡片操作栏和表格操作栏。

### pro-components 中 ProForm - 何时使用 ProForm？的分步表单，需要配置 StepForm 使用。属性如何使用？ 

布局: 分步表单，需要配置 StepForm 使用。

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


### pro-components 中 ProForm - ProForm的onFinish属性如何使用？ 

参数: onFinish 

说明: 提交表单且数据验证成功后回调事件，同 antd 4 `Form` 组件 API 

类型: `(values)=>Promise<void>` 

默认值: -

### pro-components 中 ProForm - ProForm的onReset属性如何使用？ 

参数: onReset 

说明: 点击重置按钮的回调 

类型: `(e)=>void` 

默认值: -

### pro-components 中 ProForm - ProForm的submitter属性如何使用？ 

参数: submitter 

说明: 提交按钮相关配置 

类型: `boolean` | `SubmitterProps` 

默认值: `true`

### pro-components 中 ProForm - ProForm的syncToUrl属性如何使用？ 

参数: syncToUrl 

说明: 同步参数到 url 上，url 只支持 string，在使用之前最好读一下[url 中的参数类型](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) 

类型: `true` | `(values,type)=>values` 

默认值: -

### pro-components 中 ProForm - ProForm的syncToInitialValues属性如何使用？ 

参数: syncToInitialValues 

说明: 同步结果到 initialValues，默认为 true，如果为 false，form.reset 的时候将会忽略从 url 上获取的数据 

类型: `boolean` 

默认值: `true`

### pro-components 中 ProForm - ProForm的dateFormatter属性如何使用？ 

参数: dateFormatter 

说明: 自动格式化数据，主要是 moment 的表单，支持 string 和 number 两种模式，此外还支持指定函数进行格式化。 

类型: `string| number | ((value: Moment, valueType: string) => string | number) | false` 

默认值: string

### pro-components 中 ProForm - ProForm的omitNil属性如何使用？ 

参数: omitNil 

说明: ProForm 会自动清空 null 和 undefined 的数数据，如果你约定了 nil 代表某种数据，可以设置为 false 关闭此功能 

类型: `boolean` 

默认值: true

### pro-components 中 ProForm - ProForm的params属性如何使用？ 

参数: params 

说明: 发起网络请求的参数，与 request 配合使用 

类型: `Record` 

默认值: -

### pro-components 中 ProForm - ProForm的request属性如何使用？ 

参数: request 

说明: 发起网络请求的参数，返回值会覆盖给 initialValues 

类型: `(params)=>Promise<data>` 

默认值: -

### pro-components 中 ProForm - ProForm的isKeyPressSubmit属性如何使用？ 

参数: isKeyPressSubmit 

说明: 是否使用回车提交 

类型: `boolean` 

默认值: -

### pro-components 中 ProForm - ProForm的formRef属性如何使用？ 

参数: formRef 

说明: 获取表单所使用的 form 

类型: `MutableRefObject<Instance<T>>` 

默认值: -

### pro-components 中 ProForm - ProForm的autoFocusFirstInput属性如何使用？ 

参数: autoFocusFirstInput 

说明: 自动 focus 表单第一个输入框 

类型: `boolean` 

默认值: -

### pro-components 中 ProForm - ProForm的`grid`属性如何使用？ 

参数: `grid` 

说明: 开启栅格化模式，宽度默认百分比，请使用 `colProps` 控制宽度 [查看示例](/components/form#栅格化布局) 

类型: `boolean` 

默认值: -

### pro-components 中 ProForm - ProForm的rowProps属性如何使用？ 

参数: rowProps 

说明: 开启 `grid` 模式时传递给 `Row`, 仅在`ProFormGroup`, `ProFormList`, `ProFormFieldSet` 中有效 

类型: { gutter: 8 }

### pro-components 中 ProForm - ProForm的注意 `LightFilter` 和 `QueryFilter` 仅支持除 `wrapperCol` | `labelCol` | `layout` 外的其他 antd `Form` 组件参数属性如何使用？ 

参数: 注意 `LightFilter` 和 `QueryFilter` 仅支持除 `wrapperCol` | `labelCol` | `layout` 外的其他 antd `Form` 组件参数 

说明: - 

类型: -

### pro-components 的 ProForm - ProForm.Group 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| children | 表单控件或者其他元素 | `React.ReactNode` | - |


### pro-components 中 ProForm - ProForm.Group的title属性如何使用？ 

参数: title 

说明: 标题 

类型: `string` 

默认值: -

### pro-components 中 ProForm - ProForm.Group的children属性如何使用？ 

参数: children 

说明: 表单控件或者其他元素 

类型: `React.ReactNode` 

默认值: -

### pro-components 的 ProForm - submitter 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onSubmit | 提交方法 | `()=>void` | - |
| onReset | 重置方法 | `()=>void` | - |
| searchConfig | 搜索的配置，一般用来配置文本 | `{resetText,submitText}` | - |
| submitButtonProps | 提交按钮的 props | - |
| resetButtonProps | 重置按钮的 props | - |
| render | 自定义操作的渲染 | `false`\|`(props,dom:JSX[])=>ReactNode[]` | - |


### pro-components 中 ProForm - submitter的onSubmit属性如何使用？ 

参数: onSubmit 

说明: 提交方法 

类型: `()=>void` 

默认值: -

### pro-components 中 ProForm - submitter的onReset属性如何使用？ 

参数: onReset 

说明: 重置方法 

类型: `()=>void` 

默认值: -

### pro-components 中 ProForm - submitter的searchConfig属性如何使用？ 

参数: searchConfig 

说明: 搜索的配置，一般用来配置文本 

类型: `{resetText,submitText}` 

默认值: -

### pro-components 中 ProForm - submitter的submitButtonProps属性如何使用？ 

参数: submitButtonProps 

说明: 提交按钮的 props 

类型: -

### pro-components 中 ProForm - submitter的resetButtonProps属性如何使用？ 

参数: resetButtonProps 

说明: 重置按钮的 props 

类型: -

### pro-components 中 ProForm - submitter的render属性如何使用？ 

参数: render 

说明: 自定义操作的渲染 

类型: `false`|`(props,dom:JSX[])=>ReactNode[]` 

默认值: -

### pro-components 的 ProForm - formRef 有哪些配置？

| 方法名 | 使用描述 |
| --- | --- |
| `getFieldsFormatValue` | 使用方法与 `FormInstance` 的 `getFieldsValue` 方法相同，将返回格式化后的所有数据 |
| `getFieldFormatValue` | 使用方法与 `FormInstance` 的 `getFieldValue` 方法相同，将返回格式化后的指定数据 |
| `validateFieldsReturnFormatValue` | 使用方法与 `FormInstance` 的 `validateFields` 方法相同，验证通过后将返回格式化后的所有数据 |


### pro-components 中 ProForm - formRef的`getFieldsFormatValue`属性如何使用？ 

方法名: `getFieldsFormatValue` 

使用描述: 使用方法与 `FormInstance` 的 `getFieldsValue` 方法相同，将返回格式化后的所有数据

### pro-components 中 ProForm - formRef的`getFieldFormatValue`属性如何使用？ 

方法名: `getFieldFormatValue` 

使用描述: 使用方法与 `FormInstance` 的 `getFieldValue` 方法相同，将返回格式化后的指定数据

### pro-components 中 ProForm - formRef的`validateFieldsReturnFormatValue`属性如何使用？ 

方法名: `validateFieldsReturnFormatValue` 

使用描述: 使用方法与 `FormInstance` 的 `validateFields` 方法相同，验证通过后将返回格式化后的所有数据

### pro-components 的 Form 有哪些配置？

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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onFinish | 表单提交成功触发 | `(values:T)=>Promise<false>` | - |


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


### pro-components 中 ProForm - API的current属性如何使用？ 

参数: current 

说明: 当前表单的步骤数，从 `0` 开始 

类型: `number` 

默认值: 0

### pro-components 中 ProForm - API的onCurrentChange属性如何使用？ 

参数: onCurrentChange 

说明: current 发生改变的事件 

类型: `(current:number)=>void` 

默认值: -

### pro-components 中 ProForm - API的onFinish属性如何使用？ 

参数: onFinish 

说明: 表单最后一步提交成功触发，如果返回`true`就会自动重置表单（包括`StepForm`变回第一步） 

类型: `(values:T)=>void | boolean` 

默认值: -

### pro-components 中 ProForm - API的stepsProps属性如何使用？ 

参数: stepsProps 

说明: StepsForm 自带的 Steps 的 props，使用方式与 [antd](https://ant.design/components/steps-cn/) 相同，但是去掉了 current 和 onChange 

类型: -

### pro-components 中 ProForm - API的stepFormRender属性如何使用？ 

参数: stepFormRender 

说明: 自定义当前展示的表单，返回 dom 在表单内部 

类型: `(form) => ReactNode` 

默认值: -

### pro-components 中 ProForm - API的stepsFormRender属性如何使用？ 

参数: stepsFormRender 

说明: 自定义整个表单区域，返回的 dom 在表单的外部 

类型: `(form,submitter) => ReactNode` 

默认值: -

### pro-components 中 ProForm - API的stepsRender属性如何使用？ 

参数: stepsRender 

说明: 自定义步骤器 

类型: `(steps,dom)=>ReactNode` 

默认值: -

### pro-components 中 ProForm - API的formRef属性如何使用？ 

参数: formRef 

说明: StepForm action 的引用，便于自定义触发 

类型: `MutableRefObject<FormInstance>` 

默认值: -

### pro-components 的 ProForm - StepForm 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onFinish | 表单提交成功触发 | `(values:T)=>Promise<false>` | - |


### pro-components 中 ProForm - StepForm的onFinish属性如何使用？ 

参数: onFinish 

说明: 表单提交成功触发 

类型: `(values:T)=>Promise<false>` 

默认值: -

### pro-components 的 Form 有哪些配置？

#### ProForm - API 

| 字段名称 | 类型 |
| --- | --- |
| `layoutType` | 使用的表单布局模式 |
| `steps` | `StepFormProps[]` | `layoutType=steps`中的分步表单配置，需要配置 columns 为数组使用 |
| `columns` | 表单的定义，一般是 json 对象，如果是分步表单，需要使用 json 数组来生成多个表单 |
| `shouldUpdate` | `(newValues: Record<string, any>, oldValues: Record<string, any>) => boolean \| boolean` | 细粒化控制是否渲染。<br /> 为`true`时会自动重新渲染表单项。<br /> 为`false`时不会更新表单项但可以使用[dependencies 触发更新](#结合-shouldupdatefalse-和-dependencies-触发更新)，<br /> 为`function` 时根据返回值判断是否重新渲染表单项，等同直接赋值 `true` 或 `false` [参考示例](#动态控制是否重渲染) |


#### ProForm - ProFormLayoutType 

| 字段名称 |
| --- |
| `Form` |
| `ModalForm` | 弹框表单，配置之后支持 [ModalForm](/components/modal-form) 的所有配置 |
| `DrawerForm` | 抽屉表单，配置之后支持 [DrawerForm](/components/modal-form) 的所有配置 |
| `StepsForm`\|`StepForm` | 配置之后为分步表单，有两种模式一种使用 `steps` 和 `columns` 来生成，一种是通过 `layoutType=StepsForm` 嵌套 `layoutType=StepForm` 来实现 |
| `LightFilter` | 轻量筛选，配置之后支持 [`LightFilter`](/components/query-filter) 的所有配置 |
| `QueryFilter` | 查询表单，配置之后支持 [`QueryFilter`](/components/query-filter) 的所有配置 |
| `Embed` | 内嵌模式，只生成表单项，不生成 Form 可以混合使用 |


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
| --- | --- |
| `layoutType` | 使用的表单布局模式 |
| `steps` | `StepFormProps[]` | `layoutType=steps`中的分步表单配置，需要配置 columns 为数组使用 |
| `columns` | 表单的定义，一般是 json 对象，如果是分步表单，需要使用 json 数组来生成多个表单 |
| `shouldUpdate` | `(newValues: Record<string, any>, oldValues: Record<string, any>) => boolean \| boolean` | 细粒化控制是否渲染。<br /> 为`true`时会自动重新渲染表单项。<br /> 为`false`时不会更新表单项但可以使用[dependencies 触发更新](#结合-shouldupdatefalse-和-dependencies-触发更新)，<br /> 为`function` 时根据返回值判断是否重新渲染表单项，等同直接赋值 `true` 或 `false` [参考示例](#动态控制是否重渲染) |


### pro-components 中 ProForm - API的`layoutType`属性如何使用？ 

字段名称: `layoutType` 

类型: 使用的表单布局模式

### pro-components 中 ProForm - API的`steps`属性如何使用？ 

字段名称: `steps` 

类型: `StepFormProps[]` 

说明: `layoutType=steps`中的分步表单配置，需要配置 columns 为数组使用

### pro-components 中 ProForm - API的`columns`属性如何使用？ 

字段名称: `columns` 

类型: 表单的定义，一般是 json 对象，如果是分步表单，需要使用 json 数组来生成多个表单

### pro-components 中 ProForm - API的`shouldUpdate`属性如何使用？ 

字段名称: `shouldUpdate` 

类型: `(newValues: Record<string, any>, oldValues: Record<string, any>) => boolean | boolean` 

说明: 细粒化控制是否渲染。<br /> 为`true`时会自动重新渲染表单项。<br /> 为`false`时不会更新表单项但可以使用[dependencies 触发更新](#结合-shouldupdatefalse-和-dependencies-触发更新)，<br /> 为`function` 时根据返回值判断是否重新渲染表单项，等同直接赋值 `true` 或 `false` [参考示例](#动态控制是否重渲染)

### pro-components 的 ProForm - ProFormLayoutType 有哪些配置？

| 字段名称 |
| --- |
| `Form` |
| `ModalForm` | 弹框表单，配置之后支持 [ModalForm](/components/modal-form) 的所有配置 |
| `DrawerForm` | 抽屉表单，配置之后支持 [DrawerForm](/components/modal-form) 的所有配置 |
| `StepsForm`\|`StepForm` | 配置之后为分步表单，有两种模式一种使用 `steps` 和 `columns` 来生成，一种是通过 `layoutType=StepsForm` 嵌套 `layoutType=StepForm` 来实现 |
| `LightFilter` | 轻量筛选，配置之后支持 [`LightFilter`](/components/query-filter) 的所有配置 |
| `QueryFilter` | 查询表单，配置之后支持 [`QueryFilter`](/components/query-filter) 的所有配置 |
| `Embed` | 内嵌模式，只生成表单项，不生成 Form 可以混合使用 |


### pro-components 中 ProForm - ProFormLayoutType的`Form`属性如何使用？ 

字段名称: `Form`

### pro-components 中 ProForm - ProFormLayoutType的`ModalForm`属性如何使用？ 

字段名称: `ModalForm` 

说明: 弹框表单，配置之后支持 [ModalForm](/components/modal-form) 的所有配置

### pro-components 中 ProForm - ProFormLayoutType的`DrawerForm`属性如何使用？ 

字段名称: `DrawerForm` 

说明: 抽屉表单，配置之后支持 [DrawerForm](/components/modal-form) 的所有配置

### pro-components 中 ProForm - ProFormLayoutType的`StepsForm`|`StepForm`属性如何使用？ 

字段名称: `StepsForm`|`StepForm` 

说明: 配置之后为分步表单，有两种模式一种使用 `steps` 和 `columns` 来生成，一种是通过 `layoutType=StepsForm` 嵌套 `layoutType=StepForm` 来实现

### pro-components 中 ProForm - ProFormLayoutType的`LightFilter`属性如何使用？ 

字段名称: `LightFilter` 

说明: 轻量筛选，配置之后支持 [`LightFilter`](/components/query-filter) 的所有配置

### pro-components 中 ProForm - ProFormLayoutType的`QueryFilter`属性如何使用？ 

字段名称: `QueryFilter` 

说明: 查询表单，配置之后支持 [`QueryFilter`](/components/query-filter) 的所有配置

### pro-components 中 ProForm - ProFormLayoutType的`Embed`属性如何使用？ 

字段名称: `Embed` 

说明: 内嵌模式，只生成表单项，不生成 Form 可以混合使用

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


### pro-components 中 ProForm - Schema 定义的`key`属性如何使用？ 

字段名称: `key` 

类型: `React.key` 

说明: 确定这个列的唯一值，一般用于 dataIndex 重复的情况

### pro-components 中 ProForm - Schema 定义的`dataIndex`属性如何使用？ 

字段名称: `dataIndex` 

类型: `React.key` | `React.key[]` 

说明: 与实体映射的 key，数组会被转化 `[a,b] => Entity.a.b`

### pro-components 中 ProForm - Schema 定义的`valueType`属性如何使用？ 

字段名称: `valueType` 

类型: `ProFieldValueType` 

说明: 数据的渲渲染方式，我们自带了一部分，你也可以自定义 valueType

### pro-components 中 ProForm - Schema 定义的`title`属性如何使用？ 

字段名称: `title` 

类型: `ReactNode` |`(props,type,dom)=> ReactNode` 

说明: 标题的内容，在 form 中是 label

### pro-components 中 ProForm - Schema 定义的`tooltip`属性如何使用？ 

字段名称: `tooltip` 

类型: `string` 

说明: 会在 title 旁边展示一个 icon，鼠标浮动之后展示

### pro-components 中 ProForm - Schema 定义的`valueEnum`属性如何使用？ 

字段名称: `valueEnum` 

类型: `(Entity)=> ValueEnum` | `ValueEnum` 

说明: 支持 object 和 Map，Map 是支持其他基础类型作为 key

### pro-components 中 ProForm - Schema 定义的`fieldProps`属性如何使用？ 

字段名称: `fieldProps` 

类型: `(form,config)=>fieldProps`| `fieldProps` 

说明: 传给渲染的组件的 props，自定义的时候也会传递

### pro-components 中 ProForm - Schema 定义的`formItemProps`属性如何使用？ 

字段名称: `formItemProps` 

类型: `(form,config)=>formItemProps` | `formItemProps` 

说明: 传递给 Form.Item 的配置

### pro-components 中 ProForm - Schema 定义的`formItemProps.rules`属性如何使用？ 

字段名称: `formItemProps.rules` 

类型: `Rule[]` 

说明: 表单项的校验规则。需要注意的是，如果当前表单项为`formList`时，此规则仅校验列表是否为空，且仅接受元组`[{required: boolean, message: string}]`，用于开启和关闭非空校验及指定空列表提示消息

### pro-components 中 ProForm - Schema 定义的`proFieldProps`属性如何使用？ 

字段名称: `proFieldProps` 

类型: `proFieldProps` 

说明: 设置到 `ProField` 上面的 `props`，内部属性

### pro-components 中 ProForm - Schema 定义的`renderText`属性如何使用？ 

字段名称: `renderText` 

类型: `(text: any, record: Entity, index: number, action: ProCoreActionType) => any` 

说明: 修改的数据是会被 valueType 定义的渲染组件消费

### pro-components 中 ProForm - Schema 定义的`render`属性如何使用？ 

字段名称: `render` 

类型: `(dom,entity,index, action, schema) => React.ReactNode` 

说明: 自定义只读模式的 dom,`render` 方法只管理的只读模式，编辑模式需要使用 `renderFormItem`

### pro-components 中 ProForm - Schema 定义的`renderFormItem`属性如何使用？ 

字段名称: `renderFormItem` 

类型: `(schema,config,form) => React.ReactNode` 

说明: 自定义编辑模式，返回一个 ReactNode，会自动包裹 value 和 onChange。 请使用 dependency 组件控制是否渲染列

### pro-components 中 ProForm - Schema 定义的`request`属性如何使用？ 

字段名称: `request` 

类型: `(params,props) => Promise<{label,value}[]>` 

说明: 从远程请求网络数据，一般用于选择类组件

### pro-components 中 ProForm - Schema 定义的`params`属性如何使用？ 

字段名称: `params` 

类型: `Record<string, any>` 

说明: 额外传递给 `request` 的参数，组件不做处理，但是变化会引起`request` 重新请求数据

### pro-components 中 ProForm - Schema 定义的`dependencies`属性如何使用？ 

字段名称: `dependencies` 

类型: `string | number | (string | number)[]` 

说明: 所依赖的 values 变化后，触发 renderFormItem，fieldProps，formItemProps 重新执行，并把 values 注入到 params 里 [示例](#使用-dependencies-触发-fieldpropsformitempropsrenderformitem-更新)

### pro-components 中 ProForm - Schema 定义的`hideInDescriptions`属性如何使用？ 

字段名称: `hideInDescriptions` 

类型: `boolean` 

说明: 在 descriptions 中隐藏

### pro-components 中 ProForm - Schema 定义的`hideInForm`属性如何使用？ 

字段名称: `hideInForm` 

类型: `boolean` 

说明: 在 Form 中隐藏

### pro-components 中 ProForm - Schema 定义的`hideInTable`属性如何使用？ 

字段名称: `hideInTable` 

类型: `boolean` 

说明: 在 Table 中隐藏

### pro-components 中 ProForm - Schema 定义的`hideInSearch`属性如何使用？ 

字段名称: `hideInSearch` 

类型: `boolean` 

说明: 在 Table 的查询表格中隐藏

### pro-components 中 ProForm - Schema 定义的`columns`属性如何使用？ 

字段名称: `columns` 

类型: `ProFormColumnsType[] | (values) => ProFormColumnsType[]` 

说明: 嵌套子项，valueType 为 dependency 时，请使用`(values) => ProFormColumnsType[]`其他情况使用 `ProFormColumnsType[]`

### pro-components 中 ProForm - Schema 定义的`colProps`属性如何使用？ 

字段名称: `colProps` 

类型: 在开启 grid 模式时传递给 Col

### pro-components 中 ProForm - Schema 定义的`rowProps`属性如何使用？ 

字段名称: `rowProps` 

类型: 开启栅格化模式时传递给 Row

### pro-components 的 Form 有哪些配置？

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

| 容器宽度断点 | 单行展示表单列数（包含操作区域） | 默认布局 |
| --- | --- | --- |
| `≧ 1352px` | 4 列 | `horizontal` |
| `≧ 1062px` | 3 列 | `horizontal` |
| `≧ 701px && < 1063px` | 3 列 | `horizontal` |
| `≧ 513px && < 701px` | 2 列 | `vertical` |
| `< 513px` | 1 列 | `vertical` |


#### ProForm - 强制上下布局时的规则 

| 容器宽度断点 | 单行展示表单列数（包含操作区域） |
| --- | --- |
| `≧ 1057px` | 4 列 |
| `≧ 785px && < 1057px` | 3 列 |
| `≧ 513px && < 785px` | 2 列 |
| `< 513px` | 1 列 |


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


### pro-components 中 ProForm - QueryFilter的collapsed属性如何使用？ 

参数: collapsed 

说明: 是否折叠超出的表单项，用于受控模式 

类型: `boolean` 

默认值: -

### pro-components 中 ProForm - QueryFilter的defaultCollapsed属性如何使用？ 

参数: defaultCollapsed 

说明: 默认状态下是否折叠超出的表单项 

类型: `boolean` 

默认值: true

### pro-components 中 ProForm - QueryFilter的onCollapse属性如何使用？ 

参数: onCollapse 

说明: 切换表单折叠状态时的回调 

类型: `(collapsed)=>void` 

默认值: -

### pro-components 中 ProForm - QueryFilter的hideRequiredMark属性如何使用？ 

参数: hideRequiredMark 

说明: 隐藏所有表单项的必选标记，**默认隐藏** 

类型: `boolean` 

默认值: true

### pro-components 中 ProForm - QueryFilter的submitterColSpanProps属性如何使用？ 

参数: submitterColSpanProps 

说明: 提交按钮所在 col 的 props 

类型: ColProps 

默认值: -

### pro-components 中 ProForm - QueryFilter的defaultColsNumber属性如何使用？ 

参数: defaultColsNumber 

说明: 自定义折叠状态下默认显示的表单控件数量，没有设置或小于 0，则显示一行控件；数量大于等于控件数量则隐藏展开按钮 

类型: `number` 

默认值: -

### pro-components 中 ProForm - QueryFilter的labelWidth属性如何使用？ 

参数: labelWidth 

说明: label 宽度 

类型: `number` | `'auto'` 

默认值: `80`

### pro-components 中 ProForm - QueryFilter的span属性如何使用？ 

参数: span 

说明: 表单项宽度 

类型: `number[0 - 24]` 

默认值: -

### pro-components 中 ProForm - QueryFilter的split属性如何使用？ 

参数: split 

说明: 每一行是否有分割线 

类型: `boolean` 

默认值: -

### pro-components 中 ProForm - QueryFilter的preserve属性如何使用？ 

参数: preserve 

说明: 是否能够查询收起的数据，如果设置为 false，收起后的表单数据将会丢失 

类型: `boolean` 

默认值: true

### pro-components 的 ProForm - 默认布局时的规则 有哪些配置？

| 容器宽度断点 | 单行展示表单列数（包含操作区域） | 默认布局 |
| --- | --- | --- |
| `≧ 1352px` | 4 列 | `horizontal` |
| `≧ 1062px` | 3 列 | `horizontal` |
| `≧ 701px && < 1063px` | 3 列 | `horizontal` |
| `≧ 513px && < 701px` | 2 列 | `vertical` |
| `< 513px` | 1 列 | `vertical` |


### pro-components 中 ProForm - 默认布局时的规则的`≧ 1352px`属性如何使用？ 

容器宽度断点: `≧ 1352px` 

单行展示表单列数（包含操作区域）: 4 列 

默认布局: `horizontal`

### pro-components 中 ProForm - 默认布局时的规则的`≧ 1062px`属性如何使用？ 

容器宽度断点: `≧ 1062px` 

单行展示表单列数（包含操作区域）: 3 列 

默认布局: `horizontal`

### pro-components 中 ProForm - 默认布局时的规则的`≧ 701px && < 1063px`属性如何使用？ 

容器宽度断点: `≧ 701px && < 1063px` 

单行展示表单列数（包含操作区域）: 3 列 

默认布局: `horizontal`

### pro-components 中 ProForm - 默认布局时的规则的`≧ 513px && < 701px`属性如何使用？ 

容器宽度断点: `≧ 513px && < 701px` 

单行展示表单列数（包含操作区域）: 2 列 

默认布局: `vertical`

### pro-components 中 ProForm - 默认布局时的规则的`< 513px`属性如何使用？ 

容器宽度断点: `< 513px` 

单行展示表单列数（包含操作区域）: 1 列 

默认布局: `vertical`

### pro-components 的 ProForm - 强制上下布局时的规则 有哪些配置？

| 容器宽度断点 | 单行展示表单列数（包含操作区域） |
| --- | --- |
| `≧ 1057px` | 4 列 |
| `≧ 785px && < 1057px` | 3 列 |
| `≧ 513px && < 785px` | 2 列 |
| `< 513px` | 1 列 |


### pro-components 中 ProForm - 强制上下布局时的规则的`≧ 1057px`属性如何使用？ 

容器宽度断点: `≧ 1057px` 

单行展示表单列数（包含操作区域）: 4 列

### pro-components 中 ProForm - 强制上下布局时的规则的`≧ 785px && < 1057px`属性如何使用？ 

容器宽度断点: `≧ 785px && < 1057px` 

单行展示表单列数（包含操作区域）: 3 列

### pro-components 中 ProForm - 强制上下布局时的规则的`≧ 513px && < 785px`属性如何使用？ 

容器宽度断点: `≧ 513px && < 785px` 

单行展示表单列数（包含操作区域）: 2 列

### pro-components 中 ProForm - 强制上下布局时的规则的`< 513px`属性如何使用？ 

容器宽度断点: `< 513px` 

单行展示表单列数（包含操作区域）: 1 列

### pro-components 的 ProForm - LightFilter 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| collapse | 是否默认折叠全部字段 | `boolean` | `false` |
| collapseLabel | 折叠区域的标签 | `ReactNode` | `更多筛选 <DownOutlined/>` |
| footerRender | 底部内容，当不需要默认底部按钮时，可以设为 footer={false} | `(onClear?: () => void, onConfirm: () => void) => JSX.Element \| false)`\|`false` | - |
| placement | 选择框弹出的位置 ：`bottomLeft` `bottomRight` `topLeft` `topRight` | string | bottomLeft |


### pro-components 中 ProForm - LightFilter的collapse属性如何使用？ 

参数: collapse 

说明: 是否默认折叠全部字段 

类型: `boolean` 

默认值: `false`

### pro-components 中 ProForm - LightFilter的collapseLabel属性如何使用？ 

参数: collapseLabel 

说明: 折叠区域的标签 

类型: `ReactNode` 

默认值: `更多筛选 <DownOutlined/>`

### pro-components 中 ProForm - LightFilter的footerRender属性如何使用？ 

参数: footerRender 

说明: 底部内容，当不需要默认底部按钮时，可以设为 footer={false} 

类型: `(onClear?: () => void, onConfirm: () => void) => JSX.Element | false)`|`false` 

默认值: -

### pro-components 中 ProForm - LightFilter的placement属性如何使用？ 

参数: placement 

说明: 选择框弹出的位置 ：`bottomLeft` `bottomRight` `topLeft` `topRight` 

类型: string 

默认值: bottomLeft

### pro-components 的 Form 有哪些配置？

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
| resize | 是否调整大小 | `{onResize,maxWidth,minWidth}` \| `Boolean` | { onResize: () => { }, maxWidth: window.innerWidth * 0.8, minWidth: 300} |
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


### pro-components 中 ProForm - ModalForm的trigger属性如何使用？ 

参数: trigger 

说明: 用于触发 Modal 打开的 dom，一般是 button 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProForm - ModalForm的open属性如何使用？ 

参数: open 

说明: 是否打开 

类型: `open` 

默认值: -

### pro-components 中 ProForm - ModalForm的onOpenChange属性如何使用？ 

参数: onOpenChange 

说明: visible 改变时触发 

类型: `(open:boolean)=>void` 

默认值: -

### pro-components 中 ProForm - ModalForm的modalProps属性如何使用？ 

参数: modalProps 

说明: Modal 的 props，使用方式与 [antd](https://ant.design/components/modal-cn/) 相同。注意：不支持 'visible'，请使用全局的 visible 

类型: -

### pro-components 中 ProForm - ModalForm的title属性如何使用？ 

参数: title 

说明: 弹框的标题 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProForm - ModalForm的width属性如何使用？ 

参数: width 

说明: 弹框的宽度 

类型: `Number` 

默认值: -

### pro-components 中 ProForm - ModalForm的onFinish属性如何使用？ 

参数: onFinish 

说明: 提交数据时触发，如果返回一个 true。会关掉抽屉，如果配置了 `destroyOnClose` 还会重置表单。 

类型: `async (values)=>boolean` 

默认值: -

### pro-components 中 ProForm - ModalForm的submitTimeout属性如何使用？ 

参数: submitTimeout 

说明: 提交数据时，禁用取消按钮的超时时间（毫秒）。 

类型: `Number` 

默认值: -

### pro-components 中 ProForm - ModalForm的submitter属性如何使用？ 

参数: submitter 

说明: 提交按钮相关配置，使用方式与 [ProForm](https://procomponents.ant.design/components/form) 相同。 

类型: -

### pro-components 的 ProForm - DrawerForm 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| trigger | 用于触发 Modal 打开的 dom，一般是 button | `ReactNode` | - |
| resize | 是否调整大小 | `{onResize,maxWidth,minWidth}` \| `Boolean` | { onResize: () => { }, maxWidth: window.innerWidth * 0.8, minWidth: 300} |
| onOpenChange | open 改变时触发 | `(open:boolean)=>void` | - |
| drawerProps | Drawer 的 props，使用方式与 [antd](https://ant.design/components/drawer-cn/) 相同。注意：不支持 'visible'，请使用全局的 visible | - |
| title | 抽屉的标题 | `ReactNode` | - |
| width | 抽屉的宽度（受控属性，使用时权重高于 resize） | `Number` | - |
| onFinish | 提交数据时触发，如果返回一个 true。会关掉抽屉，如果配置了 `destroyOnClose` 还会重置表单。 | `async (values)=>boolean` | - |
| submitTimeout | 提交数据时，禁用取消按钮的超时时间（毫秒）。 | `Number` | - |


### pro-components 中 ProForm - DrawerForm的trigger属性如何使用？ 

参数: trigger 

说明: 用于触发 Modal 打开的 dom，一般是 button 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProForm - DrawerForm的resize属性如何使用？ 

参数: resize 

说明: 是否调整大小 

类型: `{onResize,maxWidth,minWidth}` | `Boolean` 

默认值: { onResize: () => { }, maxWidth: window.innerWidth * 0.8, minWidth: 300}

### pro-components 中 ProForm - DrawerForm的onOpenChange属性如何使用？ 

参数: onOpenChange 

说明: open 改变时触发 

类型: `(open:boolean)=>void` 

默认值: -

### pro-components 中 ProForm - DrawerForm的drawerProps属性如何使用？ 

参数: drawerProps 

说明: Drawer 的 props，使用方式与 [antd](https://ant.design/components/drawer-cn/) 相同。注意：不支持 'visible'，请使用全局的 visible 

类型: -

### pro-components 中 ProForm - DrawerForm的title属性如何使用？ 

参数: title 

说明: 抽屉的标题 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProForm - DrawerForm的width属性如何使用？ 

参数: width 

说明: 抽屉的宽度（受控属性，使用时权重高于 resize） 

类型: `Number` 

默认值: -

### pro-components 中 ProForm - DrawerForm的onFinish属性如何使用？ 

参数: onFinish 

说明: 提交数据时触发，如果返回一个 true。会关掉抽屉，如果配置了 `destroyOnClose` 还会重置表单。 

类型: `async (values)=>boolean` 

默认值: -

### pro-components 中 ProForm - DrawerForm的submitTimeout属性如何使用？ 

参数: submitTimeout 

说明: 提交数据时，禁用取消按钮的超时时间（毫秒）。 

类型: `Number` 

默认值: -

### pro-components 的 Form 有哪些配置？

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


### pro-components 中 ProForm - LoginForm的logo属性如何使用？ 

参数: logo 

说明: logo 的配置，支持 ReactNode 和 string 

类型: `ReactNode | url` 

默认值: -

### pro-components 中 ProForm - LoginForm的title属性如何使用？ 

参数: title 

说明: 标题，可以配置为空 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProForm - LoginForm的subTitle属性如何使用？ 

参数: subTitle 

说明: 二级标题，可以配置为空 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProForm - LoginForm的actions属性如何使用？ 

参数: actions 

说明: 自定义额外的登录功能 

类型: `ReactNode`

### pro-components 中 ProForm - LoginForm的message属性如何使用？ 

参数: message 

说明: form 顶部的一个提示配置，可以配置一些错误的提示信息 

类型: `ReactNode` 

默认值: -

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


### pro-components 中 ProForm - LoginFormPage的logo属性如何使用？ 

参数: logo 

说明: logo 的配置，支持 ReactNode 和 string 

类型: `ReactNode | url` 

默认值: -

### pro-components 中 ProForm - LoginFormPage的title属性如何使用？ 

参数: title 

说明: 标题，可以配置为空 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProForm - LoginFormPage的subTitle属性如何使用？ 

参数: subTitle 

说明: 二级标题，可以配置为空 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProForm - LoginFormPage的actions属性如何使用？ 

参数: actions 

说明: 自定义额外的登录功能 

类型: `ReactNode`

### pro-components 中 ProForm - LoginFormPage的message属性如何使用？ 

参数: message 

说明: form 顶部的一个提示配置，可以配置一些错误的提示信息 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProForm - LoginFormPage的backgroundImageUrl属性如何使用？ 

参数: backgroundImageUrl 

说明: 整个区域的背景图片配置，手机端不会展示 

类型: `url` 

默认值: -

### pro-components 中 ProForm - LoginFormPage的activityConfig属性如何使用？ 

参数: activityConfig 

说明: 活动的配置，包含 title，subTitle，action，分别代表标题，次标题和行动按钮，也可配置 style 来控制区域的样式 

类型: `{title,subTitle,action,style}` 

默认值: -

### pro-components 的 Form 有哪些配置？

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


### pro-components 中 ProForm - ProFormList API的itemRender属性如何使用？ 

参数: itemRender 

说明: 自定义 Item，可以用来将 action 放到别的地方 

类型: `(doms,listMeta)=> ReactNode` 

默认值: -

### pro-components 中 ProForm - ProFormList API的creatorRecord属性如何使用？ 

参数: creatorRecord 

说明: 新建一行的默认值 

类型: `Record<string, any> | () => Record<string, any>` 

默认值: -

### pro-components 中 ProForm - ProFormList API的creatorButtonProps属性如何使用？ 

参数: creatorButtonProps 

说明: 新建一行按钮的配置 

类型: `buttonProps & { creatorButtonText:string,position:"top"|"bottom" }` 

默认值: `{creatorButtonText:"新建一行"}`

### pro-components 中 ProForm - ProFormList API的label属性如何使用？ 

参数: label 

说明: 与 From.Item 相同 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProForm - ProFormList API的name属性如何使用？ 

参数: name 

说明: list 在 form 中的值，必填项 

类型: `NamePath` 

默认值: -

### pro-components 中 ProForm - ProFormList API的alwaysShowItemLabel属性如何使用？ 

参数: alwaysShowItemLabel 

说明: Item 中总是展示 label 

类型: `boolean` 

默认值: -

### pro-components 中 ProForm - ProFormList API的actionRef属性如何使用？ 

参数: actionRef 

说明: 当前 List 的自带操作，可以增删改查列表项 

类型: `{add,remove,move,get}` 

默认值: -

### pro-components 中 ProForm - ProFormList API的actionGuard属性如何使用？ 

参数: actionGuard 

说明: FormItem 的拦截器，包含删除和添加的拦截，可以用 actionRef 拿到当前行的值 

类型: `{beforeAddRow:(index)=>boolean,beforeRemoveRow:(index)=>boolean}` 

默认值: -

### pro-components 中 ProForm - ProFormList API的min属性如何使用？ 

参数: min 

说明: 最少条目，删除时如果当前数据条目少于该数则无法删除 

类型: `number` 

默认值: -

### pro-components 中 ProForm - ProFormList API的max属性如何使用？ 

参数: max 

说明: 最多条目，新增或复制时如果当前数据条目多于该数则无法新增或复制 

类型: `number` 

默认值: -

### pro-components 中 ProForm - ProFormList API的copyIconProps属性如何使用？ 

参数: copyIconProps 

说明: 复制按钮的配置，false 可以取消 

类型: `{ Icon?: React.FC<any>; tooltipText?: string; } | false` 

默认值: -

### pro-components 中 ProForm - ProFormList API的deleteIconProps属性如何使用？ 

参数: deleteIconProps 

说明: 删除按钮的配置，false 可以取消 

类型: `{ Icon?: React.FC<any>; tooltipText?: string; } | false` 

默认值: -

### pro-components 中 ProForm - ProFormList API的actionRender属性如何使用？ 

参数: actionRender 

说明: 自定义操作按钮 

类型: `(field,action,defaultActionDom,count)=>React.ReactNode[]` 

默认值: -

### pro-components 中 ProForm - ProFormList API的onAfterAdd属性如何使用？ 

参数: onAfterAdd 

说明: 新增数据后的钩子 

类型: `(defaultValue: StoreValue, insertIndex: number, count: number) => void` 

默认值: -

### pro-components 中 ProForm - ProFormList API的onAfterRemove属性如何使用？ 

参数: onAfterRemove 

说明: 删除数据后的钩子 

类型: `(index: number, count: number) => void` 

默认值: -

### pro-components 的 Form 有哪些配置？

#### ProForm - 组件列表 

| 组件 |
| --- |
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fieldProps | antd 组件的 props | `SwitchProps` | - |


#### ProForm - ProFormRate 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fieldProps | antd 组件的 props | `RateProps` | - |


#### ProForm - ProFormSlider 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fieldProps | antd 组件的 props | `SliderProps` | - |


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
| --- |
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


### pro-components 中 ProForm - 组件列表的用于输入各类文本属性如何使用？ 

组件: 用于输入各类文本

### pro-components 中 ProForm - 组件列表的用于输入数字，它自带了一个格式化 (保留 2 位小数，最小值为 0)，有需要你可以关掉它。属性如何使用？ 

组件: 用于输入数字，它自带了一个格式化 (保留 2 位小数，最小值为 0)，有需要你可以关掉它。

### pro-components 中 ProForm - 组件列表的用于输入密码属性如何使用？ 

组件: 用于输入密码

### pro-components 中 ProForm - 组件列表的用于输入多行文本属性如何使用？ 

组件: 用于输入多行文本

### pro-components 中 ProForm - 组件列表的ProFormCaptcha属性如何使用？ 

组件: ProFormCaptcha 

使用场景: 用于输入验证码， 一般需要与发送验证码接口一起使用

### pro-components 中 ProForm - 组件列表的日期选择器用于输入日期属性如何使用？ 

组件: 日期选择器用于输入日期

### pro-components 中 ProForm - 组件列表的日期 + 时间选择器，用于输入日期和时间属性如何使用？ 

组件: 日期 + 时间选择器，用于输入日期和时间

### pro-components 中 ProForm - 组件列表的日期区间选择器用于输入一个日期区间属性如何使用？ 

组件: 日期区间选择器用于输入一个日期区间

### pro-components 中 ProForm - 组件列表的日期 + 时间区间选择器，用于输入一个日期 + 时间的区间属性如何使用？ 

组件: 日期 + 时间区间选择器，用于输入一个日期 + 时间的区间

### pro-components 中 ProForm - 组件列表的支持 `request` 和 `valueEnum` 两种方式来生成子项，用于从两项以上中选择一项属性如何使用？ 

组件: 支持 `request` 和 `valueEnum` 两种方式来生成子项，用于从两项以上中选择一项

### pro-components 中 ProForm - 组件列表的支持 `request` 和 `valueEnum` 两种方式来生成子项，用于从两项以上中选择一项属性如何使用？ 

组件: 支持 `request` 和 `valueEnum` 两种方式来生成子项，用于从两项以上中选择一项

### pro-components 中 ProForm - 组件列表的在 Checkbox 基础上支持了 layout，也支持 `request` 和 `valueEnum` 两种方式来生成子项属性如何使用？ 

组件: 在 Checkbox 基础上支持了 layout，也支持 `request` 和 `valueEnum` 两种方式来生成子项

### pro-components 中 ProForm - 组件列表的在 Radio 基础上也支持 `request` 和 `valueEnum` 两种方式来生成子项，用于单选某项，但是可以展示出来所有选项。属性如何使用？ 

组件: 在 Radio 基础上也支持 `request` 和 `valueEnum` 两种方式来生成子项，用于单选某项，但是可以展示出来所有选项。

### pro-components 中 ProForm - 组件列表的当用户需要在数值区间 / 自定义区间内进行选择时，可为连续或离散值。属性如何使用？ 

组件: 当用户需要在数值区间 / 自定义区间内进行选择时，可为连续或离散值。

### pro-components 中 ProForm - 组件列表的用于输入互斥的两个选项，一般是 true 和 false属性如何使用？ 

组件: 用于输入互斥的两个选项，一般是 true 和 false

### pro-components 中 ProForm - 组件列表的按钮样式的上传文件属性如何使用？ 

组件: 按钮样式的上传文件

### pro-components 中 ProForm - 组件列表的区域的上传文件，一般用于突出上传文件的表单中属性如何使用？ 

组件: 区域的上传文件，一般用于突出上传文件的表单中

### pro-components 中 ProForm - 组件列表的ProFormMoney属性如何使用？ 

组件: ProFormMoney 

使用场景: 通用金额输入组件

### pro-components 中 ProForm - 组件列表的分段控制器属性如何使用？ 

组件: 分段控制器

### pro-components 的 ProForm - 通用的属性 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | Field 的长度，我们归纳了常用的 Field 长度以及适合的场景，支持了一些枚举 "xs" , "sm" , "md" ,"lg" , "xl" | `number \| "xs" \| "sm" \| "md" \| "lg" \| "xl"` | - |
| rowProps | 开启 `grid` 模式时传递给 Row, 仅在`ProFormGroup`, `ProFormList`, `ProFormFieldSet` 中有效 | { gutter: 8 } |
| colProps | 开启 `grid` 模式时传递给 Col | { xs: 24 } |
| tooltip | 会在 label 旁增加一个 icon，悬浮后展示配置的信息 | `string \| tooltipProps` | - |
| secondary | 是否是次要控件，只针对 LightFilter 下有效 | `boolean` | `false` |
| allowClear | 支持清除，针对 LightFilter 下有效，主动设置情况下同时也会透传给 `fieldProps` | `boolean` | `true` |


### pro-components 中 ProForm - 通用的属性的width属性如何使用？ 

参数: width 

说明: Field 的长度，我们归纳了常用的 Field 长度以及适合的场景，支持了一些枚举 "xs" , "sm" , "md" ,"lg" , "xl" 

类型: `number | "xs" | "sm" | "md" | "lg" | "xl"` 

默认值: -

### pro-components 中 ProForm - 通用的属性的rowProps属性如何使用？ 

参数: rowProps 

说明: 开启 `grid` 模式时传递给 Row, 仅在`ProFormGroup`, `ProFormList`, `ProFormFieldSet` 中有效 

类型: { gutter: 8 }

### pro-components 中 ProForm - 通用的属性的colProps属性如何使用？ 

参数: colProps 

说明: 开启 `grid` 模式时传递给 Col 

类型: { xs: 24 }

### pro-components 中 ProForm - 通用的属性的tooltip属性如何使用？ 

参数: tooltip 

说明: 会在 label 旁增加一个 icon，悬浮后展示配置的信息 

类型: `string | tooltipProps` 

默认值: -

### pro-components 中 ProForm - 通用的属性的secondary属性如何使用？ 

参数: secondary 

说明: 是否是次要控件，只针对 LightFilter 下有效 

类型: `boolean` 

默认值: `false`

### pro-components 中 ProForm - 通用的属性的allowClear属性如何使用？ 

参数: allowClear 

说明: 支持清除，针对 LightFilter 下有效，主动设置情况下同时也会透传给 `fieldProps` 

类型: `boolean` 

默认值: `true`

### pro-components 的 ProForm - ProFormCaptcha 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onGetCaptcha | 点击获取验证码的事件，如果配置了 phoneName 会自动注入 | `(phone)=>Promise<any>` | - |
| onTiming | 计时数字监听 | `(count: number)=>void` | - |
| captchaProps | 获取验证码按钮的 props，与 antd 的 props 相同 | `ButtonProps` | - |
| countDown | 倒计时的秒数 | number | 60 |
| captchaTextRender | 渲染计时的文案 | `(timing: boolean, count: number) => React.ReactNode` | - |


### pro-components 中 ProForm - ProFormCaptcha的onGetCaptcha属性如何使用？ 

参数: onGetCaptcha 

说明: 点击获取验证码的事件，如果配置了 phoneName 会自动注入 

类型: `(phone)=>Promise<any>` 

默认值: -

### pro-components 中 ProForm - ProFormCaptcha的onTiming属性如何使用？ 

参数: onTiming 

说明: 计时数字监听 

类型: `(count: number)=>void` 

默认值: -

### pro-components 中 ProForm - ProFormCaptcha的captchaProps属性如何使用？ 

参数: captchaProps 

说明: 获取验证码按钮的 props，与 antd 的 props 相同 

类型: `ButtonProps` 

默认值: -

### pro-components 中 ProForm - ProFormCaptcha的countDown属性如何使用？ 

参数: countDown 

说明: 倒计时的秒数 

类型: number 

默认值: 60

### pro-components 中 ProForm - ProFormCaptcha的captchaTextRender属性如何使用？ 

参数: captchaTextRender 

说明: 渲染计时的文案 

类型: `(timing: boolean, count: number) => React.ReactNode` 

默认值: -

### pro-components 的 ProForm - ProFormSelect 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueEnum | 当前列值的枚举 [valueEnum](/components/table#valueenum) | `Record` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| debounceTime | 防抖动时间，与 request 配合使用 | `number` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `SelectProps ` | - |


### pro-components 中 ProForm - ProFormSelect的valueEnum属性如何使用？ 

参数: valueEnum 

说明: 当前列值的枚举 [valueEnum](/components/table#valueenum) 

类型: `Record` 

默认值: -

### pro-components 中 ProForm - ProFormSelect的request属性如何使用？ 

参数: request 

说明: 从网络请求枚举数据 

类型: `()=>Promise<{label,value}>` 

默认值: -

### pro-components 中 ProForm - ProFormSelect的debounceTime属性如何使用？ 

参数: debounceTime 

说明: 防抖动时间，与 request 配合使用 

类型: `number` 

默认值: -

### pro-components 中 ProForm - ProFormSelect的params属性如何使用？ 

参数: params 

说明: 发起网络请求的参数，与 request 配合使用 

类型: `Record` 

默认值: -

### pro-components 中 ProForm - ProFormSelect的fieldProps属性如何使用？ 

参数: fieldProps 

说明: antd 组件的 props 

类型: `SelectProps ` 

默认值: -

### pro-components 的 ProForm - ProFormTreeSelect 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueEnum | 当前列值的枚举 [valueEnum](/components/table#valueenum) | `Record` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| debounceTime | 防抖动时间，与 request 配合使用 | `number` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `TreeSelectProps` | - |


### pro-components 中 ProForm - ProFormTreeSelect的valueEnum属性如何使用？ 

参数: valueEnum 

说明: 当前列值的枚举 [valueEnum](/components/table#valueenum) 

类型: `Record` 

默认值: -

### pro-components 中 ProForm - ProFormTreeSelect的request属性如何使用？ 

参数: request 

说明: 从网络请求枚举数据 

类型: `()=>Promise<{label,value}>` 

默认值: -

### pro-components 中 ProForm - ProFormTreeSelect的debounceTime属性如何使用？ 

参数: debounceTime 

说明: 防抖动时间，与 request 配合使用 

类型: `number` 

默认值: -

### pro-components 中 ProForm - ProFormTreeSelect的params属性如何使用？ 

参数: params 

说明: 发起网络请求的参数，与 request 配合使用 

类型: `Record` 

默认值: -

### pro-components 中 ProForm - ProFormTreeSelect的fieldProps属性如何使用？ 

参数: fieldProps 

说明: antd 组件的 props 

类型: `TreeSelectProps` 

默认值: -

### pro-components 的 ProForm - ProFormCheckbox 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 与 select 相同，根据 options 生成子节点，推荐使用。 | `string[]` \| `{label:ReactNode,value:string}[]` | - |
| layout | 配置 checkbox 的样子，支持垂直`vertical` 和 `horizontal` | `horizontal` \| `vertical` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `CheckboxProps` | - |


### pro-components 中 ProForm - ProFormCheckbox的options属性如何使用？ 

参数: options 

说明: 与 select 相同，根据 options 生成子节点，推荐使用。 

类型: `string[]` | `{label:ReactNode,value:string}[]` 

默认值: -

### pro-components 中 ProForm - ProFormCheckbox的layout属性如何使用？ 

参数: layout 

说明: 配置 checkbox 的样子，支持垂直`vertical` 和 `horizontal` 

类型: `horizontal` | `vertical` 

默认值: -

### pro-components 中 ProForm - ProFormCheckbox的request属性如何使用？ 

参数: request 

说明: 从网络请求枚举数据 

类型: `()=>Promise<{label,value}>` 

默认值: -

### pro-components 中 ProForm - ProFormCheckbox的params属性如何使用？ 

参数: params 

说明: 发起网络请求的参数，与 request 配合使用 

类型: `Record` 

默认值: -

### pro-components 中 ProForm - ProFormCheckbox的fieldProps属性如何使用？ 

参数: fieldProps 

说明: antd 组件的 props 

类型: `CheckboxProps` 

默认值: -

### pro-components 的 ProForm - ProFormRadio.Group 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 与 select 相同，根据 options 生成子节点，推荐使用。 | `string[]` \| `{label:ReactNode,value:string}[]` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| radioType | 设置是按钮模式还是 radio 模式 | `default`\|`button` | `default` |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `RadioProps` | - |


### pro-components 中 ProForm - ProFormRadio.Group的options属性如何使用？ 

参数: options 

说明: 与 select 相同，根据 options 生成子节点，推荐使用。 

类型: `string[]` | `{label:ReactNode,value:string}[]` 

默认值: -

### pro-components 中 ProForm - ProFormRadio.Group的request属性如何使用？ 

参数: request 

说明: 从网络请求枚举数据 

类型: `()=>Promise<{label,value}>` 

默认值: -

### pro-components 中 ProForm - ProFormRadio.Group的radioType属性如何使用？ 

参数: radioType 

说明: 设置是按钮模式还是 radio 模式 

类型: `default`|`button` 

默认值: `default`

### pro-components 中 ProForm - ProFormRadio.Group的params属性如何使用？ 

参数: params 

说明: 发起网络请求的参数，与 request 配合使用 

类型: `Record` 

默认值: -

### pro-components 中 ProForm - ProFormRadio.Group的fieldProps属性如何使用？ 

参数: fieldProps 

说明: antd 组件的 props 

类型: `RadioProps` 

默认值: -

### pro-components 的 ProForm - ProFormCascader 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 与 cascader 相同，根据 options 生成子节点，推荐使用。 | `string[]` \| `{label:ReactNode,value:string}[]` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `CascaderProps` | - |


### pro-components 中 ProForm - ProFormCascader的options属性如何使用？ 

参数: options 

说明: 与 cascader 相同，根据 options 生成子节点，推荐使用。 

类型: `string[]` | `{label:ReactNode,value:string}[]` 

默认值: -

### pro-components 中 ProForm - ProFormCascader的request属性如何使用？ 

参数: request 

说明: 从网络请求枚举数据 

类型: `()=>Promise<{label,value}>` 

默认值: -

### pro-components 中 ProForm - ProFormCascader的params属性如何使用？ 

参数: params 

说明: 发起网络请求的参数，与 request 配合使用 

类型: `Record` 

默认值: -

### pro-components 中 ProForm - ProFormCascader的fieldProps属性如何使用？ 

参数: fieldProps 

说明: antd 组件的 props 

类型: `CascaderProps` 

默认值: -

### pro-components 的 ProForm - ProFormSwitch 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fieldProps | antd 组件的 props | `SwitchProps` | - |


### pro-components 中 ProForm - ProFormSwitch的fieldProps属性如何使用？ 

参数: fieldProps 

说明: antd 组件的 props 

类型: `SwitchProps` 

默认值: -

### pro-components 的 ProForm - ProFormRate 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fieldProps | antd 组件的 props | `RateProps` | - |


### pro-components 中 ProForm - ProFormRate的fieldProps属性如何使用？ 

参数: fieldProps 

说明: antd 组件的 props 

类型: `RateProps` 

默认值: -

### pro-components 的 ProForm - ProFormSlider 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fieldProps | antd 组件的 props | `SliderProps` | - |


### pro-components 中 ProForm - ProFormSlider的fieldProps属性如何使用？ 

参数: fieldProps 

说明: antd 组件的 props 

类型: `SliderProps` 

默认值: -

### pro-components 的 ProForm - ProFormUploadDragger 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | Dragger 的图标 | `ReactNode` | InboxOutlined |
| title | Dragger 的标题 | `ReactNode` | ' 单击或拖动文件到此区域进行上传' |
| description | Dragger 的描述 | `ReactNode` | ' 支持单次或批量上传' |


### pro-components 中 ProForm - ProFormUploadDragger的icon属性如何使用？ 

参数: icon 

说明: Dragger 的图标 

类型: `ReactNode` 

默认值: InboxOutlined

### pro-components 中 ProForm - ProFormUploadDragger的title属性如何使用？ 

参数: title 

说明: Dragger 的标题 

类型: `ReactNode` 

默认值: ' 单击或拖动文件到此区域进行上传'

### pro-components 中 ProForm - ProFormUploadDragger的description属性如何使用？ 

参数: description 

说明: Dragger 的描述 

类型: `ReactNode` 

默认值: ' 支持单次或批量上传'

### pro-components 的 ProForm - ProFormUploadButton 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | Button 的图标 | `ReactNode` | UploadOutlined |
| title | Button 的标题 | `ReactNode` | 单击上传 |
| max | 最大上传数量，超过最大数量就会隐藏上传按钮 | `number` | - |


### pro-components 中 ProForm - ProFormUploadButton的icon属性如何使用？ 

参数: icon 

说明: Button 的图标 

类型: `ReactNode` 

默认值: UploadOutlined

### pro-components 中 ProForm - ProFormUploadButton的title属性如何使用？ 

参数: title 

说明: Button 的标题 

类型: `ReactNode` 

默认值: 单击上传

### pro-components 中 ProForm - ProFormUploadButton的max属性如何使用？ 

参数: max 

说明: 最大上传数量，超过最大数量就会隐藏上传按钮 

类型: `number` 

默认值: -

### pro-components 的 ProForm - ProFormMoney 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | 单独设置的国际化地区值，根据不同的地区显示不同的货币符号，支持地区详见下面的地区目录 | `string` | `zh-Hans-CN` |
| customSymbol | 自定义金额符号 | `string` | - |
| numberPopoverRender | 自定义 Popover 的值，false 可以关闭他 | `((props: InputNumberProps, defaultText: string) => React.ReactNode)`\| `boolean` | false |
| numberFormatOptions | NumberFormat 的配置，文档可以查看 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) | NumberFormatOptions | - |
| min | 最小值 | `number` | - |
| max | 最大值 | `number` | - |


### pro-components 中 ProForm - ProFormMoney的locale属性如何使用？ 

参数: locale 

说明: 单独设置的国际化地区值，根据不同的地区显示不同的货币符号，支持地区详见下面的地区目录 

类型: `string` 

默认值: `zh-Hans-CN`

### pro-components 中 ProForm - ProFormMoney的customSymbol属性如何使用？ 

参数: customSymbol 

说明: 自定义金额符号 

类型: `string` 

默认值: -

### pro-components 中 ProForm - ProFormMoney的numberPopoverRender属性如何使用？ 

参数: numberPopoverRender 

说明: 自定义 Popover 的值，false 可以关闭他 

类型: `((props: InputNumberProps, defaultText: string) => React.ReactNode)`| `boolean` 

默认值: false

### pro-components 中 ProForm - ProFormMoney的numberFormatOptions属性如何使用？ 

参数: numberFormatOptions 

说明: NumberFormat 的配置，文档可以查看 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) 

类型: NumberFormatOptions 

默认值: -

### pro-components 中 ProForm - ProFormMoney的min属性如何使用？ 

参数: min 

说明: 最小值 

类型: `number` 

默认值: -

### pro-components 中 ProForm - ProFormMoney的max属性如何使用？ 

参数: max 

说明: 最大值 

类型: `number` 

默认值: -

### pro-components 的 ProForm - ProFormSegmented 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| valueEnum | 当前列值的枚举 [valueEnum](/components/table#valueenum) | `Record` | - |
| request | 从网络请求枚举数据 | `()=>Promise<{label,value}>` | - |
| debounceTime | 防抖动时间，与 request 配合使用 | `number` | - |
| params | 发起网络请求的参数，与 request 配合使用 | `Record` | - |
| fieldProps | antd 组件的 props | `Segmented` | - |


### pro-components 中 ProForm - ProFormSegmented的valueEnum属性如何使用？ 

参数: valueEnum 

说明: 当前列值的枚举 [valueEnum](/components/table#valueenum) 

类型: `Record` 

默认值: -

### pro-components 中 ProForm - ProFormSegmented的request属性如何使用？ 

参数: request 

说明: 从网络请求枚举数据 

类型: `()=>Promise<{label,value}>` 

默认值: -

### pro-components 中 ProForm - ProFormSegmented的debounceTime属性如何使用？ 

参数: debounceTime 

说明: 防抖动时间，与 request 配合使用 

类型: `number` 

默认值: -

### pro-components 中 ProForm - ProFormSegmented的params属性如何使用？ 

参数: params 

说明: 发起网络请求的参数，与 request 配合使用 

类型: `Record` 

默认值: -

### pro-components 中 ProForm - ProFormSegmented的fieldProps属性如何使用？ 

参数: fieldProps 

说明: antd 组件的 props 

类型: `Segmented` 

默认值: -

### pro-components 的 Field 有哪些配置？

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


### pro-components 中 ProField - 参数的text属性如何使用？ 

参数: text 

说明: 需要格式化的值 

类型: any 

默认值: -

### pro-components 中 ProField - 参数的valueType属性如何使用？ 

参数: valueType 

说明: 格式化的类型 

类型: ValueType 

默认值: -

### pro-components 中 ProField - 参数的mode属性如何使用？ 

参数: mode 

说明: 组件的模式 

类型: - 

默认值: -

### pro-components 中 ProField - 参数的plain属性如何使用？ 

参数: plain 

说明: 精简模式 

类型: - 

默认值: -

### pro-components 中 ProField - 参数的renderFormItem属性如何使用？ 

参数: renderFormItem 

说明: 自定义 `mode=update | edit` 下的 dom 表现，一般用于渲染编辑框 

类型: - 

默认值: -

### pro-components 中 ProField - 参数的render属性如何使用？ 

参数: render 

说明: 自定义 `mode=read` 下的 dom 表现，只是单纯的表现形式 

类型: - 

默认值: -

### pro-components 的 Descriptions 有哪些配置？

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


### pro-components 中 ProDescriptions - ProDescriptions的title属性如何使用？ 

参数: title 

说明: 描述列表的标题，显示在最顶部 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions的tooltip属性如何使用？ 

参数: tooltip 

说明: 内容的补充描述，hover 后显示 

类型: `string` 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions的loading属性如何使用？ 

参数: loading 

说明: 展示一个加载的骨架屏，骨架屏和 dom 不会一一对应 

类型: `boolean` 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions的extra属性如何使用？ 

参数: extra 

说明: 描述列表的操作区域，显示在右上方 

类型: `string` | `ReactNode` 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions的bordered属性如何使用？ 

参数: bordered 

说明: 是否展示边框 

类型: boolean 

默认值: false

### pro-components 中 ProDescriptions - ProDescriptions的column属性如何使用？ 

参数: column 

说明: 一行的 `ProDescriptionsItems` 数量，可以写成像素值或支持响应式的对象写法 `{ xs: 1, sm: 2, md: 3}` 

类型: number 

默认值: 3

### pro-components 中 ProDescriptions - ProDescriptions的size属性如何使用？ 

参数: size 

说明: 设置列表的大小。可以设置为 `middle` 、`small`，或不填（只有设置 `bordered={true}` 生效） 

类型: `default` | `middle` | `small` 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions的layout属性如何使用？ 

参数: layout 

说明: 描述布局 

类型: `horizontal` | `vertical` 

默认值: `horizontal`

### pro-components 中 ProDescriptions - ProDescriptions的colon属性如何使用？ 

参数: colon 

说明: 配置 `ProDescriptions.Item` 的 `colon` 的默认值 

类型: boolean 

默认值: true

### pro-components 中 ProDescriptions - ProDescriptions的request属性如何使用？ 

参数: request 

说明: 请求数据，不设置 columns 时 ProDescriptions.Item 需设置对应的 dataIndex 

类型: - 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions的onRequestError属性如何使用？ 

参数: onRequestError 

说明: 处理 request 的错误，默认会直接抛出错误 

类型: - 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions的columns属性如何使用？ 

参数: columns 

说明: 列定义，与 request 配合使用 [columns](/components/table#columns) 

类型: - 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions的editable属性如何使用？ 

参数: editable 

说明: 编辑的相关配置 

类型: -

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


### pro-components 中 ProDescriptions - editable 编辑配置的form属性如何使用？ 

属性: form 

描述: 可编辑表格的 form 实例，使用 `Form.useForm` 生成后使用 

类型: `FormInstance` 

默认值: -

### pro-components 中 ProDescriptions - editable 编辑配置的formProps属性如何使用？ 

属性: formProps 

描述: 可以配置 form 的属性，但是不支持 onFinish 

类型: -

### pro-components 中 ProDescriptions - editable 编辑配置的editableKeys属性如何使用？ 

属性: editableKeys 

描述: 正在编辑的行，受控属性。 默认 `key` 会使用 `rowKey` 的配置，如果没有配置会使用 `index`，建议使用 rowKey 

类型: `Key[]` 

默认值: -

### pro-components 中 ProDescriptions - editable 编辑配置的onChange属性如何使用？ 

属性: onChange 

描述: 行数据被修改的时候触发 

类型: `(editableKeys: Key[], editableRows: T[]) => void` 

默认值: -

### pro-components 中 ProDescriptions - editable 编辑配置的onSave属性如何使用？ 

属性: onSave 

描述: 保存一行的时候触发 

类型: `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>` 

默认值: -

### pro-components 中 ProDescriptions - editable 编辑配置的saveText属性如何使用？ 

属性: saveText 

描述: 保存一行的文字 

类型: `React.ReactNode` 

默认值: `保存`

### pro-components 中 ProDescriptions - editable 编辑配置的onDelete属性如何使用？ 

属性: onDelete 

描述: 删除一行的时候触发 

类型: `(key: Key, row: T) => Promise<any>` 

默认值: -

### pro-components 中 ProDescriptions - editable 编辑配置的deleteText属性如何使用？ 

属性: deleteText 

描述: 删除一行的文字 

类型: `React.ReactNode` 

默认值: `删除`

### pro-components 中 ProDescriptions - editable 编辑配置的onCancel属性如何使用？ 

属性: onCancel 

描述: 取消编辑一行时触发 

类型: `(key: Key, row: T,originRow:T,newLine?:newLineConfig) => Promise<any>` 

默认值: -

### pro-components 中 ProDescriptions - editable 编辑配置的cancelText属性如何使用？ 

属性: cancelText 

描述: 取消编辑一行的文字 

类型: `React.ReactNode` 

默认值: `取消`

### pro-components 中 ProDescriptions - editable 编辑配置的actionRender属性如何使用？ 

属性: actionRender 

描述: 自定义编辑模式的操作栏 

类型: `(row: T, config: ActionRenderConfig,defaultDom) => ReactNode[]` 

默认值: -

### pro-components 中 ProDescriptions - editable 编辑配置的deletePopconfirmMessage属性如何使用？ 

属性: deletePopconfirmMessage 

描述: 删除时弹出的确认框提示消息 

类型: `ReactNode` 

默认值: `删除此项？`

### pro-components 中 ProDescriptions - editable 编辑配置的onlyOneLineEditorAlertMessage属性如何使用？ 

属性: onlyOneLineEditorAlertMessage 

描述: 只能编辑一行的的提示 

类型: `ReactNode` 

默认值: `只能同时编辑一行`

### pro-components 中 ProDescriptions - editable 编辑配置的onlyAddOneLineAlertMessage属性如何使用？ 

属性: onlyAddOneLineAlertMessage 

描述: 只能同时新增一行的提示 

类型: `ReactNode` 

默认值: `只能新增一行`

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


### pro-components 中 ProDescriptions - ProDescriptions.Item的label属性如何使用？ 

参数: label 

说明: 内容的描述 

类型: ReactNode 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions.Item的tooltip属性如何使用？ 

参数: tooltip 

说明: 内容的补充描述，hover 后显示 

类型: string 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions.Item的ellipsis属性如何使用？ 

参数: ellipsis 

说明: 是否自动缩略 

类型: `boolean` 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions.Item的copyable属性如何使用？ 

参数: copyable 

说明: 是否支持复制 

类型: `boolean` 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions.Item的span属性如何使用？ 

参数: span 

说明: 包含列的数量 

类型: number 

默认值: 1

### pro-components 中 ProDescriptions - ProDescriptions.Item的valueType属性如何使用？ 

参数: valueType 

说明: 格式化的类型 

类型: `ValueType` 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions.Item的valueEnum属性如何使用？ 

参数: valueEnum 

说明: 当前列值的枚举 [valueEnum](/components/table#valueenum) 

类型: `Record` 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions.Item的request属性如何使用？ 

参数: request 

说明: 从网络请求枚举数据 

类型: `()=>Promise<{[key:string`|`number]:any}>` 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions.Item的dataIndex属性如何使用？ 

参数: dataIndex 

说明: 返回数据的 key 与 ProDescriptions 的 request 配合使用，用于配置式的定义列表 

类型: `React.Text` | `React.Text[]` 

默认值: -

### pro-components 中 ProDescriptions - ProDescriptions.Item的editable属性如何使用？ 

参数: editable 

说明: 在编辑表格中是否可编辑的，函数的参数和 table 的 render 一样 

类型: `false` | `(text: any, record: T,index: number) => boolean` 

默认值: true

### pro-components 的 Card 有哪些配置？

#### ProCard - API 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cardProps | ProCard 卡片属性透传 | `ProCard` | - |


#### ProCard - ProCard.TabPane 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 对应 activeKey，用于标定是否选中和 dom 更新，一定不要重复，不然会造成表现异常 | `string` | - |
| tab | 选项卡头显示文字 | `ReactNode` | - |
| disabled | 不可用 | `boolean` | false |
| cardProps | ProCard 卡片属性透传 | `ProCard` | - |


#### ProCard - ProCard.Divider 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 分隔类型 | `horizontal \| vertical` | - |


### pro-components 的 ProCard - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
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


### pro-components 中 ProCard - API的title属性如何使用？ 

参数: title 

说明: 标题 

类型: `React.ReactNode` 

默认值: -

### pro-components 中 ProCard - API的subTitle属性如何使用？ 

参数: subTitle 

说明: 副标题 

类型: `React.ReactNode` 

默认值: -

### pro-components 中 ProCard - API的tooltip属性如何使用？ 

参数: tooltip 

说明: 标题右侧图标 hover 提示信息 

类型: `string` 

默认值: -

### pro-components 中 ProCard - API的headStyle属性如何使用？ 

参数: headStyle 

说明: 标题的 style 样式 

类型: `CSSProperties` 

默认值: -

### pro-components 中 ProCard - API的bodyStyle属性如何使用？ 

参数: bodyStyle 

说明: 内容区的 style 样式 

类型: `CSSProperties` 

默认值: -

### pro-components 中 ProCard - API的extra属性如何使用？ 

参数: extra 

说明: 右上角自定义区域 

类型: `React.ReactNode` 

默认值: -

### pro-components 中 ProCard - API的layout属性如何使用？ 

参数: layout 

说明: 内容布局，支持垂直居中 

类型: `default` | `center` 

默认值: default

### pro-components 中 ProCard - API的loading属性如何使用？ 

参数: loading 

说明: 加载中，支持自定义 loading 样式 

类型: `boolean` | `ReactNode` 

默认值: false

### pro-components 中 ProCard - API的colSpan属性如何使用？ 

参数: colSpan 

说明: 栅格布局宽度，24 栅格，支持指定宽度 px 或百分比，支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}`, 仅在嵌套的子卡片上设置有效。 

类型: `number` | `string` 

默认值: 24

### pro-components 中 ProCard - API的gutter属性如何使用？ 

参数: gutter 

说明: 数字或使用数组形式同时设置 [水平间距，垂直间距], 支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` 

类型: `number` | `array` 

默认值: 0

### pro-components 中 ProCard - API的split属性如何使用？ 

参数: split 

说明: 拆分卡片的方向 

类型: `vertical` | `horizontal` 

默认值: -

### pro-components 中 ProCard - API的type属性如何使用？ 

参数: type 

说明: 卡片类型 

类型: `inner` | `default` 

默认值: -

### pro-components 中 ProCard - API的size属性如何使用？ 

参数: size 

说明: 卡片尺寸 

类型: `default` | `small` 

默认值: -

### pro-components 中 ProCard - API的actions属性如何使用？ 

参数: actions 

说明: 卡片操作组，位置在卡片底部 

类型: `Array&lt;ReactNode>` 

默认值: -

### pro-components 中 ProCard - API的direction属性如何使用？ 

参数: direction 

说明: 指定 Flex 方向，仅在嵌套子卡片时有效，默认方向为 row 横向 

类型: `column` 

默认值: -

### pro-components 中 ProCard - API的wrap属性如何使用？ 

参数: wrap 

说明: 是否支持换行，仅在嵌套子卡片时有效 

类型: false 

默认值: - 

版本: 1.12.0

### pro-components 中 ProCard - API的bordered属性如何使用？ 

参数: bordered 

说明: 是否有边框 

类型: `boolean` 

默认值: false

### pro-components 中 ProCard - API的ghost属性如何使用？ 

参数: ghost 

说明: 幽灵模式，即是否取消卡片内容区域的 padding 和 卡片的背景颜色。 

类型: `boolean` 

默认值: false

### pro-components 中 ProCard - API的headerBordered属性如何使用？ 

参数: headerBordered 

说明: 页头是否有分割线 

类型: `boolean` 

默认值: false

### pro-components 中 ProCard - API的collapsed属性如何使用？ 

参数: collapsed 

说明: 受控属性，是否折叠 

类型: `boolean` 

默认值: false

### pro-components 中 ProCard - API的collapsible属性如何使用？ 

参数: collapsible 

说明: 配置是否可折叠，受控时无效 

类型: `boolean` 

默认值: false

### pro-components 中 ProCard - API的collapsibleIconRender属性如何使用？ 

参数: collapsibleIconRender 

说明: 替换默认折叠图标 

类型: `({ collapsed }: { collapsed: boolean }) => React.ReactNode` 

默认值: -

### pro-components 中 ProCard - API的defaultCollapsed属性如何使用？ 

参数: defaultCollapsed 

说明: 默认折叠，受控时无效 

类型: `boolean` 

默认值: false

### pro-components 中 ProCard - API的onCollapse属性如何使用？ 

参数: onCollapse 

说明: 收起卡片的事件，受控时无效 

类型: `(collapsed: boolean) => void` 

默认值: -

### pro-components 中 ProCard - API的tabs属性如何使用？ 

参数: tabs 

说明: 标签页配置 

类型: 见下面 ProCardTabs 

默认值: -

### pro-components 的 ProCard - ProCardTabs 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeKey | 当前选中项 | string | - |
| type | 页签的基本样式，可选 `line`、`card`、`editable-card` 类型 | string | inline |
| onChange | 回调 | `(activeKey: string) => void;` | - |
| items | 基于 antd 拓展的页签的基本配置，必填 | `ItemsProps` | - |


### pro-components 中 ProCard - ProCardTabs的activeKey属性如何使用？ 

参数: activeKey 

说明: 当前选中项 

类型: string 

默认值: -

### pro-components 中 ProCard - ProCardTabs的type属性如何使用？ 

参数: type 

说明: 页签的基本样式，可选 `line`、`card`、`editable-card` 类型 

类型: string 

默认值: inline

### pro-components 中 ProCard - ProCardTabs的onChange属性如何使用？ 

参数: onChange 

说明: 回调 

类型: `(activeKey: string) => void;` 

默认值: -

### pro-components 中 ProCard - ProCardTabs的items属性如何使用？ 

参数: items 

说明: 基于 antd 拓展的页签的基本配置，必填 

类型: `ItemsProps` 

默认值: -

### pro-components 的 ProCard - ItemsProps 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cardProps | ProCard 卡片属性透传 | `ProCard` | - |


### pro-components 中 ProCard - ItemsProps的cardProps属性如何使用？ 

参数: cardProps 

说明: ProCard 卡片属性透传 

类型: `ProCard` 

默认值: -

### pro-components 的 ProCard - ProCard.TabPane 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 对应 activeKey，用于标定是否选中和 dom 更新，一定不要重复，不然会造成表现异常 | `string` | - |
| tab | 选项卡头显示文字 | `ReactNode` | - |
| disabled | 不可用 | `boolean` | false |
| cardProps | ProCard 卡片属性透传 | `ProCard` | - |


### pro-components 中 ProCard - ProCard.TabPane的key属性如何使用？ 

参数: key 

说明: 对应 activeKey，用于标定是否选中和 dom 更新，一定不要重复，不然会造成表现异常 

类型: `string` 

默认值: -

### pro-components 中 ProCard - ProCard.TabPane的tab属性如何使用？ 

参数: tab 

说明: 选项卡头显示文字 

类型: `ReactNode` 

默认值: -

### pro-components 中 ProCard - ProCard.TabPane的disabled属性如何使用？ 

参数: disabled 

说明: 不可用 

类型: `boolean` 

默认值: false

### pro-components 中 ProCard - ProCard.TabPane的cardProps属性如何使用？ 

参数: cardProps 

说明: ProCard 卡片属性透传 

类型: `ProCard` 

默认值: -

### pro-components 的 ProCard - ProCard.Divider 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 分隔类型 | `horizontal \| vertical` | - |


### pro-components 中 ProCard - ProCard.Divider的type属性如何使用？ 

参数: type 

说明: 分隔类型 

类型: `horizontal | vertical` 

默认值: -

### pro-components 的 Card 有哪些配置？

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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 分隔类型 | `horizontal \| vertical` | - |


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


### pro-components 中 ProCard - StatisticCard的title属性如何使用？ 

参数: title 

说明: 卡片标题 

类型: `string|ReactNode` 

默认值: -

### pro-components 中 ProCard - StatisticCard的extra属性如何使用？ 

参数: extra 

说明: 卡片右上角的操作区域 

类型: `string|ReactNode` 

默认值: -

### pro-components 中 ProCard - StatisticCard的loading属性如何使用？ 

参数: loading 

说明: 当卡片内容还在加载中时，可以用 loading 展示一个占位 

类型: boolean 

默认值: false

### pro-components 中 ProCard - StatisticCard的bordered属性如何使用？ 

参数: bordered 

说明: 是否有边框 

类型: boolean 

默认值: true

### pro-components 中 ProCard - StatisticCard的chart属性如何使用？ 

参数: chart 

说明: 图表卡片 

类型: ReactNode 

默认值: -

### pro-components 中 ProCard - StatisticCard的statistic属性如何使用？ 

参数: statistic 

说明: 数值统计配置，布局默认为 `vertical` 

类型: 参数见下 Statistic 

默认值: -

### pro-components 中 ProCard - StatisticCard的chartPlacement属性如何使用？ 

参数: chartPlacement 

说明: 图表位置，相对于 statistic 的位置 

类型: `left | right | bottom` 

默认值: -

### pro-components 中 ProCard - StatisticCard的footer属性如何使用？ 

参数: footer 

说明: 额外指标展示 

类型: `ReactNode` 

默认值: -

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


### pro-components 中 ProCard - Statistic的prefix属性如何使用？ 

参数: prefix 

说明: 设置数值的前缀 

类型: string | ReactNode 

默认值: -

### pro-components 中 ProCard - Statistic的suffix属性如何使用？ 

参数: suffix 

说明: 设置数值的后缀 

类型: string | ReactNode 

默认值: -

### pro-components 中 ProCard - Statistic的title属性如何使用？ 

参数: title 

说明: 数值的标题 

类型: string | ReactNode 

默认值: -

### pro-components 中 ProCard - Statistic的tip属性如何使用？ 

参数: tip 

说明: 标题提示 

类型: string| ReactNode 

默认值: -

### pro-components 中 ProCard - Statistic的value属性如何使用？ 

参数: value 

说明: 数值内容 

类型: string | number 

默认值: -

### pro-components 中 ProCard - Statistic的icon属性如何使用？ 

参数: icon 

说明: 图标 

类型: ReactNode 

默认值: -

### pro-components 中 ProCard - Statistic的status属性如何使用？ 

参数: status 

说明: 设置状态点，同 Badge 组件 

类型: `Enum{ 'success', 'processing, 'default', 'error', 'warning' }` 

默认值: -

### pro-components 中 ProCard - Statistic的valueStyle属性如何使用？ 

参数: valueStyle 

说明: 设置数值的样式 

类型: style 

默认值: -

### pro-components 中 ProCard - Statistic的description属性如何使用？ 

参数: description 

说明: 描述性标签 

类型: React.ReactNode | () => React.ReactNode 

默认值: -

### pro-components 中 ProCard - Statistic的layout属性如何使用？ 

参数: layout 

说明: 布局 

类型: `horizontal | vertical | inline` 

默认值: `inline`

### pro-components 中 ProCard - Statistic的trend属性如何使用？ 

参数: trend 

说明: 趋势 

类型: `up | down |` 

默认值: -

### pro-components 的 ProCard - Divider 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 分隔类型 | `horizontal \| vertical` | - |


### pro-components 中 ProCard - Divider的type属性如何使用？ 

参数: type 

说明: 分隔类型 

类型: `horizontal | vertical` 

默认值: -

### pro-components 的 Card 有哪些配置？

#### ProCard - CheckCard 

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
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
| --- | --- | --- | --- |
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
| --- | --- | --- | --- |
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


### pro-components 中 ProCard - CheckCard的checked属性如何使用？ 

参数: checked 

说明: 指定当前是否选中 

类型: boolean 

默认值: false

### pro-components 中 ProCard - CheckCard的bordered属性如何使用？ 

参数: bordered 

说明: 是否显示边框 

类型: boolean 

默认值: true 

版本: 1.20.0

### pro-components 中 ProCard - CheckCard的value属性如何使用？ 

参数: value 

说明: 选项值 

类型: string 

默认值: -

### pro-components 中 ProCard - CheckCard的defaultChecked属性如何使用？ 

参数: defaultChecked 

说明: 初始是否选中 

类型: boolean 

默认值: false

### pro-components 中 ProCard - CheckCard的disabled属性如何使用？ 

参数: disabled 

说明: 失效状态 

类型: boolean 

默认值: false

### pro-components 中 ProCard - CheckCard的size属性如何使用？ 

参数: size 

说明: 选择框大小，可选 `large` `small` 

类型: string 

默认值: `default`

### pro-components 中 ProCard - CheckCard的onChange属性如何使用？ 

参数: onChange 

说明: 变化时回调函数 

类型: Function(checked) 

默认值: -

### pro-components 中 ProCard - CheckCard的loading属性如何使用？ 

参数: loading 

说明: 当卡片内容还在加载中时，可以用 loading 展示一个占位 

类型: boolean 

默认值: false

### pro-components 中 ProCard - CheckCard的title属性如何使用？ 

参数: title 

说明: 标题 

类型: string | ReactNode 

默认值: -

### pro-components 中 ProCard - CheckCard的description属性如何使用？ 

参数: description 

说明: 描述 

类型: ReactNode 

默认值: -

### pro-components 中 ProCard - CheckCard的avatar属性如何使用？ 

参数: avatar 

说明: 选项元素的图片地址 

类型: link | ReactNode 

默认值: -

### pro-components 中 ProCard - CheckCard的extra属性如何使用？ 

参数: extra 

说明: 动作区域 

类型: 卡片右上角的操作区域 

默认值: -

### pro-components 中 ProCard - CheckCard的cover属性如何使用？ 

参数: cover 

说明: 卡片背景图片，注意使用该选项后`title`，`description`和`avatar`失效 

类型: ReactNode 

默认值: -

### pro-components 的 ProCard - CheckCard.Group 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| multiple | 多选 | boolean | false |
| bordered | 是否显示边框 | boolean | true | 1.20.0 |
| defaultValue | 默认选中的选项 | string \| string[] | - |
| disabled | 整组失效 | boolean | false |
| loading | 当卡片组内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| options | 指定可选项 | string[] \| Array<{ title: ReactNode, value: string, description?: ReactNode, avatar?: link or ReactNode, cover?:ReactNode, disabled?: boolean }> | \[] |
| value | 指定选中的选项 | string \| string[] | - |
| size | 选择框大小，可选 `large` `small` | string | `default` |
| onChange | 变化时回调函数 | Function(checkedValue) | - |


### pro-components 中 ProCard - CheckCard.Group的multiple属性如何使用？ 

参数: multiple 

说明: 多选 

类型: boolean 

默认值: false

### pro-components 中 ProCard - CheckCard.Group的bordered属性如何使用？ 

参数: bordered 

说明: 是否显示边框 

类型: boolean 

默认值: true 

版本: 1.20.0

### pro-components 中 ProCard - CheckCard.Group的defaultValue属性如何使用？ 

参数: defaultValue 

说明: 默认选中的选项 

类型: string | string[] 

默认值: -

### pro-components 中 ProCard - CheckCard.Group的disabled属性如何使用？ 

参数: disabled 

说明: 整组失效 

类型: boolean 

默认值: false

### pro-components 中 ProCard - CheckCard.Group的loading属性如何使用？ 

参数: loading 

说明: 当卡片组内容还在加载中时，可以用 loading 展示一个占位 

类型: boolean 

默认值: false

### pro-components 中 ProCard - CheckCard.Group的options属性如何使用？ 

参数: options 

说明: 指定可选项 

类型: string[] | Array<{ title: ReactNode, value: string, description?: ReactNode, avatar?: link or ReactNode, cover?:ReactNode, disabled?: boolean }> 

默认值: \[]

### pro-components 中 ProCard - CheckCard.Group的value属性如何使用？ 

参数: value 

说明: 指定选中的选项 

类型: string | string[] 

默认值: -

### pro-components 中 ProCard - CheckCard.Group的size属性如何使用？ 

参数: size 

说明: 选择框大小，可选 `large` `small` 

类型: string 

默认值: `default`

### pro-components 中 ProCard - CheckCard.Group的onChange属性如何使用？ 

参数: onChange 

说明: 变化时回调函数 

类型: Function(checkedValue) 

默认值: -