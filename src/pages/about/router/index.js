import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);


// 获取router文件夹的moduleRouter里面的js
const routesfiles = require.context(`@/pages/about/views`, true, /\/route\.js$/)
// 把里面的路由拼接成一个，赋值给路由对象的routes
const routes = routesfiles.keys().reduce(
  (pre, key) => [...pre, ...routesfiles(key).default],
  [],
)

const router = new VueRouter({
    // mode:"history",
    routes
});


// 防止路由重复点击报错
 
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

//路由最加
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//路由替换
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

export default router;
