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
        @callbackBack="navigateBack"
        v-bind:estimationValues="estimationValues">
      </stock-list-container>
    </div>
  </div>
</template>

<script>
import StockHouseholdAdultsContainer from './../../components/stock-form/household-adults-container';
import StockHouseholdKidsContainer from './../../components/stock-form/household-kids-container';
import StockQuarantineContainer from './../../components/stock-form/quarantine-container';
import StockListContainer from './../../components/stock-form/list';
import HamsterService from './../../services/HamsterService';

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
          // all slider are in position 2, every slider change
          // has a callback and change its value here
          category0: 2,
          category1: 2,
          category2: 2,
          category3: 2,
          category4: 2,
          category5: 2,
          category6: 2,
          category7: 2,
          category8: 2,
          category9: 2,
        },
      ],
      // returned by backend
      profileId: 0,
      questionId: 0,

      // entered by user
      nofAdults: 0,
      nofKidsUnder12: 0,
      durationQuarantineInDays: 0,

      // Mock
      estimationValues: [
      ],
      hamsterType: 0,
    });
  },
  methods: {
    inputDataCallback(value) {
      this.inputData[this.currentStep].value = value;
      // eslint-disable-next-line no-plusplus
      this.currentStep++;

      if (this.currentStep === 1) {
        // eslint-disable-next-line no-console
        console.log('# set nofAdults', value);
        this.$set(this, 'nofAdults', value);
      }

      if (this.currentStep === 2) {
        // eslint-disable-next-line no-console
        console.log('# set nofKidsUnder12', value);
        this.$set(this, 'nofKidsUnder12', value);

        HamsterService.createFoodProfile(this.nofAdults, this.nofKidsUnder12)
          .then(((data) => {
            // eslint-disable-next-line no-console
            console.log('# set profileId', data.id);
            this.$set(this, 'profileId', data.id);
          }),
          );
      }
      if (this.currentStep === 3) {
        // make api call to get List informations, fill 'estimatedValues'
        // eslint-disable-next-line no-console
        console.log('# set durationQuarantineInDays', value);
        this.$set(this, 'durationQuarantineInDays', value);

        HamsterService.createEstimate(this.durationQuarantineInDays, this.profileId)
          .then(((data) => {
            // eslint-disable-next-line no-console
            console.log('# set questionId', data.id);
            this.$set(this, 'questionId', data.id);

            HamsterService.getEmergencyStockAnswer(this.questionId)
              .then(
                ((answers) => {
                  const categories = answers.categories;
                  // eslint-disable-next-line no-restricted-syntax
                  const estimationValues = [];
                  let valueIndex = 0;
                  // eslint-disable-next-line no-restricted-syntax
                  for (const category of categories) {
                    // eslint-disable-next-line no-shadow
                    let value = {};
                    const estimatesPerQuarantineInDays = category.estimatesPerQuarantineInDays;
                    value =
                      {
                        index: valueIndex,
                        text: category.text,
                        helptext: category.helpText,
                        unit: category.unit,
                        one: estimatesPerQuarantineInDays['1'].toFixed(0),
                        two: estimatesPerQuarantineInDays['2'].toFixed(0),
                        three: estimatesPerQuarantineInDays['3'].toFixed(0),
                      };
                    estimationValues.push(value);

                    // eslint-disable-next-line no-plusplus
                    valueIndex++;
                  }
                  // eslint-disable-next-line no-console
                  console.log('estimationValues ', JSON.stringify(estimationValues));
                  this.$set(this, 'estimationValues', estimationValues);

                  // eslint-disable-next-line prefer-template
                  this.$set(this, 'hamsterType', answers.hamsterType);
                }),
              );
          }),
          );
      }
      if (this.currentStep === 4) {
        this.$router.push({ name: 'stock-pile-result', params: { questionId: this.questionId } });
      }
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
