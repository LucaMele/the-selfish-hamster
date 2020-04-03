<template>
  <div>
    <h1>{{$t("pages.home.title")}}</h1>
    <toilet-household-container></toilet-household-container>
    <toilet-next></toilet-next>
  </div>
</template>

<script>
import ToiletNext from './../../components/toilet-form/next';
import ToiletHouseholdContainer from './../../components/toilet-form/householdContainer';

export default {
  name: 'toilet-papers',
  components: {
    ToiletNext,
    ToiletHouseholdContainer,
  },
  // data() {
  //   return {
  //     msg: 'Welcome to Your Vue.js App',
  //   };
  // },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
