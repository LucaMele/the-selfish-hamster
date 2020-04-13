<template>
  <article class="hamster__toilet-next">
    <div class="toilet-next__container">
      <div class="lower-container">
        <div class="lower-bg">
          <button class="button-2-1-half" @click="onClick">
            <router-link to="/toilet-papers">{{$t("pages.general.button.next")}}</router-link>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'toilet-next',
  methods: {
    onClick() {
      this.$emit('onClickCallback', this.sliderValue);
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
