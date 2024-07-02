import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {AdminProps} from "../../scripts/AdminProps.ts";
import {addPlayer} from "../../scripts/ModifyAPIs.ts";
import {TeamType} from "../../../home/global-helpers/global-types.ts";
import {getAllPlayers} from "../../../home/global-helpers/globalAPIs.ts";

export default function AddPlayerForm(props: AdminProps) {

    const {setPlayers, teams} = props

    const [summonerNameInput, setSummonerNameInput] = useState("");
    const [taglineInput, setTaglineInput] = useState("");
    const [teamInput, setTeamInput] = useState("");

    async function handlePlayerSubmit(e: SyntheticEvent) {
        e.preventDefault();

        let tempTeam: TeamType | undefined = teams.find(team => team.name == teamInput)

        if (tempTeam) {
            try {
                let success = await addPlayer({
                    summonerName: summonerNameInput,
                    tagline: taglineInput,
                    team: tempTeam,
                    rank: "",
                    level: ""
                })

                if (success) {
                    console.log("Successfully Added Player")
                    setPlayers(await getAllPlayers())
                }
            } catch (error) {
                console.error('Chris Error - Error adding player', error)
            }
        } else {
            console.log('Error - Team Incorrect')
        }
    }

    return (
        <form onSubmit={handlePlayerSubmit}>
            <h4>Add Player</h4>
            <Grid container spacing={2} sx={{maxWidth: 600, margin: 'auto'}}>
                <Grid item xs={8}>
                    <TextField required id="summoner-name" label="Summoner Name" variant="standard"
                               sx={{width: '100%'}}
                               onChange={e => setSummonerNameInput(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField required id="tagline" label="Tagline" variant="standard" sx={{width: '100%'}}
                               onChange={e => setTaglineInput(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <FormControl required sx={{width: '100%'}}>
                        <InputLabel id="team-label">Team</InputLabel>
                        <Select
                            labelId="team-label"
                            id="team"
                            value={teamInput}
                            onChange={e => setTeamInput(e.target.value)}
                            label="Team"
                            required
                        >
                            {teams ? teams.map(el => (<MenuItem key={el.name} value={el.name}>{el.name}</MenuItem>))
                                : <MenuItem key={'wait'} value={'wait'}>!Teams or Teams Loading...</MenuItem>}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3} sx={{paddingTop: 2}}>
                    <Button variant="contained" color={'primary'} type={'submit'}>Add Player</Button>
                </Grid>
            </Grid>
        </form>
    )
}