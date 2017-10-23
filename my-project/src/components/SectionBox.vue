<template>
<section class="section-box">
    <h3 class="section-title" v-if="title">{{title}}</h3>
    <div :class="['section-content', {paddingBox:padding}]" >
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
.section-box{
    width: 100%;
    background: #fff;
    margin-top: .2rem;
    .section-title{
        height: 0.55rem;
        line-height: 0.55rem;
        padding:0 18px;
        font-size: 0.14rem;
    }
    .section-content{
        &.paddingBox{
            padding: 0 18px;
        }
    }
}
</style>