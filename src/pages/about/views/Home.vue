<<template>
  <div id="about">
    about页面
    <van-button @click="goHtml">跳转index.HTML</van-button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import router from '../router'

export default defineComponent({
  setup () {
    console.log(sessionStorage.getItem('id'))
    let currentRoute = router.currentRoute
    console.log(currentRoute)

    function goHtml () {
      window.location.href = './index.html'
      sessionStorage.removeItem('id')
    }

    return {
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