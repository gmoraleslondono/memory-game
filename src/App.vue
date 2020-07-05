<template>
  <div id="app">
    <header>
      <h1>Memory Game</h1>
    </header>
    <div class="nav">
      <router-link to="/">Play</router-link> /
      <router-link to="/Instructions">How to play</router-link>
    </div>
    <router-view/>
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
}
#app {
  font-family: 'Nunito', sans-serif;
}
</style>
