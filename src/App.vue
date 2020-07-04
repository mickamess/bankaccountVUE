<template>
  <div id="app">
    <div id="nav">
      <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/depot">Depot</router-link></li>
      <li><router-link to="/withdraw">Retrait</router-link></li>
      <li><router-link to="/history">Historique</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  display: flex;
}
li {
  padding: 3px;
  display: inline-block;
  margin-right: auto;
  margin-left: auto;
}

#nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
