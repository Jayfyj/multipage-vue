import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import '@/assets/common.css' //公共样式
import '@/assets/font/font.css'
import '@/assets/iconfont/iconfont.css'

//使用组合API
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

const Mock = require('@/mock')
// }

//引入vant
import '@/plugins/vant'

//引入zepto
import $ from 'zepto'

//引入自定义过滤
import '@/filter'

//引入自定义指令
import '@/directives'

//引入全局组件
import '@/components'

// rem等比适配配置文件
import '@utils/setRem'

//引入moment
import moment from 'moment' //导入文件
Vue.prototype.$moment = moment //赋值使用

//引入公共方法
import { common } from '@utils/common'
Vue.use(common)
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts;

router.beforeEach((to, from, next) => {
  // this.$toastShow()
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#about')
