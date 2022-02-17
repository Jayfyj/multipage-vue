<<template>
  <div id="about">
    about页面
    <van-button @click="goHtml">跳转index.HTML</van-button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup () {
    function goHtml () {
      window.location.href = './index.html'
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