<template>
  <div class="hamster__stock-back">
    <div class="stock-back__container" @click="onClick">
      <div class="arrow-left">
        <img src="./../../../assets/back-arrow.svg"/>
      </div>
      <p class="stock-back">Back</p>
      <!-- <router-link to="/" class="toilet-back">Back</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'stock-back',
  methods: {
    onClick() {
      this.$emit('onClickCallback');
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
