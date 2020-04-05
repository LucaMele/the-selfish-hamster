<template>
  <article>
    <div class="home-wrapper">
      <div>
        <div class="lower-container">
          <img :src="getImgUrl(hamsterType)"/>
          <div class="result-box">
            <p v-bind:class="'result-usage-per-day result-usage-per-day--' + hamsterType">
              {{ this.usagePerDay }}...
            </p>
          </div>
          <div class="lower-bg">
            <p class="result-text">{{$t("pages.result.toiletpaper.text")}}</p>
            <div class="ressource-usage">
                <div class="ressource-usage-content">
                  <p>{{ this.waterConsumption }}</p>
                  <p>{{$t("pages.result.usage.water")}}</p>
                </div>
                <div class="ressource-usage-content">
                  <p>{{ this.woodConsumption }}</p>
                  <p>{{$t("pages.result.usage.wood")}}</p>
                </div>
            </div>
            <button class="result-stockpile-button">
              <router-link to="/stock-pile">{{$t("pages.result.button.stockpile")}}
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
      hamsterType: '',
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
