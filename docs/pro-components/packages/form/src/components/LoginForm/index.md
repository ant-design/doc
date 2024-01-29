### LoginForm 组件的参数

**参数**：logo  
**说明**：logo 的配置，支持 ReactNode 和 string  
**类型**：`ReactNode | url`  
**默认值**：-  


**参数**：title  
**说明**：标题，可以配置为空  
**类型**：`ReactNode`  
**默认值**：-  


**参数**：subTitle  
**说明**：二级标题，可以配置为空  
**类型**：`ReactNode`  
**默认值**：-  


**参数**：actions  
**说明**：自定义额外的登录功能  
**类型**：`ReactNode`  
**默认值**：-  


**参数**：message  
**说明**：form 顶部的一个提示配置，可以配置一些错误的提示信息  
**类型**：`ReactNode`  
**默认值**：-  

### LoginForm 组件示例

```
<LoginForm 
    logo={ReactNode | url}
    title={ReactNode}
    subTitle={ReactNode}
    actions={ReactNode}
    message={ReactNode}
/>
```

以上就是 LoginForm 组件的使用方法和参数说明。

### LoginFormPage 参数说明

**logo**
logo 的配置，支持 ReactNode 和 string
- 类型：`ReactNode \| url`
- 默认值：-

**title**
标题，可以配置为空
- 类型：`ReactNode`
- 默认值：-

**subTitle**
二级标题，可以配置为空
- 类型：`ReactNode`
- 默认值：-

**actions**
自定义额外的登录功能
- 类型：`ReactNode`
- 默认值：空

**message**
form 顶部的一个提示配置，可以配置一些错误的提示信息
- 类型：`ReactNode`
- 默认值：-

**backgroundImageUrl**
整个区域的背景图片配置，手机端不会展示
- 类型：`url`
- 默认值：-

**activityConfig**
活动的配置，包含 title，subTitle，action，分别代表标题，次标题和行动按钮，也可配置 style 来控制区域的样式
- 类型：`{title,subTitle,action,style}`
- 默认值：-