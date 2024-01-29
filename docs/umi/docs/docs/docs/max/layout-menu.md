### 是否开始国际化配置

- 类型：布尔值（boolean）
- 默认值：false

是否启用国际化配置。开启后，路由配置中的菜单名将被视为菜单名国际化的键值，插件将查找 locales 文件以获取对应的`menu.[key]`的文本。默认情况下，键值与路由配置中的`name`字段相同。如果菜单是多级路由，例如二级路由菜单，插件将查找 locales 文件以获取`menu.[key].[key]`对应的文本。此功能需要配置`i18n`才能使用。如果不需要菜单国际化，可以将其配置为`false`进行关闭。

### logout

`logout` 是一个函数，用于处理用户点击退出登录的操作。它接收一个 `initialState` 参数，并根据需要对用户的登录状态进行处理。

默认情况下，`logout` 的值为 `null`，即没有任何处理逻辑。在默认的布局 UI 中，顶部右侧并不会显示退出按钮。如果想要显示退出按钮并实现退出登录功能，需要在运行配置中配合运行时配置 `app.ts(x)` 中的 `getInitialState` 方法返回一个对象。

通过在运行时配置中设置合适的 `logout` 函数，可以实现用户点击退出登录时的相关操作，例如清除用户的登录信息、跳转到登录页面或执行其他自定义的逻辑。

请根据具体需求，为 `logout` 方法提供对应的处理逻辑。

### 扩展的路由配置

Layout 插件会基于 Umi 的路由，封装了更多的配置项，支持更多配置式的能力。新增的配置如下：

- 侧边栏菜单配置。
- 布局路由级别展示/隐藏相关配置。
- 与权限插件结合，配置式实现权限路由的功能。

示例如下：

```typescript
// config/route.ts
export const routes: IBestAFSRoute[] = [
  {
    path: "/welcome",
    component: "IndexPage",
    name: "欢迎",
    icon: "testicon",
    target: "_blank",
    headerRender: false,
    footerRender: false,
    menuRender: false,
    menuHeaderRender: false,
    access: "canRead",
    hideChildrenInMenu: true,
    hideInMenu: true,
    hideInBreadcrumb: true,
    flatMenu: true,
  },
];
```

这些配置项可以用来定制路由的显示和隐藏，在面包屑、侧边栏菜单和顶栏中控制路由的可见性。

其中：

- `component` 表示该路由对应的组件。
- `name` 是菜单项的名称，可以在侧边栏中显示。
- `icon` 是菜单项的图标。
- `target` 可以设置链接的打开方式，例如在新页面打开。
- `headerRender` 可以控制是否在顶栏中展示路由。
- `footerRender` 可以控制是否在页脚中展示路由。
- `menuRender` 可以控制是否在菜单中展示路由。
- `menuHeaderRender` 可以控制是否在菜单顶栏中展示路由。
- `access` 是一个权限配置项，需要和权限插件配合使用。
- `hideChildrenInMenu` 可以隐藏子菜单。
- `hideInMenu` 可以隐藏自己和子菜单。
- `hideInBreadcrumb` 可以在面包屑中隐藏。
- `flatMenu` 可以将子项往上提，仍然展示。

这些配置项使得路由的控制更加灵活，可以根据需求来展示或隐藏路由及相关内容。

### flatMenu

- 类型: `boolean`
- 默认值: `false`
- 说明: 当设置为 true 时，在菜单中只隐藏当前项，子项则继续展示，从而实现菜单的展开与收起。

该属性用于控制菜单是否打平显示。当你希望子级的菜单项不显示自身而直接展示在上一级菜单中时，可以将该属性配置为 true。

示例：

```tsx
const before = [{ name: "111" }, { name: "222", children: [{ name: "333" }] }];
// flatMenu = true
const after = [{ name: "111" }, { name: "222" }, { name: "333" }];
```

提供了 xxxRender 参数用于在布局中显示或隐藏特定的模块。根据不同的需求，可以设置以下参数：

- `headerRender=false`：不显示顶栏
- `footerRender=false`：不显示页脚
- `menuRender=false`：不显示菜单
- `menuHeaderRender=false`：不显示菜单的标题和 logo

通过设置以上参数为 false，可以根据实际情况来决定是否展示特定的布局模块。

请注意，以上参数的默认值都是 true，即默认情况下会显示对应的布局模块。根据具体需求，灵活设置 xxxRender 参数，以满足项目的需求。

### hideChildrenInMenu 在 Ant Design Pro 中如何使用？

hideChildrenInMenu 是 Ant Design Pro 中的一个属性，用于控制菜单的显示和隐藏。

当 hideChildrenInMenu 的值为 true 时，子菜单将会被隐藏，只显示父级菜单。这对于需要简化页面显示的场景非常有用。

### hideInMenu 在 Ant Design Pro 中的使用方法是什么？

hideInMenu 是 Ant Design Pro 中的一个属性，用于控制菜单的显示和隐藏。

当隐藏某个页面时，可以将 hideInMenu 的值设为 true，这样该页面将不会在菜单中显示。这在需要隐藏某些敏感或不常用页面时非常有用。

### hideInBreadcrumb 在 Ant Design Pro 中如何使用？

hideInBreadcrumb 是 Ant Design Pro 中的一个属性，用于控制在面包屑中的显示和隐藏。

当设置 hideInBreadcrumb 的值为 true 时，该页面在面包屑导航中将被隐藏，不会在导航中显示路径。这对于一些不需要展示在面包屑导航中的页面非常有用，可以减少面包屑导航的冗余信息。
