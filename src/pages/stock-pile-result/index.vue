<template>
  <article>
    <div class="home-wrapper">
      <div>

        <div class="upper-container">
          <img :onload="(event) => { console.log(event) }" :src="getImgUrl(hamsterType)"/>
        </div>

        <div class="center-container">
          <div class="greetings-box center-bg">
            <span class="greeting-text">
              <div v-bind:class="'result-stockpile result-stockpile--' + hamsterType">
                <div>
                  {{$t("pages.result.stockpile.text."+hamsterType+".title")}}
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>

      <div class="lower-container">
        <div class="lower-bg">
          <p>
            {{$t("pages.result.stockpile.text."+hamsterType+".subtitle")}}
          </p>
          <button class="button-2-1">
            <router-link to="/donation">{{$t("pages.home.donateButton")}}
            </router-link>
          </button>
          <button class="button-2-2">
            <router-link to="/">{{$t("pages.result.button.home")}}
            </router-link>
          </button>
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
          const estimationValues = [];
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
            estimationValues.push(value);
          }
          // eslint-disable-next-line no-console
          console.log('estimationValues ', JSON.stringify(estimationValues));
          this.$set(this, 'estimationValues', estimationValues);

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
