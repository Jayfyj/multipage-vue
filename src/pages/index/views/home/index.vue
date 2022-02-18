<template>
  <div class="indexPage">
    <div class="optionBtn"
         v-for="(item, index) in meunList"
         :key="index"
         @click="goPage(item.url)">
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
import { homeMenuUrl } from './api'
import { ref, reactive } from '@vue/composition-api'

export default {
  name: 'IndexHome',
  setup () {
    //设置菜单数组
    let meunList = reactive([])

    //获取mock的菜单数据
    homeMenuUrl().then(res => {
      let { code, data } = res.data
      if (code === '0000') {
        data.map(item => {
          meunList.push(item)
        })
      }
    })

    //跳转路由
    function goPage (url) {
      console.log(url)
    }

    return {
      meunList,
      goPage
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
