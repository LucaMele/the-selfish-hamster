<template>
  <div>
    <h1>[Measure your toiletpaper supplies]</h1>
    <toilet-slider></toilet-slider>
  </div>
</template>

<script>
import Slider from '../../components/toilet-form';

export default {
  name: 'toilet-papers',
  components: {
    Slider,
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
