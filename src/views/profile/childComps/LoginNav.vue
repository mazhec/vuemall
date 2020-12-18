<template>
  <div class="login-nav">
    <div class="avatar">
      <img src="~assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="login-box">
      <div class="login">
        <div class="top">登录/注册</div>
        <div class="bottom"><img src="~assets/img/profile/phone.svg" alt="">暂无绑定手机号</div>
      </div>
    </div>
    <div class="right">
      <img src="~assets/img/common/arrow-left.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginNav",
};
</script>

<style scoped>
.login-nav {
  background-color: var(--color-tint);
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-top: -1px;
}

.login-nav > div {
  display: flex;
  align-items: center;
}

.login-box {
  flex: 1;
  margin-left: 10px;
}

.avatar img {
  width: 80px;
  height: 80px;
}

.right img, .bottom img {
  width: 24px;
  height: 24px;
}

.top {
  font-size: 20px;
}

.bottom {
  display: flex;
  align-items: center;
  margin-left: -4px;
}
</style>