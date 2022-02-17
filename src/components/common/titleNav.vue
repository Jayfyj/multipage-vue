<template>
  <div class="titleNav"
       :style="{ height: '50px' }"
       v-if="isShow">
    <div class="titleLeft"
         :style="{ height: '50px' }">
      <i class="iconfont icon-fanhui IconFun"
         v-if="LeftShow"
         @click="leftClick()"></i>
    </div>
    <div class="titleCenter"
         :style="{ height: '50px' }">
      <span>{{ title }}</span>
    </div>
    <div class="titleRight"
         :style="{ height: '50px' }">
      <i class="iconfont icon-kefu IconFun"
         v-if="RightShow"
         @click="rightClick()"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'titleNav',
  props: {
    //是否显示
    isShow: {
      type: Boolean,
      default: true
    },
    //左边图案
    LeftShow: {
      type: Boolean,
      default: true
    },
    //右边图案
    RightShow: {
      type: Boolean,
      default: false
    },
    //标题
    title: {
      type: String,
      default: ''
    }
  },
  mounted () { },
  data () {
    return {}
  },
  methods: {
    leftClick () {
      this.$router.go(-1)
    },
    rightClick () {
      this.$emit('rightClick')
    }
  },
  components: {}
}
</script>

<style scoped="scoped" lang="less">
//背景色
@titleNavBG: PINK;
//左右padding
@paddingLAR: 8px;
//标题字体和颜色
.titleFontSizeColor() {
  font-size: 48px;
  color: white;
}

//图标大小和颜色
.titleIconSizeColor() {
  font-size: 64px;
  color: white;
}

.titleNav {
  background: @titleNavBG;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 @paddingLAR;
  box-sizing: border-box;
  .titleLeft {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > .IconFun {
      .titleIconSizeColor();
    }
  }
  .titleCenter {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      .titleFontSizeColor();
    }
  }
  .titleRight {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > .IconFun {
      .titleIconSizeColor();
    }
  }
}
</style>
