<template>
  <div class="container">
    <ul class="ingame-players__list">
      <PlayerInGameCard
        v-for="player in inGamePlayers"
        v-bind:player="player"
        :key="player.id"
        v-bind:score="player.score"
      />
    </ul>
    <button @click="coutScores" class="btn">Закончить</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import Button from "../components/button";
import PlayerInGameCard from "../components/playerInGameCard";

export default {
  components: {
    PlayerInGameCard
    // Button
  },
  computed: mapGetters(["inGamePlayers"]),
  methods: {
    ...mapActions(["coutScores"]),
    coutScores() {
      this.$store.dispatch("coutScores");
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 30px;
}
.ingame-players__list {
  width: 95%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.btn {
  background-color: rgba(255, 23, 68, 1);
  padding: 20px 60px;
  font-size: 24px;
  border: none;
  color: white;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
  margin: 20px auto;
}
.btn:hover {
  background-color: rgba(255, 23, 68, 0.8);
}
.btn:active {
  transform: scale(0.95);
}
</style>