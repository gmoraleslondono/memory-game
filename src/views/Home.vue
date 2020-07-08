<template>
  <div class="home">
    <h1>Let's play</h1>
      <main class="container">
        <section>
          <button class="restart" style="background-color: orange">
              <i class="fa fa-repeat"></i>
              Reset
          </button>
          <div>
              <ul class="stars">
              <li v-for="(star, index) in stars" :key="index" class="star">
                  <i class="${index} fa fa-star"></i>
              </li>
              </ul>
              <p class="moves">Moves: {{ numMoves }}</p>
          </div>
        </section>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Home',
  computed: {
    ...mapState ([
      "stars",
      "numMoves",
    ])
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
.gameController .stars {
  padding: 0px;
  display: inline-block;
  margin: 2em auto 0;
}

.star {
  list-style: none;
  display: inline-block;
  margin: 0 0.2em;
  font-size: 1.5em;
  color: $orange;
}
.moves {
  font-weight: bold;
}

.gameController .restart {
  float: right;
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1em;
}

.restart {
  background-color: $orange;
  padding: 10px 20px;
  border-radius: 20px;
}

.fa-repeat {
  background-color: $orange;
}
</style>
