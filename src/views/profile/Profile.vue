<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <login-nav />
    <info />
    <info-list />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import LoginNav from "./childComps/LoginNav";
import Info from "./childComps/Info";
import InfoList from "./childComps/InfoList";
export default {
  name: "Profile",
  components: {
    NavBar,
    Scroll,
    LoginNav,
    Info,
    InfoList,
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>