import Vue from 'vue';
import Router from 'vue-router';
import ToiletPapers from '@/pages/toilet-papers';
import StockPile from '@/pages/stock-pile';
import About from '@/pages/about';
import ToiletPapersResult from '@/pages/toilet-papers-result';
import StockPileResult from '@/pages/stock-pile-result';

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
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/toilet-papers-result/:questionId',
      name: 'toilet-papers-result',
      component: ToiletPapersResult,
    },
    {
      path: '/stock-pile-result/:questionId',
      name: 'stock-pile-result',
      component: StockPileResult,
    },
  ],
});
