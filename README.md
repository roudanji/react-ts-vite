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

![image](https://github.com/roudanji/react-ts-vite/assets/136449369/e6bae264-bbee-4419-abd9-947281d5d83d)
内置富文本编辑器可通过回调函数和默认赋值来取值回显（编辑器可全屏）。

![image](https://github.com/roudanji/react-ts-vite/assets/136449369/739beb61-8ca8-403f-a047-e59b9a49bb7a)
内置 React Hooks + Context 上下文开发模式，更好的拆分组件以及维护你的当前逻辑代码（可完全避免各个组件之前通信传值，造成后期维护可读性变差）。

![image](https://github.com/roudanji/react-ts-vite/assets/136449369/eb1d6344-3df0-4b64-8778-ac7e5ec9ca16)![image](https://github.com/roudanji/react-ts-vite/assets/136449369/a67f5a2a-0b5c-4adf-b17b-3860c57415cb)
内置 Face Book 最新的 Recoil 状态管理工具，可以更好的进行全局数据共享，操作简单实用。

![image](https://github.com/roudanji/react-ts-vite/assets/136449369/41f80737-b367-4631-a113-1b06970a0643)
内置了 Eslint + Prettier 代码全局规范（可以让你的研发团队保持统一的代码格式）。
