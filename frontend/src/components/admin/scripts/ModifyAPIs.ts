import axios from "axios";
import {PlayerType, TeamType} from "../../home/global-helpers/global-types.ts";

export async function addPlayer(player: PlayerType): Promise<boolean> {
    try {
        await axios.post("/api/player", player);
        return true;
    } catch (error) {
        console.error('Chris Error - Error adding player:', error);
        return false;
    }
}

export async function addTeam(team: TeamType) : Promise<boolean> {
    try {
        await axios.post('/api/team', team)
        return true
    } catch (error) {
        console.error('Chris Error - Error adding team:' + error);
        return false
    }
}