<template>
  <div class="hello">
    <div>vue3仿美团项目</div>
    <van-button type="primary">主要按钮</van-button>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello{
    font-size: 30px;
    div{
      color: aquamarine;
    }
  }
</style>
