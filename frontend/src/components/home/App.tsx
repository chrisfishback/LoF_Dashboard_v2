import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPlayers, getAllTeams } from "./global-helpers/globalAPIs";
import { PlayerType, TeamType } from "./global-helpers/global-types";
import Header from "../header_footer/Header";
import Dashboard from "../dashboard/Dashboard";
import Teams from "../teams/Teams";
import Admin from "../admin/Admin";
import Error from "../error/Error";
import {Box} from "@mui/material";

function App() {
    const [players, setPlayers] = useState<PlayerType[] | null>(null);
    const [teams, setTeams] = useState<TeamType[] | null>(null);

    const navbarWidth = 60;

    useEffect(() => {
        getAllPlayers().then(setPlayers);
        getAllTeams().then(setTeams);
        console.log(players)
        console.log(teams)
    }, []);

    return (
        <>
            <BrowserRouter>
                <Box width={navbarWidth} sx={{marginRight: 1}}>
                    <Header />
                </Box>
                <Box marginLeft={navbarWidth+'px'}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </>
    );
}

export default App;
