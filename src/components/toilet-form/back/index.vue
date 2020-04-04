<template>
  <div class="hamster__toilet-back">
    <div class="toilet-back__container">
      <div class="arrow-left">
        <img src="./../../../assets/back-arrow.svg"/>
      </div>
      <p class="toilet-back" @click="onClick">Back</p>
      <!-- <router-link to="/" class="toilet-back">Back</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'toilet-back',
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
