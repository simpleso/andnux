<template>
  <div id="app">
    <router-view></router-view>
    <div class="tabs">
      <tabbar v-show="$route.path == '/home' || $route.path == '/mine'|| $route.path == '/'|| $route.path == '/cart'">
        <tabbar-item :link="{path:'/home'}" :selected="true">
          <img slot="icon" src="./assets/tabbars/home.png">
          <img slot="icon-active" src="./assets/tabbars/home_selected.png">
          <span slot="label" v-bind:class="{'text-color': ($route.path == '/home' || $route.path == '/')}">主页</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/cart'}">
          <img slot="icon" src="./assets/tabbars/shopcart.png">
          <img slot="icon-active" src="./assets/tabbars/shopcart_selected.png">
          <span slot="label" v-bind:class="{'text-color': ($route.path == '/cart')}">购物车</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/mine'}">
          <img slot="icon" src="./assets/tabbars/mine.png">
          <img slot="icon-active" src="./assets/tabbars/mine_selected.png">
          <span slot="label" v-bind:class="{'text-color': ($route.path == '/mine')}">我的</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';
.text-color{
  color: #1296db;
}
body {
  background-color: #fbf9fe;

}
.tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 4px #000;
  width: 100%;
  & > ul, & > ul > li {
    margin: 0;
    padding: 0;
  }
  ul {
    display: table;
    width: 100%;
    & > li {
      text-align: center;
      font-size: 16px;
      display: table-cell;
      padding: 8px 12px;
      cursor: pointer;
      &.router-link-active {
        color: #D0021B;
      }
      & > div {
        font-size: 14px;
        & > i {
          font-size: 30px;
        }
      }
    }
  }
}
</style>
