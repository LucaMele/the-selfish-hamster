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
               <li><a href="#">{{$t("pages.navigation.home")}}</a></li>
               <li><a href="#">{{$t("pages.navigation.home")}}</a></li>
               <li><a href="#">{{$t("pages.navigation.home")}}</a></li>
               <li><a href="#">{{$t("pages.navigation.home")}}</a></li>
               <li><a href="#">{{$t("pages.navigation.home")}}</a></li>
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
