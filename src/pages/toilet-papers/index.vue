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
      ],
    });
  },
  methods: {
    inputDataCallback(value) {
      this.inputData[this.currentStep].value = value;
      // eslint-disable-next-line no-plusplus
      this.currentStep++;

      // if (this.currentStep === this.inputData.length) {
      //   this.calculateOutput();
      // }
    },
    navigateBack() {
      if (this.currentStep === 0) {
        this.$router.push('/');
      }

      // eslint-disable-next-line no-plusplus
      this.currentStep--;
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
