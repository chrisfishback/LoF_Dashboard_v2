import axios from "axios";
import {PlayerType} from "../../home/global-helpers/global-types.ts";

export function addPlayer(player: PlayerType) {
    return axios.post("/api/player", player).then(r => r.data)
}