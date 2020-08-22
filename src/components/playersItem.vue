// <template>
  //
  <li class="players__item">
    //
    <button v-on:click="$emit('deletePlayer', player.id)" class="delete-player">
      //
      <span></span>
      //
    </button>
    //
    <p class="player-name">{{player.name}}</p>//
  </li>//
</template>

// <script>
// export default {
//   props: {
//     player: {
//       type: Object,
//       required: true
//     }
//   }
// };
//
</script>

// <style scoped>
// .players__item {
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 150px;
//   width: 200px;
//   transition: 0.3s;
//   box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.55);
//   border-radius: 10px;
//   position: relative;
// }
// .player-name {
//   font-size: 24px;
// }
// .delete-player {
//   position: absolute;
//   left: 0;
//   top: 0;
//   transform: translate(-40%, -40%);
//   height: 30px;
//   width: 30px;
//   background-color: red;
//   border-radius: 50%;
//   border: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: 0.3s;
//   outline: none;
// }
// .delete-player:hover {
//   transform: translate(-40%, -40%) scale(1.05);
// }
// .delete-player:active {
//   transform: translate(-40%, -40%) scale(0.95);
// }
// .delete-player span {
//   width: 50%;
//   height: 2px;
//   background-color: white;
// }
//
</style>