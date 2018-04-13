<template>
  <div>
    <x-header :left-options="{showBack:false,backText:''}" :right-options="{showMore: false}">购物车</x-header>
    <div style="background-color: white" v-for="i in items" :key="i.id" @click="onItemClick(i.id)">
      <div style="height: 80px;display: flex;margin: 0 15px" >
        <x-img style="width: 60px;height: 60px;margin: 10px 0" :src="i.image" ></x-img>
        <div style="margin-top: 10px;margin-left: 10px">
          <span style="font-size: 14px">{{i.name}}</span>
          <br/>
          <span style="font-size: 10px ;color: #9b9b9b">{{i.desc}}</span>
        </div>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
  import ButtonBar from '../components/ButtonBar'
  export default {
    name: 'ShopCart',
    components: {
      ButtonBar
    },
    methods: {
      onItemClick: function (id) {
        console.log(id)
        this.$router.push({name: 'Details', params: {id: id}})
      }
    },
    data: function () {
      return {

        items: [
          {
            id: '1',
            name: '番茄炒鸡蛋番茄炒',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
            image: 'https://o5omsejde.qnssl.com/demo/test1.jpg'
          },
          {
            id: '2',
            name: '番茄炒鸡蛋番茄炒',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
            image: 'https://o5omsejde.qnssl.com/demo/test1.jpg'
          },
          {
            id: '3',
            name: '番茄炒鸡蛋番茄炒',
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
            image: 'https://o5omsejde.qnssl.com/demo/test1.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .line {
    background-color: #eeeeee;
    margin-bottom: 0px;
    height: 1px;
    margin-left: 15px;
    margin-right: 15px;
    width: auto;
  }
  .weui-search-bar__cancel-btn {
    color: #1296db !important;
  }
  .vux-header{
    background-color: #1296db !important;
  }

</style>
