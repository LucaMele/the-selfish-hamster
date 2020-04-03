<template>
  <div>
    <h1>[How many persons live in your household]</h1>
    <vue-slider v-model="value"></vue-slider>
    <p>{{ value }}</p>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'household',
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 5,
      options: {
        min: 1,
        max: 10,
      },
    };
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
