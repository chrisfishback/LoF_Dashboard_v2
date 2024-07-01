import axios from "axios";
import {PlayerType, TeamType} from "./global-types.ts";

export async function getAllTeams(): Promise<TeamType[]> {
    return await axios.get('/api/team').then(r => r.data)

}

export async function getAllPlayers(): Promise<PlayerType[]> {
    return await axios.get('/api/player').then(r => r.data)
}