### Q4.x 版本中的 less 变量与 5.x 版本的 Component Token 有什么对照关系吗？

A 是的，本文档包含了所有 4.x 版本中组件相关的 less 变量与 5.x 版本的 Component Token 的对照关系。如果你是从 4.x 版本升级到 5.x 版本，可以通过这份对照表快速找到对应的 Component Token。

### Q5.x 版本中有哪些变量没有对应的 Component Token？

A 在 5.x 版本中，仍有部分变量没有对应的 Component Token，这些变量在 5.x 版本中已被废弃。

### Q 使用 5.x 版本的 Component Token 可以实现什么功能？

A 使用 5.x 版本的 Component Token，你可以更方便地迁移你的应用程序。它提供了与 4.x 版本 less 变量的对照关系，使你可以快速找到对应的 Token。这样，你可以更快地适应新的版本，同时在新版本中使用这些 Token 可以带来更好的性能和效果。

### 如何配置全局的 Component Token？

你可以通过使用 `ConfigProvider` 组件的 `theme` 属性来配置全局的 Component Token。在 `theme` 属性中，你可以为每个组件单独设置相应的 Token。

以下是一个示例代码：

```tsx
import React from 'react';
import { Checkbox, ConfigProvider, Radio } from 'antd';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Radio: {
          colorPrimary: '#00b96b',
        },
        Checkbox: {
          colorPrimary: '#ff4d4f',
        },
      },
    }}
  >
    <Radio>Radio</Radio>
    <Checkbox>Checkbox</Checkbox>
  </ConfigProvider>
);

export default App;
```

在上述示例中，我们使用了 `ConfigProvider` 组件，并在 `theme` 属性中为 `Radio` 和 `Checkbox` 组件分别设置了 `colorPrimary` Token。

通过这种方式，你可以灵活地配置全局的 Component Token，以满足你的需求。

### Alert 组件的警告提示变量

Alert 组件使用了一些 Less 变量和 Component Token 来定义样式。这些变量和 Token 用于控制警告提示的颜色、背景色、图标颜色等。下表列出了这些变量和 Token 的对应关系：

| Less 变量 | Component Token | 备注 |
| --- | --- | --- |
| `@alert-success-border-color` | `colorSuccessBorder` | 全局 token |
| `@alert-success-bg-color` | `colorSuccessBg` | 全局 token |
| `@alert-success-icon-color` | `colorSuccess` | 全局 token |
| `@alert-info-border-color` | `colorInfoBorder` | 全局 token |
| `@alert-info-bg-color` | `colorInfoBg` | 全局 token |
| `@alert-info-icon-color` | `colorInfo` | 全局 token |
| `@alert-warning-border-color` | `colorWarningBorder` | 全局 token |
| `@alert-warning-bg-color` | `colorWarningBg` | 全局 token |
| `@alert-warning-icon-color` | `colorWarning` | 全局 token |
| `@alert-error-border-color` | `colorErrorBorder` | 全局 token |
| `@alert-error-bg-color` | `colorErrorBg` | 全局 token |
| `@alert-error-icon-color` | `colorError` | 全局 token |
| `@alert-message-color` | `colorTextHeading` | 全局 token |
| `@alert-text-color` | `colorText` | 全局 Token |
| `@alert-close-color` | `colorIcon` | 全局 token |
| `@alert-close-hover-color` | `colorIconHover` | 全局 token |
| `@alert-padding-vertical` | `defaultPadding` | 统一控制 |
| `@alert-padding-horizontal` | `defaultPadding` | 统一控制 |
| `@alert-no-icon-padding-vertical` | - | 已废弃 |
| `@alert-with-description-no-icon-padding-vertical` | `withDescriptionPadding` | 统一控制 |
| `@alert-with-description-padding-vertical` | `withDescriptionPadding` | 统一控制 |
| `@alert-with-description-padding` | `withDescriptionPadding` | 统一控制 |
| `@alert-icon-top` | - | 已废弃 |
| `@alert-with-description-icon-size` | `withDescriptionIconSize` | - |

通过使用这些变量和 Token，我们可以自定义 Alert 组件的样式，其中全局 token 适用于整个应用，而统一控制的变量则适用于特定的样式。

### Alert 警告提示的样式说明

Alert 组件的警告提示样式由多个变量和 Token 控制。以下是对这些样式的详细说明：

- `@alert-success-border-color`：成功警告提示的边框颜色。
- `@alert-success-bg-color`：成功警告提示的背景色。
- `@alert-success-icon-color`：成功警告提示的图标颜色。
- `@alert-info-border-color`：信息警告提示的边框颜色。
- `@alert-info-bg-color`：信息警告提示的背景色。
- `@alert-info-icon-color`：信息警告提示的图标颜色。
- `@alert-warning-border-color`：警告警告提示的边框颜色。
- `@alert-warning-bg-color`：警告警告提示的背景色。
- `@alert-warning-icon-color`：警告警告提示的图标颜色。
- `@alert-error-border-color`：错误警告提示的边框颜色。
- `@alert-error-bg-color`：错误警告提示的背景色。
- `@alert-error-icon-color`：错误警告提示的图标颜色。
- `@alert-message-color`：警告提示的消息文字颜色。
- `@alert-text-color`：警告提示的文字颜色。
- `@alert-close-color`：关闭按钮的颜色。
- `@alert-close-hover-color`：关闭按钮的悬停颜色。
- `@alert-padding-vertical`：警告提示的垂直内边距。
- `@alert-padding-horizontal`：警告提示的水平内边距。
- `@alert-no-icon-padding-vertical`：已废弃的变量，不再使用。
- `@alert-with-description-no-icon-padding-vertical`：带有描述的警告提示的垂直内边距，统一控制。
- `@alert-with-description-padding-vertical`：带有描述的警告提示的垂直内边距，统一控制。
- `@alert-with-description-padding`：带有描述的警告提示的内边距，统一控制。
- `@alert-icon-top`：已废弃的变量，不再使用。
- `@alert-with-description-icon-size`：带有描述的警告提示的图标大小。

使用这些样式变量和 Token，我们可以根据需求自定义 Alert 组件的样式，并实现统一和个性化的效果。

### Less 变量 `@anchor-bg` 是什么作用？可以如何修改？

`@anchor-bg` 是 Anchor 锚点的背景颜色的 Less 变量。你可以通过直接修改 `className` 或 `style` 来自定义该变量的值。

### Component Token `@anchor-border-color` 在整个组件中起到什么作用？

`@anchor-border-color` 是 Anchor 锚点的边框颜色的全局 Token。全局 Token 可以用于统一设置组件中的相关属性值，包括边框颜色。

### `@anchor-link-top` 和 `@anchor-link-left` 分别用来表示 Anchor 锚点中链接的上边距和左边距，有什么作用？

`@anchor-link-top` 用于设置 Anchor 锚点中链接的上边距，`@anchor-link-left` 用于设置 Anchor 锚点中链接的左边距。通过调整这两个变量的值，可以控制链接在 Anchor 锚点中的位置。

此外，Anchor 锚点的链接的内边距可以通过 `@anchor-link-padding` 计算得出，公式为 `${linkPaddingBlock}px ${linkPaddingInlineStart}px` 。

### Avatar 头像

### 如何设置 Avatar 的尺寸？ Avatar 的尺寸可以通过以下 less 变量进行设置：

- `@avatar-size-base`：控制整体尺寸
- `@avatar-size-lg`：控制大尺寸
- `@avatar-size-sm`：控制小尺寸

### 如何设置 Avatar 文本的字体大小？ Avatar 文本的字体大小可以通过以下 less 变量进行设置：

- `@avatar-font-size-base`：控制整体字体大小
- `@avatar-font-size-lg`：控制大尺寸的字体大小
- `@avatar-font-size-sm`：控制小尺寸的字体大小

### 如何自定义 Avatar 的背景色、边框半径和组合样式？ Avatar 的背景色可以由 `@avatar-bg` 变量覆盖。边框半径可以通过全局 Token `@avatar-border-radius` 进行设置。而 Avatar 的组合样式可以通过以下 less 变量进行设置：

- `@avatar-group-overlapping`：控制组合头像的重叠程度
- `@avatar-group-space`：控制组合头像之间的间隔
- `@avatar-group-border-color`：控制组合头像的边框颜色

请注意，`@avatar-bg` 变量可以直接由 `className` 或 `style` 进行覆盖，而 `@avatar-color` 变量是一个全局 Token，无法通过 Avatar 的 less 变量进行直接控制。

这些变量可以帮助您自定义 Avatar 的外观和样式。

### Badge 徽标数

### 想要修改 Badge 徽标数的样式，可以使用哪些 less 变量？ 可以使用以下 less 变量进行修改：`@zindex-badge`、`@badge-height`、`@badge-height-sm`、`@badge-dot-size`、`@badge-font-size`、`@badge-font-size-sm`、`@badge-font-weight`、`@badge-status-size`、`@badge-text-color`、`@badge-color`。

### Badge 徽标数的高度是由哪个 less 变量控制的？ Badge 徽标数的高度由 `@badge-height` less 变量控制。

### 如何修改小号 Badge 徽标数的字体大小？ 可以使用 `@badge-font-size-sm` less 变量来修改小号 Badge 徽标数的字体大小。

### Badge 徽标数的颜色可以通过哪个 less 变量来修改？ Badge 徽标数的颜色可以通过 `@badge-text-color` less 变量来修改。

### 如果想要修改 Badge 徽标数的样式，应该参考哪个组件 Token 对应的 less 变量？ 需要参考 `indicatorZIndex`、`indicatorHeight`、`indicatorHeightSM`、`dotSize`、`textFontSize`、`textFontSizeSM`、`textFontWeight`、`statusSize` 这几个组件 Token 对应的 less 变量来修改 Badge 徽标数的样式。

### Badge 徽标数的背景色可以通过哪个全局 Token 来修改？ Badge 徽标数的背景色可以通过 `colorBgContainer` 全局 Token 来修改。

### 如何修改 Badge 徽标数的错误状态的颜色？ 可以使用 `colorError` 全局 Token 来修改 Badge 徽标数的错误状态的颜色。

### BreadCrumb 面包屑的 Less 变量是什么？

BreadCrumb 面包屑的 Less 变量包括以下内容：

- `@breadcrumb-base-color`：对应的 Component Token 是 `itemColor`。

### BreadCrumb 面包屑有哪些 Component Token？

BreadCrumb 面包屑的 Component Token 包括以下内容：

- `itemColor`：对应的 Less 变量是 `@breadcrumb-base-color`。
- `lastItemColor`：对应的 Less 变量是 `@breadcrumb-last-item-color`。
- `fontSize`：全局 Token，对应的 Less 变量是 `@breadcrumb-font-size`。
- `iconFontSize`：对应的 Less 变量是 `@breadcrumb-icon-font-size`。
- `linkColor`：对应的 Less 变量是 `@breadcrumb-link-color`。
- `linkHoverColor`：对应的 Less 变量是 `@breadcrumb-link-color-hover`。
- `separatorColor`：对应的 Less 变量是 `@breadcrumb-separator-color`。
- `separatorMargin`：对应的 Less 变量是 `@breadcrumb-separator-margin`。

### BreadCrumb 面包屑的 Component Token `fontSize` 是全局 Token 吗？

是的，BreadCrumb 面包屑的 Component Token `fontSize` 是全局 Token，对应的 Less 变量是 `@breadcrumb-font-size`。

### Button 按钮

