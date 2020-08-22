// <template>
  //
  <form v-on:submit.prevent="onSubmit">
    //
    <input type="text" v-model="playerInput" placeholder="Введите имя" />
    //
    <input type="submit" value="Добавить игрока" />
    //
  </form>//
</template>

// <script>
// export default {
//   data() {
//     return {
//       playerInput: ""
//     };
//   },
//   methods: {
//     onSubmit() {
//       if (this.playerInput.trim()) {
//         const newPlayer = {
//           score: 0,
//           setScore: null,
//           name: this.playerInput,
//           id: Date.now(),
//           gameHistory: []
//         };
//         this.$emit("addPlayer", newPlayer);
//       }
//       this.playerInput = "";
//     }
//   }
// };
//
</script>

// <style scoped>
// input[type="text"] {
//   padding: 10px 0px 5px 0px;
//   width: 30%;
//   border: none;
//   font-size: 24px;
//   text-align: center;
//   border-bottom: 1px solid green;
//   border-radius: 10px;
//   margin-top: 150px;
//   outline: none;
// }
// input[type="submit"] {
//   padding: 15px;
//   width: 20%;
//   border: none;
//   font-size: 20px;
//   text-align: center;
//   outline: none;
//   margin-top: 20px;
//   border-radius: 15px;
//   background-color: green;
//   color: white;
//   transition: 0.3s;
//   cursor: pointer;
// }
// input[type="submit"]:hover {
//   opacity: 0.8;
// }
// input[type="submit"]:active {
//   transform: scale(0.98);
// }
//
</style>