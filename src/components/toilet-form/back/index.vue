<template>
  <div class="hamster__toilet-back">
    <div class="toilet-back__container">
      <div class="arrow-left">
        <img src="./../../../assets/back-arrow.svg"/>
      </div>
      <router-link to="/" class="toilet-back">Back</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toilet-back',
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
