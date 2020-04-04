<template>
  <article class="hamster__navigation">
     <div class="menu-icon" @click='toggle = !toggle'>
        <img src="./../../assets/menu.svg" />
     </div>
     <div class="overlay" v-show='toggle'>
         <div class="menu-icon" @click='toggle = !toggle'>
            <img src="./../../assets/close.svg" />
         </div>
         <div class="menulist">
            <ul>
               <li @click='toggle = !toggle'>
                 <router-link to="/">
                    {{$t("pages.navigation.home")}}
                 </router-link>
               </li>
               <li @click='toggle = !toggle'>
                 <router-link to="/toilet-papers">
                    {{$t("pages.navigation.toiletPaper")}}
                 </router-link>
                </li>
               <li @click='toggle = !toggle'>
                 <router-link to="/stock-pile">
                    {{$t("pages.navigation.emergencyStock")}}
                 </router-link>
                 </li>
               <li @click='toggle = !toggle'>
                 <router-link to="/">
                    {{$t("pages.navigation.history")}}
                 </router-link>
               </li>
               <li @click='toggle = !toggle'>
                 <router-link to="/about">
                    {{$t("pages.navigation.about")}}
                 </router-link>
               </li>
               <li><local-changer class="language-switcher"></local-changer></li>
            </ul>
        </div>
     </div>
  </article>
</template>

<script>
import LocalChanger from './../locale';

export default {
  name: 'navigation',
  components: {
    LocalChanger,
  },
  data() {
    return {
      toggle: false,
    };
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
