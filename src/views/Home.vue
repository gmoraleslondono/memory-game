<template>
  <div class="home">
    <h1>Let's play</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/global-colors.scss';
@import '../styles/global-texts.scss';

.home {
  width: 80%;
  margin: 0 auto;
  color: $blue;
}
.home h1 {
  text-align: center;
}
</style>
