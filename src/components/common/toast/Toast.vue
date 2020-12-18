<template>
  <div v-show="isDisplay" class="toast">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  // props: {
  //   message: {
  //     type: String,
  //     default: "",
  //   },
  //   isDisplay: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return {
      message: "",
      isDisplay: false,
    };
  },
  methods: {
    show(message, duration=1500) {
      this.isDisplay = true;
      this.message = message;

      setTimeout(() => {
        this.isDisplay = false;
        this.message = ''
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 8px 10px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  border-radius: 6px;
  word-break: keep-all;
}
</style>