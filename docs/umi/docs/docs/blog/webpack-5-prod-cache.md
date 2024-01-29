### Umi 4 默认没有配置 webpack 5 的物理缓存，为什么？

Umi 4默认没有配置webpack 5的物理缓存，这是因为webpack的物理缓存失效时机问题，并没有通用的解决方案。因此，需要根据项目的实际情况来确定哪些依赖会导致项目的物理缓存失效。

### 如果项目物理缓存不失效会导致什么问题？

当项目的物理缓存不失效时，会导致构建产物变成旧的版本，严重影响了开发效率。因此，当不明确哪些依赖会导致物理缓存失效时，需要特别注意，以避免这个问题的发生。

### 如何解决项目物理缓存不失效的问题？

要解决项目物理缓存不失效的问题，需要清楚地知道哪些依赖会导致物理缓存失效，并根据实际情况进行相应的配置。这涉及到项目具体的架构和依赖关系，需要开发者针对自己的项目进行分析和配置，以确保构建缓存的有效性。

### 什么情况下适合开启物理缓存？

开启物理缓存适合以下情况：

1. 当项目需要多次反复构建时。

2. 当你的本地构建环境或 CI 环境能够恢复上次的物理缓存文件。

3. 当项目构建时间比较长，开启其他转译器仍无法提升性能，或者你有强烈的需求不能切换转译器。

如果以上条件都满足，那么开启物理缓存可能是一个不错的选择。

### 物理缓存有什么优点？

开启物理缓存有以下优点：

1. 可以加快项目的构建速度，特别是对于长时间构建的项目。

2. 可以减少反复构建的频率，节省时间和资源。

3. 可以避免在开启其他转译器时无法提升性能的情况下，提升项目的构建性能。

### 如何开启物理缓存？

要开启物理缓存，你需要满足以下条件：

1. 确保你的项目需要多次反复构建。

2. 确保你的本地构建环境或 CI 环境能够恢复上次的物理缓存文件。

3. 确保你的项目构建时间长且开启其他转译器无法提升性能，或者你有强烈的需求无法切换转译器。

一旦条件都满足，你可以按照相应的文档或教程开启物理缓存功能。

### UmiJS 中使用 CSS 变量模式的配置方法

要在 UmiJS 中使用 CSS 变量模式，你需要进行一些配置。以下是一个示例的配置文件 `.umirc.ts`：

```ts
import { join } from 'path';
import { defineConfig } from 'umi';
import { createHash } from 'crypto';

export default defineConfig({
  chainWebpack(config, { env }) {
    if (env === 'production') {
      config.cache({
        type: 'filesystem',
        store: 'pack',
        version: createEnvironmentHash(process.env),
        buildDependencies: {
          config: [__filename],
          tsconfig: [join(__dirname, 'tsconfig.json')],
          packagejson: [join(__dirname, 'package.json')],
          umirc: [join(__dirname, '.umirc.ts')],
        },
      });
    }
  },
});

function createEnvironmentHash(env: Record<string, any>) {
  const hash = createHash('md5');
  hash.update(JSON.stringify(env));
  const result = hash.digest('hex');
  return result;
}
```

在配置中，你需要注意以下几点：

1. 需要配置 `chainWebpack` 方法，在生产环境下启用缓存功能。

2. 使用 `config.cache()` 方法来配置缓存选项。在示例中，使用了 `type: 'filesystem'` 表示使用文件系统缓存，`store: 'pack'` 表示存储到 `.umi/.cache` 目录。

3. 使用 `createEnvironmentHash()` 方法来创建环境变量的哈希值，用于区分不同的环境。

4. 在 `buildDependencies` 对象中配置了一些可能会影响项目内容的文件路径，当这些文件内容发生变化时，缓存将失效。

请根据你的项目实际情况进行相应的配置。

### 理解 createEnvironmentHash() 方法

`createEnvironmentHash()` 方法是一个用于创建环境变量哈希值的函数。它的作用是根据传入的 `env` 对象，生成一个唯一的哈希值。在示例中，它使用了 Node.js 的 `crypto` 模块来进行哈希计算。

你可以在调用 `createEnvironmentHash()` 方法时传入自己需要的环境变量。如果你的项目在 CI 中构建每次的环境变量都不一样，你可以挑选或排除特定的环境变量，只包含那些可能会影响项目内容的变量。

例如，你可以这样调用 `createEnvironmentHash()` 方法来挑选可能会影响项目内容的环境变量：

```ts
createEnvironmentHash({
  NODE_ENV: process.env.NODE_ENV,
  // ...
});
```

请根据你的实际需求进行环境变量的选择。

### 如何配置其他可能会影响项目内容的文件路径

除了示例中列举的文件路径之外，还有其他可能会影响项目内容的配置文件路径。当这些文件内容发生变化时，缓存将失效。

你可以根据你的项目实际情况，将这些文件配置到 `buildDependencies` 对象中。例如，如果你的项目还包含 `webpack.config.js` 文件，你可以在 `buildDependencies` 对象中添加如下配置：

```ts
webpackConfig: [join(__dirname, 'webpack.config.js')],
```

请根据你的项目的配置文件，将所有可能会影响项目内容的文件路径都添加到 `buildDependencies` 对象中。

以上就是在 UmiJS 中使用 CSS 变量模式的配置方法。希望对你有帮助！如果还有其他问题，请继续提问。

### monorepo 中如何缓存其他子包的前置构建？

在 monorepo 中，如果需要先构建某个子包的依赖，可以考虑使用 [Turborepo](https://turbo.build/repo) 来实现。Turborepo 是一个专为 monorepo 构建而设计的方案。它可以自动识别子包之间的依赖关系，并缓存不需要重复构建的子包。

具体使用方法请参考 [官方文档](https://turbo.build/repo/docs) 和 [examples](https://github.com/vercel/turbo/tree/main/examples)。在 CI 构建中，如果要支持恢复上次的 Turbo 缓存，可以使用 `--cache-dir` 选项来更改缓存位置。

### 如何跳过 monorepo 中不需要构建的子包？

在 monorepo 中，当一个子包没有代码变动时，可以通过使用 Turbo 来跳过该子包的构建。Turbo 会自动识别哪些子包没有变动，并将其缓存起来，从而避免重复构建。

要实现这个功能，推荐使用 [Turborepo](https://turbo.build/repo)。你可以参考 [官方文档](https://turbo.build/repo/docs) 和 [examples](https://github.com/vercel/turbo/tree/main/examples) 来了解具体的使用方法。

### 在 monorepo 中如何处理子包的前置依赖构建问题？

在 monorepo 中，如果某个子包的构建依赖于其他子包，可以考虑使用 [Turborepo](https://turbo.build/repo) 来处理这个问题。Turborepo 是一个为 monorepo 构建设计的解决方案，它可以自动处理子包之间的依赖关系，并确保前置依赖被正确构建。

要使用 Turborepo，在构建过程中，它会自动识别哪些子包需要构建，并根据依赖关系进行构建。如果某个子包没有代码改动，Turborepo 会跳过它的构建，从而提高构建速度。

可以参考 [官方文档](https://turbo.build/repo/docs) 和 [examples](https://github.com/vercel/turbo/tree/main/examples) 来了解具体的使用方法。在 CI 构建中，如果要支持上次 Turbo 缓存的恢复，可以使用 `--cache-dir` 选项来更改缓存位置。