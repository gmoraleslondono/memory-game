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

</style>
