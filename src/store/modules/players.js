export default {
    state: {
        players: [{
                name: 'Миша',
                id: 0,
                score: 0,
                gameHistory: [],
                selected: false,
            },
            {
                name: 'Оксана',
                id: 1,
                score: 0,
                gameHistory: [],
                selected: false,
            },
            {
                name: 'Таня П',
                id: 2,
                score: 0,
                gameHistory: [],
                selected: false,
            },
            {
                name: 'Таня З',
                id: 3,
                score: 0,
                gameHistory: [],
                selected: false,
            },
            {
                name: 'Дима',
                id: 4,
                score: 0,
                gameHistory: [],
                selected: false,
            },
            {
                name: 'Настя',
                id: 5,
                score: 0,
                gameHistory: [],
                selected: false,
            },
            {
                name: 'Юля',
                id: 6,
                score: 0,
                gameHistory: [],
                selected: false,
            },
            {
                name: 'Вика',
                id: 7,
                score: 0,
                gameHistory: [],
                selected: false,
            },
            {
                name: 'Андрей',
                id: 8,
                score: 0,
                gameHistory: [],
                selected: false,
            },
            {
                name: 'Женя',
                id: 9,
                score: 0,
                gameHistory: [],
                selected: false,
            },
            {
                name: 'Костя',
                id: 10,
                score: 0,
                gameHistory: [],
                selected: false,
            },
        ],
        minResult: 1000,
        maxResult: 0

    },
    actions: {
        selectPlayer(ctx, id) {
            ctx.commit('updateSelect', id)
        },
        addPlayer(ctx, name) {
            ctx.commit('updatePlayersData', name);
        },
        addScore(ctx, playerScore) {
            ctx.commit('updateScore', playerScore);
        },
        coutScores(ctx) {
            ctx.commit('getAllScores')
        }
    },
    mutations: {
        updateSelect(state, id) {
            state.players[id].selected = !state.players[id].selected;
        },
        updatePlayersData(state, name) {
            const newPlayer = {
                name: name,
                id: state.players.length,
                score: 0,
                gameHistory: [],
                selected: true,
            }
            state.players.push(newPlayer);
        },
        updateScore(state, playerScore) {
            state.players[playerScore.id].score = state.players[playerScore.id].score + playerScore.score;
            state.players[playerScore.id].gameHistory.push(playerScore.score);
        },
        getAllScores(state) {
            const selectedPlayer = state.players.filter(p => p.selected === true)
            for (let i = 0; i < selectedPlayer.length; i++) {
                if (+selectedPlayer[i].score > state.maxResult) {
                    state.maxResult = selectedPlayer[i].score;

                }
                if (+selectedPlayer[i].score <= state.minResult) {
                    state.minResult = selectedPlayer[i].score;
                }
            }
        },
    },
    getters: {
        allPlayers(state) {
            return state.players
        },
        inGamePlayers(state) {
            const players = state.players.filter(p => p.selected === true);
            return players;
        },
        getMinResult(state) {
            return state.minResult
        },
        getMaxResult(state) {
            return state.maxResult
        },
    },
}