<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 5px;
  bottom: 50px;
  z-index: 1;
}
.back-top img {
  width: 60px;
  height: 60px;
}
</style>