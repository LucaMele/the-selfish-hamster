<template>
  <div class="hamster__toilet-household-container">
    <toilet-slider @callback="sliderValueCallback"></toilet-slider>
  </div>
</template>

<script>
import ToiletSlider from './../slider';

export default {
  name: 'toilet-household-container',
  components: {
    ToiletSlider,
  },
  data() {
    return ({
      sliderValue: undefined,
    });
  },
  methods: {
    sliderValueCallback(value) {
      this.sliderValue = value;
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
