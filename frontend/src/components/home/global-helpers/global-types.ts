export type PlayerType = {
    id?: number,
    summonerName: string
    tagline: string
    rank: string
    level: string
    team: TeamType
}

export type TeamType = {
    id: number,
    name: string,
}