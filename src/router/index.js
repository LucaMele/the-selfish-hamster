import Vue from 'vue';
import Router from 'vue-router';
import ToiletPapers from '@/pages/toilet-papers';
import StockPile from '@/pages/stock-pile';
import Household from '@/pages/toilet-papers/questions/household';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/toilet-papers',
      name: 'toilet-papers',
      component: ToiletPapers,
    },
    {
      path: '/toilet-papers/questions',
      name: 'household',
      component: Household,
    },
    {
      path: '/stock-pile',
      name: 'stock-pile',
      component: StockPile,
    },
  ],
});