### 如何设置按钮的字体粗细？ 可以使用 Less 变量 `@btn-font-weight` 或者 Component Token `fontWeight`。

### 如何设置按钮的圆角？ 可以使用 Less 变量 `@btn-border-radius-base` 或者 Component Token `borderRadius`。其中，`@btn-border-radius-sm` 是一个全局 Token。

### 如何设置按钮的边框宽度和样式？ 可以使用 Less 变量 `@btn-border-width` 和 `@btn-border-style`，对应的 Component Token 分别是 `lineWidth` 和 `lineStyle`。

### 如何设置按钮的阴影？ 可以使用 Less 变量 `@btn-shadow` 或者 `@btn-primary-shadow` 来设置按钮的阴影样式。

### 如何设置按钮的主题色？ 按钮的主题色可以使用 Less 变量 `@btn-primary-color` 或者 Component Token `primaryColor`，其中 `@btn-primary-bg` 是指按钮的背景色，对应的 Component Token 是 `colorPrimary`。

### 如何设置按钮的默认颜色、背景和边框颜色？ 可以使用 Less 变量 `@btn-default-color`、`@btn-default-bg` 和 `@btn-default-border`，对应的 Component Token 分别是 `defaultColor`、`defaultBg` 和 `defaultBorderColor`。

### 如何设置按钮的危险颜色、背景和边框颜色？ 可以使用 Less 变量 `@btn-danger-color`、`@btn-danger-bg` 和 `@btn-danger-border`，对应的 Component Token 分别是 `dangerColor` 和 `colorError`。

### 如何设置按钮的禁用状态颜色、背景和边框颜色？ 可以使用 Less 变量 `@btn-disable-color`、`@btn-disable-bg` 和 `@btn-disable-border`，分别对应的 Component Token 是 `colorTextDisabled`、`colorBgContainerDisabled` 和 `borderColorDisabled`。

### 如何设置按钮的幽灵颜色、背景和边框颜色？ 可以使用 Less 变量 `@btn-default-ghost-color`、`@btn-default-ghost-bg` 和 `@btn-default-ghost-border`，对应的 Component Token 分别是 `defaultGhostColor`、`ghostBg` 和 `defaultGhostBorderColor`。

### 如何设置按钮的字体大小？ 可以使用 Less 变量 `@btn-font-size-lg` 和 `@btn-font-size-sm`，对应的 Component Token 分别是 `fontSizeLG` 和 `fontSizeSM`。

### 如何设置按钮的水平内边距？ 可以使用 Less 变量 `@btn-padding-horizontal-base`、`@btn-padding-horizontal-lg` 和 `@btn-padding-horizontal-sm`，对应的 Component Token 分别是 `paddingInline`、`paddingInlineLG` 和 `paddingInlineSM`。

### 如何设置按钮的高度？ 可以使用 Less 变量 `@btn-height-base`、`@btn-height-lg` 和 `@btn-height-sm`，对应的 Component Token 分别是 `controlHeight`、`controlHeightLG` 和 `controlHeightSM`。

### 如何设置按钮的行高？ 可以使用 Less 变量 `@btn-line-height`，对应的 Component Token 是 `lineHeight`。

### 如何设置按钮的圆形大小？ 可以使用 Less 变量 `@btn-circle-size`、`@btn-circle-size-lg` 和 `@btn-circle-size-sm`，对应的 Component Token 分别是 `controlHeight`、`controlHeightLG` 和 `controlHeightSM`。

### 如何设置按钮的方形大小？ 可以使用 Less 变量 `@btn-square-size`、`@btn-square-size-lg` 和 `@btn-square-size-sm`，对应的 Component Token 分别是 `controlHeight`、`controlHeightLG` 和 `controlHeightSM`。

### 如何设置按钮只有图标时的大小？ 可以使用 Less 变量 `@btn-square-only-icon-size`、`@btn-square-only-icon-size-lg` 和 `@btn-square-only-icon-size-sm`，分别对应的 Component Token 是 `onlyIconSize`、`onlyIconSizeLG` 和 `onlyIconSizeSM`。

### 如何设置按钮组的边框颜色？ 可以使用 Less 变量 `@btn-group-border`，对应的 Component Token 是 `groupBorderColor`。

### 如何设置按钮链接在悬停时的背景色？ 可以使用 Less 变量 `@btn-link-hover-bg`，对应的 Component Token 是 `linkHoverBg`。

### 如何设置按钮文本在悬停时的背景色？ 可以使用 Less 变量 `@btn-text-hover-bg`，对应的 Component Token 是 `textHoverBg`。

以上是关于 Ant Design Button 按钮的样式设置的一些常用变量和 Token 信息，可根据需求进行使用和调整。

#### Calendar 日历的 `@calendar-bg` 变量是什么作用？

答：`@calendar-bg` 变量由于样式变化已废弃，不再使用。

#### Calendar 日历的 `@calendar-input-bg` 变量是什么作用？

答：`@calendar-input-bg` 变量由于样式变化已废弃，不再使用。

#### Calendar 日历的 `@calendar-border-color` 变量是什么作用？

答：`@calendar-border-color` 变量由于样式变化已废弃，不再使用。

#### 问题四：Calendar 日历的 `@calendar-item-active-bg` 变量是什么作用？

答：`@calendar-item-active-bg` 变量用于设置日历中选中项的背景颜色。

#### 问题五：Calendar 日历的 `@calendar-column-active-bg` 变量是什么作用？

答：`@calendar-column-active-bg` 变量由于样式变化已废弃，不再使用。

#### 问题六：Calendar 日历的 `@calendar-full-bg` 变量是什么作用？

答：`@calendar-full-bg` 变量用于设置整个日历的背景颜色。

#### 问题七：Calendar 日历的 `@calendar-full-panel-bg` 变量是什么作用？

答：`@calendar-full-panel-bg` 变量用于设置完整面板日历的背景颜色。

### Card 卡片的 Less 变量

| Less 变量 | Component Token | 备注 |
| --- | --- | --- |
| `@card-head-color` | `colorTextHeading` | 全局 Token |
| `@card-head-background` | `headerBg` | - |
| `@card-head-font-size` | `headerFontSize` | - |
| `@card-head-font-size-sm` | `headerFontSizeSM` | - |
| `@card-head-padding` | - | 已废弃 |
| `@card-head-padding-sm` | - | 已废弃 |
| `@card-head-height` | `headerHeight` | - |
| `@card-head-height-sm` | `headerHeightSM` | - |
| `@card-inner-head-padding` | - | 已废弃 |
| `@card-padding-base` | `cardPaddingBase` | - |
| `@card-padding-base-sm` | `cardPaddingBaseSm` | - |
| `@card-actions-background` | `actionsBackground` | - |
| `@card-actions-li-margin` | `actionsLiMargin` | - |
| `@card-skeleton-bg` | - | 已废弃，已改为内置 Skeleton 组件 |
| `@card-background` | `colorBgContainer` | 全局 Token |
| `@card-shadow` | - | 可由 `className` 或者 `style` 直接修改 |
| `@card-radius` | `borderRadiusLG` | 全局 Token |
| `@card-head-tabs-margin-bottom` | `tabsMarginBottom` | - |
| `@card-head-extra-color` | `extraColor` | - |

这是 Card 卡片组件的 Less 变量列表。你可以使用这些变量来定制化 Card 卡片的样式。其中部分变量已废弃，建议使用替代变量或其他方式来实现相同的效果。

### Card 卡片的组件 Token

| Component Token     | 备注                                    |
| ------------------- | --------------------------------------- |
| `colorTextHeading`  | Card 卡片标题的文字颜色，全局 Token     |
| `headerBg`          | Card 卡片标题的背景颜色                 |
| `headerFontSize`    | Card 卡片标题的字体大小                 |
| `headerFontSizeSM`  | Card 卡片标题在小屏幕下的字体大小       |
| `headerHeight`      | Card 卡片标题的高度                     |
| `headerHeightSM`    | Card 卡片标题在小屏幕下的高度           |
| `cardPaddingBase`   | Card 卡片内容的内边距                   |
| `cardPaddingBaseSm` | Card 卡片内容在小屏幕下的内边距         |
| `actionsBackground` | Card 卡片操作区域的背景颜色             |
| `actionsLiMargin`   | Card 卡片操作区域内每个选项之间的外边距 |
| `colorBgContainer`  | Card 卡片的背景颜色，全局 Token         |
| `borderRadiusLG`    | Card 卡片的圆角大小，全局 Token         |
| `tabsMarginBottom`  | Card 卡片标题的标签页底部外边距         |
| `extraColor`        | Card 卡片额外内容的颜色                 |

这是 Card 卡片组件的组件 Token 列表。你可以使用这些组件 Token 来快速定制化 Card 卡片的样式。

### Card 卡片的注意事项

- `@card-head-padding` 和 `@card-head-padding-sm` 已废弃，请使用其他方式来设置标题的内边距。
- `@card-inner-head-padding` 已废弃，请使用其他方式来设置标题内部的内边距。
- `@card-skeleton-bg` 已废弃，请使用内置的 Skeleton 组件代替。
- `@card-shadow` 可以通过设置 `className` 或者 `style` 直接修改 Card 卡片的阴影效果。

以上是关于 Card 卡片组件的一些注意事项，供你参考和使用。如果有任何疑问，请参考官方文档或联系开发团队。

### Carousel 走马灯

### 如何设置 Carousel 走马灯的圆点宽度？ 可以使用 `@carousel-dot-width` 这个 Less 变量来设置。

### 如何获取 Carousel 走马灯的圆点高度？ 可以使用 `dotHeight` 这个 Component Token 来获取。

### 如何修改 Carousel 走马灯的激活状态圆点宽度？ 可以使用 `@carousel-dot-active-width` 这个 Less 变量来修改。

### Carousel 走马灯

### 如何设置 Carousel 走马灯的圆点宽度？ 可以通过调整 `@carousel-dot-width` 这个 Less 变量的值来设置。

### 如何获取 Carousel 走马灯的圆点高度？ 可以使用 `dotHeight` 这个 Component Token 来获取。

### 如何修改 Carousel 走马灯的激活状态圆点宽度？ 可以通过修改 `@carousel-dot-active-width` 这个 Less 变量的值来实现。

### Carousel 走马灯

### 在 Carousel 走马灯中，如何调整圆点的宽度？ 可以使用 Less 变量 `@carousel-dot-width` 来调整圆点的宽度。

### 如何获取 Carousel 走马灯的圆点高度？ 可

### `@cascader-bg` 的作用和使用方式是什么？

`@cascader-bg` 是一个 Less 变量，它在 Ant Design Cascader 组件中已被废弃。由于已废弃，因此不推荐使用该变量。

### `@cascader-item-selected-bg` 和 `optionSelectedBg` 有什么关系？

`@cascader-item-selected-bg` 是一个 Less 变量，它在 Ant Design Cascader 组件中用作选中项的背景色。而 `optionSelectedBg` 则是对应的 Component Token。两者表示的是相同的样式信息，只是在不同的使用场景下的命名方式不同。

### `@cascader-menu-bg` 的作用和使用方式是什么？

`@cascader-menu-bg` 是一个已废弃的 Less 变量，在 Ant Design Cascader 组件中不再使用。不推荐使用该变量。

### `@cascader-menu-border-color-split` 和 `colorSplit` 有什么关系？

`@cascader-menu-border-color-split` 是一个 Less 变量，它在 Ant Design Cascader 组件中表示级联菜单的边框颜色。而 `colorSplit` 是对应的全局 Token。两者表示的是相同的样式信息，只是在不同的使用场景下的命名方式不同。

