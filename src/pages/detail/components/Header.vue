<template>
    <div>
        <router-link tag="div" to='/' class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to='/'>
                <div class="iconfont header-fix-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
// 导入组件
export default {
    name : 'DetailHeader',
    data () {
        return{
            showAbs: true,
            //渐隐渐现的效果
            opacityStyle: {
                opacity:0
            }
        }
    },
    methods : {
        handleScroll () {
            // 计算距离 让页头消失
            const top = document.documentElement.scrollTop
            if (top > 60){
                //渐隐渐现的效果
                let opacity = top / 140
                //让opacity的值只能是1
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {
                    opacity
                }
                this.showAbs = false
            }else{
                this.showAbs = true
            }
        }
    },
    activated () {
        //这样写是不对的，很多问题 影响了所有的window上了
        window.addEventListener('scroll', this.handleScroll)
    },
    //解决上面的问题  页面即将被隐藏或者替换成新的页面的时候，这个方法将被使用
    deactivated () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .header-abs
        position : absolute
        left : .2rem
        top : .2rem
        width : .8rem
        height : .8rem
        line-height : .8rem
        border-radius: .4rem
        text-align : center
        background : rgba(0,0,0,.8)
        .header-abs-back
            color : #ffffff
            font-size : .4rem
    .header-fixed
        z-index : 2
        position: fixed
        top : 0
        left : 0
        right : 0
        height: 0.86rem;
        line-height: 0.86rem;
        color: #ffffff;
        background: $bgColor;
        font-size: 0.32rem;
        text-align: center;

        .header-fix-back
            position: absolute;
            left: 0;
            font-size: 0.4rem;
            width: 0.64rem;
            text-align: center;
            top: 0;
            color: #fff;
</style>