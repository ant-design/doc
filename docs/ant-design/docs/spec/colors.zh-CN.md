1. 什么是 Ant Design 的全局样式？ Ant Design 的全局样式包括系统级色彩体系和产品级色彩体系。系统级色彩体系定义了基础色板、中性色板和数据可视化色板，而产品级色彩体系是在具体设计过程中，基于系统色彩进一步定义符合产品调性和功能需求的颜色。

2. Ant Design 的系统级色彩体系有哪些特点？ Ant Design 的系统级色彩体系主要包括基础色板、中性色板和数据可视化色板。这些色板是为了保持整体风格的一致性，提供了一套统一的颜色规范。基础色板用于定义品牌色和核心色，中性色板用于设置文本、边框等中性元素的颜色，而数据可视化色板则用于展示数据图表的颜色。

3. Ant Design 的产品级色彩体系如何定义？ Ant Design 的产品级色彩体系是在具体设计过程中，基于系统级色彩体系进一步定义的。这个体系主要根据具体产品的调性和功能需求来定义颜色。通过产品级色彩体系，可以使得不同的 Ant Design 产品在视觉风格上有所区别，同时又保持整体的品牌一致性。

### Ant Design 系统级色彩体系是如何形成的？

Ant Design 系统级色彩体系是基于「自然」的设计价值观和蚂蚁的技术基因而形成的。设计师通过对自然场景的抽象捕捉，创造了特有的 12 色。这些颜色受到自然光下的变化规律的影响，并借鉴了美术中素描的思路进行了衍生。在定义中性色板时，平衡了可读性、美感和可用性。

### Ant Design 的系统级色彩体系有多少种颜色？

Ant Design 的系统级色彩体系共有 12 种颜色。这些颜色是通过对自然场景的抽象捕捉以及美术中素描的思路进行衍生得出的。每种颜色都经过仔细观察，带有一定的自然光下变化规律的特点。

### Ant Design 的中性色板如何定义？

Ant Design 的中性色板是在考虑可读性、美感和可用性的基础上进行定义的。中性色板的目的是平衡不同元素与背景色之间的对比度，以确保用户界面的可读性和美感。通过精心选择中性色，可以使界面更加稳定和统一，同时提供良好的用户体验。

### Ant Design 的基础色板有多少个颜色？

Ant Design 的基础色板共计 120 个颜色，包含 12 个主色以及衍生色。这些颜色可以满足中后台设计中对于颜色的需求。

### Ant Design 的色板具备什么能力？

Ant Design 的色板具备进一步拓展的能力。通过色彩生成工具，当有进一步色彩设计需求时，设计者只需按照一定规则定义主色，便可以自动获得一系列完整的衍生色。

### Ant Design 色板生成算法演进之路在哪里可以查看？

