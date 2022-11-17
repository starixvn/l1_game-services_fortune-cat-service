import gameSetting from "./../../../src/game-settings";

const game = {
    id: gameSetting.id,
    name: gameSetting.name,
};

const currencyData = { code: "USD", name: "$US" };

const socketOptions = {
    socketUri: `http://localhost:5001/user/${gameSetting.name.toLowerCase()}`,
    gameName: game.name,
    proxyRoute: "/socket.io",
};

const adminSocketOptions = {
    socketUri: `http://localhost:5001/admin/${gameSetting.name.toLowerCase()}`,
    gameName: game.name,
    proxyRoute: "/socket.io",
};

const gameConfig = {
    type: 0,
    name: gameSetting.name.toLowerCase(),
    minBet: 1,
    maxBet: 3000,
    maxBetPerChoices: { even: 3000, odd: 3000, red3: 3000, white3: 3000, red4: 1000, white4: 1000, red2: 3000 },
    odds: { player: 2, banker: 1.96, big: 1.54, small: 2.4, tie: 8, playerPair: 11, bankerPair: 11 },
    botenabled: true,
    hour_maxbot: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    bot_maxbet: 1000,
    choices_maxbet: { player: 10000, banker: 10000, big: 10000, small: 10000, tie: 10000, playerPair: 10000, bankerPair: 10000 },
    slotsConfig: {
        jackpot: {
            enabled: false,
        },
        stakeLevels: [],
        odds: {},
    },
};

const rounds = [
    {
        id: 1190119,
        name: "NormalUser",
        result: 10,
        settlementResult: {
            player: false,
            banker: true,
            big: true,
            small: false,
            tie: false,
            playerPair: false,
            bankerPair: true,
            natural: false,
        },
    },
    {
        id: 1190118,
        name: "NormalUser",
        result: 10,
        settlementResult: {
            player: false,
            banker: true,
            big: true,
            small: false,
            tie: false,
            playerPair: false,
            bankerPair: true,
            natural: false,
        },
    },
    {
        id: 1190117,
        name: "NormalUser",
        result: 10,
        settlementResult: {
            player: false,
            banker: true,
            big: true,
            small: false,
            tie: false,
            playerPair: false,
            bankerPair: true,
            natural: false,
        },
    },
];

export { game, currencyData, socketOptions, adminSocketOptions, gameConfig, rounds };
