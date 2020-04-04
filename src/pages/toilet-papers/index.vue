<template>
  <!-- <h1>{{$t("pages.home.title")}}</h1> -->
  <div class="toilet-wrapper">
    <div v-if="this.currentStep === 0">
      <toilet-household-container
        @callbackNext="inputDataCallback"
        @callbackBack="navigateBack">
      </toilet-household-container>
    </div>
    <div v-if="this.currentStep === 1">
      <toilet-quarantine-container
        @callbackNext="inputDataCallback"
        @callbackBack="navigateBack">
      </toilet-quarantine-container>
    </div>
    <div v-if="this.currentStep === 2">
      <roll-quantity-container
        @callbackNext="inputDataCallback"
        @callbackBack="navigateBack">
      </roll-quantity-container>
    </div>
  </div>
</template>

<script>
import ToiletHouseholdContainer from './../../components/toilet-form/household-container';
import RollQuantityContainer from './../../components/toilet-form/roll-quantity-container';
import ToiletQuarantineContainer from './../../components/toilet-form/quarantine-container';
import HamsterService from './../../services/HamsterService';

export default {
  name: 'toilet-papers',
  components: {
    ToiletHouseholdContainer,
    ToiletQuarantineContainer,
    RollQuantityContainer,
  },
  data() {
    return ({
      currentStep: 0,
      inputData: [
        {
          stepName: 'household',
          value: undefined,
        },
        {
          stepName: 'quarantine-length',
          value: undefined,
        },
        {
          stepName: 'paper-stock',
          value: undefined,
        },
        {
          stepName: 'poop-style',
          value: undefined,
        },
        {
          stepName: 'results',
          value: undefined,
        },
      ],


      // entered by user
      durationQuarantineInDays: '',
      nofSheetsPerUse: '',
      nofToiletRolls: '',

      // returned by backend
      profileId: '',
      questionId: '',
      nofUsagesPerPerson: '',
      usagePerDay: '',
      usagePerQuarantine: '',
      waterConsumption: '',
    });
  },
  methods: {
    inputDataCallback(value) {
      this.inputData[this.currentStep].value = value;
      // eslint-disable-next-line no-plusplus
      this.currentStep++;

      // we have number of household, we dont need more to create profile
      if (this.currentStep === 1) {
        HamsterService.createProfile(value)
          .then(
            ((data) => {
              // update in data
              this.$set(this, 'profileId', data.id);
            }),
          );
      }

      if (this.currentStep === 2) {
        this.$set(this, 'durationQuarantineInDays', value);
      }
      if (this.currentStep === 3) {
        this.$set(this, 'nofToiletRolls', value);
      }
      if (this.currentStep === 4) {
        this.$set(this, 'nofSheetsPerUse', value);
        HamsterService.createQuestions(this.profileId,
          this.durationQuarantineInDays,
          this.nofToiletRolls,
          this.nofSheetsPerUse)
          .then(
            ((data) => {
              this.$set(this, 'questionId', data.id);
            }),
          );
      }

      if (this.currentStep === this.inputData.length) {
        HamsterService.getAnswer(this.questionId)
          .then(
            ((data) => {
              this.$set(this, 'nofUsagesPerPerson', data.nofUsagesPerPerson);
              this.$set(this, 'usagePerDay', data.usagePerDay);
              this.$set(this, 'usagePerQuarantine', data.usagePerQuarantine);

              this.$set(this, 'waterConsumption', data.waterConsumption);
              this.$set(this, 'woodConsumption', data.woodConsumption);
              this.$set(this, 'hamsterType', data.hamsterType);
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
