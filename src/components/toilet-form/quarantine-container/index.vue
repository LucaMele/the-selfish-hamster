<template>
  <div class="hamster__toilet-quarantine-container">
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="quarantine-wrapper">
    </div>
    <div class="next-wrapper">
      <toilet-next @onClickCallback="onNextCallback"></toilet-next>
    </div>
  </div>
</template>

<script>
import ToiletBack from './../back';
import ToiletNext from './../next';

export default {
  name: 'toilet-quarantine-container',
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
