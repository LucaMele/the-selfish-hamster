<template>
  <article>
    <div class="hamster__paper-quantity-container">
      <div class="back-wrapper">
        <toilet-back @onClickCallback="onBackCallback"></toilet-back>
      </div>
      <div class="paper-wrapper">
      </div>
      <div class="next-wrapper">
        <toilet-next @onClickCallback="onNextCallback"></toilet-next>
      </div>
    </div>
  </article>
</template>

<script>
import ToiletBack from './../back';
import ToiletNext from './../next';

export default {
  name: 'paper-quantity-container',
  components: {
    ToiletBack,
    ToiletNext,
  },
  methods: {
    onNextCallback() {
      this.$emit('callbackNext', this.sliderValue);
    },
    onBackCallback() {
      this.$emit('callbackBack');
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
