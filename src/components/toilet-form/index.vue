<template>
  <div>
    <vue-slider v-model="value"></vue-slider>
    <p>{{ value }}</p>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'toilet-slider',
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
};
</script>
