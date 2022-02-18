<template>
  <div class="bottomNav"
       :style="{ height: '50px' }">
    <div class="bottomNav_Btn"
         :style="{ height: '50px' }"
         v-for="(item, index) in tabList"
         :key="index"
         @click="tabClick(item)">
      <i :class="[item.tabIcon, { active: item.tabActive }]"></i>
      <span :class="[{ active: item.tabActive }]">{{ item.tabName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomNav',
  mounted () { },
  data () {
    return {
      tabList: [
        {
          tabIcon: 'iconfont icon-shouye1',
          tabSelectIcon: '',
          tabName: '首页',
          tabURL: '',
          tabActive: true,
          tabId: 0
        },
        {
          tabIcon: 'iconfont icon-fenlei1',
          tabSelectIcon: '',
          tabName: '分类',
          tabURL: '',
          tabActive: false,
          tabId: 1
        },
        {
          tabIcon: 'iconfont icon-sousuo',
          tabSelectIcon: '',
          tabName: '搜索',
          tabURL: '',
          tabActive: false,
          tabId: 2
        },
        {
          tabIcon: 'iconfont icon-wode1',
          tabSelectIcon: '',
          tabName: '我的',
          tabURL: '',
          tabActive: false,
          tabId: 3
        }
      ]
    }
  },
  methods: {
    tabClick (item) {
      if (item.tabActive) return
      this.tabList.forEach((ele, index) => {
        if (ele.tabId != item.tabId) {
          ele.tabActive = false
        } else {
          ele.tabActive = true
          this.$router.push({
            name: ele.tabURL
          })
        }
      })
    }
  },
  components: {}
}
</script>

<style scoped="scoped" lang="scss">

.bottomNav {
  border-top: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  .bottomNav_Btn {
    padding: 0 8px;
    box-sizing: border-box;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    i {
      font-size: 48px;
    }
    span {
      font-size: 32px;
    }
    .active {
      color: red;
    }
  }
}
</style>
