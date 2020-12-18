<template>
  <div class="info">
    <div class="info-left">
      <div class="top"><span>0.00</span>元</div>
      <div class="bottom">我的余额</div>
    </div>
    <div class="info-center">
      <div class="top"><span>0</span>个</div>
      <div class="bottom">我的优惠</div>
    </div>
    <div class="info-right">
      <div class="top"><span>0</span>分</div>
      <div class="bottom">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style scoped>
.info {
  display: flex;
  text-align: center;
}

.info-center {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
}

.info > div {
  flex: 1;
  padding: 20px 0;
}

.info .top {
    margin: 5px 0;
}

.info span {
  color: orangered;
  font-size: 25px;
}
</style>