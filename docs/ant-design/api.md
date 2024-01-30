## ant-design 的 Watermark 有哪些配置？

#### Watermark - Watermark

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| width | 水印的宽度，`content` 的默认值为自身的宽度 | number | 120 |
| height | 水印的高度，`content` 的默认值为自身的高度 | number | 64 |
| inherit | 是否将水印传导给弹出组件如 Modal、Drawer | boolean | true | 5.11.0 |
| rotate | 水印绘制时，旋转的角度，单位 `°` | number | -22 |
| zIndex | 追加的水印元素的 z-index | number | 9 |
| image | 图片源，建议导出 2 倍或 3 倍图，优先级高 (支持 base64 格式) | string | - |
| content | 水印文字内容 | string \| string[] | - |
| font | 文字样式 |
| gap | 水印之间的间距 | \[number, number] | \[100, 100] |
| offset | 水印距离容器左上角的偏移量，默认为 `gap/2` | \[number, number] | \[gap[0]/2, gap[1]/2] |

#### Watermark - Font

| 参数       | 说明             | 类型                                        |
| ---------- | ---------------- | ------------------------------------------- | ---------- |
| color      | 字体颜色         | rgba(0,0,0,.15)                             |
| fontSize   | 字体大小         | number                                      | 16         |
| fontWeight | 字体粗细         | `normal` \| `light` \| `weight` \| number   | normal     |
| fontFamily | 字体类型         | string                                      | sans-serif |
| fontStyle  | 字体样式         | `none` \| `normal` \| `italic` \| `oblique` | normal     |
| textAlign  | 指定文本对齐方向 | 5.10.0                                      |

### ant-design 的 Watermark - Watermark 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| width | 水印的宽度，`content` 的默认值为自身的宽度 | number | 120 |
| height | 水印的高度，`content` 的默认值为自身的高度 | number | 64 |
| inherit | 是否将水印传导给弹出组件如 Modal、Drawer | boolean | true | 5.11.0 |
| rotate | 水印绘制时，旋转的角度，单位 `°` | number | -22 |
| zIndex | 追加的水印元素的 z-index | number | 9 |
| image | 图片源，建议导出 2 倍或 3 倍图，优先级高 (支持 base64 格式) | string | - |
| content | 水印文字内容 | string \| string[] | - |
| font | 文字样式 |
| gap | 水印之间的间距 | \[number, number] | \[100, 100] |
| offset | 水印距离容器左上角的偏移量，默认为 `gap/2` | \[number, number] | \[gap[0]/2, gap[1]/2] |

### ant-design 的 Watermark - Font 有哪些配置？

| 参数       | 说明             | 类型                                        |
| ---------- | ---------------- | ------------------------------------------- | ---------- |
| color      | 字体颜色         | rgba(0,0,0,.15)                             |
| fontSize   | 字体大小         | number                                      | 16         |
| fontWeight | 字体粗细         | `normal` \| `light` \| `weight` \| number   | normal     |
| fontFamily | 字体类型         | string                                      | sans-serif |
| fontStyle  | 字体样式         | `none` \| `normal` \| `italic` \| `oblique` | normal     |
| textAlign  | 指定文本对齐方向 | 5.10.0                                      |

## ant-design 的 Upload 有哪些配置？

