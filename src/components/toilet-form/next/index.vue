<template>
  <article class="hamster__toilet-next">
    <div class="lower-bg">
      <button class="toilet-next-button" @click="onClick">
        <p>{{$t("pages.general.button.next")}}</p>
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
