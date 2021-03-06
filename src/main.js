// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueGtag from 'vue-gtag';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';
import translations from './translations';

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(VueGtag, {
  config: { id: 'UA-88600-31' },
});

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en',
  messages: translations,
});

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '.js-hamster',
  router,
  components: { App },
  template: '<App/>',
});
