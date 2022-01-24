import { createStore } from 'vuex';

export default createStore({
  state: {
    cartList: [], //购物车列表数据
    orderList: [], //生成订单列表数据
  },
  mutations: {
    ADDCART(state, value) {
      state.cartList = value;
    },
    PAY(state, value) {
      state.orderList = value;
    },
  },
  actions: {},
});
