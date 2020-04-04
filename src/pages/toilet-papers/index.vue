<template>
  <div>
    <!-- <h1>{{$t("pages.home.title")}}</h1> -->
    <toilet-back></toilet-back>
    <toilet-household-container></toilet-household-container>
    <toilet-quarantine-container></toilet-quarantine-container>
    <toilet-next></toilet-next>
  </div>
</template>

<script>
import ToiletBack from './../../components/toilet-form/back';
import ToiletNext from './../../components/toilet-form/next';
import ToiletHouseholdContainer from './../../components/toilet-form/household-container';
import ToiletQuarantineContainer from './../../components/toilet-form/quarantine-container';

export default {
  name: 'toilet-papers',
  components: {
    ToiletBack,
    ToiletNext,
    ToiletHouseholdContainer,
    ToiletQuarantineContainer,
  },
  data() {
    return ({
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
    inputDataCallback(step, value) {
      let i = 0;
      while (i < this.inputData.length) {
        if (this.inputData[i].stepName === step) {
          this.inputData[i].value = value;
        }
        // eslint-disable-next-line no-plusplus
        i++;
      }
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
