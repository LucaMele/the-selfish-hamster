<template>
  <div class="hamster__navigation">
     <p>huhu</p>
      <locale-changer></locale-changer>
  </div>
</template>

<script>
import LocalChanger from './../locale';

export default {
  name: 'Navigation',
  components: {
    LocalChanger,
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
