<template>
  <div>
    <x-header :left-options="{showBack:false,backText:''}" :right-options="{showMore: false}">我的</x-header>
    <div @click="show=true" style="height: 150px;display: flex">
        <x-img style="width: 120px;height: 120px;border-radius: 60px;margin: auto" :src="head"></x-img>
    </div>
    <div style="display: flow; height: 30px margin: auto;font-size: 16px;width: 100%;text-align: center">
      <span>张春林</span>
    </div>
    <flexbox style="background-color: white;height: 44px;margin-top: 20px" gutter="3">
      <flexbox-item v-for="(i,id) in orders" :key="i.title" style="height: 100%;" >
        <x-button class="boder" @click="btnClick(id)">{{i.title}}</x-button>
      </flexbox-item>
    </flexbox>
    <group label-width="4.5em" label-margin-right="2em" style="margin-top: -10px" >
      <cell  v-for="btn in buttons" :key="btn.url" :title="btn.title" style="padding: 15px" :link="btn.url" is-link> </cell>
    </group>
    <actionsheet v-model="show" :menus="menus" show-cancel></actionsheet>
  </div>
</template>

<script>
    import ButtonBar from '../components/ButtonBar'
    export default {
      name: 'Mine',
      data () {
        return {
          qb: '../assets/logo.pmg',
          head: 'https://o5omsejde.qnssl.com/demo/test1.jpg',
          show: false,
          image: '',
          menus: {
            menu1: '相机',
            menu2: '相册'
          },
          orders: [
            {
              title: '全部订单',
              name: 'Order'
            },
            {
              title: '待付款',
              name: 'Order'
            },
            {
              title: '待发货',
              name: 'Order'
            },
            {
              title: '待收货',
              name: 'Order'
            },
            {
              title: '待评价',
              name: 'Order'
            }
          ],
          buttons: [
            {
              title: '我的钱包',
              url: '/wallet'
            },
            {
              title: '系统设置',
              url: '/setting'
            },
            {
              title: '意见反馈',
              url: '/feedback'
            },
            {
              title: '关于我们',
              url: '/about'
            }
          ]
        }
      },
      components: {
        ButtonBar
      },
      methods: {
        btnClick: function (id) {
          console.log(id)
          this.$router.push({name: 'Order', params: {type: id}})
        }
      }
    }
</script>

<style scoped>
  .boder {
    text-align: center;
    height: 100%;
    font-size: 10px;
    background-color: white;
  }
  .vux-header{
    background-color: #1296db !important;
  }
</style>
