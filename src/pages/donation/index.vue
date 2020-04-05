<template>
  <div class="donations-wrapper">
    <div>
      <organisations-list-container
        @callbackNext="inputDataCallback"
        @callbackBack="navigateBack">
      </organisations-list-container>
    </div>
  </div>
</template>

<script>
import OrganisationListContainer from './../../components/donation/organisationContainer';

// import HamsterService from './../../services/HamsterService';
// console.log(HamsterService);
export default {
  name: 'donation',
  components: {
    OrganisationListContainer,
  },
  data() {
    return ({
    });
  },
  methods: {
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
