<template>
   <div>
     <tabbar>
       <tabbar-item :link="{'path': '/home'}" >
         <img slot="icon" src="../assets/tabs/home.png" v-if="index != 0">
         <img slot="icon" src="../assets/tabs/home_selected.png" v-if="index == 0">
         <span slot="label" v-bind:class="{'text-color':index==0}">主页</span>
       </tabbar-item>
       <tabbar-item :link="{'path': '/mine'}" >
         <img slot="icon" src="../assets/tabs/mine.png" v-if="index != 1">
         <img slot="icon" src="../assets/tabs/mine_selected.png" v-if="index == 1">
         <span slot="label" v-bind:class="{'text-color':index==1}" >我的</span>
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
