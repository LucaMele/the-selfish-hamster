<template>
  <article>
    <navigation></navigation>
    <div class="back-wrapper">
      <toilet-back @onClickCallback="onBackCallback"></toilet-back>
    </div>
    <div class="search-wrapper">
      <search-organisation></search-organisation>
    </div>
    <!-- <v-modal name="dialog"></v-modal> -->
    <div class="table-wrapper">
      <div class="hamster__container-no-bg">
        <table class="table-container">
          <tbody class="table-body" v-for="item in organisations" v-bind:key="item.index">
            <organisation-row @onClickPhone="callPhoneModal"
              v-bind:index="item.index" v-bind:organisation="item.organisation"
              v-bind:adress="item.adress" v-bind:telefon="item.telefon">
            </organisation-row>
          </tbody>
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
import HamsterService from '../../../services/HamsterService';

export default {
  name: 'organisation-list-container',
  components: {
    ToiletBack,
    Navigation,
    OrganisationRow,
    SearchOrganisation,
  },
  data() {
    return ({
      organisations: [],
    });
  },
  created() {
    // call once at creation of component
    HamsterService.searchCharityPlaces()
      .then(
        ((places) => {
          // eslint-disable-next-line no-restricted-syntax
          let i = 0;
          const organisations = [];
          // eslint-disable-next-line no-restricted-syntax
          for (const place of places) {
            organisations.push(
              {
                // eslint-disable-next-line no-plusplus
                index: i++,
                organisation: place.name,
                adress: place.formattedAddress,
                telefon: place.phone,
                email: place.email,
              });
            this.$set(this, 'organisations', organisations);
            // eslint-disable-next-line no-console
            console.log('organisations ', JSON.stringify(organisations));
          }
        }),
      );
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
