<template>
  <article>
    <div class="home-wrapper">
      <div>
        <div class="hamster">
          <div class="hamster-title-stock-pile">
            <img :src="getImgUrl(hamsterType)"/>
          </div>
        </div>
        <div class="lower-container">
          <div class="result-box">
            <div v-bind:class="'result-stockpile result-stockpile--' + hamsterType">
              <div v-if="hamsterType === 'above-average'">
                {{$t("pages.result.stockpile.text.above_average")}}
              </div>
              <div v-if="hamsterType === 'average'">
                {{$t("pages.result.stockpile.text.average")}}
              </div>
              <div v-if="hamsterType === 'below-average'">
                {{$t("pages.result.stockpile.text.below_average")}}
              </div>
            </div>
          </div>
          <div class="lower-bg">
            <button class="result-donate-button">
              <router-link to="/donation">{{$t("pages.result.button.donate")}}
              </router-link>
            </button>
            <button class="home-button">
              <router-link to="/">{{$t("pages.result.button.home")}}
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import HamsterService from './../../services/HamsterService';

export default {
  name: 'stock-pile-result',
  components: {},
  data() {
    return ({

      // user interacting with component
      // all slider are in position 2, every slider change
      // has a callback() and change its value here
      category0: 2,
      category1: 2,
      category2: 2,
      category3: 2,
      category4: 2,
      category5: 2,
      category6: 2,
      category7: 2,
      category8: 2,
      category9: 2,

      // returned by backend on component mount
      estimationValues: [],
      hamsterType: '',
    });
  },
  created() {
    // call once at creation of component
    HamsterService.getEmergencyStockAnswer(this.$route.params.questionId)
      .then(
        ((answers) => {
          const categories = answers.categories;
          // eslint-disable-next-line no-restricted-syntax
          for (const category of categories) {
            const value = [];
            const estimatesPerQuarantineInDays = category.estimatesPerQuarantineInDays;
            value.push(
              {
                text: category.text,
                helptext: category.helpText,
                unit: category.unit,
                1: estimatesPerQuarantineInDays['1'],
                2: estimatesPerQuarantineInDays['2'],
                3: estimatesPerQuarantineInDays['3'],
              });
            this.estimationValues.push(value);
          }
          // eslint-disable-next-line no-console
          console.log('estimationValues ', JSON.stringify(this.estimationValues));

          // eslint-disable-next-line prefer-template
          this.$set(this, 'hamsterType', answers.hamsterType);
        }),
      );
  },
  methods: {
    getImgUrl(pet) {
      // eslint-disable-next-line no-var
      var images = require.context('./../../assets/hamster/', false, /\.svg$/);
      // eslint-disable-next-line prefer-template
      return images('./' + pet + '.svg');
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
