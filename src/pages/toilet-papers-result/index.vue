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
              <p v-bind:class="'result-usage-per-day result-usage-per-day--' + hamsterType">
                {{ this.usagePerDay }}...
              </p>
            </span>
          </div>
        </div>

        <div class="lower-container">
          <div class="lower-bg">
            <p class="result-text">{{$t("pages.result.toiletpaper.text")}}</p>
            <div class="ressource-usage">
                <div class="ressource-usage-content">
                  <p> {{ this.waterConsumption }} {{$t("pages.result.usage.water")}}</p>
                </div>
              <div class="ressource-usage-content">
                <p>{{ this.woodConsumption }} {{$t("pages.result.usage.wood")}}</p>
              </div>
              <div class="ressource-usage-content">
                <p>{{$t("pages.result.usage.usedToProduce")}}</p>
              </div>
            </div>
            <button class="button-2-1">
              <router-link to="/stock-pile">{{$t("pages.result.button.stockpile")}}
              </router-link>
            </button>
            <button class="button-2-2">
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
  name: 'toilet-papers-result',
  components: {
  },
  data() {
    return ({
      // returned by backend
      nofUsagesPerPerson: '',
      usagePerDay: '',
      usagePerQuarantine: '',
      waterConsumption: '',
      woodConsumption: '',
      hamsterType: 'average',
    });
  },
  created() {
    HamsterService.getAnswer(this.$route.params.questionId)
      .then(
        ((answers) => {
          this.$set(this, 'nofUsagesPerPerson', answers.nofUsagesPerPerson);
          this.$set(this, 'usagePerDay', answers.usagePerDay);
          this.$set(this, 'usagePerQuarantine', answers.usagePerQuarantine);

          this.$set(this, 'waterConsumption', answers.waterConsumption.toFixed(0));
          this.$set(this, 'woodConsumption', answers.woodConsumption.toFixed(0));
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
