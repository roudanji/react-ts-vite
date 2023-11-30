# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# 运行命令
- pnpm install
- pnpm install @wangeditor/editor
- 启动项目 pnpm dev
- 打包项目 pnpm build

# React Context 开发模式
- 完全避免大量拆分组件之后互相传值导致代码冗余的问题


# 代码规范配置
- 内置了 .eslintrc.cjs  .eslintignore   prettierrc.cjs
- 可以下载 Eslint 。 Prettier - Code formatter。 插件统一你团队的代码格式
- 配置了一键格式化全局项目代码，命令: pnpm format
- 代码风格的配置都在 .eslintrc.cjs 文件，如需额外新增配置可前往 https://eslint.org/docs/latest/use/configure/ 查找对应配置

# 内置的一些东西
- 配置了导航栏页签功能 使用的是 Tabs 组件
- 配置了动态路由 在项目的首页有方法路径以及如何实现
- 配置了项目全局的主题样式，组件库的样式以及菜单栏的样式
- axios 的封装，请求 type 类型的封装，更好的调用接口方式
