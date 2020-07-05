<template>
  <div id="app">
    <header>
      <h1>Memory Game</h1>
      <div class="nav">
        <router-link to="/">Play</router-link>
        <router-link to="/Instructions">How to play</router-link>
      </div>
    </header>
    <router-view/>
    <footer>🛠 By Gloria Morales with ❤️</footer>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import 'styles/global-colors.scss';
@import 'styles/global-texts.scss';

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: $black;
}
#app {
  margin: 5% auto;
  color: $white;
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5%;
}
.nav a {
  text-decoration: none;
  font-size: 20px;
  margin: 0 20px;
  color: $blue;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 2%;
  color: $white;
}
</style>
