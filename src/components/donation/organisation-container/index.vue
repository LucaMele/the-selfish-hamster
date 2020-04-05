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

import VModal from './../../../../node_modules/vue-js-modal';
import ToiletBack from './../../toilet-form/back';
import Navigation from './../../navigation';
import OrganisationRow from './../../donation/organisation-row';
import SearchOrganisation from './../../donation/search-organisation';

export default {
  name: 'organisation-list-container',
  components: {
    VModal,
    ToiletBack,
    Navigation,
    OrganisationRow,
    SearchOrganisation,
  },
  data() {
    return ({
      // MOCK
      organisations: [
        { index: 0, organisation: 'Super Organisation 1', adress: 'Bahnhofstrasse 1, 8590 Romanshorn', telefon: '+41761234567' },
        { index: 1, organisation: 'Super Organisation 2', adress: 'Bahnhofstrasse 2, 8590 Romanshorn', telefon: '+41761234567' },
        { index: 2, organisation: 'Super Organisation 3', adress: 'Bahnhofstrasse 3, 8590 Romanshorn', telefon: '+41761234567' },
        { index: 3, organisation: 'Super Organisation 4', adress: 'Bahnhofstrasse 4, 8590 Romanshorn', telefon: '+41761234567' },
        { index: 4, organisation: 'Super Organisation 5', adress: 'Bahnhofstrasse 5, 8590 Romanshorn', telefon: '+41761234567' },
        { index: 5, organisation: 'Super Organisation 6', adress: 'Bahnhofstrasse 6, 8590 Romanshorn', telefon: '+41761234567' },
        { index: 6, organisation: 'Super Organisation 7', adress: 'Bahnhofstrasse 7, 8590 Romanshorn', telefon: '+41761234567' },
        { index: 7, organisation: 'Super Organisation 8', adress: 'Bahnhofstrasse 8, 8590 Romanshorn', telefon: '+41761234567' },
        { index: 8, organisation: 'Super Organisation 9', adress: 'Bahnhofstrasse 9, 8590 Romanshorn', telefon: '+41761234567' },
        { index: 9, organisation: 'Super Organisation 10', adress: 'Bahnhofstrasse 10, 8590 Romanshorn', telefon: '+41761234567' },
      ],
    });
  },
  methods: {
    onBackCallback() {
      this.$emit('callbackBack');
    },
    callPhoneModal(phone, organisation) {
      // eslint-disable-next-line no-console
      console.log(phone);
      console.log(organisation);
      this.$modal.show('dialog', {
        title: 'Call'.concat(organisation),
        text: 'Nr:'.concat(phone),
        buttons: [
          {
            title: 'Call',
          },
          {
            title: 'Close',
          },
        ],
      });
    },
  },
};

</script>

<style lang="scss">
  @import "./index.scss";
</style>
