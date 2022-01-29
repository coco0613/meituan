<template>
  订单
  <div class="order">
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
.order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>