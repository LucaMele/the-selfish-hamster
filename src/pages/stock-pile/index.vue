<template>
  <div class="stock-wrapper">
    <div v-if="this.currentStep === 0">
      <stock-household-container
        @callbackNext="inputDataCallback"
        @callbackBack="navigateBack">
      </stock-household-container>
    </div>
    <div v-if="this.currentStep === 1">
      <stock-quarantine-container
        @callbackNext="inputDataCallback"
        @callbackBack="navigateBack">
      </stock-quarantine-container>
    </div>
    <div v-if="this.currentStep === 2">
      <stock-list-container
        @callbackNext="inputDataCallback"
        @callbackBack="navigateBack">
      </stock-list-container>
    </div>
  </div>
</template>

<script>
import StockHouseholdContainer from './../../components/stock-form/household-container';
import StockQuarantineContainer from './../../components/stock-form/quarantine-container';
import StockListContainer from './../../components/stock-form/list-container';

export default {
  name: 'stock-pile',
  components: {
    StockHouseholdContainer,
    StockQuarantineContainer,
    StockListContainer,
  },
  data() {
    return ({
      currentStep: 0,
      inputData: [
        {
          stepName: 'household',
          valueKid: undefined,
          valueAdult: undefined,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
  @import "./index.scss";
</style>
