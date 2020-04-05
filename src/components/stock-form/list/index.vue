<template>
  <article>
    <navigation></navigation>
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="table-wrapper">
      <p class="table-question">{{$t("pages.stockPile.list.info")}}</p>
      <div class="hamster__container-no-bg">
        <table class="table-container">
          <thead class="table-head">
            <th>Category</th>
            <th>My Emergency Stock</th>
          </thead>
          <tbody class="table-body" v-for="item in estimationValues" v-bind:key="item.index">
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
  name: 'stock-list-container',
  // props: ['estimationValues'],
  components: {
    ToiletBack,
    ToiletNext,
    Navigation,
    TableRow,
  },
  data() {
    return ({
      // MOCK
      estimationValues: [
        { text: 'Fruit and vegetables', helptext: 'apple, onions, carrots, potatoes', unit: 'kg', 1: '3.0', 2: '12.1  ', 3: '24.2' },
        { text: 'Perishable Foods', helptext: 'eggs, butter, cheese, milk', unit: 'kg', 1: '3.0', 2: '12.1  ', 3: '24.2' },
        { text: 'Non-Perishable Food', helptext: 'pasta, pasta, oat, rice', unit: 'kg', 1: '3.0', 2: '12.1  ', 3: '24.2' },
        { text: 'Cannes Food', helptext: 'corn, tuna, tomatoes, erbsen', unit: 'kg', 1: '3.0', 2: '12.1  ', 3: '24.2' },
        { text: 'Frozen Food', helptext: 'vegetable, spinat, frozen bread, frozen meat', unit: 'kg', 1: '3.0', 2: '12.1  ', 3: '24.2' },
        { text: 'Meat Fish', helptext: 'Minced meat, Dauerwürste, Trockenfleisch', unit: 'kg', 1: '3.0', 2: '12.1  ', 3: '24.2' },
        { text: 'Pet Food', helptext: 'trockenfutter, dog, cats', unit: 'kg', 1: '3.0', 2: '12.1  ', 3: '24.2' },
        { text: 'Drinks', helptext: 'Coffeee, cacao, Wasser, tee', unit: 'kg', 1: '3.0', 2: '12.1  ', 3: '24.2' },
        { text: 'Cooking Support', helptext: 'olive Oil, pepper, salt, spices', unit: 'kg', 1: '3.0', 2: '12.1  ', 3: '24.2' },
        { text: 'Baby Food', helptext: 'baby milk, baby brei, soup', unit: 'kg', 1: '3.0', 2: '12.1  ', 3: '24.2' },
      ],
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
