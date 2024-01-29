### Umi 提供了哪些 lint 能力？

Umi 提供了开箱即用的 lint 能力，包含以下特性：

1. 推荐配置：提供 ESLint 及 Stylelint 推荐配置，可以直接继承使用。
2. 统一的 CLI：提供 `umi lint` CLI，集成式调用 ESLint 和 Stylelint。
3. 规则稳定：始终确保规则的稳定性，不会出现上游配置更新导致存量项目 lint 失败的情况。

### ESLint 配置有哪些特点？

ESLint 配置具有以下特点：

1. 仅与编码质量相关：从数百条规则中筛选出数十条与编码质量相关的规则进行白名单开启，回归 Lint 本质，且不会与 Prettier 的规则冲突。
2. 性能优先：部分 TypeScript 的规则实用性低但项目全量编译的成本很高，因此禁用这些规则以提升性能。
3. 内置常用插件：包含了 react、react-hooks、@typescript/eslint、jest 等插件，满足日常需求。

### Stylelint 配置支持什么样的样式表语法？

Stylelint 配置支持 CSS-in-JS，可以检测出 JavaScript 文件中的样式表语法错误。这意味着你可以在 JavaScript 文件中使用样式表，并且 Stylelint 会帮助你检测语法错误。这个功能非常吸引人！

### 如何在 `.eslintrc.js` 中启用 Umi 提供的配置？

在 `.eslintrc.js` 文件中，你可以使用 `extends` 属性来继承 Umi 提供的配置。下面是一个示例：

```js
module.exports = {
  extends: require.resolve("umi/eslint"),
};
```

### 如何在 `.eslintrc.js` 中启用 Umi Max 提供的配置？

在 `.eslintrc.js` 文件中，你可以使用 `extends` 属性来继承 Umi Max 提供的配置。下面是一个示例：

```js
module.exports = {
  extends: require.resolve("@umijs/max/eslint"),
};
```

### 如何在 `.stylelintrc.js` 中启用 Umi 提供的配置？

在 `.stylelintrc.js` 文件中，你可以使用 `extends` 属性来继承 Umi 提供的配置。下面是一个示例：

```js
module.exports = {
  extends: require.resolve("umi/stylelint"),
};
```

### 如何在 `.stylelintrc.js` 中启用 Umi Max 提供的配置？

在 `.stylelintrc.js` 文件中，你可以使用 `extends` 属性来继承 Umi Max 提供的配置。下面是一个示例：

```js
module.exports = {
  extends: require.resolve("@umijs/max/stylelint"),
};
```

推荐使用 `umi lint` 命令来执行 lint，以获得更便捷的体验。

### `umi lint` 命令的用法是怎样的？

`umi lint` 命令用于代码检查和修复。它的用法如下：

```bash
$ umi lint [glob] [--fix] [--eslint-only] [--stylelint-only] [--cssinjs]
```

其中，参数说明如下：

- `[glob]`：可选，指定要 lint 的文件，默认为 `{src,test}/**/*.{js,jsx,ts,tsx,css,less}`
- `--quiet`：可选，禁用 `warn` 规则的报告，仅输出 `error`
- `--fix`：可选，自动修复 lint 错误
- `--eslint-only`：可选，仅执行 ESLint
- `--stylelint-only`：可选，仅执行 Stylelint
- `--cssinjs`：可选，为 Stylelint 启用 CSS-in-JS 支持

通常情况下，直接执行 `umi lint` 就可以满足大部分需求。

### `umi lint` 命令的默认文件匹配规则是什么？

`umi lint` 命令的默认文件匹配规则是 `{src,test}/**/*.{js,jsx,ts,tsx,css,less}`。也就是说，它会检查项目中所有 `.js`、`.jsx`、`.ts`、`.tsx`、`.css`、`.less` 后缀的文件。

### 如何禁用 `umi lint` 命令中的 `warn` 规则报告？

如果你只想输出 `error`，可以在执行 `umi lint` 命令时添加 `--quiet` 参数。这样可以禁用 `warn` 规则的报告。

### `umi lint` 命令是否支持自动修复 lint 错误？

是的，你可以通过在执行 `umi lint` 命令时添加 `--fix` 参数来自动修复 lint 错误。

### 如何使用 `umi lint` 命令只执行 ESLint 或 Stylelint？

如果你只想执行 ESLint，可以使用 `--eslint-only` 参数；如果只想执行 Stylelint，可以使用 `--stylelint-only` 参数。这样可以避免同时执行两种 lint 工具。

