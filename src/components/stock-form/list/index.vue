<template>
  <article>
    <navigation></navigation>
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="table-wrapper">
      <p class="table-question">{{$t("pages.stockPile.list.info1")}}<br>{{$t("pages.stockPile.list.info2")}}</p>
      <div class="hamster__container-no-bg__stock">
        <table class="table-container">
          <!--thead class="table-head">
            <th class="title-left">Category</th>
            <th class="title-right">My Emergency Stock</th>
          </thead-->
          <tbody class="table-body" v-for="item in estimationValues" v-bind:key="item.index">
            <table-row
              @callback="tableRowValueCallback"
              v-bind:category="item.text" v-bind:subCategory="item.helptext"
              v-bind:unit="item.unit" v-bind:amountOne="item.one" v-bind:amountTwo="item.two"
              v-bind:amountThree="item.three" v-bind:rowIndex="item.index">
            </table-row>
          </tbody>
        </table>
      </div>
    </div>
    <div class="next-wrapper-list">
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
  name: 'stock-list-container',
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
          value: '',
        },
        {
          value: '',
        },
        {
          value: '',
        },
        {
          value: '',
        },
        {
          value: '',
        },
        {
          value: '',
        },
        {
          value: '',
        },
        {
          value: '',
        },
        {
          value: '',
        },
        {
          value: '',
        },
      ],
    });
  },
  methods: {
    tableRowValueCallback({ value, index }) {
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
