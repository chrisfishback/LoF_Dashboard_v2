import AddPlayerForm from "./forms/AddPlayerForm.tsx";
import {AdminProps} from "../scripts/AdminProps.ts";
import AddTeamForm from "./forms/AddTeamForm.tsx";
import AdminTeamsList from "./teams list/AdminTeamsList.tsx";

export default function ModifyTeams(props : AdminProps) {
    const {setTeams, setPlayers, teams, players} = props

    return (
        <>
            <h1>Modify Teams</h1>
            <AdminTeamsList setTeams={setTeams} setPlayers={setPlayers} teams={teams} players={players} />
            <AddTeamForm setTeams={setTeams} setPlayers={setPlayers} teams={teams} players={players}/>
            <AddPlayerForm setTeams={setTeams} setPlayers={setPlayers} teams={teams} players={players}/>
        </>
    );
}