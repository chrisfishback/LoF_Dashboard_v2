import AddPlayerForm from "./forms/AddPlayerForm.tsx";
import {AdminProps} from "../scripts/AdminProps.ts";

export default function ModifyTeams(props : AdminProps) {
    const {teams, players} = props

    return (
        <>
            <h1>Modify Teams</h1>
            <AddPlayerForm teams={teams} players={players}/>
        </>
    );
}