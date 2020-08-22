<template>
  <div class="player-ingame-card">
    <p class="player__name">{{player.name}}</p>
    <p class="player__score">Счет: {{player.score}}</p>
    <p class="player__game-history">История игры: {{player.gameHistory.toString()}}</p>
    <form v-on:submit.prevent="addScore">
      <input type="number" v-model="setScore" />
    </form>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      setScore: null
    };
  },
  props: {
    player: {
      type: Object,
      score: Number,
      setScore: Number,
      gameHistory: Array,
      required: true
    }
  },
  methods: {
    ...mapActions(["addScore"]),
    addScore() {
      if (this.setScore.length > 0) {
        const playerScore = {
          id: this.player.id,
          score: +this.setScore,
          gameHistory: +this.setScore
        };
        this.$store.dispatch("addScore", playerScore);
        this.setScore = null;
      }
    }
  }
};
</script>


<style scoped>
.player-ingame-card {
  width: 15%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.55);
  margin: 10px;
  border-radius: 10px;
  position: relative;
  transition: 0.3s;
}
.player__name {
  font-size: 20px;
  color: #388e3c;
  transition: 0.3s;
}

@media screen and (max-width: 750px) {
  .usual-player__item {
    width: 40%;
    min-height: 80px;
  }
  .usual-player__item:hover {
    background-color: white;
  }
}
</style>