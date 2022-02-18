<<template>
  <div id="about">
    about页面
    <van-button @click="goHtml">{{hrefText}}</van-button>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import Route from '@/utils/multiRoute'


export default defineComponent({
  setup () {

    //设置跳转index.html
    let hrefText = ref('跳转index.html')

    //赋值路由对象
    const Router = Route.default

    //获取当前路由
    let { currentRoute } = Router
    console.log(currentRoute)

    //跳转Html
    function goHtml () {
      window.location.href = './index.html'
    }

    return {
      hrefText,
      goHtml
    }
  },
})
</script>

<style lang="scss">
#about {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

</style>