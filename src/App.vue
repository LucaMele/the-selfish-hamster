<template>
  <article class="hamster">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/stock-pile">Go to Stock Pile</router-link></li>
        <li><router-link to="/toilet-papers">Go to Toilet Papers</router-link></li>
      </ul>
    </nav>

    <router-view/>
  </article>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
  @import "./app.scss";
</style>
