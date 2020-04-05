<template>
  <article>
    <p>Test</p>
    <div class="home-wrapper">
      <div>
        <div class="lower-container">
          <div class="result-box">
          </div>
          <div class="lower-bg">
            <p>Test</p>
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
  methods: {
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
