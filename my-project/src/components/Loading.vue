<template>
  <transition name="opacity">
    <div class="loadings" v-show="isShow">
      <div class="loader">
        <div class="loader_dot"></div>
        <div class="loader_dot"></div>
        <div class="loader_dot"></div>
        <div class="loader_dot"></div>
        <div class="loader_dot"></div>
      </div>
    </div>
  </transition>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      /**
       * 显示动画loading
       */
      show() {
        this.isShow = true
      },
      /**
       * 隐藏动画loading
       */
      hide() {
        this.isShow = false
      }
    }
  }
</script>

<style scope lang="less">
  .animation-delay( @index ) when ( @index <= 5 ) {
    .loader_dot:nth-child(@{index}) {
        animation-delay:(0.2 + 0.1s * @index);
        background:lighten(#ce2424, (@index * 6))
    }
    .animation-delay( @index+1 )
  }

  .loadings {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1000000;
    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);

      .loader_dot {
        width: 10px;
        height: 10px;
        background: #3ac;
        border-radius: 100%;
        display: inline-block;
        animation: slide 1s infinite;
        margin-right: 6px;
      }
      .animation-delay(1);
    }
  }

  @keyframes slide {
    0% {
      transform: scale(1)
    }
    50%
    {
      opacity: .3;
      transform: scale(2)
    }
    100%
    {
      transform: scale(1)
    }
}
  .opacity {
    .opacity-enter-active, .opacity-leave-active {
      transition: all 0.6s
    }
    .opacity-enter, .opacity-leave-active {
      opacity: 0
    }
  }
</style>