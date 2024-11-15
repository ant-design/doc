### 在 `2024-11-13` 更新的 `5.22.1` 版本更新了什么？
  
  * 🛠 调整 DatePicker.RangePicker 当 `needConfirm` 切用户未提交日期时，不允许通过点击输入框切换到下一个字段。[#51591](https://github.com/ant-design/ant-design/pull/51591) [@zombieJ](https://github.com/zombieJ)
* 🛠 禁用 Input.OTP `ctrl + z` 操作以防止数据变化非预期的问题。[#51609](https://github.com/ant-design/ant-design/pull/51609) [@zombieJ](https://github.com/zombieJ)
* 🐞 修复 Select 标签模式下展示异常的问题。[#51605](https://github.com/ant-design/ant-design/pull/51605) [@guoyunhe](https://github.com/guoyunhe)
* 🐞 修复 Badge `count` 在 Safari 下动画丢失的问题。[#51598](https://github.com/ant-design/ant-design/pull/51598) [@zombieJ](https://github.com/zombieJ)
* 🐞 修复 Tabs `centered` 下标签展示不全的问题。[#51571](https://github.com/ant-design/ant-design/pull/51571) [@DDDDD12138](https://github.com/DDDDD12138)
* 🐞 修复 Transfer 受控 `dataSource` 和 `selectedKeys` 时，偶尔会出现勾选不正确的问题。[#51523](https://github.com/ant-design/ant-design/pull/51523) [@IsKaros](https://github.com/IsKaros)
* 🐞 回滚 Button `display` 的 `inline-flex` 为 `inline-block` 以解决 Icon 位置偏移的问题。[#51588](https://github.com/ant-design/ant-design/pull/51588) [@Wxh16144](https://github.com/Wxh16144)

  
### 在 `2024-11-12` 更新的 `5.22.0` 版本更新了什么？
  
  * 🤖 Upload 导出类型 DraggerProps。[#51546](https://github.com/ant-design/ant-design/pull/51546) [@DBvc](https://github.com/DBvc)
* 🤖 将 defaultValue 属性添加到 TimePicker.RangePicker 示例中。[#51413](https://github.com/ant-design/ant-design/pull/51413) [@nathanlao](https://github.com/nathanlao)
* 🤖 Message 优化 message.config 中的 top 类型。[#51468](https://github.com/ant-design/ant-design/pull/51468) [@Fog3211](https://github.com/Fog3211)
* 🤖 优化 Tree 和 TreeSelect 的 TS 定义。[#51251](https://github.com/ant-design/ant-design/pull/51251) [@afc163](https://github.com/afc163)

  
### 在 `2024-10-28` 更新的 `5.21.6` 版本更新了什么？
  
  * 💄 优化 Splitter 在 SSR 下预渲染的样式。[#51378](https://github.com/ant-design/ant-design/pull/51378)
* 💄 增大 Splitter 折叠按钮点击区域，提高可用性。[#51383](https://github.com/ant-design/ant-design/pull/51383) [@aojunhao123](https://github.com/aojunhao123)

  
### 在 `2024-10-21` 更新的 `5.21.5` 版本更新了什么？
  
  * 🐞 修复 Cascader `limit` 属性设置 `false` 不生效的问题。[#51263](https://github.com/ant-design/ant-design/pull/51263) [@dongbanban](https://github.com/dongbanban)
* 🐞 修复 DatePicker 的禁用日期项无法响应鼠标事件的问题。[#51294](https://github.com/ant-design/ant-design/pull/51294) [@ajenkins-mparticle](https://github.com/ajenkins-mparticle)
* 🐞 修复 FloatButton 悬浮菜单难以点击的问题。[#51208](https://github.com/ant-design/ant-design/pull/51208) [@aojunhao123](https://github.com/aojunhao123)
* 🐞 修复 QRCode `onRefresh` 属性不生效的问题。[#51315](https://github.com/ant-design/ant-design/pull/51315) [@kiner-tang](https://github.com/kiner-tang)
* 🐞 修复 Typography 中的超链接无法被用户选中的问题。[#51243](https://github.com/ant-design/ant-design/pull/51243) [@thinkasany](https://github.com/thinkasany)
* 💄 修复 Badge 文本样式 token 不正确的问题。[#51252](https://github.com/ant-design/ant-design/pull/51252) [@Wxh16144](https://github.com/Wxh16144)
* 💄 修复 Layout 折叠按钮样式缺失的问题。[#51313](https://github.com/ant-design/ant-design/pull/51313) [@aojunhao123](https://github.com/aojunhao123)
* 🛠 优化 Button 事件处理器实现。[#42037](https://github.com/ant-design/ant-design/pull/42037) [@SohaibRaza](https://github.com/SohaibRaza)
* 🛠 优化 Splitter 样式 token 的命名语义。[#51223](https://github.com/ant-design/ant-design/pull/51223) [@wanpan11](https://github.com/wanpan11)

  
### 在 `2024-10-14` 更新的 `5.21.4` 版本更新了什么？
  
  * 🤖 优化 Switch `eventHandler` 类型。[#51165](https://github.com/ant-design/ant-design/pull/51165) [@thinkasany](https://github.com/thinkasany)

  
### 在 `2024-10-09` 更新的 `5.21.3` 版本更新了什么？
  
  * 🤖 优化 Slider `eventName` 类型。[#51156](https://github.com/ant-design/ant-design/pull/51156) [@thinkasany](https://github.com/thinkasany)

  
### 在 `2024-10-01` 更新的 `5.21.2` 版本更新了什么？
  
  * 🐞 修复 Splitter 在触屏设备上拖拽异常的问题。[#51060](https://github.com/ant-design/ant-design/pull/51060) [@sakuraee](https://github.com/sakuraee)
* 💄 修复 Splitter.Panel 无法隐藏的问题。[#51032](https://github.com/ant-design/ant-design/pull/51032) [@wanpan11](https://github.com/wanpan11)

  
### 在 `2024-09-25` 更新的 `5.21.1` 版本更新了什么？
  
  * 🐞 修复 Button `type="link"` 错误使用 `colorPrimary` 的问题。[#50962](https://github.com/ant-design/ant-design/pull/50962) [@coding-ice](https://github.com/coding-ice)
* 🐞 修复 Button 样式类名权重问题导致的自定义渐变样式覆盖失效的问题。[#50962](https://github.com/ant-design/ant-design/pull/50962) [@coding-ice](https://github.com/coding-ice)
* 💄 修复 Transfer 在自定义为 TableTransfer 时，宽度不正确的问题。[#50974](https://github.com/ant-design/ant-design/pull/50974) [@zombieJ](https://github.com/zombieJ)
* 🇹🇷 补充 Table 组件 `filterCheckall` 的土耳其语文案。[#51000](https://github.com/ant-design/ant-design/pull/51000) [@ytahirkose](https://github.com/ytahirkose)

  
### 在 `2024-09-22` 更新的 `5.21.0 🔥` 版本更新了什么？
  
  * 🤖 Checkbox 新增 `onFocus` 和 `onBlur` 类型定义。[#50842](https://github.com/ant-design/ant-design/pull/50842) [@huiliangShen](https://github.com/huiliangShen)
* 🤖 修复 Badge 属性类型定义不支持传递鼠标事件的问题。[#50774](https://github.com/ant-design/ant-design/pull/50774) [@yuanliu147](https://github.com/yuanliu147)

  
### 在 `2024-09-09` 更新的 `5.20.6` 版本更新了什么？
  
  * 🤖 修复 Collapse 的 `onChange` 的函数入参类型。[#50754](https://github.com/ant-design/ant-design/pull/50754) [@yuanliu147](https://github.com/yuanliu147)

  
### 在 `2024-09-03` 更新的 `5.20.5` 版本更新了什么？
  
  * 🛠 调整 Tree 与 TreeSelect 的 `defaultExpandAll` 的行为，仅将有子节点的 `treeNode` 加入 `expandedKeys` 以防止在大数据与 `loadData` 异步的情况下引发的性能问题。[#50689](https://github.com/ant-design/ant-design/pull/50689) [@zombieJ](https://github.com/zombieJ)
* 🐞 修复 Cascader 在 `multiple` 下搜索不会显示父节点作为选项的问题。[#50689](https://github.com/ant-design/ant-design/pull/50689)
* 🐞 修复 Typography `ellipsis.tooltip.title` 配置 ReactNode 会导致死循环的问题。[#50688](https://github.com/ant-design/ant-design/pull/50688) [@zombieJ](https://github.com/zombieJ)

  
### 在 `2024-09-02` 更新的 `5.20.4` 版本更新了什么？
  
  * 🐞 修复 Menu 的 `itemPaddingInline` token 不生效的问题。[#50663](https://github.com/ant-design/ant-design/pull/50663) [@coding-ice](https://github.com/coding-ice)
* 🐞 修复 Menu `hover` 时背景色切换渐变效果丢失的问题。[#50624](https://github.com/ant-design/ant-design/pull/50624) [@afc163](https://github.com/afc163)

  
### 在 `2024-08-26` 更新的 `5.20.3` 版本更新了什么？
  
  * 🐞 重构 Typography 在使用 css 原生省略时的检查逻辑，以解决屏幕缩放等情况下的精度问题。[#50514](https://github.com/ant-design/ant-design/pull/50514) [@zombieJ](https://github.com/zombieJ)
* 🐞 修复 ColorPicker 组件在面板上不拖拽直接点击的时候，`onChangeComplete` 返回值不正确的问题。[#50501](https://github.com/ant-design/ant-design/pull/50501) [@zombieJ](https://github.com/zombieJ)
* 🐞 修复 FloatButton.Group 在受控模式下 React 会警告递归更新的问题。[#50500](https://github.com/ant-design/ant-design/pull/50500) [@zombieJ](https://github.com/zombieJ)

  
### 在 `2024-08-19` 更新的 `5.20.2` 版本更新了什么？
  
  * 🤖 将 Table 部分泛型约束 object 回滚为 any，以减少 [#50351](https://github.com/ant-design/ant-design/pull/50351) 造成的 break change。[#50372](https://github.com/ant-design/ant-design/pull/50372) [@crazyair](https://github.com/crazyair)

  
### 在 `2024-08-11` 更新的 `5.20.1` 版本更新了什么？
  
  * 🤖 优化 Table 中所有的 Record 类型从 any 约束为 Object 类型。[#50351](https://github.com/ant-design/ant-design/pull/50351) [@li-jia-nan](https://github.com/li-jia-nan)

  
### 在 `2024-08-03` 更新的 `5.20.0` 版本更新了什么？
  
  * 🇪🇸 改进西班牙语本地化文案。[#50179](https://github.com/ant-design/ant-design/pull/50179) [@sergioalmela](https://github.com/sergioalmela)
* 🇺🇦 补全 `uk_UA` 本地化文案。[#50178](https://github.com/ant-design/ant-design/pull/50178) [@Andrik264](https://github.com/Andrik264)

  
### 在 `2024-07-30` 更新的 `5.19.4` 版本更新了什么？
  
  * 🇵🇱 为 pl\_PL 补充 DatePicker 国际化。[#50023](https://github.com/ant-design/ant-design/pull/50023) [@ang33l](https://github.com/ang33l)
* 🇧🇪🇫🇷 为 fr\_BE fr\_FR 补充 Modal Tour 国际化。[#50058](https://github.com/ant-design/ant-design/pull/50058) [@JaccoGoris](https://github.com/JaccoGoris)

  
### 在 `2024-07-19` 更新的 `5.19.3` 版本更新了什么？
  
  * 🤖 复用 Tooltips 的定义以简化 ColorPicker 的类型声明。[#49949](https://github.com/ant-design/ant-design/pull/49949) [@Wxh16144](https://github.com/Wxh16144)

  
### 在 `2024-07-15` 更新的 `5.19.2` 版本更新了什么？
  
  * 🐞 修复 Tree `icon` 和 `switcherIcon` 参数类型未能正确推导的问题。[#49821](https://github.com/ant-design/ant-design/pull/49821)
* 🐞 回滚 Cascader `multiple` 定义更新导致 `value` 定义丢失的问题。[#49741](https://github.com/ant-design/ant-design/pull/49741) [@YangZhi1](https://github.com/YangZhi1)

  
### 在 `2024-07-05` 更新的 `5.19.1` 版本更新了什么？
  
  * 🤖 修复 Cascader 组件 `multiple` 的类型问题。[#49669](https://github.com/ant-design/ant-design/pull/49669) [@YangZhi1](https://github.com/YangZhi1)

  
### 在 `2024-07-01` 更新的 `5.19.0` 版本更新了什么？
  
  * 🇹🇭 添加了缺失的泰语翻译，包括 `Transfer.deselectAll`、`Text.collapse`、`QRCode.scanned`、`ColorPicker.presetEmpty`。[#49588](https://github.com/ant-design/ant-design/pull/49588) [@Tantatorn-dev](https://github.com/Tantatorn-dev)
* 🇳🇱 Tour 修复了 nl\_NL 本地化问题。[#49612](https://github.com/ant-design/ant-design/pull/49612) [@Hannnnnnnnnnnnnnnn](https://github.com/Hannnnnnnnnnnnnnnn)
* 🇹🇷 调整了 DatePicker 的土耳其语言文案。[#49333](https://github.com/ant-design/ant-design/pull/49333)

  
### 在 `2024-06-19` 更新的 `5.18.3` 版本更新了什么？
  
  * 🐞 回滚 [#49289](https://github.com/ant-design/ant-design/pull/49289) 以修复 5.18.2 引入的 Table 排序状态失效的问题。[#49487](https://github.com/ant-design/ant-design/pull/49487)
* 🛠 将样式处理的部分功能迁移到 `@ant-design/cssinjs` 中。[#49463](https://github.com/ant-design/ant-design/pull/49463) [@YumoImer](https://github.com/YumoImer)
* 🇳🇵 补充 ne\_NP 本地化文案。[#49492](https://github.com/ant-design/ant-design/pull/49492) [@FuliangZhang](https://github.com/FuliangZhang)

  
### 在 `2024-06-17` 更新的 `5.18.2` 版本更新了什么？
  
  * 🇲🇳 添加蒙古语言 (mn\_MN) 翻译。[#49373](https://github.com/ant-design/ant-design/pull/49373) [@JiyinShao](https://github.com/JiyinShao)

  
### 在 `2024-06-12` 更新的 `5.18.1` 版本更新了什么？
  
  * 🇲🇾 补充 Table、Form、Tour 等 ms\_MY 文案。[#49353](https://github.com/ant-design/ant-design/pull/49353) [@cs-gavin-huang](https://github.com/cs-gavin-huang)
* 🇦🇿 补充 DatePicker az\_AZ 文案。[#49247](https://github.com/ant-design/ant-design/pull/49247) [@sabitalizade](https://github.com/sabitalizade)

  
### 在 `2024-06-03` 更新的 `5.18.0` 版本更新了什么？
  
  * 🆕 Progress 新增 `percentPosition` 属性用于控制数值位置。[#48157](https://github.com/ant-design/ant-design/pull/48157) [@LonelySnowman](https://github.com/LonelySnowman)
* 🆕 Progress 的 `size` 属性支持配置为对象值。[#48805](https://github.com/ant-design/ant-design/pull/48805) [@crazyair](https://github.com/crazyair)

  
### 在 `2024-05-27` 更新的 `5.17.4` 版本更新了什么？
  
  * 🤖 修复 Modal `styles.wrapper` TS 定义丢失的问题。[#49055](https://github.com/ant-design/ant-design/pull/49055)
* 🤖 优化 Spin 的 TypeScript 定义并提供更详细的描述信息。[#49036](https://github.com/ant-design/ant-design/pull/49036) [@arvinxx](https://github.com/arvinxx)
* 🤖 优化 Checkbox.Group 的 TypeScript 类型约束。[#49073](https://github.com/ant-design/ant-design/pull/49073)

  
### 在 `2024-05-19` 更新的 `5.17.3` 版本更新了什么？
  
  * 🐞 杂项：修复部分组件在 React 18.3.0 下警告 `findDOMNode` 的问题。[#48958](https://github.com/ant-design/ant-design/pull/48958)
* 🐞 修复 Button 字体大小 token 无效的问题。[#48893](https://github.com/ant-design/ant-design/pull/48893) [@wanpan11](https://github.com/wanpan11)
* 💄 修复 Pagination 组件跳转选择元素样式问题。[#48931](https://github.com/ant-design/ant-design/pull/48931) [@wanpan11](https://github.com/wanpan11)

  
### 在 `2024-05-14` 更新的 `5.17.2` 版本更新了什么？
  
  * 🐞 MISC: 修复 `lib` 产物错误引入 `es` 依赖导致构建错误的问题。[#48914](https://github.com/ant-design/ant-design/pull/48914)

  
### 在 `2024-05-14` 更新的 `5.17.1` 版本更新了什么？
  
  * 🤖 修复 Cascader 多余泛型问题。[#48879](https://github.com/ant-design/ant-design/pull/48879) [@crazyair](https://github.com/crazyair)

  
### 在 `2024-05-03` 更新的 `5.17.0` 版本更新了什么？
  
  * 🇯🇵 补充日语本地化文案。[#48704](https://github.com/ant-design/ant-design/pull/48704) [@edikurniawan-dev](https://github.com/edikurniawan-dev)
* 🇮🇩 补充印尼语本地化文案。[#48703](https://github.com/ant-design/ant-design/pull/48703) [@edikurniawan-dev](https://github.com/edikurniawan-dev)

  
### 在 `2024-04-28` 更新的 `5.16.5` 版本更新了什么？
  
  * 🇪🇸 为 DatePicker 补充 西班牙语 多语言。[#48601](https://github.com/ant-design/ant-design/pull/48601) [@JMMOLLER](https://github.com/JMMOLLER)
* 🇩🇪 为 DatePicker 补充 德语 多语言。[#48586](https://github.com/ant-design/ant-design/pull/48586) [@sebhs](https://github.com/sebhs)

  
### 在 `2024-04-22` 更新的 `5.16.4` 版本更新了什么？
  
  * 🇨🇳 补充 zh\_CN zh\_HK zh\_TW Table 文案。[#48543](https://github.com/ant-design/ant-design/pull/48543) [@thinkasany](https://github.com/thinkasany)
* 🇮🇩 补充 id\_ID DatePicker Form Table 等文案。[#48537](https://github.com/ant-design/ant-design/pull/48537) [#48287](https://github.com/ant-design/ant-design/pull/48287) [@edikurniawan-dev](https://github.com/edikurniawan-dev)
* 🌐 优化 Transfer 本地化，现在反选会使用 `deselectAll` locale 配置。[#48553](https://github.com/ant-design/ant-design/pull/48553) [@coderz-w](https://github.com/coderz-w)

  
### 在 `2024-04-21` 更新的 `5.16.3` 版本更新了什么？
  
  * 🛠 脚本错误发布空包，请勿使用。

  
### 在 `2024-04-15` 更新的 `5.16.2` 版本更新了什么？
  
  * 🐞 修复 Typography 动态配置 `copyable` 或 `editable` 时不会显示操作按钮的问题。[#48350](https://github.com/ant-design/ant-design/pull/48350)
* 🐞 修复 Typography 动态调整 `copyable.text` 不生效的问题。[#48347](https://github.com/ant-design/ant-design/pull/48347)
* 🐞 修复 Typography 的 `ellipsis` 同时配置 `expandable="collapsible"` 和 `row={1}` 时，不会正确省略的问题。[#48340](https://github.com/ant-design/ant-design/pull/48340)

  
### 在 `2024-04-05` 更新的 `5.16.1` 版本更新了什么？
  
  * 🛠 调整 Typography 的 `ellipsis` 使其在 SSR 阶段使用 CSS 省略以优化用户体验。[#48205](https://github.com/ant-design/ant-design/pull/48205)
* 🐞 修复 FloatButton 中同时配置 `tooltip` 和 `badge` 时， `badge` 的自定义背景色会失效的问题。[#48198](https://github.com/ant-design/ant-design/pull/48198) [@LonelySnowman](https://github.com/LonelySnowman)

  
### 在 `2024-03-31` 更新的 `5.16.0` 版本更新了什么？
  
  * 🤖 改进 Transfer 的`key` 类型，将 `key: string` 改为`key: React.Key`。[#47879](https://github.com/ant-design/ant-design/pull/47879) [@madocto](https://github.com/madocto)
* 🤖 Table 支持泛型对 dataIndex 属性校验。[#48190](https://github.com/ant-design/ant-design/pull/48190) [@crazyair](https://github.com/crazyair)

  
### 在 `2024-03-25` 更新的 `5.15.4` 版本更新了什么？
  
  * 🤖 Affix 导出 AffixRef 类型。[#47982](https://github.com/ant-design/ant-design/pull/47982) [@li-jia-nan](https://github.com/li-jia-nan)
* 🤖 MISC: 修复 GetRef 工具类型不能正确获得某些组件 ref 类型的问题。[#47983](https://github.com/ant-design/ant-design/pull/47983)

  
### 在 `2024-03-17` 更新的 `5.15.3` 版本更新了什么？
  
  * 💄 统一 Modal、Drawer、notification 和 Tour 关闭按钮的样式，并增大 Modal 和 Drawer 关闭按钮的交互区域使其更容易点击。[#47909](https://github.com/ant-design/ant-design/pull/47909)
* 🐞 修复 Badge 和文本元素在 Space 下排版不对齐的问题。[#47908](https://github.com/ant-design/ant-design/pull/47908)
* 💄 修复 Upload 列表行动点换行的问题。[#47898](https://github.com/ant-design/ant-design/pull/47898)
* 🐞 修复 Typography 配置的 `ellipsis.symbol` 超出单行高度时，省略行数不正确的问题。[#47889](https://github.com/ant-design/ant-design/pull/47889)
* 🐞 修复 DatePicker 配置自定义 `controlHeight` 时展示高度不正确的问题。[#47874](https://github.com/ant-design/ant-design/pull/47874)
* 🐞 修复 DatePicker 设置 `multiple` 多选换行时行与行之间没有间隙的问题。[#47821](https://github.com/ant-design/ant-design/pull/47821)
* 💄 调深 Empty 文本色彩使其更清晰可读一些。[#47268](https://github.com/ant-design/ant-design/pull/47268) [@evgmol](https://github.com/evgmol)

  
### 在 `2024-03-11` 更新的 `5.15.2` 版本更新了什么？
  
  * 🛠 调整 Tour、Dropdown、Menu、Tabs、Mentions、Picker、Select、TreeSelect、Cascader、Tooltip、Popover 弹层点击外部的关闭时机，从 `click` 调整至 `mouseDown` 以统一解决一些与弹窗相关交互中的事件时序问题。[#47775](https://github.com/ant-design/ant-design/pull/47775)
* 🐞 修复 Descriptions 内容区域额外的边距问题。[#47737](https://github.com/ant-design/ant-design/pull/47737)
* 🐞 修复 Anchor 界限值为 0 时 active 状态错误的问题。[#47795](https://github.com/ant-design/ant-design/pull/47795)[@winchesHe](https://github.com/winchesHe)
* 💄 给 ColorPicker 清除按钮补上鼠标 hover 反馈样式。[#47761](https://github.com/ant-design/ant-design/pull/47761)
* 🇷🇺 更新 DatePicker 的俄语文案。[#47768](https://github.com/ant-design/ant-design/pull/47768) [@AlexeyTeterin](https://github.com/AlexeyTeterin)

  
### 在 `2024-03-06` 更新的 `5.15.1` 版本更新了什么？
  
  * 🐞 回滚移除 Tag 默认间距的代码。[#47736](https://github.com/ant-design/ant-design/pull/47736)
* 🇷🇺 更新 DatePicker 的俄语文案。[#47705](https://github.com/ant-design/ant-design/pull/47705)

  
### 在 `2024-03-02` 更新的 `5.15.0` 版本更新了什么？
  
  * 🆕 Table 新增 `filterOnClose` 用于指定是否在筛选菜单关闭时触发筛选。[#47451](https://github.com/ant-design/ant-design/pull/47451) [@xsjcTony](https://github.com/xsjcTony)
* 🆕 Table 新增 `components.header.table` 以自定义滚动列时的标题组件。[#47382](https://github.com/ant-design/ant-design/pull/47382)
* 🐞 修复 Table `sticky` 下，初次渲染不会显示滚动条的问题。[#47382](https://github.com/ant-design/ant-design/pull/47382)
* 🐞 修复 Table `column.title` 为空时列头没有使用 `th` 元素的问题。[#47382](https://github.com/ant-design/ant-design/pull/47382)
* 🐞 修复 Table 使用虚拟列表时 `prefixCls` 无效的问题。[#47639](https://github.com/ant-design/ant-design/pull/47639)
* 💄 修复 Table 固定列时阴影展示异常的问题。[#47518](https://github.com/ant-design/ant-design/pull/47518)

  
### 在 `2024-02-23` 更新的 `5.14.2` 版本更新了什么？
  
  * 🐞 修复 DatePicker.RangePicker 的时间列有时不会滚动到正确位置的问题。[#47542](https://github.com/ant-design/ant-design/pull/47542)
* 🐞 修复 Modal 在打开期间会触发其他鼠标事件的问题。[#47508](https://github.com/ant-design/ant-design/pull/47508) [@MadCcc](https://github.com/MadCcc)
* 🐞 修复 Avatar.Group 的 tooltip 存在多余 dom 残留的问题。[#47478](https://github.com/ant-design/ant-design/pull/47478)
* 💄 修复 Progress 组件多余的 `margin` 样式。[#47493](https://github.com/ant-design/ant-design/pull/47493) [@li-jia-nan](https://github.com/li-jia-nan)
* 💄 修复 Table 滚动条在暗黑模式下的颜色。[#47487](https://github.com/ant-design/ant-design/pull/47487) [@wkmyws](https://github.com/wkmyws)
* 💄 修复 Layout 内容字体在暗黑模式下的颜色。[#47441](https://github.com/ant-design/ant-design/pull/47441) [@nova1751](https://github.com/nova1751)
* 💄 修复 Menu 组件在水平暗黑模式下自定义 `darkItemSelectedColor` 和 `darkItemSelectedBg` token 不生效的问题。[#47463](https://github.com/ant-design/ant-design/pull/47463) [@gandavarapurajasekhar](https://github.com/gandavarapurajasekhar)

  
### 在 `2024-02-13` 更新的 `5.14.1` 版本更新了什么？
  
  * 🐞 修复 Steps `type="inline"` 时鼠标无法 hover 到正确的步骤上的问题。[#47406](https://github.com/ant-design/ant-design/pull/47406)
* 🐞 修复 DatePicker 与 TimePicker 弹出面板箭头没有考虑面板本身圆角的问题。[#47389](https://github.com/ant-design/ant-design/pull/47389)
* 🐞 修复 Dropdown `menu.items` 为空时依然显示的问题。[#47375](https://github.com/ant-design/ant-design/pull/47375)
* 🐞 修复 Tag 无边框模式没有正确使用 `defaultBg` 组件 token 的问题。[#47372](https://github.com/ant-design/ant-design/pull/47372) [@MadCcc](https://github.com/MadCcc)
* 🐞 杂项：修复主题 `inherit` 配置会隔断 `hashed` 和 `cssVar` 配置的问题。[#47360](https://github.com/ant-design/ant-design/pull/47360) [@MadCcc](https://github.com/MadCcc)
* 🐞 修复 Calendar 在切换年月时，面板没有跟着切换的问题。[#47361](https://github.com/ant-design/ant-design/pull/47361)
* 💄 修复 Table 在虚拟模式下子表格的样式问题。[#47333](https://github.com/ant-design/ant-design/pull/47333) [@Enigama](https://github.com/Enigama)

  
### 在 `2024-02-04` 更新的 `5.14.0` 版本更新了什么？
  
  * 🆕 ConfigProvide 支持 Transfer 的 `selectionsIcon`。[#47301](https://github.com/ant-design/ant-design/pull/47301) [@li-jia-nan](https://github.com/li-jia-nan)
* 🆕 ConfigProvide 支持 Tabs 的 `addIcon` 和 `moreIcon`。[#47274](https://github.com/ant-design/ant-design/pull/47274) [@li-jia-nan](https://github.com/li-jia-nan)
* 🆕 ConfigProvide 支持 Image 的 `closeIcon`。[#47252](https://github.com/ant-design/ant-design/pull/47252) [@li-jia-nan](https://github.com/li-jia-nan)
* 🆕 ConfigProvide 支持 Tag 的 `closeIcon`。[#47250](https://github.com/ant-design/ant-design/pull/47250) [@li-jia-nan](https://github.com/li-jia-nan)
* 🆕 ConfigProvide 支持 Notification 的 `closeIcon`。[#47244](https://github.com/ant-design/ant-design/pull/47244) [@li-jia-nan](https://github.com/li-jia-nan)
* 🆕 ConfigProvide 支持 Modal 的 `closeIcon`。[#47226](https://github.com/ant-design/ant-design/pull/47226) [@li-jia-nan](https://github.com/li-jia-nan)
* 🆕 ConfigProvide 支持 Table 的 `expandIcon`。[#47225](https://github.com/ant-design/ant-design/pull/47225) [@li-jia-nan](https://github.com/li-jia-nan)
* 🆕 ConfigProvide 支持 Tour 的 `closeIcon`。[#47200](https://github.com/ant-design/ant-design/pull/47200) [@li-jia-nan](https://github.com/li-jia-nan)
* 🆕 ConfigProvide 支持 Drawer 的 `icons`。[#46894](https://github.com/ant-design/ant-design/pull/46894) [@li-jia-nan](https://github.com/li-jia-nan)
* 🆕 ConfigProvide 支持 Alert 的 `closeIcon`。[#47235](https://github.com/ant-design/ant-design/pull/47235) [@li-jia-nan](https://github.com/li-jia-nan)

  
### 在 `2024-01-28` 更新的 `5.13.3` 版本更新了什么？
  
  * 🇮🇹 为 Tour 组件补充 it\_IT 本地化文案。[#47148](https://github.com/ant-design/ant-design/pull/47148) [@nikzanda](https://github.com/nikzanda)
* 🇯🇵 为 Table 组件筛选功能补充 ja\_JP 本地化文案。[#47072](https://github.com/ant-design/ant-design/pull/47072) [@sebastibe](https://github.com/sebastibe)

  
### 在 `2024-01-19` 更新的 `5.13.2` 版本更新了什么？
  
  * 🐞 修复 Image 组件 `preview.getContainer` 值为 false 时，内联渲染不生效的问题。[#47034](https://github.com/ant-design/ant-design/pull/47034) [@FEyudong](https://github.com/FEyudong)
* 🐞 修复 Modal 静态方法配置 `prefixCls` 时，会改变所有子元素的 `prefixCls` 并导致动画丢失的问题。[#47010](https://github.com/ant-design/ant-design/pull/47010)
* 🐞 修复 Space.Compact 与 DatePicker 一起使用导致 DatePicker 的确认按钮样式错误。[#46769](https://github.com/ant-design/ant-design/pull/46769) [@Fatpandac](https://github.com/Fatpandac)
* 💄 优化 Tree 拖拽节点和展开收起按钮的鼠标 hover 样式。[#46974](https://github.com/ant-design/ant-design/pull/46974)

  
### 在 `2024-01-15` 更新的 `5.13.1` 版本更新了什么？
  
  * 🐞 修复 Checkbox 组件在 `@types/react` 16 或 17 版本下 Typescript 报错。[#46962](https://github.com/ant-design/ant-design/pull/46962) [@crazyair](https://github.com/crazyair)

  
### 在 `2024-01-13` 更新的 `5.13.0` 版本更新了什么？
  
  * 🇩🇰 完善 da\_DK Form 文案。[#46493](https://github.com/ant-design/ant-design/pull/46493) [@Eloi0424](https://github.com/Eloi0424)

  
### 在 `2024-01-05` 更新的 `5.12.8` 版本更新了什么？
  
  * 🐞 修复 Upload.Dragger 内容不居中和多余的 focus 样式的问题。[#46810](https://github.com/ant-design/ant-design/pull/46810)
* 🐞 修复 Popconfirm 配置空的 `okText` 和 `cancelText` 时不会被预设 locale 兜底的问题。[#46812](https://github.com/ant-design/ant-design/pull/46812)
* 🐞 修复 Progress 线性模式圆角无法覆盖的问题。[#46789](https://github.com/ant-design/ant-design/pull/46789)
* 🐞 修复 Typography 没有 `children` 并启用 `copyable` 时多余的 margin。[#46748](https://github.com/ant-design/ant-design/pull/46748)
* 🐞 修复 Typography 复制成功后的图标颜色问题。[#46748](https://github.com/ant-design/ant-design/pull/46748)

  
### 在 `2024-01-02` 更新的 `5.12.7` 版本更新了什么？
  
  * 🐞 MISC: 修复升级 `@ctrl/tinycolor@4.0.2` 导致的错误。[#46744](https://github.com/ant-design/ant-design/pull/46744) [@MadCcc](https://github.com/MadCcc)
* 🐞 修复 Mentions 选项高度偏大的问题。[#46737](https://github.com/ant-design/ant-design/pull/46737)

  
### 在 `2023-12-30` 更新的 `5.12.6` 版本更新了什么？
  
  * 🤖 ConfigProvider 导出 `ConfigProviderProps` 类型。[#46605](https://github.com/ant-design/ant-design/pull/46605) [@li-jia-nan](https://github.com/li-jia-nan)

  
### 在 `2023-12-22` 更新的 `5.12.5` 版本更新了什么？
  
  * 💄 修复 Tabs 在可编辑模式下只剩新增按钮时的样式问题。[#46585](https://github.com/ant-design/ant-design/pull/46585) [@hzyhbk](https://github.com/hzyhbk)
* 💄 修复 Progress `strokeLinecap` 不生效的问题。[#46551](https://github.com/ant-design/ant-design/pull/46551) [@ZN1996](https://github.com/ZN1996)
* 🐞 修复 ColorPicker 配置 `prefixCls` 不生效的问题。[#46561](https://github.com/ant-design/ant-design/pull/46561)

  
### 在 `2023-12-19` 更新的 `5.12.4` 版本更新了什么？
  
  * 🐞 修复 DatePicker 组件在 CSS 变量模式下的样式错乱问题。[#46526](https://github.com/ant-design/ant-design/pull/46526)

  
### 在 `2023-12-18` 更新的 `5.12.3` 版本更新了什么？
  
  * 💄 修复 Tag 组件在 SSR 场景下的样式丢失问题。[#46500](https://github.com/ant-design/ant-design/pull/46500) [@MadCcc](https://github.com/MadCcc)
* 🐞 Upload 的 `disabled` 属性不再对下载按钮生效。[#46454](https://github.com/ant-design/ant-design/pull/46454)
* 💄 Upload.Dragger 增加一个水平内边距。[#46457](https://github.com/ant-design/ant-design/pull/46457)
* 🐞 修复 Upload `actions` 的颜色问题。[#46456](https://github.com/ant-design/ant-design/pull/46456)
* 🐞 修复 Form 使用 `getValueProps` 展示值无法更新的问题。[#46445](https://github.com/ant-design/ant-design/pull/46445)
* 💄 修复 Checkbox 自定义 `token.lineWidth` 时勾选箭头错位问题。[#46431](https://github.com/ant-design/ant-design/pull/46431)
* 🐞 修复 Select 组件定制 token 会让 padding 失效的问题。[#46427](https://github.com/ant-design/ant-design/pull/46427) [@MadCcc](https://github.com/MadCcc)
* 🐞 修复 Message 在 `cssVar` 模式下覆盖组件 token 无效的问题。[#46415](https://github.com/ant-design/ant-design/pull/46415) [@MadCcc](https://github.com/MadCcc)
* 💄 Flex 组件不应该应用额外的样式。[#46404](https://github.com/ant-design/ant-design/pull/46404) [@li-jia-nan](https://github.com/li-jia-nan)

  
### 在 `2023-12-11` 更新的 `5.12.2` 版本更新了什么？
  
  * 🤖 修复 Descriptions TS 定义不支持 `id` 属性的问题。[#46367](https://github.com/ant-design/ant-design/pull/46367) [@RSS1102](https://github.com/RSS1102)

  
### 在 `2023-12-04` 更新的 `5.12.1` 版本更新了什么？
  
  * 🐞 MISC: 修复 token 转换 less 变量丢失的问题。[#46250](https://github.com/ant-design/ant-design/pull/46250)
* 🐞 修复 Notification 标题太长时会与关闭图标重叠的问题。[#46211](https://github.com/ant-design/ant-design/pull/46211) [@zh-lx](https://github.com/zh-lx)

  
### 在 `2023-12-04` 更新的 `5.12.0` 版本更新了什么？
  
  * 🤖 更新 FloatButton 的类型定义，透出原生事件处理函数类型。[#46175](https://github.com/ant-design/ant-design/pull/46175) [@li-jia-nan](https://github.com/li-jia-nan)

  
### 在 `2023-11-27` 更新的 `5.11.5` 版本更新了什么？
  
  * 🐞 MISC: 修复打包 `dist` 产物错误。[#46103](https://github.com/ant-design/ant-design/pull/46103) [@MadCcc](https://github.com/MadCcc)
* 💄 修复 DatePicker 禁用状态下悬浮样式。[#45940](https://github.com/ant-design/ant-design/pull/45940) [@crazyair](https://github.com/crazyair)

  
### 在 `2023-11-24` 更新的 `5.11.4` 版本更新了什么？
  
  * 🤖 导出 Radio 和 Checkbox 组件的 `required` 属性的类型定义。[#46028](https://github.com/ant-design/ant-design/pull/46028) [@nnmax](https://github.com/nnmax)

  
### 在 `2023-11-22` 更新的 `5.11.3` 版本更新了什么？
  
  * 🆕 Image 预览支持移动触摸事件交互。[#45989](https://github.com/ant-design/ant-design/pull/45989) [@JarvisArt](https://github.com/JarvisArt)
* 🐞 修复 Image 预览在嵌套弹框中 `z-index` 设置不正确的问题。[#45979](https://github.com/ant-design/ant-design/pull/45979) [@kiner-tang](https://github.com/kiner-tang)

  
### 在 `2023-11-17` 更新的 `5.11.2` 版本更新了什么？
  
  * 🤖 优化 List 属性 `gutter` 的类型定义。[#45791](https://github.com/ant-design/ant-design/pull/45791) [@Asanio06](https://github.com/Asanio06)

  
### 在 `2023-11-09` 更新的 `5.11.1` 版本更新了什么？
  
  * 🤖 App 支持泛型定义。[#45669](https://github.com/ant-design/ant-design/pull/45669) [@JexLau](https://github.com/JexLau)

  
### 在 `2023-11-03` 更新的 `5.11.0` 版本更新了什么？
  
  * 优化 Menu 组件 `z-index` 逻辑。[#45498](https://github.com/ant-design/ant-design/pull/45498) [@kiner-tang](https://github.com/kiner-tang)
* 优化 DatePicker、TimePicker 组件 `z-index` 逻辑。[#45497](https://github.com/ant-design/ant-design/pull/45497) [@kiner-tang](https://github.com/kiner-tang)
* 优化 Drawer 组件 `z-index` 逻辑。[#45496](https://github.com/ant-design/ant-design/pull/45496) [#45417](https://github.com/ant-design/ant-design/pull/45417) [@kiner-tang](https://github.com/kiner-tang)
* 优化 Cascader、TreeSelect、AutoComplete 组件 `z-index` 逻辑。[#45494](https://github.com/ant-design/ant-design/pull/45494) [@kiner-tang](https://github.com/kiner-tang)
* 优化 Dropdown 组件 `z-index` 逻辑。[#45486](https://github.com/ant-design/ant-design/pull/45486) [@kiner-tang](https://github.com/kiner-tang)
* 优化 Tour 组件 `z-index` 逻辑。[#45425](https://github.com/ant-design/ant-design/pull/45425) [@kiner-tang](https://github.com/kiner-tang)
* 优化 Tooltip 组件 `z-index` 逻辑。[#45422](https://github.com/ant-design/ant-design/pull/45422) [@kiner-tang](https://github.com/kiner-tang)
* 优化 Popover 组件 `z-index` 逻辑。[#45420](https://github.com/ant-design/ant-design/pull/45420) [@kiner-tang](https://github.com/kiner-tang)
* 优化 Popconfirm 组件 `z-index` 逻辑。[#45421](https://github.com/ant-design/ant-design/pull/45421) [@kiner-tang](https://github.com/kiner-tang)
* 优化 Modal、Select 组件 `z-index` 逻辑。[#45346](https://github.com/ant-design/ant-design/pull/45346) [@kiner-tang](https://github.com/kiner-tang)

  
### 在 `2023-10-30` 更新的 `5.10.3` 版本更新了什么？
  
  * 🤖 修复 `App.useApp` 中 `modal` 类型定义。[#45462](https://github.com/ant-design/ant-design/pull/45462) [@mjss](https://github.com/mjss)

  
### 在 `2023-10-21` 更新的 `5.10.2` 版本更新了什么？
  
  * 💄 修复 Notification 组件在 `rtl` 模式下边缘间距错误的问题。[#45386](https://github.com/ant-design/ant-design/pull/45386)

  
### 在 `2023-10-15` 更新的 `5.10.1` 版本更新了什么？
  
  * ⚡️ 优化 CSS-in-JS Design Token 缓存命中性能。[#45302](https://github.com/ant-design/ant-design/pull/45302)
* 🆕 为 Checkbox.Group 与 Radio.Group 的 `options` 添加 `id` 属性支持。[#45287](https://github.com/ant-design/ant-design/pull/45287)
* 🐞 修复 Affix 组件设置 `target` 失效的问题。[#45314](https://github.com/ant-design/ant-design/pull/45314) [@mingming-ma](https://github.com/mingming-ma)
* 🐞 MISC: 为图标样式设置 `csp` 属性。[#45334](https://github.com/ant-design/ant-design/pull/45334) [@AlexeyTeterin](https://github.com/AlexeyTeterin)
* 🐞 修复 Button 组件 `loading` 属性设置为 `{ delay: 0 }` 时不显示加载状态。[#45282](https://github.com/ant-design/ant-design/pull/45282) [@YDFlame13](https://github.com/YDFlame13)
* 🐞 修复 Segmented 在 Safari 下切换时的样式跳动问题。[#45310](https://github.com/ant-design/ant-design/pull/45310)
* 🐞 修复 Watermark可以使用浏览器的 `Hide Element` 来隐藏水印。[#45290](https://github.com/ant-design/ant-design/pull/45290) [@Yuiai01](https://github.com/Yuiai01)
* 🐞 修复 Input 组件 hover 或者 focus 状态时背景色变为透明的问题。[#45297](https://github.com/ant-design/ant-design/pull/45297) [@MadCcc](https://github.com/MadCcc)
* 🐞 修复 Form 在调用 `resetFields` 时，无法重置配置了 `initialValue` 的 Form.List 的问题。[#45284](https://github.com/ant-design/ant-design/pull/45284)
* 🐞 修复 Tree.DirectoryTree 在配置 `fieldNames` 时，`onSelect` 方法中的 `selectedNodes` 无法获取值。[#45036](https://github.com/ant-design/ant-design/pull/45036) [@Zian502](https://github.com/Zian502)
* 💄 回滚 Input、InputNumber、Select、Cascader、TreeSelect、DatePicker、TimePicker、ColorPicker 的描边样式。[#45286](https://github.com/ant-design/ant-design/pull/45286) [@MadCcc](https://github.com/MadCcc)
* 💄 修复 Card 搭配小尺寸 Tabs 时的样式问题。[#45272](https://github.com/ant-design/ant-design/pull/45272) [@MadCcc](https://github.com/MadCcc)

  
### 在 `2023-10-10` 更新的 `5.10.0` 版本更新了什么？
  
  * 🇵🇱 为 pl\_PL 补充 Tour 国际化。[#45166](https://github.com/ant-design/ant-design/pull/45166) [@antonisierakowski](https://github.com/antonisierakowski)
* 🇰🇷 优化 ko\_KR 国际化。[#45150](https://github.com/ant-design/ant-design/pull/45150) [@owjs3901](https://github.com/owjs3901)

  
### 在 `2023-09-28` 更新的 `5.9.4` 版本更新了什么？
  
  * 🐞 修复 Button 组件只有两个汉字且嵌套在多层 span 中时间距丢失的问题。[#45126](https://github.com/ant-design/ant-design/pull/45126) [@MadCcc](https://github.com/MadCcc)
* 🐞 修复 Button 条件渲染时意外出现加载图标的问题。[#45030](https://github.com/ant-design/ant-design/pull/45030) [@lzl0304](https://github.com/lzl0304)

  
### 在 `2023-09-25` 更新的 `5.9.3` 版本更新了什么？
  
  * 🤖 MISC: 修复 `@types/react@18.2.22` React.Key 定义更新引发的问题。[#44938](https://github.com/ant-design/ant-design/pull/44938)

  
### 在 `2023-09-19` 更新的 `5.9.2` 版本更新了什么？
  
  * 🐞 修复 Table `small` 尺寸时选择列没有居中对齐的问题。[#44922](https://github.com/ant-design/ant-design/pull/44922)
* 🐞 修复 Select 当 `label` 内使用了 `div` 块级元素时的样式问题。[#44927](https://github.com/ant-design/ant-design/pull/44927)
* 🐞 修复 Modal 自定义 `footer` 时按钮内容丢失的问题。[#44929](https://github.com/ant-design/ant-design/pull/44929) [@Wxh16144](https://github.com/Wxh16144)
* 🐞 修复 notification 底部弹出动画的问题。[#44918](https://github.com/ant-design/ant-design/pull/44918) [@linxianxi](https://github.com/linxianxi)
* 🐞 修复 Form.Item 有 `noStyle` 属性时没有继承上下文的反馈图标的问题。[#44937](https://github.com/ant-design/ant-design/pull/44937)

  
### 在 `2023-09-15` 更新的 `5.9.1` 版本更新了什么？
  
  * 🤖 优化 Radio.Button 的 `ref` 类型。[#44747](https://github.com/ant-design/ant-design/pull/44747) [@LexiosAlex](https://github.com/LexiosAlex)
* 🤖 优化 Checkbox 的 `ref` 类型。[#44746](https://github.com/ant-design/ant-design/pull/44746) [@LexiosAlex](https://github.com/LexiosAlex)

  
### 在 `2023-09-08` 更新的 `5.9.0` 版本更新了什么？
  
  * 🤖 从 Tree 中导出 `BasicDataNode` 类型。[#44624](https://github.com/ant-design/ant-design/pull/44624) [@kiner-tang](https://github.com/kiner-tang)

  
### 在 `2023-09-02` 更新的 `5.8.6` 版本更新了什么？
  
  * 🤖 修复 Upload 文件状态定义，移除未使用过的 `success` 状态。[#44468](https://github.com/ant-design/ant-design/pull/44468)

  
### 在 `2023-08-28` 更新的 `5.8.5` 版本更新了什么？
  
  * 🤖 修复 Dropdown 组件中 `align` 属性的类型错误。[#44423](https://github.com/ant-design/ant-design/pull/44423) [@LeTuongKhanh](https://github.com/LeTuongKhanh)

  
### 在 `2023-08-18` 更新的 `5.8.4` 版本更新了什么？
  
  * 💄 修复了当页面的文字方向为 RTL 时 Badge 里面的数字也是 RTL 的问题。[#43998](https://github.com/ant-design/ant-design/pull/43998) [@NotEvenANeko](https://github.com/NotEvenANeko)

  
### 在 `2023-08-11` 更新的 `5.8.3` 版本更新了什么？
  
  * 🐞 修复 Carousel 不支持 `id` 属性的问题。[#44079](https://github.com/ant-design/ant-design/pull/44079)
* 💄 修复 Carousel `dots` 切换点有多余 margin 的问题。[#44076](https://github.com/ant-design/ant-design/pull/44076)

  
### 在 `2023-08-04` 更新的 `5.8.2` 版本更新了什么？
  
  * 🤖 修正 Drawer 和 Anchor 部分 Design Token 的 TS 描述信息错误的问题。[#43994](https://github.com/ant-design/ant-design/pull/43994) [@wving5](https://github.com/wving5)

  
### 在 `2023-08-02` 更新的 `5.8.1` 版本更新了什么？
  
  * 🤖 导出 `MappingAlgorithm` 作为 Design Token 主题算法的类型。[#43953](https://github.com/ant-design/ant-design/pull/43953)

  
### 在 `2023-08-01` 更新的 `5.8.0` 版本更新了什么？
  
  * 🤖 `Form.Item` 支持泛型对 `name` 属性校验。[#43904](https://github.com/ant-design/ant-design/pull/43904) [@crazyair](https://github.com/crazyair)

  
### 在 `2023-07-24` 更新的 `5.7.3` 版本更新了什么？
  
  * 🤖 Button `ref` 类型优化。[#43703](https://github.com/ant-design/ant-design/pull/43703) [@Negentropy247](https://github.com/Negentropy247)

  
### 在 `2023-07-20` 更新的 `5.7.2` 版本更新了什么？
  
  * 🤖 移除 Button 无用的 `type="ghost"` 属性定义。[#43675](https://github.com/ant-design/ant-design/pull/43675)

  
### 在 `2023-07-19` 更新的 `5.7.1` 版本更新了什么？
  
  * 🤖 修复 Space 的 `SpaceContext` 没有正确导出的问题。[#43501](https://github.com/ant-design/ant-design/pull/43501) [@VovkaGoodwin](https://github.com/VovkaGoodwin)
* 🤖 优化 AutoComplete 组件 TS 定义实现。[#43581](https://github.com/ant-design/ant-design/pull/43581) [@thinkasany](https://github.com/thinkasany)
* 🤖 优化 Select 和 List 组件 TS 定义实现。[#43545](https://github.com/ant-design/ant-design/pull/43545) [@thinkasany](https://github.com/thinkasany)
* 🤖 优化 Button 组件 TS 定义实现。[#43588](https://github.com/ant-design/ant-design/pull/43588) [#43629](https://github.com/ant-design/ant-design/pull/43629) [@thinkasany](https://github.com/thinkasany)
* 🤖 优化 Cascader、ConfigProvider、DatePicker、InputNumber、Slider 和 Upload 组件 TS 定义实现。[#43610](https://github.com/ant-design/ant-design/pull/43610)

  
### 在 `2023-07-11` 更新的 `5.7.0` 版本更新了什么？
  
  * 🤖 Popover 增加 `RawPurePanelProps` 接口描述。[#43453](https://github.com/ant-design/ant-design/pull/43453) [@thinkasany](https://github.com/thinkasany)
* 🤖 Popconfirm 替换 `ref` 类型 `unknown` 为 `TooltipRef`。[#43452](https://github.com/ant-design/ant-design/pull/43452) [@thinkasany](https://github.com/thinkasany)
* 🤖 Popover 替换 `ref` 类型 `unknown` 为 `TooltipRef`。[#43450](https://github.com/ant-design/ant-design/pull/43450) [@Negentropy247](https://github.com/Negentropy247)
* 🤖 改进 Button.ButtonGroup 中 `GroupSizeContext` 的类型声明。[#43439](https://github.com/ant-design/ant-design/pull/43439) [@thinkasany](https://github.com/thinkasany)
* 🤖 改进 Select 的 `mode` 属性的类型声明。[#43413](https://github.com/ant-design/ant-design/pull/43413) [@thinkasany](https://github.com/thinkasany)
* 🤖 Checkbox 替换 `ref` 类型 `unknown` 为 `CheckboxRef`。[#43424](https://github.com/ant-design/ant-design/pull/43424) [@li-jia-nan](https://github.com/li-jia-nan)
* 🤖 改进 Table 内部类型实现。[#43366](https://github.com/ant-design/ant-design/pull/43366) [@li-jia-nan](https://github.com/li-jia-nan)
* 🤖 改进 Tag 内部类型实现。[#43357](https://github.com/ant-design/ant-design/pull/43357) [@thinkasany](https://github.com/thinkasany)
* 🤖 改进 Notification 内部类型实现。[#43351](https://github.com/ant-design/ant-design/pull/43351) [@thinkasany](https://github.com/thinkasany)

  
### 在 `2023-07-03` 更新的 `5.6.4` 版本更新了什么？
  
  * 🤖 优化 Breadcrumb `params` 类型，支持泛型。[#43211](https://github.com/ant-design/ant-design/pull/43211)
* 🤖 优化 Typography `copyIdRef` 类型。[#43257](https://github.com/ant-design/ant-design/pull/43257) [@thinkasany](https://github.com/thinkasany)
* 🤖 移除 Button `loading` 多余 number 类型。[#43256](https://github.com/ant-design/ant-design/pull/43256) [@thinkasany](https://github.com/thinkasany)
* 🤖 透传 Cascader `optionType` 泛型。[#43231](https://github.com/ant-design/ant-design/pull/43231) [@ZWkang](https://github.com/ZWkang)

  
### 在 `2023-06-25` 更新的 `5.6.3` 版本更新了什么？
  
  * 🤖 优化 Button 的 `target` 属性类型定义。[#43129](https://github.com/ant-design/ant-design/pull/43129) [@li-jia-nan](https://github.com/li-jia-nan)
* 🤖 优化 Progress 的 `size` 属性类型定义以支持百分比值。[#43123](https://github.com/ant-design/ant-design/pull/43123) [@Ali-ovo](https://github.com/Ali-ovo)
* 🤖 优化 Slider tooltip 的类型定义。[#43094](https://github.com/ant-design/ant-design/pull/43094) [@li-jia-nan](https://github.com/li-jia-nan)

  
### 在 `2023-06-19` 更新的 `5.6.2` 版本更新了什么？
  
  * 🐞 修复 Dropdown 配置 `autoFocus` 无效的问题。[#43002](https://github.com/ant-design/ant-design/pull/43002) [@Yuiai01](https://github.com/Yuiai01)
* 🐞 修复 InputNumber 设置 `prefix` 在 Form.Item `hasFeedBack` 内高度异常的问题。[#43049](https://github.com/ant-design/ant-design/pull/43049)
* 💄 修复 Input 和 InputNumber 禁用状态样式。[#42974](https://github.com/ant-design/ant-design/pull/42974) [@kampiu](https://github.com/kampiu)
* 🐞 修复 Upload 配置 `maxCount` 后，上传超出范围的文件仍然会触发 `onChange` 事件的问题。[#43034](https://github.com/ant-design/ant-design/pull/43034)
* 🐞 修复打包时即便没有使用 Form，`rc-field-form` 包仍然会包含它的问题。[#43023](https://github.com/ant-design/ant-design/pull/43023)
* 🐞 修复 DatePicker 动态设置 `disabledTime` 时值不正确的问题。[#42991](https://github.com/ant-design/ant-design/pull/42991) [@linxianxi](https://github.com/linxianxi)
* 📖 补充 FloatButton 受控实例，并添加对应的 warning 提示。[#42835](https://github.com/ant-design/ant-design/pull/42835) [@poyiding](https://github.com/poyiding)
* 🐞 修复 Button 禁用时子节点仍然可以交互的问题。[#42949](https://github.com/ant-design/ant-design/pull/42949) [@kiner-tang](https://github.com/kiner-tang)
* 🐞 Drawer 添加最大宽度以防止在小屏幕下超出的问题。[#42914](https://github.com/ant-design/ant-design/pull/42914) [@amir2mi](https://github.com/amir2mi)
* 🐞 修复 Table 设置 `checkStrictly` 时，`preserveSelectedRowKeys` 无效的问题。[#42784](https://github.com/ant-design/ant-design/pull/42784) [@linxianxi](https://github.com/linxianxi)
* 🐞 修复 Transfer 在动态变更数据时，展示的选中数不同步的问题。[#42785](https://github.com/ant-design/ant-design/pull/42785) [@BoyYangzai](https://github.com/BoyYangzai)
* 🐞 修复 Radio.Button `title` 属性不生效，并补齐对应定义。[#43012](https://github.com/ant-design/ant-design/pull/43012) [@linxianxi](https://github.com/linxianxi)

  
### 在 `2023-06-07` 更新的 `5.6.1` 版本更新了什么？
  
  * 🤖 修复 Collapse 组件 `items` 类型应该为可选。[#42877](https://github.com/ant-design/ant-design/pull/42877) [@Dunqing](https://github.com/Dunqing)

  
### 在 `2023-06-06` 更新的 `5.6.0` 版本更新了什么？
  
  * 🛠 使用新的命名标准重命名 Menu 组件 token。[#42848](https://github.com/ant-design/ant-design/pull/42848)
* 🛠 迁移 Radio 组件 less 变量。[#42050](https://github.com/ant-design/ant-design/pull/42050) [@Yuiai01](https://github.com/Yuiai01)
* 🛠 迁移 Image 组件 less 变量。[#42048](https://github.com/ant-design/ant-design/pull/42048) [@guan404ming](https://github.com/guan404ming)
* 🛠 迁移 Tooltip 组件 less 变量。[#42046](https://github.com/ant-design/ant-design/pull/42046) [@guan404ming](https://github.com/guan404ming)
* 🛠 迁移 Transfer 组件 less 变量。[#42431](https://github.com/ant-design/ant-design/pull/42431) [@heiyu4585](https://github.com/heiyu4585)
* 🛠 迁移 Tabs 组件 less 变量。[#42186](https://github.com/ant-design/ant-design/pull/42186) [@heiyu4585](https://github.com/heiyu4585)
* 🛠 迁移 Card 组件 less 变量。[#42061](https://github.com/ant-design/ant-design/pull/42061) [@heiyu4585](https://github.com/heiyu4585)
* 🛠 迁移 Mentions 组件 less 变量。[#42711](https://github.com/ant-design/ant-design/pull/42711) [@heiyu4585](https://github.com/heiyu4585)
* 🛠 迁移 Avatar 组件 less 变量。[#42063](https://github.com/ant-design/ant-design/pull/42063) [@heiyu4585](https://github.com/heiyu4585)
* 🛠 迁移 Pagination 组件 less 变量。[#42330](https://github.com/ant-design/ant-design/pull/42330) [@heiyu4585](https://github.com/heiyu4585)
* 🛠 迁移 Popover 组件 less 变量。[#42337](https://github.com/ant-design/ant-design/pull/42337) [@heiyu4585](https://github.com/heiyu4585)
* 🛠 迁移 Tag 组件 less 变量。[#42053](https://github.com/ant-design/ant-design/pull/42053) [@heiyu4585](https://github.com/heiyu4585)
* 🛠 迁移 List 组件 less 变量。[#42041](https://github.com/ant-design/ant-design/pull/42041) [@jrr997](https://github.com/jrr997)
* 🛠 迁移 Dropdown 组件 less 变量。[#42258](https://github.com/ant-design/ant-design/pull/42258) [@poyiding](https://github.com/poyiding)
* 🛠 迁移 Timeline 组件 less 变量。[#42491](https://github.com/ant-design/ant-design/pull/42491) [@jrr997](https://github.com/jrr997)
* 🛠 迁移 Anchor 组件 less 变量。[#42141](https://github.com/ant-design/ant-design/pull/42141) [@MuxinFeng](https://github.com/MuxinFeng)
* 🛠 迁移 Carousel 组件 less 变量。[#42157](https://github.com/ant-design/ant-design/pull/42157) [@MuxinFeng](https://github.com/MuxinFeng)
* 🛠 迁移 Upload 组件 less 变量。[#42042](https://github.com/ant-design/ant-design/pull/42042) [@jrr997](https://github.com/jrr997)
* 🛠 迁移 Typography 组件 less 变量。[#42442](https://github.com/ant-design/ant-design/pull/42442) [@jrr997](https://github.com/jrr997)
* 🛠 迁移 Segmented 组件 less 变量。[#42136](https://github.com/ant-design/ant-design/pull/42136) [@kiner-tang](https://github.com/kiner-tang)
* 🛠 迁移 Checkbox 组件 less 变量。[#42097](https://github.com/ant-design/ant-design/pull/42097) [@poyiding](https://github.com/poyiding)
* 🛠 迁移 Skeleton 组件 less 变量。[#42134](https://github.com/ant-design/ant-design/pull/42134) [@kiner-tang](https://github.com/kiner-tang)
* 🛠 迁移 Breadcrumb 组件 less 变量。[#42342](https://github.com/ant-design/ant-design/pull/42342) [@heiyu4585](https://github.com/heiyu4585)
* 🛠 迁移 Calendar 组件 less 变量。[#42194](https://github.com/ant-design/ant-design/pull/42194) [@MuxinFeng](https://github.com/MuxinFeng)
* 🛠 迁移 Rate 组件 less 变量。[#42135](https://github.com/ant-design/ant-design/pull/42135) [@MuxinFeng](https://github.com/MuxinFeng)
* 🛠 迁移 Descriptions 组件 less 变量。[#42038](https://github.com/ant-design/ant-design/pull/42038) [@jrr997](https://github.com/jrr997)

  
### 在 `2023-05-30` 更新的 `5.5.2` 版本更新了什么？
  
  * 💄 修复 ColorPicker 组件 RTL 模式样式。[#42716](https://github.com/ant-design/ant-design/pull/42716) [@RedJue](https://github.com/RedJue)
* 💄 修复 Anchor RTL 模式下轨道的位置。[#42706](https://github.com/ant-design/ant-design/pull/42706) [@qmhc](https://github.com/qmhc)

  
### 在 `2023-05-22` 更新的 `5.5.1` 版本更新了什么？
  
  * 🤖 优化 Slider ref 类型，移除 `unknown` 和 `any` 类型，用 `SliderRef` 代替。[#42420](https://github.com/ant-design/ant-design/pull/42420) [@li-jia-nan](https://github.com/li-jia-nan)

  
### 在 `2023-05-15` 更新的 `5.5.0` 版本更新了什么？
  
  * 🇧🇬 补充 bg\_BG Form 文案。[#42203](https://github.com/ant-design/ant-design/pull/42203) [@tangzixuan](https://github.com/tangzixuan)

  
### 在 `2023-05-06` 更新的 `5.4.7` 版本更新了什么？
  
  * 🐞 修复 Menu.Item 与 Submenu 之间间距不统一的问题。[#42160](https://github.com/ant-design/ant-design/pull/42160)
* 🐞 修复 Breadcrumb 使用 `itemRender` 并且配置 `path` 时，渲染元素会额外包一层 a 元素的问题。[#42049](https://github.com/ant-design/ant-design/pull/42049)
* 🐞 修复 Transfer 在受控模式下报 React 状态嵌套更新错误信息。[#42033](https://github.com/ant-design/ant-design/pull/42033)
* 🐞 修复 Upload 禁用状态的逻辑。[#42102](https://github.com/ant-design/ant-design/pull/42102) [@Wxh16144](https://github.com/Wxh16144)
* 💄 修复 Spin 与其 icon 子元素高度不一致的问题。[#42162](https://github.com/ant-design/ant-design/pull/42162) [@cheapCoder](https://github.com/cheapCoder)
* ⚡️ 优化 Affix 组件在无需更新时计算逻辑。[#42015](https://github.com/ant-design/ant-design/pull/42015) [@Simon-He95](https://github.com/Simon-He95)
* ⚡️ 优化 Anchor 组件在无需跳转时计算逻辑。[#42018](https://github.com/ant-design/ant-design/pull/42018) [@Simon-He95](https://github.com/Simon-He95)

  
### 在 `2023-04-26` 更新的 `5.4.6` 版本更新了什么？
  
  * 🤖 修复 Menu 报错 OverrideContext 类型定义不存在的问题。[#41907](https://github.com/ant-design/ant-design/pull/41907)
* 🤖 修复 TreeSelect 定义不支持 `aria-*` 的问题。[#41978](https://github.com/ant-design/ant-design/pull/41978) [@guan404ming](https://github.com/guan404ming)

  
### 在 `2023-04-23` 更新的 `5.4.5` 版本更新了什么？
  
  * 🐞 修复 Tree 组件可拖拽树文本换行时其标题不对齐。[#41928](https://github.com/ant-design/ant-design/pull/41928) [@Yuiai01](https://github.com/Yuiai01)
* 🐞 修复 Checkbox 组件标题没有对齐的问题。[#41920](https://github.com/ant-design/ant-design/pull/41920) [@Yuiai01](https://github.com/Yuiai01)

  
### 在 `2023-04-20` 更新的 `5.4.4` 版本更新了什么？
  
  * 💄 修复 Message hooks 的图标样式不跟随动态主题 token 切换的问题。[#41899](https://github.com/ant-design/ant-design/pull/41899)
* 🐞 修复 `@ant-design/cssinjs` 中 CSS 属性值为 `undefined` 时 cssinjs 报错的问题。[#41896](https://github.com/ant-design/ant-design/pull/41896)

  
### 在 `2023-04-19` 更新的 `5.4.3` 版本更新了什么？
  
  * 🤖 完善 Modal 的类型定义。[#41742](https://github.com/ant-design/ant-design/pull/41742) [@MuxinFeng](https://github.com/MuxinFeng)

  
### 在 `2023-04-11` 更新的 `5.4.2` 版本更新了什么？
  
  * 🤖 优化 TimePicker `hourStep` 的类型。[1fc3675](https://github.com/ant-design/ant-design/commit/1fc3675) [@Wuxh](https://github.com/Wuxh)

  
### 在 `2023-04-11` 更新的 `5.4.1` 版本更新了什么？
  
  * 🇹🇭 添加 Tour、Image 和 QRCode 泰语语言环境。[#41697](https://github.com/ant-design/ant-design/pull/41697) [@buildingwatsize](https://github.com/buildingwatsize)

  
### 在 `2023-04-03` 更新的 `5.4.0` 版本更新了什么？
  
  * 🇩🇪 更新 TimePicker 德语本地化文案。[#41521](https://github.com/ant-design/ant-design/pull/41521) [@Yuiai01](https://github.com/Yuiai01)
* 🇻🇳 修复越南语本地化文案。[#41320](https://github.com/ant-design/ant-design/pull/41320) [@trongtai37](https://github.com/trongtai37) [#41345](https://github.com/ant-design/ant-design/pull/41345) [@duypham90](https://github.com/duypham90)
* 🇲🇲 添加缅甸语本地化文案。[#41366](https://github.com/ant-design/ant-design/pull/41366) [@enson0131](https://github.com/enson0131)

  
### 在 `2023-03-28` 更新的 `5.3.3` 版本更新了什么？
  
  * 🇮🇷 完善 DatePicker `fa_IR` 翻译。[#41455](https://github.com/ant-design/ant-design/pull/41455) [@ds1371dani](https://github.com/ds1371dani)
* 🇸🇪 完善 `sv_SE` 语言缺失内容。[#41424](https://github.com/ant-design/ant-design/pull/41424) [@dhalenok](https://github.com/dhalenok)

  
### 在 `2023-03-20` 更新的 `5.3.2` 版本更新了什么？
  
  * 🤖 导出 Statistic 的 `CountdownProps` 类型。[#41341](https://github.com/ant-design/ant-design/pull/41341) [@li-jia-nan](https://github.com/li-jia-nan)
* 🤖 优化 Design Token 的类型提示和说明。[#41297](https://github.com/ant-design/ant-design/pull/41297) [@arvinxx](https://github.com/arvinxx)
* 🤖 优化 Badge `React.forwardRef` 类型定义。[#41189](https://github.com/ant-design/ant-design/pull/41189) [@li-jia-nan](https://github.com/li-jia-nan)

  
### 在 `2023-03-13` 更新的 `5.3.1` 版本更新了什么？
  
  * 🐞 更新 DatePicker 底层依赖，修复 Safari 下卡顿，支持 `transform scale` 下对齐。[#41090](https://github.com/ant-design/ant-design/pull/41090)
* 🐞 修复 Menu 收缩时，Tooltip 有时会弹出的问题。[#41081](https://github.com/ant-design/ant-design/issues/41081)
* 🐞 修复 Modal.confirm 窗体有额外节点导致高度不正确的问题。[#41173](https://github.com/ant-design/ant-design/pull/41173) [@Svudec](https://github.com/Svudec)
* 🐞 修复 InputNumber `disabled` 时字体高亮不正确的问题。[#41167](https://github.com/ant-design/ant-design/pull/41167) [@Yuiai01](https://github.com/Yuiai01)
* 🐞 修复 Anchor 动态添加 `items` 后高亮失效问题。[#40743](https://github.com/ant-design/ant-design/pull/40743) [@zqran](https://github.com/zqran)
* 🛠 更新 Mentions 底层依赖，支持 `transform scale` 下对齐。[#41160](https://github.com/ant-design/ant-design/pull/41160) [@MuxinFeng](https://github.com/MuxinFeng)
* 🐞 修复 Form 手动调用 `validateFields` 时，`hasFeedback` 对成功态不生效的问题。[#41116](https://github.com/ant-design/ant-design/pull/41116) [@kiner-tang](https://github.com/kiner-tang)
* 🐞 修复 Cascader 在悬浮至叶子节点时，展开面板没有关闭的问题。[#41134](https://github.com/ant-design/ant-design/issues/41134)
* 🐞 修复 Popconfirm 使用 `Promise` 关闭时再次打开仍然是 `loading` 状态的问题。[#41121](https://github.com/ant-design/ant-design/pull/41121)
* 🐞 修复 Upload 在 React 18 下 `onChange` 有时数据不正确的问题。[#41082](https://github.com/ant-design/ant-design/pull/41082) [@li-jia-nan](https://github.com/li-jia-nan)
* 🛎 补充官网中没有切换到 Space.Compact 的遗留示例，并且添加相应警告。[#41080](https://github.com/ant-design/ant-design/pull/41080) [@Yuiai01](https://github.com/Yuiai01)
* 🌐 更新韩语国际化，添加国际化阿姆哈拉语。[#41103](https://github.com/ant-design/ant-design/pull/41103) [@li-jia-nan](https://github.com/li-jia-nan)

  
### 在 `2023-03-06` 更新的 `5.3.0` 版本更新了什么？
  
  * 🤖 修复 Cascader 泛型为非必传。[#40961](https://github.com/ant-design/ant-design/pull/40961) [@crazyair](https://github.com/crazyair)

  
### 在 `2023-02-27` 更新的 `5.2.3` 版本更新了什么？
  
  * 🐞 修复 Progress 同时设置 percent 和 success.percent 时，进度文本不会随着 percent 改变而改变。[#40922](https://github.com/ant-design/ant-design/pull/40922)
* 🐞 修复 Image 预览图标不对齐的问题。[#40911](https://github.com/ant-design/ant-design/pull/40911)
* 🐞 修复 ConfigProvider 组件表单校验消息生效顺序。[#40533](https://github.com/ant-design/ant-design/pull/40533) [@Wxh16144](https://github.com/Wxh16144)
* 🐞 修复 Confirm Modal `onOk` 可能触发两次的问题。[#40719](https://github.com/ant-design/ant-design/pull/40719) [@Rafael-Martins](https://github.com/Rafael-Martins)
* 🛠 重写 `useLocale` 方法，对外暴露 `localeCode`。[#40884](https://github.com/ant-design/ant-design/pull/40884) [@li-jia-nan](https://github.com/li-jia-nan)
* 🐞 修复 Segmented 组件子项不响应鼠标事件的问题。[#40894](https://github.com/ant-design/ant-design/pull/40894)
* 🛠 重构：使用 `useLocale` 替换 LocaleReceiver 组件，并删除 LocaleReceiver 组件。[#40870](https://github.com/ant-design/ant-design/pull/40870) [@li-jia-nan](https://github.com/li-jia-nan)
* 🐞 修复 ConfigProvider 注入的 `getPopupContainer` 属性 不生效的问题。[#40871](https://github.com/ant-design/ant-design/pull/40871) [@RedJue](https://github.com/RedJue)
* 🐞 修复 Descriptions 不接受 `data-*` 和 `aria-*` 等属性的问题。[#40859](https://github.com/ant-design/ant-design/pull/40859) [@goveo](https://github.com/goveo)
* 🛠 修改 Breadcrumb 的 Separator dom 由 `span` 改为 `li`。[#40867](https://github.com/ant-design/ant-design/pull/40867) [@heiyu4585](https://github.com/heiyu4585)
* 💄 Design Token 修改组件聚焦下的 `outline` 为默认 `4px`。[#40839](https://github.com/ant-design/ant-design/pull/40839)
* 🐞 修复 Layout.Header 单独使用时，`Layout.colorBgHeader` token 配置不生效的问题。[#40933](https://github.com/ant-design/ant-design/pull/40933)
* 🐞 修复 Badge 颜色显示异常问题。[#40848](https://github.com/ant-design/ant-design/pull/40848) [@kiner-tang](https://github.com/kiner-tang)
* 🐞 修复 Timeline 的子项的 `className` 错误。[#40835](https://github.com/ant-design/ant-design/pull/40835) [@Yuiai01](https://github.com/Yuiai01)
* 💄 修复 Rate 在禁用状态下的交互样式。[#40836](https://github.com/ant-design/ant-design/pull/40836) [@Yuiai01](https://github.com/Yuiai01)
* 🇮🇷 增加了伊朗本地化。[#40895](https://github.com/ant-design/ant-design/pull/40895) [@majidsadr](https://github.com/majidsadr)

  
### 在 `2023-02-19` 更新的 `5.2.2` 版本更新了什么？
  
  * 🇫🇷 补充 Tour 法语本地化文案。[#40750](https://github.com/ant-design/ant-design/pull/40750) [@RedJue](https://github.com/RedJue)
* 🇰🇷 更新韩国本地化文案。[#40716](https://github.com/ant-design/ant-design/pull/40716) [@owjs3901](https://github.com/owjs3901)

  
### 在 `2023-02-13` 更新的 `5.2.1` 版本更新了什么？
  
  * 🇷🇺/🇺🇦 补全 `ru_RU` 和 `uk_UA` 文案。[#40656](https://github.com/ant-design/ant-design/pull/40656) [@eldarcodes](https://github.com/eldarcodes)

  
### 在 `2023-02-08` 更新的 `5.2.0` 版本更新了什么？
  
  * 🇮🇳 补全 `ta_IN` 文案。[#39936](https://github.com/ant-design/ant-design/pull/39936) [@KIRUBASHANKAR26](https://github.com/KIRUBASHANKAR26)

  
### 在 `2023-01-31` 更新的 `5.1.7` 版本更新了什么？
  
  * 🤖 导出 ConfigProvider 组件的 ThemeConfig 类型。[#40370](https://github.com/ant-design/ant-design/pull/40370) [@Kamahl19](https://github.com/Kamahl19)

  
### 在 `2023-01-20` 更新的 `5.1.6` 版本更新了什么？
  
  * 🐞 修复 Menu 收缩时，Tooltip 偶尔会错误展示的问题。[#40328](https://github.com/ant-design/ant-design/pull/40328)
* 🐞 修复 Menu 分割线样式错误。[#40268](https://github.com/ant-design/ant-design/pull/40268) [@Wxh16144](https://github.com/Wxh16144)

  
### 在 `2023-01-15` 更新的 `5.1.5` 版本更新了什么？
  
  * 💄 优化 DatePicker 在 RTL 模式下 next 和 prev 图标。[#40238](https://github.com/ant-design/ant-design/pull/40238) [@ds1371dani](https://github.com/ds1371dani)
* 💄 修复 Badge 作用在块级元素上时 RTL 样式不生效的问题。[#40125](https://github.com/ant-design/ant-design/pull/40125)

  
### 在 `2023-01-09` 更新的 `5.1.4` 版本更新了什么？
  
  * 🐞 修复 locale 文件丢失的问题。[#40116](https://github.com/ant-design/ant-design/pull/40116)
* 🐞 修复 Cascader 组件 RTL 模式中下拉菜单位置问题。[#40109](https://github.com/ant-design/ant-design/pull/40109) [@3hson](https://github.com/3hson)
* 🐞 修复 `rc-motion` 部分组件动画闪烁的问题。[react-component/motion#39](https://github.com/react-component/motion/pull/39)

  
### 在 `2023-01-09` 更新的 `5.1.3` 版本更新了什么？
  
  * 🐞 修复 Button 水波纹效果不跟随屏幕滚动的问题。[#39954](https://github.com/ant-design/ant-design/pull/39954)
* 🐞 修复 Button `block` 属性不生效的问题。[#39992](https://github.com/ant-design/ant-design/pull/39992) [@li-jia-nan](https://github.com/li-jia-nan)

  
### 在 `2022-12-30` 更新的 `5.1.2` 版本更新了什么？
  
  * 🐞 修复 Table `column.filtered` 更新不生效的问题。[#39883](https://github.com/ant-design/ant-design/pull/39883)
* 🐞 修复 Table 排序/筛选的固定列背景色透明的样式异常问题。[#39012](https://github.com/ant-design/ant-design/pull/39012) [@kiner-tang](https://github.com/kiner-tang)

  
### 在 `2022-12-26` 更新的 `5.1.1` 版本更新了什么？
  
  * 🤖 修复部分 Design Token 缺少类型提示的问题。[#39754](https://github.com/ant-design/ant-design/pull/39754)

  
### 在 `2022-12-20` 更新的 `5.1.0` 版本更新了什么？
  
  * 🇧🇪 补全 `fr_BE` 文案。[#39415](https://github.com/ant-design/ant-design/pull/39415) [@azro352](https://github.com/azro352)
* 🇨🇦 补全 `fr_CA` 文案。[#39416](https://github.com/ant-design/ant-design/pull/39416) [@azro352](https://github.com/azro352)
* 🇪🇸 补全 `eu_ES` 文案。[#39371](https://github.com/ant-design/ant-design/pull/39371) [@Ian-Inizias](https://github.com/Ian-Inizias)

  
### 在 `2022-12-13` 更新的 `5.0.7` 版本更新了什么？
  
  * 🐞 修复 Slider 组件 Tooltip 动画丢失问题。[#39463](https://github.com/ant-design/ant-design/pull/39463) [@YinDongFang](https://github.com/YinDongFang)
* 🐞 修复 Table 组件有边框且为空时出现横向滚动条的问题。[#39455](https://github.com/ant-design/ant-design/pull/39455) [@zjfresh](https://github.com/zjfresh)
* 🐞 修复 Popover 组件箭头背景色不随自定义颜色改变的问题。[#39517](https://github.com/ant-design/ant-design/pull/39517)
* 🐞 修复 Modal hooks 没有完全传递 ConfigProvider 配置的问题。[#39513](https://github.com/ant-design/ant-design/pull/39513)
* 🐞 修复 Radio 组件尺寸修改后不对齐的问题。[#39476](https://github.com/ant-design/ant-design/pull/39476)

  
### 在 `2022-12-12` 更新的 `5.0.6` 版本更新了什么？
  
  * 🐞 修复 FloatButton 的 `toolip` 属性不支持设置为 `0` 的问题。[#39425](https://github.com/ant-design/ant-design/pull/39425) [@li-jia-nan](https://github.com/li-jia-nan)
* 🐞 修复 Space 组件包裹的 Select 系列组件在 hover 时清除图标不展示的问题。[#39468](https://github.com/ant-design/ant-design/pull/39468) [@foryuki](https://github.com/foryuki)
* 💄 修复 Cascader 内部 ul 的 margin 值异常的问题。[#39436](https://github.com/ant-design/ant-design/pull/39436) [@ZN1996](https://github.com/ZN1996)
* 💄 修复 Input 组件在紧凑模式下内边距异常的问题。[#39428](https://github.com/ant-design/ant-design/pull/39428)
* 💄 优化 Message 组件在紧凑模式下的内边距。[#39428](https://github.com/ant-design/ant-design/pull/39428)
* 💄 修复 Radio.Button 组件在暗色模式下的文字颜色。[#39428](https://github.com/ant-design/ant-design/pull/39428)
* 💄 修复 Select 组件在紧凑模式下内边距异常的问题。[#39428](https://github.com/ant-design/ant-design/pull/39428)
* 💄 修复 Slider 组件标签原点样式问题。[#39428](https://github.com/ant-design/ant-design/pull/39428)
* 💄 优化 Switch 组件暗色模式下的颜色。[#39428](https://github.com/ant-design/ant-design/pull/39428)

  
### 在 `2022-12-08` 更新的 `5.0.5` 版本更新了什么？
  
  * 🤖 优化 Anchor `onClick` 的事件类型定义。[#39305](https://github.com/ant-design/ant-design/pull/39305) [@li-jia-nan](https://github.com/li-jia-nan)

  
### 在 `2022-12-05` 更新的 `5.0.4` 版本更新了什么？
  
  * 🐞 修复 Modal 文字内容过多会超出框体的样式问题。[#39249](https://github.com/ant-design/ant-design/pull/39249) [@MuxinFeng](https://github.com/MuxinFeng)
* 🐞 修复 Modal.info 没有图标时，内容宽度不正确的问题。[#39047](https://github.com/ant-design/ant-design/pull/39047) [@owjs3901](https://github.com/owjs3901)

  
### 在 `2022-11-30` 更新的 `5.0.3` 版本更新了什么？
  
  * 🐞 修复 Menu 溢出时下拉菜单的样式问题。[#39093](https://github.com/ant-design/ant-design/pull/39093)
* 🐞 修复 hover 在 Menu.Item 外面时颜色变蓝的问题。[#39077](https://github.com/ant-design/ant-design/pull/39077) [@Pulset](https://github.com/Pulset)

  
### 在 `2022-11-27` 更新的 `5.0.2` 版本更新了什么？
  
  * 💄 Space.Compact 包裹单个子组件时，展示该子组件本身的样式。[#38896](https://github.com/ant-design/ant-design/pull/38896) [@foryuki](https://github.com/foryuki)
* 💄 修复 Space.Compact 组件嵌套 Modal，Dropdown，Drawer 等组件时的样式问题。[#38870](https://github.com/ant-design/ant-design/pull/38870) [@foryuki](https://github.com/foryuki)

  
### 在 `2022-11-22` 更新的 `5.0.1` 版本更新了什么？
  
  * 🐞 修复 Menu SubMenu 间距问题。[#38714](https://github.com/ant-design/ant-design/pull/38714) [@JarvisArt](https://github.com/JarvisArt)
* 🐞 修复 Menu 暗色主题下高度多了 1px 的问题。[#38741](https://github.com/ant-design/ant-design/pull/38741) [@LuciNyan](https://github.com/LuciNyan)
* 🐞 修复 Menu 展开 Submenu 时抖动的问题。[#38748](https://github.com/ant-design/ant-design/pull/38748) [@JarvisArt](https://github.com/JarvisArt)

  
### 在 `2022-11-18` 更新的 `5.0.0` 版本更新了什么？
  
  * 🗑 移除 less 及相关 less 和 css 产物。[#36244](https://github.com/ant-design/ant-design/pull/36244)

  