### 什么是命名路由？

命名路由是指在定义路由时可以为每个路由提供一个唯一的名称，除了路由的路径外，可以通过该名称来进行路由跳转。

### 如何为路由提供名称？

可以在定义路由时，通过name属性为路由提供一个名称。例如：

```ts
export default {
  routes: [
    {
      path: "/user/:username",
      name: "user",
      component: "index",
    },
  ],
};
```

在上述例子中，为路径为`/user/:username`的路由提供了一个名称为`user`。

### 如何使用命名路由进行导航？

要使用命名路由进行导航，可以通过`router-link`组件的`to`属性传递一个对象来链接到一个命名的路由。例如：

```html
<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>
```

在上述例子中，通过`router-link`组件的`to`属性，使用`name`属性为`user`的路由，并传递`params`参数`{ username: 'erina' }`，来生成一个包含链接文本`User`的可点击的路由链接。

### 如何使用命名路由进行编程式导航？

使用命名路由进行编程式导航与使用命令式调用`router.push`方法一致。例如：

```ts
router.push({ name: "user", params: { username: "erina" } });
```

在上述例子中，通过调用`router.push`方法，传递一个包含`name`属性为`user`的路由和`params`参数`{ username: 'erina' }`，实现了导航到路径`/user/erina`的效果。
