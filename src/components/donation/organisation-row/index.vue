<template>
  <article class="row-wrapper">
    <tr class="organisation-table-row">
      <td class="organisation-column">
        <p class="organisation">{{ organisation }}</p>
        <p class="adress">{{ adress }}</p>
      </td>
      <td class="organisiation-phone-icon">
        <img src="./../../../assets/local_phone_24px.svg" @click="phoneHandler">
      </td>
    </tr>
  </article>
</template>

<script>

export default {
  name: 'organisation-row',
  props: ['index', 'organisation', 'adress', 'telefon'],
  methods: {
    phoneHandler() {
      this.$emit('onClickPhone', this.telefon, this.organisation);
    },
  },
};
</script>

<style lang="scss">
  @import "./index.scss";
</style>