### `umi lint` 命令是否支持 CSS-in-JS？

是的，你可以通过在执行 `umi lint` 命令时添加 `--cssinjs` 参数来为 Stylelint 启用 CSS-in-JS 支持。这样可以确保正确地检查和处理 CSS-in-JS 的样式代码。

### 如何与 Git 工作流结合使用 lint-staged 和 Husky？

我们推荐使用 [lint-staged](https://github.com/okonet/lint-staged#readme) 和 [Husky](https://typicode.github.io/husky/) 将 `umi lint` 与 Git 工作流结合使用。这样，在每次提交代码时，会自动运行 `umi lint` 来对本次变更的代码进行 lint 操作。

### 什么是 lint-staged 和 Husky？

lint-staged 是一个用于在 git 暂存区中运行 linters 的工具。它通过配置指定要运行的 linters 和对应的文件，然后在 git commit 的时候自动运行这些 linters。

Husky 是一个基于 Git Hooks 的工具，它可以在特定的 Git 事件发生时触发相应的脚本。常见的事件有 pre-commit（提交之前）和 pre-push（推送之前）。

### 为什么要与 Git 工作流结合使用 lint-staged 和 Husky？

通过将 `umi lint` 与 Git 工作流结合使用，可以实现在每次提交代码时自动 lint 本次变更的代码。这样可以避免将不符合代码规范的代码提交到版本库，保持代码质量的稳定。

同时，与 Git 工作流结合使用 lint-staged 和 Husky 还可以提高开发效率，因为 lint 操作可以自动化执行，减少手动操作的时间和精力。

另外，通过与 Git 工作流结合使用 lint-staged 和 Husky，还可以减少代码合并冲突时的困扰。通过在提交代码前进行 lint 操作，可以及早发现并修复代码中的问题，避免冲突的发生。

总之，与 Git 工作流结合使用 lint-staged 和 Husky 是一种规范和高效的代码管理和开发方式。

Q 如何使用 lint-staged 进行代码检查？要使用 lint-staged 进行代码检查，首先需要在项目中安装 lint-staged 插件。可以使用 npm、yarn 或者 pnpm 进行安装。安装完成后，在 package.json 文件中配置 lint-staged，将需要进行检查的文件类型和对应的检查命令配置在 lint-staged 字段中。例如，配置文件类型为 \*.{js,jsx,ts,tsx,css,less}，检查命令为 "umi lint"。之后，在执行 git add 命令后，再执行 npx lint-staged 命令，就能实现仅检查本次变更的文件。

Q 如何使用 lint-staged 进行样式文件的代码检查？要使用 lint-staged 进行样式文件的代码检查，首先需要在项目中安装 lint-staged 插件。可以使用 npm、yarn 或者 pnpm 进行安装。安装完成后，在 package.json 文件中配置 lint-staged，将需要进行检查的样式文件类型和对应的检查命令配置在 lint-staged 字段中。例如，配置样式文件类型为 _.css 和 _.less，检查命令为 "umi lint"。之后，在执行 git add 命令后，再执行 npx lint-staged 命令，就能实现仅检查本次变更的样式文件。

Q 如何只对特定文件进行 lint-staged 的代码检查？要只对特定文件进行 lint-staged 的代码检查，首先需要在项目中安装 lint-staged 插件。可以使用 npm、yarn 或者 pnpm 进行安装。安装完成后，在 package.json 文件中配置 lint-staged，将需要进行检查的文件类型和对应的检查命令配置在 lint-staged 字段中。例如，配置只对 sample.js 文件进行检查，检查命令为 "umi lint"。之后，在执行 git add sample.js 命令后，再执行 npx lint-staged 命令，就能实现仅检查 sample.js 文件的代码变更。

### Husky 是什么？它的作用是什么？

Husky 是一个工具，用于绑定 Git Hooks，并在指定时机执行我们想要的命令。它可以帮助我们在代码提交前自动运行一些脚本或命令，以确保代码质量。

### 如何安装 Husky？

可以通过以下步骤安装 Husky：

1. 查看 Husky 的文档：https://typicode.github.io/husky/#/?id=automatic-recommended
2. 根据文档中的指导安装 Husky

### 使用 Husky 时需要进行哪些配置？

初始化完成后，需要手动修改 `.husky/pre-commit` 文件的内容，来指定在提交代码前执行的命令。根据具体需求，可以通过编辑该文件添加需要执行的命令。

### Husky 的优势是什么？

Husky 的优势主要体现在以下几个方面：

1. 方便易用：Husky 的安装和配置过程相对简单，只需要进行一些简单的设置即可。
2. 自定义性强：可以根据具体需求，自行定义所需要执行的命令，从而满足不同的开发需求。
3. 提高代码质量：通过在代码提交前执行命令，可以确保代码的质量和一致性，减少错误或低质量代码的产生。

### Husky 的适用场景有哪些？

Husky 可以应用于各种场景，例如：

1. 格式化代码：在代码提交前，自动运行代码格式化工具，保证代码风格的统一。
2. 运行静态代码检查：在代码提交前，自动运行静态代码检查工具，发现潜在的问题或错误。
3. 运行测试脚本：在代码提交前，自动运行测试脚本，确保代码的功能正确性。
4. 构建代码：在代码提交前，自动运行构建脚本，生成最终的可部署代码。

通过使用 Husky，可以根据具体需求，方便地进行自动化的代码检查、代码格式化、测试等操作，提高代码质量和开发效率。

1. ### 为什么要使用 `husky` 和 `lint-staged`？ 使用 `husky` 和 `lint-staged` 可以帮助我们在每次提交代码时自动运行代码检查。这样能够确保代码的质量，并提高开发效率。

2. ### `husky` 和 `lint-staged` 的主要作用是什么？ `husky` 是一个 Git 钩子工具，它能够在代码提交、代码推送等操作之前或之后执行一些自定义脚本。`lint-staged` 是一个工具，用于在 Git 提交之前运行指定的脚本。通过结合使用这两个工具，我们可以在每次提交代码前自动运行代码检查。

3. ### 如何配置和使用 `husky` 和 `lint-staged`？ 首先，需要在项目根目录下执行命令安装 `husky` 和 `lint-staged`：

```
npm install husky lint-staged --save-dev
```

然后，在 `package.json` 文件中添加以下配置：

```
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "npx lint-staged"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

配置完成后，每次执行 `git commit` 命令时，`lint-staged` 会自动对本次变更的代码进行检查。

以上是关于 `husky` 和 `lint-staged` 的配置和使用方法。通过这样的配置，我们能够自动检查代码质量，提高开发效率。

### Prettier 是什么？

Prettier 是一个代码格式化工具，它可以帮助团队保持统一的代码风格。通过配置 Prettier，你可以自动对代码进行格式化，并确保团队中的每个人都符合相同的代码风格。

### 为什么建议与 `umi lint` 一起使用 Prettier？

虽然 `umi lint` 已经是一个强大的代码检查工具，但它主要关注代码质量和规范性，而不是代码的格式。因此，为了确保代码的一致性和可读性，我们建议与 `umi lint` 一起使用 Prettier。

### 如何在 lint-staged 中配置 Prettier？

你可以参考 Prettier 的文档，将 Prettier 配置到 lint-staged 中。这样，在代码提交之前，lint-staged 将自动应用 Prettier 的代码格式化规则，确保代码符合团队的代码风格标准。

Prettier 的配置过程可以参考这个链接：[Prettier 文档](https://prettier.io/docs/en/install.html#git-hooks)。按照文档中的指引，你可以轻松地将 Prettier 集成到你的项目中。

希望这些信息对你有所帮助！如果还有其他问题，请随时提问。

### Umi 内置的 ESLint 规则列表

Umi 内置了一系列的 ESLint 规则，它们可以帮助开发者在项目中保持一致的代码风格和质量。以下是 Umi 内置的推荐规则列表的链接：

- [UMI RULES RECOMMENDED](https://github.com/umijs/umi/blob/master/packages/lint/src/config/eslint/rules/recommended.ts)

你可以通过查看上述链接来了解 Umi 内置的 ESLint 规则，并在你的项目中使用这些规则来提高代码的质量和可维护性。

### Umi 内置的 Stylelint 配置

Umi 内置了一套 Stylelint 的配置，它可以帮助开发者在项目中保持一致的样式规范。以下是 Umi 内置的 Stylelint 配置的链接：

- [UMI STYLELINT CONFIG](https://github.com/umijs/umi/blob/master/packages/lint/src/config/stylelint/index.ts)

你可以通过查看上述链接来了解 Umi 内置的 Stylelint 配置，并在你的项目中使用这些配置来统一样式规范，提高代码的可读性和可维护性。
