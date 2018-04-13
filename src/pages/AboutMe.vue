<template>
    <div>
      <x-header :left-options="{backText:''}" :right-options="{showMore: false}">关于我们</x-header>
    </div>
</template>

<script>
    export default {
      name: 'AboutMe'
    }
</script>

<style scoped>
  .vux-header{
    background-color: #1296db !important;
  }
</style>
