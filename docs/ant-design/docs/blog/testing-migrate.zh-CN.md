### 1. [@li-jia-nan](https://github.com/li-jia-nan) 是 antd 的 Collaborator 吗？

是的，[@li-jia-nan](https://github.com/li-jia-nan) 是 antd 的 Collaborator 之一。他在前几个月加入了 antd，并负责开发了 FloatButton 组件和 QRCode 组件，同时也进行了一些维护工作。

### 2. [@li-jia-nan](https://github.com/li-jia-nan) 开发了哪些 antd 组件？

[@li-jia-nan](https://github.com/li-jia-nan) 开发了 FloatButton 组件和 QRCode 组件。

### 3. [@li-jia-nan](https://github.com/li-jia-nan) 参与了什么工作？

[@li-jia-nan](https://github.com/li-jia-nan) 参与了 antd 的测试库迁移工作，并进行了一些维护工作。他开发了 FloatButton 组件和 QRCode 组件，同时也负责一些其它的维护工作。

### 在 antd@4.x 中为什么要迁移测试框架？

在 `antd@4.x` 中使用的测试框架是 `enzyme`，但由于 enzyme 缺乏维护，到了 React 18 时代已经很难支持。因此，为了跟上最新的技术发展，不得不开始进行为 antd 开启漫长的迁移之路。

### 迁移过程中遇到的问题有哪些？

在迁移过程中，我承担了大约 antd 四分之一的工作量，遇到了一些问题。具体问题如下：

1. **@testing-lib 迁移**：由于要迁移到 [@testing-lib](https://testing-library.com/docs/react-testing-library/intro)，涉及到很多细节的更改和调整，需要确保每个组件的测试都能正常运行。

2. **兼容性问题**：迁移过程中，可能会遇到一些与旧版本不兼容的情况，需要对代码进行相应的修改和适配，确保功能正常。

3. **测试覆盖率**：在迁移过程中，需要保证测试覆盖率不会降低，需要仔细检查每个组件的测试用例，确保所有的功能都得到覆盖。

4. **代码质量**：迁移过程中，也可以顺便进行代码质量的检查和改进，优化测试代码的结构和性能，提高代码的可读性和可维护性。

5. **遗留问题处理**：在迁移过程中，可能会发现一些之前未发现的问题，需要及时跟进和解决，确保迁移后的代码稳定可靠。

这些是我在迁移过程中遇到的一些问题，通过积极的调试和努力，我成功地完成了迁移工作。感谢 [@zombieJ](https://github.com/zombieJ)、[@MadCcc](https://github.com/MadCcc) 和 [@miracles1919](https://github.com/miracles1919) 提供的帮助。

希望我的经验对你有所帮助！如果你有任何问题，可以随时向我请教。

## 为什么需要迁移测试代码？

在迁移测试代码之前，我们应该明确迁移的目的。在使用 `enzyme` 进行测试时，通常会测试组件的状态是否正确，或者类上的静态属性是否赋值正确。然而，这种方式并不合理，因为更重要的是要关注组件的“功能”是否正常，而不是仅仅关注属性的正确性。对于使用者来说，源代码是一个黑盒，他们只关心组件是否按预期工作。

在这种情况下，测试用例应该基于组件的“行为”编写，而不是基于组件的“实现”编写。这也是 `testing-library` 的目标。基于这个原则，可能会发现一些多余的测试用例（因为实际代码中不会单独触发某些函数）。删除这些多余的测试用例对测试覆盖率并没有影响。

此外，还有其他原因需要考虑迁移测试代码。首先，`enzyme` 缺乏维护，并且不再支持 React 18。因此，我们需要考虑使用一个更现代、更活跃的测试库来替代。

## 为什么要放弃使用 enzyme？

我们已经提到了一些原因，下面是一些更详细的解释：

1. 缺乏维护：`enzyme` 的维护相对较少，并且最新的更新也已经有段时间了。如果我们依赖于一个没有持续维护的库，我们可能会面临潜在的安全问题和功能限制。

2. 不支持 React 18：React 是一个快速发展的库，新版本的 React 带来了很多新功能和改进。如果我们的项目计划升级到 React 18，`enzyme` 将不再适用于我们的测试代码。

3. 缺乏与 React 生态系统的集成：`enzyme` 在某些方面与 React 的生态系统不完全兼容。例如，它不支持 Hooks，这是 React 16 引入的重要功能。如果我们的组件使用了 Hooks，我们将无法使用 `enzyme` 完全测试这些组件。

考虑到以上原因，我们认为放弃使用 `enzyme` 并迁移到一个更现代、更常用的测试库将是一个更好的选择。

## 哪个测试库可以替代 enzyme？

有几个可以替代 `enzyme` 的测试库，这些库都是现代、活跃维护且与 React 生态系统集成良好的：

1. `react-testing-library`：这是一个非常流行的测试库，它提供了通过浏览器的用户角度来测试组件的功能。它的设计目标是使测试更接近实际用户的使用方式，而不是深入到组件的实现细节。

2. `@testing-library/react`：这是 `react-testing-library` 的官方实现，也是最常用的测试库之一。它提供了一组简单而强大的 API，可以方便地进行组件的功能测试。

3. `jest`：虽然 `jest` 不是一个专门针对 React 的测试库，但它是一个功能强大且广泛使用的测试框架。它与 `react-testing-library` 和其他库集成良好，提供了丰富的断言和工具，使测试编写和运行变得更简单。

根据项目需求和个人喜好，选择适合的测试库进行迁移是一个明智的选择。这些测试库都具有良好的文档和社区支持，能够满足大部分的测试需求。

### enzyme 的渲染方式有哪些？

enzyme 支持三种方式的渲染：

1. shallow: 浅渲染，是对官方的 Shallow Renderer 的封装。将组件渲染成虚拟 DOM 对象，不包含断言到子组件的部分，可以使用 jQuery 的方式访问组件的信息。

2. render: 静态渲染，将 React 组件渲染成静态的 HTML 字符串，然后解析这段字符串，并返回一个实例对象，可用于分析组件的 HTML 结构。

3. mount: 完全渲染，将组件渲染加载成一个真实的 DOM 节点，用于测试 DOM API 的交互和组件的生命周期，使用 jsdom 模拟浏览器环境。

在 `antd@4.x` 中选择使用 `mount` 进行渲染，而在 `@testing-library` 中相应的方法为 `render`。

```diff
--  import { mount } from 'enzyme';
++  import { render } from '@testing-library/react';

--  const wrapper = mount(
++  const { container } = render(
      <ConfigProvider getPopupContainer={getPopupContainer}>
        <Slider />
      </ConfigProvider>,
    );
```

### 在 enzyme 中，什么是浅渲染？

在 enzyme 中，浅渲染是一种渲染方式，它是对官方的 Shallow Renderer 的封装。浅渲染将组件渲染成虚拟 DOM 对象，并不包含断言到子组件的部分。通过浅渲染，可以使用 jQuery 的方式访问组件的信息。

### 在 enzyme 中，什么是静态渲染？

在 enzyme 中，静态渲染是一种渲染方式。它将 React 组件渲染成静态的 HTML 字符串，然后解析这段字符串，并返回一个实例对象。静态渲染的结果可以用来分析组件的 HTML 结构。

### 在 enzyme 中，什么是完全渲染？

在 enzyme 中，完全渲染是一种渲染方式。它将组件渲染加载成一个真实的 DOM 节点，用于测试 DOM API 的交互和组件的生命周期。完全渲染使用 jsdom 模拟浏览器环境，可以模拟真实的浏览器行为。

### enzyme 提供了哪个方法用于模拟事件触发和用户交互？

enzyme 提供了 `simulate(event)` 方法来模拟事件触发和用户交互。

### 在 @testing-library 中，用什么方法来模拟事件触发和用户交互？

在 @testing-library 中，可以使用 `fireEvent` 方法来模拟事件触发和用户交互。

### 如何用 `fireEvent` 方法来模拟点击事件？

通过以下代码示例可以使用 `fireEvent` 方法来模拟点击事件：

```javascript
import { fireEvent } from '@testing-library/react';

fireEvent.click(container.querySelector('.ant-handle'));
```
注意，其中的 `container` 是测试组件的容器节点，`.ant-handle` 是要模拟点击的元素的选择器。

### enzyme 的 instance() 方法是用来做什么的？

在 `enzyme` 中，`instance()` 方法用于返回测试组件的实例。

### `at()` 方法在 `enzyme` 中的作用是什么？

`at()` 方法是在 `enzyme` 中用来返回一个渲染过的对象。

### `text()` 方法和 `html()` 方法在 `enzyme` 中的区别是什么？

在 `enzyme` 中，`text()` 方法用于返回当前组件的文本内容，而 `html()` 方法用于返回当前组件的 HTML 代码形式。

## QA 1: Ant Design 5.x 中废弃的组件有哪些？

在Ant Design 5.x的大版本升级过程中，虽然废弃了一些组件，但是这些组件仍然存在于antd中，只是不再推荐使用。其中一个例子是BackTop组件。为了保证兼容性，我们需要在组件中加入warning。下面是对BackTop组件编写的单元测试代码：

```diff
    describe('BackTop', () => {
++    it('should console Error', () => {
++        const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
++        render(<BackTop />);
++        expect(errSpy).toHaveBeenCalledWith(
++          'Warning: [antd: BackTop] `BackTop` is deprecated. Please use `FloatButton.BackTop` instead.',
++        );
++      errSpy.mockRestore();
++    });
    });
```

请问还有哪些组件在Ant Design 5.x中被废弃了？

## QA 2: Ant Design 5.x 中废弃的组件是否被移除？

在Ant Design 5.x的大版本升级过程中，虽然废弃了一些组件，但是这些组件仍然存在于antd中，只是不再推荐使用。其中一个例子是BackTop组件。为了保证兼容性，我们需要在组件中加入warning。下面是对BackTop组件编写的单元测试代码：

```diff
    describe('BackTop', () => {
++    it('should console Error', () => {
++        const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
++        render(<BackTop />);
++        expect(errSpy).toHaveBeenCalledWith(
++          'Warning: [antd: BackTop] `BackTop` is deprecated. Please use `FloatButton.BackTop` instead.',
++        );
++      errSpy.mockRestore();
++    });
    });
```

请问在Ant Design 5.x中，废弃的组件是否被移除了？

## QA 3: 在Ant Design 5.x中为何需要对废弃的组件进行兼容性测试？

在Ant Design 5.x的大版本升级过程中，虽然废弃了一些组件，但是这些组件仍然存在于antd中，只是不再推荐使用。其中一个例子是BackTop组件。为了保证兼容性，我们需要在组件中加入warning。下面是对BackTop组件编写的单元测试代码：

```diff
    describe('BackTop', () => {
++    it('should console Error', () => {
++        const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
++        render(<BackTop />);
++        expect(errSpy).toHaveBeenCalledWith(
++          'Warning: [antd: BackTop] `BackTop` is deprecated. Please use `FloatButton.BackTop` instead.',
++        );
++      errSpy.mockRestore();
++    });
    });
```

为什么在Ant Design 5.x中需要对废弃的组件进行兼容性测试？