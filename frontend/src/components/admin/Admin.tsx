import {AdminProps} from "./scripts/AdminProps.ts";
import {useState} from "react";
import AdminTabs from "./AdminTabs.tsx";
import ModifyTeams from "./modify teams/ModifyTeams.tsx";
import ModifyWeekGames from "./modify week games/ModifyWeekGames.tsx";
import {Grid} from "@mui/material";

function Admin(props: AdminProps) {

    const { teams, players, setPlayers, setTeams} = props
    const [currentTab, setCurrentTab] = useState(0)
    const MODIFYTEAMS = 0

    return (
        <>
            <h1>Admin Page</h1>
            <AdminTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <Grid container spacing={2} sx={{maxWidth: 600, margin: 'auto'}}>
                { currentTab === MODIFYTEAMS ? <ModifyTeams setPlayers={setPlayers} setTeams={setTeams} teams={teams} players={players}/> : <ModifyWeekGames /> }
            </Grid>
        </>
    )
}

export default Admin
