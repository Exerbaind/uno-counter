<template>
  <div class="container">
    <div class="usual-players">
      <ul class="usual-players__list">
        <usualPlayerItem v-for="player in allPlayers" v-bind:player="player" :key="player.id" />
      </ul>
      <AddNewPlayerCard />
    </div>
    <router-link to="/game">
      <!-- <Button title="Играть" v-on:click="setSelectedPlayers" /> -->
      <button class="btn" v-on:click="setSelectedPlayers">Играть</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import usualPlayerItem from "../components/usualPlayerItem";
// import Button from "../components/button";
import AddNewPlayerCard from "../components/addNewPlayerCard";

export default {
  components: {
    usualPlayerItem,
    // Button,
    AddNewPlayerCard
  },
  computed: mapGetters(["allPlayers"]),
  methods: {
    ...mapActions(["setSelectedPlayers"]),
    setSelectedPlayers() {
      this.$store.dispatch("setSelectedPlayers");
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
  /* justify-content: center; */
}
.usual-players__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.btn {
  margin-top: 20px;
  background-color: #388e3c;
  padding: 20px 60px;
  font-size: 24px;
  border: none;
  color: white;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
}
.btn:hover {
  background-color: rgba(106, 191, 105, 0.8);
}
.btn:active {
  transform: scale(0.95);
}
</style>