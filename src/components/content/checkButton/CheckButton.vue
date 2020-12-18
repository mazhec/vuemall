<template>
  <div class="check-button" :class="{ check: isCheck }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: {
      type: Boolean,
      default: false
    },
  },
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #aaa;
}

.check {
  border-color: red;
  background-color: red;
}
</style>