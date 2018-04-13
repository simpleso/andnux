<template>
  <div>
    <x-header :left-options="{backText:''}" :right-options="{showMore: false}">我的钱包</x-header>
  </div>
</template>

<script>
    export default {
      name: 'MyWallet'
    }
</script>

<style scoped>
  .vux-header{
    background-color: #1296db !important;
  }
</style>
