<template>
  <div>
    <h1>{{$t("pages.home.title")}}</h1>
    <toilet-slider></toilet-slider>
    <toilet-next></toilet-next>
  </div>
</template>

<script>
import ToiletNext from './../../components/toilet-form/next';
import ToiletSlider from './../../components/toilet-form/slider';

export default {
  name: 'toilet-papers',
  components: {
    ToiletNext,
    ToiletSlider,
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
