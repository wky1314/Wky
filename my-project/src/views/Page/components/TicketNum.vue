<template>
    <div class="ticket_num">
            <ul>
                <li>
                    <h2>1</h2>
                    <h5>今日票房排名</h5>
                </li>
                <li>
                    <h2>19773</h2>
                    <h5>首周票房(万)</h5>
                </li>
                <li>
                    <h2>25227</h2>
                    <h5>累计票房(万)</h5>
                </li>
            </ul>
        </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .ticket_num{
        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 .3rem;
            box-sizing: border-box;
            li{
                text-align: center;
                h2{
                    color: #50505a;
                }
                h5{
                    color: #8a869e;
                    font-size: .12rem;
                }
            }
        }
    }
</style>