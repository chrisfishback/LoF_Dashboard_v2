import axios from "axios";
import {PlayerType, TeamType} from "./global-types.ts";

export async function getAllTeams(): Promise<TeamType[]> {
    return await axios.get('/api/team').then(r => r.data)

}

export async function getAllPlayers(): Promise<PlayerType[]> {
    try {
        const response = await axios.get('/api/player');

        if (response.data) {
            return response.data.map((tempPlayer: PlayerType) => ({
                id: tempPlayer.id,
                summonerName: tempPlayer.summonerName,
                level: tempPlayer.level || "",
                rank: tempPlayer.rank || "",
                tagline: tempPlayer.tagline,
                team: tempPlayer.team
            }));
        } else {
            return [];
        }
    } catch (error) {
        console.error('Chris Error - Error getting all players:', error);
        throw error;
    }
}