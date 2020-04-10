<template>
  <article>
    <navigation></navigation>
    <router-view/>
    <div class="home-wrapper" v-if="this.$route.path === '/'">
      <div>
        <div class="upper-container">
          <img :onload="(event) => { console.log(event) }" :src="getImgUrl('home')"/>
        </div>

        <div class="center-container">
          <div class="greetings-box center-bg">
            <span class="greeting-text">
              <div>{{$t("pages.home.greeting")}}</div>
            </span>
          </div>
        </div>

        <div class="lower-container">
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
            <button class="donate-button">
              <router-link to="/donation">{{$t("pages.home.donateButton")}}
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Navigation from './components/navigation';

export default {
  components: {
    Navigation,
  },
  name: 'App',
  methods: {
    getImgUrl(pet) {
      // eslint-disable-next-line no-var
      var images = require.context('./assets/hamster/', false, /\.svg$/);
      // eslint-disable-next-line prefer-template
      return images('./' + pet + '.svg');
    },
  },
};
</script>

<style lang="scss">
  @import "./app.scss";
</style>