Ant Design 色板的演进历史可以参看社区文章：[Ant Design 色板生成算法演进之路](https://zhuanlan.zhihu.com/p/32422584)。这篇文章详细介绍了 Ant Design 三代色板的发展过程。

### Ant Design 中的中性色板有哪些颜色？

Ant Design 的中性色板一共包含了从白到黑的 13 个颜色。请问具体是哪些颜色呢？

### 中性色在蚂蚁中后台的网页设计中有何作用？

中性色在蚂蚁中后台的网页设计中被大量使用到，它能够合理地选择中性色以使页面信息具备良好的主次关系，从而提升阅读体验。请问中性色在网页设计中扮演了什么样的角色？

### 如何使用 Ant Design 的中性色板？

Ant Design 的中性色板提供了从白到黑的 13 个颜色，开发者可以根据需求选择合适的中性色应用于项目中。请问在 Ant Design 中如何使用中性色板呢？

### 如何在代码中使用色板？

在代码中使用色板非常简单。首先，你需要安装 `@ant-design/colors` 包：

```
npm install @ant-design/colors
```

然后，在你的代码中按如下方式引入色板颜色：

```js
import { blue } from '@ant-design/colors';

console.log(blue); // ['#E6F4FF', '#BAE0FF', '#91CAFF', '#69B1FF', '#4096FF', '#1677FF', '#0958D9', '#003EB3', '#002C8C', '#001D66']
console.log(blue.primary); // '#1677FF'
```

这里，我们使用了 `blue` 这个色板。你可以打印 `blue` 变量以查看所有颜色值的数组。如果你只想获取主要颜色值，可以使用 `blue.primary`。

更多关于色板的使用方式，请查看 [`@ant-design/colors`](https://www.npmjs.com/package/@ant-design/colors) 的文档。

### 如何在代码中使用其它色板？

如果你想在代码中使用其它色板，只需要按照相同的方式引入对应的色板即可。比如，如果你想使用绿色色板，则可以这样引入：

```js
import { green } from '@ant-design/colors';

console.log(green); // ['#F6FFED', '#D9F7BE', '#B7EB8F', '#95DE64', '#73D13D', '#52C41A', '#389E0D', '#237804', '#135200', '#092B00']
console.log(green.primary); // '#52C41A'
```

在这个例子中，我们引入了 `green` 色板。你可以通过打印 `green` 变量来查看所有颜色值的数组，或者通过 `green.primary` 获取主要颜色值。

你可以按照这个方法在代码中使用任何你需要的色板。

### 品牌色的应用

品牌色是体现产品特性和传播理念最直观的视觉元素之一。在色彩选取时，需要先明确品牌色在界面中的使用场景及范围。在基础色板中选择主色，我们建议选择色板从浅至深的第六个颜色作为主色。 Ant Design 的品牌色取自基础色板的蓝色，Hex 值为 `#1677ff`，应用场景包括：关键行动点，操作状态、重要信息高亮，图形化等场景。

### 品牌色的选取建议

在色彩选取过程中，我们建议从基础色板中选择适合的主色。为了保持一致性，可以选择色板从浅至深的第六个颜色作为主色。Ant Design 的品牌色取自基础色板的蓝色，Hex 值为 `#1677ff`。通过选取品牌色作为界面中的主要色彩，可以在关键行动点、操作状态、重要信息高亮、图形化等场景中使用，以提升产品的视觉吸引力和用户体验。

### 品牌色的具体应用场景

Ant Design 的品牌色是基于蓝色的色彩，Hex 值为 `#1677ff`。在界面设计中，品牌色可以应用于多个场景，如关键行动点、操作状态、重要信息高亮、图形化等。通过使用品牌色来突出这些关键元素，可以增强用户对界面的注意力，提升交互的可视性，让用户更加易于理解和操作界面。因此，在设计过程中，合理运用品牌色是非常重要的，可以为产品注入更多的情感和个性，提高用户的使用体验。

### 功能色的作用是什么？

功能色用于表示明确的信息和状态，比如成功、出错、失败、提醒、链接等。它们在产品设计中起到引导用户、传递状态和提供视觉反馈的作用。

### 在产品体系中，为什么功能色要保持一致？

在一套产品体系下，功能色应保持一致，以确保用户对色彩的基本认知不受干扰。这样用户在不同场景下能够快速准确地理解色彩所代表的含义，提高了用户体验和认知的一致性。

### Ant Design 的功能色板有哪些？

Ant Design 提供了一套功能色板，包括成功（green）、失败（red）、警告（gold）、信息（blue）等颜色。这些颜色经过设计师精心选择，能够清晰地传达各种状态和信息。

### 如何选取功能色？

选取功能色需要遵守用户对色彩的基本认知，避免过多的自定义干扰用户的认知体验。可以参考 Ant Design 提供的功能色板来选择合适的功能色，也可以根据具体产品的需求和风格来进行选择。总之，选择的功能色应能够清晰明确地传达所要表达的信息和状态。

### Ant Design 中的中性色主要应用在哪些地方？

Ant Design 的中性色主要被广泛应用在界面的文字部分，以及背景、边框、分割线等场景中。在设计中，中性色需要考虑适应不同背景色的需求，并符合 WCAG 2.0 标准。具体的中性色色板如下图所示：

![中性色色板](图片链接)

中性色的透明度是根据设计要求使用的，通过实现透明度来获得不同的视觉效果。
