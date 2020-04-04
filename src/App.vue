<template>
  <article class="home-wrapper">
    <locale-changer></locale-changer>
    <router-view/>
    <div v-if="this.$route.path === '/'">
      <div class="hamster">
        <div class="hamster-title">
          <img src="./assets/hamster-title-screen.svg"/>
        </div>
      </div>
      <!-- TODO: Components -->
      <div class="lower-container">
        <div class="greetings-box">
          <p id="greeting-text">{{$t("pages.home.greeting")}}</p>
        </div>
        <div class="lower-bg">
          <p>{{$t("pages.home.test")}}</p>
          <button class="toilet-button">
            <router-link to="/toilet-papers">{{$t("pages.home.toiletButton")}}
            </router-link>
          </button>
          <button class="stockpile-button">
            <router-link to="/stock-pile">{{$t("pages.home.stockpileButton")}}
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import LocaleChanger from './components/locale';

export default {
  components: {
    LocaleChanger,
  },
  name: 'App',
};
</script>

<style lang="scss">
  @import "./app.scss";
</style>
