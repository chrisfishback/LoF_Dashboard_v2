import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import HomeIcon from '@mui/icons-material/HomeRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

export default function Header() {
    const drawerWidth = 60

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <ListItem key={1}>
                        <ListItemText primary={"LoF"} />
                    </ListItem>
                    <ListItem key={2} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={3} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LeaderboardRoundedIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={4} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <GroupsRoundedIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Teams"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={5} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SecurityRoundedIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Admin"} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}
