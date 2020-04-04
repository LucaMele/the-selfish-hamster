<template>
      <!-- <h1>{{$t("pages.home.title")}}</h1> -->
      <div class="toilet-wrapper">
        <div v-if="this.currentStep === 'household'">
          <toilet-household-container
            @callbackNext="inputDataCallback"
            @callbackBack="navigateBack">
          </toilet-household-container>
        </div>
        <div v-if="this.currentStep === 'quarantine-length'">
          <toilet-quarantine-container
            @callbackNext="inputDataCallback"
            @callbackBack="navigateBack">
          </toilet-quarantine-container>
        </div>
      </div>
</template>

<script>
import ToiletHouseholdContainer from './../../components/toilet-form/household-container';
import ToiletQuarantineContainer from './../../services/toilet-form/quarantine-container';
import HamsterService from '@/services/HamsterService.js';

export default {
  name: 'toilet-papers',
  components: {
    ToiletHouseholdContainer,
    ToiletQuarantineContainer,
  },
  data() {
    return ({
      currentStep: 'household',
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
      profileId: "",
      questionId : "",
      nofUsagesPerPerson : "",
      usagePerDay : "",
      usagePerQuarantine : "",
      waterConsumption : ""
    });
  },
  created() {
    this.postData();
  },
  methods: {
    async postData() {
      HamsterService.postData(this.currentStep, this.inputData, this.profileId, this.questionId)
        .then(
          (data => {
            if (this.currentStep === "household") {
              this.$set(this, "profileId", data._id);
            }
            if (this.currentStep === "poop-style") {
              this.$set(this, "questionId", data.questionId);
            }
            if (this.currentStep === "results") {
              this.$set(this, "nofUsagesPerPerson", data.nofUsagesPerPerson);
              this.$set(this,   "usagePerDay", data.usagePerDay);
              this.$set(this,  "usagePerQuarantine", data.usagePerQuarantine);

              this.$set(this,   "waterConsumption", data.waterConsumption);
              this.$set(this,  "woodConsumption", data.woodConsumption);
              this.$set(this,  "hamsterType", data.hamsterType);
            }

          }).bind(this)
        );
    },
    inputDataCallback(value) {
      let i = 0;
      while (i < this.inputData.length) {
        if (this.inputData[i].stepName === this.currentStep) {
          this.inputData[i].value = value;
        }
        // eslint-disable-next-line no-plusplus
        i++;
      }
      this.currentStep = this.inputData[1].stepName;
    },
    navigateBack() {
      this.currentStep = this.inputData[0].stepName;
    },
    calculateOutput() {
      // TODO: implement calculation API call

      let mockData = {
        currentStep: 'household',
          inputData: [
        {
          stepName: 'household',
          value: undefined,
        },
        {
          stepName: 'quarantine-length',
          value: undefined,
        },
      ],
      };





    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
