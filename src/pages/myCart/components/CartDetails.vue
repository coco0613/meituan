<template>
  <div class="cartDetails">
    <!-- 商品的列表 -->
    <div class="content">
      <van-checkbox-group v-model="result" @change="groupChange">
        <div v-for="(i, index) in store.state.cartList">
          <FoodAdd :item="i" :showCheckbox="true" :onChange="onChange" />
        </div>
      </van-checkbox-group>
    </div>
    <!-- 结算 -->
    <van-submit-bar
      :price="allPrice * 100"
      button-text="结算"
      @submit="onSubmit"
      class="submit-all"
      button-color="#ffc400"
    >
      <van-checkbox v-model="checked" checked-color="#ffc400" @click="choseAll">
        全选
      </van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import FoodAdd from "../../../components/FoodAdd.vue";
import { Toast } from "_vant@3.4.2@vant";
export default {
  components: { FoodAdd },
  setup() {
    const store = useStore();
    let data = reactive({
      result: [],
      checked: true,
    });

    // 商品默认选中的初始化
    const init = () => {
      data.result = store.state.cartList.map((item) => item.id);
    };

    onMounted(() => {
      init();
    });

    // 商品的个数同步
    const onChange = (value, detail) => {
      store.state.cartList.map((item) => {
        if (item.id === detail.name) {
          item.num = value;
        }
      });
    };

    // 全选或者取消全选
    const choseAll = () => {
      if (data.result.length !== store.state.cartList.length) {
        init();
      } else {
        data.result = [];
      }
    };

    // 更新数据
    const updata = () => {
      return store.state.cartList.filter((item) =>
        data.result.includes(item.id)
      );
    };

    // 结算按钮
    const onSubmit = () => {
      if (data.result.length !== 0) {
        store.commit("PAY", updata());
      } else {
        Toast.fail("请选择要结算的商品");
      }
    };

    // 每个复选框的点击事件触发
    const groupChange = (result) => {
      if (result.length === store.state.cartList.length) {
        data.checked = true;
      } else {
        data.checked = false;
      }
      data.result = result;
    };

    // 总价
    const allPrice = computed(() => {
      let countList = store.state.cartList.filter((item) =>
        data.result.includes(item.id)
      );
      let sum = 0;
      countList.forEach((item) => {
        sum += item.num * item.price;
      });
      return sum;
    });

    return {
      ...toRefs(data),
      store,
      onChange,
      onSubmit,
      choseAll,
      groupChange,
      allPrice,
    };
  },
};
</script>

<style lang='less' scoped>
.cartDetails {
  font-size: 14px;
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 55px;
  .submit-all {
    position: fixed;
    bottom: 48px;
  }

  .buy {
    position: fixed;
    bottom: 58px;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;
    .left {
      display: flex;
      align-items: center;
    }
    .delete {
      color: #fff;
      background-color: #ffc400;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      width: 110px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }

  .content {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>