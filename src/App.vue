<template>
  <div id="app">
    <!--顶部tab-->
    <!--写一个顶部tab组件-->
    <myHeader></myHeader>
    <!--top tab-->
    <div class="topTab">
      <div class="tab-item" v-on:click=openTab(1) style="cursor:pointer">商品</div>
      <div class="tab-item" v-on:click=openTab(2) style="cursor:pointer">评论</div>
      <div class="tab-item" v-on:click=openTab(3) style="cursor:pointer">商家</div>
    </div>
    <div v-if='active==1'>
      <goods></goods>
    </div>
    <!--<router-view/>-->
  </div>
</template>

<script>
//  import leftNav from '@/components/leftNav'
/* eslint-disable */
import myHeader from '@/components/header/myHeader'
import goods from '@/components/goods/goods'
// import leftNav from '@/components/leftNav'
export default {
  name: 'App',
  data () {
    return {
      active: ''
    }
  },
  components: {
    'myHeader': myHeader,
    'goods': goods
  },
  created() {
    this.active=0
    console.log('created' + this.active)
  },
  methods: {
    openTab(nouActiove){
      console.log(nouActiove)
      this.active=nouActiove
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.topTab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: rgba(7, 17, 27, 0.1);
}
.tab-item {
  flex: 1;
  text-align: center;
  background-color: whitesmoke;
  border-bottom:1px solid #666;
}
</style>
