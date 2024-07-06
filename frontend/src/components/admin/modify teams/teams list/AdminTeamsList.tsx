import {AdminProps} from "../../scripts/AdminProps.ts";
import {useEffect} from "react";
import {Grid, List, Typography} from "@mui/material";

export default function AdminTeamsList(props : AdminProps) {
    const {teams, players} = props

    useEffect(() => {
        console.log(teams)
        console.log(players)
    }, []);

    return (
        <>
            { teams.map((team, index) => (
                <Grid item xs={12} key={index}>
                    <List>
                        <Typography variant="h5" sx={{ bgcolor: '#FDB0C0', borderRadius: 1, color: 'white'}}>
                            {team.name}
                        </Typography>
                        {players
                            .filter((player) => player.team.id === team.id)
                            .map((player) => (
                                <li key={player.id}>{player.summonerName}</li>
                            ))}
                    </List>
                </Grid>
            ))}
        </>
    )
}