<template>
  <ul class="players__list">
    <playersItem
      v-bind:key="player.id"
      v-for="player of players"
      v-bind:player="player"
      v-on:deletePlayer="deletePlayer"
    />
  </ul>
</template>

<script>
import playersItem from "@/components/playersItem";
export default {
  props: ["players"],
  components: {
    playersItem
  },
  methods: {
    deletePlayer(id) {
      this.$emit("deletePlayer", id);
    }
  }
};
</script>

<style scoped>
.players__list {
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
}
</style>