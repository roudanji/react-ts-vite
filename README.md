# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
- ![image](https://github.com/roudanji/react-ts-vite/assets/136449369/f409f4f8-151d-4964-9181-74c4825858f5)
  已完成 Tabs 导航栏功能，关闭，添加，点击跳转，关闭跳转所有逻辑。

动态路由已设置，在 MenuComponent.tsx 组件中根据用户信息的 jurisdiction 字段数组中的元素 "key" 去生成对应用户的菜单。

![image](https://github.com/roudanji/react-ts-vite/assets/136449369/e6bae264-bbee-4419-abd9-947281d5d83d)
内置富文本编辑器可通过回调函数和默认赋值来取值回显（编辑器可全屏）。

![image](https://github.com/roudanji/react-ts-vite/assets/136449369/00efb893-8f8b-4cfa-8f7a-ae1c7f68ed30)
内置 React Hooks + Context 上下文开发模式，更好的拆分组件以及维护你的当前逻辑代码，并且更好的进行文件定义（可彻底避免当前页面各个组件之前通信传值，造成后期维护可读性变差）。

内置 Face Book 最新的 Recoil 状态管理工具，可以更好的进行全局数据共享，操作简单实用。

![image](https://github.com/roudanji/react-ts-vite/assets/136449369/41f80737-b367-4631-a113-1b06970a0643)
内置了 Eslint + Prettier 代码全局规范（可以让你的研发团队保持统一的代码格式）。

![image](https://github.com/roudanji/react-ts-vite/assets/136449369/1c428a95-5807-424b-bc9a-8ff83a96365b)
已经对 antd design 5 组件库常用组件样式进行了封装，可以直接通过 @import uri('xx') 引入使用，也可对样式进行自定义的更改
