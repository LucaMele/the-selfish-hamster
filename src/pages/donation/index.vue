<template>
  <article>
    <div class="home-wrapper">
      <div>
        <div class="hamster">
          <div class="hamster-title">
            <img :src="getImgUrl(hamsterType)"/>
          </div>
        </div>
        <div class="lower-container">
          <div class="result-box">
            <div v-bind:class="'result-usage-per-day result-usage-per-day--' + hamsterType"></div>
          </div>
          <div class="lower-bg">
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import HamsterService from './../../services/HamsterService';

console.log(HamsterService);

export default {
  name: 'donation',
  components: {},
  data() {
    return ({
    });
  },
  created() {
  },
  methods: {
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
