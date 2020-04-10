<template>
  <article class="hamster__donation-input">
    <div class="hamster-donate-input-container">
      <input
        v-model="searchValue"
        v-on:keyup.enter="onChangeSliderValue"
        :placeholder="$t('pages.stockPile.donate.zip')">
      <div class='search-button-wrapper'>
        <button @click="onClick">
          <p class="donation-search">{{$t("pages.general.button.search")}}</p>
          <div class="arrow-right">
            <img src="./../../../assets/next-arrow.svg"/>
          </div>
        </button>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: 'stock-pile-slider',
  components: {
  },
  methods: {
    onClick() {
      this.$emit('callback', this.searchValue);
    },
  },
  data() {
    return {
      searchValue: '8000',
    };
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
