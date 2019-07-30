<template>
    <div>
        <div class="item" v-for="(item, index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <!-- 层级组件 -->
            <div v-if="item.children" class="item-children">
                <detail-list :list='item.children'></detail-list>
            </div>
        </div>
    </div>
</template>

 <script>
 export default {
     name : 'DetailList',
     props : {
         list : Array
     }
 }
 </script>

 <style lang="stylus" scoped>
     .item-title-icon
        position: relative;
        top: 0.1rem;
        left: 0.2rem;
        display: inline-block;
        width: 0.38rem;
        height: 0.36rem;
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem no-repeat;
        margin-right: 0.1rem;
        background-size: 0.4rem 3rem;
        margin: 0 .2rem 0 0
     .item-title
        line-height .8rem
        font-size : .32rem
     .item-children
        padding: 0 .2rem
    
 </style>