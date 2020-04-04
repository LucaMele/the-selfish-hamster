<template>
  <body>
    <article class="hamster">
      <locale-changer></locale-changer>
      <!-- <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/stock-pile">Go to Stock Pile</router-link></li>
          <li><router-link to="/toilet-papers">Go to Toilet Papers</router-link></li>
        </ul>
      </nav> -->
      <router-view/>
      <div class="hamster-title">
        <img src="./assets/hamster-title-screen.svg"/>
      </div>
    </article>
    <div class="lower-container">
      <div class="greetings-box">
        <p id="greeting-text">{{$t("pages.home.greeting")}}</p>
      </div>
      <div class="lower-bg"></div>
    </div>
  </body>
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
