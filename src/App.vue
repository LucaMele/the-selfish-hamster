<template>
  <article id="app">
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul
{
list-style: none;
padding: 0;
margin: 0;
}
</style>
