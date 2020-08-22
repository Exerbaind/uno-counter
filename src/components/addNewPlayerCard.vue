<template>
  <div class="add-player-card">
    <form v-on:submit.prevent="addPlayer" class="form">
      <label class="form__label">Добавить нового игрока</label>
      <input type="text" v-model="name" class="form__name" />
      <input type="submit" value="Добавить" class="form__btn" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    ...mapActions(["addPlayer"]),
    addPlayer() {
      this.$store.dispatch("addPlayer", this.name);
      this.name = "";
    }
  }
};
</script>

<style scoped>
.add-player-card {
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
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
}
.form {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
}
.form__label {
  color: #388e3c;
  font-size: 18px;
}
.form__name {
  outline: none;
  border: none;
  border-bottom: 1px solid #388e3c;
  text-align: center;
  padding: 5px 0;
  font-size: 18px;
  margin: 5px 0 10px 0;
  width: 100%;
}
.form__btn {
  background-color: #388e3c;
  padding: 10px 30px;
  border: none;
  transition: 0.3s;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
}
.form__btn:hover {
  background-color: rgba(106, 191, 105, 0.8);
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