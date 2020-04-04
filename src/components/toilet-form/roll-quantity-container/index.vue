<template>
  <article>
    <navigation></navigation>
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="household-wrapper">
      <img src="./../../../assets/rolls.svg">
      <p class="roll-question">{{$t("pages.roll.question")}}</p>
      <div class="hamster__roll-container">
        <roll-slider @callback="sliderValueCallback"></roll-slider>
      </div>
    </div>
    <div class="next-wrapper">
      <toilet-next @onClickCallback="onNextCallback"></toilet-next>
    </div>
  </article>
</template>

<script>
import ToiletBack from './../back';
import ToiletNext from './../next';
import RollSlider from './../roll-slider';
import Navigation from './../../navigation';

export default {
  name: 'roll-quantity-container',
  components: {
    ToiletBack,
    ToiletNext,
    RollSlider,
    Navigation,
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
