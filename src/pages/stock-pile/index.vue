<template>
  <div class="stock-wrapper">
    <div v-if="this.currentStep === 0">
      <stock-household-adults-container
        @callbackNext="inputDataCallback"
        @callbackBack="navigateBack">
      </stock-household-adults-container>
    </div>
    <div v-if="this.currentStep === 1">
      <stock-household-kids-container
        @callbackNext="inputDataCallback"
        @callbackBack="navigateBack">
      </stock-household-kids-container>
    </div>
    <div v-if="this.currentStep === 2">
      <stock-quarantine-container
        @callbackNext="inputDataCallback"
        @callbackBack="navigateBack">
      </stock-quarantine-container>
    </div>
    <div v-if="this.currentStep === 3">
      <stock-list-container
        @callbackNext="inputDataCallback"
        @callbackBack="navigateBack">
      </stock-list-container>
    </div>
  </div>
</template>

<script>
import StockHouseholdAdultsContainer from './../../components/stock-form/household-adults-container';
import StockHouseholdKidsContainer from './../../components/stock-form/household-kids-container';
import StockQuarantineContainer from './../../components/stock-form/quarantine-container';
import StockListContainer from './../../components/stock-form/list-container';

export default {
  name: 'stock-pile',
  components: {
    StockHouseholdAdultsContainer,
    StockHouseholdKidsContainer,
    StockQuarantineContainer,
    StockListContainer,
  },
  data() {
    return ({
      currentStep: 0,
      inputData: [
        {
          stepName: 'household-adult',
          value: undefined,
        },
        {
          stepName: 'household-kids',
          value: undefined,
        },
        {
          stepName: 'quarantine-length',
          value: undefined,
        },
        {
          stepName: 'stockList',
          category0: undefined,
          category1: undefined,
          category2: undefined,
          category3: undefined,
          category4: undefined,
          category5: undefined,
          category6: undefined,
          category7: undefined,
          category8: undefined,
          category9: undefined,
        },
      ],
    });
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
