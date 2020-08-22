<template>
  <div
    class="usual-player__item"
    v-on:click="selectPlayer"
    v-bind:class="{checked: player.selected}"
  >
    <img v-if="player.selected" src="../assets/check.svg" alt class="player__check_flag" />
    <p class="player__name">{{player.name}}</p>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["selectPlayer"]),
    selectPlayer() {
      this.$store.dispatch("selectPlayer", this.player.id);
    }
  },
  props: {
    player: {
      type: Object,
      required: true,
      score: Number,
      setScore: Number,
      gameHistory: Array
    }
  }
};
</script>
<style scoped>
.usual-player__item {
  width: 15%;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.55);
  margin: 10px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
}
.checked {
  background-color: rgba(106, 191, 105, 1);
}
.checked .player__name {
  color: white;
}
.usual-player__item:hover {
  background-color: rgba(106, 191, 105, 0.8);
}
.usual-player__item:active {
  transform: scale(0.97);
}
.player__check_flag {
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 40px;
  transform: translate(-40%, -40%);
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