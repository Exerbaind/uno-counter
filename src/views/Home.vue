<template>
  <div class="container">
    <div class="usual-players">
      <ul class="usual-players__list">
        <usualPlayerItem v-for="player in allPlayers" v-bind:player="player" :key="player.id" />
        <AddNewPlayerCard />
      </ul>
    </div>
    <router-link to="/game">
      <Button title="Играть" />
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import usualPlayerItem from "../components/usualPlayerItem";
import Button from "../components/button";
import AddNewPlayerCard from "../components/addNewPlayerCard";

export default {
  components: {
    usualPlayerItem,
    Button,
    AddNewPlayerCard
  },
  computed: mapGetters(["allPlayers"])
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