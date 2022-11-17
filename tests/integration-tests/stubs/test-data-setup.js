import mongoose from "mongoose";
import { middlewares } from "sc-common";
import {
    createCurrencyGroupGames,
    createDummyCurrency,
    createDummyUsers,
    createExchangeRate,
    createGameConfig,
    createPartnerConfig,
} from "sc-game-service-integration-utils";

import appConfigs from "../../../src/app-configs.IGT";
import { RoundModel } from "../../../src/models";
import { currencyData, game, gameConfig, rounds } from "./test-data";
import IdCounter from "sc-slot-game-base/src/models/id-counters";

const connectDatabase = async () => {
    console.log("connect database");
    await middlewares.database.configureDatabase(mongoose, appConfigs.database);

    await clearAllData();
};

const clearAllData = async () => {
    const collections = await mongoose.connection.db.collections();

    for (const collection of collections) {
        await collection.remove();
    }
};

export const createTestData = async () => {
    await connectDatabase();
    await createExchangeRate();
    await createGameConfig(gameConfig);
    const partnerConfig = await createPartnerConfig(game.id);

    const currency = await createDummyCurrency(partnerConfig.partnerId, currencyData.code, currencyData.name);
    await createCurrencyGroupGames(currency.groupId, game.id, gameConfig);
    await createDummyUsers(currency);
    await createRounds();
    await createIds();

    console.log("Create exchange rate, game config & dummy user for testing successfully!");
    process.exit(0);
};

const createRounds = async () => {
    return RoundModel.insertMany(rounds);
};

const createIds = async () => {
    await IdCounter.insertMany([{ m: "FortuneCat_round", c: 2, f: "id" }]);
    await IdCounter.insertMany([{ m: "FortuneCat_freespin", c: 2, f: "id" }]);
};

createTestData();
