<template>
  <div>
    <x-header :left-options="{backText:''}" :right-options="{showMore: false}">系统设置</x-header>
  </div>
</template>

<script>
    export default {
      name: 'Setting'
    }
</script>

<style scoped>
  .vux-header{
    background-color: #1296db !important;
  }
</style>
