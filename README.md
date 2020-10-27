# vue3-boilerplate
> 这是一个 Vue3 beta 的脚手架，创建于 2020.10.26，官方预计在 2020 年底升级为正式版本

## 技术栈选型
* TypeScript
* Ant Design Vue 2.0.0-beta3
* 官方生态支持（包括 Vue CLI、@vue/test-utils 等）

## 构建说明
### prod basic building
各 loader 需要注意与 vue 文件 loader 的使用顺序，另外也要注意各插件与 webpack 的兼容性。

* mini-css-extract-plugin，抽取并 mini css 文件以方便缓存
* optimization，使用各种选项抽取并优化 js 文件以方便缓存
* html-webpack-plugin，自动向 html 文件注入资源

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