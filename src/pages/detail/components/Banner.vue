<template>
    <div>
        <div>
            <div class="banner" @click='handleClick'>
                <img class="banner-img" :src="bannerImg">
                <div class="banner-info">
                    <div class="banner-title">{{this.sightName}}</div>
                    <div class="banner-number"><span class="iconfont arrow-icons banner-icon">&#xe6aa;</span>{{this.gallaryImgs.length}}</div>
                </div>
            </div>
        </div>
        <fade-header>
            <common-gallary :gallaryImgs='gallaryImgs' v-show="showGallary" @close='handleGallaryClose'></common-gallary>
        </fade-header>
    </div>
</template>

<script>
// 导入组件
import CommonGallary from 'common/gallary/Gallary'
import FadeHeader from 'common/fade/Fade'
export default {
    name : 'DetailBanner',
    props : {
        sightName : String,
        bannerImg : String,
        gallaryImgs : Array
    },
    components: {
        CommonGallary,
        FadeHeader,
    },
    data () {
        return{
            showGallary : false,
        }
    },
    methods : {
        handleClick(){
            this.showGallary = true
        },
        handleGallaryClose(){
            this.showGallary = false
        },
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height : 0
        padding-bottom : 55%
        .banner-img
            width : 100%
        .banner-info
            display : flex 
            position : absolute
            left : 0
            right : 0
            bottom : 0
            line-height : .6rem
            color : #ffffff
            // 渐变色
            background-image : linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex : 1
                font-size : .32rem
                padding : 0 .2rem
            .banner-number
                padding : 0 .4rem
                height : .32rem
                margin-top: .12rem
                line-height : .32rem
                border-radius: .2rem
                background : rgba(0, 0, 0, .8)
                font-size : .24rem
                .banner-icon
                    font-size : .24rem
</style>