<template>
  <div class="Other">
    <h1>This is an Other page</h1>
    <van-button @click="goHtml">跳转about.HTML</van-button>
  </div>
</template>

<script>


export default {
  setup () {
    function goHtml () {
      window.location.href = './about.html'
    }

    return {
      goHtml
    }
  },
}
</script>

