import AddPlayerForm from "./forms/AddPlayerForm.tsx";
import {AdminProps} from "../scripts/AdminProps.ts";
import {useEffect} from "react";
import AddTeamForm from "./forms/AddTeamForm.tsx";

export default function ModifyTeams(props : AdminProps) {
    const {setTeams, setPlayers, teams, players} = props

    useEffect(() => {
        console.log("Modify Teams")
        console.log(teams)
        console.log(players)
    }, []);

    return (
        <>
            <h1>Modify Teams</h1>
            <AddTeamForm setTeams={setTeams} setPlayers={setPlayers} teams={teams} players={players}/>
            <AddPlayerForm setTeams={setTeams} setPlayers={setPlayers} teams={teams} players={players}/>
        </>
    );
}