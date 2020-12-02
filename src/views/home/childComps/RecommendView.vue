<template>
  <div class="recommend">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {},
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  font-size: 13px;
  text-align: center;
  padding: 15px 0 30px;
  border-bottom: 10px solid #eee;
}

.recommend-item {
    flex: 1;
}

.recommend-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
}
</style>