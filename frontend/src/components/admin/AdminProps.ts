import {PlayerType, TeamType} from "../home/global-helpers/global-types.ts";
import React from "react";

export type AdminProps = {
    teams: TeamType[],
    players: PlayerType[]
}

export type AdminTabsProps = {
    currentTab: number,
    setCurrentTab: React.Dispatch<React.SetStateAction<number>>,
}