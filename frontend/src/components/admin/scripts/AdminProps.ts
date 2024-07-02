import {PlayerType, TeamType} from "../../home/global-helpers/global-types.ts";
import React from "react";

export type AdminProps = {
    setTeams: React.Dispatch<React.SetStateAction<TeamType[]>>
    setPlayers: React.Dispatch<React.SetStateAction<PlayerType[]>>
    teams: TeamType[],
    players: PlayerType[]
}

export type AdminTabsProps = {
    currentTab: number,
    setCurrentTab: React.Dispatch<React.SetStateAction<number>>,
}