#### Upload - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| accept | 接受上传的文件类型，详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | - |
| action | 上传的地址 | string \| (file) => Promise<string> | - |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）；也可以返回 `Upload.LIST_IGNORE`，此时列表中将不展示此文件。 **注意：IE9 不支持该方法** | (file, fileList) => boolean \| Promise<File> \| `Upload.LIST_IGNORE` | - |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | function | - |
| data | 上传所需额外参数或返回上传额外参数的方法 | object\|(file) => object \| Promise<object> | - |
| defaultFileList | 默认已经上传的文件列表 | object[] | - |
| directory | 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)） | boolean | false |
| disabled | 是否禁用 | boolean | false | 对于自定义 Upload children 时请将 disabled 属性同时传给 child node 确保 disabled 渲染效果保持一致 |
| fileList | 已经上传的文件列表（受控），使用此参数时，如果遇到 `onChange` 只调用一次的问题，请参考 [#2423](https://github.com/ant-design/ant-design/issues/2423) | - |
| headers | 设置上传的请求头部，IE10 以上有效 | object | - |
| iconRender | 自定义显示 icon | (file: UploadFile, listType?: UploadListType) => ReactNode | - |
| isImageUrl | 自定义缩略图是否使用 <img /> 标签进行显示 | (file: UploadFile) => boolean |
| itemRender | 自定义上传列表项 | (originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }) => React.ReactNode | - | 4.16.0 |
| listType | 上传列表的内建样式，支持四种基本样式 `text`, `picture`, `picture-card` 和 `picture-circle` | string | `text` | `picture-circle`(5.2.0+) |
| maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件 | number | - | 4.10.0 |
| method | 上传请求的 http method | string | `post` |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件 | boolean | false |
| name | 发到后台的文件参数名 | string | `file` |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | true |
| previewFile | 自定义文件预览逻辑 | (file: File \| Blob) => Promise<dataURL: string> | - |
| progress | 自定义进度条样式 | { strokeWidth: 2, showInfo: false } | 4.3.0 |
| showUploadList | 是否展示文件列表, 可设为一个对象，用于单独设定 `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` 和 `downloadIcon` | boolean \| { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean, previewIcon?: ReactNode \| (file: UploadFile) => ReactNode, removeIcon?: ReactNode \| (file: UploadFile) => ReactNode, downloadIcon?: ReactNode \| (file: UploadFile) => ReactNode } | true | function: 4.7.0 |
| withCredentials | 上传请求时是否携带 cookie | boolean | false |
| onChange | 上传文件改变时的回调，上传每个阶段都会触发该事件。详见 [onChange](#onchange) | function | - |
| onDrop | 当文件被拖入上传区域时执行的回调功能 | (event: React.DragEvent) => void | - | 4.16.0 |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | function(file): void | (跳转新标签页) |
| onPreview | 点击文件链接或预览图标时的回调 | function(file) | - |
| onRemove | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | function(file): boolean \| Promise | - |

#### Upload - UploadFile

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| crossOrigin | CORS 属性设置 | `'anonymous'` \| `'use-credentials'` \| `''` | - | 4.20.0 |
| name | 文件名 | string | - | - |
| percent | 上传进度 | number | - | - |
| status | 上传状态，不同状态展示颜色也会有所不同 | `error` \| `done` \| `uploading` \| `removed` | - | - |
| thumbUrl | 缩略图地址 | string | - | - |
| uid | 唯一标识符，不设置时会自动生成 | string | - | - |
| url | 下载地址 | string | - | - |

### ant-design 的 Upload - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| accept | 接受上传的文件类型，详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | - |
| action | 上传的地址 | string \| (file) => Promise<string> | - |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）；也可以返回 `Upload.LIST_IGNORE`，此时列表中将不展示此文件。 **注意：IE9 不支持该方法** | (file, fileList) => boolean \| Promise<File> \| `Upload.LIST_IGNORE` | - |
| customRequest | 通过覆盖默认的上传行为，可以自定义自己的上传实现 | function | - |
| data | 上传所需额外参数或返回上传额外参数的方法 | object\|(file) => object \| Promise<object> | - |
| defaultFileList | 默认已经上传的文件列表 | object[] | - |
| directory | 支持上传文件夹（[caniuse](https://caniuse.com/#feat=input-file-directory)） | boolean | false |
| disabled | 是否禁用 | boolean | false | 对于自定义 Upload children 时请将 disabled 属性同时传给 child node 确保 disabled 渲染效果保持一致 |
| fileList | 已经上传的文件列表（受控），使用此参数时，如果遇到 `onChange` 只调用一次的问题，请参考 [#2423](https://github.com/ant-design/ant-design/issues/2423) | - |
| headers | 设置上传的请求头部，IE10 以上有效 | object | - |
| iconRender | 自定义显示 icon | (file: UploadFile, listType?: UploadListType) => ReactNode | - |
| isImageUrl | 自定义缩略图是否使用 <img /> 标签进行显示 | (file: UploadFile) => boolean |
| itemRender | 自定义上传列表项 | (originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }) => React.ReactNode | - | 4.16.0 |
| listType | 上传列表的内建样式，支持四种基本样式 `text`, `picture`, `picture-card` 和 `picture-circle` | string | `text` | `picture-circle`(5.2.0+) |
| maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件 | number | - | 4.10.0 |
| method | 上传请求的 http method | string | `post` |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件 | boolean | false |
| name | 发到后台的文件参数名 | string | `file` |
| openFileDialogOnClick | 点击打开文件对话框 | boolean | true |
| previewFile | 自定义文件预览逻辑 | (file: File \| Blob) => Promise<dataURL: string> | - |
| progress | 自定义进度条样式 | { strokeWidth: 2, showInfo: false } | 4.3.0 |
| showUploadList | 是否展示文件列表, 可设为一个对象，用于单独设定 `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` 和 `downloadIcon` | boolean \| { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean, previewIcon?: ReactNode \| (file: UploadFile) => ReactNode, removeIcon?: ReactNode \| (file: UploadFile) => ReactNode, downloadIcon?: ReactNode \| (file: UploadFile) => ReactNode } | true | function: 4.7.0 |
| withCredentials | 上传请求时是否携带 cookie | boolean | false |
| onChange | 上传文件改变时的回调，上传每个阶段都会触发该事件。详见 [onChange](#onchange) | function | - |
| onDrop | 当文件被拖入上传区域时执行的回调功能 | (event: React.DragEvent) => void | - | 4.16.0 |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | function(file): void | (跳转新标签页) |
| onPreview | 点击文件链接或预览图标时的回调 | function(file) | - |
| onRemove | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除 | function(file): boolean \| Promise | - |

### ant-design 的 Upload - UploadFile 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| crossOrigin | CORS 属性设置 | `'anonymous'` \| `'use-credentials'` \| `''` | - | 4.20.0 |
| name | 文件名 | string | - | - |
| percent | 上传进度 | number | - | - |
| status | 上传状态，不同状态展示颜色也会有所不同 | `error` \| `done` \| `uploading` \| `removed` | - | - |
| thumbUrl | 缩略图地址 | string | - | - |
| uid | 唯一标识符，不设置时会自动生成 | string | - | - |
| url | 下载地址 | string | - | - |

## ant-design 的 Typography 有哪些配置？

#### Typography - Typography.Text

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| code | 添加代码样式 | boolean | false |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| [copyable](#copyable) | false |
| delete | 添加删除线样式 | boolean | false |
| disabled | 禁用文本 | boolean | false |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| [editable](#editable) | false |
| ellipsis | 自动溢出省略，为对象时不能设置省略行数、是否可展开、onExpand 展开事件。不同于 Typography.Paragraph，Text 组件自身不带 100% 宽度样式，因而默认情况下初次缩略后宽度便不再变化。如果需要自适应宽度，请手工配置宽度样式 | boolean \| [Omit<ellipsis, 'expandable' \| 'rows' \| 'onExpand'>](#ellipsis) | false |
| keyboard | 添加键盘样式 | boolean | false | 4.3.0 |
| mark | 添加标记样式 | boolean | false |
| onClick | 点击 Text 时的回调 | (event) => void | - |
| strong | 是否加粗 | boolean | false |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| type | 文本类型 | `secondary` \| `success` \| `warning` \| `danger` | - | success: 4.6.0 |
| underline | 添加下划线样式 | boolean | false |

#### Typography - Typography.Title

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| code | 添加代码样式 | boolean | false |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| [copyable](#copyable) | false |
| delete | 添加删除线样式 | boolean | false |
| disabled | 禁用文本 | boolean | false |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| [editable](#editable) | false |
| ellipsis | 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等 | boolean \| [ellipsis](#ellipsis) | false |
| level | 重要程度，相当于 `h1`、`h2`、`h3`、`h4`、`h5` | number: 1, 2, 3, 4, 5 | 1 | 5: 4.6.0 |
| mark | 添加标记样式 | boolean | false |
| onClick | 点击 Title 时的回调 | (event) => void | - |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| type | 文本类型 | `secondary` \| `success` \| `warning` \| `danger` | - | success: 4.6.0 |
| underline | 添加下划线样式 | boolean | false |

#### Typography - Typography.Paragraph

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| code | 添加代码样式 | boolean | false |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| [copyable](#copyable) | false |
| delete | 添加删除线样式 | boolean | false |
| disabled | 禁用文本 | boolean | false |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| [editable](#editable) | false |
| ellipsis | 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等 | boolean \| [ellipsis](#ellipsis) | false |
| mark | 添加标记样式 | boolean | false |
| onClick | 点击 Paragraph 时的回调 | (event) => void | - |
| strong | 是否加粗 | boolean | false |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| type | 文本类型 | `secondary` \| `success` \| `warning` \| `danger` | - | success: 4.6.0 |
| underline | 添加下划线样式 | boolean | false |

#### Typography - copyable

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 剪切板数据的 Mime Type | 'text/plain' \| 'text/html' | - | 4.21.0 |
| icon | 自定义拷贝图标：[默认图标, 拷贝后的图标] | \[ReactNode, ReactNode] | - | 4.6.0 |
| text | 拷贝到剪切板里的文本 | string | - |
| tooltips | 自定义提示文案，为 false 时隐藏文案 | \[ReactNode, ReactNode] | \[`复制`, `复制成功`] | 4.4.0 |
| onCopy | 拷贝成功的回调函数 | function | - |

#### Typography - editable

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoSize | 自动 resize 文本域 | boolean \| { minRows: number, maxRows: number } | - | 4.4.0 |
| editing | 控制是否是编辑中状态 | boolean | false |
| icon | 自定义编辑图标 | ReactNode | \<EditOutlined /> | 4.6.0 |
| maxLength | 编辑中文本域最大长度 | number | - | 4.4.0 |
| tooltip | 自定义提示文本，为 false 时关闭 | boolean \| ReactNode | `编辑` | 4.6.0 |
| text | 显式地指定编辑文案，为空时将隐式地使用 children | string | - | 4.24.0 |
| onChange | 文本域编辑时触发 | function(value: string) | - |
| onCancel | 按 ESC 退出编辑状态时触发 | function | - |
| onStart | 进入编辑中状态时触发 | function | - |
| onEnd | 按 ENTER 结束编辑状态时触发 | function | - | 4.14.0 |
| triggerType | 编辑模式触发器类型，图标、文本或者两者都设置（不设置图标作为触发器时它会隐藏） | Array<`icon`\|`text`\> | \[`icon`] |
| enterIcon | 在编辑段中自定义“enter”图标（传递“null”将删除图标） | ReactNode | `<EnterOutlined />` | 4.17.0 |

#### Typography - ellipsis

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| expandable | 是否可展开 | boolean | - |
| rows | 最多显示的行数 | number | - |
| suffix | 自定义省略内容后缀 | string | - |
| symbol | 自定义展开描述文案 | ReactNode | `展开` |
| tooltip | 省略时，展示提示信息 | boolean \| ReactNode \| [TooltipProps](/components/tooltip-cn/#api) | - | 4.11.0 |
| onEllipsis | 触发省略时的回调 | function(ellipsis) | - | 4.2.0 |
| onExpand | 点击展开时的回调 | function(event) | - |

### ant-design 的 Typography - Typography.Text 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| code | 添加代码样式 | boolean | false |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| [copyable](#copyable) | false |
| delete | 添加删除线样式 | boolean | false |
| disabled | 禁用文本 | boolean | false |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| [editable](#editable) | false |
| ellipsis | 自动溢出省略，为对象时不能设置省略行数、是否可展开、onExpand 展开事件。不同于 Typography.Paragraph，Text 组件自身不带 100% 宽度样式，因而默认情况下初次缩略后宽度便不再变化。如果需要自适应宽度，请手工配置宽度样式 | boolean \| [Omit<ellipsis, 'expandable' \| 'rows' \| 'onExpand'>](#ellipsis) | false |
| keyboard | 添加键盘样式 | boolean | false | 4.3.0 |
| mark | 添加标记样式 | boolean | false |
| onClick | 点击 Text 时的回调 | (event) => void | - |
| strong | 是否加粗 | boolean | false |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| type | 文本类型 | `secondary` \| `success` \| `warning` \| `danger` | - | success: 4.6.0 |
| underline | 添加下划线样式 | boolean | false |

### ant-design 的 Typography - Typography.Title 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| code | 添加代码样式 | boolean | false |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| [copyable](#copyable) | false |
| delete | 添加删除线样式 | boolean | false |
| disabled | 禁用文本 | boolean | false |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| [editable](#editable) | false |
| ellipsis | 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等 | boolean \| [ellipsis](#ellipsis) | false |
| level | 重要程度，相当于 `h1`、`h2`、`h3`、`h4`、`h5` | number: 1, 2, 3, 4, 5 | 1 | 5: 4.6.0 |
| mark | 添加标记样式 | boolean | false |
| onClick | 点击 Title 时的回调 | (event) => void | - |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| type | 文本类型 | `secondary` \| `success` \| `warning` \| `danger` | - | success: 4.6.0 |
| underline | 添加下划线样式 | boolean | false |

### ant-design 的 Typography - Typography.Paragraph 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| code | 添加代码样式 | boolean | false |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | boolean \| [copyable](#copyable) | false |
| delete | 添加删除线样式 | boolean | false |
| disabled | 禁用文本 | boolean | false |
| editable | 是否可编辑，为对象时可对编辑进行控制 | boolean \| [editable](#editable) | false |
| ellipsis | 自动溢出省略，为对象时可设置省略行数、是否可展开、添加后缀等 | boolean \| [ellipsis](#ellipsis) | false |
| mark | 添加标记样式 | boolean | false |
| onClick | 点击 Paragraph 时的回调 | (event) => void | - |
| strong | 是否加粗 | boolean | false |
| italic | 是否斜体 | boolean | false | 4.16.0 |
| type | 文本类型 | `secondary` \| `success` \| `warning` \| `danger` | - | success: 4.6.0 |
| underline | 添加下划线样式 | boolean | false |

### ant-design 的 Typography - copyable 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 剪切板数据的 Mime Type | 'text/plain' \| 'text/html' | - | 4.21.0 |
| icon | 自定义拷贝图标：[默认图标, 拷贝后的图标] | \[ReactNode, ReactNode] | - | 4.6.0 |
| text | 拷贝到剪切板里的文本 | string | - |
| tooltips | 自定义提示文案，为 false 时隐藏文案 | \[ReactNode, ReactNode] | \[`复制`, `复制成功`] | 4.4.0 |
| onCopy | 拷贝成功的回调函数 | function | - |

### ant-design 的 Typography - editable 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoSize | 自动 resize 文本域 | boolean \| { minRows: number, maxRows: number } | - | 4.4.0 |
| editing | 控制是否是编辑中状态 | boolean | false |
| icon | 自定义编辑图标 | ReactNode | \<EditOutlined /> | 4.6.0 |
| maxLength | 编辑中文本域最大长度 | number | - | 4.4.0 |
| tooltip | 自定义提示文本，为 false 时关闭 | boolean \| ReactNode | `编辑` | 4.6.0 |
| text | 显式地指定编辑文案，为空时将隐式地使用 children | string | - | 4.24.0 |
| onChange | 文本域编辑时触发 | function(value: string) | - |
| onCancel | 按 ESC 退出编辑状态时触发 | function | - |
| onStart | 进入编辑中状态时触发 | function | - |
| onEnd | 按 ENTER 结束编辑状态时触发 | function | - | 4.14.0 |
| triggerType | 编辑模式触发器类型，图标、文本或者两者都设置（不设置图标作为触发器时它会隐藏） | Array<`icon`\|`text`\> | \[`icon`] |
| enterIcon | 在编辑段中自定义“enter”图标（传递“null”将删除图标） | ReactNode | `<EnterOutlined />` | 4.17.0 |

### ant-design 的 Typography - ellipsis 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| expandable | 是否可展开 | boolean | - |
| rows | 最多显示的行数 | number | - |
| suffix | 自定义省略内容后缀 | string | - |
| symbol | 自定义展开描述文案 | ReactNode | `展开` |
| tooltip | 省略时，展示提示信息 | boolean \| ReactNode \| [TooltipProps](/components/tooltip-cn/#api) | - | 4.11.0 |
| onEllipsis | 触发省略时的回调 | function(ellipsis) | - | 4.2.0 |
| onExpand | 点击展开时的回调 | function(event) | - |

## ant-design 的 Tree-select 有哪些配置？

#### Tree-select - Tree props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| { clearIcon?: ReactNode } | false | 5.8.0: 支持对象形式 |
| autoClearSearchValue | 当多选模式下值被选择，自动清空搜索框 | boolean | true |
| defaultValue | 指定默认选中的条目 | string \| string[] | - |
| disabled | 是否禁用 | boolean | false |
| popupClassName | 下拉菜单的 className 属性 | string | - | 4.23.0 |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true | 5.5.0 |
| dropdownRender | 自定义下拉框内容 | (originNode: ReactNode, props) => ReactNode | - |
| dropdownStyle | 下拉菜单的样式 | object | - |
| fieldNames | 自定义节点 label、value、children 的字段 | object | { label: `label`, value: `value`, children: `children` } | 4.17.0 |
| filterTreeNode | 是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值 | boolean \| function(inputValue: string, treeNode: TreeNode) (函数需要返回 bool 值) | function |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | function(triggerNode) | () => document.body |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 value 类型从 `string` 变为 {value: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式 | boolean | false |
| listHeight | 设置弹窗滚动高度 | number | 256 |
| loadData | 异步加载数据。在过滤时不会调用以防止网络堵塞，可参考 FAQ 获得更多内容 | function(node) | - |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - | responsive: 4.10 |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode \| function(omittedValues) | - |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - |
| multiple | 支持多选（当设置 treeCheckable 时自动变为 true） | boolean | false |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | `Not Found` |
| placeholder | 选择框默认文字 | string | - |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |
| searchValue | 搜索框的值，可以通过 `onSearch` 获取用户输入 | string | - |
| showCheckedStrategy | 配置 `treeCheckable` 时，定义选中项回填的方式。`TreeSelect.SHOW_ALL`: 显示所有选中节点(包括父节点)。`TreeSelect.SHOW_PARENT`: 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点 | `TreeSelect.SHOW_ALL` \| `TreeSelect.SHOW_PARENT` \| `TreeSelect.SHOW_CHILD` | `TreeSelect.SHOW_CHILD` |
| showSearch | 是否支持搜索框 | boolean | 单选：false \| 多选：true |
| size | 选择框大小 | `large` \| `middle` \| `small` | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | `<DownOutlined />` |
| switcherIcon | 自定义树节点的展开/折叠图标 | ReactNode \| ((props: AntTreeNodeProps) => ReactNode) | - | renderProps: 4.20.0 |
| tagRender | 自定义 tag 内容，多选时生效 | (props) => ReactNode | - |
| treeCheckable | 显示 Checkbox | boolean | false |
| treeCheckStrictly | `checkable` 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 `labelInValue` 强制为 true | boolean | false |
| treeData | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一） | array<{value, title, children, [disabled, disableCheckbox, selectable, checkable]}> | \[] |
| treeDataSimpleMode | 使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', title:"test1",...},...]， `pId` 是父节点的 id) | boolean \| object<{ id: string, pId: string, rootPId: string }> | false |
| treeDefaultExpandAll | 默认展开所有树节点 | boolean | false |
| treeDefaultExpandedKeys | 默认展开的树节点 | string[] | - |
| treeExpandAction | 点击节点 title 时的展开逻辑，可选：false \| `click` \| `doubleClick` | string \| boolean | false | 4.21.0 |
| treeExpandedKeys | 设置展开的树节点 | string[] | - |
| treeIcon | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 | boolean | false |
| treeLine | 是否展示线条样式，请参考 [Tree - showLine](/components/tree-cn#components-tree-demo-line) | boolean \| object | false | 4.17.0 |
| treeLoadedKeys | （受控）已经加载的节点，需要配合 `loadData` 使用 | string[] | \[] |
| treeNodeFilterProp | 输入项过滤对应的 treeNode 属性 | string | `value` |
| treeNodeLabelProp | 作为显示的 prop 设置 | string | `title` |
| value | 指定当前选中的条目 | string \| string[] | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true | 4.1.0 |
| onChange | 选中树节点时调用此函数 | function(value, label, extra) | - |
| onDropdownVisibleChange | 展开下拉菜单的回调 | function(open) | - |
| onSearch | 文本框值变化时的回调 | function(value: string) | - |
| onSelect | 被选中时调用 | function(value, node, extra) | - |
| onTreeExpand | 展示节点时调用 | function(expandedKeys) | - |

#### Tree-select - Tree 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

#### Tree-select - TreeNode props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checkable | 当树为 Checkbox 时，设置独立节点是否展示 Checkbox | boolean | - |
| disableCheckbox | 禁掉 Checkbox | boolean | false |
| disabled | 是否禁用 | boolean | false |
| isLeaf | 是否是叶子节点 | boolean | false |
| key | 此项必须设置（其值在整个树范围内唯一） | string | - |
| selectable | 是否可选 | boolean | true |
| title | 树节点显示的内容 | ReactNode | `---` |
| value | 默认根据此属性值进行筛选（其值在整个树范围内唯一） | string | - |

### ant-design 的 Tree-select - Tree props 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| { clearIcon?: ReactNode } | false | 5.8.0: 支持对象形式 |
| autoClearSearchValue | 当多选模式下值被选择，自动清空搜索框 | boolean | true |
| defaultValue | 指定默认选中的条目 | string \| string[] | - |
| disabled | 是否禁用 | boolean | false |
| popupClassName | 下拉菜单的 className 属性 | string | - | 4.23.0 |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true | 5.5.0 |
| dropdownRender | 自定义下拉框内容 | (originNode: ReactNode, props) => ReactNode | - |
| dropdownStyle | 下拉菜单的样式 | object | - |
| fieldNames | 自定义节点 label、value、children 的字段 | object | { label: `label`, value: `value`, children: `children` } | 4.17.0 |
| filterTreeNode | 是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值 | boolean \| function(inputValue: string, treeNode: TreeNode) (函数需要返回 bool 值) | function |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | function(triggerNode) | () => document.body |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 value 类型从 `string` 变为 {value: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式 | boolean | false |
| listHeight | 设置弹窗滚动高度 | number | 256 |
| loadData | 异步加载数据。在过滤时不会调用以防止网络堵塞，可参考 FAQ 获得更多内容 | function(node) | - |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - | responsive: 4.10 |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode \| function(omittedValues) | - |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - |
| multiple | 支持多选（当设置 treeCheckable 时自动变为 true） | boolean | false |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | `Not Found` |
| placeholder | 选择框默认文字 | string | - |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |
| searchValue | 搜索框的值，可以通过 `onSearch` 获取用户输入 | string | - |
| showCheckedStrategy | 配置 `treeCheckable` 时，定义选中项回填的方式。`TreeSelect.SHOW_ALL`: 显示所有选中节点(包括父节点)。`TreeSelect.SHOW_PARENT`: 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点 | `TreeSelect.SHOW_ALL` \| `TreeSelect.SHOW_PARENT` \| `TreeSelect.SHOW_CHILD` | `TreeSelect.SHOW_CHILD` |
| showSearch | 是否支持搜索框 | boolean | 单选：false \| 多选：true |
| size | 选择框大小 | `large` \| `middle` \| `small` | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | `<DownOutlined />` |
| switcherIcon | 自定义树节点的展开/折叠图标 | ReactNode \| ((props: AntTreeNodeProps) => ReactNode) | - | renderProps: 4.20.0 |
| tagRender | 自定义 tag 内容，多选时生效 | (props) => ReactNode | - |
| treeCheckable | 显示 Checkbox | boolean | false |
| treeCheckStrictly | `checkable` 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 `labelInValue` 强制为 true | boolean | false |
| treeData | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一） | array<{value, title, children, [disabled, disableCheckbox, selectable, checkable]}> | \[] |
| treeDataSimpleMode | 使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: [{id:1, pId:0, value:'1', title:"test1",...},...]， `pId` 是父节点的 id) | boolean \| object<{ id: string, pId: string, rootPId: string }> | false |
| treeDefaultExpandAll | 默认展开所有树节点 | boolean | false |
| treeDefaultExpandedKeys | 默认展开的树节点 | string[] | - |
| treeExpandAction | 点击节点 title 时的展开逻辑，可选：false \| `click` \| `doubleClick` | string \| boolean | false | 4.21.0 |
| treeExpandedKeys | 设置展开的树节点 | string[] | - |
| treeIcon | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 | boolean | false |
| treeLine | 是否展示线条样式，请参考 [Tree - showLine](/components/tree-cn#components-tree-demo-line) | boolean \| object | false | 4.17.0 |
| treeLoadedKeys | （受控）已经加载的节点，需要配合 `loadData` 使用 | string[] | \[] |
| treeNodeFilterProp | 输入项过滤对应的 treeNode 属性 | string | `value` |
| treeNodeLabelProp | 作为显示的 prop 设置 | string | `title` |
| value | 指定当前选中的条目 | string \| string[] | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true | 4.1.0 |
| onChange | 选中树节点时调用此函数 | function(value, label, extra) | - |
| onDropdownVisibleChange | 展开下拉菜单的回调 | function(open) | - |
| onSearch | 文本框值变化时的回调 | function(value: string) | - |
| onSelect | 被选中时调用 | function(value, node, extra) | - |
| onTreeExpand | 展示节点时调用 | function(expandedKeys) | - |

### ant-design 的 Tree-select - Tree 方法 有哪些配置？

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### ant-design 的 Tree-select - TreeNode props 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checkable | 当树为 Checkbox 时，设置独立节点是否展示 Checkbox | boolean | - |
| disableCheckbox | 禁掉 Checkbox | boolean | false |
| disabled | 是否禁用 | boolean | false |
| isLeaf | 是否是叶子节点 | boolean | false |
| key | 此项必须设置（其值在整个树范围内唯一） | string | - |
| selectable | 是否可选 | boolean | true |
| title | 树节点显示的内容 | ReactNode | `---` |
| value | 默认根据此属性值进行筛选（其值在整个树范围内唯一） | string | - |

## ant-design 的 Tree 有哪些配置？

#### Tree - Tree props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| allowDrop | 是否允许拖拽时放置在该节点 | ({ dropNode, dropPosition }) => boolean | - |
| autoExpandParent | 是否自动展开父节点 | boolean | false |
| blockNode | 是否节点占据一行 | boolean | false |
| checkable | 节点前添加 Checkbox 复选框 | boolean | false |
| checkedKeys | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置 `checkable` 和 `checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联 | string[] \| {checked: string[], halfChecked: string[]} | \[] |
| checkStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | boolean | false |
| defaultCheckedKeys | 默认选中复选框的树节点 | string[] | \[] |
| defaultExpandAll | 默认展开所有树节点 | boolean | false |
| defaultExpandedKeys | 默认展开指定的树节点 | string[] | \[] |
| defaultExpandParent | 默认展开父节点 | boolean | true |
| defaultSelectedKeys | 默认选中的树节点 | string[] | \[] |
| disabled | 将树禁用 | boolean | false |
| draggable | 设置节点可拖拽，可以通过 `icon: false` 关闭拖拽提示图标 | boolean \| ((node: DataNode) => boolean) \| { icon?: React.ReactNode \| false, nodeDraggable?: (node: DataNode) => boolean } | false | `config`: 4.17.0 |
| expandedKeys | （受控）展开指定的树节点 | string[] | \[] |
| fieldNames | 自定义节点 title、key、children 的字段 | object | { title: `title`, key: `key`, children: `children` } | 4.17.0 |
| filterTreeNode | 按需筛选树节点（高亮），返回 true | function(node) | - |
| height | 设置虚拟滚动容器高度，设置后内部节点不再支持横向滚动 | number | - |
| icon | 自定义树节点图标。 | ReactNode \| (props) => ReactNode | - |
| loadData | 异步加载数据 | function(node) | - |
| loadedKeys | （受控）已经加载的节点，需要配合 `loadData` 使用 | string[] | \[] |
| multiple | 支持点选多个节点（节点本身） | boolean | false |
| rootStyle | 添加在 Tree 最外层的 style | CSSProperties | - | 4.20.0 |
| selectable | 是否可选中 | boolean | true |
| selectedKeys | （受控）设置选中的树节点，多选需设置 `multiple` 为 true | string[] | - |
| showIcon | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 | boolean | false |
| showLine | 是否展示连接线 | boolean \| {showLeafIcon: boolean \| ReactNode \| ((props: AntTreeNodeProps) => ReactNode)} | false |
| switcherIcon | 自定义树节点的展开/折叠图标 | ReactNode \| ((props: AntTreeNodeProps) => ReactNode) | - | renderProps: 4.20.0 |
| titleRender | 自定义渲染节点 | (nodeData) => ReactNode | - | 4.5.0 |
| treeData | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一） | array<{key, title, children, [disabled, selectable]}> | - |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true | 4.1.0 |
| onCheck | 点击复选框触发 | function(checkedKeys, e:{checked: boolean, checkedNodes, node, event, halfCheckedKeys}) | - |
| onDragEnd | dragend 触发时调用 | function({event, node}) | - |
| onDragEnter | dragenter 触发时调用 | function({event, node, expandedKeys}) | - |
| onDragLeave | dragleave 触发时调用 | function({event, node}) | - |
| onDragOver | dragover 触发时调用 | function({event, node}) | - |
| onDragStart | 开始拖拽时调用 | function({event, node}) | - |
| onDrop | drop 触发时调用 | function({event, node, dragNode, dragNodesKeys}) | - |
| onExpand | 展开/收起节点时触发 | function(expandedKeys, {expanded: boolean, node}) | - |
| onLoad | 节点加载完毕时触发 | function(loadedKeys, {event, node}) | - |
| onRightClick | 响应右键点击 | function({event, node}) | - |
| onSelect | 点击树节点触发 | function(selectedKeys, e:{selected: boolean, selectedNodes, node, event}) | - |

#### Tree - TreeNode props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checkable | 当树为 checkable 时，设置独立节点是否展示 Checkbox | boolean | - |
| disableCheckbox | 禁掉 checkbox | boolean | false |
| disabled | 禁掉响应 | boolean | false |
| icon | 自定义图标。可接收组件，props 为当前节点 props | ReactNode \| (props) => ReactNode | - |
| isLeaf | 设置为叶子节点 (设置了 `loadData` 时有效)。为 `false` 时会强制将其作为父节点 | boolean | - |
| key | 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！ | string | (内部计算出的节点位置) |
| selectable | 设置节点是否可被选中 | boolean | true |
| title | 标题 | ReactNode | `---` |

#### Tree - DirectoryTree props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| expandAction | 目录展开逻辑，可选：false \| `click` \| `doubleClick` | string \| boolean | `click` |

#### Tree - Tree 方法

| 名称 | 说明 |
| --- | --- |
| scrollTo({ key: string \| number; align?: 'top' \| 'bottom' \| 'auto'; offset?: number }) | 虚拟滚动下，滚动到指定 key 条目 |

### ant-design 的 Tree - Tree props 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| allowDrop | 是否允许拖拽时放置在该节点 | ({ dropNode, dropPosition }) => boolean | - |
| autoExpandParent | 是否自动展开父节点 | boolean | false |
| blockNode | 是否节点占据一行 | boolean | false |
| checkable | 节点前添加 Checkbox 复选框 | boolean | false |
| checkedKeys | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置 `checkable` 和 `checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联 | string[] \| {checked: string[], halfChecked: string[]} | \[] |
| checkStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | boolean | false |
| defaultCheckedKeys | 默认选中复选框的树节点 | string[] | \[] |
| defaultExpandAll | 默认展开所有树节点 | boolean | false |
| defaultExpandedKeys | 默认展开指定的树节点 | string[] | \[] |
| defaultExpandParent | 默认展开父节点 | boolean | true |
| defaultSelectedKeys | 默认选中的树节点 | string[] | \[] |
| disabled | 将树禁用 | boolean | false |
| draggable | 设置节点可拖拽，可以通过 `icon: false` 关闭拖拽提示图标 | boolean \| ((node: DataNode) => boolean) \| { icon?: React.ReactNode \| false, nodeDraggable?: (node: DataNode) => boolean } | false | `config`: 4.17.0 |
| expandedKeys | （受控）展开指定的树节点 | string[] | \[] |
| fieldNames | 自定义节点 title、key、children 的字段 | object | { title: `title`, key: `key`, children: `children` } | 4.17.0 |
| filterTreeNode | 按需筛选树节点（高亮），返回 true | function(node) | - |
| height | 设置虚拟滚动容器高度，设置后内部节点不再支持横向滚动 | number | - |
| icon | 自定义树节点图标。 | ReactNode \| (props) => ReactNode | - |
| loadData | 异步加载数据 | function(node) | - |
| loadedKeys | （受控）已经加载的节点，需要配合 `loadData` 使用 | string[] | \[] |
| multiple | 支持点选多个节点（节点本身） | boolean | false |
| rootStyle | 添加在 Tree 最外层的 style | CSSProperties | - | 4.20.0 |
| selectable | 是否可选中 | boolean | true |
| selectedKeys | （受控）设置选中的树节点，多选需设置 `multiple` 为 true | string[] | - |
| showIcon | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 | boolean | false |
| showLine | 是否展示连接线 | boolean \| {showLeafIcon: boolean \| ReactNode \| ((props: AntTreeNodeProps) => ReactNode)} | false |
| switcherIcon | 自定义树节点的展开/折叠图标 | ReactNode \| ((props: AntTreeNodeProps) => ReactNode) | - | renderProps: 4.20.0 |
| titleRender | 自定义渲染节点 | (nodeData) => ReactNode | - | 4.5.0 |
| treeData | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一） | array<{key, title, children, [disabled, selectable]}> | - |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true | 4.1.0 |
| onCheck | 点击复选框触发 | function(checkedKeys, e:{checked: boolean, checkedNodes, node, event, halfCheckedKeys}) | - |
| onDragEnd | dragend 触发时调用 | function({event, node}) | - |
| onDragEnter | dragenter 触发时调用 | function({event, node, expandedKeys}) | - |
| onDragLeave | dragleave 触发时调用 | function({event, node}) | - |
| onDragOver | dragover 触发时调用 | function({event, node}) | - |
| onDragStart | 开始拖拽时调用 | function({event, node}) | - |
| onDrop | drop 触发时调用 | function({event, node, dragNode, dragNodesKeys}) | - |
| onExpand | 展开/收起节点时触发 | function(expandedKeys, {expanded: boolean, node}) | - |
| onLoad | 节点加载完毕时触发 | function(loadedKeys, {event, node}) | - |
| onRightClick | 响应右键点击 | function({event, node}) | - |
| onSelect | 点击树节点触发 | function(selectedKeys, e:{selected: boolean, selectedNodes, node, event}) | - |

### ant-design 的 Tree - TreeNode props 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checkable | 当树为 checkable 时，设置独立节点是否展示 Checkbox | boolean | - |
| disableCheckbox | 禁掉 checkbox | boolean | false |
| disabled | 禁掉响应 | boolean | false |
| icon | 自定义图标。可接收组件，props 为当前节点 props | ReactNode \| (props) => ReactNode | - |
| isLeaf | 设置为叶子节点 (设置了 `loadData` 时有效)。为 `false` 时会强制将其作为父节点 | boolean | - |
| key | 被树的 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys 属性所用。注意：整个树范围内的所有节点的 key 值不能重复！ | string | (内部计算出的节点位置) |
| selectable | 设置节点是否可被选中 | boolean | true |
| title | 标题 | ReactNode | `---` |

### ant-design 的 Tree - DirectoryTree props 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| expandAction | 目录展开逻辑，可选：false \| `click` \| `doubleClick` | string \| boolean | `click` |

### ant-design 的 Tree - Tree 方法 有哪些配置？

| 名称 | 说明 |
| --- | --- |
| scrollTo({ key: string \| number; align?: 'top' \| 'bottom' \| 'auto'; offset?: number }) | 虚拟滚动下，滚动到指定 key 条目 |

## ant-design 的 Transfer 有哪些配置？

#### Transfer - Transfer

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- | --- |
| dataSource | 数据源，其中的数据将会被渲染到左边一栏中，`targetKeys` 中指定的除外 | \[] |
| disabled | 是否禁用 | boolean | false |
| selectionsIcon | 自定义下拉菜单图标 | React.ReactNode | 5.8.0 |
| filterOption | 根据搜索内容进行筛选，接收 `inputValue` `option` `direction` 三个参数，(`direction` 自5.9.0+支持)，当 `option` 符合筛选条件时，应返回 true，反之则返回 false | (inputValue, option, direction: `left` \| `right`): boolean | - |
| footer | 底部渲染函数 | (props, { direction }) => ReactNode | - | direction: 4.17.0 |
| listStyle | 两个穿梭框的自定义样式 | object\|({direction: `left` \| `right`}) => object | - |
| locale | 各种语言 | { itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: ReactNode \| ReactNode[]; } | { itemUnit: `项`, itemsUnit: `项`, searchPlaceholder: `请输入搜索内容` } |
| oneWay | 展示为单向样式 | boolean | false | 4.3.0 |
| operations | 操作文案集合，顺序从上至下 | string[] | \[`>`, `<`] |
| operationStyle | 操作栏的自定义样式 | CSSProperties | - |
| pagination | 使用分页样式，自定义渲染列表下无效 | boolean \| { pageSize: number, simple: boolean, showSizeChanger?: boolean, showLessItems?: boolean } | false | 4.3.0 |
| render | 每行数据渲染函数，该函数的入参为 `dataSource` 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 `label` 字段为 ReactElement，`value` 字段为 title | (record) => ReactNode | - |
| selectAllLabels | 自定义顶部多选框标题的集合 | (ReactNode \| (info: { selectedCount: number, totalCount: number }) => ReactNode)[] | - |
| selectedKeys | 设置哪些项应该被选中 | string[] | \[] |
| showSearch | 是否显示搜索框 | boolean | false |
| showSelectAll | 是否展示全选勾选框 | boolean | true |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| targetKeys | 显示在右侧框数据的 key 集合 | string[] | \[] |
| titles | 标题集合，顺序从左至右 | ReactNode[] | - |
| onChange | 选项在两栏之间转移时的回调函数 | (targetKeys, direction, moveKeys): void | - |
| onScroll | 选项列表滚动时的回调函数 | (direction, event): void | - |
| onSearch | 搜索框内容时改变时的回调函数 | (direction: `left` \| `right`, value: string): void | - |
| onSelectChange | 选中项发生改变时的回调函数 | (sourceSelectedKeys, targetSelectedKeys): void | - |

#### Transfer - Render Props

| 参数            | 说明           | 类型                                |
| --------------- | -------------- | ----------------------------------- |
| direction       | 渲染列表的方向 | `left` \| `right`                   |
| disabled        | 是否禁用列表   | boolean                             |
| filteredItems   | 过滤后的数据   | RecordType[]                        |
| selectedKeys    | 选中的条目     | string[]                            |
| onItemSelect    | 勾选条目       | (key: string, selected: boolean)    |
| onItemSelectAll | 勾选一组条目   | (keys: string[], selected: boolean) |

### ant-design 的 Transfer - Transfer 有哪些配置？

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- | --- |
| dataSource | 数据源，其中的数据将会被渲染到左边一栏中，`targetKeys` 中指定的除外 | \[] |
| disabled | 是否禁用 | boolean | false |
| selectionsIcon | 自定义下拉菜单图标 | React.ReactNode | 5.8.0 |
| filterOption | 根据搜索内容进行筛选，接收 `inputValue` `option` `direction` 三个参数，(`direction` 自5.9.0+支持)，当 `option` 符合筛选条件时，应返回 true，反之则返回 false | (inputValue, option, direction: `left` \| `right`): boolean | - |
| footer | 底部渲染函数 | (props, { direction }) => ReactNode | - | direction: 4.17.0 |
| listStyle | 两个穿梭框的自定义样式 | object\|({direction: `left` \| `right`}) => object | - |
| locale | 各种语言 | { itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: ReactNode \| ReactNode[]; } | { itemUnit: `项`, itemsUnit: `项`, searchPlaceholder: `请输入搜索内容` } |
| oneWay | 展示为单向样式 | boolean | false | 4.3.0 |
| operations | 操作文案集合，顺序从上至下 | string[] | \[`>`, `<`] |
| operationStyle | 操作栏的自定义样式 | CSSProperties | - |
| pagination | 使用分页样式，自定义渲染列表下无效 | boolean \| { pageSize: number, simple: boolean, showSizeChanger?: boolean, showLessItems?: boolean } | false | 4.3.0 |
| render | 每行数据渲染函数，该函数的入参为 `dataSource` 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 `label` 字段为 ReactElement，`value` 字段为 title | (record) => ReactNode | - |
| selectAllLabels | 自定义顶部多选框标题的集合 | (ReactNode \| (info: { selectedCount: number, totalCount: number }) => ReactNode)[] | - |
| selectedKeys | 设置哪些项应该被选中 | string[] | \[] |
| showSearch | 是否显示搜索框 | boolean | false |
| showSelectAll | 是否展示全选勾选框 | boolean | true |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| targetKeys | 显示在右侧框数据的 key 集合 | string[] | \[] |
| titles | 标题集合，顺序从左至右 | ReactNode[] | - |
| onChange | 选项在两栏之间转移时的回调函数 | (targetKeys, direction, moveKeys): void | - |
| onScroll | 选项列表滚动时的回调函数 | (direction, event): void | - |
| onSearch | 搜索框内容时改变时的回调函数 | (direction: `left` \| `right`, value: string): void | - |
| onSelectChange | 选中项发生改变时的回调函数 | (sourceSelectedKeys, targetSelectedKeys): void | - |

### ant-design 的 Transfer - Render Props 有哪些配置？

| 参数            | 说明           | 类型                                |
| --------------- | -------------- | ----------------------------------- |
| direction       | 渲染列表的方向 | `left` \| `right`                   |
| disabled        | 是否禁用列表   | boolean                             |
| filteredItems   | 过滤后的数据   | RecordType[]                        |
| selectedKeys    | 选中的条目     | string[]                            |
| onItemSelect    | 勾选条目       | (key: string, selected: boolean)    |
| onItemSelectAll | 勾选一组条目   | (keys: string[], selected: boolean) |

## ant-design 的 Tour 有哪些配置？

#### Tour - Tour

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| arrow | 是否显示箭头，包含是否指向元素中心的配置 | `boolean` \| `{ pointAtCenter: boolean}` | `true` |
| closeIcon | 自定义关闭按钮 | `React.ReactNode` | `true` | 5.9.0 |
| disabledInteraction | 禁用高亮区域交互 | `boolean` | `false` | 5.13.0 |
| placement | 引导卡片相对于目标元素的位置 | `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | `bottom` |
| onClose | 关闭引导时的回调函数 | `Function` | - |
| onFinish | 引导完成时的回调 | `Function` | - |
| mask | 是否启用蒙层，也可传入配置改变蒙层样式和填充色 | `boolean \| { style?: React.CSSProperties; color?: string; }` | `true` |
| type | 类型，影响底色与文字颜色 | `default` \| `primary` | `default` |
| open | 打开引导 | `boolean` | - |
| onChange | 步骤改变时的回调，current 为当前的步骤 | `(current: number) => void` | - |
| current | 当前处于哪一步 | `number` | - |
| scrollIntoViewOptions | 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数 | `boolean \| ScrollIntoViewOptions` | `true` | 5.2.0 |
| indicatorsRender | 自定义指示器 | `(current: number, total: number) => ReactNode` | - | 5.2.0 |
| zIndex | Tour 的层级 | number | 1001 | 5.3.0 |
| getPopupContainer | 设置 Tour 浮层的渲染节点，默认是 body | `(node: HTMLElement) => HTMLElement` | body | 5.12.0 |

#### Tour - TourStep 引导步骤卡片

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| target | 获取引导卡片指向的元素，为空时居中于屏幕 | `() => HTMLElement` \| `HTMLElement` | - |
| arrow | 是否显示箭头，包含是否指向元素中心的配置 | `boolean` \| `{ pointAtCenter: boolean}` | `true` |
| closeIcon | 自定义关闭按钮 | `React.ReactNode` | `true` | 5.9.0 |
| cover | 展示的图片或者视频 | `ReactNode` | - |
| title | 标题 | `ReactNode` | - |
| description | 主要描述部分 | `ReactNode` | - |
| placement | 引导卡片相对于目标元素的位置 | `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` `bottom` |
| onClose | 关闭引导时的回调函数 | `Function` | - |
| mask | 是否启用蒙层，也可传入配置改变蒙层样式和填充色，默认跟随 Tour 的 `mask` 属性 | `boolean \| { style?: React.CSSProperties; color?: string; }` | `true` |
| type | 类型，影响底色与文字颜色 | `default` \| `primary` | `default` |
| nextButtonProps | 下一步按钮的属性 | `{ children: ReactNode; onClick: Function }` | - |
| prevButtonProps | 上一步按钮的属性 | `{ children: ReactNode; onClick: Function }` | - |
| scrollIntoViewOptions | 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数，默认跟随 Tour 的 `scrollIntoViewOptions` 属性 | `boolean \| ScrollIntoViewOptions` | `true` | 5.2.0 |

### ant-design 的 Tour - Tour 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| arrow | 是否显示箭头，包含是否指向元素中心的配置 | `boolean` \| `{ pointAtCenter: boolean}` | `true` |
| closeIcon | 自定义关闭按钮 | `React.ReactNode` | `true` | 5.9.0 |
| disabledInteraction | 禁用高亮区域交互 | `boolean` | `false` | 5.13.0 |
| placement | 引导卡片相对于目标元素的位置 | `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | `bottom` |
| onClose | 关闭引导时的回调函数 | `Function` | - |
| onFinish | 引导完成时的回调 | `Function` | - |
| mask | 是否启用蒙层，也可传入配置改变蒙层样式和填充色 | `boolean \| { style?: React.CSSProperties; color?: string; }` | `true` |
| type | 类型，影响底色与文字颜色 | `default` \| `primary` | `default` |
| open | 打开引导 | `boolean` | - |
| onChange | 步骤改变时的回调，current 为当前的步骤 | `(current: number) => void` | - |
| current | 当前处于哪一步 | `number` | - |
| scrollIntoViewOptions | 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数 | `boolean \| ScrollIntoViewOptions` | `true` | 5.2.0 |
| indicatorsRender | 自定义指示器 | `(current: number, total: number) => ReactNode` | - | 5.2.0 |
| zIndex | Tour 的层级 | number | 1001 | 5.3.0 |
| getPopupContainer | 设置 Tour 浮层的渲染节点，默认是 body | `(node: HTMLElement) => HTMLElement` | body | 5.12.0 |

### ant-design 的 Tour - TourStep 引导步骤卡片 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| target | 获取引导卡片指向的元素，为空时居中于屏幕 | `() => HTMLElement` \| `HTMLElement` | - |
| arrow | 是否显示箭头，包含是否指向元素中心的配置 | `boolean` \| `{ pointAtCenter: boolean}` | `true` |
| closeIcon | 自定义关闭按钮 | `React.ReactNode` | `true` | 5.9.0 |
| cover | 展示的图片或者视频 | `ReactNode` | - |
| title | 标题 | `ReactNode` | - |
| description | 主要描述部分 | `ReactNode` | - |
| placement | 引导卡片相对于目标元素的位置 | `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` `bottom` |
| onClose | 关闭引导时的回调函数 | `Function` | - |
| mask | 是否启用蒙层，也可传入配置改变蒙层样式和填充色，默认跟随 Tour 的 `mask` 属性 | `boolean \| { style?: React.CSSProperties; color?: string; }` | `true` |
| type | 类型，影响底色与文字颜色 | `default` \| `primary` | `default` |
| nextButtonProps | 下一步按钮的属性 | `{ children: ReactNode; onClick: Function }` | - |
| prevButtonProps | 上一步按钮的属性 | `{ children: ReactNode; onClick: Function }` | - |
| scrollIntoViewOptions | 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数，默认跟随 Tour 的 `scrollIntoViewOptions` 属性 | `boolean \| ScrollIntoViewOptions` | `true` | 5.2.0 |

## ant-design 的 Tooltip 有哪些配置？

#### Tooltip - API

| 参数  | 说明     | 类型                         | 默认值 |
| ----- | -------- | ---------------------------- | ------ |
| title | 提示文字 | ReactNode \| () => ReactNode | -      |

#### Tooltip - 共同的 API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| align | 该值将合并到 placement 的配置中，设置参考 [rc-tooltip](https://github.com/react-component/tooltip) | object | - |
| arrow | 修改箭头的显示状态以及修改箭头是否指向目标元素中心 | boolean \| { pointAtCenter: boolean } | true | 5.2.0 |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置 | boolean | true |
| color | 背景颜色 | string | - | 4.3.0 |
| defaultOpen | 默认是否显隐 | boolean | false | 4.23.0 |
| destroyTooltipOnHide | 关闭后是否销毁 Tooltip | boolean | false |
| fresh | 默认情况下，Tooltip 在关闭时会缓存内容。设置该属性后会始终保持更新 | boolean | false | 5.10.0 |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上 | (triggerNode: HTMLElement) => HTMLElement | () => document.body |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0.1 |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |
| overlayClassName | 卡片类名 | string | - |
| overlayStyle | 卡片样式 | object | - |
| overlayInnerStyle | 卡片内容区域的样式对象 | object | - |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | `top` |
| trigger | 触发行为，可选 `hover` \| `focus` \| `click` \| `contextMenu`，可使用数组设置多个触发行为 | string \| string[] | `hover` |
| open | 用于手动控制浮层显隐，小于 4.23.0 使用 `visible`（[为什么?](/docs/react/faq#弹层类组件为什么要统一至-open-属性)） | boolean | false | 4.23.0 |
| zIndex | 设置 Tooltip 的 `z-index` | number | - |
| onOpenChange | 显示隐藏的回调 | (open: boolean) => void | - | 4.23.0 |

### ant-design 的 Tooltip - API 有哪些配置？

| 参数  | 说明     | 类型                         | 默认值 |
| ----- | -------- | ---------------------------- | ------ |
| title | 提示文字 | ReactNode \| () => ReactNode | -      |

### ant-design 的 Tooltip - 共同的 API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| align | 该值将合并到 placement 的配置中，设置参考 [rc-tooltip](https://github.com/react-component/tooltip) | object | - |
| arrow | 修改箭头的显示状态以及修改箭头是否指向目标元素中心 | boolean \| { pointAtCenter: boolean } | true | 5.2.0 |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置 | boolean | true |
| color | 背景颜色 | string | - | 4.3.0 |
| defaultOpen | 默认是否显隐 | boolean | false | 4.23.0 |
| destroyTooltipOnHide | 关闭后是否销毁 Tooltip | boolean | false |
| fresh | 默认情况下，Tooltip 在关闭时会缓存内容。设置该属性后会始终保持更新 | boolean | false | 5.10.0 |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上 | (triggerNode: HTMLElement) => HTMLElement | () => document.body |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0.1 |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |
| overlayClassName | 卡片类名 | string | - |
| overlayStyle | 卡片样式 | object | - |
| overlayInnerStyle | 卡片内容区域的样式对象 | object | - |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | `top` |
| trigger | 触发行为，可选 `hover` \| `focus` \| `click` \| `contextMenu`，可使用数组设置多个触发行为 | string \| string[] | `hover` |
| open | 用于手动控制浮层显隐，小于 4.23.0 使用 `visible`（[为什么?](/docs/react/faq#弹层类组件为什么要统一至-open-属性)） | boolean | false | 4.23.0 |
| zIndex | 设置 Tooltip 的 `z-index` | number | - |
| onOpenChange | 显示隐藏的回调 | (open: boolean) => void | - | 4.23.0 |

## ant-design 的 Timeline 有哪些配置？

#### Timeline - Timeline

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 通过设置 `mode` 可以改变时间轴和内容的相对位置 | `left` \| `alternate` \| `right` | - |
| pending | 指定最后一个幽灵节点是否存在或内容 | boolean \| ReactNode | false |
| pendingDot | 当最后一个幽灵节点存在時，指定其时间图点 | ReactNode | \<LoadingOutlined /> |
| reverse | 节点排序 | boolean | false |
| items | 选项配置 | 5.2.0 |

#### Timeline - Items

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 指定圆圈颜色 `blue`、`red`、`green`、`gray`，或自定义的色值 | string | `blue` |
| dot | 自定义时间轴点 | ReactNode | - |
| label | 设置标签 | ReactNode | - |
| children | 设置内容 | ReactNode | - |
| position | 自定义节点位置 | `left` \| `right` | - |

### ant-design 的 Timeline - Timeline 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 通过设置 `mode` 可以改变时间轴和内容的相对位置 | `left` \| `alternate` \| `right` | - |
| pending | 指定最后一个幽灵节点是否存在或内容 | boolean \| ReactNode | false |
| pendingDot | 当最后一个幽灵节点存在時，指定其时间图点 | ReactNode | \<LoadingOutlined /> |
| reverse | 节点排序 | boolean | false |
| items | 选项配置 | 5.2.0 |

### ant-design 的 Timeline - Items 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 指定圆圈颜色 `blue`、`red`、`green`、`gray`，或自定义的色值 | string | `blue` |
| dot | 自定义时间轴点 | ReactNode | - |
| label | 设置标签 | ReactNode | - |
| children | 设置内容 | ReactNode | - |
| position | 自定义节点位置 | `left` \| `right` | - |

## ant-design 的 Time-picker 有哪些配置？

#### Time-picker - API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| { clearIcon?: ReactNode } | true | 5.8.0: 支持对象类型 |
| autoFocus | 自动获取焦点 | boolean | false |
| cellRender | 自定义单元格的内容 | (current: number, info: { originNode: React.ReactNode, today: dayjs, range?: 'start' \| 'end', subType: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| changeOnBlur | 失去焦点时触发 `change` 事件，例如 datetime 下不再需要点击确认按钮 | boolean | false | 5.5.0 |
| className | 选择器类名 | string | - |
| defaultValue | 默认时间 | - |
| disabled | 禁用全部操作 | boolean | false |
| disabledTime | 不可选择的时间 | - | 4.19.0 |
| format | 展示的时间格式 | string | `HH:mm:ss` |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - |
| hideDisabledOptions | 隐藏禁止选择的选项 | boolean | false |
| hourStep | 小时选项间隔 | number | 1 |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false |
| minuteStep | 分钟选项间隔 | number | 1 |
| open | 面板是否打开 | boolean | false |
| placeholder | 没有值的时候显示的内容 | string \| [string, string] | `请选择时间` |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |
| popupClassName | 弹出层类名 | string | - |
| popupStyle | 弹出层样式对象 | object | - |
| renderExtraFooter | 选择框底部显示自定义的内容 | () => ReactNode | - |
| secondStep | 秒选项间隔 | number | 1 |
| showNow | 面板是否显示“此刻”按钮 | boolean | - | 4.4.0 |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `large` \| `middle` \| `small` | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |
| use12Hours | 使用 12 小时制，为 true 时 `format` 默认为 `h:mm:ss a` | boolean | false |
| value | 当前时间 | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onChange | 时间发生变化的回调 | function(time: dayjs, timeString: string): void | - |
| onOpenChange | 面板打开/关闭时的回调 | (open: boolean) => void | - |

#### Time-picker - 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

#### Time-picker - RangePicker

| 参数         | 说明                 | 类型    | 默认值 |
| ------------ | -------------------- | ------- | ------ | ----- |
| disabledTime | 不可选择的时间       | -       | 4.19.0 |
| order        | 始末时间是否自动排序 | boolean | true   | 4.1.0 |

### ant-design 的 Time-picker - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| { clearIcon?: ReactNode } | true | 5.8.0: 支持对象类型 |
| autoFocus | 自动获取焦点 | boolean | false |
| cellRender | 自定义单元格的内容 | (current: number, info: { originNode: React.ReactNode, today: dayjs, range?: 'start' \| 'end', subType: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| changeOnBlur | 失去焦点时触发 `change` 事件，例如 datetime 下不再需要点击确认按钮 | boolean | false | 5.5.0 |
| className | 选择器类名 | string | - |
| defaultValue | 默认时间 | - |
| disabled | 禁用全部操作 | boolean | false |
| disabledTime | 不可选择的时间 | - | 4.19.0 |
| format | 展示的时间格式 | string | `HH:mm:ss` |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - |
| hideDisabledOptions | 隐藏禁止选择的选项 | boolean | false |
| hourStep | 小时选项间隔 | number | 1 |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false |
| minuteStep | 分钟选项间隔 | number | 1 |
| open | 面板是否打开 | boolean | false |
| placeholder | 没有值的时候显示的内容 | string \| [string, string] | `请选择时间` |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |
| popupClassName | 弹出层类名 | string | - |
| popupStyle | 弹出层样式对象 | object | - |
| renderExtraFooter | 选择框底部显示自定义的内容 | () => ReactNode | - |
| secondStep | 秒选项间隔 | number | 1 |
| showNow | 面板是否显示“此刻”按钮 | boolean | - | 4.4.0 |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `large` \| `middle` \| `small` | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |
| use12Hours | 使用 12 小时制，为 true 时 `format` 默认为 `h:mm:ss a` | boolean | false |
| value | 当前时间 | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onChange | 时间发生变化的回调 | function(time: dayjs, timeString: string): void | - |
| onOpenChange | 面板打开/关闭时的回调 | (open: boolean) => void | - |

### ant-design 的 Time-picker - 方法 有哪些配置？

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### ant-design 的 Time-picker - RangePicker 有哪些配置？

| 参数         | 说明                 | 类型    | 默认值 |
| ------------ | -------------------- | ------- | ------ | ----- |
| disabledTime | 不可选择的时间       | -       | 4.19.0 |
| order        | 始末时间是否自动排序 | boolean | true   | 4.1.0 |

## ant-design 的 Tag 有哪些配置？

#### Tag - Tag

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closeIcon | 自定义关闭按钮。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | boolean \| ReactNode | false | 4.4.0 |
| color | 标签色 | string | - |
| icon | 设置图标 | ReactNode | - |
| bordered | 是否有边框 | boolean | true | 5.4.0 |
| onClose | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e) => void | - |

#### Tag - Tag.CheckableTag

| 参数     | 说明                 | 类型              | 默认值 |
| -------- | -------------------- | ----------------- | ------ |
| checked  | 设置标签的选中状态   | boolean           | false  |
| onChange | 点击标签时触发的回调 | (checked) => void | -      |

### ant-design 的 Tag - Tag 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closeIcon | 自定义关闭按钮。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | boolean \| ReactNode | false | 4.4.0 |
| color | 标签色 | string | - |
| icon | 设置图标 | ReactNode | - |
| bordered | 是否有边框 | boolean | true | 5.4.0 |
| onClose | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e) => void | - |

### ant-design 的 Tag - Tag.CheckableTag 有哪些配置？

| 参数     | 说明                 | 类型              | 默认值 |
| -------- | -------------------- | ----------------- | ------ |
| checked  | 设置标签的选中状态   | boolean           | false  |
| onChange | 点击标签时触发的回调 | (checked) => void | -      |

## ant-design 的 Tabs 有哪些配置？

#### Tabs - Tabs

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | string | - |
| addIcon | 自定义添加按钮 | ReactNode | - | 4.4.0 |
| animated | 是否使用动画切换 Tabs | boolean\| { inkBar: boolean, tabPane: boolean } | { inkBar: true, tabPane: false } |
| centered | 标签居中展示 | boolean | false | 4.4.0 |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string | `第一个面板` |
| hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean | false |
| indicator | 自定义指示条的长度和对齐方式 | { size?: number \| (origin: number) => number; align: `start` \| `center` \| `end`; } | - | 5.13.0 |
| items | 配置选项卡内容 | \[] | 4.23.0 |
| moreIcon | 自定义折叠 icon | ReactNode | \<EllipsisOutlined /> | 4.14.0 |
| popupClassName | 更多菜单的 `className` | string | - | 4.21.0 |
| renderTabBar | 替换 TabBar，用于二次封装标签头 | (props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement | - |
| size | 大小，提供 `large` `middle` 和 `small` 三种大小 | string | `middle` |
| tabBarExtraContent | tab bar 上额外的元素 | ReactNode \| {left?: ReactNode, right?: ReactNode} | - | object: 4.6.0 |
| tabBarGutter | tabs 之间的间隙 | number | - |
| tabBarStyle | tab bar 的样式对象 | CSSProperties | - |
| tabPosition | 页签位置，可选值有 `top` `right` `bottom` `left` | string | `top` |
| destroyInactiveTabPane | 被隐藏时是否销毁 DOM 结构 | boolean | false |
| type | 页签的基本样式，可选 `line`、`card` `editable-card` 类型 | string | `line` |
| onChange | 切换面板的回调 | function(activeKey) {} | - |
| onEdit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (action === 'add' ? event : targetKey, action): void | - |
| onTabClick | tab 被点击的回调 | function(key: string, event: MouseEvent) | - |
| onTabScroll | tab 滚动时触发 | function({ direction: `left` \| `right` \| `top` \| `bottom` }) | - | 4.3.0 |

#### Tabs - TabItemType

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| closeIcon | 自定义关闭图标，在 `type="editable-card"` 时有效。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | boolean \| ReactNode | - |
| destroyInactiveTabPane | 被隐藏时是否销毁 DOM 结构 | boolean | false | 5.11.0 |
| disabled | 禁用某一项 | boolean | false |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false |
| key | 对应 activeKey | string | - |
| label | 选项卡头显示文字 | ReactNode | - |
| icon | 选项卡头显示图标 | ReactNode | - | 5.12.0 |
| children | 选项卡头显示内容 | ReactNode | - |
| closable | 是否显示选项卡的关闭按钮，在 `type="editable-card"` 时有效 | boolean | true |

### ant-design 的 Tabs - Tabs 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| activeKey | 当前激活 tab 面板的 key | string | - |
| addIcon | 自定义添加按钮 | ReactNode | - | 4.4.0 |
| animated | 是否使用动画切换 Tabs | boolean\| { inkBar: boolean, tabPane: boolean } | { inkBar: true, tabPane: false } |
| centered | 标签居中展示 | boolean | false | 4.4.0 |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string | `第一个面板` |
| hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean | false |
| indicator | 自定义指示条的长度和对齐方式 | { size?: number \| (origin: number) => number; align: `start` \| `center` \| `end`; } | - | 5.13.0 |
| items | 配置选项卡内容 | \[] | 4.23.0 |
| moreIcon | 自定义折叠 icon | ReactNode | \<EllipsisOutlined /> | 4.14.0 |
| popupClassName | 更多菜单的 `className` | string | - | 4.21.0 |
| renderTabBar | 替换 TabBar，用于二次封装标签头 | (props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement | - |
| size | 大小，提供 `large` `middle` 和 `small` 三种大小 | string | `middle` |
| tabBarExtraContent | tab bar 上额外的元素 | ReactNode \| {left?: ReactNode, right?: ReactNode} | - | object: 4.6.0 |
| tabBarGutter | tabs 之间的间隙 | number | - |
| tabBarStyle | tab bar 的样式对象 | CSSProperties | - |
| tabPosition | 页签位置，可选值有 `top` `right` `bottom` `left` | string | `top` |
| destroyInactiveTabPane | 被隐藏时是否销毁 DOM 结构 | boolean | false |
| type | 页签的基本样式，可选 `line`、`card` `editable-card` 类型 | string | `line` |
| onChange | 切换面板的回调 | function(activeKey) {} | - |
| onEdit | 新增和删除页签的回调，在 `type="editable-card"` 时有效 | (action === 'add' ? event : targetKey, action): void | - |
| onTabClick | tab 被点击的回调 | function(key: string, event: MouseEvent) | - |
| onTabScroll | tab 滚动时触发 | function({ direction: `left` \| `right` \| `top` \| `bottom` }) | - | 4.3.0 |

### ant-design 的 Tabs - TabItemType 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| closeIcon | 自定义关闭图标，在 `type="editable-card"` 时有效。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | boolean \| ReactNode | - |
| destroyInactiveTabPane | 被隐藏时是否销毁 DOM 结构 | boolean | false | 5.11.0 |
| disabled | 禁用某一项 | boolean | false |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false |
| key | 对应 activeKey | string | - |
| label | 选项卡头显示文字 | ReactNode | - |
| icon | 选项卡头显示图标 | ReactNode | - | 5.12.0 |
| children | 选项卡头显示内容 | ReactNode | - |
| closable | 是否显示选项卡的关闭按钮，在 `type="editable-card"` 时有效 | boolean | true |

## ant-design 的 Table 有哪些配置？

#### Table - Table

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| bordered | 是否展示外边框和列边框 | boolean | false |
| columns | 表格列的配置描述，具体项见下表 | - |
| components | 覆盖默认的 table 元素，`virtual` 下不支持 `components.body` | - |
| dataSource | 数据数组 | object[] | - |
| expandable | 配置展开属性 | - |
| footer | 表格尾部 | function(currentPageData) | - |
| getPopupContainer | 设置表格内各类浮层的渲染节点，如筛选菜单 | (triggerNode) => HTMLElement | () => TableHtmlElement |
| loading | 页面是否加载中 | boolean \| [Spin Props](/components/spin-cn#api) | false |
| locale | 默认文案设置，目前包括排序、过滤、空数据文案 | object |
| pagination | 分页器，参考[配置项](#pagination)或 [pagination](/components/pagination-cn) 文档，设为 false 时不展示和进行分页 | object \| `false` | - |
| rowClassName | 表格行的类名 | function(record, index): string | - |
| rowKey | 表格行 key 的取值，可以是字符串或一个函数 | string \| function(record): string | `key` |
| rowSelection | 表格行是否可选择，[配置项](#rowselection) | object | - |
| scroll | 表格是否可滚动，也可以指定滚动区域的宽、高，[配置项](#scroll) | object | - |
| showHeader | 是否显示表头 | boolean | true |
| showSorterTooltip | 表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性 | boolean \| [Tooltip props](/components/tooltip-cn) | true |
| size | 表格大小 | `large` \| `middle` \| `small` | `large` |
| sortDirections | 支持的排序方式，取值为 `ascend` `descend` | Array | \[`ascend`, `descend`] |
| sticky | 设置粘性头部和滚动条 | boolean \| `{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}` | - | 4.6.0 (getContainer: 4.7.0) |
| summary | 总结栏 | (currentData) => ReactNode | - |
| tableLayout | 表格元素的 [table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout) 属性，设为 `fixed` 表示内容不会影响列的布局 | - \| `auto` \| `fixed` | 无<hr />固定表头/列或使用了 `column.ellipsis` 时，默认值为 `fixed` |
| title | 表格标题 | function(currentPageData) | - |
| onChange | 分页、排序、筛选变化时触发 | function(pagination, filters, sorter, extra: { currentDataSource: [], action: `paginate` \| `sort` \| `filter` }) | - |
| onHeaderRow | 设置头部行属性 | function(columns, index) | - |
| onRow | 设置行属性 | function(record, index) | - |
| virtual | 支持虚拟列表，开启后不支持 `components.body` 自定义 | boolean | - | 5.9.0 |

#### Table - Table ref

| 参数 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| nativeElement | 最外层 div 元素 | HTMLDivElement | 5.11.0 |
| scrollTo | 滚动到目标位置（设置 `key` 时为 Record 对应的 `rowKey`） | (config: { index?: number, key?: React.Key, top?: number }) => void | 5.11.0 |

#### Table - Column

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| align | 设置列的对齐方式 | `left` \| `right` \| `center` | `left` |
| className | 列样式类名 | string | - |
| colSpan | 表头列合并，设置为 0 时，不渲染 | number | - |
| dataIndex | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 | string \| string[] | - |
| defaultFilteredValue | 默认筛选值 | string[] | - |
| filterResetToDefaultFilteredValue | 点击重置按钮的时候，是否恢复默认筛选值 | boolean | false |
| defaultSortOrder | 默认排序顺序 | `ascend` \| `descend` | - |
| ellipsis | 超过宽度将自动省略，暂不支持和排序筛选一起使用。<br />设置为 `true` 或 `{ showTitle?: boolean }` 时，表格布局将变成 `tableLayout="fixed"`。 | boolean \| { showTitle?: boolean } | false | showTitle: 4.3.0 |
| filterDropdown | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互 | ReactNode \| (props: [FilterDropdownProps](https://github.com/ant-design/ant-design/blob/ecc54dda839619e921c0ace530408871f0281c2a/components/table/interface.tsx#L79)) => ReactNode | - |
| filterDropdownOpen | 用于控制自定义筛选菜单是否可见 | boolean | - |
| filtered | 标识数据是否经过过滤，筛选图标会高亮 | boolean | false |
| filteredValue | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组 | string[] | - |
| filterIcon | 自定义 filter 图标。 | ReactNode \| (filtered: boolean) => ReactNode | false |
| filterMultiple | 是否多选 | boolean | true |
| filterMode | 指定筛选菜单的用户界面 | 'menu' \| 'tree' | 'menu' | 4.17.0 |
| filterSearch | 筛选菜单项是否可搜索 | boolean \| function(input, record):boolean | false | boolean:4.17.0 function:4.19.0 |
| filters | 表头的筛选菜单项 | object[] | - |
| fixed | （IE 下无效）列是否固定，可选 `true` (等效于 `left`) `left` `right` | boolean \| string | false |
| key | React 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string | - |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引 | function(text, record, index) {} | - |
| responsive | 响应式 breakpoint 配置列表。未设置则始终可见。 | - | 4.2.0 |
| rowScope | 设置列范围 | `row` \| `rowgroup` | - | 5.1.0 |
| shouldCellUpdate | 自定义单元格渲染时机 | (record, prevRecord) => boolean | - | 4.3.0 |
| showSorterTooltip | 表头显示下一次排序的 tooltip 提示, 覆盖 table 中 `showSorterTooltip` | boolean \| [Tooltip props](/components/tooltip-cn/#api) | true |
| sortDirections | 支持的排序方式，覆盖 `Table` 中 `sortDirections`， 取值为 `ascend` `descend` | Array | \[`ascend`, `descend`] |
| sorter | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)。需要服务端排序可设为 `true`（单列排序） 或 `{ multiple: number }`（多列排序） | function \| boolean \| { compare: function, multiple: number } | - |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `ascend` `descend` `null` | `ascend` \| `descend` \| null | - |
| sortIcon | 自定义 sort 图标 | (props: { sortOrder }) => ReactNode | - | 5.6.0 |
| title | 列头显示文字（函数用法 `3.10.0` 后支持） | ReactNode \| ({ sortOrder, sortColumn, filters }) => ReactNode | - |
| width | 列宽度（[指定了也不生效？](https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241)） | string \| number | - |
| hidden | 隐藏列 | boolean | false | 5.13.0 |
| onCell | 设置单元格属性 | function(record, rowIndex) | - |
| onFilter | 本地模式下，确定筛选的运行函数 | function | - |
| onFilterDropdownOpenChange | 自定义筛选菜单可见变化时调用 | function(visible) {} | - |
| onHeaderCell | 设置头部单元格属性 | function(column) | - |

#### Table - ColumnGroup

| 参数  | 说明         | 类型      | 默认值 |
| ----- | ------------ | --------- | ------ |
| title | 列头显示文字 | ReactNode | -      |

#### Table - pagination

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 指定分页显示的位置， 取值为`topLeft` \| `topCenter` \| `topRight` \|`bottomLeft` \| `bottomCenter` \| `bottomRight` | Array | \[`bottomRight`] |

#### Table - expandable

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| childrenColumnName | 指定树形结构的列名 | string | children |
| columnTitle | 自定义展开列表头 | ReactNode | - | 4.23.0 |
| columnWidth | 自定义展开列宽度 | string \| number | - |
| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |
| defaultExpandedRowKeys | 默认展开的行 | string[] | - |
| expandedRowClassName | 展开行的 className | function(record, index, indent): string | - |
| expandedRowKeys | 展开的行，控制属性 | string[] | - |
| expandedRowRender | 额外的展开行 | function(record, index, indent, expanded): ReactNode | - |
| expandIcon | 自定义展开图标，参考[示例](https://codesandbox.io/s/fervent-bird-nuzpr) | function(props): ReactNode | - |
| expandRowByClick | 通过点击行来展开子行 | boolean | false |
| fixed | 控制展开图标是否固定，可选 `true` `'left'` `'right'` | boolean \| string | false | 4.16.0 |
| indentSize | 展示树形数据时，每层缩进的宽度，以 px 为单位 | number | 15 |
| rowExpandable | 设置是否允许行展开 | (record) => boolean | - |
| showExpandColumn | 设置是否展示行展开列 | boolean | true | 4.18.0 |
| onExpand | 点击展开图标时触发 | function(record, event) | - |
| onExpandedRowsChange | 展开的行变化时触发 | function(expandedRows) | - |

#### Table - rowSelection

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| checkStrictly | checkable 状态下节点选择完全受控（父子数据选中状态不再关联） | boolean | true | 4.4.0 |
| columnTitle | 自定义列表选择框标题 | ReactNode \| (originalNode: ReactNode) => ReactNode | - |
| columnWidth | 自定义列表选择框宽度 | string \| number | `32px` |
| fixed | 把选择框列固定在左边 | boolean | - |
| getCheckboxProps | 选择框的默认属性配置 | function(record) | - |
| hideSelectAll | 隐藏全选勾选框与自定义选择项 | boolean | false | 4.3.0 |
| preserveSelectedRowKeys | 当数据被删除时仍然保留选项的 `key` | boolean | - | 4.4.0 |
| renderCell | 渲染勾选框，用法与 Column 的 `render` 相同 | function(checked, record, index, originNode) {} | - | 4.1.0 |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string[] \| number[] | \[] |
| defaultSelectedRowKeys | 默认选中项的 key 数组 | string[] \| number[] | \[] |
| selections | 自定义选择项 [配置项](#selection), 设为 `true` 时使用默认选择项 | object[] \| boolean | true |
| type | 多选/单选 | `checkbox` \| `radio` | `checkbox` |
| onCell | 设置单元格属性，用法与 Column 的 `onCell` 相同 | function(record, rowIndex) | - | 5.5.0 |
| onChange | 选中项发生变化时的回调 | function(selectedRowKeys, selectedRows, info: { type }) | - | `info.type`: 4.21.0 |
| onSelect | 用户手动选择/取消选择某行的回调 | function(record, selected, selectedRows, nativeEvent) | - |
| onSelectAll | 用户手动选择/取消选择所有行的回调 | function(selected, selectedRows, changeRows) | - |
| onSelectInvert | 用户手动选择反选的回调 | function(selectedRowKeys) | - |
| onSelectNone | 用户清空选择的回调 | function() | - |
| onSelectMultiple | 用户使用键盘 shift 选择多行的回调 | function(selected, selectedRows, changeRows) | - |

#### Table - scroll

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| scrollToFirstRowOnChange | 当分页、排序、筛选变化后是否滚动到表格顶部 | boolean | - |
| x | 设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，`true` 和 ['max-content'](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content) | string \| number \| true | - |
| y | 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值 | string \| number | - |

#### Table - selection

| 参数     | 说明                       | 类型                        | 默认值 |
| -------- | -------------------------- | --------------------------- | ------ |
| key      | React 需要的 key，建议设置 | string                      | -      |
| text     | 选择项显示的文字           | ReactNode                   | -      |
| onSelect | 选择项点击回调             | function(changeableRowKeys) | -      |

### ant-design 的 Table - Table 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| bordered | 是否展示外边框和列边框 | boolean | false |
| columns | 表格列的配置描述，具体项见下表 | - |
| components | 覆盖默认的 table 元素，`virtual` 下不支持 `components.body` | - |
| dataSource | 数据数组 | object[] | - |
| expandable | 配置展开属性 | - |
| footer | 表格尾部 | function(currentPageData) | - |
| getPopupContainer | 设置表格内各类浮层的渲染节点，如筛选菜单 | (triggerNode) => HTMLElement | () => TableHtmlElement |
| loading | 页面是否加载中 | boolean \| [Spin Props](/components/spin-cn#api) | false |
| locale | 默认文案设置，目前包括排序、过滤、空数据文案 | object |
| pagination | 分页器，参考[配置项](#pagination)或 [pagination](/components/pagination-cn) 文档，设为 false 时不展示和进行分页 | object \| `false` | - |
| rowClassName | 表格行的类名 | function(record, index): string | - |
| rowKey | 表格行 key 的取值，可以是字符串或一个函数 | string \| function(record): string | `key` |
| rowSelection | 表格行是否可选择，[配置项](#rowselection) | object | - |
| scroll | 表格是否可滚动，也可以指定滚动区域的宽、高，[配置项](#scroll) | object | - |
| showHeader | 是否显示表头 | boolean | true |
| showSorterTooltip | 表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性 | boolean \| [Tooltip props](/components/tooltip-cn) | true |
| size | 表格大小 | `large` \| `middle` \| `small` | `large` |
| sortDirections | 支持的排序方式，取值为 `ascend` `descend` | Array | \[`ascend`, `descend`] |
| sticky | 设置粘性头部和滚动条 | boolean \| `{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}` | - | 4.6.0 (getContainer: 4.7.0) |
| summary | 总结栏 | (currentData) => ReactNode | - |
| tableLayout | 表格元素的 [table-layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout) 属性，设为 `fixed` 表示内容不会影响列的布局 | - \| `auto` \| `fixed` | 无<hr />固定表头/列或使用了 `column.ellipsis` 时，默认值为 `fixed` |
| title | 表格标题 | function(currentPageData) | - |
| onChange | 分页、排序、筛选变化时触发 | function(pagination, filters, sorter, extra: { currentDataSource: [], action: `paginate` \| `sort` \| `filter` }) | - |
| onHeaderRow | 设置头部行属性 | function(columns, index) | - |
| onRow | 设置行属性 | function(record, index) | - |
| virtual | 支持虚拟列表，开启后不支持 `components.body` 自定义 | boolean | - | 5.9.0 |

### ant-design 的 Table - Table ref 有哪些配置？

| 参数 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| nativeElement | 最外层 div 元素 | HTMLDivElement | 5.11.0 |
| scrollTo | 滚动到目标位置（设置 `key` 时为 Record 对应的 `rowKey`） | (config: { index?: number, key?: React.Key, top?: number }) => void | 5.11.0 |

### ant-design 的 Table - Column 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| align | 设置列的对齐方式 | `left` \| `right` \| `center` | `left` |
| className | 列样式类名 | string | - |
| colSpan | 表头列合并，设置为 0 时，不渲染 | number | - |
| dataIndex | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 | string \| string[] | - |
| defaultFilteredValue | 默认筛选值 | string[] | - |
| filterResetToDefaultFilteredValue | 点击重置按钮的时候，是否恢复默认筛选值 | boolean | false |
| defaultSortOrder | 默认排序顺序 | `ascend` \| `descend` | - |
| ellipsis | 超过宽度将自动省略，暂不支持和排序筛选一起使用。<br />设置为 `true` 或 `{ showTitle?: boolean }` 时，表格布局将变成 `tableLayout="fixed"`。 | boolean \| { showTitle?: boolean } | false | showTitle: 4.3.0 |
| filterDropdown | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互 | ReactNode \| (props: [FilterDropdownProps](https://github.com/ant-design/ant-design/blob/ecc54dda839619e921c0ace530408871f0281c2a/components/table/interface.tsx#L79)) => ReactNode | - |
| filterDropdownOpen | 用于控制自定义筛选菜单是否可见 | boolean | - |
| filtered | 标识数据是否经过过滤，筛选图标会高亮 | boolean | false |
| filteredValue | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组 | string[] | - |
| filterIcon | 自定义 filter 图标。 | ReactNode \| (filtered: boolean) => ReactNode | false |
| filterMultiple | 是否多选 | boolean | true |
| filterMode | 指定筛选菜单的用户界面 | 'menu' \| 'tree' | 'menu' | 4.17.0 |
| filterSearch | 筛选菜单项是否可搜索 | boolean \| function(input, record):boolean | false | boolean:4.17.0 function:4.19.0 |
| filters | 表头的筛选菜单项 | object[] | - |
| fixed | （IE 下无效）列是否固定，可选 `true` (等效于 `left`) `left` `right` | boolean \| string | false |
| key | React 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string | - |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引 | function(text, record, index) {} | - |
| responsive | 响应式 breakpoint 配置列表。未设置则始终可见。 | - | 4.2.0 |
| rowScope | 设置列范围 | `row` \| `rowgroup` | - | 5.1.0 |
| shouldCellUpdate | 自定义单元格渲染时机 | (record, prevRecord) => boolean | - | 4.3.0 |
| showSorterTooltip | 表头显示下一次排序的 tooltip 提示, 覆盖 table 中 `showSorterTooltip` | boolean \| [Tooltip props](/components/tooltip-cn/#api) | true |
| sortDirections | 支持的排序方式，覆盖 `Table` 中 `sortDirections`， 取值为 `ascend` `descend` | Array | \[`ascend`, `descend`] |
| sorter | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)。需要服务端排序可设为 `true`（单列排序） 或 `{ multiple: number }`（多列排序） | function \| boolean \| { compare: function, multiple: number } | - |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `ascend` `descend` `null` | `ascend` \| `descend` \| null | - |
| sortIcon | 自定义 sort 图标 | (props: { sortOrder }) => ReactNode | - | 5.6.0 |
| title | 列头显示文字（函数用法 `3.10.0` 后支持） | ReactNode \| ({ sortOrder, sortColumn, filters }) => ReactNode | - |
| width | 列宽度（[指定了也不生效？](https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241)） | string \| number | - |
| hidden | 隐藏列 | boolean | false | 5.13.0 |
| onCell | 设置单元格属性 | function(record, rowIndex) | - |
| onFilter | 本地模式下，确定筛选的运行函数 | function | - |
| onFilterDropdownOpenChange | 自定义筛选菜单可见变化时调用 | function(visible) {} | - |
| onHeaderCell | 设置头部单元格属性 | function(column) | - |

### ant-design 的 Table - ColumnGroup 有哪些配置？

| 参数  | 说明         | 类型      | 默认值 |
| ----- | ------------ | --------- | ------ |
| title | 列头显示文字 | ReactNode | -      |

### ant-design 的 Table - pagination 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 指定分页显示的位置， 取值为`topLeft` \| `topCenter` \| `topRight` \|`bottomLeft` \| `bottomCenter` \| `bottomRight` | Array | \[`bottomRight`] |

### ant-design 的 Table - expandable 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| childrenColumnName | 指定树形结构的列名 | string | children |
| columnTitle | 自定义展开列表头 | ReactNode | - | 4.23.0 |
| columnWidth | 自定义展开列宽度 | string \| number | - |
| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |
| defaultExpandedRowKeys | 默认展开的行 | string[] | - |
| expandedRowClassName | 展开行的 className | function(record, index, indent): string | - |
| expandedRowKeys | 展开的行，控制属性 | string[] | - |
| expandedRowRender | 额外的展开行 | function(record, index, indent, expanded): ReactNode | - |
| expandIcon | 自定义展开图标，参考[示例](https://codesandbox.io/s/fervent-bird-nuzpr) | function(props): ReactNode | - |
| expandRowByClick | 通过点击行来展开子行 | boolean | false |
| fixed | 控制展开图标是否固定，可选 `true` `'left'` `'right'` | boolean \| string | false | 4.16.0 |
| indentSize | 展示树形数据时，每层缩进的宽度，以 px 为单位 | number | 15 |
| rowExpandable | 设置是否允许行展开 | (record) => boolean | - |
| showExpandColumn | 设置是否展示行展开列 | boolean | true | 4.18.0 |
| onExpand | 点击展开图标时触发 | function(record, event) | - |
| onExpandedRowsChange | 展开的行变化时触发 | function(expandedRows) | - |

### ant-design 的 Table - rowSelection 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| checkStrictly | checkable 状态下节点选择完全受控（父子数据选中状态不再关联） | boolean | true | 4.4.0 |
| columnTitle | 自定义列表选择框标题 | ReactNode \| (originalNode: ReactNode) => ReactNode | - |
| columnWidth | 自定义列表选择框宽度 | string \| number | `32px` |
| fixed | 把选择框列固定在左边 | boolean | - |
| getCheckboxProps | 选择框的默认属性配置 | function(record) | - |
| hideSelectAll | 隐藏全选勾选框与自定义选择项 | boolean | false | 4.3.0 |
| preserveSelectedRowKeys | 当数据被删除时仍然保留选项的 `key` | boolean | - | 4.4.0 |
| renderCell | 渲染勾选框，用法与 Column 的 `render` 相同 | function(checked, record, index, originNode) {} | - | 4.1.0 |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string[] \| number[] | \[] |
| defaultSelectedRowKeys | 默认选中项的 key 数组 | string[] \| number[] | \[] |
| selections | 自定义选择项 [配置项](#selection), 设为 `true` 时使用默认选择项 | object[] \| boolean | true |
| type | 多选/单选 | `checkbox` \| `radio` | `checkbox` |
| onCell | 设置单元格属性，用法与 Column 的 `onCell` 相同 | function(record, rowIndex) | - | 5.5.0 |
| onChange | 选中项发生变化时的回调 | function(selectedRowKeys, selectedRows, info: { type }) | - | `info.type`: 4.21.0 |
| onSelect | 用户手动选择/取消选择某行的回调 | function(record, selected, selectedRows, nativeEvent) | - |
| onSelectAll | 用户手动选择/取消选择所有行的回调 | function(selected, selectedRows, changeRows) | - |
| onSelectInvert | 用户手动选择反选的回调 | function(selectedRowKeys) | - |
| onSelectNone | 用户清空选择的回调 | function() | - |
| onSelectMultiple | 用户使用键盘 shift 选择多行的回调 | function(selected, selectedRows, changeRows) | - |

### ant-design 的 Table - scroll 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| scrollToFirstRowOnChange | 当分页、排序、筛选变化后是否滚动到表格顶部 | boolean | - |
| x | 设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，`true` 和 ['max-content'](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content) | string \| number \| true | - |
| y | 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值 | string \| number | - |

### ant-design 的 Table - selection 有哪些配置？

| 参数     | 说明                       | 类型                        | 默认值 |
| -------- | -------------------------- | --------------------------- | ------ |
| key      | React 需要的 key，建议设置 | string                      | -      |
| text     | 选择项显示的文字           | ReactNode                   | -      |
| onSelect | 选择项点击回调             | function(changeableRowKeys) | -      |

## ant-design 的 Switch 有哪些配置？

#### Switch - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| autoFocus | 组件自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| checkedChildren | 选中时的内容 | ReactNode | - |
| className | Switch 器类名 | string | - |
| defaultChecked | 初始是否选中 | boolean | false |
| defaultValue | `defaultChecked` 的别名 | boolean | - | 5.12.0 |
| disabled | 是否禁用 | boolean | false |
| loading | 加载中的开关 | boolean | false |
| size | 开关大小，可选值：`default` `small` | string | `default` |
| unCheckedChildren | 非选中时的内容 | ReactNode | - |
| value | `checked` 的别名 | boolean | - | 5.12.0 |
| onChange | 变化时的回调函数 | function(checked: boolean, event: Event) | - |
| onClick | 点击时的回调函数 | function(checked: boolean, event: Event) | - |

#### Switch - 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### ant-design 的 Switch - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| autoFocus | 组件自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| checkedChildren | 选中时的内容 | ReactNode | - |
| className | Switch 器类名 | string | - |
| defaultChecked | 初始是否选中 | boolean | false |
| defaultValue | `defaultChecked` 的别名 | boolean | - | 5.12.0 |
| disabled | 是否禁用 | boolean | false |
| loading | 加载中的开关 | boolean | false |
| size | 开关大小，可选值：`default` `small` | string | `default` |
| unCheckedChildren | 非选中时的内容 | ReactNode | - |
| value | `checked` 的别名 | boolean | - | 5.12.0 |
| onChange | 变化时的回调函数 | function(checked: boolean, event: Event) | - |
| onClick | 点击时的回调函数 | function(checked: boolean, event: Event) | - |

### ant-design 的 Switch - 方法 有哪些配置？

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

## ant-design 的 Steps 有哪些配置？

#### Steps - Steps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| className | 步骤条类名 | string | - |
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | number | 0 |
| direction | 指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向 | string | `horizontal` |
| initial | 起始序号，从 0 开始记数 | number | 0 |
| labelPlacement | 指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方 | string | `horizontal` |
| percent | 当前 `process` 步骤显示的进度条进度（只对基本类型的 Steps 生效） | number | - | 4.5.0 |
| progressDot | 点状步骤条，可以设置为一个 function，labelPlacement 将强制为 `vertical` | boolean \| (iconDot, {index, status, title, description}) => ReactNode | false |
| responsive | 当屏幕宽度小于 `532px` 时自动变为垂直模式 | boolean | true |
| size | 指定大小，目前支持普通（`default`）和迷你（`small`） | string | `default` |
| status | 指定当前步骤的状态，可选 `wait` `process` `finish` `error` | string | `process` |
| type | 步骤条类型，可选 `default` `navigation` `inline` | string | `default` | inline: 5.0 |
| onChange | 点击切换步骤时触发 | (current) => void | - |
| items | 配置选项卡内容 | \[] | 4.24.0 |

#### Steps - `type="inline"`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 步骤条类名 | string | - |
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | number | 0 |
| initial | 起始序号，从 0 开始记数 | number | 0 |
| status | 指定当前步骤的状态，可选 `wait` `process` `finish` `error` | string | `process` |
| onChange | 点击切换步骤时触发 | (current) => void | - |
| items | 配置选项卡内容，不支持 `icon` `subtitle` | \[] | 4.24.0 |

#### Steps - StepItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 步骤的详情描述，可选 | ReactNode | - |
| disabled | 禁用点击 | boolean | false |
| icon | 步骤图标的类型，可选 | ReactNode | - |
| status | 指定状态。当不配置该属性时，会使用 Steps 的 `current` 来自动指定状态。可选：`wait` `process` `finish` `error` | string | `wait` |
| subTitle | 子标题 | ReactNode | - |
| title | 标题 | ReactNode | - |

### ant-design 的 Steps - Steps 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| className | 步骤条类名 | string | - |
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | number | 0 |
| direction | 指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向 | string | `horizontal` |
| initial | 起始序号，从 0 开始记数 | number | 0 |
| labelPlacement | 指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方 | string | `horizontal` |
| percent | 当前 `process` 步骤显示的进度条进度（只对基本类型的 Steps 生效） | number | - | 4.5.0 |
| progressDot | 点状步骤条，可以设置为一个 function，labelPlacement 将强制为 `vertical` | boolean \| (iconDot, {index, status, title, description}) => ReactNode | false |
| responsive | 当屏幕宽度小于 `532px` 时自动变为垂直模式 | boolean | true |
| size | 指定大小，目前支持普通（`default`）和迷你（`small`） | string | `default` |
| status | 指定当前步骤的状态，可选 `wait` `process` `finish` `error` | string | `process` |
| type | 步骤条类型，可选 `default` `navigation` `inline` | string | `default` | inline: 5.0 |
| onChange | 点击切换步骤时触发 | (current) => void | - |
| items | 配置选项卡内容 | \[] | 4.24.0 |

### ant-design 的 Steps - `type="inline"` 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 步骤条类名 | string | - |
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | number | 0 |
| initial | 起始序号，从 0 开始记数 | number | 0 |
| status | 指定当前步骤的状态，可选 `wait` `process` `finish` `error` | string | `process` |
| onChange | 点击切换步骤时触发 | (current) => void | - |
| items | 配置选项卡内容，不支持 `icon` `subtitle` | \[] | 4.24.0 |

### ant-design 的 Steps - StepItem 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 步骤的详情描述，可选 | ReactNode | - |
| disabled | 禁用点击 | boolean | false |
| icon | 步骤图标的类型，可选 | ReactNode | - |
| status | 指定状态。当不配置该属性时，会使用 Steps 的 `current` 来自动指定状态。可选：`wait` `process` `finish` `error` | string | `wait` |
| subTitle | 子标题 | ReactNode | - |
| title | 标题 | ReactNode | - |

## ant-design 的 Statistic 有哪些配置？

#### Statistic - Statistic

| 参数             | 说明               | 类型                 | 默认值 |
| ---------------- | ------------------ | -------------------- | ------ | ----- |
| decimalSeparator | 设置小数点         | string               | `.`    |
| formatter        | 自定义数值展示     | (value) => ReactNode | -      |
| groupSeparator   | 设置千分位标识符   | string               | `,`    |
| loading          | 数值是否加载中     | boolean              | false  | 4.8.0 |
| precision        | 数值精度           | number               | -      |
| prefix           | 设置数值的前缀     | ReactNode            | -      |
| suffix           | 设置数值的后缀     | ReactNode            | -      |
| title            | 数值的标题         | ReactNode            | -      |
| value            | 数值内容           | string \| number     | -      |
| valueStyle       | 设置数值区域的样式 | CSSProperties        | -      |

#### Statistic - Statistic.Countdown

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| format | 格式化倒计时展示，参考 [dayjs](https://day.js.org/) | string | `HH:mm:ss` |
| prefix | 设置数值的前缀 | ReactNode | - |
| suffix | 设置数值的后缀 | ReactNode | - |
| title | 数值的标题 | ReactNode | - |
| value | 数值内容 | number \| dayjs | - |
| valueStyle | 设置数值区域的样式 | CSSProperties | - |
| onFinish | 倒计时完成时触发 | () => void | - |
| onChange | 倒计时时间变化时触发 | (value: number) => void | - | 4.16.0 |

### ant-design 的 Statistic - Statistic 有哪些配置？

| 参数             | 说明               | 类型                 | 默认值 |
| ---------------- | ------------------ | -------------------- | ------ | ----- |
| decimalSeparator | 设置小数点         | string               | `.`    |
| formatter        | 自定义数值展示     | (value) => ReactNode | -      |
| groupSeparator   | 设置千分位标识符   | string               | `,`    |
| loading          | 数值是否加载中     | boolean              | false  | 4.8.0 |
| precision        | 数值精度           | number               | -      |
| prefix           | 设置数值的前缀     | ReactNode            | -      |
| suffix           | 设置数值的后缀     | ReactNode            | -      |
| title            | 数值的标题         | ReactNode            | -      |
| value            | 数值内容           | string \| number     | -      |
| valueStyle       | 设置数值区域的样式 | CSSProperties        | -      |

### ant-design 的 Statistic - Statistic.Countdown 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| format | 格式化倒计时展示，参考 [dayjs](https://day.js.org/) | string | `HH:mm:ss` |
| prefix | 设置数值的前缀 | ReactNode | - |
| suffix | 设置数值的后缀 | ReactNode | - |
| title | 数值的标题 | ReactNode | - |
| value | 数值内容 | number \| dayjs | - |
| valueStyle | 设置数值区域的样式 | CSSProperties | - |
| onFinish | 倒计时完成时触发 | () => void | - |
| onChange | 倒计时时间变化时触发 | (value: number) => void | - | 4.16.0 |

## ant-design 的 Spin 有哪些配置？

#### Spin - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| delay | 延迟显示加载效果的时间（防止闪烁） | number (毫秒) | - |
| indicator | 加载指示符 | ReactNode | - |
| size | 组件大小，可选值为 `small` `default` `large` | string | `default` |
| spinning | 是否为加载中状态 | boolean | true |
| tip | 当作为包裹元素时，可以自定义描述文案 | ReactNode | - |
| wrapperClassName | 包装器的类属性 | string | - |
| fullscreen | 显示带有 `Spin` 组件的背景 | boolean | false | 5.11.0 |

### ant-design 的 Spin - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| delay | 延迟显示加载效果的时间（防止闪烁） | number (毫秒) | - |
| indicator | 加载指示符 | ReactNode | - |
| size | 组件大小，可选值为 `small` `default` `large` | string | `default` |
| spinning | 是否为加载中状态 | boolean | true |
| tip | 当作为包裹元素时，可以自定义描述文案 | ReactNode | - |
| wrapperClassName | 包装器的类属性 | string | - |
| fullscreen | 显示带有 `Spin` 组件的背景 | boolean | false | 5.11.0 |

## ant-design 的 Space 有哪些配置？

#### Space - Space

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 对齐方式 | `start` \| `end` \|`center` \|`baseline` | - | 4.2.0 |
| direction | 间距方向 | `vertical` \| `horizontal` | `horizontal` | 4.1.0 |
| size | 间距大小 | `small` | 4.1.0 \| Array: 4.9.0 |
| split | 设置拆分 | ReactNode | - | 4.7.0 |
| wrap | 是否自动换行，仅在 `horizontal` 时有效 | boolean | false | 4.9.0 |

#### Space - Space.Compact

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将宽度调整为父元素宽度的选项 | boolean | false | 4.24.0 |
| direction | 指定排列方向 | `vertical` \| `horizontal` | `horizontal` | 4.24.0 |
| size | 子组件大小 | `large` \| `middle` \| `small` | `middle` | 4.24.0 |

#### Space - `styles`

| 名称 | 说明                      | 版本  |
| ---- | ------------------------- | ----- |
| item | 设置 `Space` 包裹的子组件 | 5.6.0 |

### ant-design 的 Space - Space 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 对齐方式 | `start` \| `end` \|`center` \|`baseline` | - | 4.2.0 |
| direction | 间距方向 | `vertical` \| `horizontal` | `horizontal` | 4.1.0 |
| size | 间距大小 | `small` | 4.1.0 \| Array: 4.9.0 |
| split | 设置拆分 | ReactNode | - | 4.7.0 |
| wrap | 是否自动换行，仅在 `horizontal` 时有效 | boolean | false | 4.9.0 |

### ant-design 的 Space - Space.Compact 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将宽度调整为父元素宽度的选项 | boolean | false | 4.24.0 |
| direction | 指定排列方向 | `vertical` \| `horizontal` | `horizontal` | 4.24.0 |
| size | 子组件大小 | `large` \| `middle` \| `small` | `middle` | 4.24.0 |

### ant-design 的 Space - `styles` 有哪些配置？

| 名称 | 说明                      | 版本  |
| ---- | ------------------------- | ----- |
| item | 设置 `Space` 包裹的子组件 | 5.6.0 |

## ant-design 的 Slider 有哪些配置？

#### Slider - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| classNames | 语义化结构 className | Record<SemanticDOM, string> | - | 5.10.0 |
| defaultValue | 设置初始取值。当 `range` 为 false 时，使用 number，否则用 [number, number] | number \| [number, number] | 0 \| [0, 0] |
| disabled | 值为 true 时，滑块为禁用状态 | boolean | false |
| keyboard | 支持使用键盘操作 handler | boolean | true | 5.2.0+ |
| dots | 是否只能拖拽到刻度上 | boolean | false |
| included | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 | boolean | true |
| marks | 刻度标记，key 的类型必须为 `number` 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式 | object | { number: ReactNode } or { number: { style: CSSProperties, label: ReactNode } } |
| max | 最大值 | number | 100 |
| min | 最小值 | number | 0 |
| range | 双滑块模式 | boolean \| [range](#range) | false |
| reverse | 反向坐标轴 | boolean | false |
| step | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 null，此时 Slider 的可选值仅有 marks 标出来的部分 | number \| null | 1 |
| styles | 语义化结构 className | Record<SemanticDOM, React.CSSProperties> | - | 5.10.0 |
| tooltip | 设置 Tooltip 相关属性 | - | 4.23.0 |
| value | 设置当前取值。当 `range` 为 false 时，使用 number，否则用 [number, number] | number \| [number, number] | - |
| vertical | 值为 true 时，Slider 为垂直方向 | boolean | false |
| onChangeComplete | 与 `mouseup` 和 `keyup` 触发时机一致，把当前值作为参数传入 | (value) => void | - |
| onChange | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入 | (value) => void | - |

#### Slider - `styles`

| 名称   | 说明                             | 版本   |
| ------ | -------------------------------- | ------ |
| track  | 范围选择下，点和点之间单个选取条 | 5.10.0 |
| tracks | 范围选择下，整个范围选取条       | 5.10.0 |
| rail   | 背景条                           | 5.10.0 |
| handle | 抓取点                           | 5.10.0 |

#### Slider - range

| 参数           | 说明                 | 类型    | 默认值 | 版本   |
| -------------- | -------------------- | ------- | ------ | ------ |
| draggableTrack | 范围刻度是否可被拖拽 | boolean | false  | 4.10.0 |

#### Slider - tooltip

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoAdjustOverflow | 是否自动调整弹出位置 | boolean | true | 5.8.0 |
| open | 值为 true 时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时 | boolean | - | 4.23.0 |
| placement | 设置 Tooltip 展示位置。参考 [Tooltip](/components/tooltip-cn) | string | - | 4.23.0 |
| getPopupContainer | Tooltip 渲染父节点，默认渲染到 body 上 | (triggerNode) => HTMLElement | () => document.body | 4.23.0 |
| formatter | Slider 会把当前值传给 `formatter`，并在 Tooltip 中显示 `formatter` 的返回值，若为 null，则隐藏 Tooltip | value => ReactNode \| null | IDENTITY | 4.23.0 |

#### Slider - 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### ant-design 的 Slider - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| classNames | 语义化结构 className | Record<SemanticDOM, string> | - | 5.10.0 |
| defaultValue | 设置初始取值。当 `range` 为 false 时，使用 number，否则用 [number, number] | number \| [number, number] | 0 \| [0, 0] |
| disabled | 值为 true 时，滑块为禁用状态 | boolean | false |
| keyboard | 支持使用键盘操作 handler | boolean | true | 5.2.0+ |
| dots | 是否只能拖拽到刻度上 | boolean | false |
| included | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 | boolean | true |
| marks | 刻度标记，key 的类型必须为 `number` 且取值在闭区间 [min, max] 内，每个标签可以单独设置样式 | object | { number: ReactNode } or { number: { style: CSSProperties, label: ReactNode } } |
| max | 最大值 | number | 100 |
| min | 最小值 | number | 0 |
| range | 双滑块模式 | boolean \| [range](#range) | false |
| reverse | 反向坐标轴 | boolean | false |
| step | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 null，此时 Slider 的可选值仅有 marks 标出来的部分 | number \| null | 1 |
| styles | 语义化结构 className | Record<SemanticDOM, React.CSSProperties> | - | 5.10.0 |
| tooltip | 设置 Tooltip 相关属性 | - | 4.23.0 |
| value | 设置当前取值。当 `range` 为 false 时，使用 number，否则用 [number, number] | number \| [number, number] | - |
| vertical | 值为 true 时，Slider 为垂直方向 | boolean | false |
| onChangeComplete | 与 `mouseup` 和 `keyup` 触发时机一致，把当前值作为参数传入 | (value) => void | - |
| onChange | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入 | (value) => void | - |

### ant-design 的 Slider - `styles` 有哪些配置？

| 名称   | 说明                             | 版本   |
| ------ | -------------------------------- | ------ |
| track  | 范围选择下，点和点之间单个选取条 | 5.10.0 |
| tracks | 范围选择下，整个范围选取条       | 5.10.0 |
| rail   | 背景条                           | 5.10.0 |
| handle | 抓取点                           | 5.10.0 |

### ant-design 的 Slider - range 有哪些配置？

| 参数           | 说明                 | 类型    | 默认值 | 版本   |
| -------------- | -------------------- | ------- | ------ | ------ |
| draggableTrack | 范围刻度是否可被拖拽 | boolean | false  | 4.10.0 |

### ant-design 的 Slider - tooltip 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoAdjustOverflow | 是否自动调整弹出位置 | boolean | true | 5.8.0 |
| open | 值为 true 时，Tooltip 将会始终显示；否则始终不显示，哪怕在拖拽及移入时 | boolean | - | 4.23.0 |
| placement | 设置 Tooltip 展示位置。参考 [Tooltip](/components/tooltip-cn) | string | - | 4.23.0 |
| getPopupContainer | Tooltip 渲染父节点，默认渲染到 body 上 | (triggerNode) => HTMLElement | () => document.body | 4.23.0 |
| formatter | Slider 会把当前值传给 `formatter`，并在 Tooltip 中显示 `formatter` 的返回值，若为 null，则隐藏 Tooltip | value => ReactNode \| null | IDENTITY | 4.23.0 |

### ant-design 的 Slider - 方法 有哪些配置？

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

## ant-design 的 Skeleton 有哪些配置？

#### Skeleton - Skeleton

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | boolean | false |
| avatar | 是否显示头像占位图 | boolean \| [SkeletonAvatarProps](#skeletonavatarprops) | false |
| loading | 为 true 时，显示占位图。反之则直接展示子组件 | boolean | - |
| paragraph | 是否显示段落占位图 | boolean \| [SkeletonParagraphProps](#skeletonparagraphprops) | true |
| round | 为 true 时，段落和标题显示圆角 | boolean | false |
| title | 是否显示标题占位图 | boolean \| [SkeletonTitleProps](#skeletontitleprops) | true |

#### Skeleton - SkeletonAvatarProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果，仅在单独使用头像骨架时生效 | boolean | false |
| shape | 指定头像的形状 | `circle` \| `square` | - |
| size | 设置头像占位图的大小 | number \| `large` \| `small` \| `default` | - |

#### Skeleton - SkeletonTitleProps

| 属性  | 说明                 | 类型             | 默认值 |
| ----- | -------------------- | ---------------- | ------ |
| width | 设置标题占位图的宽度 | number \| string | -      |

#### Skeleton - SkeletonParagraphProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 设置段落占位图的行数 | number | - |
| width | 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度 | number \| string \| Array<number \| string> | - |

#### Skeleton - SkeletonButtonProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| active | 是否展示动画效果 | boolean | false |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false | 4.17.0 |
| shape | 指定按钮的形状 | `circle` \| `round` \| `square` \| `default` | - |
| size | 设置按钮的大小 | `large` \| `small` \| `default` | - |

#### Skeleton - SkeletonInputProps

| 属性   | 说明             | 类型                            | 默认值 |
| ------ | ---------------- | ------------------------------- | ------ |
| active | 是否展示动画效果 | boolean                         | false  |
| size   | 设置输入框的大小 | `large` \| `small` \| `default` | -      |

### ant-design 的 Skeleton - Skeleton 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | boolean | false |
| avatar | 是否显示头像占位图 | boolean \| [SkeletonAvatarProps](#skeletonavatarprops) | false |
| loading | 为 true 时，显示占位图。反之则直接展示子组件 | boolean | - |
| paragraph | 是否显示段落占位图 | boolean \| [SkeletonParagraphProps](#skeletonparagraphprops) | true |
| round | 为 true 时，段落和标题显示圆角 | boolean | false |
| title | 是否显示标题占位图 | boolean \| [SkeletonTitleProps](#skeletontitleprops) | true |

### ant-design 的 Skeleton - SkeletonAvatarProps 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果，仅在单独使用头像骨架时生效 | boolean | false |
| shape | 指定头像的形状 | `circle` \| `square` | - |
| size | 设置头像占位图的大小 | number \| `large` \| `small` \| `default` | - |

### ant-design 的 Skeleton - SkeletonTitleProps 有哪些配置？

| 属性  | 说明                 | 类型             | 默认值 |
| ----- | -------------------- | ---------------- | ------ |
| width | 设置标题占位图的宽度 | number \| string | -      |

### ant-design 的 Skeleton - SkeletonParagraphProps 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 设置段落占位图的行数 | number | - |
| width | 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度 | number \| string \| Array<number \| string> | - |

### ant-design 的 Skeleton - SkeletonButtonProps 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| active | 是否展示动画效果 | boolean | false |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false | 4.17.0 |
| shape | 指定按钮的形状 | `circle` \| `round` \| `square` \| `default` | - |
| size | 设置按钮的大小 | `large` \| `small` \| `default` | - |

### ant-design 的 Skeleton - SkeletonInputProps 有哪些配置？

| 属性   | 说明             | 类型                            | 默认值 |
| ------ | ---------------- | ------------------------------- | ------ |
| active | 是否展示动画效果 | boolean                         | false  |
| size   | 设置输入框的大小 | `large` \| `small` \| `default` | -      |

## ant-design 的 Select 有哪些配置？

#### Select - Select props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| { clearIcon?: ReactNode } | false | 5.8.0: 支持对象类型 |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效 | boolean | true |
| autoFocus | 默认获取焦点 | boolean | false |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | boolean | true |
| defaultOpen | 是否默认展开下拉菜单 | boolean | - |
| defaultValue | 指定默认选中的条目 | string \| string[] \|<br />number \| number[] \| <br />LabeledValue \| LabeledValue[] | - |
| disabled | 是否禁用 | boolean | false |
| popupClassName | 下拉菜单的 className 属性 | string | - | 4.23.0 |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true | 5.5.0 |
| dropdownRender | 自定义下拉框内容 | (originNode: ReactNode) => ReactNode | - |
| dropdownStyle | 下拉菜单的 style 属性 | CSSProperties | - |
| fieldNames | 自定义节点 label、value、options、groupLabel 的字段 | object | { label: `label`, value: `value`, options: `options`, groupLabel: `label` } | 4.17.0（`groupLabel` 在 5.6.0 新增） |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false。[示例](#select-demo-search) | boolean \| function(inputValue, option) | true |
| filterSort | 搜索时对筛选结果项的排序函数, 类似[Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)里的 compareFunction | (optionA: Option, optionB: Option) => number | - | 4.9.0 |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode) | () => document.body |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 `string` 变为 { value: string, label: ReactNode } 的格式 | boolean | false |
| listHeight | 设置弹窗滚动高度 | number | 256 |
| loading | 加载中状态 | boolean | false |
| maxCount | 指定可选中的最多 items 数量，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | number | - | 5.13.0 |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - | responsive: 4.10 |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode \| function(omittedValues) | - |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - |
| menuItemSelectedIcon | 自定义多选时当前选中的条目图标 | ReactNode | - |
| mode | 设置 Select 的模式为多选或标签 | `multiple` \| `tags` | - |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | `Not Found` |
| open | 是否展开下拉菜单 | boolean | - |
| optionFilterProp | 搜索时过滤对应的 `option` 属性，如设置为 `children` 表示对内嵌内容进行搜索。若通过 `options` 属性配置选项内容，建议设置 `optionFilterProp="label"` 来对内容进行搜索。 | string | `value` |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`。[示例](https://codesandbox.io/s/antd-reproduction-template-tk678) | string | `children` |
| options | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | { label, value }[] | - |
| optionRender | 自定义渲染下拉选项 | (option: FlattenOptionData<BaseOptionType> , info: { index: number }) => React.ReactNode | - | 5.11.0 |
| placeholder | 选择框默认文本 | string | - |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |
| removeIcon | 自定义的多选框清除图标 | ReactNode | - |
| searchValue | 控制搜索文本 | string | - |
| showSearch | 配置是否可搜索 | boolean | 单选为 false，多选为 true |
| size | 选择框大小 | `large` \| `middle` \| `small` | `middle` |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| suffixIcon | 自定义的选择框后缀图标。以防止图标被用于其他交互，替换的图标默认不会响应展开、收缩事件，可以通过添加 `pointer-events: none` 样式透传。 | ReactNode | `<DownOutlined />` |
| tagRender | 自定义 tag 内容 render，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | (props) => ReactNode | - |
| tokenSeparators | 自动分词的分隔符，仅在 `mode="tags"` 时生效 | string[] | - |
| value | 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新） | string \| string[] \| <br />number \| number[] \| <br />LabeledValue \| LabeledValue[] | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true | 4.1.0 |
| onBlur | 失去焦点时回调 | function | - |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value, option:Option \| Array<Option>) | - |
| onClear | 清除内容时回调 | function | - | 4.6.0 |
| onDeselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 `multiple` 或 `tags` 模式下生效 | function(value: string \| number \| LabeledValue) | - |
| onDropdownVisibleChange | 展开下拉菜单的回调 | function(open) | - |
| onFocus | 获得焦点时回调 | function | - |
| onInputKeyDown | 按键按下时回调 | function | - |
| onMouseEnter | 鼠标移入时回调 | function | - |
| onMouseLeave | 鼠标移出时回调 | function | - |
| onPopupScroll | 下拉列表滚动时的回调 | function | - |
| onSearch | 文本框值变化时回调 | function(value: string) | - |
| onSelect | 被选中时调用，参数为选中项的 value (或 key) 值 | function(value: string \| number \| LabeledValue, option: Option) | - |

#### Select - Select Methods

| 名称    | 说明     |
| ------- | -------- |
| blur()  | 取消焦点 |
| focus() | 获取焦点 |

#### Select - Option props

| 参数      | 说明                     | 类型             | 默认值 |
| --------- | ------------------------ | ---------------- | ------ |
| className | Option 器类名            | string           | -      |
| disabled  | 是否禁用                 | boolean          | false  |
| title     | 选项上的原生 title 提示  | string           | -      |
| value     | 默认根据此属性值进行筛选 | string \| number | -      |

#### Select - OptGroup props

| 参数  | 说明 | 类型                    | 默认值 |
| ----- | ---- | ----------------------- | ------ |
| key   | Key  | string                  | -      |
| label | 组名 | string \| React.Element | -      |

### ant-design 的 Select - Select props 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| { clearIcon?: ReactNode } | false | 5.8.0: 支持对象类型 |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `mode` 为 `multiple` 或 `tags` 时有效 | boolean | true |
| autoFocus | 默认获取焦点 | boolean | false |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | boolean | true |
| defaultOpen | 是否默认展开下拉菜单 | boolean | - |
| defaultValue | 指定默认选中的条目 | string \| string[] \|<br />number \| number[] \| <br />LabeledValue \| LabeledValue[] | - |
| disabled | 是否禁用 | boolean | false |
| popupClassName | 下拉菜单的 className 属性 | string | - | 4.23.0 |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true | 5.5.0 |
| dropdownRender | 自定义下拉框内容 | (originNode: ReactNode) => ReactNode | - |
| dropdownStyle | 下拉菜单的 style 属性 | CSSProperties | - |
| fieldNames | 自定义节点 label、value、options、groupLabel 的字段 | object | { label: `label`, value: `value`, options: `options`, groupLabel: `label` } | 4.17.0（`groupLabel` 在 5.6.0 新增） |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false。[示例](#select-demo-search) | boolean \| function(inputValue, option) | true |
| filterSort | 搜索时对筛选结果项的排序函数, 类似[Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)里的 compareFunction | (optionA: Option, optionB: Option) => number | - | 4.9.0 |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode) | () => document.body |
| labelInValue | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 `string` 变为 { value: string, label: ReactNode } 的格式 | boolean | false |
| listHeight | 设置弹窗滚动高度 | number | 256 |
| loading | 加载中状态 | boolean | false |
| maxCount | 指定可选中的最多 items 数量，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | number | - | 5.13.0 |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - | responsive: 4.10 |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode \| function(omittedValues) | - |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - |
| menuItemSelectedIcon | 自定义多选时当前选中的条目图标 | ReactNode | - |
| mode | 设置 Select 的模式为多选或标签 | `multiple` \| `tags` | - |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | `Not Found` |
| open | 是否展开下拉菜单 | boolean | - |
| optionFilterProp | 搜索时过滤对应的 `option` 属性，如设置为 `children` 表示对内嵌内容进行搜索。若通过 `options` 属性配置选项内容，建议设置 `optionFilterProp="label"` 来对内容进行搜索。 | string | `value` |
| optionLabelProp | 回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 `value`。[示例](https://codesandbox.io/s/antd-reproduction-template-tk678) | string | `children` |
| options | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | { label, value }[] | - |
| optionRender | 自定义渲染下拉选项 | (option: FlattenOptionData<BaseOptionType> , info: { index: number }) => React.ReactNode | - | 5.11.0 |
| placeholder | 选择框默认文本 | string | - |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |
| removeIcon | 自定义的多选框清除图标 | ReactNode | - |
| searchValue | 控制搜索文本 | string | - |
| showSearch | 配置是否可搜索 | boolean | 单选为 false，多选为 true |
| size | 选择框大小 | `large` \| `middle` \| `small` | `middle` |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| suffixIcon | 自定义的选择框后缀图标。以防止图标被用于其他交互，替换的图标默认不会响应展开、收缩事件，可以通过添加 `pointer-events: none` 样式透传。 | ReactNode | `<DownOutlined />` |
| tagRender | 自定义 tag 内容 render，仅在 `mode` 为 `multiple` 或 `tags` 时生效 | (props) => ReactNode | - |
| tokenSeparators | 自动分词的分隔符，仅在 `mode="tags"` 时生效 | string[] | - |
| value | 指定当前选中的条目，多选时为一个数组。（value 数组引用未变化时，Select 不会更新） | string \| string[] \| <br />number \| number[] \| <br />LabeledValue \| LabeledValue[] | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true | 4.1.0 |
| onBlur | 失去焦点时回调 | function | - |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value, option:Option \| Array<Option>) | - |
| onClear | 清除内容时回调 | function | - | 4.6.0 |
| onDeselect | 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 `multiple` 或 `tags` 模式下生效 | function(value: string \| number \| LabeledValue) | - |
| onDropdownVisibleChange | 展开下拉菜单的回调 | function(open) | - |
| onFocus | 获得焦点时回调 | function | - |
| onInputKeyDown | 按键按下时回调 | function | - |
| onMouseEnter | 鼠标移入时回调 | function | - |
| onMouseLeave | 鼠标移出时回调 | function | - |
| onPopupScroll | 下拉列表滚动时的回调 | function | - |
| onSearch | 文本框值变化时回调 | function(value: string) | - |
| onSelect | 被选中时调用，参数为选中项的 value (或 key) 值 | function(value: string \| number \| LabeledValue, option: Option) | - |

### ant-design 的 Select - Select Methods 有哪些配置？

| 名称    | 说明     |
| ------- | -------- |
| blur()  | 取消焦点 |
| focus() | 获取焦点 |

### ant-design 的 Select - Option props 有哪些配置？

| 参数      | 说明                     | 类型             | 默认值 |
| --------- | ------------------------ | ---------------- | ------ |
| className | Option 器类名            | string           | -      |
| disabled  | 是否禁用                 | boolean          | false  |
| title     | 选项上的原生 title 提示  | string           | -      |
| value     | 默认根据此属性值进行筛选 | string \| number | -      |

### ant-design 的 Select - OptGroup props 有哪些配置？

| 参数  | 说明 | 类型                    | 默认值 |
| ----- | ---- | ----------------------- | ------ |
| key   | Key  | string                  | -      |
| label | 组名 | string \| React.Element | -      |

## ant-design 的 Segmented 有哪些配置？

#### Segmented - Segmented

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| block | 将宽度调整为父元素宽度的选项 | boolean | false |
| defaultValue | 默认选中的值 | string \| number |
| disabled | 是否禁用 | boolean | false |
| onChange | 选项变化时的回调函数 | function(value: string \| number) |
| options | 数据化配置选项内容 | string[] \| number[] \| Array<{ label: ReactNode value: string icon? ReactNode disabled?: boolean className?: string }> | \[] |
| size | 控件尺寸 | `large` \| `middle` \| `small` | `middle` |
| value | 当前选中的值 | string \| number |

### ant-design 的 Segmented - Segmented 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| block | 将宽度调整为父元素宽度的选项 | boolean | false |
| defaultValue | 默认选中的值 | string \| number |
| disabled | 是否禁用 | boolean | false |
| onChange | 选项变化时的回调函数 | function(value: string \| number) |
| options | 数据化配置选项内容 | string[] \| number[] \| Array<{ label: ReactNode value: string icon? ReactNode disabled?: boolean className?: string }> | \[] |
| size | 控件尺寸 | `large` \| `middle` \| `small` | `middle` |
| value | 当前选中的值 | string \| number |

## ant-design 的 Result 有哪些配置？

#### Result - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extra | 操作区 | ReactNode | - |
| icon | 自定义 icon | ReactNode | - |
| status | 结果的状态，决定图标和颜色 | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` | `info` |
| subTitle | subTitle 文字 | ReactNode | - |
| title | title 文字 | ReactNode | - |

### ant-design 的 Result - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extra | 操作区 | ReactNode | - |
| icon | 自定义 icon | ReactNode | - |
| status | 结果的状态，决定图标和颜色 | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` | `info` |
| subTitle | subTitle 文字 | ReactNode | - |
| title | title 文字 | ReactNode | - |

## ant-design 的 Rate 有哪些配置？

#### Rate - API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | boolean | true |
| allowHalf | 是否允许半选 | boolean | false |
| autoFocus | 自动获取焦点 | boolean | false |
| character | 自定义字符 | ReactNode \| (RateProps) => ReactNode | \<StarFilled /> | function(): 4.4.0 |
| className | 自定义样式类名 | string | - |
| count | star 总数 | number | 5 |
| defaultValue | 默认值 | number | 0 |
| disabled | 只读，无法进行交互 | boolean | false |
| style | 自定义样式对象 | CSSProperties | - |
| tooltips | 自定义每项的提示信息 | string[] | - |
| value | 当前数，受控值 | number | - |
| onBlur | 失去焦点时的回调 | function() | - |
| onChange | 选择时的回调 | function(value: number) | - |
| onFocus | 获取焦点时的回调 | function() | - |
| onHoverChange | 鼠标经过时数值变化的回调 | function(value: number) | - |
| onKeyDown | 按键回调 | function(event) | - |

#### Rate - 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### ant-design 的 Rate - API 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | boolean | true |
| allowHalf | 是否允许半选 | boolean | false |
| autoFocus | 自动获取焦点 | boolean | false |
| character | 自定义字符 | ReactNode \| (RateProps) => ReactNode | \<StarFilled /> | function(): 4.4.0 |
| className | 自定义样式类名 | string | - |
| count | star 总数 | number | 5 |
| defaultValue | 默认值 | number | 0 |
| disabled | 只读，无法进行交互 | boolean | false |
| style | 自定义样式对象 | CSSProperties | - |
| tooltips | 自定义每项的提示信息 | string[] | - |
| value | 当前数，受控值 | number | - |
| onBlur | 失去焦点时的回调 | function() | - |
| onChange | 选择时的回调 | function(value: number) | - |
| onFocus | 获取焦点时的回调 | function() | - |
| onHoverChange | 鼠标经过时数值变化的回调 | function(value: number) | - |
| onKeyDown | 按键回调 | function(event) | - |

### ant-design 的 Rate - 方法 有哪些配置？

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

## ant-design 的 Radio 有哪些配置？

#### Radio - Radio/Radio.Button

| 参数           | 说明                              | 类型    | 默认值 |
| -------------- | --------------------------------- | ------- | ------ |
| autoFocus      | 自动获取焦点                      | boolean | false  |
| checked        | 指定当前是否选中                  | boolean | false  |
| defaultChecked | 初始是否选中                      | boolean | false  |
| disabled       | 禁用 Radio                        | boolean | false  |
| value          | 根据 value 进行比较，判断是否选中 | any     | -      |

#### Radio - Radio.Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | `outline` \| `solid` | `outline` |
| defaultValue | 默认选中的值 | any | - |
| disabled | 禁选所有子单选器 | boolean | false |
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string | - |
| options | 以配置形式设置子元素 | string[] \| number[] \| Array<{ label: ReactNode; value: string; disabled?: boolean; }> | - |
| optionType | 用于设置 Radio `options` 类型 | `default` \| `button` | `default` | 4.4.0 |
| size | 大小，只对按钮样式生效 | `large` \| `middle` \| `small` | - |
| value | 用于设置当前选中的值 | any | - |
| onChange | 选项变化时的回调函数 | function(e:Event) | - |

#### Radio - Radio

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### ant-design 的 Radio - Radio/Radio.Button 有哪些配置？

| 参数           | 说明                              | 类型    | 默认值 |
| -------------- | --------------------------------- | ------- | ------ |
| autoFocus      | 自动获取焦点                      | boolean | false  |
| checked        | 指定当前是否选中                  | boolean | false  |
| defaultChecked | 初始是否选中                      | boolean | false  |
| disabled       | 禁用 Radio                        | boolean | false  |
| value          | 根据 value 进行比较，判断是否选中 | any     | -      |

### ant-design 的 Radio - Radio.Group 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | `outline` \| `solid` | `outline` |
| defaultValue | 默认选中的值 | any | - |
| disabled | 禁选所有子单选器 | boolean | false |
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性 | string | - |
| options | 以配置形式设置子元素 | string[] \| number[] \| Array<{ label: ReactNode; value: string; disabled?: boolean; }> | - |
| optionType | 用于设置 Radio `options` 类型 | `default` \| `button` | `default` | 4.4.0 |
| size | 大小，只对按钮样式生效 | `large` \| `middle` \| `small` | - |
| value | 用于设置当前选中的值 | any | - |
| onChange | 选项变化时的回调函数 | function(e:Event) | - |

### ant-design 的 Radio - Radio 有哪些配置？

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

## ant-design 的 Qr-code 有哪些配置？

#### Qr-code - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 扫描后的文本 | string | - |
| type | 渲染类型 | `canvas \| svg ` | `canvas` | 5.6.0 |
| icon | 二维码中图片的地址（目前只支持图片地址） | string | - |
| size | 二维码大小 | number | 160 |
| iconSize | 二维码中图片的大小 | number | 40 |
| color | 二维码颜色 | string | `#000` |
| bgColor | 二维码背景颜色 | string | `transparent` | 5.5.0 |
| bordered | 是否有边框 | boolean | `true` |
| errorLevel | 二维码纠错等级 | `'L' \| 'M' \| 'Q' \| 'H' ` | `M` |
| status | 二维码状态 | `active \| expired \| loading \| scanned` | `active` | scanned: 5.13.0 |
| onRefresh | 点击"点击刷新"的回调 | `() => void` | - |

### ant-design 的 Qr-code - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| value | 扫描后的文本 | string | - |
| type | 渲染类型 | `canvas \| svg ` | `canvas` | 5.6.0 |
| icon | 二维码中图片的地址（目前只支持图片地址） | string | - |
| size | 二维码大小 | number | 160 |
| iconSize | 二维码中图片的大小 | number | 40 |
| color | 二维码颜色 | string | `#000` |
| bgColor | 二维码背景颜色 | string | `transparent` | 5.5.0 |
| bordered | 是否有边框 | boolean | `true` |
| errorLevel | 二维码纠错等级 | `'L' \| 'M' \| 'Q' \| 'H' ` | `M` |
| status | 二维码状态 | `active \| expired \| loading \| scanned` | `active` | scanned: 5.13.0 |
| onRefresh | 点击"点击刷新"的回调 | `() => void` | - |

## ant-design 的 Progress 有哪些配置？

#### Progress - API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 内容的模板函数 | function(percent, successPercent) | (percent) => percent + `%` | - |
| percent | 百分比 | number | 0 | - |
| showInfo | 是否显示进度数值或状态图标 | boolean | true | - |
| status | 状态，可选：`success` `exception` `normal` `active`(仅限 line) | string | - | - |
| strokeColor | 进度条的色彩 | string | - | - |
| strokeLinecap | 进度条的样式 | `round` \| `butt` \| `square`，区别详见 [stroke-linecap](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) | `round` | - |
| success | 成功进度条相关配置 | { percent: number, strokeColor: string } | - | - |
| trailColor | 未完成的分段的颜色 | string | - | - |
| type | 类型，可选 `line` `circle` `dashboard` | string | `line` | - |
| size | 进度条的尺寸 | number \| [number \| string, number] \| "small" \| "default" | "default" | v5.3.0 |

#### Progress - `type="line"`

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| steps | 进度条总共步数 | number | - | - |
| strokeColor | 进度条的色彩，传入 object 时为渐变。当有 `steps` 时支持传入一个数组。 | string \| string[] \| { from: string; to: string; direction: string } | - | 4.21.0: `string[]` |

#### Progress - `type="circle"`

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| strokeColor | 圆形进度条线的色彩，传入 object 时为渐变 | string \| { number%: string } | - | - |
| strokeWidth | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 | - |

#### Progress - `type="dashboard"`

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| gapDegree | 仪表盘进度条缺口角度，可取值 0 ~ 295 | number | 75 | - |
| gapPosition | 仪表盘进度条缺口位置 | `top` \| `bottom` \| `left` \| `right` | `bottom` | - |
| strokeWidth | 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 | - |

### ant-design 的 Progress - API 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 内容的模板函数 | function(percent, successPercent) | (percent) => percent + `%` | - |
| percent | 百分比 | number | 0 | - |
| showInfo | 是否显示进度数值或状态图标 | boolean | true | - |
| status | 状态，可选：`success` `exception` `normal` `active`(仅限 line) | string | - | - |
| strokeColor | 进度条的色彩 | string | - | - |
| strokeLinecap | 进度条的样式 | `round` \| `butt` \| `square`，区别详见 [stroke-linecap](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) | `round` | - |
| success | 成功进度条相关配置 | { percent: number, strokeColor: string } | - | - |
| trailColor | 未完成的分段的颜色 | string | - | - |
| type | 类型，可选 `line` `circle` `dashboard` | string | `line` | - |
| size | 进度条的尺寸 | number \| [number \| string, number] \| "small" \| "default" | "default" | v5.3.0 |

### ant-design 的 Progress - `type="line"` 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| steps | 进度条总共步数 | number | - | - |
| strokeColor | 进度条的色彩，传入 object 时为渐变。当有 `steps` 时支持传入一个数组。 | string \| string[] \| { from: string; to: string; direction: string } | - | 4.21.0: `string[]` |

### ant-design 的 Progress - `type="circle"` 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| strokeColor | 圆形进度条线的色彩，传入 object 时为渐变 | string \| { number%: string } | - | - |
| strokeWidth | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 | - |

### ant-design 的 Progress - `type="dashboard"` 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| gapDegree | 仪表盘进度条缺口角度，可取值 0 ~ 295 | number | 75 | - |
| gapPosition | 仪表盘进度条缺口位置 | `top` \| `bottom` \| `left` \| `right` | `bottom` | - |
| strokeWidth | 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 | - |

## ant-design 的 Popover 有哪些配置？

#### Popover - API

| 参数    | 说明     | 类型                         | 默认值 |
| ------- | -------- | ---------------------------- | ------ |
| content | 卡片内容 | ReactNode \| () => ReactNode | -      |
| title   | 卡片标题 | ReactNode \| () => ReactNode | -      |

### ant-design 的 Popover - API 有哪些配置？

| 参数    | 说明     | 类型                         | 默认值 |
| ------- | -------- | ---------------------------- | ------ |
| content | 卡片内容 | ReactNode \| () => ReactNode | -      |
| title   | 卡片标题 | ReactNode \| () => ReactNode | -      |

## ant-design 的 Popconfirm 有哪些配置？

#### Popconfirm - API

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- | --- |
| cancelButtonProps | cancel 按钮 props | - |
| cancelText | 取消按钮文字 | string | `取消` |
| disabled | 阻止点击 Popconfirm 子元素时弹出确认框 | boolean | false |
| icon | 自定义弹出气泡 Icon 图标 | ReactNode | \<ExclamationCircle /> |
| okButtonProps | ok 按钮 props | - |
| okText | 确认按钮文字 | string | `确定` |
| okType | 确认按钮类型 | string | `primary` |
| showCancel | 是否显示取消按钮 | boolean | true | 4.18.0 |
| title | 确认框标题 | ReactNode \| () => ReactNode | - |
| description | 确认内容的详细描述 | ReactNode \| () => ReactNode | - | 5.1.0 |
| onCancel | 点击取消的回调 | function(e) | - |
| onConfirm | 点击确认的回调 | function(e) | - |
| onPopupClick | 弹出气泡点击事件 | function(e) | - | 5.5.0 |

### ant-design 的 Popconfirm - API 有哪些配置？

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- | --- |
| cancelButtonProps | cancel 按钮 props | - |
| cancelText | 取消按钮文字 | string | `取消` |
| disabled | 阻止点击 Popconfirm 子元素时弹出确认框 | boolean | false |
| icon | 自定义弹出气泡 Icon 图标 | ReactNode | \<ExclamationCircle /> |
| okButtonProps | ok 按钮 props | - |
| okText | 确认按钮文字 | string | `确定` |
| okType | 确认按钮类型 | string | `primary` |
| showCancel | 是否显示取消按钮 | boolean | true | 4.18.0 |
| title | 确认框标题 | ReactNode \| () => ReactNode | - |
| description | 确认内容的详细描述 | ReactNode \| () => ReactNode | - | 5.1.0 |
| onCancel | 点击取消的回调 | function(e) | - |
| onConfirm | 点击确认的回调 | function(e) | - |
| onPopupClick | 弹出气泡点击事件 | function(e) | - | 5.5.0 |

## ant-design 的 Pagination 有哪些配置？

#### Pagination - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页数 | number | - |
| defaultCurrent | 默认的当前页数 | number | 1 |
| defaultPageSize | 默认的每页条数 | number | 10 |
| disabled | 禁用分页 | boolean | - |
| hideOnSinglePage | 只有一页时是否隐藏分页器 | boolean | false |
| itemRender | 用于自定义页码的结构，可用于优化 SEO | (page, type: 'page' \| 'prev' \| 'next', originalElement) => React.ReactNode | - |
| pageSize | 每页条数 | number | - |
| pageSizeOptions | 指定每页可以显示多少条 | string[] \| number[] | \[`10`, `20`, `50`, `100`] |
| responsive | 当 size 未指定时，根据屏幕宽度自动调整尺寸 | boolean | - |
| showLessItems | 是否显示较少页面内容 | boolean | false |
| showQuickJumper | 是否可以快速跳转至某页 | boolean \| { goButton: ReactNode } | false |
| showSizeChanger | 是否展示 `pageSize` 切换器，当 `total` 大于 50 时默认为 true | boolean | - |
| showTitle | 是否显示原生 tooltip 页码提示 | boolean | true |
| showTotal | 用于显示数据总量和当前数据顺序 | function(total, range) | - |
| simple | 当添加该属性时，显示为简单分页 | boolean | - |
| size | 当为 `small` 时，是小尺寸分页 | `default` \| `small` | `default` |
| total | 数据总数 | number | 0 |
| onChange | 页码或 `pageSize` 改变的回调，参数是改变后的页码及每页条数 | function(page, pageSize) | - |
| onShowSizeChange | pageSize 变化的回调 | function(current, size) | - |

### ant-design 的 Pagination - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页数 | number | - |
| defaultCurrent | 默认的当前页数 | number | 1 |
| defaultPageSize | 默认的每页条数 | number | 10 |
| disabled | 禁用分页 | boolean | - |
| hideOnSinglePage | 只有一页时是否隐藏分页器 | boolean | false |
| itemRender | 用于自定义页码的结构，可用于优化 SEO | (page, type: 'page' \| 'prev' \| 'next', originalElement) => React.ReactNode | - |
| pageSize | 每页条数 | number | - |
| pageSizeOptions | 指定每页可以显示多少条 | string[] \| number[] | \[`10`, `20`, `50`, `100`] |
| responsive | 当 size 未指定时，根据屏幕宽度自动调整尺寸 | boolean | - |
| showLessItems | 是否显示较少页面内容 | boolean | false |
| showQuickJumper | 是否可以快速跳转至某页 | boolean \| { goButton: ReactNode } | false |
| showSizeChanger | 是否展示 `pageSize` 切换器，当 `total` 大于 50 时默认为 true | boolean | - |
| showTitle | 是否显示原生 tooltip 页码提示 | boolean | true |
| showTotal | 用于显示数据总量和当前数据顺序 | function(total, range) | - |
| simple | 当添加该属性时，显示为简单分页 | boolean | - |
| size | 当为 `small` 时，是小尺寸分页 | `default` \| `small` | `default` |
| total | 数据总数 | number | 0 |
| onChange | 页码或 `pageSize` 改变的回调，参数是改变后的页码及每页条数 | function(page, pageSize) | - |
| onShowSizeChange | pageSize 变化的回调 | function(current, size) | - |

## ant-design 的 Notification 有哪些配置？

#### Notification - API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| btn | 自定义关闭按钮 | ReactNode | - | - |
| className | 自定义 CSS class | string | - | - |
| closeIcon | 自定义关闭图标 | boolean \| ReactNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 |
| description | 通知提醒内容，必选 | ReactNode | - | - |
| duration | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 | number | 4.5 | - |
| icon | 自定义图标 | ReactNode | - | - |
| key | 当前通知唯一标志 | string | - | - |
| message | 通知提醒标题，必选 | ReactNode | - | - |
| placement | 弹出位置，可选 `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | string | `topRight` | - |
| style | 自定义内联样式 | - | - |
| role | 供屏幕阅读器识别的通知内容语义，默认为 `alert`。此情况下屏幕阅读器会立即打断当前正在阅读的其他内容，转而阅读通知内容 | `alert \| status` | `alert` | 5.6.0 |
| onClick | 点击通知时触发的回调函数 | function | - | - |
| onClose | 当通知关闭时触发 | function | - | - |
| props | 透传至通知 `div` 上的 props 对象，支持传入 `data-*` `aria-*` 或 `role` 作为对象的属性。需要注意的是，虽然在 TypeScript 类型中声明的类型支持传入 `data-*` 作为对象的属性，但目前只允许传入 `data-testid` 作为对象的属性。 详见 <https://github.com/microsoft/TypeScript/issues/28960> | Object | - | - |

#### Notification - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | number | 24 |
| closeIcon | 自定义关闭图标 | boolean \| ReactNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 |
| getContainer | 配置渲染节点的输出位置 | () => HTMLNode | () => document.body |
| placement | 弹出位置，可选 `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | string | `topRight` |
| rtl | 是否开启 RTL 模式 | boolean | false |
| stack | 堆叠模式，超过阈值时会将所有消息收起 | boolean \| `{ threshold: number }` | `{ threshold: 3 }` | 5.10.0 |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | number | 24 |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - | 4.17.0 |

#### Notification - notification.config

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | number | 24 |
| closeIcon | 自定义关闭图标 | boolean \| ReactNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 |
| duration | 默认自动关闭延时，单位秒 | number | 4.5 |
| getContainer | 配置渲染节点的输出位置，但依旧为全屏展示 | () => HTMLNode | () => document.body |
| placement | 弹出位置，可选 `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | string | `topRight` |
| rtl | 是否开启 RTL 模式 | boolean | false |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | number | 24 |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - | 4.17.0 |

### ant-design 的 Notification - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| btn | 自定义关闭按钮 | ReactNode | - | - |
| className | 自定义 CSS class | string | - | - |
| closeIcon | 自定义关闭图标 | boolean \| ReactNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 |
| description | 通知提醒内容，必选 | ReactNode | - | - |
| duration | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭 | number | 4.5 | - |
| icon | 自定义图标 | ReactNode | - | - |
| key | 当前通知唯一标志 | string | - | - |
| message | 通知提醒标题，必选 | ReactNode | - | - |
| placement | 弹出位置，可选 `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | string | `topRight` | - |
| style | 自定义内联样式 | - | - |
| role | 供屏幕阅读器识别的通知内容语义，默认为 `alert`。此情况下屏幕阅读器会立即打断当前正在阅读的其他内容，转而阅读通知内容 | `alert \| status` | `alert` | 5.6.0 |
| onClick | 点击通知时触发的回调函数 | function | - | - |
| onClose | 当通知关闭时触发 | function | - | - |
| props | 透传至通知 `div` 上的 props 对象，支持传入 `data-*` `aria-*` 或 `role` 作为对象的属性。需要注意的是，虽然在 TypeScript 类型中声明的类型支持传入 `data-*` 作为对象的属性，但目前只允许传入 `data-testid` 作为对象的属性。 详见 <https://github.com/microsoft/TypeScript/issues/28960> | Object | - | - |

### ant-design 的 Notification - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | number | 24 |
| closeIcon | 自定义关闭图标 | boolean \| ReactNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 |
| getContainer | 配置渲染节点的输出位置 | () => HTMLNode | () => document.body |
| placement | 弹出位置，可选 `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | string | `topRight` |
| rtl | 是否开启 RTL 模式 | boolean | false |
| stack | 堆叠模式，超过阈值时会将所有消息收起 | boolean \| `{ threshold: number }` | `{ threshold: 3 }` | 5.10.0 |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | number | 24 |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - | 4.17.0 |

### ant-design 的 Notification - notification.config 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| bottom | 消息从底部弹出时，距离底部的位置，单位像素 | number | 24 |
| closeIcon | 自定义关闭图标 | boolean \| ReactNode | true | 5.7.0：设置为 null 或 false 时隐藏关闭按钮 |
| duration | 默认自动关闭延时，单位秒 | number | 4.5 |
| getContainer | 配置渲染节点的输出位置，但依旧为全屏展示 | () => HTMLNode | () => document.body |
| placement | 弹出位置，可选 `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | string | `topRight` |
| rtl | 是否开启 RTL 模式 | boolean | false |
| top | 消息从顶部弹出时，距离顶部的位置，单位像素 | number | 24 |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - | 4.17.0 |

## ant-design 的 Modal 有哪些配置？

#### Modal - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - |
| classNames | 配置弹窗内置模块的 className | `header?: string; body?: string; footer?: string; mask?: string; wrapper?: string;` | - |
| styles | 配置弹窗内置模块的 style | `header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties;` | - | 5.10.0 |
| cancelButtonProps | cancel 按钮 props | - |
| cancelText | 取消按钮文字 | ReactNode | `取消` |
| centered | 垂直居中展示 Modal | boolean | false |
| closeIcon | 自定义关闭图标。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | boolean \| ReactNode | \<CloseOutlined /> |
| confirmLoading | 确定按钮 loading | boolean | false |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | false |
| focusTriggerAfterClose | 对话框关闭后是否需要聚焦触发元素 | boolean | true | 4.9.0 |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | (params:[footerRenderParams](/components/modal-cn#footerrenderparams))=> React.ReactNode \| React.ReactNode | (确定取消按钮) | 5.9.0 |
| forceRender | 强制渲染 Modal | boolean | false |
| getContainer | 指定 Modal 挂载的节点，但依旧为全屏展示，`false` 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |
| mask | 是否展示遮罩 | boolean | true |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |
| modalRender | 自定义渲染对话框 | (node: ReactNode) => ReactNode | - | 4.7.0 |
| okButtonProps | ok 按钮 props | - |
| okText | 确认按钮文字 | ReactNode | `确定` |
| okType | 确认按钮类型 | string | `primary` |
| style | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | - |
| title | 标题 | ReactNode | - |
| open | 对话框是否可见 | boolean | - |
| width | 宽度 | string \| number | 520 |
| wrapClassName | 对话框外层容器的类名 | string | - |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |
| onOk | 点击确定回调 | function(e) | - |
| afterOpenChange | 打开和关闭 Modal 时动画结束后的回调 | (open: boolean) => void | - | 5.4.0 |

#### Modal - Modal.method()

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - | 4.9.0 |
| autoFocusButton | 指定自动获得焦点的按钮 | null \| `ok` \| `cancel` | `ok` |
| cancelButtonProps | cancel 按钮 props | - |
| cancelText | 设置 Modal.confirm 取消按钮文字 | string | `取消` |
| centered | 垂直居中展示 Modal | boolean | false |
| className | 容器类名 | string | - |
| closable | 是否显示右上角的关闭按钮 | boolean | false | 4.9.0 |
| closeIcon | 自定义关闭图标 | ReactNode | undefined | 4.9.0 |
| content | 内容 | ReactNode | - |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer: null` | (params:[footerRenderParams](/components/modal-cn#footerrenderparams))=> React.ReactNode \| React.ReactNode | - | 5.9.0 |
| getContainer | 指定 Modal 挂载的 HTML 节点，false 为挂载在当前 dom | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body |
| icon | 自定义图标 | ReactNode | \<ExclamationCircleFilled /> |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |
| mask | 是否展示遮罩 | boolean | true |
| maskClosable | 点击蒙层是否允许关闭 | boolean | false |
| okButtonProps | ok 按钮 props | - |
| okText | 确认按钮文字 | string | `确定` |
| okType | 确认按钮类型 | string | `primary` |
| style | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | - |
| title | 标题 | ReactNode | - |
| width | 宽度 | string \| number | 416 |
| wrapClassName | 对话框外层容器的类名 | string | - | 4.18.0 |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |
| onCancel | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function(close) | - |
| onOk | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function(close) | - |

#### Modal - footerRenderParams

| 参数       | 说明     | 类型                         | 默认值 |
| ---------- | -------- | ---------------------------- | ------ |
| originNode | 默认节点 | React.ReactNode              | -      |
| extra      | 扩展选项 | { OkBtn: FC; CancelBtn: FC } | -      |

### ant-design 的 Modal - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - |
| classNames | 配置弹窗内置模块的 className | `header?: string; body?: string; footer?: string; mask?: string; wrapper?: string;` | - |
| styles | 配置弹窗内置模块的 style | `header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties;` | - | 5.10.0 |
| cancelButtonProps | cancel 按钮 props | - |
| cancelText | 取消按钮文字 | ReactNode | `取消` |
| centered | 垂直居中展示 Modal | boolean | false |
| closeIcon | 自定义关闭图标。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | boolean \| ReactNode | \<CloseOutlined /> |
| confirmLoading | 确定按钮 loading | boolean | false |
| destroyOnClose | 关闭时销毁 Modal 里的子元素 | boolean | false |
| focusTriggerAfterClose | 对话框关闭后是否需要聚焦触发元素 | boolean | true | 4.9.0 |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | (params:[footerRenderParams](/components/modal-cn#footerrenderparams))=> React.ReactNode \| React.ReactNode | (确定取消按钮) | 5.9.0 |
| forceRender | 强制渲染 Modal | boolean | false |
| getContainer | 指定 Modal 挂载的节点，但依旧为全屏展示，`false` 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |
| mask | 是否展示遮罩 | boolean | true |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |
| modalRender | 自定义渲染对话框 | (node: ReactNode) => ReactNode | - | 4.7.0 |
| okButtonProps | ok 按钮 props | - |
| okText | 确认按钮文字 | ReactNode | `确定` |
| okType | 确认按钮类型 | string | `primary` |
| style | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | - |
| title | 标题 | ReactNode | - |
| open | 对话框是否可见 | boolean | - |
| width | 宽度 | string \| number | 520 |
| wrapClassName | 对话框外层容器的类名 | string | - |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |
| onOk | 点击确定回调 | function(e) | - |
| afterOpenChange | 打开和关闭 Modal 时动画结束后的回调 | (open: boolean) => void | - | 5.4.0 |

### ant-design 的 Modal - Modal.method() 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterClose | Modal 完全关闭后的回调 | function | - | 4.9.0 |
| autoFocusButton | 指定自动获得焦点的按钮 | null \| `ok` \| `cancel` | `ok` |
| cancelButtonProps | cancel 按钮 props | - |
| cancelText | 设置 Modal.confirm 取消按钮文字 | string | `取消` |
| centered | 垂直居中展示 Modal | boolean | false |
| className | 容器类名 | string | - |
| closable | 是否显示右上角的关闭按钮 | boolean | false | 4.9.0 |
| closeIcon | 自定义关闭图标 | ReactNode | undefined | 4.9.0 |
| content | 内容 | ReactNode | - |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer: null` | (params:[footerRenderParams](/components/modal-cn#footerrenderparams))=> React.ReactNode \| React.ReactNode | - | 5.9.0 |
| getContainer | 指定 Modal 挂载的 HTML 节点，false 为挂载在当前 dom | HTMLElement \| () => HTMLElement \| Selectors \| false | document.body |
| icon | 自定义图标 | ReactNode | \<ExclamationCircleFilled /> |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |
| mask | 是否展示遮罩 | boolean | true |
| maskClosable | 点击蒙层是否允许关闭 | boolean | false |
| okButtonProps | ok 按钮 props | - |
| okText | 确认按钮文字 | string | `确定` |
| okType | 确认按钮类型 | string | `primary` |
| style | 可用于设置浮层的样式，调整浮层位置等 | CSSProperties | - |
| title | 标题 | ReactNode | - |
| width | 宽度 | string \| number | 416 |
| wrapClassName | 对话框外层容器的类名 | string | - | 4.18.0 |
| zIndex | 设置 Modal 的 `z-index` | number | 1000 |
| onCancel | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function(close) | - |
| onOk | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 | function(close) | - |

### ant-design 的 Modal - footerRenderParams 有哪些配置？

| 参数       | 说明     | 类型                         | 默认值 |
| ---------- | -------- | ---------------------------- | ------ |
| originNode | 默认节点 | React.ReactNode              | -      |
| extra      | 扩展选项 | { OkBtn: FC; CancelBtn: FC } | -      |

## ant-design 的 Message 有哪些配置？

#### Message - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | ReactNode \| config | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3 |
| onClose | 关闭时触发的回调函数 | function | - |

#### Message - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义 CSS class | string | - |
| content | 提示内容 | ReactNode | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3 |
| icon | 自定义图标 | ReactNode | - |
| key | 当前提示的唯一标志 | string \| number | - |
| style | 自定义内联样式 | - |
| onClick | 点击 message 时触发的回调函数 | function | - |
| onClose | 关闭时触发的回调函数 | function | - |

#### Message - message.config

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| duration | 默认自动关闭延时，单位秒 | number | 3 |
| getContainer | 配置渲染节点的输出位置，但依旧为全屏展示 | () => HTMLElement | () => document.body |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - |
| prefixCls | 消息节点的 className 前缀 | string | `ant-message` | 4.5.0 |
| rtl | 是否开启 RTL 模式 | boolean | false |
| top | 消息距离顶部的位置 | number | 8 |

### ant-design 的 Message - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | ReactNode \| config | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3 |
| onClose | 关闭时触发的回调函数 | function | - |

### ant-design 的 Message - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义 CSS class | string | - |
| content | 提示内容 | ReactNode | - |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 | number | 3 |
| icon | 自定义图标 | ReactNode | - |
| key | 当前提示的唯一标志 | string \| number | - |
| style | 自定义内联样式 | - |
| onClick | 点击 message 时触发的回调函数 | function | - |
| onClose | 关闭时触发的回调函数 | function | - |

### ant-design 的 Message - message.config 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| duration | 默认自动关闭延时，单位秒 | number | 3 |
| getContainer | 配置渲染节点的输出位置，但依旧为全屏展示 | () => HTMLElement | () => document.body |
| maxCount | 最大显示数，超过限制时，最早的消息会被自动关闭 | number | - |
| prefixCls | 消息节点的 className 前缀 | string | `ant-message` | 4.5.0 |
| rtl | 是否开启 RTL 模式 | boolean | false |
| top | 消息距离顶部的位置 | number | 8 |

## ant-design 的 Menu 有哪些配置？

#### Menu - Menu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| defaultOpenKeys | 初始展开的 SubMenu 菜单项 key 数组 | string[] | - |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | string[] | - |
| expandIcon | 自定义展开图标 | ReactNode \| `(props: SubMenuProps & { isSubMenu: boolean }) => ReactNode` | - | 4.9.0 |
| forceSubMenuRender | 在子菜单展示之前就渲染进 DOM | boolean | false |
| inlineCollapsed | inline 时菜单是否收起状态 | boolean | - |
| inlineIndent | inline 模式的菜单缩进宽度 | number | 24 |
| items | 菜单内容 | - | 4.20.0 |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | `vertical` \| `horizontal` \| `inline` | `vertical` |
| multiple | 是否允许多选 | boolean | false |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | string[] | - |
| overflowedIndicator | 用于自定义 Menu 水平空间不足时的省略收缩的图标 | ReactNode | `<EllipsisOutlined />` |
| selectable | 是否允许选中 | boolean | true |
| selectedKeys | 当前选中的菜单项 key 数组 | string[] | - |
| style | 根节点样式 | CSSProperties | - |
| subMenuCloseDelay | 用户鼠标离开子菜单后关闭延时，单位：秒 | number | 0.1 |
| subMenuOpenDelay | 用户鼠标进入子菜单后开启延时，单位：秒 | number | 0 |
| theme | 主题颜色 | `light` \| `dark` | `light` |
| triggerSubMenuAction | SubMenu 展开/关闭的触发行为 | `hover` \| `click` | `hover` |
| onClick | 点击 MenuItem 调用此函数 | function({ item, key, keyPath, domEvent }) | - |
| onDeselect | 取消选中时调用，仅在 multiple 生效 | function({ item, key, keyPath, selectedKeys, domEvent }) | - |
| onOpenChange | SubMenu 展开/关闭的回调 | function(openKeys: string[]) | - |
| onSelect | 被选中时调用 | function({ item, key, keyPath, selectedKeys, domEvent }) | - |

#### Menu - MenuItemType

| 参数     | 说明                     | 类型      | 默认值 |
| -------- | ------------------------ | --------- | ------ |
| danger   | 展示错误状态样式         | boolean   | false  |
| disabled | 是否禁用                 | boolean   | false  |
| icon     | 菜单图标                 | ReactNode | -      |
| key      | item 的唯一标志          | string    | -      |
| label    | 菜单项标题               | ReactNode | -      |
| title    | 设置收缩时展示的悬浮标题 | string    | -      |

#### Menu - SubMenuType

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- |
| children | 子菜单的菜单项 | - |
| disabled | 是否禁用 | boolean | false |
| icon | 菜单图标 | ReactNode | - |
| key | 唯一标志 | string | - |
| label | 菜单项标题 | ReactNode | - |
| popupClassName | 子菜单样式，`mode="inline"` 时无效 | string | - |
| popupOffset | 子菜单偏移量，`mode="inline"` 时无效 | \[number, number] | - |
| onTitleClick | 点击子菜单标题 | function({ key, domEvent }) | - |
| theme | 设置子菜单的主题，默认从 Menu 上继承 | `light` \| `dark` | - |

#### Menu - MenuItemGroupType

| 参数     | 说明         | 类型      |
| -------- | ------------ | --------- | --- |
| children | 分组的菜单项 | -         |
| label    | 分组标题     | ReactNode | -   |

#### Menu - MenuDividerType

| 参数   | 说明     | 类型    | 默认值 |
| ------ | -------- | ------- | ------ |
| dashed | 是否虚线 | boolean | false  |

### ant-design 的 Menu - Menu 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| defaultOpenKeys | 初始展开的 SubMenu 菜单项 key 数组 | string[] | - |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | string[] | - |
| expandIcon | 自定义展开图标 | ReactNode \| `(props: SubMenuProps & { isSubMenu: boolean }) => ReactNode` | - | 4.9.0 |
| forceSubMenuRender | 在子菜单展示之前就渲染进 DOM | boolean | false |
| inlineCollapsed | inline 时菜单是否收起状态 | boolean | - |
| inlineIndent | inline 模式的菜单缩进宽度 | number | 24 |
| items | 菜单内容 | - | 4.20.0 |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | `vertical` \| `horizontal` \| `inline` | `vertical` |
| multiple | 是否允许多选 | boolean | false |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | string[] | - |
| overflowedIndicator | 用于自定义 Menu 水平空间不足时的省略收缩的图标 | ReactNode | `<EllipsisOutlined />` |
| selectable | 是否允许选中 | boolean | true |
| selectedKeys | 当前选中的菜单项 key 数组 | string[] | - |
| style | 根节点样式 | CSSProperties | - |
| subMenuCloseDelay | 用户鼠标离开子菜单后关闭延时，单位：秒 | number | 0.1 |
| subMenuOpenDelay | 用户鼠标进入子菜单后开启延时，单位：秒 | number | 0 |
| theme | 主题颜色 | `light` \| `dark` | `light` |
| triggerSubMenuAction | SubMenu 展开/关闭的触发行为 | `hover` \| `click` | `hover` |
| onClick | 点击 MenuItem 调用此函数 | function({ item, key, keyPath, domEvent }) | - |
| onDeselect | 取消选中时调用，仅在 multiple 生效 | function({ item, key, keyPath, selectedKeys, domEvent }) | - |
| onOpenChange | SubMenu 展开/关闭的回调 | function(openKeys: string[]) | - |
| onSelect | 被选中时调用 | function({ item, key, keyPath, selectedKeys, domEvent }) | - |

### ant-design 的 Menu - MenuItemType 有哪些配置？

| 参数     | 说明                     | 类型      | 默认值 |
| -------- | ------------------------ | --------- | ------ |
| danger   | 展示错误状态样式         | boolean   | false  |
| disabled | 是否禁用                 | boolean   | false  |
| icon     | 菜单图标                 | ReactNode | -      |
| key      | item 的唯一标志          | string    | -      |
| label    | 菜单项标题               | ReactNode | -      |
| title    | 设置收缩时展示的悬浮标题 | string    | -      |

### ant-design 的 Menu - SubMenuType 有哪些配置？

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- |
| children | 子菜单的菜单项 | - |
| disabled | 是否禁用 | boolean | false |
| icon | 菜单图标 | ReactNode | - |
| key | 唯一标志 | string | - |
| label | 菜单项标题 | ReactNode | - |
| popupClassName | 子菜单样式，`mode="inline"` 时无效 | string | - |
| popupOffset | 子菜单偏移量，`mode="inline"` 时无效 | \[number, number] | - |
| onTitleClick | 点击子菜单标题 | function({ key, domEvent }) | - |
| theme | 设置子菜单的主题，默认从 Menu 上继承 | `light` \| `dark` | - |

### ant-design 的 Menu - MenuItemGroupType 有哪些配置？

| 参数     | 说明         | 类型      |
| -------- | ------------ | --------- | --- |
| children | 分组的菜单项 | -         |
| label    | 分组标题     | ReactNode | -   |

### ant-design 的 Menu - MenuDividerType 有哪些配置？

| 参数   | 说明     | 类型    | 默认值 |
| ------ | -------- | ------- | ------ |
| dashed | 是否虚线 | boolean | false  |

## ant-design 的 Mentions 有哪些配置？

#### Mentions - Mentions

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除 | boolean \| { clearIcon?: ReactNode } | false | 5.13.0 |
| autoFocus | 自动获得焦点 | boolean | false |
| autoSize | 自适应内容高度，可设置为 true \| false 或对象：{ minRows: 2, maxRows: 6 } | boolean \| object | false |
| defaultValue | 默认值 | string | - |
| filterOption | 自定义过滤逻辑 | false \| (input: string, option: OptionProps) => boolean | - |
| getPopupContainer | 指定建议框挂载的 HTML 节点 | () => HTMLElement | - |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | `Not Found` |
| placement | 弹出层展示位置 | `top` \| `bottom` | `bottom` |
| prefix | 设置触发关键字 | string \| string[] | `@` |
| split | 设置选中项前后分隔符 | string | ` ` |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| validateSearch | 自定义触发验证逻辑 | (text: string, props: MentionsProps) => void | - |
| value | 设置值 | string | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onBlur | 失去焦点时触发 | () => void | - |
| onChange | 值改变时触发 | (text: string) => void | - |
| onFocus | 获得焦点时触发 | () => void | - |
| onResize | resize 回调 | function({ width, height }) | - |
| onSearch | 搜索时触发 | (text: string, prefix: string) => void | - |
| onSelect | 选择选项时触发 | (option: OptionProps, prefix: string) => void | - |
| options | 选项配置 | \[] | 5.1.0 |

#### Mentions - Mentions 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

#### Mentions - Option

| 参数      | 说明           | 类型                | 默认值 |
| --------- | -------------- | ------------------- | ------ |
| value     | 选择时填充的值 | string              | -      |
| label     | 选项的标题     | React.ReactNode     | -      |
| key       | 选项的 key 值  | string              | -      |
| disabled  | 是否可选       | boolean             | -      |
| className | css 类名       | string              | -      |
| style     | 选项样式       | React.CSSProperties | -      |

### ant-design 的 Mentions - Mentions 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除 | boolean \| { clearIcon?: ReactNode } | false | 5.13.0 |
| autoFocus | 自动获得焦点 | boolean | false |
| autoSize | 自适应内容高度，可设置为 true \| false 或对象：{ minRows: 2, maxRows: 6 } | boolean \| object | false |
| defaultValue | 默认值 | string | - |
| filterOption | 自定义过滤逻辑 | false \| (input: string, option: OptionProps) => boolean | - |
| getPopupContainer | 指定建议框挂载的 HTML 节点 | () => HTMLElement | - |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | `Not Found` |
| placement | 弹出层展示位置 | `top` \| `bottom` | `bottom` |
| prefix | 设置触发关键字 | string \| string[] | `@` |
| split | 设置选中项前后分隔符 | string | ` ` |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| validateSearch | 自定义触发验证逻辑 | (text: string, props: MentionsProps) => void | - |
| value | 设置值 | string | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onBlur | 失去焦点时触发 | () => void | - |
| onChange | 值改变时触发 | (text: string) => void | - |
| onFocus | 获得焦点时触发 | () => void | - |
| onResize | resize 回调 | function({ width, height }) | - |
| onSearch | 搜索时触发 | (text: string, prefix: string) => void | - |
| onSelect | 选择选项时触发 | (option: OptionProps, prefix: string) => void | - |
| options | 选项配置 | \[] | 5.1.0 |

### ant-design 的 Mentions - Mentions 方法 有哪些配置？

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### ant-design 的 Mentions - Option 有哪些配置？

| 参数      | 说明           | 类型                | 默认值 |
| --------- | -------------- | ------------------- | ------ |
| value     | 选择时填充的值 | string              | -      |
| label     | 选项的标题     | React.ReactNode     | -      |
| key       | 选项的 key 值  | string              | -      |
| disabled  | 是否可选       | boolean             | -      |
| className | css 类名       | string              | -      |
| style     | 选项样式       | React.CSSProperties | -      |

## ant-design 的 List 有哪些配置？

#### List - List

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 是否展示边框 | boolean | false |
| dataSource | 列表数据源 | any[] | - |
| footer | 列表底部 | ReactNode | - |
| grid | 列表栅格配置 | - |
| header | 列表头部 | ReactNode | - |
| itemLayout | 设置 `List.Item` 布局，设置成 `vertical` 则竖直样式显示，默认横排 | string | - |
| loading | 当卡片内容还在加载中时，可以用 `loading` 展示一个占位 | boolean \| [object](/components/spin-cn#api) ([更多](https://github.com/ant-design/ant-design/issues/8659)) | false |
| loadMore | 加载更多 | ReactNode | - |
| locale | 默认文案设置，目前包括空数据文案 | object | {emptyText: `暂无数据`} |
| pagination | 对应的 `pagination` 配置，设置 false 不显示 | boolean \| object | false |
| renderItem | 当使用 dataSource 时，可以用 `renderItem` 自定义渲染列表项 | (item) => ReactNode | - |
| rowKey | 当 `renderItem` 自定义渲染列表项有效时，自定义每一行的 `key` 的获取方式 | `keyof` T \| (item: T) => `React.Key` | `"key"` |
| size | list 的尺寸 | `default` \| `large` \| `small` | `default` |
| split | 是否展示分割线 | boolean | true |

#### List - pagination

| 参数     | 说明               | 类型                         | 默认值   |
| -------- | ------------------ | ---------------------------- | -------- |
| position | 指定分页显示的位置 | `top` \| `bottom` \| `both`  | `bottom` |
| align    | 指定分页对齐的位置 | `start` \| `center` \| `end` | `end`    |

#### List - List grid props

| 参数   | 说明                 | 类型   | 默认值 |
| ------ | -------------------- | ------ | ------ |
| column | 列数                 | number | -      |
| gutter | 栅格间隔             | number | 0      |
| xs     | `<576px` 展示的列数  | number | -      |
| sm     | `≥576px` 展示的列数  | number | -      |
| md     | `≥768px` 展示的列数  | number | -      |
| lg     | `≥992px` 展示的列数  | number | -      |
| xl     | `≥1200px` 展示的列数 | number | -      |
| xxl    | `≥1600px` 展示的列数 | number | -      |

#### List - List.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actions | 列表操作组，根据 `itemLayout` 的不同，位置在卡片底部或者最右侧 | Array<ReactNode> | - |
| extra | 额外内容，通常用在 `itemLayout` 为 `vertical` 的情况下，展示右侧内容; `horizontal` 展示在列表元素最右侧 | ReactNode | - |

#### List - List.Item.Meta

| 参数        | 说明               | 类型      | 默认值 |
| ----------- | ------------------ | --------- | ------ |
| avatar      | 列表元素的图标     | ReactNode | -      |
| description | 列表元素的描述内容 | ReactNode | -      |
| title       | 列表元素的标题     | ReactNode | -      |

### ant-design 的 List - List 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| bordered | 是否展示边框 | boolean | false |
| dataSource | 列表数据源 | any[] | - |
| footer | 列表底部 | ReactNode | - |
| grid | 列表栅格配置 | - |
| header | 列表头部 | ReactNode | - |
| itemLayout | 设置 `List.Item` 布局，设置成 `vertical` 则竖直样式显示，默认横排 | string | - |
| loading | 当卡片内容还在加载中时，可以用 `loading` 展示一个占位 | boolean \| [object](/components/spin-cn#api) ([更多](https://github.com/ant-design/ant-design/issues/8659)) | false |
| loadMore | 加载更多 | ReactNode | - |
| locale | 默认文案设置，目前包括空数据文案 | object | {emptyText: `暂无数据`} |
| pagination | 对应的 `pagination` 配置，设置 false 不显示 | boolean \| object | false |
| renderItem | 当使用 dataSource 时，可以用 `renderItem` 自定义渲染列表项 | (item) => ReactNode | - |
| rowKey | 当 `renderItem` 自定义渲染列表项有效时，自定义每一行的 `key` 的获取方式 | `keyof` T \| (item: T) => `React.Key` | `"key"` |
| size | list 的尺寸 | `default` \| `large` \| `small` | `default` |
| split | 是否展示分割线 | boolean | true |

### ant-design 的 List - pagination 有哪些配置？

| 参数     | 说明               | 类型                         | 默认值   |
| -------- | ------------------ | ---------------------------- | -------- |
| position | 指定分页显示的位置 | `top` \| `bottom` \| `both`  | `bottom` |
| align    | 指定分页对齐的位置 | `start` \| `center` \| `end` | `end`    |

### ant-design 的 List - List grid props 有哪些配置？

| 参数   | 说明                 | 类型   | 默认值 |
| ------ | -------------------- | ------ | ------ |
| column | 列数                 | number | -      |
| gutter | 栅格间隔             | number | 0      |
| xs     | `<576px` 展示的列数  | number | -      |
| sm     | `≥576px` 展示的列数  | number | -      |
| md     | `≥768px` 展示的列数  | number | -      |
| lg     | `≥992px` 展示的列数  | number | -      |
| xl     | `≥1200px` 展示的列数 | number | -      |
| xxl    | `≥1600px` 展示的列数 | number | -      |

### ant-design 的 List - List.Item 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actions | 列表操作组，根据 `itemLayout` 的不同，位置在卡片底部或者最右侧 | Array<ReactNode> | - |
| extra | 额外内容，通常用在 `itemLayout` 为 `vertical` 的情况下，展示右侧内容; `horizontal` 展示在列表元素最右侧 | ReactNode | - |

### ant-design 的 List - List.Item.Meta 有哪些配置？

| 参数        | 说明               | 类型      | 默认值 |
| ----------- | ------------------ | --------- | ------ |
| avatar      | 列表元素的图标     | ReactNode | -      |
| description | 列表元素的描述内容 | ReactNode | -      |
| title       | 列表元素的标题     | ReactNode | -      |

## ant-design 的 Layout 有哪些配置？

#### Layout - Layout

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 容器 className | string | - |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean | - |
| style | 指定样式 | CSSProperties | - |

#### Layout - Layout.Sider

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| breakpoint | 触发响应式布局的[断点](/components/grid-cn#col) | `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` | - |
| className | 容器 className | string | - |
| collapsed | 当前收起状态 | boolean | - |
| collapsedWidth | 收缩宽度，设置为 0 会出现特殊 trigger | number | 80 |
| collapsible | 是否可收起 | boolean | false |
| defaultCollapsed | 是否默认收起 | boolean | false |
| reverseArrow | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用 | boolean | false |
| style | 指定样式 | CSSProperties | - |
| theme | 主题颜色 | `light` \| `dark` | `dark` |
| trigger | 自定义 trigger，设置为 null 时隐藏 trigger | ReactNode | - |
| width | 宽度 | number \| string | 200 |
| zeroWidthTriggerStyle | 指定当 `collapsedWidth` 为 0 时出现的特殊 trigger 的样式 | object | - |
| onBreakpoint | 触发响应式布局[断点](/components/grid-cn#api)时的回调 | (broken) => {} | - |
| onCollapse | 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发 | (collapsed, type) => {} | - |

### ant-design 的 Layout - Layout 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 容器 className | string | - |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | boolean | - |
| style | 指定样式 | CSSProperties | - |

### ant-design 的 Layout - Layout.Sider 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| breakpoint | 触发响应式布局的[断点](/components/grid-cn#col) | `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` | - |
| className | 容器 className | string | - |
| collapsed | 当前收起状态 | boolean | - |
| collapsedWidth | 收缩宽度，设置为 0 会出现特殊 trigger | number | 80 |
| collapsible | 是否可收起 | boolean | false |
| defaultCollapsed | 是否默认收起 | boolean | false |
| reverseArrow | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用 | boolean | false |
| style | 指定样式 | CSSProperties | - |
| theme | 主题颜色 | `light` \| `dark` | `dark` |
| trigger | 自定义 trigger，设置为 null 时隐藏 trigger | ReactNode | - |
| width | 宽度 | number \| string | 200 |
| zeroWidthTriggerStyle | 指定当 `collapsedWidth` 为 0 时出现的特殊 trigger 的样式 | object | - |
| onBreakpoint | 触发响应式布局[断点](/components/grid-cn#api)时的回调 | (broken) => {} | - |
| onCollapse | 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发 | (collapsed, type) => {} | - |

## ant-design 的 Input-number 有哪些配置？

#### Input-number - API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | ReactNode | - | 4.17.0 |
| addonBefore | 带标签的 input，设置前置标签 | ReactNode | - | 4.17.0 |
| autoFocus | 自动获取焦点 | boolean | false | - |
| changeOnBlur | 是否在失去焦点时，触发 `onChange` 事件（例如值超出范围时，重新限制回范围并触发事件） | boolean | true | 5.11.0 |
| controls | 是否显示增减按钮，也可设置自定义箭头图标 | boolean \| { upIcon?: React.ReactNode; downIcon?: React.ReactNode; } | - | 4.19.0 |
| decimalSeparator | 小数点 | string | - | - |
| placeholder | 占位符 | string | - |
| defaultValue | 初始值 | number | - | - |
| disabled | 禁用 | boolean | false | - |
| formatter | 指定输入框展示值的格式 | function(value: number \| string, info: { userTyping: boolean, input: string }): string | - | info: 4.17.0 |
| keyboard | 是否启用键盘快捷行为 | boolean | true | 4.12.0 |
| max | 最大值 | number | - |
| min | 最小值 | number | - |
| parser | 指定从 `formatter` 里转换回数字的方式，和 `formatter` 搭配使用 | function(string): number | - | - |
| precision | 数值精度，配置 `formatter` 时会以 `formatter` 为准 | number | - | - |
| readOnly | 只读 | boolean | false | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| prefix | 带有前缀图标的 input | ReactNode | - | 4.17.0 |
| size | 输入框大小 | `large` \| `middle` \| `small` | - | - |
| step | 每次改变步数，可以为小数 | number \| string | 1 | - |
| stringMode | 字符值模式，开启后支持高精度小数。同时 `onChange` 将返回 string 类型 | boolean | false | 4.13.0 |
| value | 当前值 | number | - | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onChange | 变化回调 | function(value: number \| string \| null) | - | - |
| onPressEnter | 按下回车的回调 | function(e) | - | - |
| onStep | 点击上下箭头的回调 | (value: number, info: { offset: number, type: 'up' \| 'down' }) => void | - | 4.7.0 |

#### Input-number - 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### ant-design 的 Input-number - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | ReactNode | - | 4.17.0 |
| addonBefore | 带标签的 input，设置前置标签 | ReactNode | - | 4.17.0 |
| autoFocus | 自动获取焦点 | boolean | false | - |
| changeOnBlur | 是否在失去焦点时，触发 `onChange` 事件（例如值超出范围时，重新限制回范围并触发事件） | boolean | true | 5.11.0 |
| controls | 是否显示增减按钮，也可设置自定义箭头图标 | boolean \| { upIcon?: React.ReactNode; downIcon?: React.ReactNode; } | - | 4.19.0 |
| decimalSeparator | 小数点 | string | - | - |
| placeholder | 占位符 | string | - |
| defaultValue | 初始值 | number | - | - |
| disabled | 禁用 | boolean | false | - |
| formatter | 指定输入框展示值的格式 | function(value: number \| string, info: { userTyping: boolean, input: string }): string | - | info: 4.17.0 |
| keyboard | 是否启用键盘快捷行为 | boolean | true | 4.12.0 |
| max | 最大值 | number | - |
| min | 最小值 | number | - |
| parser | 指定从 `formatter` 里转换回数字的方式，和 `formatter` 搭配使用 | function(string): number | - | - |
| precision | 数值精度，配置 `formatter` 时会以 `formatter` 为准 | number | - | - |
| readOnly | 只读 | boolean | false | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| prefix | 带有前缀图标的 input | ReactNode | - | 4.17.0 |
| size | 输入框大小 | `large` \| `middle` \| `small` | - | - |
| step | 每次改变步数，可以为小数 | number \| string | 1 | - |
| stringMode | 字符值模式，开启后支持高精度小数。同时 `onChange` 将返回 string 类型 | boolean | false | 4.13.0 |
| value | 当前值 | number | - | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onChange | 变化回调 | function(value: number \| string \| null) | - | - |
| onPressEnter | 按下回车的回调 | function(e) | - | - |
| onStep | 点击上下箭头的回调 | (value: number, info: { offset: number, type: 'up' \| 'down' }) => void | - | 4.7.0 |

### ant-design 的 Input-number - 方法 有哪些配置？

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

## ant-design 的 Input 有哪些配置？

#### Input - Input

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | ReactNode | - |
| addonBefore | 带标签的 input，设置前置标签 | ReactNode | - |
| allowClear | 可以点击清除图标删除内容 | boolean \| { clearIcon: ReactNode } | - |
| classNames | 语义化结构 class | Record<[SemanticDOM](#input-1), string> | - | 5.4.0 |
| count | 字符计数配置 | - | 5.10.0 |
| defaultValue | 输入框默认内容 | string | - |
| disabled | 是否禁用状态，默认为 false | boolean | false |
| id | 输入框的 id | string | - |
| maxLength | 最大长度 | number | - |
| prefix | 带有前缀图标的 input | ReactNode | - |
| showCount | 是否展示字数 | boolean \| { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode } | false | 4.18.0 info.value: 4.23.0 |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| styles | 语义化结构 style | Record<[SemanticDOM](#input-1), CSSProperties> | - | 5.4.0 |
| size | 控件大小。注：标准表单内的输入框大小限制为 `middle` | `large` \| `middle` \| `small` | - |
| suffix | 带有后缀图标的 input | ReactNode | - |
| type | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type="textarea"`) | string | `text` |
| value | 输入框内容 | string | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onChange | 输入框内容变化时的回调 | function(e) | - |
| onPressEnter | 按下回车的回调 | function(e) | - |

#### Input - Input.TextArea

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| autoSize | 自适应内容高度，可设置为 true \| false 或对象：{ minRows: 2, maxRows: 6 } | boolean \| object | false |
| classNames | 语义化结构 class | Record<[SemanticDOM](#inputtextarea-1), string> | - | 5.4.0 |
| styles | 语义化结构 style | Record<[SemanticDOM](#inputtextarea-1), CSSProperties> | - | 5.4.0 |

#### Input - Input.Search

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enterButton | 是否有确认按钮，可设为按钮文字。该属性会与 `addonAfter` 冲突。 | boolean \| ReactNode | false |
| loading | 搜索 loading | boolean | false |
| onSearch | 点击搜索图标、清除图标，或按下回车键时的回调 | function(value, event, { source: "input" \| "clear" }) | - |

#### Input - Input.Password

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| iconRender | 自定义切换按钮 | (visible) => ReactNode | (visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />) | 4.3.0 |
| visibilityToggle | 是否显示切换按钮或者控制密码显隐 | boolean \| [VisibilityToggle](#visibilitytoggle) | true |

#### Input - VisibilityToggle

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| visible | 用于手动控制密码显隐 | boolean | false | 4.24 |
| onVisibleChange | 显隐密码的回调 | (visible) => void | - | 4.24 |

#### Input - Input Methods

| 名称 | 说明 | 参数 |
| --- | --- | --- | --- |
| blur | 取消焦点 | - |
| focus | 获取焦点 | (option?: { preventScroll?: boolean, cursor?: 'start' \| 'end' \| 'all' }) | option - 4.10.0 |

#### Input - Input

| 名称   | 说明               | 版本  |
| ------ | ------------------ | ----- |
| input  | `input` 元素       | 5.4.0 |
| prefix | 所有前缀的包裹元素 | 5.4.0 |
| suffix | 所有后缀的包裹元素 | 5.4.0 |
| count  | 文字计数元素       | 5.4.0 |

#### Input - Input.TextArea

| 名称     | 说明            | 版本  |
| -------- | --------------- | ----- |
| textarea | `textarea` 元素 | 5.4.0 |
| count    | 文字计数元素    | 5.4.0 |

### ant-design 的 Input - Input 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | ReactNode | - |
| addonBefore | 带标签的 input，设置前置标签 | ReactNode | - |
| allowClear | 可以点击清除图标删除内容 | boolean \| { clearIcon: ReactNode } | - |
| classNames | 语义化结构 class | Record<[SemanticDOM](#input-1), string> | - | 5.4.0 |
| count | 字符计数配置 | - | 5.10.0 |
| defaultValue | 输入框默认内容 | string | - |
| disabled | 是否禁用状态，默认为 false | boolean | false |
| id | 输入框的 id | string | - |
| maxLength | 最大长度 | number | - |
| prefix | 带有前缀图标的 input | ReactNode | - |
| showCount | 是否展示字数 | boolean \| { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode } | false | 4.18.0 info.value: 4.23.0 |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| styles | 语义化结构 style | Record<[SemanticDOM](#input-1), CSSProperties> | - | 5.4.0 |
| size | 控件大小。注：标准表单内的输入框大小限制为 `middle` | `large` \| `middle` \| `small` | - |
| suffix | 带有后缀图标的 input | ReactNode | - |
| type | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type="textarea"`) | string | `text` |
| value | 输入框内容 | string | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onChange | 输入框内容变化时的回调 | function(e) | - |
| onPressEnter | 按下回车的回调 | function(e) | - |

### ant-design 的 Input - Input.TextArea 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| autoSize | 自适应内容高度，可设置为 true \| false 或对象：{ minRows: 2, maxRows: 6 } | boolean \| object | false |
| classNames | 语义化结构 class | Record<[SemanticDOM](#inputtextarea-1), string> | - | 5.4.0 |
| styles | 语义化结构 style | Record<[SemanticDOM](#inputtextarea-1), CSSProperties> | - | 5.4.0 |

### ant-design 的 Input - Input.Search 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| enterButton | 是否有确认按钮，可设为按钮文字。该属性会与 `addonAfter` 冲突。 | boolean \| ReactNode | false |
| loading | 搜索 loading | boolean | false |
| onSearch | 点击搜索图标、清除图标，或按下回车键时的回调 | function(value, event, { source: "input" \| "clear" }) | - |

### ant-design 的 Input - Input.Password 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| iconRender | 自定义切换按钮 | (visible) => ReactNode | (visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />) | 4.3.0 |
| visibilityToggle | 是否显示切换按钮或者控制密码显隐 | boolean \| [VisibilityToggle](#visibilitytoggle) | true |

### ant-design 的 Input - VisibilityToggle 有哪些配置？

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| visible | 用于手动控制密码显隐 | boolean | false | 4.24 |
| onVisibleChange | 显隐密码的回调 | (visible) => void | - | 4.24 |

### ant-design 的 Input - Input Methods 有哪些配置？

| 名称 | 说明 | 参数 |
| --- | --- | --- | --- |
| blur | 取消焦点 | - |
| focus | 获取焦点 | (option?: { preventScroll?: boolean, cursor?: 'start' \| 'end' \| 'all' }) | option - 4.10.0 |

### ant-design 的 Input - Input 有哪些配置？

| 名称   | 说明               | 版本  |
| ------ | ------------------ | ----- |
| input  | `input` 元素       | 5.4.0 |
| prefix | 所有前缀的包裹元素 | 5.4.0 |
| suffix | 所有后缀的包裹元素 | 5.4.0 |
| count  | 文字计数元素       | 5.4.0 |

### ant-design 的 Input - Input.TextArea 有哪些配置？

| 名称     | 说明            | 版本  |
| -------- | --------------- | ----- |
| textarea | `textarea` 元素 | 5.4.0 |
| count    | 文字计数元素    | 5.4.0 |

## ant-design 的 Image 有哪些配置？

#### Image - Image

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alt | 图像描述 | string | - | 4.6.0 |
| fallback | 加载失败容错地址 | string | - | 4.6.0 |
| height | 图像高度 | string \| number | - | 4.6.0 |
| placeholder | 加载占位，为 `true` 时使用默认占位 | ReactNode | - | 4.6.0 |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [PreviewType](#previewtype) | true | 4.6.0 [PreviewType](#previewyype):4.7.0 |
| src | 图片地址 | string | - | 4.6.0 |
| width | 图像宽度 | string \| number | - | 4.6.0 |
| onError | 加载错误回调 | (event: Event) => void | - | 4.12.0 |

#### Image - PreviewType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 | boolean | - | - |
| src | 自定义预览 src | string | - | 4.10.0 |
| getContainer | 指定预览挂载的节点，但依旧为全屏展示，false 为挂载在当前位置 | string \| HTMLElement \| (() => HTMLElement) \| false | - | 4.8.0 |
| movable | 是否可移动 | boolean | true | 5.8.0 |
| mask | 缩略图遮罩 | ReactNode | - | 4.9.0 |
| maskClassName | 缩略图遮罩类名 | string | - | 4.11.0 |
| rootClassName | 预览图的根 DOM 类名 | string | - | 5.4.0 |
| scaleStep | `1 + scaleStep` 为缩放放大的每步倍数 | number | 0.5 | - |
| minScale | 最小缩放倍数 | number | 1 | 5.7.0 |
| maxScale | 最大放大倍数 | number | 50 | 5.7.0 |
| closeIcon | 自定义关闭 Icon | React.ReactNode | - | 5.7.0 |
| forceRender | 强制渲染预览图 | boolean | - | - |
| toolbarRender | 自定义工具栏 | (originalNode: React.ReactElement, info: Omit<[ToolbarRenderInfoType](#toolbarrenderinfotype), 'current' \| 'total'>) => React.ReactNode | - | 5.7.0 |
| imageRender | 自定义预览内容 | (originalNode: React.ReactElement, info: { transform: [TransformType](#transformtype) }) => React.ReactNode | - | 5.7.0 |
| onTransform | 预览图 transform 变化的回调 | { transform: [TransformType](#transformtype), action: [TransformAction](#transformaction) } | - | 5.7.0 |
| onVisibleChange | 当 `visible` 发生改变时的回调 | (visible: boolean, prevVisible: boolean) => void | - | - |

#### Image - PreviewGroup

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [PreviewGroupType](#previewgrouptype) | true | 4.6.0 [PreviewGroupType](#previewgrouptype):4.7.0 |
| items | 预览数组 | string[] \| { src: string, crossOrigin: string, ... }[] | - | 5.7.0 |
| fallback | 加载失败容错地址 | string | - | 5.7.0 |

#### Image - PreviewGroupType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 | boolean | - | - |
| getContainer | 指定预览挂载的节点，但依旧为全屏展示，false 为挂载在当前位置 | string \| HTMLElement \| (() => HTMLElement) \| false | - | 4.8.0 |
| movable | 是否可移动 | boolean | true | 5.8.0 |
| current | 当前预览图的 index | number | - | 4.12.0 |
| mask | 缩略图遮罩 | ReactNode | - | 4.9.0 |
| maskClassName | 缩略图遮罩类名 | string | - | 4.11.0 |
| rootClassName | 预览图的根 DOM 类名 | string | - | 5.4.0 |
| scaleStep | `1 + scaleStep` 为缩放放大的每步倍数 | number | 0.5 | - |
| minScale | 最小缩放倍数 | number | 1 | 5.7.0 |
| maxScale | 最大放大倍数 | number | 50 | 5.7.0 |
| closeIcon | 自定义关闭 Icon | React.ReactNode | - | 5.7.0 |
| forceRender | 强制渲染预览图 | boolean | - | - |
| countRender | 自定义预览计数内容 | (current: number, total: number) => React.ReactNode | - | 4.20.0 |
| toolbarRender | 自定义工具栏 | (originalNode: React.ReactElement, info: [ToolbarRenderInfoType](#toolbarrenderinfotype)) => React.ReactNode | - | 5.7.0 |
| imageRender | 自定义预览内容 | (originalNode: React.ReactElement, info: { transform: [TransformType](#transformtype), current: number }) => React.ReactNode | - | 5.7.0 |
| onTransform | 预览图 transform 变化的回调 | { transform: [TransformType](#transformtype), action: [TransformAction](#transformaction) } | - | 5.7.0 |
| onChange | 切换预览图的回调 | (current: number, prevCurrent: number) => void | - | 5.3.0 |
| onVisibleChange | 当 `visible` 发生改变时的回调 | (visible: boolean, prevVisible: boolean, current: number) => void | - | current 参数 5.3.0 |

### ant-design 的 Image - Image 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alt | 图像描述 | string | - | 4.6.0 |
| fallback | 加载失败容错地址 | string | - | 4.6.0 |
| height | 图像高度 | string \| number | - | 4.6.0 |
| placeholder | 加载占位，为 `true` 时使用默认占位 | ReactNode | - | 4.6.0 |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [PreviewType](#previewtype) | true | 4.6.0 [PreviewType](#previewyype):4.7.0 |
| src | 图片地址 | string | - | 4.6.0 |
| width | 图像宽度 | string \| number | - | 4.6.0 |
| onError | 加载错误回调 | (event: Event) => void | - | 4.12.0 |

### ant-design 的 Image - PreviewType 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 | boolean | - | - |
| src | 自定义预览 src | string | - | 4.10.0 |
| getContainer | 指定预览挂载的节点，但依旧为全屏展示，false 为挂载在当前位置 | string \| HTMLElement \| (() => HTMLElement) \| false | - | 4.8.0 |
| movable | 是否可移动 | boolean | true | 5.8.0 |
| mask | 缩略图遮罩 | ReactNode | - | 4.9.0 |
| maskClassName | 缩略图遮罩类名 | string | - | 4.11.0 |
| rootClassName | 预览图的根 DOM 类名 | string | - | 5.4.0 |
| scaleStep | `1 + scaleStep` 为缩放放大的每步倍数 | number | 0.5 | - |
| minScale | 最小缩放倍数 | number | 1 | 5.7.0 |
| maxScale | 最大放大倍数 | number | 50 | 5.7.0 |
| closeIcon | 自定义关闭 Icon | React.ReactNode | - | 5.7.0 |
| forceRender | 强制渲染预览图 | boolean | - | - |
| toolbarRender | 自定义工具栏 | (originalNode: React.ReactElement, info: Omit<[ToolbarRenderInfoType](#toolbarrenderinfotype), 'current' \| 'total'>) => React.ReactNode | - | 5.7.0 |
| imageRender | 自定义预览内容 | (originalNode: React.ReactElement, info: { transform: [TransformType](#transformtype) }) => React.ReactNode | - | 5.7.0 |
| onTransform | 预览图 transform 变化的回调 | { transform: [TransformType](#transformtype), action: [TransformAction](#transformaction) } | - | 5.7.0 |
| onVisibleChange | 当 `visible` 发生改变时的回调 | (visible: boolean, prevVisible: boolean) => void | - | - |

### ant-design 的 Image - PreviewGroup 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [PreviewGroupType](#previewgrouptype) | true | 4.6.0 [PreviewGroupType](#previewgrouptype):4.7.0 |
| items | 预览数组 | string[] \| { src: string, crossOrigin: string, ... }[] | - | 5.7.0 |
| fallback | 加载失败容错地址 | string | - | 5.7.0 |

### ant-design 的 Image - PreviewGroupType 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 | boolean | - | - |
| getContainer | 指定预览挂载的节点，但依旧为全屏展示，false 为挂载在当前位置 | string \| HTMLElement \| (() => HTMLElement) \| false | - | 4.8.0 |
| movable | 是否可移动 | boolean | true | 5.8.0 |
| current | 当前预览图的 index | number | - | 4.12.0 |
| mask | 缩略图遮罩 | ReactNode | - | 4.9.0 |
| maskClassName | 缩略图遮罩类名 | string | - | 4.11.0 |
| rootClassName | 预览图的根 DOM 类名 | string | - | 5.4.0 |
| scaleStep | `1 + scaleStep` 为缩放放大的每步倍数 | number | 0.5 | - |
| minScale | 最小缩放倍数 | number | 1 | 5.7.0 |
| maxScale | 最大放大倍数 | number | 50 | 5.7.0 |
| closeIcon | 自定义关闭 Icon | React.ReactNode | - | 5.7.0 |
| forceRender | 强制渲染预览图 | boolean | - | - |
| countRender | 自定义预览计数内容 | (current: number, total: number) => React.ReactNode | - | 4.20.0 |
| toolbarRender | 自定义工具栏 | (originalNode: React.ReactElement, info: [ToolbarRenderInfoType](#toolbarrenderinfotype)) => React.ReactNode | - | 5.7.0 |
| imageRender | 自定义预览内容 | (originalNode: React.ReactElement, info: { transform: [TransformType](#transformtype), current: number }) => React.ReactNode | - | 5.7.0 |
| onTransform | 预览图 transform 变化的回调 | { transform: [TransformType](#transformtype), action: [TransformAction](#transformaction) } | - | 5.7.0 |
| onChange | 切换预览图的回调 | (current: number, prevCurrent: number) => void | - | 5.3.0 |
| onVisibleChange | 当 `visible` 发生改变时的回调 | (visible: boolean, prevVisible: boolean, current: number) => void | - | current 参数 5.3.0 |

## ant-design 的 Icon 有哪些配置？

#### Icon - 通用图标

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 设置图标的样式名 | string | - |
| rotate | 图标旋转角度（IE9 无效） | number | - |
| spin | 是否有旋转动画 | boolean | false |
| style | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | - |
| twoToneColor | 仅适用双色图标。设置双色图标的主要颜色 | string (十六进制颜色) | - |

#### Icon - 自定义 Icon

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| component | 控制如何渲染图标，通常是一个渲染根标签为 `<svg>` 的 React 组件 | ComponentType<CustomIconComponentProps> | - |
| rotate | 图标旋转角度（IE9 无效） | number | - |
| spin | 是否有旋转动画 | boolean | false |
| style | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | - |

#### Icon - 自定义 font 图标

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extraCommonProps | 给所有的 `svg` 图标 `<Icon />` 组件设置额外的属性 | { [key: string]: any } | {} |
| scriptUrl | string \| string[] | - |

#### Icon - 自定义 SVG 图标

| 字段      | 说明                    | 类型             | 只读值         |
| --------- | ----------------------- | ---------------- | -------------- |
| className | 计算后的 `svg` 类名     | string           | -              |
| fill      | `svg` 元素填充的颜色    | string           | `currentColor` |
| height    | `svg` 元素高度          | string \| number | `1em`          |
| style     | 计算后的 `svg` 元素样式 | CSSProperties    | -              |
| width     | `svg` 元素宽度          | string \| number | `1em`          |

### ant-design 的 Icon - 通用图标 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 设置图标的样式名 | string | - |
| rotate | 图标旋转角度（IE9 无效） | number | - |
| spin | 是否有旋转动画 | boolean | false |
| style | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | - |
| twoToneColor | 仅适用双色图标。设置双色图标的主要颜色 | string (十六进制颜色) | - |

### ant-design 的 Icon - 自定义 Icon 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| component | 控制如何渲染图标，通常是一个渲染根标签为 `<svg>` 的 React 组件 | ComponentType<CustomIconComponentProps> | - |
| rotate | 图标旋转角度（IE9 无效） | number | - |
| spin | 是否有旋转动画 | boolean | false |
| style | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | - |

### ant-design 的 Icon - 自定义 font 图标 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extraCommonProps | 给所有的 `svg` 图标 `<Icon />` 组件设置额外的属性 | { [key: string]: any } | {} |
| scriptUrl | string \| string[] | - |

### ant-design 的 Icon - 自定义 SVG 图标 有哪些配置？

| 字段      | 说明                    | 类型             | 只读值         |
| --------- | ----------------------- | ---------------- | -------------- |
| className | 计算后的 `svg` 类名     | string           | -              |
| fill      | `svg` 元素填充的颜色    | string           | `currentColor` |
| height    | `svg` 元素高度          | string \| number | `1em`          |
| style     | 计算后的 `svg` 元素样式 | CSSProperties    | -              |
| width     | `svg` 元素宽度          | string \| number | `1em`          |

## ant-design 的 Grid 有哪些配置？

#### Grid - Row

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 垂直对齐方式 | `top` \| `middle` \| `bottom` \| `stretch` \| `{[key in 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl']: 'top' \| 'middle' \| 'bottom' \| 'stretch'}` | `top` | object: 4.24.0 |
| gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | number \| object \| array | 0 |
| justify | 水平排列方式 | `start` \| `end` \| `center` \| `space-around` \| `space-between` \| `space-evenly` \| `{[key in 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl']: 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'}` | `start` | object: 4.24.0 |
| wrap | 是否自动换行 | boolean | true | 4.8.0 |

#### Grid - Col

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| flex | flex 布局属性 | string \| number | - |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | number | 0 |
| order | 栅格顺序 | number | 0 |
| pull | 栅格向左移动格数 | number | 0 |
| push | 栅格向右移动格数 | number | 0 |
| span | 栅格占位格数，为 0 时相当于 `display: none` | number | - |
| xs | `屏幕 < 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |
| sm | `屏幕 ≥ 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |
| md | `屏幕 ≥ 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |
| lg | `屏幕 ≥ 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |
| xl | `屏幕 ≥ 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |
| xxl | `屏幕 ≥ 1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |

### ant-design 的 Grid - Row 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 垂直对齐方式 | `top` \| `middle` \| `bottom` \| `stretch` \| `{[key in 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl']: 'top' \| 'middle' \| 'bottom' \| 'stretch'}` | `top` | object: 4.24.0 |
| gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | number \| object \| array | 0 |
| justify | 水平排列方式 | `start` \| `end` \| `center` \| `space-around` \| `space-between` \| `space-evenly` \| `{[key in 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl']: 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'}` | `start` | object: 4.24.0 |
| wrap | 是否自动换行 | boolean | true | 4.8.0 |

### ant-design 的 Grid - Col 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| flex | flex 布局属性 | string \| number | - |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | number | 0 |
| order | 栅格顺序 | number | 0 |
| pull | 栅格向左移动格数 | number | 0 |
| push | 栅格向右移动格数 | number | 0 |
| span | 栅格占位格数，为 0 时相当于 `display: none` | number | - |
| xs | `屏幕 < 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |
| sm | `屏幕 ≥ 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |
| md | `屏幕 ≥ 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |
| lg | `屏幕 ≥ 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |
| xl | `屏幕 ≥ 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |
| xxl | `屏幕 ≥ 1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | - |

## ant-design 的 Form 有哪些配置？

#### Form - Form

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| colon | 配置 Form.Item 的 `colon` 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效) | boolean | true |
| disabled | 设置表单组件禁用，仅对 antd 组件有效 | boolean | false | 4.21.0 |
| component | 设置 Form 渲染元素，为 `false` 则不创建 DOM 节点 | ComponentType \| false | form |
| fields | 通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。查看[示例](#components-form-demo-global-state) | - |
| form | 经 `Form.useForm()` 创建的 form 控制实例，不提供时会自动创建 | - |
| feedbackIcons | 当 `Form.Item` 有 `hasFeedback` 属性时可以自定义图标 | - | 5.9.0 |
| initialValues | 表单默认值，只有初始化以及重置时生效 | object | - |
| labelAlign | label 标签的文本对齐方式 | `left` \| `right` | `right` |
| labelWrap | label 标签的文本换行方式 | boolean | false | 4.18.0 |
| labelCol | label 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}` | - |
| layout | 表单布局 | `horizontal` \| `vertical` \| `inline` | `horizontal` |
| name | 表单名称，会作为表单字段 `id` 前缀使用 | string | - |
| preserve | 当字段被删除时保留字段值。你可以通过 `getFieldsValue(true)` 来获取保留字段值 | boolean | true | 4.4.0 |
| requiredMark | 必选样式，可以切换为必选或者可选展示样式。此为 Form 配置，Form.Item 无法单独配置 | boolean \| `optional` \| ((label: ReactNode, info: { required: boolean }) => ReactNode) | true | `renderProps`: 5.9.0 |
| scrollToFirstError | 提交失败自动滚动到第一个错误字段 | boolean \| [Options](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options) | false |
| size | 设置字段组件的尺寸（仅限 antd 组件） | `small` \| `middle` \| `large` | - |
| validateMessages | 验证提示模板，说明[见下](#validatemessages) | - |
| validateTrigger | 统一设置字段触发验证的时机 | string \| string[] | `onChange` | 4.3.0 |
| variant | 表单内控件变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | - |
| onFieldsChange | 字段更新时触发回调事件 | function(changedFields, allFields) | - |
| onFinish | 提交表单且数据验证成功后回调事件 | function(values) | - |
| onFinishFailed | 提交表单且数据验证失败后回调事件 | function({ values, errorFields, outOfDate }) | - |
| onValuesChange | 字段值更新时触发回调事件 | function(changedValues, allValues) | - |

#### Form - Form.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| colon | 配合 `label` 属性使用，表示是否显示 `label` 后面的冒号 | boolean | true |
| dependencies | 设置依赖字段，说明[见下](#dependencies) | - |
| extra | 额外的提示信息，和 `help` 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 | ReactNode | - |
| getValueFromEvent | 设置如何将 event 的值转换成字段值 | (..args: any[]) => any | - |
| getValueProps | 为子元素添加额外的属性 (不建议通过 `getValueProps` 生成动态函数 prop，请直接将其传递给子组件) | (value: any) => Record<string, any> | - | 4.2.0 |
| hasFeedback | 配合 `validateStatus` 属性使用，展示校验状态图标，建议只配合 Input 组件使用 此外，它还可以通过 Icons 属性获取反馈图标。 | boolean \| { icons: [FeedbackIcons](#feedbackicons) } | false | icons: 5.9.0 |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | ReactNode | - |
| hidden | 是否隐藏字段（依然会收集和校验字段） | boolean | false | 4.4.0 |
| htmlFor | 设置子元素 label `htmlFor` 属性 | string | - |
| initialValue | 设置子元素默认值，如果与 Form 的 `initialValues` 冲突则以 Form 为准 | string | - | 4.2.0 |
| label | `label` 标签的文本 | ReactNode | - |
| labelAlign | 标签文本对齐方式 | `left` \| `right` | `right` |
| labelCol | `label` 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}`。你可以通过 Form 的 `labelCol` 进行统一设置，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准 | - |
| messageVariables | 默认验证字段的信息 | Record<string, string> | - | 4.7.0 |
| name | 字段名，支持数组 | - |
| normalize | 组件获取值后进行转换，再放入 Form 中。不支持异步 | (value, prevValue, prevValues) => any | - |
| noStyle | 为 `true` 时不带样式，作为纯字段控件使用。当自身没有 `validateStatus` 而父元素存在有 `validateStatus` 的 Form.Item 会继承父元素的 `validateStatus` | boolean | false |
| preserve | 当字段被删除时保留字段值 | boolean | true | 4.4.0 |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | boolean | false |
| rules | 校验规则，设置字段的校验逻辑。点击[此处](#components-form-demo-basic)查看示例 | - |
| shouldUpdate | 自定义字段更新逻辑，说明[见下](#shouldupdate) | boolean \| (prevValue, curValue) => boolean | false |
| tooltip | 配置提示信息 | ReactNode \| [TooltipProps & { icon: ReactNode }](/components/tooltip-cn#api) | - | 4.7.0 |
| trigger | 设置收集字段值变更的时机。点击[此处](#components-form-demo-customized-form-controls)查看示例 | string | `onChange` |
| validateFirst | 当某一规则校验不通过时，是否停止剩下的规则的校验。设置 `parallel` 时会并行校验 | boolean \| `parallel` | false | `parallel`: 4.5.0 |
| validateDebounce | 设置防抖，延迟毫秒数后进行校验 | number | - | 5.9.0 |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating' | string | - |
| validateTrigger | 设置字段校验的时机 | string \| string[] | `onChange` |
| valuePropName | 子节点的值的属性，如 Switch、Checkbox 的是 `checked`。该属性为 `getValueProps` 的封装，自定义 `getValueProps` 后会失效 | string | `value` |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 `labelCol`。你可以通过 Form 的 `wrapperCol` 进行统一设置，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准 | - |

#### Form - Form.List

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| children | 渲染函数 | (fields: Field[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode | - |
| initialValue | 设置子元素默认值，如果与 Form 的 `initialValues` 冲突则以 Form 为准 | any[] | - | 4.9.0 |
| name | 字段名，支持数组。List 本身也是字段，因而 `getFieldsValue()` 默认会返回 List 下所有值，你可以通过[参数](#getfieldsvalue)改变这一行为 | - |
| rules | 校验规则，仅支持自定义规则。需要配合 [ErrorList](#formerrorlist) 一同使用。 | { validator, message }[] | - | 4.7.0 |

#### Form - operation

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| add | 新增表单项 | (defaultValue?: any, insertIndex?: number) => void | insertIndex | 4.6.0 |
| move | 移动表单项 | (from: number, to: number) => void | - |
| remove | 删除表单项 | (index: number \| number[]) => void | number[] | 4.5.0 |

#### Form - Form.ErrorList

| 参数   | 说明     | 类型        | 默认值 |
| ------ | -------- | ----------- | ------ |
| errors | 错误列表 | ReactNode[] | -      |

#### Form - Form.Provider

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onFormChange | 子表单字段更新时触发 | function(formName: string, info: { changedFields, forms }) | - |
| onFormFinish | 子表单提交时触发 | function(formName: string, info: { values, forms }) | - |

#### Form - FormInstance

| 名称 | 说明 | 类型 |
| --- | --- | --- | --- |
| getFieldError | 获取对应字段名的错误信息 | (name: [NamePath](#namepath)) => string[] |
| getFieldInstance | 获取对应字段实例 | (name: [NamePath](#namepath)) => any | 4.4.0 |
| getFieldsError | 获取一组字段名对应的错误信息，返回为数组形式 | (nameList?: [NamePath](#namepath)\[]) => FieldError[] |
| getFieldsValue | 获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 `getFieldsValue(true)` 时返回所有值 |
| getFieldValue | 获取对应字段名的值 | (name: [NamePath](#namepath)) => any |
| isFieldsTouched | 检查一组字段是否被用户操作过，`allTouched` 为 `true` 时检查是否所有字段都被操作过 | (nameList?: [NamePath](#namepath)\[], allTouched?: boolean) => boolean |
| isFieldTouched | 检查对应字段是否被用户操作过 | (name: [NamePath](#namepath)) => boolean |
| isFieldValidating | 检查对应字段是否正在校验 | (name: [NamePath](#namepath)) => boolean |
| resetFields | 重置一组字段到 `initialValues` | (fields?: [NamePath](#namepath)\[]) => void |
| scrollToField | 滚动到对应字段位置 | (name: [NamePath](#namepath), options: [ScrollOptions](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options)) => void |
| setFields | 设置一组字段状态 | (fields: [FieldData](#fielddata)\[]) => void |
| setFieldValue | 设置表单的值（该值将直接传入 form store 中并且**重置错误信息**。如果你不希望传入对象被修改，请克隆后传入） | (name: [NamePath](#namepath), value: any) => void | 4.22.0 |
| setFieldsValue | 设置表单的值（该值将直接传入 form store 中并且**重置错误信息**。如果你不希望传入对象被修改，请克隆后传入）。如果你只想修改 Form.List 中单项值，请通过 `setFieldValue` 进行指定 | (values) => void |
| submit | 提交表单，与点击 `submit` 按钮效果相同 | () => void |
| validateFields | 触发表单验证，设置 `recursive` 时会递归校验所有包含的路径 | (nameList?: [NamePath](#namepath)\[], config?: [ValidateConfig](#validateFields)) => Promise |

#### Form - FieldData

| 名称       | 说明             | 类型     |
| ---------- | ---------------- | -------- |
| errors     | 错误信息         | string[] |
| warnings   | 警告信息         | string[] |
| name       | 字段名称         |
| touched    | 是否被用户操作过 | boolean  |
| validating | 是否正在校验     | boolean  |
| value      | 字段对应值       | any      |

#### Form - Rule

| 名称 | 说明 |
| --- | --- | --- | --- |
| defaultField | 仅在 `type` 为 `array` 类型时有效，用于指定数组元素的校验规则 |
| enum | 是否匹配枚举中的值（需要将 `type` 设置为 `enum`） | any[] |
| fields | 仅在 `type` 为 `array` 或 `object` 类型时有效，用于指定子元素的校验规则 | Record<string, [rule](#rule)\> |
| len | string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度 | number |
| max | 必须设置 `type`：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度 | number |
| message | 错误信息，不设置时会通过[模板](#validatemessages)自动生成 | string |
| min | 必须设置 `type`：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度 | number |
| pattern | 正则表达式匹配 | RegExp |
| required | 是否为必选字段 | boolean |
| transform | 将字段值转换成目标值后进行校验 | (value) => any |
| type | 类型，常见有 `string` \|`number` \|`boolean` \|`url` \| `email`。更多请参考[此处](https://github.com/yiminghe/async-validator#type) | string |
| validateTrigger | 设置触发验证时机，必须是 Form.Item 的 `validateTrigger` 的子集 | string \| string[] |
| validator | 自定义校验，接收 Promise 作为返回值。[示例](#components-form-demo-register)参考 | ([rule](#rule), value) => Promise |
| warningOnly | 仅警告，不阻塞表单提交 | boolean | 4.17.0 |
| whitespace | 如果字段仅包含空格则校验不通过，只在 `type: 'string'` 时生效 | boolean |

#### Form - WatchOptions

| 名称 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| form | 指定 Form 实例 | FormInstance | 当前 context 中的 Form | 5.4.0 |
| preserve | 是否监视没有对应的 `Form.Item` 的字段 | boolean | false | 5.4.0 |

### ant-design 的 Form - Form 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| colon | 配置 Form.Item 的 `colon` 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效) | boolean | true |
| disabled | 设置表单组件禁用，仅对 antd 组件有效 | boolean | false | 4.21.0 |
| component | 设置 Form 渲染元素，为 `false` 则不创建 DOM 节点 | ComponentType \| false | form |
| fields | 通过状态管理（如 redux）控制表单字段，如非强需求不推荐使用。查看[示例](#components-form-demo-global-state) | - |
| form | 经 `Form.useForm()` 创建的 form 控制实例，不提供时会自动创建 | - |
| feedbackIcons | 当 `Form.Item` 有 `hasFeedback` 属性时可以自定义图标 | - | 5.9.0 |
| initialValues | 表单默认值，只有初始化以及重置时生效 | object | - |
| labelAlign | label 标签的文本对齐方式 | `left` \| `right` | `right` |
| labelWrap | label 标签的文本换行方式 | boolean | false | 4.18.0 |
| labelCol | label 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}` | - |
| layout | 表单布局 | `horizontal` \| `vertical` \| `inline` | `horizontal` |
| name | 表单名称，会作为表单字段 `id` 前缀使用 | string | - |
| preserve | 当字段被删除时保留字段值。你可以通过 `getFieldsValue(true)` 来获取保留字段值 | boolean | true | 4.4.0 |
| requiredMark | 必选样式，可以切换为必选或者可选展示样式。此为 Form 配置，Form.Item 无法单独配置 | boolean \| `optional` \| ((label: ReactNode, info: { required: boolean }) => ReactNode) | true | `renderProps`: 5.9.0 |
| scrollToFirstError | 提交失败自动滚动到第一个错误字段 | boolean \| [Options](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options) | false |
| size | 设置字段组件的尺寸（仅限 antd 组件） | `small` \| `middle` \| `large` | - |
| validateMessages | 验证提示模板，说明[见下](#validatemessages) | - |
| validateTrigger | 统一设置字段触发验证的时机 | string \| string[] | `onChange` | 4.3.0 |
| variant | 表单内控件变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | - |
| onFieldsChange | 字段更新时触发回调事件 | function(changedFields, allFields) | - |
| onFinish | 提交表单且数据验证成功后回调事件 | function(values) | - |
| onFinishFailed | 提交表单且数据验证失败后回调事件 | function({ values, errorFields, outOfDate }) | - |
| onValuesChange | 字段值更新时触发回调事件 | function(changedValues, allValues) | - |

### ant-design 的 Form - Form.Item 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| colon | 配合 `label` 属性使用，表示是否显示 `label` 后面的冒号 | boolean | true |
| dependencies | 设置依赖字段，说明[见下](#dependencies) | - |
| extra | 额外的提示信息，和 `help` 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 | ReactNode | - |
| getValueFromEvent | 设置如何将 event 的值转换成字段值 | (..args: any[]) => any | - |
| getValueProps | 为子元素添加额外的属性 (不建议通过 `getValueProps` 生成动态函数 prop，请直接将其传递给子组件) | (value: any) => Record<string, any> | - | 4.2.0 |
| hasFeedback | 配合 `validateStatus` 属性使用，展示校验状态图标，建议只配合 Input 组件使用 此外，它还可以通过 Icons 属性获取反馈图标。 | boolean \| { icons: [FeedbackIcons](#feedbackicons) } | false | icons: 5.9.0 |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | ReactNode | - |
| hidden | 是否隐藏字段（依然会收集和校验字段） | boolean | false | 4.4.0 |
| htmlFor | 设置子元素 label `htmlFor` 属性 | string | - |
| initialValue | 设置子元素默认值，如果与 Form 的 `initialValues` 冲突则以 Form 为准 | string | - | 4.2.0 |
| label | `label` 标签的文本 | ReactNode | - |
| labelAlign | 标签文本对齐方式 | `left` \| `right` | `right` |
| labelCol | `label` 标签布局，同 `<Col>` 组件，设置 `span` `offset` 值，如 `{span: 3, offset: 12}` 或 `sm: {span: 3, offset: 12}`。你可以通过 Form 的 `labelCol` 进行统一设置，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准 | - |
| messageVariables | 默认验证字段的信息 | Record<string, string> | - | 4.7.0 |
| name | 字段名，支持数组 | - |
| normalize | 组件获取值后进行转换，再放入 Form 中。不支持异步 | (value, prevValue, prevValues) => any | - |
| noStyle | 为 `true` 时不带样式，作为纯字段控件使用。当自身没有 `validateStatus` 而父元素存在有 `validateStatus` 的 Form.Item 会继承父元素的 `validateStatus` | boolean | false |
| preserve | 当字段被删除时保留字段值 | boolean | true | 4.4.0 |
| required | 必填样式设置。如不设置，则会根据校验规则自动生成 | boolean | false |
| rules | 校验规则，设置字段的校验逻辑。点击[此处](#components-form-demo-basic)查看示例 | - |
| shouldUpdate | 自定义字段更新逻辑，说明[见下](#shouldupdate) | boolean \| (prevValue, curValue) => boolean | false |
| tooltip | 配置提示信息 | ReactNode \| [TooltipProps & { icon: ReactNode }](/components/tooltip-cn#api) | - | 4.7.0 |
| trigger | 设置收集字段值变更的时机。点击[此处](#components-form-demo-customized-form-controls)查看示例 | string | `onChange` |
| validateFirst | 当某一规则校验不通过时，是否停止剩下的规则的校验。设置 `parallel` 时会并行校验 | boolean \| `parallel` | false | `parallel`: 4.5.0 |
| validateDebounce | 设置防抖，延迟毫秒数后进行校验 | number | - | 5.9.0 |
| validateStatus | 校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating' | string | - |
| validateTrigger | 设置字段校验的时机 | string \| string[] | `onChange` |
| valuePropName | 子节点的值的属性，如 Switch、Checkbox 的是 `checked`。该属性为 `getValueProps` 的封装，自定义 `getValueProps` 后会失效 | string | `value` |
| wrapperCol | 需要为输入控件设置布局样式时，使用该属性，用法同 `labelCol`。你可以通过 Form 的 `wrapperCol` 进行统一设置，不会作用于嵌套 Item。当和 Form 同时设置时，以 Item 为准 | - |

### ant-design 的 Form - Form.List 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| children | 渲染函数 | (fields: Field[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode | - |
| initialValue | 设置子元素默认值，如果与 Form 的 `initialValues` 冲突则以 Form 为准 | any[] | - | 4.9.0 |
| name | 字段名，支持数组。List 本身也是字段，因而 `getFieldsValue()` 默认会返回 List 下所有值，你可以通过[参数](#getfieldsvalue)改变这一行为 | - |
| rules | 校验规则，仅支持自定义规则。需要配合 [ErrorList](#formerrorlist) 一同使用。 | { validator, message }[] | - | 4.7.0 |

### ant-design 的 Form - operation 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| add | 新增表单项 | (defaultValue?: any, insertIndex?: number) => void | insertIndex | 4.6.0 |
| move | 移动表单项 | (from: number, to: number) => void | - |
| remove | 删除表单项 | (index: number \| number[]) => void | number[] | 4.5.0 |

### ant-design 的 Form - Form.ErrorList 有哪些配置？

| 参数   | 说明     | 类型        | 默认值 |
| ------ | -------- | ----------- | ------ |
| errors | 错误列表 | ReactNode[] | -      |

### ant-design 的 Form - Form.Provider 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onFormChange | 子表单字段更新时触发 | function(formName: string, info: { changedFields, forms }) | - |
| onFormFinish | 子表单提交时触发 | function(formName: string, info: { values, forms }) | - |

### ant-design 的 Form - FormInstance 有哪些配置？

| 名称 | 说明 | 类型 |
| --- | --- | --- | --- |
| getFieldError | 获取对应字段名的错误信息 | (name: [NamePath](#namepath)) => string[] |
| getFieldInstance | 获取对应字段实例 | (name: [NamePath](#namepath)) => any | 4.4.0 |
| getFieldsError | 获取一组字段名对应的错误信息，返回为数组形式 | (nameList?: [NamePath](#namepath)\[]) => FieldError[] |
| getFieldsValue | 获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 `getFieldsValue(true)` 时返回所有值 |
| getFieldValue | 获取对应字段名的值 | (name: [NamePath](#namepath)) => any |
| isFieldsTouched | 检查一组字段是否被用户操作过，`allTouched` 为 `true` 时检查是否所有字段都被操作过 | (nameList?: [NamePath](#namepath)\[], allTouched?: boolean) => boolean |
| isFieldTouched | 检查对应字段是否被用户操作过 | (name: [NamePath](#namepath)) => boolean |
| isFieldValidating | 检查对应字段是否正在校验 | (name: [NamePath](#namepath)) => boolean |
| resetFields | 重置一组字段到 `initialValues` | (fields?: [NamePath](#namepath)\[]) => void |
| scrollToField | 滚动到对应字段位置 | (name: [NamePath](#namepath), options: [ScrollOptions](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options)) => void |
| setFields | 设置一组字段状态 | (fields: [FieldData](#fielddata)\[]) => void |
| setFieldValue | 设置表单的值（该值将直接传入 form store 中并且**重置错误信息**。如果你不希望传入对象被修改，请克隆后传入） | (name: [NamePath](#namepath), value: any) => void | 4.22.0 |
| setFieldsValue | 设置表单的值（该值将直接传入 form store 中并且**重置错误信息**。如果你不希望传入对象被修改，请克隆后传入）。如果你只想修改 Form.List 中单项值，请通过 `setFieldValue` 进行指定 | (values) => void |
| submit | 提交表单，与点击 `submit` 按钮效果相同 | () => void |
| validateFields | 触发表单验证，设置 `recursive` 时会递归校验所有包含的路径 | (nameList?: [NamePath](#namepath)\[], config?: [ValidateConfig](#validateFields)) => Promise |

### ant-design 的 Form - FieldData 有哪些配置？

| 名称       | 说明             | 类型     |
| ---------- | ---------------- | -------- |
| errors     | 错误信息         | string[] |
| warnings   | 警告信息         | string[] |
| name       | 字段名称         |
| touched    | 是否被用户操作过 | boolean  |
| validating | 是否正在校验     | boolean  |
| value      | 字段对应值       | any      |

### ant-design 的 Form - Rule 有哪些配置？

| 名称 | 说明 |
| --- | --- | --- | --- |
| defaultField | 仅在 `type` 为 `array` 类型时有效，用于指定数组元素的校验规则 |
| enum | 是否匹配枚举中的值（需要将 `type` 设置为 `enum`） | any[] |
| fields | 仅在 `type` 为 `array` 或 `object` 类型时有效，用于指定子元素的校验规则 | Record<string, [rule](#rule)\> |
| len | string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度 | number |
| max | 必须设置 `type`：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度 | number |
| message | 错误信息，不设置时会通过[模板](#validatemessages)自动生成 | string |
| min | 必须设置 `type`：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度 | number |
| pattern | 正则表达式匹配 | RegExp |
| required | 是否为必选字段 | boolean |
| transform | 将字段值转换成目标值后进行校验 | (value) => any |
| type | 类型，常见有 `string` \|`number` \|`boolean` \|`url` \| `email`。更多请参考[此处](https://github.com/yiminghe/async-validator#type) | string |
| validateTrigger | 设置触发验证时机，必须是 Form.Item 的 `validateTrigger` 的子集 | string \| string[] |
| validator | 自定义校验，接收 Promise 作为返回值。[示例](#components-form-demo-register)参考 | ([rule](#rule), value) => Promise |
| warningOnly | 仅警告，不阻塞表单提交 | boolean | 4.17.0 |
| whitespace | 如果字段仅包含空格则校验不通过，只在 `type: 'string'` 时生效 | boolean |

### ant-design 的 Form - WatchOptions 有哪些配置？

| 名称 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| form | 指定 Form 实例 | FormInstance | 当前 context 中的 Form | 5.4.0 |
| preserve | 是否监视没有对应的 `Form.Item` 的字段 | boolean | false | 5.4.0 |

## ant-design 的 Float-button 有哪些配置？

#### Float-button - 共同的 API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 自定义图标 | ReactNode | - |
| description | 文字及其它内容 | ReactNode | - |
| tooltip | 气泡卡片的内容 | ReactNode \| () => ReactNode | - |
| type | 设置按钮类型 | `default` \| `primary` | `default` |
| shape | 设置按钮形状 | `circle` \| `square` | `circle` |
| onClick | 点击按钮时的回调 | (event) => void | - |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |
| target | 相当于 a 标签的 target 属性，href 存在时生效 | string | - |
| badge | 带徽标数字的悬浮按钮（不支持 `status` 以及相关属性） | - | 5.4.0 |

#### Float-button - FloatButton.Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| shape | 设置包含的 FloatButton 按钮形状 | `circle` \| `square` | `circle` |
| trigger | 触发方式（有触发方式为菜单模式） | `click` \| `hover` | - |
| open | 受控展开，需配合 trigger 一起使用 | boolean | - |
| onOpenChange | 展开收起时的回调，需配合 trigger 一起使用 | (open: boolean) => void | - |

#### Float-button - FloatButton.BackTop

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| duration | 回到顶部所需时间（ms） | number | 450 |
| target | 设置需要监听其滚动事件的元素 | () => HTMLElement | () => window |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop | number | 400 |
| onClick | 点击按钮的回调函数 | () => void | - |

### ant-design 的 Float-button - 共同的 API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 自定义图标 | ReactNode | - |
| description | 文字及其它内容 | ReactNode | - |
| tooltip | 气泡卡片的内容 | ReactNode \| () => ReactNode | - |
| type | 设置按钮类型 | `default` \| `primary` | `default` |
| shape | 设置按钮形状 | `circle` \| `square` | `circle` |
| onClick | 点击按钮时的回调 | (event) => void | - |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |
| target | 相当于 a 标签的 target 属性，href 存在时生效 | string | - |
| badge | 带徽标数字的悬浮按钮（不支持 `status` 以及相关属性） | - | 5.4.0 |

### ant-design 的 Float-button - FloatButton.Group 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| shape | 设置包含的 FloatButton 按钮形状 | `circle` \| `square` | `circle` |
| trigger | 触发方式（有触发方式为菜单模式） | `click` \| `hover` | - |
| open | 受控展开，需配合 trigger 一起使用 | boolean | - |
| onOpenChange | 展开收起时的回调，需配合 trigger 一起使用 | (open: boolean) => void | - |

### ant-design 的 Float-button - FloatButton.BackTop 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| duration | 回到顶部所需时间（ms） | number | 450 |
| target | 设置需要监听其滚动事件的元素 | () => HTMLElement | () => window |
| visibilityHeight | 滚动高度达到此参数值才出现 BackTop | number | 400 |
| onClick | 点击按钮的回调函数 | () => void | - |

## ant-design 的 Flex 有哪些配置？

#### Flex - API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| vertical | flex 主轴的方向是否垂直，使用 `flex-direction: column` | boolean | `false` |
| wrap | 设置元素单行显示还是多行显示 | 参考 [flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap) | nowrap |
| justify | 设置元素在主轴方向上的对齐方式 | 参考 [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) | normal |
| align | 设置元素在交叉轴方向上的对齐方式 | 参考 [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) | normal |
| flex | flex CSS 简写属性 | 参考 [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) | normal |
| gap | 设置网格之间的间隙 | `small` \| `middle` \| `large` \| string \| number | - |
| component | 自定义元素类型 | React.ComponentType | `div` |

### ant-design 的 Flex - API 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| vertical | flex 主轴的方向是否垂直，使用 `flex-direction: column` | boolean | `false` |
| wrap | 设置元素单行显示还是多行显示 | 参考 [flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap) | nowrap |
| justify | 设置元素在主轴方向上的对齐方式 | 参考 [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) | normal |
| align | 设置元素在交叉轴方向上的对齐方式 | 参考 [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) | normal |
| flex | flex CSS 简写属性 | 参考 [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex) | normal |
| gap | 设置网格之间的间隙 | `small` \| `middle` \| `large` \| string \| number | - |
| component | 自定义元素类型 | React.ComponentType | `div` |

## ant-design 的 Empty 有哪些配置？

#### Empty - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 自定义描述内容 | ReactNode | - |
| image | 设置显示图片，为 string 时表示自定义图片地址。 | ReactNode | `Empty.PRESENTED_IMAGE_DEFAULT` |
| imageStyle | 图片样式 | CSSProperties | - |

### ant-design 的 Empty - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 自定义描述内容 | ReactNode | - |
| image | 设置显示图片，为 string 时表示自定义图片地址。 | ReactNode | `Empty.PRESENTED_IMAGE_DEFAULT` |
| imageStyle | 图片样式 | CSSProperties | - |

## ant-design 的 Dropdown 有哪些配置？

#### Dropdown - Dropdown

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| arrow | 下拉框箭头是否显示 | boolean \| { pointAtCenter: boolean } | false |
| autoAdjustOverflow | 下拉框被遮挡时自动调整位置 | boolean | true | 5.2.0 |
| autoFocus | 打开后自动聚焦下拉框 | boolean | false | 4.21.0 |
| disabled | 菜单是否禁用 | boolean | - |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown | boolean | false |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - | 4.24.0 |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |
| menu | 菜单配置项 | - | 4.24.0 |
| overlayClassName | 下拉根元素的类名称 | string | - |
| overlayStyle | 下拉根元素的样式 | CSSProperties | - |
| placement | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | string | `bottomLeft` |
| trigger | 触发下拉的行为，移动端不支持 hover | Array<`click`\|`hover`\|`contextMenu`\> | \[`hover`] |
| open | 菜单是否显示，小于 4.23.0 使用 `visible`（[为什么?](/docs/react/faq#弹层类组件为什么要统一至-open-属性)） | boolean | - | 4.23.0 |
| onOpenChange | 菜单显示状态改变时调用，点击菜单按钮导致的消失不会触发。小于 4.23.0 使用 `onVisibleChange`（[为什么?](/docs/react/faq#弹层类组件为什么要统一至-open-属性)） | (open: boolean, info: { source: 'trigger' \| 'menu' }) => void | - | `info.source`: 5.11.0 |

#### Dropdown - Dropdown.Button

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| buttonsRender | 自定义左右两个按钮 | (buttons: ReactNode[]) => ReactNode[] | - |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | false |
| danger | 设置危险按钮 | boolean | - | 4.23.0 |
| icon | 右侧的 icon | ReactNode | - |
| size | 按钮大小，和 [Button](/components/button-cn#api) 一致 | string | `default` |
| type | 按钮类型，和 [Button](/components/button-cn#api) 一致 | string | `default` |
| onClick | 点击左侧按钮的回调，和 [Button](/components/button-cn#api) 一致 | (event) => void | - |

### ant-design 的 Dropdown - Dropdown 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| arrow | 下拉框箭头是否显示 | boolean \| { pointAtCenter: boolean } | false |
| autoAdjustOverflow | 下拉框被遮挡时自动调整位置 | boolean | true | 5.2.0 |
| autoFocus | 打开后自动聚焦下拉框 | boolean | false | 4.21.0 |
| disabled | 菜单是否禁用 | boolean | - |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown | boolean | false |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - | 4.24.0 |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |
| menu | 菜单配置项 | - | 4.24.0 |
| overlayClassName | 下拉根元素的类名称 | string | - |
| overlayStyle | 下拉根元素的样式 | CSSProperties | - |
| placement | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | string | `bottomLeft` |
| trigger | 触发下拉的行为，移动端不支持 hover | Array<`click`\|`hover`\|`contextMenu`\> | \[`hover`] |
| open | 菜单是否显示，小于 4.23.0 使用 `visible`（[为什么?](/docs/react/faq#弹层类组件为什么要统一至-open-属性)） | boolean | - | 4.23.0 |
| onOpenChange | 菜单显示状态改变时调用，点击菜单按钮导致的消失不会触发。小于 4.23.0 使用 `onVisibleChange`（[为什么?](/docs/react/faq#弹层类组件为什么要统一至-open-属性)） | (open: boolean, info: { source: 'trigger' \| 'menu' }) => void | - | `info.source`: 5.11.0 |

### ant-design 的 Dropdown - Dropdown.Button 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| buttonsRender | 自定义左右两个按钮 | (buttons: ReactNode[]) => ReactNode[] | - |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | false |
| danger | 设置危险按钮 | boolean | - | 4.23.0 |
| icon | 右侧的 icon | ReactNode | - |
| size | 按钮大小，和 [Button](/components/button-cn#api) 一致 | string | `default` |
| type | 按钮类型，和 [Button](/components/button-cn#api) 一致 | string | `default` |
| onClick | 点击左侧按钮的回调，和 [Button](/components/button-cn#api) 一致 | (event) => void | - |

## ant-design 的 Drawer 有哪些配置？

#### Drawer - API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 抽屉展开后是否将焦点切换至其 Dom 节点 | boolean | true | 4.17.0 |
| afterOpenChange | 切换抽屉时动画结束后的回调 | function(open) | - |
| className | Drawer 容器外层 className 设置，如果需要设置最外层，请使用 rootClassName | string | - |
| classNames | 配置抽屉内置模块的 className | `header?: string; body?: string; footer?: string; mask?: string; content?: string; wrapper?: string;` | - |
| styles | 配置抽屉内置模块的 style | `header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties; content?: CSSProperties; wrapper?: CSSProperties;` | - | 5.10.0 |
| closeIcon | 自定义关闭图标。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | boolean \| ReactNode | \<CloseOutlined /> |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | boolean | false |
| extra | 抽屉右上角的操作区域 | ReactNode | - | 4.17.0 |
| footer | 抽屉的页脚 | ReactNode | - |
| forceRender | 预渲染 Drawer 内元素 | boolean | false |
| getContainer | 指定 Drawer 挂载的节点，**并在容器内展现**，`false` 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| Selectors \| false | body |
| height | 高度，在 `placement` 为 `top` 或 `bottom` 时使用 | string \| number | 378 |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |
| mask | 是否展示遮罩 | boolean | true |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |
| placement | 抽屉的方向 | `top` \| `right` \| `bottom` \| `left` | `right` |
| push | 用于设置多层 Drawer 的推动行为 | boolean \| { distance: string \| number } | { distance: 180 } | 4.5.0+ |
| rootStyle | 可用于设置 Drawer 最外层容器的样式，和 `style` 的区别是作用节点包括 `mask` | CSSProperties | - |
| size | 预设抽屉宽度（或高度），default `378px` 和 large `736px` | 'default' \| 'large' | 'default' | 4.17.0 |
| style | 设计 Drawer 容器样式，如果你只需要设置内容部分请使用 `bodyStyle` | CSSProperties | - |
| title | 标题 | ReactNode | - |
| open | Drawer 是否可见 | boolean | - |
| width | 宽度 | string \| number | 378 |
| zIndex | 设置 Drawer 的 `z-index` | number | 1000 |
| onClose | 点击遮罩层或左上角叉或取消按钮的回调 | function(e) | - |

### ant-design 的 Drawer - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 抽屉展开后是否将焦点切换至其 Dom 节点 | boolean | true | 4.17.0 |
| afterOpenChange | 切换抽屉时动画结束后的回调 | function(open) | - |
| className | Drawer 容器外层 className 设置，如果需要设置最外层，请使用 rootClassName | string | - |
| classNames | 配置抽屉内置模块的 className | `header?: string; body?: string; footer?: string; mask?: string; content?: string; wrapper?: string;` | - |
| styles | 配置抽屉内置模块的 style | `header?: CSSProperties; body?: CSSProperties; footer?: CSSProperties; mask?: CSSProperties; content?: CSSProperties; wrapper?: CSSProperties;` | - | 5.10.0 |
| closeIcon | 自定义关闭图标。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | boolean \| ReactNode | \<CloseOutlined /> |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | boolean | false |
| extra | 抽屉右上角的操作区域 | ReactNode | - | 4.17.0 |
| footer | 抽屉的页脚 | ReactNode | - |
| forceRender | 预渲染 Drawer 内元素 | boolean | false |
| getContainer | 指定 Drawer 挂载的节点，**并在容器内展现**，`false` 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| Selectors \| false | body |
| height | 高度，在 `placement` 为 `top` 或 `bottom` 时使用 | string \| number | 378 |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |
| mask | 是否展示遮罩 | boolean | true |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |
| placement | 抽屉的方向 | `top` \| `right` \| `bottom` \| `left` | `right` |
| push | 用于设置多层 Drawer 的推动行为 | boolean \| { distance: string \| number } | { distance: 180 } | 4.5.0+ |
| rootStyle | 可用于设置 Drawer 最外层容器的样式，和 `style` 的区别是作用节点包括 `mask` | CSSProperties | - |
| size | 预设抽屉宽度（或高度），default `378px` 和 large `736px` | 'default' \| 'large' | 'default' | 4.17.0 |
| style | 设计 Drawer 容器样式，如果你只需要设置内容部分请使用 `bodyStyle` | CSSProperties | - |
| title | 标题 | ReactNode | - |
| open | Drawer 是否可见 | boolean | - |
| width | 宽度 | string \| number | 378 |
| zIndex | 设置 Drawer 的 `z-index` | number | 1000 |
| onClose | 点击遮罩层或左上角叉或取消按钮的回调 | function(e) | - |

## ant-design 的 Divider 有哪些配置？

#### Divider - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| children | 嵌套的标题 | ReactNode | - |
| className | 分割线样式类 | string | - |
| dashed | 是否虚线 | boolean | false |
| orientation | 分割线标题的位置 | `left` \| `right` \| `center` | `center` |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 `orientation` 必须为 `left` 或 `right`。如果传入 `string` 类型的数字且不带单位，默认单位是 px | string \| number | - |
| plain | 文字是否显示为普通正文样式 | boolean | false | 4.2.0 |
| style | 分割线样式对象 | CSSProperties | - |
| type | 水平还是垂直类型 | `horizontal` \| `vertical` | `horizontal` |

### ant-design 的 Divider - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| children | 嵌套的标题 | ReactNode | - |
| className | 分割线样式类 | string | - |
| dashed | 是否虚线 | boolean | false |
| orientation | 分割线标题的位置 | `left` \| `right` \| `center` | `center` |
| orientationMargin | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 `orientation` 必须为 `left` 或 `right`。如果传入 `string` 类型的数字且不带单位，默认单位是 px | string \| number | - |
| plain | 文字是否显示为普通正文样式 | boolean | false | 4.2.0 |
| style | 分割线样式对象 | CSSProperties | - |
| type | 水平还是垂直类型 | `horizontal` \| `vertical` | `horizontal` |

## ant-design 的 Descriptions 有哪些配置？

#### Descriptions - Descriptions

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| bordered | 是否展示边框 | boolean | false |
| colon | 配置 `Descriptions.Item` 的 `colon` 的默认值 | boolean | true |
| column | 一行的 `DescriptionItems` 数量，可以写成像素值或支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` | number \| [Record<Breakpoint, number>](https://github.com/ant-design/ant-design/blob/84ca0d23ae52e4f0940f20b0e22eabe743f90dca/components/descriptions/index.tsx#L111C21-L111C56) | 3 |
| contentStyle | 自定义内容样式 | CSSProperties | - | 4.10.0 |
| extra | 描述列表的操作区域，显示在右上方 | ReactNode | - | 4.5.0 |
| items | 描述列表项内容 | - | 5.8.0 |
| labelStyle | 自定义标签样式 | CSSProperties | - | 4.10.0 |
| layout | 描述布局 | `horizontal` \| `vertical` | `horizontal` |
| size | 设置列表的大小。可以设置为 `middle` 、`small`, 或不填（只有设置 `bordered={true}` 生效） | `default` \| `middle` \| `small` | - |
| title | 描述列表的标题，显示在最顶部 | ReactNode | - |

#### Descriptions - DescriptionItem

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| contentStyle | 自定义内容样式 | CSSProperties | - | 4.9.0 |
| label | 内容的描述 | ReactNode | - |
| labelStyle | 自定义标签样式 | CSSProperties | - | 4.9.0 |
| span | 包含列的数量 | number \| [Screens](/components/grid#col) | 1 | `screens: 5.9.0` |

### ant-design 的 Descriptions - Descriptions 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| bordered | 是否展示边框 | boolean | false |
| colon | 配置 `Descriptions.Item` 的 `colon` 的默认值 | boolean | true |
| column | 一行的 `DescriptionItems` 数量，可以写成像素值或支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` | number \| [Record<Breakpoint, number>](https://github.com/ant-design/ant-design/blob/84ca0d23ae52e4f0940f20b0e22eabe743f90dca/components/descriptions/index.tsx#L111C21-L111C56) | 3 |
| contentStyle | 自定义内容样式 | CSSProperties | - | 4.10.0 |
| extra | 描述列表的操作区域，显示在右上方 | ReactNode | - | 4.5.0 |
| items | 描述列表项内容 | - | 5.8.0 |
| labelStyle | 自定义标签样式 | CSSProperties | - | 4.10.0 |
| layout | 描述布局 | `horizontal` \| `vertical` | `horizontal` |
| size | 设置列表的大小。可以设置为 `middle` 、`small`, 或不填（只有设置 `bordered={true}` 生效） | `default` \| `middle` \| `small` | - |
| title | 描述列表的标题，显示在最顶部 | ReactNode | - |

### ant-design 的 Descriptions - DescriptionItem 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| contentStyle | 自定义内容样式 | CSSProperties | - | 4.9.0 |
| label | 内容的描述 | ReactNode | - |
| labelStyle | 自定义标签样式 | CSSProperties | - | 4.9.0 |
| span | 包含列的数量 | number \| [Screens](/components/grid#col) | 1 | `screens: 5.9.0` |

## ant-design 的 Date-picker 有哪些配置？

#### Date-picker - 共同的 API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| { clearIcon?: ReactNode } | true | 5.8.0: 支持对象类型 |
| autoFocus | 自动获取焦点 | boolean | false |
| className | 选择器 className | string | - |
| dateRender | 自定义日期单元格的内容，5.4.0 起用 `cellRender` 代替 | function(currentDate: dayjs, today: dayjs) => React.ReactNode | - | < 5.4.0 |
| changeOnBlur | 失去焦点时触发 `change` 事件，例如 datetime 下不再需要点击确认按钮 | boolean | false | 5.5.0 |
| cellRender | 自定义单元格的内容 | (current: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| disabled | 禁用 | boolean | false |
| disabledDate | 不可选择的日期 | (currentDate: dayjs) => boolean | - |
| format | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。示例：[自定义格式](#components-date-picker-demo-format) |
| popupClassName | 额外的弹出日历 className | string | - | 4.23.0 |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false |
| locale | 国际化配置 | object |
| mode | 日期面板的状态（[设置后无法选择年份/月份？](/docs/react/faq#当我指定了-datepickerrangepicker-的-mode-属性后点击后无法选择年份月份)） | `time` \| `date` \| `month` \| `year` \| `decade` | - |
| nextIcon | 自定义下一个图标 | ReactNode | - | 4.17.0 |
| open | 控制弹层是否展开 | boolean | - |
| panelRender | 自定义渲染面板 | (panelNode) => ReactNode | - | 4.5.0 |
| picker | 设置选择器类型 | `date` \| `week` \| `month` \| `quarter` \| `year` | `date` | `quarter`: 4.1.0 |
| placeholder | 输入框提示文字 | string \| [string, string] | - |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |
| popupStyle | 额外的弹出日历样式 | CSSProperties | {} |
| prevIcon | 自定义上一个图标 | ReactNode | - | 4.17.0 |
| presets | 预设时间范围快捷选择, 自 `5.8.0` 起 value 支持函数返回值 | { label: React.ReactNode, value: Dayjs \| (() => Dayjs) }[] | - |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `large` \| `middle` \| `small` | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| style | 自定义输入框样式 | CSSProperties | {} |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |
| superNextIcon | 自定义 `>>` 切换图标 | ReactNode | - | 4.17.0 |
| superPrevIcon | 自定义 `<<` 切换图标 | ReactNode | - | 4.17.0 |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onOpenChange | 弹出日历和关闭日历的回调 | function(open) | - |
| onPanelChange | 日历面板切换的回调 | function(value, mode) | - |

#### Date-picker - 共同的方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

#### Date-picker - DatePicker

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认日期，如果开始时间或结束时间为 `null` 或者 `undefined`，日期范围将是一个开区间 | - |
| disabledTime | 不可选择的时间 | function(date) | - |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | `YYYY-MM-DD` |
| renderExtraFooter | 在面板中添加额外的页脚 | (mode) => React.ReactNode | - |
| showNow | 当设定了 `showTime` 的时候，面板是否显示“此刻”按钮 | boolean | - | 4.4.0 |
| showTime | 增加时间选择功能 | Object \| boolean |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](#components-date-picker-demo-disabled-date) | dayjs() |
| showToday | 是否展示“今天”按钮 | boolean | true |
| value | 日期 | - |
| onChange | 时间发生变化的回调 | function(date: dayjs, dateString: string) | - |
| onOk | 点击确定按钮的回调 | function() | - |
| onPanelChange | 日期面板变化时的回调 | function(value, mode) | - |

#### Date-picker - DatePicker[picker=year]

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | - |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | `YYYY` |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |
| value | 日期 | - |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs, dateString: string) | - |

#### Date-picker - DatePicker[picker=quarter]

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | - |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | `YYYY-\QQ` |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |
| value | 日期 | - |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs, dateString: string) | - |

#### Date-picker - DatePicker[picker=month]

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | - |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | `YYYY-MM` |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |
| value | 日期 | - |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs, dateString: string) | - |

#### Date-picker - DatePicker[picker=week]

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | - |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | `YYYY-wo` |
| renderExtraFooter | 在面板中添加额外的页脚 | (mode) => React.ReactNode | - |
| value | 日期 | - |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs, dateString: string) | - |

#### Date-picker - RangePicker

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| allowEmpty | 允许起始项部分为空 | \[boolean, boolean] | \[false, false] |
| dateRender | 自定义日期单元格的内容，5.4.0 起用 `cellRender` 代替 | function(currentDate: dayjs, today: dayjs) => React.ReactNode | - | < 5.4.0 |
| cellRender | 自定义单元格的内容。 | (current: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| defaultValue | 默认日期 | - |
| disabled | 禁用起始项 | \[boolean, boolean] | - |
| disabledTime | 不可选择的时间 | function(date: dayjs, partial: `start` \| `end`) | - |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | `YYYY-MM-DD HH:mm:ss` |
| presets | 预设时间范围快捷选择，自 `5.8.0` 起 value 支持函数返回值 | { label: React.ReactNode, value: (Dayjs \| (() => Dayjs))[] }[] | - |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |
| separator | 设置分隔符 | React.ReactNode | `<SwapRightOutlined />` |
| showTime | 增加时间选择功能 | Object\|boolean |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](#components-date-picker-demo-disabled-date) | \[dayjs(), dayjs()] |
| value | 日期 | - |
| onCalendarChange | 待选日期发生变化的回调。`info` 参数自 4.4.0 添加 | function(dates: [dayjs, dayjs], dateStrings: [string, string], info: { range:`start`\|`end` }) | - |
| onChange | 日期范围发生变化的回调 | function(dates: [dayjs, dayjs], dateStrings: [string, string]) | - |

### ant-design 的 Date-picker - 共同的 API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| { clearIcon?: ReactNode } | true | 5.8.0: 支持对象类型 |
| autoFocus | 自动获取焦点 | boolean | false |
| className | 选择器 className | string | - |
| dateRender | 自定义日期单元格的内容，5.4.0 起用 `cellRender` 代替 | function(currentDate: dayjs, today: dayjs) => React.ReactNode | - | < 5.4.0 |
| changeOnBlur | 失去焦点时触发 `change` 事件，例如 datetime 下不再需要点击确认按钮 | boolean | false | 5.5.0 |
| cellRender | 自定义单元格的内容 | (current: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| disabled | 禁用 | boolean | false |
| disabledDate | 不可选择的日期 | (currentDate: dayjs) => boolean | - |
| format | 设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。示例：[自定义格式](#components-date-picker-demo-format) |
| popupClassName | 额外的弹出日历 className | string | - | 4.23.0 |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false |
| locale | 国际化配置 | object |
| mode | 日期面板的状态（[设置后无法选择年份/月份？](/docs/react/faq#当我指定了-datepickerrangepicker-的-mode-属性后点击后无法选择年份月份)） | `time` \| `date` \| `month` \| `year` \| `decade` | - |
| nextIcon | 自定义下一个图标 | ReactNode | - | 4.17.0 |
| open | 控制弹层是否展开 | boolean | - |
| panelRender | 自定义渲染面板 | (panelNode) => ReactNode | - | 4.5.0 |
| picker | 设置选择器类型 | `date` \| `week` \| `month` \| `quarter` \| `year` | `date` | `quarter`: 4.1.0 |
| placeholder | 输入框提示文字 | string \| [string, string] | - |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |
| popupStyle | 额外的弹出日历样式 | CSSProperties | {} |
| prevIcon | 自定义上一个图标 | ReactNode | - | 4.17.0 |
| presets | 预设时间范围快捷选择, 自 `5.8.0` 起 value 支持函数返回值 | { label: React.ReactNode, value: Dayjs \| (() => Dayjs) }[] | - |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `large` \| `middle` \| `small` | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| style | 自定义输入框样式 | CSSProperties | {} |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |
| superNextIcon | 自定义 `>>` 切换图标 | ReactNode | - | 4.17.0 |
| superPrevIcon | 自定义 `<<` 切换图标 | ReactNode | - | 4.17.0 |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onOpenChange | 弹出日历和关闭日历的回调 | function(open) | - |
| onPanelChange | 日历面板切换的回调 | function(value, mode) | - |

### ant-design 的 Date-picker - 共同的方法 有哪些配置？

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### ant-design 的 Date-picker - DatePicker 有哪些配置？

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认日期，如果开始时间或结束时间为 `null` 或者 `undefined`，日期范围将是一个开区间 | - |
| disabledTime | 不可选择的时间 | function(date) | - |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | `YYYY-MM-DD` |
| renderExtraFooter | 在面板中添加额外的页脚 | (mode) => React.ReactNode | - |
| showNow | 当设定了 `showTime` 的时候，面板是否显示“此刻”按钮 | boolean | - | 4.4.0 |
| showTime | 增加时间选择功能 | Object \| boolean |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](#components-date-picker-demo-disabled-date) | dayjs() |
| showToday | 是否展示“今天”按钮 | boolean | true |
| value | 日期 | - |
| onChange | 时间发生变化的回调 | function(date: dayjs, dateString: string) | - |
| onOk | 点击确定按钮的回调 | function() | - |
| onPanelChange | 日期面板变化时的回调 | function(value, mode) | - |

### ant-design 的 Date-picker - DatePicker[picker=year] 有哪些配置？

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | - |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | `YYYY` |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |
| value | 日期 | - |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs, dateString: string) | - |

### ant-design 的 Date-picker - DatePicker[picker=quarter] 有哪些配置？

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | - |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | `YYYY-\QQ` |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |
| value | 日期 | - |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs, dateString: string) | - |

### ant-design 的 Date-picker - DatePicker[picker=month] 有哪些配置？

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | - |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | `YYYY-MM` |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |
| value | 日期 | - |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs, dateString: string) | - |

### ant-design 的 Date-picker - DatePicker[picker=week] 有哪些配置？

| 参数 | 说明 | 类型 |
| --- | --- | --- | --- |
| defaultValue | 默认日期 | - |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | `YYYY-wo` |
| renderExtraFooter | 在面板中添加额外的页脚 | (mode) => React.ReactNode | - |
| value | 日期 | - |
| onChange | 时间发生变化的回调，发生在用户选择时间时 | function(date: dayjs, dateString: string) | - |

### ant-design 的 Date-picker - RangePicker 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| allowEmpty | 允许起始项部分为空 | \[boolean, boolean] | \[false, false] |
| dateRender | 自定义日期单元格的内容，5.4.0 起用 `cellRender` 代替 | function(currentDate: dayjs, today: dayjs) => React.ReactNode | - | < 5.4.0 |
| cellRender | 自定义单元格的内容。 | (current: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| defaultValue | 默认日期 | - |
| disabled | 禁用起始项 | \[boolean, boolean] | - |
| disabledTime | 不可选择的时间 | function(date: dayjs, partial: `start` \| `end`) | - |
| format | 展示的日期格式，配置参考 [dayjs#format](https://day.js.org/docs/zh-CN/display/format#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%8D%A0%E4%BD%8D%E7%AC%A6%E5%88%97%E8%A1%A8)。 | `YYYY-MM-DD HH:mm:ss` |
| presets | 预设时间范围快捷选择，自 `5.8.0` 起 value 支持函数返回值 | { label: React.ReactNode, value: (Dayjs \| (() => Dayjs))[] }[] | - |
| renderExtraFooter | 在面板中添加额外的页脚 | () => React.ReactNode | - |
| separator | 设置分隔符 | React.ReactNode | `<SwapRightOutlined />` |
| showTime | 增加时间选择功能 | Object\|boolean |
| showTime.defaultValue | 设置用户选择日期时默认的时分秒，[例子](#components-date-picker-demo-disabled-date) | \[dayjs(), dayjs()] |
| value | 日期 | - |
| onCalendarChange | 待选日期发生变化的回调。`info` 参数自 4.4.0 添加 | function(dates: [dayjs, dayjs], dateStrings: [string, string], info: { range:`start`\|`end` }) | - |
| onChange | 日期范围发生变化的回调 | function(dates: [dayjs, dayjs], dateStrings: [string, string]) | - |

## ant-design 的 Config-provider 有哪些配置？

#### Config-provider - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| autoInsertSpaceInButton | 设置为 `false` 时，移除按钮中 2 个汉字之间的空格 | boolean | true |
| componentDisabled | 设置 antd 组件禁用状态 | boolean | - | 4.21.0 |
| componentSize | 设置 antd 组件大小 | `small` \| `middle` \| `large` | - |
| csp | 设置 [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 配置 | { nonce: string } | - |
| direction | 设置文本展示方向。 [示例](#components-config-provider-demo-direction) | `ltr` \| `rtl` | `ltr` |
| getPopupContainer | 弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。 | function(triggerNode) | () => document.body |
| getTargetContainer | 配置 Affix、Anchor 滚动监听容器。 | () => HTMLElement | () => window | 4.2.0 |
| iconPrefixCls | 设置图标统一样式前缀 | string | `anticon` | 4.11.0 |
| locale | 语言包配置，语言包可到 [antd/locale](http://unpkg.com/antd/locale/) 目录下寻找 | object | - |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。`false` 时会关闭虚拟滚动 | boolean \| number | - | 5.5.0 |
| popupOverflow | Select 类组件弹层展示逻辑，默认为可视区域滚动，可配置成滚动区域滚动 | 'viewport' \| 'scroll' <InlinePopover previewURL="https://user-images.githubusercontent.com/5378891/230344474-5b9f7e09-0a5d-49e8-bae8-7d2abed6c837.png"></InlinePopover> | 'viewport' | 5.5.0 |
| prefixCls | 设置统一样式前缀 | string | `ant` |
| renderEmpty | 自定义组件空状态。参考 [空状态](/components/empty-cn) | function(componentName: string): ReactNode | - |
| theme | 设置主题，参考 [定制主题](/docs/react/customize-theme-cn) | - | 5.0.0 |
| virtual | 设置 `false` 时关闭虚拟滚动 | boolean | - | 4.3.0 |
| warning | 设置警告等级，`strict` 为 `false` 时会将废弃相关信息聚合为单条信息 | { strict: boolean } | - | 5.10.0 |

#### Config-provider - ConfigProvider.useConfig()

| 返回值 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| componentDisabled | antd 组件禁用状态 | boolean | - | 5.3.0 |
| componentSize | antd 组件大小状态 | `small` \| `middle` \| `large` | - | 5.3.0 |

#### Config-provider - 组件配置

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alert | 设置 Alert 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| anchor | 设置 Anchor 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| avatar | 设置 Avatar 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| badge | 设置 Badge 组件的通用属性 | { className?: string, style?: React.CSSProperties, classNames?: { count?: string, indicator?: string }, styles?: { count?: React.CSSProperties, indicator?: React.CSSProperties } } | - | 5.7.0 |
| breadcrumb | 设置 Breadcrumb 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| button | 设置 Button 组件的通用属性 | { className?: string, style?: React.CSSProperties, classNames?: { icon: string }, styles?: { icon: React.CSSProperties } } | - | 5.6.0 |
| calendar | 设置 Calendar 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| card | 设置 Card 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| carousel | 设置 Carousel 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| cascader | 设置 Cascader 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| checkbox | 设置 Checkbox 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| collapse | 设置 Collapse 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| colorPicker | 设置 ColorPicker 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| datePicker | 设置 DatePicker 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| rangePicker | 设置 RangePicker 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.11.0 |
| descriptions | 设置 Descriptions 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| divider | 设置 Divider 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| drawer | 设置 Drawer 组件的通用属性 | { className?: string, style?: React.CSSProperties, classNames?: [DrawerProps\["classNames"\]](/components/drawer-cn#api), styles?: [DrawerProps\["styles"\]](/components/drawer-cn#api) } | - | 5.7.0, `classNames` 和 `styles`: 5.10.0 |
| dropdown | 设置 Dropdown 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.11.0 |
| empty | 设置 Empty 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| flex | 设置 Flex 组件的通用属性 | { className?: string, style?: React.CSSProperties, vertical?: boolean } | - | 5.10.0 |
| form | 设置 Form 组件的通用属性 | { className?: string, style?: React.CSSProperties, validateMessages?: [ValidateMessages](/components/form-cn#validatemessages), requiredMark?: boolean \| `optional`, colon?: boolean, scrollToFirstError?: boolean \| [Options](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options)} | - | requiredMark: 4.8.0; colon: 4.18.0; scrollToFirstError: 5.2.0; className: 5.7.0; style: 5.7.0 |
| image | 设置 Image 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| input | 设置 Input 组件的通用属性 | { autoComplete?: string, className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| layout | 设置 Layout 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| list | 设置 List 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| menu | 设置 Menu 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| mentions | 设置 Mentions 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| message | 设置 Message 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| modal | 设置 Modal 组件的通用属性 | { className?: string, style?: React.CSSProperties, classNames?: [ModalProps\["classNames"\]](/components/modal-cn#api), styles?: [ModalProps\["styles"\]](/components/modal-cn#api) } | - | 5.7.0, `classNames` 和 `styles`: 5.10.0 |
| notification | 设置 Notification 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| pagination | 设置 Pagination 组件的通用属性 | { showSizeChanger?: boolean, className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| progress | 设置 Progress 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| radio | 设置 Radio 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| rate | 设置 Rate 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| result | 设置 Result 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| skeleton | 设置 Skeleton 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| segmented | 设置 Segmented 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| select | 设置 Select 组件的通用属性 | { className?: string, showSearch?: boolean, style?: React.CSSProperties } | - | 5.7.0 |
| slider | 设置 Slider 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| switch | 设置 Switch 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| space | 设置 Space 的通用属性，参考 [Space](/components/space-cn) | { size: `small` \| `middle` \| `large` \| `number`, className?: string, style?: React.CSSProperties, classNames?: { item: string }, styles?: { item: React.CSSProperties } } | - | 5.6.0 |
| spin | 设置 Spin 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| statistic | 设置 Statistic 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| steps | 设置 Steps 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| table | 设置 Table 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| tabs | 设置 Tabs 组件的通用属性 | { className?: string, style?: React.CSSProperties, indicator?: { size?: GetIndicatorSize, align?: `start` \| `center` \| `end` }} | - | 5.7.0 |
| tag | 设置 Tag 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| timeline | 设置 Timeline 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| timePicker | 设置 TimePicker 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| transfer | 设置 Transfer 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| tree | 设置 Tree 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| typography | 设置 Typography 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| upload | 设置 Upload 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| wave | 设置水波纹特效 | { disabled?: boolean, showEffect?: (node: HTMLElement, info: { className, token, component }) => void } | - | 5.8.0 |

### ant-design 的 Config-provider - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| autoInsertSpaceInButton | 设置为 `false` 时，移除按钮中 2 个汉字之间的空格 | boolean | true |
| componentDisabled | 设置 antd 组件禁用状态 | boolean | - | 4.21.0 |
| componentSize | 设置 antd 组件大小 | `small` \| `middle` \| `large` | - |
| csp | 设置 [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 配置 | { nonce: string } | - |
| direction | 设置文本展示方向。 [示例](#components-config-provider-demo-direction) | `ltr` \| `rtl` | `ltr` |
| getPopupContainer | 弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。 | function(triggerNode) | () => document.body |
| getTargetContainer | 配置 Affix、Anchor 滚动监听容器。 | () => HTMLElement | () => window | 4.2.0 |
| iconPrefixCls | 设置图标统一样式前缀 | string | `anticon` | 4.11.0 |
| locale | 语言包配置，语言包可到 [antd/locale](http://unpkg.com/antd/locale/) 目录下寻找 | object | - |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。`false` 时会关闭虚拟滚动 | boolean \| number | - | 5.5.0 |
| popupOverflow | Select 类组件弹层展示逻辑，默认为可视区域滚动，可配置成滚动区域滚动 | 'viewport' \| 'scroll' <InlinePopover previewURL="https://user-images.githubusercontent.com/5378891/230344474-5b9f7e09-0a5d-49e8-bae8-7d2abed6c837.png"></InlinePopover> | 'viewport' | 5.5.0 |
| prefixCls | 设置统一样式前缀 | string | `ant` |
| renderEmpty | 自定义组件空状态。参考 [空状态](/components/empty-cn) | function(componentName: string): ReactNode | - |
| theme | 设置主题，参考 [定制主题](/docs/react/customize-theme-cn) | - | 5.0.0 |
| virtual | 设置 `false` 时关闭虚拟滚动 | boolean | - | 4.3.0 |
| warning | 设置警告等级，`strict` 为 `false` 时会将废弃相关信息聚合为单条信息 | { strict: boolean } | - | 5.10.0 |

### ant-design 的 Config-provider - ConfigProvider.useConfig() 有哪些配置？

| 返回值 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| componentDisabled | antd 组件禁用状态 | boolean | - | 5.3.0 |
| componentSize | antd 组件大小状态 | `small` \| `middle` \| `large` | - | 5.3.0 |

### ant-design 的 Config-provider - 组件配置 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alert | 设置 Alert 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| anchor | 设置 Anchor 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| avatar | 设置 Avatar 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| badge | 设置 Badge 组件的通用属性 | { className?: string, style?: React.CSSProperties, classNames?: { count?: string, indicator?: string }, styles?: { count?: React.CSSProperties, indicator?: React.CSSProperties } } | - | 5.7.0 |
| breadcrumb | 设置 Breadcrumb 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| button | 设置 Button 组件的通用属性 | { className?: string, style?: React.CSSProperties, classNames?: { icon: string }, styles?: { icon: React.CSSProperties } } | - | 5.6.0 |
| calendar | 设置 Calendar 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| card | 设置 Card 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| carousel | 设置 Carousel 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| cascader | 设置 Cascader 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| checkbox | 设置 Checkbox 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| collapse | 设置 Collapse 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| colorPicker | 设置 ColorPicker 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| datePicker | 设置 DatePicker 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| rangePicker | 设置 RangePicker 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.11.0 |
| descriptions | 设置 Descriptions 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| divider | 设置 Divider 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| drawer | 设置 Drawer 组件的通用属性 | { className?: string, style?: React.CSSProperties, classNames?: [DrawerProps\["classNames"\]](/components/drawer-cn#api), styles?: [DrawerProps\["styles"\]](/components/drawer-cn#api) } | - | 5.7.0, `classNames` 和 `styles`: 5.10.0 |
| dropdown | 设置 Dropdown 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.11.0 |
| empty | 设置 Empty 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| flex | 设置 Flex 组件的通用属性 | { className?: string, style?: React.CSSProperties, vertical?: boolean } | - | 5.10.0 |
| form | 设置 Form 组件的通用属性 | { className?: string, style?: React.CSSProperties, validateMessages?: [ValidateMessages](/components/form-cn#validatemessages), requiredMark?: boolean \| `optional`, colon?: boolean, scrollToFirstError?: boolean \| [Options](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options)} | - | requiredMark: 4.8.0; colon: 4.18.0; scrollToFirstError: 5.2.0; className: 5.7.0; style: 5.7.0 |
| image | 设置 Image 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| input | 设置 Input 组件的通用属性 | { autoComplete?: string, className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| layout | 设置 Layout 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| list | 设置 List 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| menu | 设置 Menu 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| mentions | 设置 Mentions 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| message | 设置 Message 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| modal | 设置 Modal 组件的通用属性 | { className?: string, style?: React.CSSProperties, classNames?: [ModalProps\["classNames"\]](/components/modal-cn#api), styles?: [ModalProps\["styles"\]](/components/modal-cn#api) } | - | 5.7.0, `classNames` 和 `styles`: 5.10.0 |
| notification | 设置 Notification 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| pagination | 设置 Pagination 组件的通用属性 | { showSizeChanger?: boolean, className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| progress | 设置 Progress 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| radio | 设置 Radio 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| rate | 设置 Rate 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| result | 设置 Result 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| skeleton | 设置 Skeleton 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| segmented | 设置 Segmented 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| select | 设置 Select 组件的通用属性 | { className?: string, showSearch?: boolean, style?: React.CSSProperties } | - | 5.7.0 |
| slider | 设置 Slider 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| switch | 设置 Switch 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| space | 设置 Space 的通用属性，参考 [Space](/components/space-cn) | { size: `small` \| `middle` \| `large` \| `number`, className?: string, style?: React.CSSProperties, classNames?: { item: string }, styles?: { item: React.CSSProperties } } | - | 5.6.0 |
| spin | 设置 Spin 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| statistic | 设置 Statistic 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| steps | 设置 Steps 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| table | 设置 Table 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| tabs | 设置 Tabs 组件的通用属性 | { className?: string, style?: React.CSSProperties, indicator?: { size?: GetIndicatorSize, align?: `start` \| `center` \| `end` }} | - | 5.7.0 |
| tag | 设置 Tag 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| timeline | 设置 Timeline 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| timePicker | 设置 TimePicker 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| transfer | 设置 Transfer 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| tree | 设置 Tree 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| typography | 设置 Typography 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| upload | 设置 Upload 组件的通用属性 | { className?: string, style?: React.CSSProperties } | - | 5.7.0 |
| wave | 设置水波纹特效 | { disabled?: boolean, showEffect?: (node: HTMLElement, info: { className, token, component }) => void } | - | 5.8.0 |

## ant-design 的 Color-picker 有哪些配置？

#### Color-picker - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| allowClear | 允许清除选择的颜色 | boolean | false |
| arrow | 配置弹出的箭头 | `boolean \| { pointAtCenter: boolean }` | true |
| children | 颜色选择器的触发器 | React.ReactNode | - |
| defaultValue | 颜色默认的值 | string \| `Color` | - |
| defaultFormat | 颜色格式默认的值 | `rgb` \| `hex` \| `hsb` | - | 5.9.0 |
| disabled | 禁用颜色选择器 | boolean | - |
| disabledAlpha | 禁用透明度 | boolean | - | 5.8.0 |
| destroyTooltipOnHide | 关闭后是否销毁弹窗 | `boolean` | false | 5.7.0 |
| format | 颜色格式 | `rgb` \| `hex` \| `hsb` | `hex` |
| open | 是否显示弹出窗口 | boolean | - |
| presets | 预设的颜色 | `{ label: ReactNode, colors: Array<string \| Color>, defaultOpen?: boolean }[]` | - | `defaultOpen: 5.11.0` |
| placement | 弹出窗口的位置 | `top` \| `topLeft` \| `topRight` \| `bottom` \| `bottomLeft` \| `bottomRight` | `bottomLeft` |
| panelRender | 自定义渲染面板 | `(panel: React.ReactNode, extra: { components: { Picker: FC; Presets: FC } }) => React.ReactNode` | - | 5.7.0 |
| showText | 显示颜色文本 | boolean \| `(color: Color) => React.ReactNode` | - | 5.7.0 |
| size | 设置触发器大小 | `large` \| `middle` \| `small` | `middle` | 5.7.0 |
| trigger | 颜色选择器的触发模式 | `hover` \| `click` | `click` |
| value | 颜色的值 | string \| `Color` | - |
| onChange | 颜色变化的回调 | `(value: Color, hex: string) => void` | - |
| onChangeComplete | 颜色选择完成的回调 | `(value: Color) => void` | - | 5.7.0 |
| onFormatChange | 颜色格式变化的回调 | `(format: 'hex' \| 'rgb' \| 'hsb') => void` | - |
| onOpenChange | 当 `open` 被改变时的回调 | `(open: boolean) => void` | - |
| onClear | 清除的回调 | `() => void` | - | 5.6.0 |

#### Color-picker - Color

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| toHex | 转换成 `hex` 格式字符，返回格式如：`1677ff` | `() => string` | - |
| toHexString | 转换成 `hex` 格式颜色字符串，返回格式如：`#1677ff` | `() => string` | - |
| toHsb | 转换成 `hsb` 对象 | `() => ({ h: number, s: number, b: number, a number })` | - |
| toHsbString | 转换成 `hsb` 格式颜色字符串，返回格式如：`hsb(215, 91%, 100%)` | `() => string` | - |
| toRgb | 转换成 `rgb` 对象 | `() => ({ r: number, g: number, b: number, a number })` | - |
| toRgbString | 转换成 `rgb` 格式颜色字符串，返回格式如：`rgb(22, 119, 255)` | `() => string` | - |

### ant-design 的 Color-picker - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| allowClear | 允许清除选择的颜色 | boolean | false |
| arrow | 配置弹出的箭头 | `boolean \| { pointAtCenter: boolean }` | true |
| children | 颜色选择器的触发器 | React.ReactNode | - |
| defaultValue | 颜色默认的值 | string \| `Color` | - |
| defaultFormat | 颜色格式默认的值 | `rgb` \| `hex` \| `hsb` | - | 5.9.0 |
| disabled | 禁用颜色选择器 | boolean | - |
| disabledAlpha | 禁用透明度 | boolean | - | 5.8.0 |
| destroyTooltipOnHide | 关闭后是否销毁弹窗 | `boolean` | false | 5.7.0 |
| format | 颜色格式 | `rgb` \| `hex` \| `hsb` | `hex` |
| open | 是否显示弹出窗口 | boolean | - |
| presets | 预设的颜色 | `{ label: ReactNode, colors: Array<string \| Color>, defaultOpen?: boolean }[]` | - | `defaultOpen: 5.11.0` |
| placement | 弹出窗口的位置 | `top` \| `topLeft` \| `topRight` \| `bottom` \| `bottomLeft` \| `bottomRight` | `bottomLeft` |
| panelRender | 自定义渲染面板 | `(panel: React.ReactNode, extra: { components: { Picker: FC; Presets: FC } }) => React.ReactNode` | - | 5.7.0 |
| showText | 显示颜色文本 | boolean \| `(color: Color) => React.ReactNode` | - | 5.7.0 |
| size | 设置触发器大小 | `large` \| `middle` \| `small` | `middle` | 5.7.0 |
| trigger | 颜色选择器的触发模式 | `hover` \| `click` | `click` |
| value | 颜色的值 | string \| `Color` | - |
| onChange | 颜色变化的回调 | `(value: Color, hex: string) => void` | - |
| onChangeComplete | 颜色选择完成的回调 | `(value: Color) => void` | - | 5.7.0 |
| onFormatChange | 颜色格式变化的回调 | `(format: 'hex' \| 'rgb' \| 'hsb') => void` | - |
| onOpenChange | 当 `open` 被改变时的回调 | `(open: boolean) => void` | - |
| onClear | 清除的回调 | `() => void` | - | 5.6.0 |

### ant-design 的 Color-picker - Color 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| toHex | 转换成 `hex` 格式字符，返回格式如：`1677ff` | `() => string` | - |
| toHexString | 转换成 `hex` 格式颜色字符串，返回格式如：`#1677ff` | `() => string` | - |
| toHsb | 转换成 `hsb` 对象 | `() => ({ h: number, s: number, b: number, a number })` | - |
| toHsbString | 转换成 `hsb` 格式颜色字符串，返回格式如：`hsb(215, 91%, 100%)` | `() => string` | - |
| toRgb | 转换成 `rgb` 对象 | `() => ({ r: number, g: number, b: number, a number })` | - |
| toRgbString | 转换成 `rgb` 格式颜色字符串，返回格式如：`rgb(22, 119, 255)` | `() => string` | - |

## ant-design 的 Collapse 有哪些配置？

#### Collapse - Collapse

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| accordion | 手风琴模式 | boolean | false |
| activeKey | 当前激活 tab 面板的 key | string[] \| string <br/> number[] \| number | 默认无，accordion 模式下默认第一个元素 |
| bordered | 带边框风格的折叠面板 | boolean | true |
| collapsible | 所有子面板是否可折叠或指定可折叠触发区域 | `header` \| `icon` \| `disabled` | - | 4.9.0 |
| defaultActiveKey | 初始化选中面板的 key | string[] \| string<br/> number[] \| number | - |
| destroyInactivePanel | 销毁折叠隐藏的面板 | boolean | false |
| expandIcon | 自定义切换图标 | (panelProps) => ReactNode | - |
| expandIconPosition | 设置图标位置 | `start` \| `end` | - | 4.21.0 |
| ghost | 使折叠面板透明且无边框 | boolean | false | 4.4.0 |
| size | 设置折叠面板大小 | `large` \| `middle` \| `small` | `middle` | 5.2.0 |
| onChange | 切换面板的回调 | function | - |
| items | 折叠项目内容 | - | 5.6.0 |

#### Collapse - Collapse.Panel

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| collapsible | 是否可折叠或指定可折叠触发区域 | `header` \| `icon` \| `disabled` | - | 4.9.0 (icon: 4.24.0) |
| extra | 自定义渲染每个面板右上角的内容 | ReactNode | - |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false |
| header | 面板头内容 | ReactNode | - |
| key | 对应 activeKey | string \| number | - |
| showArrow | 是否展示当前面板上的箭头（为 false 时，collapsible 不能置为 icon） | boolean | true |

### ant-design 的 Collapse - Collapse 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| accordion | 手风琴模式 | boolean | false |
| activeKey | 当前激活 tab 面板的 key | string[] \| string <br/> number[] \| number | 默认无，accordion 模式下默认第一个元素 |
| bordered | 带边框风格的折叠面板 | boolean | true |
| collapsible | 所有子面板是否可折叠或指定可折叠触发区域 | `header` \| `icon` \| `disabled` | - | 4.9.0 |
| defaultActiveKey | 初始化选中面板的 key | string[] \| string<br/> number[] \| number | - |
| destroyInactivePanel | 销毁折叠隐藏的面板 | boolean | false |
| expandIcon | 自定义切换图标 | (panelProps) => ReactNode | - |
| expandIconPosition | 设置图标位置 | `start` \| `end` | - | 4.21.0 |
| ghost | 使折叠面板透明且无边框 | boolean | false | 4.4.0 |
| size | 设置折叠面板大小 | `large` \| `middle` \| `small` | `middle` | 5.2.0 |
| onChange | 切换面板的回调 | function | - |
| items | 折叠项目内容 | - | 5.6.0 |

### ant-design 的 Collapse - Collapse.Panel 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| collapsible | 是否可折叠或指定可折叠触发区域 | `header` \| `icon` \| `disabled` | - | 4.9.0 (icon: 4.24.0) |
| extra | 自定义渲染每个面板右上角的内容 | ReactNode | - |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean | false |
| header | 面板头内容 | ReactNode | - |
| key | 对应 activeKey | string \| number | - |
| showArrow | 是否展示当前面板上的箭头（为 false 时，collapsible 不能置为 icon） | boolean | true |

## ant-design 的 Checkbox 有哪些配置？

#### Checkbox - Checkbox

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |
| onChange | 变化时的回调函数 | (e: CheckboxChangeEvent) => void | - |

#### Checkbox - Checkbox Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | (string \| number)[] | \[] |
| disabled | 整组失效 | boolean | false |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - |
| options | 指定可选项 | string[] \| number[] \| Option[] | \[] |
| value | 指定选中的选项 | (string \| number \| boolean)[] | \[] |
| onChange | 变化时的回调函数 | (checkedValue: CheckboxValueType[]) => void | - |

#### Checkbox - Checkbox

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### ant-design 的 Checkbox - Checkbox 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 失效状态 | boolean | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |
| onChange | 变化时的回调函数 | (e: CheckboxChangeEvent) => void | - |

### ant-design 的 Checkbox - Checkbox Group 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | (string \| number)[] | \[] |
| disabled | 整组失效 | boolean | false |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - |
| options | 指定可选项 | string[] \| number[] \| Option[] | \[] |
| value | 指定选中的选项 | (string \| number \| boolean)[] | \[] |
| onChange | 变化时的回调函数 | (checkedValue: CheckboxValueType[]) => void | - |

### ant-design 的 Checkbox - Checkbox 有哪些配置？

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

## ant-design 的 Cascader 有哪些配置？

#### Cascader - API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除 | boolean \| { clearIcon?: ReactNode } | true | 5.8.0: 支持对象形式 |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `multiple` 为 `true` 时有效 | boolean | true | 5.9.0 |
| autoFocus | 自动获取焦点 | boolean | false |
| changeOnSelect | （单选时生效）当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 | boolean | false |
| className | 自定义类名 | string | - |
| defaultValue | 默认的选中项 | string[] \| number[] | \[] |
| disabled | 禁用 | boolean | false |
| displayRender | 选择后展示的渲染函数 | (label, selectedOptions) => ReactNode | label => label.join(`/`) | `multiple`: 4.18.0 |
| tagRender | 自定义 tag 内容 render，仅在多选时生效 | ({ label: string, onClose: function, value: string }) => ReactNode | - |
| popupClassName | 自定义浮层类名 | string | - | 4.23.0 |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - | 4.4.0 |
| expandIcon | 自定义次级菜单展开图标 | ReactNode | - | 4.4.0 |
| expandTrigger | 次级菜单的展开方式，可选 'click' 和 'hover' | string | `click` |
| fieldNames | 自定义 options 中 label value children 的字段 | object | { label: `label`, value: `value`, children: `children` } |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | function(triggerNode) | () => document.body |
| loadData | 用于动态加载选项，无法与 `showSearch` 一起使用 | (selectedOptions) => void | - |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - | 4.17.0 |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode \| function(omittedValues) | - | 4.17.0 |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - | 4.17.0 |
| notFoundContent | 当下拉列表为空时显示的内容 | string | `Not Found` |
| open | 控制浮层显隐 | boolean | - | 4.17.0 |
| options | 可选项数据源 | - |
| placeholder | 输入框占位文本 | string | `请选择` |
| placement | 浮层预设位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | `bottomLeft` | 4.17.0 |
| showSearch | 在选择框中显示搜索框 | boolean \| [Object](#showsearch) | false |
| size | 输入框大小 | `large` \| `middle` \| `small` | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| style | 自定义样式 | CSSProperties | - |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |
| value | 指定选中项 | string[] \| number[] | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onChange | 选择完成后的回调 | (value, selectedOptions) => void | - |
| onDropdownVisibleChange | 显示/隐藏浮层的回调 | (value) => void | - | 4.17.0 |
| multiple | 支持多选节点 | boolean | - | 4.17.0 |
| showCheckedStrategy | 定义选中项回填的方式。`Cascader.SHOW_CHILD`: 只显示选中的子节点。`Cascader.SHOW_PARENT`: 只显示父节点（当父节点下所有子节点都选中时）。 | `Cascader.SHOW_PARENT` \| `Cascader.SHOW_CHILD` | `Cascader.SHOW_PARENT` | 4.20.0 |
| removeIcon | 自定义的多选框清除图标 | ReactNode | - |
| searchValue | 设置搜索的值，需要与 `showSearch` 配合使用 | string | - | 4.17.0 |
| onSearch | 监听搜索，返回输入的值 | (search: string) => void | - | 4.17.0 |
| dropdownMenuColumnStyle | 下拉菜单列的样式 | CSSProperties | - |

#### Cascader - showSearch

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| filter | 接收 `inputValue` `path` 两个参数，当 `path` 符合筛选条件时，应返回 true，反之则返回 false | function(inputValue, path): boolean | - |
| limit | 搜索结果展示数量 | number \| false | 50 |
| matchInputWidth | 搜索结果列表是否与输入框同宽（[效果](https://github.com/ant-design/ant-design/issues/25779)） | boolean | true |
| render | 用于渲染 filter 后的选项 | function(inputValue, path): ReactNode | - |
| sort | 用于排序 filter 后的选项 | function(a, b, inputValue) | - |

#### Cascader - 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### ant-design 的 Cascader - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除 | boolean \| { clearIcon?: ReactNode } | true | 5.8.0: 支持对象形式 |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `multiple` 为 `true` 时有效 | boolean | true | 5.9.0 |
| autoFocus | 自动获取焦点 | boolean | false |
| changeOnSelect | （单选时生效）当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的演示 | boolean | false |
| className | 自定义类名 | string | - |
| defaultValue | 默认的选中项 | string[] \| number[] | \[] |
| disabled | 禁用 | boolean | false |
| displayRender | 选择后展示的渲染函数 | (label, selectedOptions) => ReactNode | label => label.join(`/`) | `multiple`: 4.18.0 |
| tagRender | 自定义 tag 内容 render，仅在多选时生效 | ({ label: string, onClose: function, value: string }) => ReactNode | - |
| popupClassName | 自定义浮层类名 | string | - | 4.23.0 |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - | 4.4.0 |
| expandIcon | 自定义次级菜单展开图标 | ReactNode | - | 4.4.0 |
| expandTrigger | 次级菜单的展开方式，可选 'click' 和 'hover' | string | `click` |
| fieldNames | 自定义 options 中 label value children 的字段 | object | { label: `label`, value: `value`, children: `children` } |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | function(triggerNode) | () => document.body |
| loadData | 用于动态加载选项，无法与 `showSearch` 一起使用 | (selectedOptions) => void | - |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - | 4.17.0 |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | ReactNode \| function(omittedValues) | - | 4.17.0 |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - | 4.17.0 |
| notFoundContent | 当下拉列表为空时显示的内容 | string | `Not Found` |
| open | 控制浮层显隐 | boolean | - | 4.17.0 |
| options | 可选项数据源 | - |
| placeholder | 输入框占位文本 | string | `请选择` |
| placement | 浮层预设位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | `bottomLeft` | 4.17.0 |
| showSearch | 在选择框中显示搜索框 | boolean \| [Object](#showsearch) | false |
| size | 输入框大小 | `large` \| `middle` \| `small` | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| style | 自定义样式 | CSSProperties | - |
| suffixIcon | 自定义的选择框后缀图标 | ReactNode | - |
| value | 指定选中项 | string[] \| number[] | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onChange | 选择完成后的回调 | (value, selectedOptions) => void | - |
| onDropdownVisibleChange | 显示/隐藏浮层的回调 | (value) => void | - | 4.17.0 |
| multiple | 支持多选节点 | boolean | - | 4.17.0 |
| showCheckedStrategy | 定义选中项回填的方式。`Cascader.SHOW_CHILD`: 只显示选中的子节点。`Cascader.SHOW_PARENT`: 只显示父节点（当父节点下所有子节点都选中时）。 | `Cascader.SHOW_PARENT` \| `Cascader.SHOW_CHILD` | `Cascader.SHOW_PARENT` | 4.20.0 |
| removeIcon | 自定义的多选框清除图标 | ReactNode | - |
| searchValue | 设置搜索的值，需要与 `showSearch` 配合使用 | string | - | 4.17.0 |
| onSearch | 监听搜索，返回输入的值 | (search: string) => void | - | 4.17.0 |
| dropdownMenuColumnStyle | 下拉菜单列的样式 | CSSProperties | - |

### ant-design 的 Cascader - showSearch 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| filter | 接收 `inputValue` `path` 两个参数，当 `path` 符合筛选条件时，应返回 true，反之则返回 false | function(inputValue, path): boolean | - |
| limit | 搜索结果展示数量 | number \| false | 50 |
| matchInputWidth | 搜索结果列表是否与输入框同宽（[效果](https://github.com/ant-design/ant-design/issues/25779)） | boolean | true |
| render | 用于渲染 filter 后的选项 | function(inputValue, path): ReactNode | - |
| sort | 用于排序 filter 后的选项 | function(a, b, inputValue) | - |

### ant-design 的 Cascader - 方法 有哪些配置？

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

## ant-design 的 Carousel 有哪些配置？

#### Carousel - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 是否自动切换 | boolean | false |
| autoplaySpeed | 自动切换的间隔（毫秒） | number | 3000 |
| dotPosition | 面板指示点位置，可选 `top` `bottom` `left` `right` | string | `bottom` |
| dots | 是否显示面板指示点，如果为 `object` 则同时可以指定 `dotsClass` 或者 | boolean \| { className?: string } | true |
| fade | 使用渐变切换动效 | boolean | false |
| infinite | 是否无限循环切换（实现方式是复制两份 children 元素，如果子元素有副作用则可能会引发 bug） | boolean | true |
| speed | 切换动效的时间（毫秒） | number | 500 |
| easing | 动画效果 | string | `linear` |
| effect | 动画效果函数 | `scrollx` \| `fade` | `scrollx` |
| afterChange | 切换面板的回调 | (current: number) => void | - |
| beforeChange | 切换面板的回调 | (current: number, next: number) => void | - |
| waitForAnimate | 是否等待切换动画 | boolean | false |

#### Carousel - 方法

| 名称 | 描述 |
| --- | --- |
| goTo(slideNumber, dontAnimate) | 切换到指定面板, dontAnimate = true 时，不使用动画 |
| next() | 切换到下一面板 |
| prev() | 切换到上一面板 |

### ant-design 的 Carousel - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 是否自动切换 | boolean | false |
| autoplaySpeed | 自动切换的间隔（毫秒） | number | 3000 |
| dotPosition | 面板指示点位置，可选 `top` `bottom` `left` `right` | string | `bottom` |
| dots | 是否显示面板指示点，如果为 `object` 则同时可以指定 `dotsClass` 或者 | boolean \| { className?: string } | true |
| fade | 使用渐变切换动效 | boolean | false |
| infinite | 是否无限循环切换（实现方式是复制两份 children 元素，如果子元素有副作用则可能会引发 bug） | boolean | true |
| speed | 切换动效的时间（毫秒） | number | 500 |
| easing | 动画效果 | string | `linear` |
| effect | 动画效果函数 | `scrollx` \| `fade` | `scrollx` |
| afterChange | 切换面板的回调 | (current: number) => void | - |
| beforeChange | 切换面板的回调 | (current: number, next: number) => void | - |
| waitForAnimate | 是否等待切换动画 | boolean | false |

### ant-design 的 Carousel - 方法 有哪些配置？

| 名称 | 描述 |
| --- | --- |
| goTo(slideNumber, dontAnimate) | 切换到指定面板, dontAnimate = true 时，不使用动画 |
| next() | 切换到下一面板 |
| prev() | 切换到上一面板 |

## ant-design 的 Card 有哪些配置？

#### Card - Card

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actions | 卡片操作组，位置在卡片底部 | Array<ReactNode> | - |
| activeTabKey | 当前激活页签的 key | string | - |
| bodyStyle | 内容区域自定义样式 | CSSProperties | - |
| bordered | 是否有边框 | boolean | true |
| cover | 卡片封面 | ReactNode | - |
| defaultActiveTabKey | 初始化选中页签的 key，如果没有设置 activeTabKey | string | `第一个页签` |
| extra | 卡片右上角的操作区域 | ReactNode | - |
| headStyle | 自定义标题区域样式 | CSSProperties | - |
| hoverable | 鼠标移过时可浮起 | boolean | false |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| size | card 的尺寸 | `default` \| `small` | `default` |
| tabBarExtraContent | tab bar 上额外的元素 | ReactNode | - |
| tabList | 页签标题列表 | - |
| tabProps | - | - |
| title | 卡片标题 | ReactNode | - |
| type | 卡片类型，可设置为 `inner` 或 不设置 | string | - |
| onTabChange | 页签切换的回调 | (key) => void | - |

#### Card - Card.Grid

| 参数      | 说明                   | 类型          | 默认值 |
| --------- | ---------------------- | ------------- | ------ |
| className | 网格容器类名           | string        | -      |
| hoverable | 鼠标移过时可浮起       | boolean       | true   |
| style     | 定义网格容器类名的样式 | CSSProperties | -      |

#### Card - Card.Meta

| 参数        | 说明               | 类型          | 默认值 |
| ----------- | ------------------ | ------------- | ------ |
| avatar      | 头像/图标          | ReactNode     | -      |
| className   | 容器类名           | string        | -      |
| description | 描述内容           | ReactNode     | -      |
| style       | 定义容器类名的样式 | CSSProperties | -      |
| title       | 标题内容           | ReactNode     | -      |

### ant-design 的 Card - Card 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actions | 卡片操作组，位置在卡片底部 | Array<ReactNode> | - |
| activeTabKey | 当前激活页签的 key | string | - |
| bodyStyle | 内容区域自定义样式 | CSSProperties | - |
| bordered | 是否有边框 | boolean | true |
| cover | 卡片封面 | ReactNode | - |
| defaultActiveTabKey | 初始化选中页签的 key，如果没有设置 activeTabKey | string | `第一个页签` |
| extra | 卡片右上角的操作区域 | ReactNode | - |
| headStyle | 自定义标题区域样式 | CSSProperties | - |
| hoverable | 鼠标移过时可浮起 | boolean | false |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| size | card 的尺寸 | `default` \| `small` | `default` |
| tabBarExtraContent | tab bar 上额外的元素 | ReactNode | - |
| tabList | 页签标题列表 | - |
| tabProps | - | - |
| title | 卡片标题 | ReactNode | - |
| type | 卡片类型，可设置为 `inner` 或 不设置 | string | - |
| onTabChange | 页签切换的回调 | (key) => void | - |

### ant-design 的 Card - Card.Grid 有哪些配置？

| 参数      | 说明                   | 类型          | 默认值 |
| --------- | ---------------------- | ------------- | ------ |
| className | 网格容器类名           | string        | -      |
| hoverable | 鼠标移过时可浮起       | boolean       | true   |
| style     | 定义网格容器类名的样式 | CSSProperties | -      |

### ant-design 的 Card - Card.Meta 有哪些配置？

| 参数        | 说明               | 类型          | 默认值 |
| ----------- | ------------------ | ------------- | ------ |
| avatar      | 头像/图标          | ReactNode     | -      |
| className   | 容器类名           | string        | -      |
| description | 描述内容           | ReactNode     | -      |
| style       | 定义容器类名的样式 | CSSProperties | -      |
| title       | 标题内容           | ReactNode     | -      |

## ant-design 的 Calendar 有哪些配置？

#### Calendar - API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| dateCellRender | 自定义渲染日期单元格，返回内容会被追加到单元格，>= 5.4.0 请用 `cellRender` | function(date: Dayjs): ReactNode | - | < 5.4.0 |
| cellRender | 自定义单元格的内容 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| dateFullCellRender | 自定义渲染日期单元格，返回内容覆盖单元格，>= 5.4.0 请用 `fullCellRender` | function(date: Dayjs): ReactNode | - | < 5.4.0 |
| fullCellRender | 自定义单元格的内容 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| defaultValue | 默认展示的日期 | - |
| disabledDate | 不可选择的日期，参数为当前 `value`，注意使用时[不要直接修改](https://github.com/ant-design/ant-design/issues/30987) | (currentDate: Dayjs) => boolean | - |
| fullscreen | 是否全屏显示 | boolean | true |
| headerRender | 自定义头部内容 | function(object:{value: Dayjs, type: string, onChange: f(), onTypeChange: f()}) | - |
| locale | 国际化配置 | object |
| mode | 初始模式 | `month` \| `year` | `month` |
| monthCellRender | 自定义渲染月单元格，返回内容会被追加到单元格，>= 5.4.0 请用 `cellRender` | function(date: Dayjs): ReactNode | - | < 5.4.0 |
| cellRender | 自定义单元格的内容 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| monthFullCellRender | 自定义渲染月单元格，返回内容覆盖单元格，>= 5.4.0 请用 `fullCellRender` | function(date: Dayjs): ReactNode | - | < 5.4.0 |
| fullCellRender | 自定义单元格的内容 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| validRange | 设置可以显示的日期 | \[[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | - |
| value | 展示日期 | - |
| onChange | 日期变化回调 | function(date: Dayjs) | - |
| onPanelChange | 日期面板变化回调 | function(date: Dayjs, mode: string) | - |
| onSelect | 选择日期回调，包含来源信息 | function(date: Dayjs, info: { source: 'year' \| 'month' \| 'date' \| 'customize' }) | - | `info`: 5.6.0 |

### ant-design 的 Calendar - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| dateCellRender | 自定义渲染日期单元格，返回内容会被追加到单元格，>= 5.4.0 请用 `cellRender` | function(date: Dayjs): ReactNode | - | < 5.4.0 |
| cellRender | 自定义单元格的内容 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| dateFullCellRender | 自定义渲染日期单元格，返回内容覆盖单元格，>= 5.4.0 请用 `fullCellRender` | function(date: Dayjs): ReactNode | - | < 5.4.0 |
| fullCellRender | 自定义单元格的内容 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| defaultValue | 默认展示的日期 | - |
| disabledDate | 不可选择的日期，参数为当前 `value`，注意使用时[不要直接修改](https://github.com/ant-design/ant-design/issues/30987) | (currentDate: Dayjs) => boolean | - |
| fullscreen | 是否全屏显示 | boolean | true |
| headerRender | 自定义头部内容 | function(object:{value: Dayjs, type: string, onChange: f(), onTypeChange: f()}) | - |
| locale | 国际化配置 | object |
| mode | 初始模式 | `month` \| `year` | `month` |
| monthCellRender | 自定义渲染月单元格，返回内容会被追加到单元格，>= 5.4.0 请用 `cellRender` | function(date: Dayjs): ReactNode | - | < 5.4.0 |
| cellRender | 自定义单元格的内容 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| monthFullCellRender | 自定义渲染月单元格，返回内容覆盖单元格，>= 5.4.0 请用 `fullCellRender` | function(date: Dayjs): ReactNode | - | < 5.4.0 |
| fullCellRender | 自定义单元格的内容 | function(current: dayjs, today: dayjs, info: { originNode: React.ReactElement,today: DateType, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| validRange | 设置可以显示的日期 | \[[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | - |
| value | 展示日期 | - |
| onChange | 日期变化回调 | function(date: Dayjs) | - |
| onPanelChange | 日期面板变化回调 | function(date: Dayjs, mode: string) | - |
| onSelect | 选择日期回调，包含来源信息 | function(date: Dayjs, info: { source: 'year' \| 'month' \| 'date' \| 'customize' }) | - | `info`: 5.6.0 |

## ant-design 的 Button 有哪些配置？

#### Button - API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
| classNames | 语义化结构 class | Record<SemanticDOM, string> | - | 5.4.0 |
| danger | 设置危险按钮 | boolean | false |
| disabled | 设置按钮失效状态 | boolean | false |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |
| icon | 设置按钮的图标组件 | ReactNode | - |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | false |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | `default` |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |
| styles | 语义化结构 style | Record<SemanticDOM, CSSProperties> | - | 5.4.0 |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |
| type | 设置按钮类型 | `primary` \| `dashed` \| `link` \| `text` \| `default` | `default` |
| onClick | 点击按钮时的回调 | (event: MouseEvent) => void | - |

#### Button - `styles`

| 名称 | 说明         | 版本  |
| ---- | ------------ | ----- |
| icon | 设置图标元素 | 5.5.0 |

### ant-design 的 Button - API 有哪些配置？

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
| classNames | 语义化结构 class | Record<SemanticDOM, string> | - | 5.4.0 |
| danger | 设置危险按钮 | boolean | false |
| disabled | 设置按钮失效状态 | boolean | false |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |
| icon | 设置按钮的图标组件 | ReactNode | - |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | false |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | `default` |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |
| styles | 语义化结构 style | Record<SemanticDOM, CSSProperties> | - | 5.4.0 |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |
| type | 设置按钮类型 | `primary` \| `dashed` \| `link` \| `text` \| `default` | `default` |
| onClick | 点击按钮时的回调 | (event: MouseEvent) => void | - |

### ant-design 的 Button - `styles` 有哪些配置？

| 名称 | 说明         | 版本  |
| ---- | ------------ | ----- |
| icon | 设置图标元素 | 5.5.0 |

## ant-design 的 Breadcrumb 有哪些配置？

#### Breadcrumb - Breadcrumb

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| itemRender | 自定义链接函数，和 react-router 配置使用 | (route, params, routes, paths) => ReactNode | - |
| params | 路由的参数 | object | - |
| items | 路由栈信息 | - | 5.3.0 |
| separator | 分隔符自定义 | ReactNode | `/` |

#### Breadcrumb - RouteItemType

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| className | 自定义类名 | string | - |
| dropdownProps | 弹出下拉菜单的自定义配置 | - |
| href | 链接的目的地，不能和 `path` 共用 | string | - |
| path | 拼接路径，每一层都会拼接前一个 `path` 信息。不能和 `href` 共用 | string | - |
| menu | 菜单配置项 | - | 4.24.0 |
| onClick | 单击事件 | (e:MouseEvent) => void | - |
| title | 名称 | ReactNode | - | 5.3.0 |

#### Breadcrumb - SeparatorType

| 参数      | 说明           | 类型        | 默认值 |
| --------- | -------------- | ----------- | ------ | ----- |
| type      | 标记为分隔符   | `separator` | 5.3.0  |
| separator | 要显示的分隔符 | ReactNode   | `/`    | 5.3.0 |

### ant-design 的 Breadcrumb - Breadcrumb 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| itemRender | 自定义链接函数，和 react-router 配置使用 | (route, params, routes, paths) => ReactNode | - |
| params | 路由的参数 | object | - |
| items | 路由栈信息 | - | 5.3.0 |
| separator | 分隔符自定义 | ReactNode | `/` |

### ant-design 的 Breadcrumb - RouteItemType 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| className | 自定义类名 | string | - |
| dropdownProps | 弹出下拉菜单的自定义配置 | - |
| href | 链接的目的地，不能和 `path` 共用 | string | - |
| path | 拼接路径，每一层都会拼接前一个 `path` 信息。不能和 `href` 共用 | string | - |
| menu | 菜单配置项 | - | 4.24.0 |
| onClick | 单击事件 | (e:MouseEvent) => void | - |
| title | 名称 | ReactNode | - | 5.3.0 |

### ant-design 的 Breadcrumb - SeparatorType 有哪些配置？

| 参数      | 说明           | 类型        | 默认值 |
| --------- | -------------- | ----------- | ------ | ----- |
| type      | 标记为分隔符   | `separator` | 5.3.0  |
| separator | 要显示的分隔符 | ReactNode   | `/`    | 5.3.0 |

## ant-design 的 Badge 有哪些配置？

#### Badge - Badge

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 自定义小圆点的颜色 | string | - |
| count | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | ReactNode | - |
| classNames | 语义化结构 class | Record<SemanticDOM, string> | - | 5.7.0 |
| dot | 不展示数字，只有一个小红点 | boolean | false |
| offset | 设置状态点的位置偏移 | \[number, number] | - |
| overflowCount | 展示封顶的数字值 | number | 99 |
| showZero | 当数值为 0 时，是否展示 Badge | boolean | false |
| size | 在设置了 `count` 的前提下有效，设置小圆点的大小 | `default` \| `small` | - | - |
| status | 设置 Badge 为状态点 | `success` \| `processing` \| `default` \| `error` \| `warning` | - |
| styles | 语义化结构 style | Record<SemanticDOM, CSSProperties> | - | 5.7.0 |
| text | 在设置了 `status` 的前提下有效，设置状态点的文本 | ReactNode | - |
| title | 设置鼠标放在状态点上时显示的文字 | string | - |

#### Badge - Badge.Ribbon

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 自定义缎带的颜色 | string | - |
| placement | 缎带的位置，`start` 和 `end` 随文字方向（RTL 或 LTR）变动 | `start` \| `end` | `end` |
| text | 缎带中填入的内容 | ReactNode | - |

#### Badge - `styles`

| 名称      | 说明         | 版本  |
| --------- | ------------ | ----- |
| root      | 设置根元素   | 5.7.0 |
| indicator | 设置徽标元素 | 5.7.0 |

### ant-design 的 Badge - Badge 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 自定义小圆点的颜色 | string | - |
| count | 展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏 | ReactNode | - |
| classNames | 语义化结构 class | Record<SemanticDOM, string> | - | 5.7.0 |
| dot | 不展示数字，只有一个小红点 | boolean | false |
| offset | 设置状态点的位置偏移 | \[number, number] | - |
| overflowCount | 展示封顶的数字值 | number | 99 |
| showZero | 当数值为 0 时，是否展示 Badge | boolean | false |
| size | 在设置了 `count` 的前提下有效，设置小圆点的大小 | `default` \| `small` | - | - |
| status | 设置 Badge 为状态点 | `success` \| `processing` \| `default` \| `error` \| `warning` | - |
| styles | 语义化结构 style | Record<SemanticDOM, CSSProperties> | - | 5.7.0 |
| text | 在设置了 `status` 的前提下有效，设置状态点的文本 | ReactNode | - |
| title | 设置鼠标放在状态点上时显示的文字 | string | - |

### ant-design 的 Badge - Badge.Ribbon 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 自定义缎带的颜色 | string | - |
| placement | 缎带的位置，`start` 和 `end` 随文字方向（RTL 或 LTR）变动 | `start` \| `end` | `end` |
| text | 缎带中填入的内容 | ReactNode | - |

### ant-design 的 Badge - `styles` 有哪些配置？

| 名称      | 说明         | 版本  |
| --------- | ------------ | ----- |
| root      | 设置根元素   | 5.7.0 |
| indicator | 设置徽标元素 | 5.7.0 |

## ant-design 的 Avatar 有哪些配置？

#### Avatar - Avatar

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| alt | 图像无法显示时的替代文本 | string | - |
| gap | 字符类型距离左右两侧边界单位像素 | number | 4 | 4.3.0 |
| icon | 设置头像的自定义图标 | ReactNode | - |
| shape | 指定头像的形状 | `circle` \| `square` | `circle` |
| size | 设置头像的大小 | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` | 4.7.0 |
| src | 图片类头像的资源地址或者图片元素 | string \| ReactNode | - | ReactNode: 4.8.0 |
| srcSet | 设置图片类头像响应式资源地址 | string | - |
| draggable | 图片是否允许拖动 | boolean \| `'true'` \| `'false'` | true |
| crossOrigin | CORS 属性设置 | `'anonymous'` \| `'use-credentials'` \| `''` | - | 4.17.0 |
| onError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => boolean | - |

#### Avatar - Avatar.Group (4.5.0+)

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| maxCount | 显示的最大头像个数 | number | - |
| maxPopoverPlacement | 多余头像气泡弹出位置 | `top` \| `bottom` | `top` |
| maxPopoverTrigger | 设置多余头像 Popover 的触发方式 | `hover` \| `focus` \| `click` | `hover` | 4.17.0 |
| maxStyle | 多余头像样式 | CSSProperties | - |
| size | 设置头像的大小 | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` | 4.8.0 |
| shape | 设置头像的形状 | `circle` \| `square` | `circle` | 5.8.0 |

### ant-design 的 Avatar - Avatar 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| alt | 图像无法显示时的替代文本 | string | - |
| gap | 字符类型距离左右两侧边界单位像素 | number | 4 | 4.3.0 |
| icon | 设置头像的自定义图标 | ReactNode | - |
| shape | 指定头像的形状 | `circle` \| `square` | `circle` |
| size | 设置头像的大小 | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` | 4.7.0 |
| src | 图片类头像的资源地址或者图片元素 | string \| ReactNode | - | ReactNode: 4.8.0 |
| srcSet | 设置图片类头像响应式资源地址 | string | - |
| draggable | 图片是否允许拖动 | boolean \| `'true'` \| `'false'` | true |
| crossOrigin | CORS 属性设置 | `'anonymous'` \| `'use-credentials'` \| `''` | - | 4.17.0 |
| onError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => boolean | - |

### ant-design 的 Avatar - Avatar.Group (4.5.0+) 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| maxCount | 显示的最大头像个数 | number | - |
| maxPopoverPlacement | 多余头像气泡弹出位置 | `top` \| `bottom` | `top` |
| maxPopoverTrigger | 设置多余头像 Popover 的触发方式 | `hover` \| `focus` \| `click` | `hover` | 4.17.0 |
| maxStyle | 多余头像样式 | CSSProperties | - |
| size | 设置头像的大小 | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` | 4.8.0 |
| shape | 设置头像的形状 | `circle` \| `square` | `circle` | 5.8.0 |

## ant-design 的 Auto-complete 有哪些配置？

#### Auto-complete - API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除 | boolean \| { clearIcon?: ReactNode } | false | 5.8.0: 支持对象形式 |
| autoFocus | 自动获取焦点 | boolean | false |
| backfill | 使用键盘选择选项的时候把选中项回填到输入框中 | boolean | false |
| children (自动完成的数据源) | 自动完成的数据源 | React.ReactElement<OptionProps> \| Array<React.ReactElement<OptionProps>> | - |
| children (自定义输入框) | 自定义输入框 | HTMLInputElement \| HTMLTextAreaElement \| React.ReactElement<InputProps> | \<Input /> |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | boolean | true |
| defaultOpen | 是否默认展开下拉菜单 | boolean | - |
| defaultValue | 指定默认选中的条目 | string | - |
| disabled | 是否禁用 | boolean | false |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - | 4.24.0 |
| popupClassName | 下拉菜单的 className 属性 | string | - | 4.23.0 |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false | boolean \| function(inputValue, option) | true |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode) | () => document.body |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | - |
| open | 是否展开下拉菜单 | boolean | - |
| options | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | { label, value }[] | - |
| placeholder | 输入框提示 | string | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| value | 指定当前选中的条目 | string | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onBlur | 失去焦点时的回调 | function() | - |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | - |
| onDropdownVisibleChange | 展开下拉菜单的回调 | function(open) | - |
| onFocus | 获得焦点时的回调 | function() | - |
| onSearch | 搜索补全项的时候调用 | function(value) | - |
| onSelect | 被选中时调用，参数为选中项的 value 值 | function(value, option) | - |
| onClear | 清除内容时的回调 | function | - | 4.6.0 |

#### Auto-complete - 方法

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

### ant-design 的 Auto-complete - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除 | boolean \| { clearIcon?: ReactNode } | false | 5.8.0: 支持对象形式 |
| autoFocus | 自动获取焦点 | boolean | false |
| backfill | 使用键盘选择选项的时候把选中项回填到输入框中 | boolean | false |
| children (自动完成的数据源) | 自动完成的数据源 | React.ReactElement<OptionProps> \| Array<React.ReactElement<OptionProps>> | - |
| children (自定义输入框) | 自定义输入框 | HTMLInputElement \| HTMLTextAreaElement \| React.ReactElement<InputProps> | \<Input /> |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | boolean | true |
| defaultOpen | 是否默认展开下拉菜单 | boolean | - |
| defaultValue | 指定默认选中的条目 | string | - |
| disabled | 是否禁用 | boolean | false |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - | 4.24.0 |
| popupClassName | 下拉菜单的 className 属性 | string | - | 4.23.0 |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false | boolean \| function(inputValue, option) | true |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codesandbox.io/s/4j168r7jw0) | function(triggerNode) | () => document.body |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | - |
| open | 是否展开下拉菜单 | boolean | - |
| options | 数据化配置选项内容，相比 jsx 定义会获得更好的渲染性能 | { label, value }[] | - |
| placeholder | 输入框提示 | string | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| value | 指定当前选中的条目 | string | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` | `outlined` | 5.13.0 |
| onBlur | 失去焦点时的回调 | function() | - |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | - |
| onDropdownVisibleChange | 展开下拉菜单的回调 | function(open) | - |
| onFocus | 获得焦点时的回调 | function() | - |
| onSearch | 搜索补全项的时候调用 | function(value) | - |
| onSelect | 被选中时调用，参数为选中项的 value 值 | function(value, option) | - |
| onClear | 清除内容时的回调 | function | - | 4.6.0 |

### ant-design 的 Auto-complete - 方法 有哪些配置？

| 名称    | 描述     |
| ------- | -------- |
| blur()  | 移除焦点 |
| focus() | 获取焦点 |

## ant-design 的 App 有哪些配置？

#### App - App

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| component | 设置渲染元素，为 `false` 则不创建 DOM 节点 | ComponentType | div | 5.11.0 |
| message | App 内 Message 的全局配置 | - | 5.3.0 |
| notification | App 内 Notification 的全局配置 | - | 5.3.0 |

### ant-design 的 App - App 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| component | 设置渲染元素，为 `false` 则不创建 DOM 节点 | ComponentType | div | 5.11.0 |
| message | App 内 Message 的全局配置 | - | 5.3.0 |
| notification | App 内 Notification 的全局配置 | - | 5.3.0 |

## ant-design 的 Anchor 有哪些配置？

#### Anchor - Anchor Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| affix | 固定模式 | boolean | true |
| bounds | 锚点区域边界 | number | 5 |
| getContainer | 指定滚动的容器 | () => HTMLElement | () => window |
| getCurrentAnchor | 自定义高亮的锚点 | (activeLink: string) => string | - |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number |
| showInkInFixed | `affix={false}` 时是否显示小方块 | boolean | false |
| targetOffset | 锚点滚动偏移量，默认与 offsetTop 相同，[例子](#components-anchor-demo-targetoffset) | number | - |
| onChange | 监听锚点链接改变 | (currentActiveLink: string) => void | - |
| onClick | `click` 事件的 handler | (e: MouseEvent, link: object) => void | - |
| items | 数据化配置选项内容，支持通过 children 嵌套 | { key, href, title, target, children }[] [具体见](#anchoritem) | - | 5.1.0 |
| direction | 设置导航方向 | `vertical` \| `horizontal` | `vertical` | 5.2.0 |
| replace | 替换浏览器历史记录中项目的 href 而不是推送它 | boolean | false | 5.7.0 |

#### Anchor - AnchorItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| key | 唯一标志 | string \| number | - |
| href | 锚点链接 | string | - |
| target | 该属性指定在何处显示链接的资源 | string | - |
| title | 文字内容 | ReactNode | - |
| children | 嵌套的 Anchor Link，`注意：水平方向该属性不支持` | - |
| replace | 替换浏览器历史记录中的项目 href 而不是推送它 | boolean | false | 5.7.0 |

#### Anchor - Link Props

| 参数   | 说明                           | 类型      | 默认值 |
| ------ | ------------------------------ | --------- | ------ |
| href   | 锚点链接                       | string    | -      |
| target | 该属性指定在何处显示链接的资源 | string    | -      |
| title  | 文字内容                       | ReactNode | -      |

### ant-design 的 Anchor - Anchor Props 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| affix | 固定模式 | boolean | true |
| bounds | 锚点区域边界 | number | 5 |
| getContainer | 指定滚动的容器 | () => HTMLElement | () => window |
| getCurrentAnchor | 自定义高亮的锚点 | (activeLink: string) => string | - |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number |
| showInkInFixed | `affix={false}` 时是否显示小方块 | boolean | false |
| targetOffset | 锚点滚动偏移量，默认与 offsetTop 相同，[例子](#components-anchor-demo-targetoffset) | number | - |
| onChange | 监听锚点链接改变 | (currentActiveLink: string) => void | - |
| onClick | `click` 事件的 handler | (e: MouseEvent, link: object) => void | - |
| items | 数据化配置选项内容，支持通过 children 嵌套 | { key, href, title, target, children }[] [具体见](#anchoritem) | - | 5.1.0 |
| direction | 设置导航方向 | `vertical` \| `horizontal` | `vertical` | 5.2.0 |
| replace | 替换浏览器历史记录中项目的 href 而不是推送它 | boolean | false | 5.7.0 |

### ant-design 的 Anchor - AnchorItem 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| key | 唯一标志 | string \| number | - |
| href | 锚点链接 | string | - |
| target | 该属性指定在何处显示链接的资源 | string | - |
| title | 文字内容 | ReactNode | - |
| children | 嵌套的 Anchor Link，`注意：水平方向该属性不支持` | - |
| replace | 替换浏览器历史记录中的项目 href 而不是推送它 | boolean | false | 5.7.0 |

### ant-design 的 Anchor - Link Props 有哪些配置？

| 参数   | 说明                           | 类型      | 默认值 |
| ------ | ------------------------------ | --------- | ------ |
| href   | 锚点链接                       | string    | -      |
| target | 该属性指定在何处显示链接的资源 | string    | -      |
| title  | 文字内容                       | ReactNode | -      |

## ant-design 的 Alert 有哪些配置？

#### Alert - API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| action | 自定义操作项 | ReactNode | - | 4.9.0 |
| afterClose | 关闭动画结束后触发的回调函数 | () => void | - |
| banner | 是否用作顶部公告 | boolean | false |
| closeIcon | 自定义关闭 Icon，>=5.7.0: 设置为 `null` 或 `false` 时隐藏关闭按钮 | boolean \| ReactNode | `<CloseOutlined />` |
| description | 警告提示的辅助性文字介绍 | ReactNode | - |
| icon | 自定义图标，`showIcon` 为 true 时有效 | ReactNode | - |
| message | 警告提示内容 | ReactNode | - |
| showIcon | 是否显示辅助图标 | boolean | false，`banner` 模式下默认值为 true |
| type | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string | `info`，`banner` 模式下默认值为 `warning` |
| onClose | 关闭时触发的回调函数 | (e: MouseEvent) => void | - |

#### Alert - Alert.ErrorBoundary

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 自定义错误内容，如果未指定会展示报错堆栈 | ReactNode | {{ error stack }} |
| message | 自定义错误标题，如果未指定会展示原生报错信息 | ReactNode | {{ error }} |

### ant-design 的 Alert - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| action | 自定义操作项 | ReactNode | - | 4.9.0 |
| afterClose | 关闭动画结束后触发的回调函数 | () => void | - |
| banner | 是否用作顶部公告 | boolean | false |
| closeIcon | 自定义关闭 Icon，>=5.7.0: 设置为 `null` 或 `false` 时隐藏关闭按钮 | boolean \| ReactNode | `<CloseOutlined />` |
| description | 警告提示的辅助性文字介绍 | ReactNode | - |
| icon | 自定义图标，`showIcon` 为 true 时有效 | ReactNode | - |
| message | 警告提示内容 | ReactNode | - |
| showIcon | 是否显示辅助图标 | boolean | false，`banner` 模式下默认值为 true |
| type | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string | `info`，`banner` 模式下默认值为 `warning` |
| onClose | 关闭时触发的回调函数 | (e: MouseEvent) => void | - |

### ant-design 的 Alert - Alert.ErrorBoundary 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 自定义错误内容，如果未指定会展示报错堆栈 | ReactNode | {{ error stack }} |
| message | 自定义错误标题，如果未指定会展示原生报错信息 | ReactNode | {{ error }} |

## ant-design 的 Affix 有哪些配置？

#### Affix - API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number | - |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | 0 |
| target | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |
| onChange | 固定状态改变时触发的回调函数 | (affixed?: boolean) => void | - |

### ant-design 的 Affix - API 有哪些配置？

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number | - |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | 0 |
| target | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |
| onChange | 固定状态改变时触发的回调函数 | (affixed?: boolean) => void | - |
