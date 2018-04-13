<template>
  <div class="content" >
   <div style="float: top;width: 100%">
     <x-header style="background-color: #1296db"  :left-options="{showBack: false,backText: ''}">首页</x-header>
   </div>
    <div>
      <swiper :list="images" :auto="true" v-model="index" @on-index-change="onIndexChange"></swiper>
      <grid :cols="4" class="grid_icons" :show-vertical-dividers="false">
        <grid-item class="icon_size" :label="item.title" v-for="(item,i) in indexBtns" :key="i">
          <img  style="border-radius: 25px !important" slot="icon" :src="item.icon">
        </grid-item>
      </grid>
      <div style="height: 10px;background-color: #eeeeee"></div>
      <div style="height: 80px;background-color: white;display: flex">
        <img style="width: 50px;height: 50px;margin: 15px 0px 15px 10px" :src='image'/>
        <div style="width: 1px !important;height: 60px;margin-left: 10px;margin-top: 10px;background-color: #eee"></div>
        <div style="margin: 10px;height: 60px">
          <div style="height: 40px">
            <label style="display: block;font-size: 14px;height: 100% ;overflow: hidden;text-overflow: ellipsis">新闻标题新闻标题题新闻标题新闻闻标闻标题新闻闻标闻闻标闻标闻标题题新闻标题新闻闻标闻标题新闻闻标闻闻标闻闻标题题新闻标题新闻闻标闻标题新闻闻标闻闻标闻闻标题题新闻标题新闻闻标闻标题新闻闻标闻闻标闻题新闻闻标</label>
          </div>
          <label style="font-size: 10px ;color: #ddd">来源：浙江日报 2018-12-12</label>
        </div>
      </div>
      <div style="height: 10px;background-color: #eeeeee"></div>
      <grid :cols="4" class="grid_icons" :show-vertical-dividers="false">
        <grid-item  :label="item.title" v-for="(item,i) in indexIcons" :key="i">
          <img  slot="icon" :src="item.icon">
        </grid-item>
      </grid>
      <div style="height: 50px;"></div>
    </div>
  </div>
</template>
<script>
  import BottomTab from '../components/ButtonBar'
  import { Swiper } from 'vux'

  export default {
    name: 'Home',
    components: {
      BottomTab,
      Swiper
    },
    data: function () {
      return {
        image: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
        indexIcons: [
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题1'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题2'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题3'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题1'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题2'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题3'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题1'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题2'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题3'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题1'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题2'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题3'
          }
        ],
        indexBtns: [
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题1'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题2'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题3'
          },
          {
            icon: 'https://o5omsejde.qnssl.com/demo/test8.jpg',
            title: '标题4'
          }
        ],
        index: 0,
        images: [{
          url: 'javascript:',
          img: 'https://o5omsejde.qnssl.com/demo/test8.jpg'
        }, {
          url: 'javascript:',
          img: 'https://o5omsejde.qnssl.com/demo/test8.jpg'
        }, {
          url: 'javascript:',
          img: 'https://o5omsejde.qnssl.com/demo/test8.jpg'
        }]
      }
    },
    methods: {
      onIndexChange () {

      },
      itemClick (item) {

      }
    }
  }
</script>

<style>
  .grid_icons{
    background-color: white;
  }
  .icon_size  {
    padding: 10px !important;
  }
  .icon_size div{
    width: 50px !important;
    height: 50px !important;
  }
  .grid_icons a{
    padding: 10px;
  }
  .line-limit-length {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .product-buyer-name {
    max-width: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
