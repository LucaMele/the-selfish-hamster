<template>
  <article class="hamster">
    <locale-changer></locale-changer>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/stock-pile">Go to Stock Pile</router-link></li>
        <li><router-link to="/toilet-papers">Go to Toilet Papers</router-link></li>
      </ul>
    </nav>
    <h1>{{$t("pages.home.hello")}}</h1>
    <router-view/>
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
