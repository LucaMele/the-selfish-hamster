<template>
  <article class="hamster__toilet-next">
    <div class="toilet-next__container">
      <button @click="onClick">
        <p class="toilet-next">{{$t("pages.general.button.next")}}</p>
        <div class="arrow-right">
          <img src="./../../../assets/next-arrow.svg"/>
        </div>
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'toilet-forward',
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
