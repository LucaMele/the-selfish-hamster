<template>
  <article>
    <navigation></navigation>
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="table-wrapper">
      <p class="table-question">
        TEXT
      </p>
      <div class="hamster__container">
        <table>
          <thead>
            <th>Category</th>
            <th>My Emergency Stock</th>
          </thead>
          <tbody v-for="item in estimationValues" v-bind:key="item.index">
            <table-row
              v-bind:category="item.text" v-bind:index="item.index">
            </table-row>
          </tbody>
        </table>
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
import Navigation from './../../navigation';
import TableRow from './../table-row';

export default {
  name: 'stock-household-kids-container',
  props: ['estimationValues'],
  components: {
    ToiletBack,
    ToiletNext,
    Navigation,
    TableRow,
  },
  data() {
    return ({
      outputData: [
        {
          value: undefined,
        },
        {
          value: undefined,
        },
        {
          value: undefined,
        },
        {
          value: undefined,
        },
        {
          value: undefined,
        },
        {
          value: undefined,
        },
        {
          value: undefined,
        },
        {
          value: undefined,
        },
        {
          value: undefined,
        },
        {
          value: undefined,
        },
      ],
    });
  },
  methods: {
    sliderValueCallback(value, index) {
      this.outputData[index].value = value;
    },
    onNextCallback() {
      this.$emit('callbackNext', this.outputData);
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
