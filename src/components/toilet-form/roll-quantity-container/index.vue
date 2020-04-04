<template>
  <article>
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="household-wrapper">
      <img src="./../../../assets/🚽.png">
      <p class="household-question">{{$t("pages.household.question")}}</p>
      <div class="hamster__toilet-household-container">
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

export default {
  name: 'roll-quantity-container',
  components: {
    ToiletBack,
    ToiletNext,
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
