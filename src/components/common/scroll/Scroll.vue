<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bscroll: null,
    };
  },
  created() {},
  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    if (this.probeType === 2 || this.probeType === 3) {
      this.bscroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }

    if (this.pullUpLoad) {
      this.bscroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    refresh() {
      this.bscroll && this.bscroll.refresh();
    },
    scrollTo(x, y, time = 300) {
      this.bscroll && this.bscroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.bscroll && this.bscroll.finishPullUp();
    },
  },
};
</script>

<style scoped>
</style>