### `@cascader-dropdown-vertical-padding` 和 `optionPadding` 有什么关系？

`@cascader-dropdown-vertical-padding` 是一个 Less 变量，它在 Ant Design Cascader 组件中用作下拉菜单选项的垂直内边距。而 `optionPadding` 则是对应的 Component Token。两者表示的是相同的样式信息，只是在不同的使用场景下的命名方式不同。

### `@cascader-dropdown-edge-child-vertical-padding` 和 `menuPadding` 有什么关系？

`@cascader-dropdown-edge-child-vertical-padding` 是一个 Less 变量，它在 Ant Design Cascader 组件中用作下拉菜单边缘子菜单的垂直内边距。而 `menuPadding` 则是对应的 Component Token。两者表示的是相同的样式信息，只是在不同的使用场景下的命名方式不同。

### `@cascader-dropdown-font-size` 的作用和使用方式是什么？

`@cascader-dropdown-font-size` 是一个已废弃的 Less 变量，在 Ant Design Cascader 组件中不再使用。不推荐使用该变量。

### `@cascader-dropdown-line-height` 和 `lineHeight` 有什么关系？

`@cascader-dropdown-line-height` 是一个 Less 变量，它在 Ant Design Cascader 组件中表示下拉菜单选项的行高。而 `lineHeight` 则是对应的全局 Token。两者表示的是相同的样式信息，只是在不同的使用场景下的命名方式不同。

### Checkbox 多选框的 Less 变量是什么？

Checkbox 多选框的 Less 变量是以下几种：

1. `@checkbox-size`
2. `@checkbox-color`
3. `@checkbox-check-color`
4. `@checkbox-check-bg`
5. `@checkbox-border-width`
6. `@checkbox-border-radius`

### Checkbox 多选框的 Component Token 是什么？

Checkbox 多选框的 Component Token 是以下几种：

1. `controlInteractiveSize`
2. `colorPrimary`
3. `colorWhite`
4. `lineWidth`
5. `borderRadiusSM`

### Checkbox 多选框的样式变化和废弃信息是什么？

Checkbox 多选框的样式变化信息有：

1. `@checkbox-group-item-margin-right` 已废弃

以上就是 Checkbox 多选框的 Less 变量、Component Token 和样式变化信息。

### QCollapse 折叠面板的 Less 变量 `@collapse-header-padding` 与 Component Token `headerPadding` 有什么区别?

**Answer:** `@collapse-header-padding` 是 Less 变量，而 `headerPadding` 是 Component Token。Less 变量是用于定义样式的变量，而 Component Token 是用于在组件中访问样式属性的标识符。区别在于 `@collapse-header-padding` 是在编译阶段处理的，而 `headerPadding` 是在组件运行时根据主题样式解析的。因此，Less 变量在编译时就会确定，而 Component Token 的值会根据运行时的主题动态变化。

### DatePicker 日期选择框

#### `@picker-bg`

- Less 变量
- Component Token: `colorBgContainer`
- 备注: 全局 Token

#### `@picker-basic-cell-hover-color`

- Less 变量
- Component Token: `cellHoverBg`
- 备注: -

#### `@picker-basic-cell-active-with-range-color`

- Less 变量
- Component Token: `cellActiveWithRangeBg`
- 备注: -

#### `@picker-basic-cell-hover-with-range-color`

- Less 变量
- Component Token: `cellHoverWithRangeBg`
- 备注: -

#### `@picker-basic-cell-disabled-bg`

- Less 变量
- Component Token: `cellBgDisabled`
- 备注: -

#### `@picker-border-color`

- Less 变量
- Component Token: `colorSplit`
- 备注: 全局 Token

#### `@picker-date-hover-range-border-color`

- Less 变量
- Component Token: `cellRangeBorderColor`
- 备注: -

#### `@picker-date-hover-range-color`

- Less 变量
- Component Token: `cellHoverWithRangeColor`
- 备注: -

#### `@picker-time-panel-column-width`

- Less 变量
- Component Token: `timeColumnWidth`
- 备注: -

#### `@picker-time-panel-column-height`

- Less 变量
- Component Token: `timeColumnHeight`
- 备注: -

#### `@picker-time-panel-cell-height`

- Less 变量
- Component Token: `timeCellHeight`
- 备注: -

#### `@picker-panel-cell-height`

- Less 变量
- Component Token: `cellHeight`
- 备注: -

#### `@picker-panel-cell-width`

- Less 变量
- Component Token: `cellWidth`
- 备注: -

#### `@picker-text-height`

- Less 变量
- Component Token: `textHeight`
- 备注: -

#### `@picker-panel-without-time-cell-height`

- Less 变量
- Component Token: `withoutTimeCellHeight`
- 备注: -

### "less 变量" 和 "Component Token" 有什么关系吗？

根据上述描述列表，"less 变量" 和 "Component Token" 是相关的，它们之间存在一一对应的关系。具体的对应关系如下：

- `@descriptions-bg` 对应 `labelBg`
- `@descriptions-title-margin-bottom` 对应 `titleMarginBottom`
- `@descriptions-default-padding` 对应 `padding` 和 `paddingLG`
- `@descriptions-middle-padding` 对应 `paddingSM` 和 `paddingLG`
- `@descriptions-small-padding` 对应 `paddingXS` 和 `padding`
- `@descriptions-item-padding-bottom` 对应 `itemPaddingBottom`
- `@descriptions-item-label-colon-margin-right` 对应 `colonMarginRight`
- `@descriptions-item-label-colon-margin-left` 对应 `colonMarginLeft`
- `@descriptions-extra-color` 对应 `extraColor`

这些对应关系意味着，在使用这些 less 变量时，可以直接使用相应的 Component Token 进行样式设置。

### `@descriptions-default-padding` 的值是怎么定义的？

根据描述列表信息，`@descriptions-default-padding` 是一个全局 Token，对应的值为 `${token.padding}px ${token.paddingLG}px`。这意味着该变量定义了默认的 padding 值，其中 `token.padding` 和 `token.paddingLG` 分别代表具体的数值。在使用这个变量时，会将这两个值组合起来作为 padding 的设置。

### `@descriptions-small-padding` 的值是怎么定义的？

根据描述列表信息，`@descriptions-small-padding` 是一个全局 Token，对应的值为 `${token.paddingXS}px ${token.padding}px`。这意味着该变量定义了小尺寸情况下的 padding 值，其中 `token.paddingXS` 和 `token.padding` 分别代表具体的数值。在使用这个变量时，会将这两个值组合起来作为 padding 的设置。

以上是基于描述列表中的信息生成的 文档，希望对你有帮助！如有其他问题，请继续提问。

### Divider 分割线的 less 变量是什么？

Divider 分割线的 less 变量是 `@divider-text-padding`、`@divider-orientation-margin`、`@divider-color` 和 `@divider-vertical-gutter`。

### Divider 分割线的 Component Token 是什么？

Divider 分割线的 Component Token 是 `textPaddingInline`、`orientationMargin`、`colorSplit` 和 `verticalMarginInline`。

### Divider 分割线的备注有哪些？

Divider 分割线的备注有：

- `@divider-text-padding`：无备注
- `@divider-orientation-margin`：无备注
- `@divider-color`：全局 Token
- `@divider-vertical-gutter`：无备注

### Drawer 抽屉-背景颜色

**Less 变量：** `@drawer-bg`

**Component Token：** `colorBgElevated`

**备注：** 全局 Token

抽屉组件的背景颜色可以通过设置 `@drawer-bg` 这个 Less 变量来修改。对应的 Component Token 是 `colorBgElevated`，它可以用于整个组件中的背景颜色。

### Drawer 抽屉-标题样式

**Less 变量：** `@drawer-title-font-size`, `@drawer-title-line-height`

**Component Token：** `fontSizeLG`, `lineHeightLG`

**备注：** 全局 Token

抽屉组件的标题样式可以通过设置 `@drawer-title-font-size` 和 `@drawer-title-line-height` 这两个 Less 变量来调整。对应的 Component Token 分别是 `fontSizeLG` 和 `lineHeightLG`，它们可以用于设置标题的字体大小和行高。

### Drawer 抽屉-内容区域内边距

**Less 变量：** `@drawer-body-padding`

**Component Token：** `paddingLG`

**备注：** 全局 Token

抽屉组件的内容区域内边距可以通过设置 `@drawer-body-padding` 这个 Less 变量来控制。对应的 Component Token 是 `paddingLG`，它可以用于调整内容区域的内边距。

### Ant Design Dropdown 下拉菜单组件的主题颜色如何设置？

Ant Design Dropdown 下拉菜单组件的主题颜色通过 CSS 变量 `@dropdown-selected-color` 进行设置，对应的 Component Token 是 `colorPrimary`。这个主题颜色是全局的 Token，可以在整个应用内统一设置。

### Ant Design Dropdown 下拉菜单组件的禁用子菜单的背景色如何设置？

Ant Design Dropdown 下拉菜单组件禁用子菜单的背景色通过 CSS 变量 `@dropdown-menu-submenu-disabled-bg` 进行设置，对应的 Component Token 是 `colorBgElevated`。这个背景色是全局的 Token，可以在整个应用内统一设置。

### Ant Design Dropdown 下拉菜单组件选中项的背景色如何设置？

Ant Design Dropdown 下拉菜单组件选中项的背景色通过 CSS 变量 `@dropdown-selected-bg` 进行设置，对应的 Component Token 是 `controlItemBgActive`。这个背景色是全局的 Token，可以在整个应用内统一设置。

### Form 表单中的 `@label-required-color` 变量是什么意思？

`@label-required-color` 是 Less 变量，对应的 Component Token 是 `labelRequiredMarkColor`。它用于设置表单中必填字段标签的颜色。

### Form 表单中的 `@form-item-trailing-colon` 变量已废弃了吗？

是的，`@form-item-trailing-colon` 变量已经废弃了。它不再适用于最新的样式变化。

### Form 表单中的 `@form-item-label-font-size` 变量有什么作用？

`@form-item-label-font-size` 是 Less 变量，对应的 Component Token 是 `labelFontSize`。它用于设置表单项标签的字体大小。

### `@image-bg` 的作用是什么？

`@image-bg` 是一个 Less 变量，用于设置图片的背景色。它的值是全局 Token `colorFillTertiary`。

### `@image-color` 有什么作用？

`@image-color` 是一个 Less 变量，用于设置图片的颜色。它的值是全局 Token `colorTextLightSolid`。

### `@image-preview-operation-size` 和 `@image-preview-operation-color` 有什么作用？

`@image-preview-operation-size` 和 `@image-preview-operation-color` 是两个 Less 变量，用于设置图片预览操作的尺寸和颜色。

- `@image-preview-operation-size` 是用于设置图片预览操作的大小。
- `@image-preview-operation-color` 是用于设置图片预览操作的颜色。

这两个变量的具体取值没有提供，可能需要参考项目中的其他代码或文档来确定。

### Input 输入框的 CSS 变量

