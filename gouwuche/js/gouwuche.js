var app = new Vue({
    el:".wrap",
    data:{
        isShow:true,
        goods: [{
                id: 1,
                isSelected: true,
                info: {
                    name: "鞋子",
                    image: "images/img.png",
                    price: "70",
                    count: "50",
                    num: 1
                },

                spec: [
                    {
                        name: "颜色",
                        data: ["red", "yellow", "pink"],
                        value: "red",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "尺寸",
                        data: ["s", "m", "l"],
                        value: "s",
                        type: "radio",
                        key: "size"
                    },
                    {
                        name: "留言",
                        data: "",
                        value: "",
                        type: "text",
                        key: "msg"
                    }
                ]
            },
            {
                id: 2,
                isSelected: true,
                info: {
                    name: "包包",
                    image: "images/img.png",
                    price: "1000",
                    count: "50",
                    num: 1
                },
                spec: [{
                        name: "颜色",
                        data: ["red", "yellow", "pink"],
                        value: "red",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "尺寸",
                        data: ["s", "m", "l"],
                        value: "s",
                        type: "radio",
                        key: "size"
                    }
                ]
            },
            {
                id: 3,
                isSelected: true,
                info: {
                    name: "衣服",
                    image: "images/img.png",
                    price: "100",
                    count: 10,
                    num: 2
                },
                spec: [{
                        name: "颜色",
                        data: ["red", "yellow", "pink"],
                        value: "red",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "尺寸",
                        data: ["s", "m", "l"],
                        value: "s",
                        type: "radio",
                        key: "size"
                    },
                    {
                        name: "留言",
                        data: "",
                        value: "",
                        type: "text",
                        key: "msg"
                    }
                ]
            }
        ],
        list:[{
                id: 1,
                isSelected: true,
                info: {
                    name: "鞋子",
                    image: "images/img1.png",
                    price: "70",
                    count: "50",
                    num: 1
                },

                spec: [
                    {
                        name: "颜色",
                        data: ["red", "yellow", "pink"],
                        value: "red",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "尺寸",
                        data: ["s", "m", "l"],
                        value: "s",
                        type: "radio",
                        key: "size"
                    },
                    {
                        name: "留言",
                        data: "",
                        value: "",
                        type: "text",
                        key: "msg"
                    }
                ]
            },
            {
                id: 2,
                isSelected: true,
                info: {
                    name: "包包",
                    image: "images/img2.png",
                    price: "1000",
                    count: "50",
                    num: 1
                },
                spec: [{
                        name: "颜色",
                        data: ["red", "yellow", "pink"],
                        value: "red",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "尺寸",
                        data: ["s", "m", "l"],
                        value: "s",
                        type: "radio",
                        key: "size"
                    }
                ]
            },
            {
                id: 3,
                isSelected: true,
                info: {
                    name: "衣服",
                    image: "images/img3.png",
                    price: "100",
                    count: 10,
                    num: 2
                },
                spec: [{
                        name: "颜色",
                        data: ["red", "yellow", "pink"],
                        value: "red",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "尺寸",
                        data: ["s", "m", "l"],
                        value: "s",
                        type: "radio",
                        key: "size"
                    },
                    {
                        name: "留言",
                        data: "",
                        value: "",
                        type: "text",
                        key: "msg"
                    }
                ]
            },
             {
                id: 4,
                isSelected: true,
                info: {
                    name: "衣服",
                    image: "images/img3.png",
                    price: "100",
                    count: 10,
                    num: 2
                },
                spec: [{
                        name: "颜色",
                        data: ["red", "yellow", "pink"],
                        value: "red",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "尺寸",
                        data: ["s", "m", "l"],
                        value: "s",
                        type: "radio",
                        key: "size"
                    },
                    {
                        name: "留言",
                        data: "",
                        value: "",
                        type: "text",
                        key: "msg"
                    }
                ]
            },
             {
                id: 5,
                isSelected: true,
                info: {
                    name: "衣服",
                    image: "images/img4.png",
                    price: "100",
                    count: 10,
                    num: 2
                },
                spec: [{
                        name: "颜色",
                        data: ["red", "yellow", "pink"],
                        value: "red",
                        type: "radio",
                        key: "color"
                    },
                    {
                        name: "尺寸",
                        data: ["s", "m", "l"],
                        value: "s",
                        type: "radio",
                        key: "size"
                    },
                    {
                        name: "留言",
                        data: "",
                        value: "",
                        type: "text",
                        key: "msg"
                    }
                ]
            }
        ],
        flag: false

    },
    computed:{
        selectAll: {
            get: function() {
                var flag = true;
                this.goods.forEach(function(item) {
                   // console.log(item)
                    if (!item.isSelected) {
                        flag = false;
                    }
                }); 
                return flag;
            }, 
            // 全选
            set: function(val) {
                // this.flag = val;
                console.log(val)
                this.goods.forEach(function(item) {
                    item.isSelected = val;
                });
            }
        },
        allCount:function(){
            var count=0;
            this.goods.forEach(function(item){
                count+=item.info.num
            })
            return count
        },
        allPrice:function(){
            var price=0;
            this.goods.forEach(function(item){
                if(item.isSelected){
                   price+=item.info.price*item.info.num
                }
            })
            return price
        }
    },
    methods:{
        show(index){
           this.isShow=true
        },
        hide(){
           this.isShow=false
        },
       	changeMoney: function(item,type){
          if(type=="add"){
            item.num+=1
            if(item.num>item.count){
                item.num=item.count
            }
          }else{
            item.num-=1
            if(item.num<=0){
                item.num=1
            }
          }
        },
        remove:function(index){
            this.goods.splice(index,1)
        },
        sure:function(){
            $('ol').hide()
        },
        cancel:function(){
             $('ol').hide()
        },
       render:function(items,index3){
           this.list.splice(index3,1)
           this.goods.push(items)
       }

    }
})