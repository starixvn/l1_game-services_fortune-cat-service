import { GameClientDriver, normalUser } from "sc-game-service-integration-utils";
import { socketOptions } from "./stubs/test-data";
import { initUserSession } from "./init-user-session";

const JEST_ASSERT_WAITING_RESPONSE_TIMEOUT = 60000;

export const placeBetTest = () => {
    describe("event place bet", () => {
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
                done();
            });
        });

        describe("when valid bet", () => {
            it("should return endBet info with runningRound", (done) => {
                // Act
                gameClientDriver.sendBetEvent([1, 2], 10);

                // Assert
                gameClientDriver.handleEndBetEvent((endBetData) => {
                    if (endBetData?.endBet) {
                        expect(endBetData).not.toBeNull();
                        done();
                    }
                });
            });
        });
    });
};
