<template>
      <div>
        <x-header :left-options="{backText:''}" :right-options="{showMore: true}">详情</x-header>
        <x-img width="100%" height="200px" :src="image"></x-img>
      </div>
</template>

<script>
    export default {
      name: 'Details',
      data () {
        return {
          id: '1',
          name: '番茄炒鸡蛋番茄炒',
          desc: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
          image: 'https://o5omsejde.qnssl.com/demo/test1.jpg'
        }
      }
    }
</script>

<style scoped>
  .vux-header{
    background-color: #1296db !important;
  }
  .vux-header-left a{
    color: white;
  }
</style>
