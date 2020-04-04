<template>
  <div class="toilet-page-container">
    <!-- <h1>{{$t("pages.home.title")}}</h1> -->
    <div>
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
  </div>
</template>

<script>
import ToiletHouseholdContainer from './../../components/toilet-form/household-container';
import ToiletQuarantineContainer from './../../components/toilet-form/quarantine-container';

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
      ],
    });
  },
  methods: {
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
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
