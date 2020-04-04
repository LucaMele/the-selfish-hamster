<template>
  <div class="hamster__toilet-quarantine-container">
    <navigation></navigation>
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="quarantine-wrapper">
      <img src="./../../../assets/quarantine.svg">
      <p class="quarantine-question">{{$t("pages.quarantine.question")}}</p>
      <div class="hamster__container-no-background">
        <div class="btn-group-upper">
          <div class="option1" v-on:click="onOptionSelected(10)">
            <p class="option-title-single">{{$t("pages.quarantine.options.option1")}}</p>
          </div>
          <div class="option2" v-on:click="onOptionSelected(25)">
            <p class="option-title-single">{{$t("pages.quarantine.options.option2")}}</p>
          </div>
        </div>
        <div class="btn-group-lower">
          <div class="option3" v-on:click="onOptionSelected(35)">
            <p class="option-title-single">{{$t("pages.quarantine.options.option3")}}</p>
          </div>
          <div class="option4" v-on:click="onOptionSelected(50)">
            <p class="option-title-single">{{$t("pages.quarantine.options.option4")}}</p>
          </div>
        </div>
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
