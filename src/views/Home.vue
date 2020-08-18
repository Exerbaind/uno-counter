<template>
  <div class="app">
    <div class="first-page" v-if="this.startGame == false">
      <addPlayerForm class="form" v-on:addPlayer="addPlayer" />
      <div class="players-container">
        <playersList
          class="players__list"
          v-bind:players="players"
          v-on:deletePlayer="deletePlayer"
        />
      </div>
      <button
        class="start-game"
        v-if="this.players.length > 2"
        v-on:click="startGame = true"
      >Играть!</button>
    </div>

    <div class="second-page" v-if="this.startGame == true">
      <div class="player-container">
        <div class="player-card" v-for="player of players" v-bind:key="player.id">
          <p>{{player.name}}</p>
          <p>Счет: {{player.score}}</p>
          <span>Результаты раунда:{{player.gameHistory.toString()}}</span>
          <form v-on:submit.prevent>
            <input type="number" v-model="player.setScore" />
            <!-- <input type="submit" value="Добавить" /> -->
          </form>
        </div>
      </div>
      <button class="add-btn" v-on:click="addScore">Рануд</button>
      <button class="finish-btn" v-on:click="endGame">Закончить</button>
      <div class="results" v-if="showResult === true">
        <p>Победитель: {{winnerName}} {{minResult}}</p>
        <p>Проигравший: {{loserName}} {{maxResult}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import addPlayerForm from "@/components/addPlayerForm";
import playersList from "@/components/playersList";

export default {
  components: {
    addPlayerForm,
    playersList
  },
  data() {
    return {
      players: [],
      startGame: false,
      showResult: false,
      winnerName: "",
      loserName: "",
      maxResult: "",
      minResult: ""
    };
  },
  methods: {
    addPlayer(player) {
      this.players.push(player);
    },
    deletePlayer(id) {
      this.players = this.players.filter(t => t.id !== id);
    },
    addScore() {
      this.players.map(t => {
        t.score = +t.setScore + +t.score;
        t.gameHistory.push(t.setScore);
        t.setScore = null;
      });
    },
    endGame() {
      let max = 0;
      let min = 1000;
      for (let i = 0; i < this.players.length; i++) {
        if (+this.players[i].score > max) {
          max = this.players[i].score;
          this.loserName = this.players[i].name;
        }
        if (+this.players[i].score <= min) {
          min = this.players[i].score;
          this.winnerName = this.players[i].name;
        }
      }
      this.maxResult = max;
      this.minResult = min;
      this.showResult = true;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.first-page {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.second-page {
  margin: 20px 0 0 20px;
}
.player-container {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.player-card {
  width: 30%;
  margin-top: 20px;
  font-size: 24px;
}
.add-btn,
.finish-btn {
  margin-top: 40px;
  display: flex;
  justify-self: center;
}
</style>
