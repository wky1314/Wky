<template>
    <div class="page">
        <div class="box" style="margin:0 .02rem">
            <input type="checkbox" :name="name" :value="value" :id="checkboxId" @change="event(value)" style="display:none"/>
            <label :for="checkboxId" style="border:1px solid #e5e5e5;padding:0.02rem 0.08rem">{{label}}</label>
        </div>
    </div>
</template>
<script type="text/babel">
    export default {
        model: {
            prop: "checked",
            event: "change"
        },
        data () {
            return {
              checkboxId: +new Date() + Math.random()
            }
        },
        props: ['name','value','label'],
        methods: {
            event(val){
                this.$emit("change",val)
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    input:checked+label{
        border-color: red!important;
        color:red;
    }
</style>