| less 变量 | Component Token | 备注 |
| --- | --- | --- |
| `@input-height-base` | `controlHeight` | 全局 Token |
| `@input-height-lg` | `controlHeightLG` | 全局 Token |
| `@input-height-sm` | `controlHeightSM` | 全局 Token |
| `@input-padding-horizontal` | `paddingInline` | - |
| `@input-padding-horizontal-base` | `paddingInline` | - |
| `@input-padding-horizontal-sm` | `paddingInlineSM` | - |
| `@input-padding-horizontal-lg` | `paddingInlineLG` | - |
| `@input-padding-vertical-base` | `paddinBlock` | - |
| `@input-padding-vertical-sm` | `paddingBlockSM` | - |
| `@input-padding-vertical-lg` | `paddingBlockLG` | - |
| `@input-placeholder-color` | `colorTextPlaceholder` | 全局 Token |
| `@input-color` | `colorText` | 全局 Token |
| `@input-border-color` | `colorBorder` | 全局 Token |
| `@input-bg` | `colorBgContainer` | 全局 Token |
| `@input-addon-bg` | `addonBg` | - |
| `@input-hover-border-color` | `hoverBorderColor` | - |
| `@input-disabled-bg` | `colorBgContainerDisabled` | 全局 Token |
| `@input-outline-offset` | `activeShadow` | 控制激活态阴影 |
| `@input-icon-hover-color` | `colorIconHover` | 全局 Token |
| `@input-disabled-color` | `colorTextDisabled` | 全局 Token |

### Input 输入框的组件 Token

| Component Token            | 备注           |
| -------------------------- | -------------- |
| `controlHeight`            | 全局 Token     |
| `controlHeightLG`          | 全局 Token     |
| `controlHeightSM`          | 全局 Token     |
| `paddingInline`            | -              |
| `paddingInlineSM`          | -              |
| `paddingInlineLG`          | -              |
| `paddinBlock`              | -              |
| `paddingBlockSM`           | -              |
| `paddingBlockLG`           | -              |
| `colorTextPlaceholder`     | 全局 Token     |
| `colorText`                | 全局 Token     |
| `colorBorder`              | 全局 Token     |
| `colorBgContainer`         | 全局 Token     |
| `addonBg`                  | -              |
| `hoverBorderColor`         | -              |
| `colorBgContainerDisabled` | 全局 Token     |
| `activeShadow`             | 控制激活态阴影 |
| `colorIconHover`           | 全局 Token     |
| `colorTextDisabled`        | 全局 Token     |

### Input 输入框的备注

- `@input-height-base`：全局 Token
- `@input-height-lg`：全局 Token
- `@input-height-sm`：全局 Token
- `@input-padding-horizontal`：-
- `@input-padding-horizontal-base`：-
- `@input-padding-horizontal-sm`：-
- `@input-padding-horizontal-lg`：-
- `@input-padding-vertical-base`：-
- `@input-padding-vertical-sm`：-
- `@input-padding-vertical-lg`：-
- `@input-placeholder-color`：全局 Token
- `@input-color`：全局 Token
- `@input-border-color`：全局 Token
- `@input-bg`：全局 Token
- `@input-addon-bg`：-
- `@input-hover-border-color`：-
- `@input-disabled-bg`：全局 Token
- `@input-outline-offset`：控制激活态阴影
- `@input-icon-hover-color`：全局 Token
- `@input-disabled-color`：全局 Token

### InputNumber 数字输入框 less 变量说明

| less 变量 | Component Token | 备注 |
| --- | --- | --- |
| `@input-number-hover-border-color` | `hoverBorderColor` | - |
| `@input-number-handler-active-bg` | `handleActiveBg` | - |
| `@input-number-handler-hover-bg` | `handleHoverColor` | 4.x 中命名有误，实际上是 color |
| `@input-number-handler-bg` | `handleBg` | - |
| `@input-number-handler-border-color` | `handleBorderColor` | - |

#### `@input-number-hover-border-color`

- Component Token: `hoverBorderColor`
- 备注: 无

该 less 变量用于定义数字输入框在鼠标悬停时的边框颜色。

#### `@input-number-handler-active-bg`

- Component Token: `handleActiveBg`
- 备注: 无

该 less 变量用于定义数字输入框中加减按钮在按下时的背景颜色。

#### `@input-number-handler-hover-bg`

- Component Token: `handleHoverColor`
- 备注: 4.x 中命名有误，实际上是 color

该 less 变量用于定义数字输入框中加减按钮在鼠标悬停时的背景颜色。

#### 4. `@input-number-handler-bg`

- Component Token: `handleBg`
- 备注: 无

该 less 变量用于定义数字输入框中加减按钮的背景颜色。

#### 5. `@input-number-handler-border-color`

- Component Token: `handleBorderColor`
- 备注: 无

该 less 变量用于定义数字输入框中加减按钮的边框颜色。

### InputNumber 数字输入框 Component Token 说明

| Component Token     | 说明                           |
| ------------------- | ------------------------------ |
| `hoverBorderColor`  | 鼠标悬停时的边框颜色           |
| `handleActiveBg`    | 加减按钮在按下时的背景颜色     |
| `handleHoverColor`  | 加减按钮在鼠标悬停时的背景颜色 |
| `handleBg`          | 加减按钮的背景颜色             |
| `handleBorderColor` | 加减按钮的边框颜色             |

InputNumber 数字输入框的 Component Token 主要用于定义其样式中的颜色属性。

### InputNumber 数字输入框 备注说明

- `@input-number-hover-border-color` 的备注为空。
- `@input-number-handler-active-bg` 的备注为空。
- `@input-number-handler-hover-bg` 的备注为 4.x 中命名有误，实际上是 color。
- `@input-number-handler-bg` 的备注为空。
- `@input-number-handler-border-color` 的备注为空。

这些备注主要用于提供更多关于 less 变量的相关信息或说明。

Layout 布局中的 `@layout-header-height` 是什么意思？`@layout-header-height` 是指 Layout 布局中头部（Header）的高度。

Layout 布局中的 `@layout-footer-padding` 是什么含义？`@layout-footer-padding` 是指 Layout 布局中底部（Footer）的内边距。

Layout 布局中的 `@layout-zero-trigger-height` 有何作用？`@layout-zero-trigger-height` 是指 Layout 布局中零宽触发器的高度。零宽触发器用于切换收缩和展开状态的侧边栏（Sider）。

### List 列表

#### `@list-header-background` less 变量对应的 Component Token 是 `headerBg`，有何作用？

- `@list-header-background` 是用于设置列表头部背景颜色的 less 变量。
- `headerBg` 是对应的 Component Token，表示设置列表头部背景颜色的设计标识。
- 通过设置 `headerBg` 的值，可以实现自定义列表头部的背景颜色。

#### `@list-footer-background` less 变量对应的 Component Token 是 `footerBg`，有何作用？

- `@list-footer-background` 是用于设置列表底部背景颜色的 less 变量。
- `footerBg` 是对应的 Component Token，表示设置列表底部背景颜色的设计标识。
- 通过设置 `footerBg` 的值，可以实现自定义列表底部的背景颜色。

#### `@list-empty-text-padding` less 变量对应的 Component Token 是 `emptyTextPadding`，有何作用？

- `@list-empty-text-padding` 是用于设置空列表文本的内边距的 less 变量。
- `emptyTextPadding` 是对应的 Component Token，表示设置空列表文本的内边距的设计标识。
- 通过设置 `emptyTextPadding` 的值，可以控制空列表文本的内边距大小。

#### `@list-item-padding` less 变量对应的 Component Token 是 `itemPadding`，有何作用？

- `@list-item-padding` 是用于设置列表项的内边距的 less 变量。
- `itemPadding` 是对应的 Component Token，表示设置列表项的内边距的设计标识。
- 通过设置 `itemPadding` 的值，可以控制列表项的内边距大小。

#### `@list-item-padding-sm` less 变量对应的 Component Token 是 `itemPaddingSM`，有何作用？

- `@list-item-padding-sm` 是用于设置小尺寸列表项的内边距的 less 变量。
- `itemPaddingSM` 是对应的 Component Token，表示设置小尺寸列表项的内边距的设计标识。
- 通过设置 `itemPaddingSM` 的值，可以控制小尺寸列表项的内边距大小。

#### `@list-item-padding-lg` less 变量对应的 Component Token 是 `itemPaddingLG`，有何作用？

- `@list-item-padding-lg` 是用于设置大尺寸列表项的内边距的 less 变量。
- `itemPaddingLG` 是对应的 Component Token，表示设置大尺寸列表项的内边距的设计标识。
- 通过设置 `itemPaddingLG` 的值，可以控制大尺寸列表项的内边距大小。

#### `@list-item-meta-margin-bottom` less 变量对应的 Component Token 是 `metaMarginBottom`，有何作用？

- `@list-item-meta-margin-bottom` 是用于设置列表项元数据底部边距的 less 变量。
- `metaMarginBottom` 是对应的 Component Token，表示设置列表项元数据底部边距的设计标识。
- 通过设置 `metaMarginBottom` 的值，可以控制列表项元数据底部边距的大小。

#### `@list-item-meta-avatar-margin-right` less 变量对应的 Component Token 是 `avatarMarginRight`，有何作用？

- `@list-item-meta-avatar-margin-right` 是用于设置列表项元数据中头像的右边距的 less 变量。
- `avatarMarginRight` 是对应的 Component Token，表示设置列表项元数据中头像的右边距的设计标识。
- 通过设置 `avatarMarginRight` 的值，可以控制列表项元数据中头像的右边距大小。

#### `@list-item-meta-title-margin-bottom` less 变量对应的 Component Token 是 `titleMarginBottom`，有何作用？

- `@list-item-meta-title-margin-bottom` 是用于设置列表项元数据标题底部边距的 less 变量。
- `titleMarginBottom` 是对应的 Component Token，表示设置列表项元数据标题底部边距的设计标识。
- 通过设置 `titleMarginBottom` 的值，可以控制列表项元数据标题底部边距的大小。

#### `@list-customize-card-bg` 是什么作用？

- `@list-customize-card-bg` 是用于自定义列表项背景颜色的 less 变量。
- 由于样式变化，该 less 变量已废弃，不推荐使用。

#### `@list-item-meta-description-font-size` less 变量对应的 Component Token 是 `descriptionFontSize`，有何作用？

- `@list-item-meta-description-font-size` 是用于设置列表项元数据描述文本大小的 less 变量。
- `descriptionFontSize` 是对应的 Component Token，表示设置列表项元数据描述文本大小的设计标识。
- 通过设置 `descriptionFontSize` 的值，可以控制列表项元数据描述文本的大小。

### Mentions 提及

#### `@mentions-dropdown-bg` less 变量对应的全局 Token 是 `colorBgElevated`，有何作用？

- `@mentions-dropdown-bg` 是用于设置提及下拉菜单背景颜色的 less 变量。
- `colorBgElevated` 是对应的全局 Token，表示设置提及下拉菜单背景颜色的设计标识。
- 通过设置 `colorBgElevated` 的值，可以控制提及下拉菜单的背景颜色。

#### `@mentions-dropdown-menu-item-hover-bg` 是什么作用？

- `@mentions-dropdown-menu-item-hover-bg` 是用于设置提及下拉菜单项悬停背景颜色的 less 变量。
- 该 less 变量已废弃，不推荐使用。

### Menu 导航菜单的 Less 变量和 Component Token 对应关系

在 Menu 导航菜单中，有一些 Less 变量和对应的 Component Token，如下所示：

