<template>
  <div class="hamster__toilet-quarantine-container">
    <navigation></navigation>
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="step-wrapper">
      <img src="./../../../assets/quarantine.svg">
      <p class="quarantine-question">{{$t("pages.quarantine.question")}}</p>
      <div class="hamster__container-no-background">
        <div class="btn-group-upper">
          <div v-bind:class="option1Class" v-on:click="onOptionSelected(10, 1)">
            <p class="option-title-single">{{$t("pages.quarantine.options.option1")}}</p>
          </div>
          <div v-bind:class="option2Class" v-on:click="onOptionSelected(25, 2)">
            <p class="option-title-single">{{$t("pages.quarantine.options.option2")}}</p>
          </div>
        </div>
        <div class="btn-group-lower">
          <div v-bind:class="option3Class" v-on:click="onOptionSelected(35, 3)">
            <p class="option-title-single">{{$t("pages.quarantine.options.option3")}}</p>
          </div>
          <div v-bind:class="option4Class" v-on:click="onOptionSelected(50, 4)">
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
      selectedOption: 2,
      option1Class: 'option1',
      option2Class: 'option2selected',
      option3Class: 'option3',
      option4Class: 'option4',
    });
  },
  methods: {
    onOptionSelected(option, selectedOption) {
      this.selectedOption = option;

      if (selectedOption === 1) {
        this.option1Class = 'option1selected';
        this.option2Class = 'option2';
        this.option3Class = 'option3';
        this.option4Class = 'option4';
      } else if (selectedOption === 2) {
        this.option1Class = 'option1';
        this.option2Class = 'option2selected';
        this.option3Class = 'option3';
        this.option4Class = 'option4';
      } else if (selectedOption === 3) {
        this.option1Class = 'option1';
        this.option2Class = 'option2';
        this.option3Class = 'option3selected';
        this.option4Class = 'option4';
      } else if (selectedOption === 4) {
        this.option1Class = 'option1';
        this.option2Class = 'option2';
        this.option3Class = 'option3';
        this.option4Class = 'option4selected';
      }
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
