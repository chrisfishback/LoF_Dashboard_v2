import {Button, Grid, TextField} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {addTeam} from "../../scripts/ModifyAPIs.ts";
import {AdminProps} from "../../scripts/AdminProps.ts";
import {getAllTeams} from "../../../home/global-helpers/globalAPIs.ts";

export default function AddTeamForm(props: AdminProps) {

    const {setTeams} = props

    const [newTeamName, setNewTeamName] = useState("");

    async function handleTeamSubmit(e: SyntheticEvent) {
        e.preventDefault();

        let success = await addTeam({name: newTeamName})

        if (success) {
            console.log("Added Team")
            setTeams(await getAllTeams())
        }
    }

    return(
        <>
            <h4>Add Team</h4>
            <form onSubmit={handleTeamSubmit}>
                <Grid container spacing={2} sx={{width: 600, margin: 'auto'}}>
                    <Grid item xs={12}>
                        <TextField required id="team-name" label="Team Name" variant="standard"
                                   sx={{width: '100%'}}
                                   value={newTeamName}
                                   onChange={e => setNewTeamName(e.target.value)}/>
                    </Grid>
                    <Grid item xs={3} sx={{paddingTop: 2}}>
                        <Button variant="contained" color={'primary'} type={'submit'}>Add Team</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}