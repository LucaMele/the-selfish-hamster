<template>
  <div class="hamster__toilet-slider">
    <div class="toilet-slider__slider">
      <vue-slider
        v-model="value"
        v-bind="options"
        v-on:change="onChangeSliderValue">
      </vue-slider>
      <p>{{ value }}</p>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'toilet-slider',
  components: {
    VueSlider,
  },
  methods: {
    onChangeSliderValue() {
      this.$emit('callback', this.value);
    },
  },
  data() {
    return {
      value: 5,
      options: {
        min: 1,
        max: 10,
      },
    };
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
