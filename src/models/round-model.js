import mongoose from "mongoose";
import { Models } from "sc-slot-game-base";
import gameSettings from "../game-settings";

export default mongoose.model(`${gameSettings.name}_round`, Models.RoundsSchema);
