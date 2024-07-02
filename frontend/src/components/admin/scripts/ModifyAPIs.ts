import axios from "axios";
import {PlayerType} from "../../home/global-helpers/global-types.ts";

export async function addPlayer(player: PlayerType): Promise<boolean> {
    try {
        await axios.post("/api/player", player);
        return true;
    } catch (error) {
        console.error('Error adding player:', error);
        return false;
    }
}