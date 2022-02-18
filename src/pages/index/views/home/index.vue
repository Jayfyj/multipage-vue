<template>
  <div class="indexPage">
    <div class="optionBtn"
         v-for="(item, index) in meunList.value"
         :key="index"
         @click="goPage(item.url)">
      <span>{{ item.text }}</span>
    </div>
    <van-button @click="goPageHtml">{{hrefText}}</van-button>
  </div>
</template>

<script>
import { homeMenuUrl } from './api'
import { ref, reactive } from '@vue/composition-api'
import Route from '@/utils/multiRoute'

export default {
  name: 'IndexHome',
  setup () {

    //赋值路由对象
    const Router = Route.default

    //获取当前路由
    let { currentRoute } = Router
    console.log(currentRoute)

    //设置菜单数组
    let meunList = reactive({ value: [] })

    //跳转about.html
    let hrefText = ref('跳转about.html')

    //获取mock的菜单数据
    homeMenuUrl().then(res => {
      let { code, data } = res.data
      if (code === '0000') {
        meunList.value = data
      }
    })

    //跳转路由
    function goPage (url) {
      Router.push('/todo')
    }

    //跳转Html
    function goPageHtml () {
      window.location.href = './about.html'
    }

    return {
      hrefText,
      meunList,
      goPage,
      goPageHtml
    }
  }

}
</script>

<style scoped lang="scss">
.indexPage {
  padding: 2%;
  box-sizing: border-box;
  > .optionBtn {
    width: 100%;
    padding: 16px 0;
    background: #f7f8fa;
    border-radius: 15px;
    margin: 10px 0 0;
    text-align: center;
    font-size: 32px;
  }
}
</style>
