<template>
  <article>
    <navigation></navigation>
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="step-wrapper">
      <img src="./../../../assets/household.svg">
      <p class="household-question">{{$t("pages.household.kidsQuestion")}}</p>
      <div class="hamster__container">
        <kids-slider @callback="sliderValueCallback"></kids-slider>
      </div>
    </div>
    <div class="next-wrapper">
      <toilet-next @onClickCallback="onNextCallback"></toilet-next>
    </div>
  </article>
</template>

<script>
import ToiletBack from './../../toilet-form/back';
import ToiletNext from './../../toilet-form/next';
import KidsSlider from './../../stock-form/kids-slider';
import Navigation from './../../navigation';

export default {
  name: 'stock-household-kids-container',
  components: {
    ToiletBack,
    ToiletNext,
    KidsSlider,
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
