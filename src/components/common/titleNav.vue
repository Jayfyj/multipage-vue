<template>
  <div class="titleNav"
       :style="{ height: titleWrap }"
       v-if="isShow">
    <div class="titleLeft"
         :style="{ height: titleWrap}">
      <i class="iconfont icon-fanhui IconFun"
         v-if="back"
         @click="leftClick()"></i>
    </div>
    <div class="titleCenter"
         :style="{ height: titleWrap }">
      <span>{{ title }}</span>
    </div>
    <div class="titleRight"
         :style="{ height: titleWrap }">
      <i class="iconfont icon-kefu IconFun"
         v-if="RightShow"
         @click="rightClick()"></i>
    </div>
  </div>
</template>

<script>
import Route from '@/utils/multiRoute'
export default {
  name: 'titleNav',
  props: {
    //是否显示
    isShow: {
      type: Boolean,
      default: true
    },

    //显示返回图标
    back: Boolean,

    //右边图案
    RightShow: Boolean,

    //标题
    title: {
      type: String,
      default: ''
    },

    //标题高度
    titleWrap: {
      type: String,
      default: '50px'
    }
  },
  setup (props, { emit }) {

    //赋值路由对象
    const Router = Route.default

    //左边图标按钮
    function leftClick () {
      Router.go(-1)
    }

    //右边图标按钮
    function rightClick () {
      emit('rightClick')
    }

    return {
      leftClick,
      rightClick
    }
  },
}
</script>

<style scoped="scoped" lang="scss">
//背景色
$titleNavBG: PINK;
//左右padding
$paddingLAR: 8PX;

//标题字体和颜色(定义一个类，声明使用@mixin名字，引用@include名字)
@mixin titleFontSizeColor{
  font-size: 48px;
  color: white;
}

//图标大小和颜色
@mixin titleIconSizeColor{
  font-size: 64px;
  color: white;
}

.titleNav {
  background: $titleNavBG;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 $paddingLAR;
  box-sizing: border-box;
  .titleLeft {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    > .IconFun {
      @include titleIconSizeColor;
    }
  }
  .titleCenter {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      @include titleFontSizeColor;
    }
  }
  .titleRight {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > .IconFun {
      @include titleIconSizeColor;
    }
  }
}
</style>
