<template>
  <div class="hamster__locale-changer">
    <select size="4" v-model="$i18n.locale" class="language-switcher">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data() {
    return {langs: ['de', 'en', 'fr', 'it']};
  },
}
</script>
