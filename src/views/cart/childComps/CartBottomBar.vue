<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :isCheck="isSelectAll" @click.native="checkClick" class="check-button" />
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去计算({{ selectCount }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "¥" +
        this.cartList
          .filter((item) => item.checked)
          .reduce((preValue, item) => preValue + item.price * item.count, 0)
          .toFixed(2)
      );
    },
    selectCount() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      // return !this.cartList.filter(item => !item.checked).length
      return this.cartList.length > 0 && !this.cartList.find(item => !item.checked)
    }
  },
  components: {
    CheckButton,
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.map(item => item.checked = false)
      } else {
        this.cartList.map(item => item.checked = true)
      }

      // this.cartList.map(item => item.checked = !this.isSelectAll)
    },
    calcClick() {
      if (!this.isSelectAll) this.$toast.show('请选择购买的商品', 1500)
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.check-content {
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 30px;
}

.price {
    flex: 1;
}

.check-button {
  height: 22px;
  width: 22px;
  margin: 0 10px;
}

.calculate {
  background-color: red;
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 0 10px;
}
</style>