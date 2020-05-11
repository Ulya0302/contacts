<template>
  <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/theme/default.css">
    <ContactList></ContactList>
  </div>
</template>

<script>

  import ContactList from "./components/ContactList";
  import Vue from 'vue';
  import * as VueMaterial from "vue-material";
  import 'vue-material/dist/vue-material.min.css'

  Vue.use(VueMaterial.default);
  Vue.material.locale.dateFormat = 'dd/MM/yyyy hh:mm';
  let app = new Vue({
    el: '#app'
  });

  export default {
    name: 'App',
    components: {
      ContactList
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