- `@menu-inline-toplevel-item-height` 对应 Component Token `itemHeight`，与 `@menu-item-height` 相同。
- `@menu-item-height` 对应 Component Token `itemHeight`。
- `@menu-item-group-height` 对应 Component Token `groupTitleLineHeight`。
- `@menu-collapsed-width` 对应 Component Token `collapsedWidth`。
- `@menu-bg` 对应 Component Token `itemBg`。
- `@menu-popup-bg` 对应 Component Token `popupBg`。
- `@menu-item-color` 对应 Component Token `itemColor`。
- `@menu-inline-submenu-bg` 对应 Component Token `subMenuItemBg`。
- `@menu-highlight-color` 对应 Component Token `itemSelectedColor`。
- `@menu-highlight-danger-color` 对应 Component Token `dangerItemSelectedColor`。
- `@menu-item-active-bg` 对应 Component Token `itemActiveBg`。
- `@menu-item-active-danger-bg` 对应 Component Token `dangerItemActiveBg`。
- `@menu-item-active-border-width` 对应 Component Token `activeBarBorderWidth`。
- `@menu-item-group-title-color` 对应 Component Token `groupTitleColor`。
- `@menu-item-vertical-margin` 对应 Component Token `itemMarginBlock`。
- `@menu-item-font-size` 对应全局 Token `fontSize`。
- `@menu-item-boundary-margin` 已废弃，可以使用 `itemMarginBlock` 替代。
- `@menu-item-padding-horizontal` 对应 Component Token `itemPaddingInline`。
- `@menu-item-padding` 已废弃，可以使用 `itemPaddingInline` 和 `itemHeight` 替代。
- `@menu-horizontal-line-height` 对应 Component Token `horizontalLineHeight`。
- `@menu-icon-margin-right` 对应 Component Token `iconMarginInlineEnd`。
- `@menu-icon-size` 对应 Component Token `iconSize`。
- `@menu-icon-size-lg` 对应 Component Token `horizontalLineHeight`。
- `@menu-dark-color` 对应 Component Token `darkItemColor`。
- `@menu-dark-danger-color` 对应 Component Token `darkDangerItemColor`。
- `@menu-dark-bg` 对应 Component Token `darkItemBg`。
- `@menu-dark-arrow-color` 已废弃，和文字颜色相同。
- `@menu-dark-inline-submenu-bg` 对应 Component Token `darkSubMenuItemBg`。
- `@menu-dark-highlight-color` 对应 Component Token `darkItemSelectedColor`。
- `@menu-dark-item-active-bg` 对应 Component Token `darkItemSelectedBg`。
- `@menu-dark-item-active-danger-bg` 对应 Component Token `darkDangerItemSelectedBg`。
- `@menu-dark-selected-item-icon-color` 已废弃，同 `darkItemSelectedColor`。
- `@menu-dark-selected-item-text-color` 已废弃，同 `darkItemSelectedColor`。
- `@menu-dark-item-hover-bg` 对应 Component Token `darkItemHoverBg`。

以上是 Menu 导航菜单中的一些 Less 变量和对应的 Component Token 的对应关系。

### Menu 导航菜单的样式变量

Menu 导航菜单中有一些样式变量可以用来调整菜单的样式，以下是这些样式变量的说明：

- `@menu-inline-toplevel-item-height` 是菜单顶级项的高度，在 CSS 中使用 `@menu-inline-toplevel-item-height` 变量来设置。
- `@menu-item-height` 是菜单项的高度，在 CSS 中使用 `@menu-item-height` 变量来设置。
- `@menu-item-group-height` 是菜单项组的标题行高度，在 CSS 中使用 `@menu-item-group-height` 变量来设置。
- `@menu-collapsed-width` 是菜单折叠时的宽度，在 CSS 中使用 `@menu-collapsed-width` 变量来设置。
- `@menu-bg` 是菜单项的背景色，在 CSS 中使用 `@menu-bg` 变量来设置。
- `@menu-popup-bg` 是菜单弹出框的背景色，在 CSS 中使用 `@menu-popup-bg` 变量来设置。
- `@menu-item-color` 是菜单项的文字颜色，在 CSS 中使用 `@menu-item-color` 变量来设置。
- `@menu-inline-submenu-bg` 是内嵌菜单的背景色，在 CSS 中使用 `@menu-inline-submenu-bg` 变量来设置。
- `@menu-highlight-color` 是菜单项选中时的文字颜色，在 CSS 中使用 `@menu-highlight-color` 变量来设置。
- `@menu-highlight-danger-color` 是菜单项选中时的危险状态文字颜色，在 CSS 中使用 `@menu-highlight-danger-color` 变量来设置。
- `@menu-item-active-bg` 是菜单项激活状态的背景色，在 CSS 中使用 `@menu-item-active-bg` 变量来设置。
- `@menu-item-active-danger-bg` 是菜单项激活状态的危险状态背景色，在 CSS 中使用 `@menu-item-active-danger-bg` 变量来设置。
- `@menu-item-active-border-width` 是菜单项激活状态的边框宽度，在 CSS 中使用 `@menu-item-active-border-width` 变量来设置。
- `@menu-item-group-title-color` 是菜单项组的标题颜色，在 CSS 中使用 `@menu-item-group-title-color` 变量来设置。
- `@menu-item-vertical-margin` 是菜单项的垂直方向边距，在 CSS 中使用 `@menu-item-vertical-margin` 变量来设置。
- `@menu-item-font-size` 是菜单项的字体大小，在 CSS 中使用 `@menu-item-font-size` 变量来设置。
- `@menu-item-boundary-margin` 是菜单项的边界边距，已废弃，使用 `@menu-item-vertical-margin` 替代。
- `@menu-item-padding-horizontal` 是菜单项的水平方向内边距，在 CSS 中使用 `@menu-item-padding-horizontal` 变量来设置。
- `@menu-item-padding` 已废弃，使用 `@menu-item-padding-horizontal` 和 `@menu-item-height` 替代。
- `@menu-horizontal-line-height` 是水平菜单的行高，在 CSS 中使用 `@menu-horizontal-line-height` 变量来设置。
- `@menu-icon-margin-right` 是菜单项图标的右侧边距，在 CSS 中使用 `@menu-icon-margin-right` 变量来设置。
- `@menu-icon-size` 是菜单项图标的大小，在 CSS 中使用 `@menu-icon-size` 变量来设置。
- `@menu-icon-size-lg` 是大号菜单项图标的大小，在 CSS 中使用 `@menu-icon-size-lg` 变量来设置。
- `@menu-dark-color` 是暗色主题菜单项的文字颜色，在 CSS 中使用 `@menu-dark-color` 变量来设置。
- `@menu-dark-danger-color` 是暗色主题菜单项危险状态的文字颜色，在 CSS 中使用 `@menu-dark-danger-color` 变量来设置。
- `@menu-dark-bg` 是暗色主题菜单项的背景色，在 CSS 中使用 `@menu-dark-bg` 变量来设置。
- `@menu-dark-arrow-color` 已废弃，和文字颜色相同。
- `@menu-dark-inline-submenu-bg` 是暗色主题内嵌菜单的背景色，在 CSS 中使用 `@menu-dark-inline-submenu-bg` 变量来设置。
- `@menu-dark-highlight-color` 是暗色主题菜单项选中时的文字颜色，在 CSS 中使用 `@menu-dark-highlight-color` 变量来设置。
- `@menu-dark-item-active-bg` 是暗色主题菜单项激活状态的背景色，在 CSS 中使用 `@menu-dark-item-active-bg` 变量来设置。
- `@menu-dark-item-active-danger-bg` 是暗色主题菜单项激活状态的危险状态背景色，在 CSS 中使用 `@menu-dark-item-active-danger-bg` 变量来设置

### Message 组件的全局提示如何使用？

Message 组件的全局提示可以通过设置 Less 变量 `@zindex-message` 来控制弹出层的层级。你可以通过修改该变量的值来改变全局提示的层级效果。

```less
@zindex-message: 1000;
```

另外，你还可以使用 Less 变量 `@message-notice-content-padding` 来调整全局提示内容的内边距，通过修改该变量的值来改变全局提示内容的内边距效果。

```less
@message-notice-content-padding: 8px;
```

如果你想要改变全局提示内容的背景色，可以使用 Less 变量 `@message-notice-content-bg`，通过修改该变量的值来改变全局提示内容的背景色。

```less
@message-notice-content-bg: #f9f9f9;
```

### Message 组件的全局提示有哪些 Less 变量可以调整？

在 Message 组件中，你可以调整以下 Less 变量来改变全局提示的样式：

- `@zindex-message`：控制弹出层的层级，通过修改该变量的值来改变全局提示的层级效果。

- `@message-notice-content-padding`：控制全局提示内容的内边距，通过修改该变量的值来改变全局提示内容的内边距效果。

- `@message-notice-content-bg`：控制全局提示内容的背景色，通过修改该变量的值来改变全局提示内容的背景色。

### 如何在 Ant Design 中使用 Component Token 来调整 Message 组件的全局提示样式？

在 Ant Design 中，你可以使用 Component Token 来调整 Message 组件的全局提示样式。以下是一些常用的 Component Token：

- `zIndexPopup`：控制弹出层的层级，可以用来调整全局提示的层级效果。

- `contentPadding`：控制全局提示内容的内边距，可以用来调整全局提示内容的内边距效果。

- `contentBg`：控制全局提示内容的背景色，可以用来调整全局提示内容的背景色。

你可以通过在代码中引入对应的 Component Token，并将其传递给 Message 组件来调整全局提示的样式。例如：

```jsx
import { message } from 'antd';
import { zIndexPopup, contentPadding, contentBg } from '@ant-design/compatible';

message.config({
  getContainer: () => document.getElementById('root'),
  zIndex: zIndexPopup,
});

message.config({
  noticeContentStyle: {
    padding: contentPadding,
    background: contentBg,
  },
});
```

### Modal 对话框

### `@modal-header-padding-vertical` 这个变量的作用是什么？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-header-padding-horizontal` 变量有什么作用？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-body-padding` 变量有什么作用？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-header-bg` 和 `headerBg` 有什么关联关系？

`@modal-header-bg` 是 Modal 对话框头部的背景色的 Less 变量，而 `headerBg` 是对应的组件 Token。

### `@modal-header-padding` 这个变量有什么作用？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-header-border-width` 变量的作用是什么？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-header-border-style` 这个变量有什么作用？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-header-title-line-height` 和 `titleLineHeight` 有什么关系？

`@modal-header-title-line-height` 是 Modal 的标题行高的 Less 变量，而 `titleLineHeight` 是对应的组件 Token。

### `@modal-header-title-font-size` 和 `titleFontSize` 有何联系？

`@modal-header-title-font-size` 是 Modal 的标题字体大小的 Less 变量，而 `titleFontSize` 是对应的组件 Token。

### `@modal-header-border-color-split` 这个变量的作用是什么？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-header-close-size` 有何作用？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-content-bg` 和 `contentBg` 之间有何联系？

`@modal-content-bg` 是 Modal 内容区域的背景色的 Less 变量，而 `contentBg` 是对应的组件 Token。

### `@modal-heading-color` 和 `titleColor` 有何关联？

`@modal-heading-color` 是 Modal 的标题文字颜色的 Less 变量，而 `titleColor` 是对应的组件 Token。

### `@modal-close-color` 是全局 Token 吗？

是的，`@modal-close-color` 是 Modal 关闭按钮的颜色的 Less 变量，并且是全局 Token。

### `@modal-footer-bg` 和 `footerBg` 之间有什么联系？

`@modal-footer-bg` 是 Modal 底部的背景色的 Less 变量，而 `footerBg` 是对应的组件 Token。

### `@modal-footer-border-color-split` 这个变量有何作用？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-footer-border-style` 这个变量有何作用？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-footer-padding-vertical` 这个变量的作用是什么？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-footer-padding-horizontal` 这个变量有何作用？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-footer-border-width` 这个变量有何作用？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-mask-bg` 是全局 Token 吗？

