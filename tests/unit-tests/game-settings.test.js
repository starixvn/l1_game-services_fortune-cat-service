import AppConfigs from "../../src/app-configs";
import GameSettings from "../../src/game-settings";

describe("GameSettings", () => {
    it("bet choices should have enough 25 paylines", () => {
        // act
        var betChoices = GameSettings.choices;

        // assert
        expect(betChoices.length).toEqual(25);
    });

    it("freeSpinLiveSeconds should get from appropriate config", () => {
        // assert
        expect(GameSettings.freeSpinLiveSeconds).toEqual(AppConfigs.freeSpinLiveSeconds);
    });

    it("freeSpinLiveSeconds should get from appropriate config", () => {
        // assert
        expect(GameSettings.bonusLiveSeconds).toEqual(AppConfigs.bonusLiveSeconds);
    });

    it("gameId should be 62", () => {
        // assert
        expect(GameSettings.id).toEqual(62);
    });

    it("whole round duration should be 60", () => {
        // assert
        expect(GameSettings.durations.wholeRound).toEqual(60);
    });

    it("choices should be unique and correct length", () => {
        // act
        const unique = new Set(GameSettings.choices);

        // assert
        expect(unique.size).toEqual(25);
    });
});
