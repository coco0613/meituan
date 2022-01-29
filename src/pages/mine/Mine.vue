<template>
  我的
  <div class="mine">
    <div class="content"></div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../components/Footer";
export default {
  components: {
    Footer
  }
}
</script>

<style lang="less" scoped>
.mine {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>