<template>
  <div>
    <div>
      <ul class="usual-players__list">
        <PlayerInGameCard
          v-for="player in inGamePlayers"
          v-bind:player="player"
          :key="player.id"
          v-bind:score="player.score"
        />
      </ul>
      <button @click="coutScores">Посчитать</button>
      <div v-if="this.showResults">
        <p>{{$store.getters.getMinResult}}</p>
        <p>{{$store.getters.getMaxResult}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import Button from "../components/button";
import PlayerInGameCard from "../components/playerInGameCard";

export default {
  data() {
    return {
      showResults: false
    };
  },
  components: {
    PlayerInGameCard
    // Button
  },
  computed: mapGetters(["inGamePlayers"]),
  methods: {
    ...mapActions(["coutScores"]),
    coutScores() {
      this.$store.dispatch("coutScores");
      this.showResults = true;
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
.usual-players {
  width: 95%;
}
.usual-players__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>