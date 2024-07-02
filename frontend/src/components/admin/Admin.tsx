import {AdminProps} from "./scripts/AdminProps.ts";
import {useEffect, useState} from "react";
import AdminTabs from "./AdminTabs.tsx";
import ModifyTeams from "./modify teams/ModifyTeams.tsx";
import ModifyWeekGames from "./modify week games/ModifyWeekGames.tsx";

function Admin(props: AdminProps) {

    const { teams, players} = props
    const [currentTab, setCurrentTab] = useState(0)
    const MODIFYTEAMS = 0

    useEffect(() => {
        console.log(teams)
        console.log(players)
    }, []);

    return (
        <>
            <h1>Admin Page</h1>
            <AdminTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

            { currentTab === MODIFYTEAMS ? <ModifyTeams/> : <ModifyWeekGames /> }
        </>
    )
}

export default Admin
