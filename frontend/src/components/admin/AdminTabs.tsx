import {Box, Tab, Tabs} from "@mui/material";
import {AdminTabsProps} from "./scripts/AdminProps.ts";

export default function AdminTabs(props: AdminTabsProps) {

    const {currentTab, setCurrentTab} = props

    function handleTabChange() {
        //e:SyntheticEvent
        console.log("Tab Change")
        if (currentTab == 1)
            setCurrentTab(0)
        else
            setCurrentTab(1)
    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={currentTab} onChange={handleTabChange} aria-label="admin tabs">
                <Tab label="Modify Teams" />
                <Tab label="Add Week/Games" />
            </Tabs>
        </Box>
    );
}