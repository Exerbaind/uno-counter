<template>
  <ul class="header__list">
    <li class="header__item">
      <router-link class="header__link" to="/" exact>Выбор игроков</router-link>
    </li>
    <li class="header__item">
      <router-link class="header__link" to="/rules">Правила</router-link>
    </li>
    <li class="header__item">
      <router-link class="header__link" to="/history">История</router-link>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style scoped>
.header__list {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-items: center;
  list-style: none;
}
.header__item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
}
.header__link {
  height: 100%;
  width: 100%;
  padding: 10px 40px;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  color: #388e3c;
  transition: 0.3s;
}
.header__link:hover {
  background-color: rgba(106, 191, 105, 0.8);
  color: white;
}
.router-link-active {
  background-color: #388e3c;
  border-radius: 10px;
  color: white;
}
.router-link-active:hover {
  background-color: #388e3c;
  cursor: default;
}

@media screen and (max-width: 500px) {
  .header__item {
    width: 30%;
    margin: 0;
  }
  .header__link {
    padding: 10px;
  }
}
</style>