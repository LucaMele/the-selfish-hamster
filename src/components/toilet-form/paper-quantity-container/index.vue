<template>
  <article>
    <navigation></navigation>
    <div class="hamster__paper-quantity-container">
      <div class="back-wrapper">
        <toilet-back @onClickCallback="onBackCallback"></toilet-back>
      </div>
      <div class="paper-wrapper">
        <img src="./../../../assets/paper.svg">
        <p class="paper-question">{{$t("pages.paper.question")}}</p>
        <div class="hamster__container-no-background">
          <div class="btn-group-upper">
            <div v-bind:class="option1Class" v-on:click="onOptionSelected(0, 1)">
              <p class="option-title">{{$t("pages.paper.options.option1.title")}}</p>
              <p class="option-subtitle">{{$t("pages.paper.options.option1.subtitle")}}</p>
            </div>
            <div v-bind:class="option2Class" v-on:click="onOptionSelected(20, 2)">
              <p class="option-title">{{$t("pages.paper.options.option2.title")}}</p>
              <p class="option-subtitle">{{$t("pages.paper.options.option2.subtitle")}}</p>
            </div>
          </div>
          <div class="btn-group-lower">
            <div v-bind:class="option3Class" v-on:click="onOptionSelected(100, 3)">
              <p class="option-title">{{$t("pages.paper.options.option3.title")}}</p>
              <p class="option-subtitle">{{$t("pages.paper.options.option3.subtitle")}}</p>
            </div>
            <div v-bind:class="option4Class" v-on:click="onOptionSelected(200, 4)">
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
  data() {
    return ({
      selectedOption: undefined,
      option1Class: 'option1',
      option2Class: 'option2',
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
