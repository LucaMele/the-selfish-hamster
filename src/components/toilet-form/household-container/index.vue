<template>
  <article>
    <navigation></navigation>
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="step-wrapper">
      <img src="./../../../assets/household.svg">
      <p class="toilet_question">{{$t("pages.household.question")}}</p>
      <div class="hamster__container">
        <toilet-slider @callback="sliderValueCallback"></toilet-slider>
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
import ToiletSlider from './../slider';
import Navigation from './../../navigation';

export default {
  name: 'toilet-household-container',
  components: {
    ToiletBack,
    ToiletNext,
    ToiletSlider,
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
