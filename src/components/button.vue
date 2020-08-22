<template>
  <button class="btn">{{title}}</button>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style>
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
