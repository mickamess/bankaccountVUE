<template>
  <div id="app">
    <Menu/>
    <Depot/>
    <Withdraw/>
    <History/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Depot from './components/Depot.vue';
import Withdraw from './components/Withdraw.vue';
import History from './components/History.vue';

export default {
  name: 'App',
  components: {
    Menu, Depot, Withdraw, History,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: auto;
}
</style>
