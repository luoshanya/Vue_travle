<template>
    <div>
       <!--引用使header.vue能够使用-->
       <home-header></home-header>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components:{
      HomeHeader
  }
}
</script>

<style>
</style>