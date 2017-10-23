<template>
<section class="watch-box">
    <p class="watch-title" v-if="title">{{title}}</p>
    <div :class="['watch-content', {paddingBox:padding}]" >
        <slot></slot>
    </div>
</section>
</template>
<script type="text/babel">
  export default {
    props: {
        'title':{
            default: ''
        },
        'padding':{
            default: true
        }
    }
  }
</script>

<style scope lang="less">
.watch-box{
    width: 100%;
    background: #fff;
    .watch-title{
        height: 0.55rem;
        line-height: 0.55rem;
        padding:0 18px;
        font-size: 0.14rem;
        text-align: center;
        color: #108ee9;
    }
    .watch-content{
        &.paddingBox{
            padding: 0 18px;
        }
    }
}
</style>