是的，`@modal-mask-bg` 是 Modal 的遮罩背景色的 Less 变量，并且是全局 Token。

### `@modal-confirm-body-padding` 这个变量有什么作用？

这个变量由于样式的变化而被废弃了，不再使用。

### `@modal-confirm-title-font-size` 和 `titleFontSize` 有何联系？

`@modal-confirm-title-font-size` 是 Modal 的确认框标题字体大小的 Less 变量，而 `titleFontSize` 是对应的组件 Token。

### `@modal-border-radius` 和 `borderRadiusLG` 之间有什么关系？

`@modal-border-radius` 是 Modal 的圆角半径的 Less 变量，而 `borderRadiusLG` 是对应的全局 Token。

### Pagination 分页

1. 什么是 Pagination 分页？ Pagination 分页是一种在网页或应用程序中展示大量数据时，将数据划分为多个页面的方式。通过使用 Pagination 分页，可以方便地浏览和导航数据。

2. Pagination 分页包含哪些 Less 变量和 Component Token？以下是 Pagination 分页中使用的 Less 变量和对应的 Component Token：

- `@pagination-item-bg` => `itemBg`
- `@pagination-item-size` => `itemSize`
- `@pagination-item-size-sm` => `itemSizeSM`
- `@pagination-font-family` => `fontFamily` （全局 Token）
- `@pagination-font-weight-active` => `fontWeightStrong` （全局 Token）
- `@pagination-item-bg-active` => `itemActiveBg`
- `@pagination-item-link-bg` => `itemLinkBg`
- `@pagination-item-disabled-color-active` => `itemActiveColorDisabled`
- `@pagination-item-disabled-bg-active` => `itemActiveBgDisabled`
- `@pagination-item-input-bg` => `itemInputBg`
- `@pagination-mini-options-size-changer-top` => `miniOptionsSizeChangerTop`

3. Pagination 分页的主要功能是什么？ Pagination 分页的主要功能是将大量数据划分为多个页面，让用户可以方便地浏览和导航数据。它提供了一系列的页面切换和导航按钮，以及显示当前页面的信息。

希望以上信息对你有帮助！如果还有其他问题，请随时提问。

### Less variables 的作用是什么？

Less variables 是用来定义样式中的变量，可以方便地在样式文件中引用和修改，减少重复的代码编写。在 Ant Design 的 Popover 气泡卡片组件中，使用了一些 Less variables，如 `@popover-bg` 和 `@popover-color`。这些变量可以控制气泡卡片的背景色和文本颜色。

### `@popover-min-width` 和 `@popover-min-height` 的区别是什么？

`@popover-min-width` 是一个全局 Token，用于设置气泡卡片的最小宽度。而 `@popover-min-height` 是一个已废弃的变量，不再被使用。在最新版本的 Ant Design 中，建议使用 `@popover-min-width` 来限制气泡卡片的最小宽度。

### `@popover-arrow-width` 的作用是什么？

`@popover-arrow-width` 是一个全局 Token，用于设置气泡卡片箭头的宽度。通过修改这个变量的值，可以改变气泡卡片箭头的大小。在 Ant Design 的 Popover 组件中，我们可以使用 `@popover-arrow-width` 来调整箭头的宽度。

### `@progress-default-color` 是什么意思？

`@progress-default-color` 是一个 less 变量，用于设置进度条的默认颜色。它对应的 Component Token 是 `defaultColor`。具体用法可以参考 Ant Design 的文档。

### `@progress-text-font-size` 是什么作用？

`@progress-text-font-size` 是一个 less 变量，用于设置进度条文本的字体大小。它对应的全局 Token 是 `fontSizeSM`。通过修改这个变量的值，可以调整进度条文本的字体大小。

### 为什么要使用 `@progress-remaining-color` 和 `@progress-steps-item-bg`？

`@progress-remaining-color` 和 `@progress-steps-item-bg` 都是用来设置进度条中剩余部分的颜色。`@progress-remaining-color` 对应的 Component Token 是 `remainingColor`，而 `@progress-steps-item-bg` 没有对应的 Component Token，可以直接使用其变量名来设置。通过修改这两个变量的值，可以改变进度条剩余部分的颜色。

请注意，`@progress-remaining-color` 和 `@progress-steps-item-bg` 可以设置相同的颜色，根据具体的需求选择使用即可。

### Radio 单选框 - `radioSize`

#### less 变量

`@radio-size`

#### Component Token

`radioSize`

#### 备注

-

### Radio 单选框 - `lineWidth`

#### less 变量

`@radio-border-width`

#### Component Token

`lineWidth`

#### 备注

全局 Token

### Radio 单选框 - `dotColorDisabled`

#### less 变量

`@radio-dot-disabled-color`

#### Component Token

`dotColorDisabled`

#### 备注

-

### 评分组件的 less 变量有哪些？

评分（Rate）组件的 less 变量包括：

- `@rate-star-color`：表示评分星星的颜色。
- `@rate-star-bg`：表示评分星星的背景色。
- `@rate-star-size`：表示评分星星的尺寸。
- `@rate-star-hover-scale`：表示鼠标悬停时评分星星的缩放比例。

请注意，这些变量在使用评分组件时可以进行定制，以满足不同的设计需求。

### 评分组件的 Component Token 是什么？

评分（Rate）组件的 Component Token 包括：

- `starColor`：表示评分星星的颜色。
- `starBg`：表示评分星星的背景色。
- `starSize`：表示评分星星的尺寸。
- `starHoverScale`：表示鼠标悬停时评分星星的缩放比例。

这些 Token 可以用于配置评分组件的样式，根据需求进行个性化定制。

### 评分组件的 less 变量和 Component Token 有什么作用？

评分（Rate）组件的 less 变量和 Component Token 主要用于自定义评分的样式。

通过修改 less 变量，可以调整评分星星的颜色、背景色、尺寸和鼠标悬停时的缩放比例，以满足不同的设计需求。

同时，通过使用 Component Token，可以在代码中动态地配置评分组件的样式，实现个性化的评分效果。

这些变量和 Token 提供了灵活的定制能力，使评分组件适应不同的设计和使用场景。

### Ant Design 5.x 中的 `result` 组件有哪些 Less 变量和对应的 Component Token？

答案：

- `@result-title-font-size` 对应 `titleFontSize`
- `@result-subtitle-font-size` 对应 `subtitleFontSize`
- `@result-extra-margin` 对应 `extraMargin`

### 问题 2：如何在 Ant Design 5.x 中使用 CSS 变量模式来自定义 `result` 组件的样式？

答案：在 Ant Design 5.x 中，可以使用 CSS 变量模式来自定义 `result` 组件的样式。通过定义对应的 Less 变量，可以控制组件的样式属性。以下是一个示例：

```less
@result-title-font-size: 18px; // 自定义标题字体大小
@result-subtitle-font-size: 14px; // 自定义副标题字体大小
@result-extra-margin: 10px; // 自定义额外的外边距

.result {
  .title {
    font-size: @result-title-font-size;
  }

  .subtitle {
    font-size: @result-subtitle-font-size;
  }

  .extra {
    margin: @result-extra-margin;
  }
}
```

上述示例中，通过设置对应的 Less 变量，可以自定义 `result` 组件中标题、副标题和额外样式的字体大小和外边距。

###为什么在 Ant Design 5.x 中推荐开启 CSS 变量模式？

答案：在 Ant Design 5.x 中推荐开启 CSS 变量模式的原因有以下几点：

1. 减少样式体积：CSS 变量模式可以使得不同主题下的样式可以共享，从而减少样式体积。这对于项目的整体性能和加载速度是有益的。
2. 提升主题切换性能：使用 CSS 变量模式时，切换主题时不再需要重新序列化样式，这大大提升了主题切换的性能，并且能够更快速地响应用户的操作。
3. 更灵活的样式定制：通过自定义 Less 变量，可以实现对组件样式的细粒度控制，提供了更灵活、定制化的样式定制方式。

综上所述，开启 CSS 变量模式可以为项目提供更好的性能和灵活性。

### Segment 组件的 Less 变量和 Component Token 有哪些？

Segment 组件的 Less 变量和 Component Token 如下：

| Less 变量 | Component Token | 备注 |
| --- | --- | --- |
| `@segmented-container-padding` | `padding` | - |
| `@segmented-label-color` | `itemColor` | - |
| `@segmented-bg` | - | 可以用 `className` 或 `style` 自定义 |
| `@segmented-hover-bg` | `itemHoverBg` | - |
| `@segmented-label-hover-color` | `itemHoverColor` | - |
| `@segmented-selected-bg` | `itemSelectedBg` | - |

### Segment 组件的 `@segmented-container-padding` 变量是什么作用？

`@segmented-container-padding` 变量用于定义 Segment 组件的容器内边距(padding)。

### Segment 组件的 `@segmented-label-color` 变量是用来做什么的？

`@segmented-label-color` 变量用于定义 Segment 组件的标签颜色。

### Segment 组件的 `@segmented-bg` 变量可以如何自定义？

`@segmented-bg` 变量可以通过设置组件的 `className` 或 `style` 来自定义背景样式。

### Select 选择器的 Less 变量与 Component Token 的对应关系是什么？

| Less 变量 | Component Token |
| --- | --- |
| `@select-border-color` | `colorBorder` |
| `@select-item-selected-color` | `optionSelectedColor` |
| `@select-item-selected-font-weight` | `optionSelectedFontWeight` |
| `@select-dropdown-bg` | `colorBgElevated` |
| `@select-item-selected-bg` | `optionSelectedBg` |
| `@select-item-active-bg` | `optionActiveBg` |
| `@select-dropdown-vertical-padding` | `optionPadding` |
| `@select-dropdown-font-size` | `optionFontSize` |
| `@select-dropdown-line-height` | `optionLineHeight` |
| `@select-dropdown-height` | `optionHeight` |
| `@select-background` | `selectorBg` |
| `@select-clear-background` | `clearBg` |
| `@select-selection-item-bg` | `multipleItemBg` |
| `@select-selection-item-border-color` | `multipleItemBorderColor` |
| `@select-single-item-height-lg` | `singleItemHeightLG` |
| `@select-multiple-item-height` | `multipleItemHeight` |
| `@select-multiple-item-height-lg` | `multipleItemHeightLG` |
| `@select-multiple-disabled-background` | `multipleSelectorBgDisabled` |
| `@select-multiple-item-disabled-color` | `multipleItemColorDisabled` |
| `@select-multiple-item-disabled-border-color` | `multipleItemBorderColorDisabled` |

### Select 选择器的 Less 变量中有哪些全局 Token？

- `@select-border-color`对应`colorBorder`是全局 Token。
- `@select-dropdown-bg`对应`colorBgElevated`是全局 Token。

### Select 选择器的 Less 变量中有哪些已废弃的 Token？

- `@select-multiple-item-spacing-half`已被废弃。

注意：这些 文档是根据原始内容生成的，可能需要根据实际情况进行微调和改进。

### Skeleton 骨架屏

问：骨架屏的 Less 变量有哪些？答：骨架屏的 Less 变量包括 `@skeleton-block-radius`、`@skeleton-title-height`、`@skeleton-color`、`@skeleton-to-color`、`@skeleton-paragraph-margin-top`和`@skeleton-paragraph-li-height`。

