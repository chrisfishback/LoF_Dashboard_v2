import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllPlayers, getAllTeams} from "./global-helpers/globalAPIs.ts";
import {PlayerType, TeamType} from "./global-helpers/global-types.ts";
import Dashboard from "../dashboard/Dashboard.tsx";
import Teams from "../teams/Teams.tsx";
import Admin from "../admin/Admin.tsx";
import Error from "../error/Error.tsx";

function App() {
    const [players, setPlayers] = useState<PlayerType[] | null>(null)
    const [teams, setTeams] = useState<TeamType[] | null>(null)

    useEffect(() => {
        getAllPlayers().then(setPlayers)
        getAllTeams().then(setTeams)
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Dashboard />,
        },
        {
            path: '/teams',
            element: <Teams />,
        },
        {
            path: '/admin',
            element: <Admin />
        },
        {
            path: '*',
            element: <Error />
        }
    ]);

    function handleClick() {
        console.log(teams)
        console.log(players)
    }

    return (
        <>
            <RouterProvider router={router} />
            <button onClick={handleClick}>Button</button>
        </>
    )
}

export default App
