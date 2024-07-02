import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";
import {AdminProps} from "../../scripts/AdminProps.ts";

export default function AddPlayerForm(props: AdminProps) {

    const {teams} = props

    const [summonerNameInput, setSummonerNameInput] = useState("");
    const [taglineInput, setTaglineInput] = useState("");
    const [teamInput, setTeamInput] = useState("");

    function handlePlayerSubmit(e:any) {
        e.preventDefault();

        console.log(e)
        console.log(summonerNameInput)
        console.log(taglineInput)
        console.log(teamInput)
        // addPlayer({
        //         summonerName: summonerNameInput,
        //         tagline: taglineInput,
        //         team: teamInput,
        //         rank: "",
        //         level: ""
        // })
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