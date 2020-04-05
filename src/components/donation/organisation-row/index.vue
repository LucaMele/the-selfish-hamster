<template>
  <article class="row-wrapper">
    <tr class="organisation-table-row">
      <td class="organisation-column">
        <p class="organisation">{{ organisation }}</p>
        <p class="adress">{{ adress }}</p>
      </td>
      <td class="organisiation-phone-icon">
        <a :href="this.getPhoneUrl(telefon)"><img src="./../../../assets/local_phone_24px.svg"></a>
      </td>
    </tr>
  </article>
</template>

<script>

export default {
  name: 'organisation-row',
  props: ['index', 'organisation', 'adress', 'telefon'],
  methods: {
    getPhoneUrl(phone) {
      return `tel:${phone}`;
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