问：骨架屏的 Component Token 有哪些？答：骨架屏的 Component Token 包括 `blockRadius`、`titleHeight`、`gradientFromColor`、`gradientToColor`、`paragraphMarginTop`和`paragraphLiHeight`。

问：有哪个样式变量已废弃？答：`@skeleton-paragraph-li-margin-top`是因为样式变化而已废弃的。

### Skeleton 骨架屏的变量说明

问：骨架屏的 `@skeleton-block-radius` 变量是什么含义？答：`@skeleton-block-radius` 是用于设置骨架屏块的圆角半径的变量。

问：骨架屏的 `@skeleton-title-height` 变量是什么含义？答：`@skeleton-title-height` 是用于设置骨架屏标题的高度的变量。

问：骨架屏的 `@skeleton-color` 变量是什么含义？答：`@skeleton-color` 是用于设置骨架屏渐变颜色的起始颜色的变量。

问：骨架屏的 `@skeleton-to-color` 变量是什么含义？答：`@skeleton-to-color` 是用于设置骨架屏渐变颜色的结束颜色的变量。

问：骨架屏的 `@skeleton-paragraph-margin-top` 变量是什么含义？答：`@skeleton-paragraph-margin-top` 是用于设置骨架屏段落的上边距的变量。

问：骨架屏的 `@skeleton-paragraph-li-height` 变量是什么含义？答：`@skeleton-paragraph-li-height` 是用于设置骨架屏段落列表项的高度的变量。

### Skeleton 骨架屏的变量对应关系

问：骨架屏的 `blockRadius` 对应哪个 Less 变量？答：`blockRadius` 对应 `@skeleton-block-radius` 这个 Less 变量。

问：骨架屏的 `titleHeight` 对应哪个 Less 变量？答：`titleHeight` 对应 `@skeleton-title-height` 这个 Less 变量。

问：骨架屏的 `gradientFromColor` 对应哪个 Less 变量？答：`gradientFromColor` 对应 `@skeleton-color` 这个 Less 变量。

问：骨架屏的 `gradientToColor` 对应哪个 Less 变量？答：`gradientToColor` 对应 `@skeleton-to-color` 这个 Less 变量。

问：骨架屏的 `paragraphMarginTop` 对应哪个 Less 变量？答：`paragraphMarginTop` 对应 `@skeleton-paragraph-margin-top` 这个 Less 变量。

问：骨架屏的 `paragraphLiHeight` 对应哪个 Less 变量？答：`paragraphLiHeight` 对应 `@skeleton-paragraph-li-height` 这个 Less 变量。

### 骨架屏变量废弃说明

问：为什么 `@skeleton-paragraph-li-margin-top` 变量已废弃？答：`@skeleton-paragraph-li-margin-top` 变量已废弃是因为样式变化导致不再需要使用该变量。

### Slider 滑动输入条

### 如何修改 Slider 的外边距？ Slider 的外边距可以直接通过 `className` 或 `style` 进行修改。

### 如何修改 Slider 轨道的背景颜色？ Slider 轨道的背景颜色可以通过设置 `railBg` 属性来修改。

### 如何修改 Slider 轨道在悬停状态下的背景颜色？ Slider 轨道在悬停状态下的背景颜色可以通过设置 `railHoverBg` 属性来修改。

### 如何修改 Slider 轨道滑块的背景颜色？ Slider 轨道滑块的背景颜色可以通过设置 `trackBg` 属性来修改。

### 如何修改 Slider 轨道滑块在悬停状态下的背景颜色？ Slider 轨道滑块在悬停状态下的背景颜色可以通过设置 `trackHoverBg` 属性来修改。

### 如何修改 Slider 滑块的边框宽度？ Slider 滑块的边框宽度可以通过设置 `handleLineWidth` 属性来修改。

### 如何修改 Slider 滑块的颜色？ Slider 滑块的颜色可以通过设置 `handleColor` 属性来修改。

### 如何修改 Slider 滑块在悬停状态下的颜色？ Slider 滑块在悬停状态下的颜色可以通过设置 `handleActiveColor` 属性来修改。

### 如何修改 Slider 滑块在焦点状态下的颜色？ Slider 滑块在焦点状态下的颜色可以通过设置 `handleActiveColor` 属性来修改。

### 如何修改 Slider 滑块打开提示时的颜色？ Slider 滑块打开提示时的颜色可以通过设置 `handleActiveColor` 属性来修改。

### 如何修改 Slider 滑块的大小？ Slider 滑块的大小可以通过设置 `handleSize` 属性来修改。

### 如何修改 Slider 滑块的边距？ Slider 滑块的边距已废弃，不能进行修改。

### 如何修改 Slider 滑块的阴影？ Slider 滑块的阴影已废弃，不能进行修改。

### 如何修改 Slider 刻度的边框颜色？ Slider 刻度的边框颜色可以通过设置 `dotBorderColor` 属性来修改。

### 如何修改 Slider 刻度在激活状态下的边框颜色？ Slider 刻度在激活状态下的边框颜色可以通过设置 `dotActiveBorderColor` 属性来修改。

### 如何修改禁用状态下 Slider 的颜色？ 禁用状态下 Slider 的颜色可以通过设置 `trackBgDisabled` 属性来修改。

### 如何修改禁用状态下 Slider 的背景颜色？ 禁用状态下 Slider 的背景颜色已废弃，不能进行修改。

### Spin 加载中

#### Less 变量 `@spin-dot-size-sm` 用于控制 Spin 小号点的大小，对应的 Component Token 是 `dotSizeSM`。

#### Less 变量 `@spin-dot-size` 用于控制 Spin 默认点的大小，对应的 Component Token 是 `dotSize`。

#### Less 变量 `@spin-dot-size-lg` 用于控制 Spin 大号点的大小，对应的 Component Token 是 `dotSizeLG`。

### 统计数值的标题字体大小是多少？

统计数值的标题字体大小是 `@statistic-title-font-size`。

### 统计数值的内容字体大小是多少？

统计数值的内容字体大小是 `@statistic-content-font-size`。

### 统计数值的字体是哪个全局 Token？

统计数值的字体是 `@statistic-font-family` 全局 Token。

### 关于步骤条的颜色设置

问：在 Ant Design 的步骤条组件中，如何设置步骤条末尾的颜色？

答：可以通过设置 Less 变量 `@process-tail-color` 或者 Component Token `colorSplit` 来改变步骤条末尾的颜色。

### 关于步骤条图标的大小和位置

问：在 Ant Design 的步骤条组件中，如何控制步骤条图标的大小和位置？

答：可以使用以下 Less 变量和 Component Token 来控制步骤条图标的大小和位置：

- `@steps-icon-size` 或者 `iconSize`：设置步骤条图标的大小
- `@steps-icon-custom-size` 或者 `customIconSize`：设置自定义图标的大小
- `@steps-icon-custom-top` 或者 `customIconTop`：设置自定义图标的垂直位置
- `@steps-icon-custom-font-size` 或者 `customIconFontSize`：设置自定义图标的字体大小
- `@steps-icon-top` 或者 `iconTop`：设置图标的垂直位置
- `@steps-icon-font-size` 或者 `iconFontSize`：设置图标的字体大小
- `@steps-icon-margin`：该变量已废弃，不再建议使用

### 关于步骤条描述文本的样式设置

问：在 Ant Design 的步骤条组件中，如何设置步骤条描述文本的样式？

答：可以使用以下 Less 变量和 Component Token 来控制步骤条描述文本的样式：

- `@steps-title-line-height` 或者 `titleLineHeight`：设置描述文本的行高
- `@steps-description-max-width` 或者 `descriptionMaxWidth`：设置描述文本的最大宽度

### Switch 开关的 Less 变量

| Less 变量 | Component Token | 备注 |
| --- | --- | --- |
| `@switch-height` | `trackHeight` | - |
| `@switch-sm-height` | `trackHeightSM` | - |
| `@switch-min-width` | `trackMinWidth` | - |
| `@switch-sm-min-width` | `trackMinWidthSM` | - |
| `@switch-disabled-opacity` | `opacityLoading` | 全局 Token |
| `@switch-color` | `colorPrimary` | 全局 Token |
| `@switch-bg` | `handleBg` | - |
| `@switch-shadow-color` | `handleShadow` | 控制把手阴影，不仅是颜色 |
| `@switch-padding` | `trackPadding` | - |
| `@switch-inner-margin-min` | `innerMinMargin` | - |
| `@switch-inner-margin-max` | `innerMaxMargin` | - |
| `@switch-sm-inner-margin-min` | `innerMinMarginSM` | - |
| `@switch-sm-inner-margin-max` | `innerMaxMarginSM` | - |

这是 Switch 开关组件中使用的 Less 变量，用于控制组件的样式。其中 `@switch-height` 变量对应的 Component Token 是 `trackHeight`，`@switch-color` 变量对应的 Component Token 是 `colorPrimary`。一些变量有特定的用途，比如 `@switch-disabled-opacity` 是一个全局 Token，用于控制禁用状态下开关的透明度。而 `@switch-shadow-color` 控制把手的阴影，不仅限于颜色。请根据需要使用这些变量来定制 Switch 开关组件的样式。

### Switch 开关的 Component Token

| Component Token    | 含义                       |
| ------------------ | -------------------------- |
| `trackHeight`      | 开关的高度                 |
| `trackHeightSM`    | 小尺寸开关的高度           |
| `trackMinWidth`    | 开关的最小宽度             |
| `trackMinWidthSM`  | 小尺寸开关的最小宽度       |
| `opacityLoading`   | 禁用状态下开关的透明度     |
| `colorPrimary`     | 开关的颜色                 |
| `handleBg`         | 把手的背景色               |
| `handleShadow`     | 把手的阴影                 |
| `trackPadding`     | 开关的内边距               |
| `innerMinMargin`   | 内部元素的最小外边距       |
| `innerMaxMargin`   | 内部元素的最大外边距       |
| `innerMinMarginSM` | 小尺寸内部元素的最小外边距 |
| `innerMaxMarginSM` | 小尺寸内部元素的最大外边距 |

这些 Component Token 是 Switch 开关组件中用于定义样式的标识符。比如 `trackHeight` 表示开关的高度，`colorPrimary` 表示开关的颜色。您可以根据需要使用这些 Token 来定制 Switch 开关组件的样式。

### Switch 开关的备注信息

- `@switch-height`：开关的高度
- `@switch-sm-height`：小尺寸开关的高度
- `@switch-min-width`：开关的最小宽度
- `@switch-sm-min-width`：小尺寸开关的最小宽度
- `@switch-disabled-opacity`：禁用状态下开关的透明度（全局 Token）
- `@switch-color`：开关的颜色（全局 Token）
- `@switch-bg`：把手的背景色
- `@switch-shadow-color`：把手的阴影，不仅限于颜色
- `@switch-padding`：开关的内边距
- `@switch-inner-margin-min`：内部元素的最小外边距
- `@switch-inner-margin-max`：内部元素的最大外边距
- `@switch-sm-inner-margin-min`：小尺寸内部元素的最小外边距
- `@switch-sm-inner-margin-max`：小尺寸内部元素的最大外边距

这些备注信息提供了 Switch 开关组件中各个 Less 变量的说明。您可以根据这些信息来了解和使用这些变量。

### Less 变量和 Component Token 的对应关系是什么？

Less 变量和 Component Token 之间有如下对应关系：

