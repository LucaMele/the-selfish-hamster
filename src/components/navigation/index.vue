<template>
  <article class="hamster__navigation">
    <p>huhu</p>
    <local-changer></local-changer>
  </article>
</template>

<script>
import LocalChanger from './../locale';

export default {
  name: 'navigation',
  components: {
    LocalChanger,
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
