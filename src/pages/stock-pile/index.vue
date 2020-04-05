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
    });
  },
  methods: {
    inputDataCallback(value) {
      this.inputData[this.currentStep].value = value;
      // eslint-disable-next-line no-plusplus
      this.currentStep++;

      if (this.currentStep === 1) {
        // // eslint-disable-next-line no-console
        console.log('# set nofAdults', value);
        this.$set(this, 'nofAdults', value);
      }

      if (this.currentStep === 2) {
        // // eslint-disable-next-line no-console
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
            this.$router.push({ name: 'stock-pile-result', params: { questionId: this.questionId } });
          }),
          );
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
