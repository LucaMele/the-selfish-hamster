import Vue from 'vue';
import Router from 'vue-router';
import ToiletPapers from '@/pages/toilet-papers';
import StockPile from '@/pages/stock-pile';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/toilet-papers',
      name: 'toilet-papers',
      component: ToiletPapers,
    },
    {
      path: '/stock-pile',
      name: 'stock-pile',
      component: StockPile,
    },
  ],
});
