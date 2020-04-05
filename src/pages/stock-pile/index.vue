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
import StockListContainer from './../../components/stock-form/list';
// import HamsterService from './../../services/HamsterService';

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
  methods: {
    inputDataCallback(value) {
      this.inputData[this.currentStep].value = value;
      // eslint-disable-next-line no-plusplus
      this.currentStep++;

      // we have number of household, we dont need more to create profile
      if (this.currentStep === 1) {
        // HamsterService.createProfile(value)
        //   .then(
        //     ((data) => {
        //       // eslint-disable-next-line no-console
        //       console.log('# set profileId', data.id);
        //       this.$set(this, 'profileId', data.id);
        //     }),
        //   );
      }

      if (this.currentStep === 2) {
        // // eslint-disable-next-line no-console
        // console.log('# set durationQuarantineInDays', value);
        // this.$set(this, 'durationQuarantineInDays', value);
      }
      if (this.currentStep === 3) {
        // // eslint-disable-next-line no-console
        // console.log('# set nofToiletRolls', value);
        // this.$set(this, 'nofToiletRolls', value);
      }
      // if (this.currentStep === 4) {
      //   // eslint-disable-next-line no-console
      //   console.log('# set nofSheetsPerUse', value);
      //   this.$set(this, 'nofSheetsPerUse', value);
      //   HamsterService.createQuestions(this.profileId,
      //     this.durationQuarantineInDays,
      //     this.nofToiletRolls,
      //     this.nofSheetsPerUse)
      //     .then(
      //       ((data) => {
      //         // eslint-disable-next-line no-console
      //         console.log('# set questionId', data.id);
      //         this.$set(this, 'questionId', data.id);
      //         this.$router.push(
      //           { name: 'toilet-papers-result', params: { questionId: this.questionId } });
      //         HamsterService.getAnswer(this.questionId)
      //           .then(
      //             ((answers) => {
      //               this.$set(this, 'nofUsagesPerPerson', answers.nofUsagesPerPerson);
      //               this.$set(this, 'usagePerDay', answers.usagePerDay);
      //               this.$set(this, 'usagePerQuarantine', answers.usagePerQuarantine);
      //               this.$set(this, 'waterConsumption', answers.waterConsumption);
      //               this.$set(this, 'woodConsumption', answers.woodConsumption);
      //               this.$set(this, 'hamsterType', answers.hamsterType);
      //             }),
      //           );
      //       }),
      //     );
      // }
    },
    navigateBack() {
      if (this.currentStep === 0) {
        this.$router.push('/');
      }

      // eslint-disable-next-line no-plusplus
      this.currentStep--;
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
