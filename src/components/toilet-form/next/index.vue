<template>
  <div class="hamster__toilet-next">
    <div class="toilet-next__container">
      <div class="arrow-right" @click="onClick"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toilet-forward',
  methods: {
    onClick() {
      this.$emit('onClickCallback', this.sliderValue);
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
