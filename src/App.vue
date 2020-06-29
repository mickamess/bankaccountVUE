<template>
  <div id="app">
    <Menu/>
    <Depot/>
    <Withdraw/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Depot from './components/Depot.vue';
import Withdraw from './components/Withdraw.vue';

export default {
  name: 'App',
  components: {
    Menu, Depot, Withdraw,
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
  margin-top: 60px;
}
</style>
