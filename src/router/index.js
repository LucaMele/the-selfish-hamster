import Vue from 'vue';
import Router from 'vue-router';
import ToiletPapers from '@/pages/ToiletPapers';
import StockPile from '@/pages/StockPile';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/toilet-papers',
      name: 'ToiletPapers',
      component: ToiletPapers,
    },
    {
      path: '/stock-pile',
      name: 'StockPile',
      component: StockPile,
    },
  ],
});
