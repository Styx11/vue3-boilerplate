# vue3-boilerplate
> 这是一个 Vue3 beta 的脚手架，创建于 2020.10.26，官方预计在 2020 年底升级为正式版本

## 技术栈选型
* TypeScript
* Ant Design Vue 2.0.0-beta3
* 官方生态支持（包括 Vue CLI、@vue/test-utils 等）

## 构建说明
### prod basic building
各 loader 需要注意与 vue 文件 loader 的使用顺序，另外也要注意各插件与 webpack 的兼容性。

- mini-css-extract-plugin，抽取并 mini css 文件以方便缓存
- optimization，使用各种选项抽取并优化 js 文件以方便缓存
- html-webpack-plugin，自动向 html 文件注入资源

### vue3 building
我们启用了目前为止还处于 beta 阶段的 Vue 3 开发模式（2020.10.27）。官方预计与 2020 年底将其提升至正式版本。
- @vue/compiler-sfc：v3.0.2
- vue-loader：v16.0.0-beta.8
- vue-style-loader：v4.1.2
其余资源 loader 可以查看`package.json`

### ts building
在 Vue 3 组件中使用了 TypeScript 作为开发语言，并通过`defineComponent`函数给予它更好的类型检查支持。
- typescript：v4.0.5
- ts-loader：v8.0.7
- tsconfig.json
- shims-vue.d.ts

### ant-design-vue
- ant-design-vue：v2.0.0-beta.10
- ts-import-plugin：v1.6.6 帮助 antd 按需引入

## Project setup
```
yarn install
```

### Compiles and minifies for production staging
```
yarn build:stage
```


## LICENSE
MIT.