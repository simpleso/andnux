<template>
   <div>
     <tabbar>
       <tabbar-item :link="{'path': '/home'}" >
         <img slot="icon" src="../assets/tabbars/home.png" v-if="index != 0">
         <img slot="icon" src="../assets/tabbars/home_selected.png" v-if="index == 0">
         <span slot="label" v-bind:class="{'text-color':index==0}">主页</span>
       </tabbar-item>
       <tabbar-item :link="{'path': '/cart'}" >
         <img slot="icon" src="../assets/tabbars/shopcart.png" v-if="index != 1">
         <img slot="icon" src="../assets/tabbars/shopcart_selected.png" v-if="index == 1">
         <span slot="label" v-bind:class="{'text-color':index==1}" >购物车</span>
       </tabbar-item>
       <tabbar-item :link="{'path': '/mine'}" >
         <img slot="icon" src="../assets/tabbars/mine.png" v-if="index != 2">
         <img slot="icon" src="../assets/tabbars/mine_selected.png" v-if="index == 2">
         <span slot="label" v-bind:class="{'text-color':index==2}" >我的</span>
       </tabbar-item>
     </tabbar>
   </div>
</template>

<script>
    export default {
      name: 'ButtonBar',
      props: {
        index: {
          type: Number,
          default: 'cancel'
        }
      }
    }
</script>

<style lang="less">
  .text-color{
    color: #1296db;
  }
</style>
