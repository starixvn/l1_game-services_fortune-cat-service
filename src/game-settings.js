import appConfigs from "./app-configs";

export default {
    id: 62,
    name: "FortuneCat",
    durations: {
        wholeRound: 60,
        lockingBet: 0,
    },
    choices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    freeSpinLiveSeconds: appConfigs.freeSpinLiveSeconds,
    bonusLiveSeconds: appConfigs.bonusLiveSeconds,
    applyNewBonusCalculation: true,
};
