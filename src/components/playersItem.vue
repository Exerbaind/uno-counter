<template>
  <li class="players__item">
    <button v-on:click="$emit('deletePlayer', player.id)">Удалить</button>
    <p>{{player.name}}</p>
  </li>
</template>

<script>
export default {
  props: {
    player: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.players__item {
  width: 20%;
  border: 1px solid black;
  border-radius: 10px;
  height: 150px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>