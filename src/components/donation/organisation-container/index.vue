<template>
  <article>
    <navigation></navigation>
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="search-wrapper">
      <search-organisation></search-organisation>
    </div>
    <div class="table-wrapper">
      <div class="hamster__container-no-bg">
        <table class="table-container">

        </table>
      </div>
    </div>
  </article>
</template>

<script>

import ToiletBack from './../../toilet-form/back';
import Navigation from './../../navigation';
import OrganisationRow from './../../donation/organisation-row';
import SearchOrganisation from './../../donation/search-organisation';

export default {
  name: 'organisations-list-container',
  // props: ['estimationValues'],
  components: {
    ToiletBack,
    Navigation,
    OrganisationRow,
    SearchOrganisation,
  },
  data() {
    return ({
      // MOCK
      organisationValues: [
        { index: 0, organisation: 'Super Organisation 1', adresse: 'Bahnhofstrasse 1, 8590 Romanshorn', telefon: '+41763241744' },
        { index: 1, organisation: 'Super Organisation 2', adresse: 'Bahnhofstrasse 2, 8590 Romanshorn', telefon: '+41763241744' },
        { index: 2, organisation: 'Super Organisation 3', adresse: 'Bahnhofstrasse 3, 8590 Romanshorn', telefon: '+41763241744' },
        { index: 3, organisation: 'Super Organisation 4', adresse: 'Bahnhofstrasse 4, 8590 Romanshorn', telefon: '+41763241744' },
        { index: 4, organisation: 'Super Organisation 5', adresse: 'Bahnhofstrasse 5, 8590 Romanshorn', telefon: '+41763241744' },
        { index: 5, organisation: 'Super Organisation 6', adresse: 'Bahnhofstrasse 6, 8590 Romanshorn', telefon: '+41763241744' },
      ],
    });
  },
  methods: {
    onBackCallback() {
      this.$emit('callbackBack');
    },
  },
};

</script>

<style lang="scss">
  @import "./index.scss";
</style>
