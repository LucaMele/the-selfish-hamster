<template>
  <article>
    <div class="home-wrapper">
      <div>
        <div class="hamster">
          <div class="hamster-title">
            <img :src="getImgUrl(hamsterType)"/>
          </div>
        </div>
        <div class="lower-container">
          <div class="greetings-box">
            <p id="greeting-text">{{ this.usagePerDay }}...</p>
          </div>
          <div class="lower-bg">
            <p>{{ this.hamsterType }}</p>
            <p>{{ this.nofUsagesPerPerson }}</p>
            <p>{{ this.usagePerQuarantine }}</p>
            <p>{{ this.waterConsumption }}</p>
            <p>{{ this.woodConsumption }}</p>
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

          this.$set(this, 'waterConsumption', answers.waterConsumption);
          this.$set(this, 'woodConsumption', answers.woodConsumption);
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
