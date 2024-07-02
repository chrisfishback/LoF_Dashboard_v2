import AddPlayerForm from "./forms/AddPlayerForm.tsx";
import {AdminProps} from "../scripts/AdminProps.ts";
import {useEffect} from "react";

export default function ModifyTeams(props : AdminProps) {
    const {teams, players} = props

    useEffect(() => {
        console.log("Modify Teams")
        console.log(teams)
        console.log(players)
    }, []);

    return (
        <>
            <h1>Modify Teams</h1>
            <AddPlayerForm teams={teams} players={players}/>
        </>
    );
}