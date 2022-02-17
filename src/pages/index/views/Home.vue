<template>
  <div class="home">
    <title-nav :title="'标题'" />
    <div id="nav">
      <router-link to="/other">Other</router-link>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
}
</script>
