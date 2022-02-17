# multipage-vue

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

####

####

#### 多页面配置

//多页面配置
pages: {
about: {
entry: "src/pages/about/main.js",
template: "public/about.html",
filename: "about.html",
title: "相关页面",
},
index: {
// page 的入口
entry: 'src/pages/index/main.js',
// 模板来源
template: 'public/index.html',
// 在 dist/index.html 的输出
filename: 'index.html',
// 当使用 title 选项时，
// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
title: '首页',
// 在这个页面中包含的块，默认情况下会包含
// 提取出来的通用 chunk 和 vendor chunk。
chunks: ['chunk-vendors', 'chunk-common', 'index']
}
},

####

####

#### 打包遇到问题

### compression-webpack-plugin 插件问题

报错：TypeError: Cannot read property ‘tapPromise‘ of undefined
解决：先执行卸载命令->npm uninstall compression-webpack-plugin，执行安装命令->npm i compression-webpack-plugin@5.0.1

####

####
