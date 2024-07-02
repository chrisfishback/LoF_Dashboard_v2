import {AdminProps} from "./AdminProps.ts";
import {useEffect, useState} from "react";
import AdminTabs from "./AdminTabs.tsx";

function Admin(props: AdminProps) {

    const { teams, players} = props
    const [currentTab, setCurrentTab] = useState(0)
    const CHANGETEAMS = 0
    const ADDWEEKGAMES = 1

    useEffect(() => {
        console.log(teams)
        console.log(players)
    }, []);

    return (
        <>
            <h1>Admin Page</h1>
            <AdminTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </>
    )
}

export default Admin
