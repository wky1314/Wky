<template>
        <div class="box" style="margin:0 .02  0rem">
            <input type="radio" 
                  :name="name" 
                  :value="value" 
                  :id="radioId" 
                  @change="event(value)" 
                  style="display:none"
                  v-if="checked && checked==value"
                  checked=''
            />
            <input type="radio" 
                   :name="name" 
                   :value="value" 
                   :id="radioId" 
                   @change="event(value)" 
                   style="display:none"
                   v-else
            />
            <label :for="radioId" style="border:1px solid #e5e5e5;padding:0.02rem 0.08rem">{{label}}</label>
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
                radioId: +new Date() + Math.random()
            }
        },
        props: ['name','value','label','checked'],
        watch: {
           'checked': function (val,val2) {
               if( val == ''){
                   $(this.$el).find('input').prop('checked',false)
               }
           }
        },
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
