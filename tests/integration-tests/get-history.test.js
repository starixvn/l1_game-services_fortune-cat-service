import { GameClientDriver, normalUser } from "sc-game-service-integration-utils";
import { socketOptions } from "./stubs/test-data";
import { initUserSession } from "./init-user-session";
import gameSettings from "../../src/game-settings";

const JEST_ASSERT_WAITING_RESPONSE_TIMEOUT = 60000;

export const getHistoryTest = () => {
    describe("event get history", () => {
        let gameClientDriver;
        beforeAll(() => {
            // set timeout for jest, waiting for socket response
            jest.setTimeout(JEST_ASSERT_WAITING_RESPONSE_TIMEOUT);
            gameClientDriver = new GameClientDriver(socketOptions, initUserSession(normalUser));
        });

        afterAll(() => {
            gameClientDriver.close();
        });

        it("should start and allow game client connect to.", (done) => {
            // Assert
            gameClientDriver.handleSignedInEvent(() => {
                gameClientDriver.sendBetEvent([1, 2], 100);
                gameClientDriver.handleEndBetEvent((endBetData) => {
                    if (endBetData?.endBet) {
                        done();
                    }
                });
            });
        });

        it("should return bets with details", (done) => {
            // Act
            gameClientDriver.on(gameSettings.name, (resp) => {
                gameClientDriver.sendGetHistoryEvent();
                gameClientDriver.handleGetHistoryEvent((betHistoryData) => {
                    if (betHistoryData?.history) {
                        expect(betHistoryData.history.betLogs).not.toBeNull();
                        done();
                    }
                });
            });
        });
    });
};
