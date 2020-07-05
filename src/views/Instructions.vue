<template>
  <div class="instructions">
    <h1>Instructions</h1>
    <p class="text">
      This is a memory game. The cards are shuffled and laid face down. The
      point of the game is to find all the matches; there are a total of 16
      cards to match.
    </p>
    <section>
      <h2>Rules:</h2>
      <ul class="list-instruct">
        <li v-for="(instruction, index) in instructions" :key="index">
          {{ instruction }}
        </li>
      </ul>
    </section>
    <section>
      <h2>Scoring:</h2>
      <ul class="list-instruct">
        <li v-for="(score, index) in scores" :key="index">
          <span class="score">{{ score.value }} Stars: </span>
          <span>{{ score.description }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Instructions',
  data() {
    return {
      instructions: [
        'Click on a card to flip it over.',
        'If the two cards match, they will remain flipped.',
        "If they don't match, they will be turned over.",
        'Remember what was on each card and where it was.',
        'The game is over when all the cards have been matched.',
        'Every flipped card counts as a move.'
      ],
      scores: [
        { value: 3, description: '30 moves or less.' },
        { value: 2, description: '40 moves or less.' },
        { value: 1, description: '50 moves or less.' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/global-colors.scss';
@import '../styles/global-texts.scss';

.instructions {
  width: 80%;
  margin: 0 auto;
}
.instructions h1 {
  color: $blue;
}
.text {
  margin: 5% 0;
}
section {
  margin-bottom: 3%;
}
section ul li {
  margin-left: 40px;
}
.score {
  color: $orange;
}
</style>
