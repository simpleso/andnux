<template>
    <div>
      <x-header :left-options="{showBack:false,backText:''}" :right-options="{showMore: false}">主页</x-header>
      <button-bar :index="0"></button-bar>
    </div>
</template>

<script>
    import ButtonBar from '../components/ButtonBar'
    export default {
      name: 'Home',
      components: {
        ButtonBar
      }
    }
</script>

<style scoped>

  .vux-header{
    background-color: #1296db !important;
  }

</style>
