<template>
  <div>
    <div class="info-list">
      <div class="item-box">
        <img src="~assets/img/profile/message.svg" alt="" />
        <div class="text">我的消息</div>
      </div>
      <div class="item-box">
        <img src="~assets/img/profile/pointer.svg" alt="" />
        <div class="text">我的消息</div>
      </div>
      <div class="item-box">
        <img src="~assets/img/profile/vip.svg" alt="" />
        <div class="text">我的消息</div>
      </div>
    </div>

    <div class="info-list">
      <div class="item-box">
        <img src="~assets/img/profile/cart.svg" alt="" />
        <div class="text">我的消息</div>
      </div>
      <div class="item-box">
        <img src="~assets/img/profile/shopping.svg" alt="" />
        <div class="text">我的消息</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoList",
};
</script>

<style scoped>
.info-list {
  border-top: 18px solid rgba(100, 100, 100, 0.2);
}

.item-box {
  display: flex;
  align-items: center;
}

.item-box img {
  width: 24px;
  height: 24px;
  margin: 0 10px;
}

.item-box .text {
  flex: 1;
  padding: 10px 0;
  border-bottom: 1px solid rgba(100, 100, 100, 0.2);
}
</style>