<template>
  <article>
    <navigation></navigation>
    <div class="hamster__paper-quantity-container">
      <div class="back-wrapper">
        <toilet-back @onClickCallback="onBackCallback"></toilet-back>
      </div>
      <div class="paper-wrapper">
        <img src="./../../../assets/paper.svg">
        <p class="roll-question">{{$t("pages.roll.question")}}</p>
        <div class="hamster__container-no-background">
          <div class="btn-group-upper">
            <div class="option1">
              <p class="option-title">{{$t("pages.paper.options.option1.title")}}</p>
              <p class="option-subtitle">{{$t("pages.paper.options.option1.subtitle")}}</p>
            </div>
            <div class="option2">
              <p class="option-title">{{$t("pages.paper.options.option2.title")}}</p>
              <p class="option-subtitle">{{$t("pages.paper.options.option2.subtitle")}}</p>
            </div>
          </div>
          <div class="btn-group-lower">
            <div class="option3">
              <p class="option-title">{{$t("pages.paper.options.option3.title")}}</p>
              <p class="option-subtitle">{{$t("pages.paper.options.option3.subtitle")}}</p>
            </div>
            <div class="option4">
              <p class="option-title">{{$t("pages.paper.options.option4.title")}}</p>
              <p class="option-subtitle">{{$t("pages.paper.options.option4.subtitle")}}</p>
            </div>
          </div>
        </div>
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
import Navigation from './../../navigation';

export default {
  name: 'paper-quantity-container',
  components: {
    ToiletBack,
    ToiletNext,
    Navigation,
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
