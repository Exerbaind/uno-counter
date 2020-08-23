<template>
  <div class="player-ingame-card" v-bind:class="{win: player.winner, lose: player.loser}">
    <p class="player__name">{{player.name}}</p>
    <p class="player__score">Счет: {{player.score}}</p>
    <p class="player__game-history">История игры: {{player.gameHistory.toString()}}</p>
    <form v-on:submit.prevent="addScore">
      <input type="number" v-model="setScore" class="player__input" />
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
  width: 30%;
  padding: 30px;
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
.player__score {
  font-size: 20px;
  margin-top: 10px;
}
.player__game-history {
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
  line-height: 28px;
}
.player__input {
  outline: none;
  border: none;
  border-bottom: 1px solid #388e3c;
  text-align: center;
  padding: 5px 0;
  font-size: 18px;
  margin: 5px 0 10px 0;
  width: 100%;
}
.win {
  background-color: rgba(106, 191, 105, 0.8);
  transition: 0.3s;
}
.lose {
  background-color: rgba(255, 23, 68, 0.8);
  transition: 0.3s;
}
.lose p {
  color: white;
  transition: 0.3s;
}
.win p {
  color: white;
  transition: 0.3s;
}

@media screen and (max-width: 750px) {
  .player-ingame-card {
    width: 40%;
    padding: 30px;
  }
}
@media screen and (max-width: 700px) {
  .player-ingame-card {
    width: 90%;
    padding: 30px;
  }
}
</style>