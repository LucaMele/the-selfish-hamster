<template>
  <div class="hamster__toilet-quarantine-container">
    <navigation></navigation>
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="quarantine-wrapper">
      <img src="./../../../assets/quarantine.svg">
      <p class="household-question">{{$t("pages.quarantine.question")}}</p>
      <div class="hamster__container">
      </div>
    </div>
    <div class="next-wrapper">
      <toilet-next @onClickCallback="onNextCallback"></toilet-next>
    </div>
  </div>
</template>

<script>
import ToiletBack from './../back';
import ToiletNext from './../next';
import Navigation from './../../navigation';

export default {
  name: 'toilet-quarantine-container',
  components: {
    ToiletBack,
    ToiletNext,
    Navigation,
  },
  data() {
    return ({
      selectedOption: undefined,
    });
  },
  methods: {
    onOptionSelected(option) {
      this.selectedOption = option;
    },
    onNextCallback() {
      this.$emit('callbackNext', this.selectedOption);
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
