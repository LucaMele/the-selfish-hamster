<template>
  <article class="hamster__stock-pile-slider">
    <div class="stock-pile-slider__slider">
      <p class="slider-value">{{ value }}</p>
      <vue-slider
        v-model="value"
        v-bind="options"
        v-on:change="onChangeSliderValue">
      </vue-slider>
    </div>
  </article>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'stock-pile-slider',
  props: ['minValue', 'maxValue'],
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
      value: 2,
      options: {
        min: 1,
        max: 3,
      },
    };
  },
  created() {
    this.options.min = this.minValue;
    this.options.max = this.maxValue;
  },
  mounted() {
    this.$emit('callback', this.value);
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
