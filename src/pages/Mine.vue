<template>
  <div>
    <x-header :left-options="{showBack:false,backText:''}" :right-options="{showMore: false}">我的</x-header>
    <div @click="show=true" style="height: 150px;display: flex">
        <x-img style="width: 120px;height: 120px;border-radius: 60px;margin: auto" :src="head"></x-img>
    </div>
    <div style="display: flow; height: 30px margin: auto;font-size: 16px;width: 100%;text-align: center">
      <span>张春林</span>
    </div>
    <group label-width="4.5em" label-margin-right="2em" style="margin-top: 10px" >
      <cell  v-for="btn in buttons" :key="btn.url" :title="btn.title" style="padding: 15px" :link="btn.url" is-link> </cell>
    </group>

    <button-bar :index="1"></button-bar>
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
          buttons: [
            {
              title: '我的钱包',
              icon: '/'
            },
            {
              title: '系统设置',
              icon: '/'
            },
            {
              title: '意见反馈',
              icon: '/'
            },
            {
              title: '关于我们',
              icon: '/'
            }
          ]
        }
      },
      components: {
        ButtonBar
      },
      methods: {
      }
    }
</script>

<style scoped>
  .vux-header{
    background-color: #1296db !important;
  }
</style>
