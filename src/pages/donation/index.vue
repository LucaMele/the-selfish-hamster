<template>
  <div class="donations-wrapper">
    <div v-if="this.currentStep === 0">
      <organisation-list-container
        @callbackBack="navigateBack">
      </organisation-list-container>
    </div>
  </div>
</template>

<script>
import OrganisationListContainer from './../../components/donation/organisation-container';

// import HamsterService from './../../services/HamsterService';
// console.log(HamsterService);
export default {
  name: 'donation',
  components: {
    OrganisationListContainer,
  },
  data() {
    return ({
      currentStep: 0,
    });
  },
  methods: {
    navigateBack() {
      if (this.currentStep === 0) {
        this.$router.push('/stock-pile-result/5e89b65fa22d0465d992f796'); // TODO: change to correct id
      }
      // eslint-disable-next-line no-plusplus
      this.currentStep--;
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
