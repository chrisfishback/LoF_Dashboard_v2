import {Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import HomeIcon from '@mui/icons-material/HomeRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { Link } from "react-router-dom";

type HeaderProps = {
    navbarWidth: number
}

export default function Header({navbarWidth} : HeaderProps) {

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: navbarWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: navbarWidth, boxSizing: 'border-box' },
            }}
        >
            <Box sx={{ overflow: 'hidden' }}>
                <List>
                    <ListItem key={1}>
                            <Link to={'/'} style={{textDecoration: 'none', color: 'inherit'}}>
                                <ListItemText primary={"LoF"} />
                            </Link>
                    </ListItem>
                    <ListItem key={2} disablePadding>
                        <ListItemButton component={Link} to={'/'}>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            {/*<ListItemText primary={"Home"} />*/}
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={3} disablePadding>
                        <ListItemButton component={Link} to={'/dashboard'}>
                            <ListItemIcon>
                                <LeaderboardRoundedIcon/>
                            </ListItemIcon>
                            {/*<ListItemText primary={"Dashboard"} />*/}
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={4} disablePadding>
                        <ListItemButton component={Link} to={'/teams'}>
                            <ListItemIcon>
                                <GroupsRoundedIcon/>
                            </ListItemIcon>
                            {/*<ListItemText primary={"Teams"} />*/}
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={5} disablePadding>
                        <ListItemButton component={Link} to={'/admin'}>
                            <ListItemIcon>
                                <SecurityRoundedIcon/>
                            </ListItemIcon>
                            {/*<ListItemText primary={"Admin"} />*/}
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
}
