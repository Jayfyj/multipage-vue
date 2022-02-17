// 按需全局引入 mint-ui组件
import Vue from 'vue'
// import 'mint-ui/lib/style.css'
import {
  Button, 
  Indicator
} from 'mint-ui'

// Vue.use(Button)
Vue.component(Button.name,Button)

Vue.prototype.$Indicator = Indicator