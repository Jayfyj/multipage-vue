# multipage-vue

####

####

####

####

#### 开发

1.开发页面的时候类似开发小程序，例如:在对应的页面的 views 文件夹，
新建 home 文件夹，里面新建 api.js(接口文件),.vue 文件(组件页面),route.js(路由文件)

2.页面之前传参数，使用浏览器存储方式（使用 sessionStorage）

3.reactive 声明的响应式对象被 arr 代理，操作代理对象需要有代理对象的前缀，直接覆盖会丢失响应式，
所以，vue3 使用 proxy，对于对象和数组都不能直接整个赋值 需要这样：对象添加一个属性再赋值
let formValue = reactive({ value: {} })
let arr = reactive({ value: [] })

4.因为多页面，所以在单页面的时候，路由跳转,需要引入对应的路由对象，所以当组件需要做路由操作的时候，如下:
import Route from '@/utils/multiRoute'
export default {
setup (props, { emit }) {

    //赋值路由对象
    const Router = Route.default
    ...
    ...

},
}

####

####

####

####

#### 项目配置

1.多页面配置
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

####

####

#### 遇到问题

1.compression-webpack-plugin 插件问题:

报错：TypeError: Cannot read property ‘tapPromise‘ of undefined
解决：先执行卸载命令->npm uninstall compression-webpack-plugin，执行安装命令->npm i compression-webpack-plugin@5.0.1

####

####
