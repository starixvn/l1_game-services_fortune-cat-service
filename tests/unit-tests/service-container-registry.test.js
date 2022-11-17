import ServiceContainerRegistry from "../../src/service-container-registry";
import * as Slot from "sc-slot-game-base";
import { InjectionMode } from "awilix";

jest.mock(
    "awilix",
    () => {
        return {
            asValue: jest.fn((t) => t),
            asClass: () => ({ singleton: () => ({ proxy: () => {} }) }),
            InjectionMode: jest.fn(() => {}),
            createContainer: jest.fn(() => {}),
        };
    },
    { virtual: true }
);

describe("service-container-registry", () => {
    // arrange
    const defaultInjectionMode = InjectionMode.CLASSIC;

    describe("extends", () => {
        it("inherit Slot.SlotContainerRegistry", () => {
            // arrange
            const serviceContainerRegistry = new ServiceContainerRegistry(defaultInjectionMode);

            //assert
            expect(serviceContainerRegistry instanceof Slot.SlotContainerRegistry);
        });
    });

    describe("registerModels", () => {
        it("should register correct Model", () => {
            // arrange
            const serviceContainerRegistry = new ServiceContainerRegistry(defaultInjectionMode);
            serviceContainerRegistry.container = { register: jest.fn() };

            // act
            serviceContainerRegistry.registerModels();

            //assert
            expect(serviceContainerRegistry.container.register).toBeCalledWith({
                roundsRepository: expect.any(Function),
                famesRepository: expect.any(Function),
                freeSpinsRepository: expect.any(Function),
            });
        });
    });
});