- `@table-bg` 对应 `colorBgContainer`
- `@table-header-bg` 对应 `headerBg`
- `@table-header-color` 对应 `headerColor`
- `@table-header-sort-bg` 对应 `headerSortActiveBg`
- `@table-body-sort-bg` 对应 `bodySortActiveBg`
- `@table-row-hover-bg` 对应 `rowHoverBg`
- `@table-selected-row-color` 对应 `colorText`
- `@table-selected-row-bg` 对应 `rowSelectedBg`
- `@table-selected-row-hover-bg` 对应 `rowSelectedHoverBg`
- `@table-expanded-row-bg` 对应 `rowExpandedBg`
- `@table-padding-vertical` 对应 `cellPaddingBlock`
- `@table-padding-horizontal` 对应 `cellPaddingInline`
- `@table-padding-vertical-md` 对应 `cellPaddingBlockMD`
- `@table-padding-horizontal-md` 对应 `cellPaddingInlineMD`
- `@table-padding-vertical-sm` 对应 `cellPaddingBlockSM`
- `@table-padding-horizontal-sm` 对应 `cellPaddingInlineSM`
- `@table-border-color` 对应 `borderColor`
- `@table-border-radius-base` 对应 `headerBorderRadius`
- `@table-footer-bg` 对应 `footerBg`
- `@table-footer-color` 对应 `footerColor`
- `@table-font-size` 对应 `cellFontSize`
- `@table-font-size-md` 对应 `cellFontSizeMD`
- `@table-font-size-sm` 对应 `cellFontSizeSM`
- `@table-header-cell-split-color` 对应 `headerSplitColor`
- `@table-header-sort-active-bg` 对应 `headerSortHoverBg`
- `@table-fixed-header-sort-active-bg` 对应 `fixedHeaderSortActiveBg`
- `@table-header-filter-active-bg` 对应 `headerFilterHoverBg`
- `@table-filter-dropdown-bg` 对应 `filterDropdownBg`
- `@table-expand-icon-bg` 对应 `expandIconBg`
- `@table-selection-column-width` 对应 `selectionColumnWidth`
- `@table-sticky-scroll-bar-bg` 对应 `stickyScrollBarBg`
- `@table-sticky-scroll-bar-radius` 对应 `stickyScrollBarBorderRadius`

这些对应关系可以帮助你在样式中使用 Component Token 来实现对应的样式效果。

### Less 变量中有哪些全局 Token？

Less 变量中的全局 Token 主要有：

- `@table-bg`：对应 `colorBgContainer`，用于设置表格的背景颜色。
- `@table-selected-row-color`：对应 `colorText`，用于设置选中行的文本颜色。

这些全局 Token 可以在整个应用中共享，方便进行统一的样式管理。

### 有哪些已废弃的 Less 变量？

以下是已废弃的 Less 变量：

- `@table-body-selected-sort-bg`：已废弃，同 `rowSelectedBg`
- `@table-header-bg-sm`：已废弃，同 `headerBg`
- `@table-filter-btns-bg`：已废弃，同 `filterDropdownBg`

这些已废弃的变量不再建议使用，应该使用其替代的变量来实现相同的样式效果。

### Less 变量 `@tabs-card-head-background` 对应的 Component Token 是什么？

该 Less 变量 `@tabs-card-head-background` 对应的 Component Token 是 `cardBg`。

### Component Token `inkBarColor` 对应的 Less 变量是什么？

该 Component Token `inkBarColor` 对应的 Less 变量是 `@tabs-ink-bar-color`。

### Component Token `titleFontSizeSM` 对应的 Less 变量是什么？

该 Component Token `titleFontSizeSM` 对应的 Less 变量是 `@tabs-title-font-size-sm`。

### Tag 标签的边框半径是多少？

Tag 标签的边框半径使用了 `@tag-border-radius` 这个 less 变量，对应的 Component Token 是 `borderRadiusSM`。

### Tag 标签的背景色是什么？

Tag 标签的背景色使用了 `@tag-default-bg` 这个 less 变量，对应的 Component Token 是 `defaultBg`。

### Tag 标签的文字颜色是什么？

Tag 标签的文字颜色使用了 `@tag-default-color` 这个 less 变量，对应的 Component Token 是 `defaultColor`。

### Timeline 时间轴

### Timeline 时间轴的宽度由哪个 Less 变量控制？对应的 Component Token 是什么？

Timeline 时间轴的宽度由 `@timeline-width` 这个 Less 变量控制。对应的 Component Token 是 `tailWidth`。

### Timeline 时间轴的颜色由哪个 Less 变量控制？对应的 Component Token 是什么？

Timeline 时间轴的颜色由 `@timeline-color` 这个 Less 变量控制。对应的 Component Token 是 `tailColor`。

### Timeline 时间轴的圆点边框宽度由哪个 Less 变量控制？对应的 Component Token 是什么？

Timeline 时间轴的圆点边框宽度由 `@timeline-dot-border-width` 这个 Less 变量控制。对应的 Component Token 是 `dotBorderWidth`。

### Timeline 时间轴的圆点背景颜色由哪个 Less 变量控制？对应的 Component Token 是什么？

Timeline 时间轴的圆点背景颜色由 `@timeline-dot-bg` 这个 Less 变量控制。对应的 Component Token 是 `dotBg`。

### Timeline 时间轴的项底部间距由哪个 Less 变量控制？对应的 Component Token 是什么？

Timeline 时间轴的项底部间距由 `@timeline-item-padding-bottom` 这个 Less 变量控制。对应的 Component Token 是 `itemPaddingBottom`。

以上是 Timeline 时间轴的相关变量和对应的组件令牌。如果你需要调整 Timeline 时间轴的样式，可以修改对应的 Less 变量或者使用对应的组件令牌。

### Tooltip 文字提示

#### `@tooltip-max-width`

- 类型：`String`
- 默认值：`-`
- 备注：可由 `className` 或 `style` 直接修改

#### `@tooltip-color`

- 类型：`String`
- 默认值：`colorTextLightSolid`
- 备注：全局 Token

#### `@tooltip-bg`

- 类型：`String`
- 默认值：`colorBgSpotlight`
- 备注：全局 token

#### `@tooltip-arrow-width`

- 类型：`String`
- 默认值：`sizePopupArrow`
- 备注：全局 Token

#### `@tooltip-distance`

- 类型：`String`
- 默认值：`marginXXS`
- 备注：全局 Token

#### `@tooltip-arrow-color`

- 类型：`String`
- 默认值：同 `@tooltip-bg`
- 备注：已废弃

#### `@tooltip-border-radius`

- 类型：`String`
- 默认值：`borderRadius`
- 备注：全局 Token

### Transfer 穿梭框 Less 变量

| Less 变量                          |         组件 Token         |       备注 |
| ---------------------------------- | :------------------------: | ---------: |
| `@transfer-header-height`          |       `headerHeight`       |          - |
| `@transfer-item-height`            |        `itemHeight`        |          - |
| `@transfer-disabled-bg`            | `colorBgContainerDisabled` | 全局 Token |
| `@transfer-list-height`            |        `listHeight`        |          - |
| `@transfer-item-hover-bg`          |    `controlItemBgHover`    | 全局 Token |
| `@transfer-item-selected-hover-bg` | `controlItemBgActiveHover` | 全局 Token |
| `@transfer-item-padding-vertical`  |     `itemPaddingBlock`     |          - |
| `@transfer-list-search-icon-top`   |             -              |     已废弃 |

这些是 Transfer 穿梭框组件中定义的样式 Less 变量。你可以根据不同的需求来调整这些变量，来自定义 Transfer 穿梭框的样式。

### Transfer 穿梭框组件 Token

| 组件 Token | 含义 |
| --- | :-: | --- |
| `headerHeight` | 表示 Transfer 穿梭框的头部高度 |
| `itemHeight` | 表示 Transfer 穿梭框中每个项的高度 |
| `colorBgContainerDisabled` | 表示 Transfer 穿梭框禁用状态下的背景颜色 |
| `listHeight` | 表示 Transfer 穿梭框列表的高度 |
| `controlItemBgHover` | 表示 Transfer 穿梭框中项的鼠标悬停背景颜色 |
| `controlItemBgActiveHover` | 表示 Transfer 穿梭框中项在选中且鼠标悬停状态下的背景颜色 |
| `itemPaddingBlock` | 表示 Transfer 穿梭框中每个项的垂直内边距 |
| - | `@transfer-list-search-icon-top` | 表示 Transfer 穿梭框中废弃的搜索图标的顶部距离 |

这些是 Transfer 穿梭框组件中定义的组件 Token。组件 Token 可以用来在应用中统一管理样式属性，方便样式的重用和管理。

### Transfer 穿梭框 Less 变量说明

- `@transfer-header-height`：表示 Transfer 穿梭框的头部高度。你可以通过调整这个变量的值来改变头部高度的大小。
- `@transfer-item-height`：表示 Transfer 穿梭框中每个项的高度。你可以通过调整这个变量的值来改变每个项的高度。
- `@transfer-disabled-bg`：表示 Transfer 穿梭框禁用状态下的背景颜色。这个变量是一个全局 Token，可以在应用中统一修改禁用状态下的背景颜色。
- `@transfer-list-height`：表示 Transfer 穿梭框列表的高度。你可以通过调整这个变量的值来改变列表的高度。
- `@transfer-item-hover-bg`：表示 Transfer 穿梭框中项的鼠标悬停背景颜色。这个变量是一个全局 Token，可以在应用中统一修改项的鼠标悬停背景颜色。
- `@transfer-item-selected-hover-bg`：表示 Transfer 穿梭框中项在选中且鼠标悬停状态下的背景颜色。这个变量是一个全局 Token，可以在应用中统一修改项的选中且鼠标悬停状态下的背景颜色。
- `@transfer-item-padding-vertical`：表示 Transfer 穿梭框中每个项的垂直内边距。你可以通过调整这个变量的值来改变每个项的垂直内边距。
- `@transfer-list-search-icon-top`：表示 Transfer 穿梭框中废弃的搜索图标的顶部距离。注意，这个变量已经废弃，不推荐使用。

以上是 Transfer 穿梭框组件中定义的 Less 变量及其说明。你可以根据需要来调整变量的值，从而自定义 Transfer 穿梭框的样式。

### Tree 树形控件

#### Less 变量

- `@tree-bg`

  - Component Token: `colorBgContainer`
  - 备注: 全局 Token

- `@tree-title-height`

  - Component Token: `titleHeight`
  - 备注: -

- `@tree-child-padding`

  - 备注: 已废弃

- `@tree-directory-selected-color`

  - Component Token: `directoryNodeSelectedColor`
  - 备注: -

- `@tree-directory-selected-bg`

  - Component Token: `directoryNodeSelectedBg`
  - 备注: -

- `@tree-node-hover-bg`

  - Component Token: `nodeHoverBg`
  - 备注: -

- `@tree-node-selected-bg`
  - Component Token: `nodeSelectedBg`
  - 备注: -

请问 Tree 树形控件中的 Less 变量有哪些？

### 标题的字体粗细如何设置？

标题的字体粗细可以通过 `@typography-title-font-weight` 这个 less 变量来设置。在组件中对应的 Component Token 是 `fontWeightStrong`。这是一个全局 Token。

### 标题的上边距和下边距如何设置？

标题的上边距和下边距可以通过两个 less 变量来设置。上边距通过 `@typography-title-margin-top` 来设置，下边距通过 `@typography-title-margin-bottom` 来设置。在组件中对应的 Component Token 分别是 `titleMarginTop` 和 `titleMarginBottom`。

请注意，目前没有提及具体的数值，你可以根据项目的需求自行设置这些数值。
