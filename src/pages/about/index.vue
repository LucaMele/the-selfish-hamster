<template>
  <article>
    <div>
      <div class="about-hamster-text-wrapper">
        <p class="about-hamster-text">
          {{$t("pages.about.text")}}
        </p>
      </div>
      <div class="about-hamster-wrapper-average">
        <img src="./../../assets/hamster/average.svg">
      </div>
      <div class="about-hamster-wrapper-above-average">
        <img src="./../../assets/hamster/above-average.svg">
      </div>
      <div class="about-hamster-wrapper-below-average">
        <img src="./../../assets/hamster/below-average.svg">
      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: 'about',
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
