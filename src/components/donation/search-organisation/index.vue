<template>
  <article class="hamster__donation-input">
    <div class="hamster-donate-input-container">
      <input
        v-model="searchValue"
        @change="onChangeSliderValue"
        v-on:keyup.enter="onChangeSliderValue"
        placeholder='Search ...'>
    </div>
  </article>
</template>

<script>

export default {
  name: 'stock-pile-slider',
  components: {
  },
  methods: {
    onChangeSliderValue() {
      this.$emit('callback', this.searchValue);
    },
  },
  data() {
    return {
      searchValue: '',
    };
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
