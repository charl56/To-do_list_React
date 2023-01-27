<template>
  <v-app>
    
    <div>
      <Composant />
      <v-col md="6" sm="6">
        <Token />
      </v-col>
      <v-col md="6" sm="6">
      </v-col>
    </div>

  </v-app>
</template>

<script>
import Header from './components/Header/Header.vue'
import Composant from './components/Composant/Composant.vue'
import { Comment } from 'vue';


export default {
  name: 'App',
  components: {
    Header,
    Token,
    Comment
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #344D59;
  background-color: #B8CBD0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
