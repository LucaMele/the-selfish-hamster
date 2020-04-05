<template>
  <article>
    <tr class="category-table-row">
      <td class="category-column">
        <p class="category">{{ category }}</p>
        <p class="sub-category">{{ subCategory }}</p>
      </td>
      <td class="stock-amount">
        <p class="amount">{{ this.amountValue }}</p>
        <p class="unit">{{ unit }}</p>
      </td>
      <!--td class="stock-column">
        <toilet-slider @callback="sliderValueCallback"></toilet-slider>
      </td> -->
    </tr>
  </article>
</template>

<script>
import ToiletSlider from './../../toilet-form/slider';

export default {
  name: 'stock-household-kids-container',
  props: ['category', 'subCategory', 'index', 'unit', 'amount1', 'amount2', 'amount3'],
  components: {
    ToiletSlider,
  },
  data() {
    return ({
      // currentAmountValue: undefined,
      sliderValue: undefined,
      amountValue: undefined,
    });
  },
  methods: {
    sliderValueCallback(value) {
      // this.currentAmountValue = this.inputValues[value - 1];
      this.sliderValue = value;

      this.$emit('callback', { value, index: this.index });
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
