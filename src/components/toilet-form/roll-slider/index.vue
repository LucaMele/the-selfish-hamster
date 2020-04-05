<template>
  <article class="hamster__roll-slider">
    <div class="roll-slider__slider">
      <p id="roll-value">{{ value }}</p>
      <p id="roll-value-scaled">
        {{ value }} {{$t("pages.roll.packs")}} {{ valueScaled }} {{$t("pages.roll.rolls")}}
      </p>
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
  name: 'roll-slider',
  components: {
    VueSlider,
  },
  methods: {
    onChangeSliderValue() {
      this.valueScaled = this.value * 12;
      this.$emit('callback', this.value);
    },
  },
  data() {
    return {
      value: 2,
      valueScaled: 60,
      options: {
        min: 1,
        max: 10,
      },
    };
  },
  mounted() {
    this.valueScaled = this.value * 12;
    this.$emit('callback', this.value);
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
