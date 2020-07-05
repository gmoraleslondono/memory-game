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

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #121212;
}
#app {
  font-family: 'Nunito', sans-serif;
  margin: 5% auto;
  color: #fff;
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
  color: lightseagreen;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 2%;
  color: #fff;
}
</style>
