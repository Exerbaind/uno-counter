export default {
    state: {
        players: [{
                name: 'Миша',
                id: 0,
                score: 0,
                gameHistory: [],
                selected: false,
                winner: false,
                loser: false
            },
            {
                name: 'Оксана',
                id: 1,
                score: 0,
                gameHistory: [],
                selected: false,
                winner: false,
                loser: false
            },
            {
                name: 'Таня П',
                id: 2,
                score: 0,
                gameHistory: [],
                selected: false,
                winner: false,
                loser: false
            },
            {
                name: 'Таня З',
                id: 3,
                score: 0,
                gameHistory: [],
                selected: false,
                winner: false,
                loser: false
            },
            {
                name: 'Дима',
                id: 4,
                score: 0,
                gameHistory: [],
                selected: false,
                winner: false,
                loser: false
            },
            {
                name: 'Настя',
                id: 5,
                score: 0,
                gameHistory: [],
                selected: false,
                winner: false,
                loser: false
            },
            {
                name: 'Юля',
                id: 6,
                score: 0,
                gameHistory: [],
                selected: false,
                winner: false,
                loser: false
            },
            {
                name: 'Вика',
                id: 7,
                score: 0,
                gameHistory: [],
                selected: false,
                winner: false,
                loser: false
            },
            {
                name: 'Андрей',
                id: 8,
                score: 0,
                gameHistory: [],
                selected: false,
                winner: false,
                loser: false
            },
            {
                name: 'Женя',
                id: 9,
                score: 0,
                gameHistory: [],
                selected: false,
                winner: false,
                loser: false
            },
            {
                name: 'Костя',
                id: 10,
                score: 0,
                gameHistory: [],
                selected: false,
                winner: false,
                loser: false
            },
        ],
        minResult: 1000,
        maxResult: 0,
        loserID: 0,
        winnerID: 0,
        selectedPlayers: []

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
        },
        setSelectedPlayers(ctx) {
            ctx.commit('updateSelectedPlayers')
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
                winner: false,
                loser: false
            }
            state.players.push(newPlayer);
        },
        updateScore(state, playerScore) {
            state.players[playerScore.id].score = state.players[playerScore.id].score + playerScore.score;
            state.players[playerScore.id].gameHistory.push(playerScore.score);
        },
        getAllScores(state) {
            for (let i = 0; i < state.selectedPlayers.length; i++) {
                if (+state.selectedPlayers[i].score > state.maxResult) {
                    state.maxResult = state.selectedPlayers[i].score;
                    state.loserID = i;
                }
                if (+state.selectedPlayers[i].score <= state.minResult) {
                    state.minResult = state.selectedPlayers[i].score;
                    state.winnerID = i;
                }
            }
            state.selectedPlayers[state.loserID].loser = true;
            state.selectedPlayers[state.winnerID].winner = true;
        },
        updateSelectedPlayers(state) {
            state.selectedPlayers = state.players.filter(p => p.selected === true);

        }
    },
    getters: {
        allPlayers(state) {
            return state.players
        },
        inGamePlayers(state) {
            return state.selectedPlayers
        },
        getMinResult(state) {
            return state.minResult
        },
        getMaxResult(state) {
            return state.maxResult
        },
    },
}