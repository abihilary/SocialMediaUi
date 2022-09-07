import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material';
import { Mail, Notifications,Inbox, Pets, Home, AccountBox, Settings, Group, Pages, ModeNight, Person, LocalGroceryStore } from '@mui/icons-material';
import React from 'react';

const SideBar=()=> {
  return (
    <Box  felex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
       <Box>

       <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simplelist">
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simplelist">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simplelist">
              <ListItemIcon>
                <LocalGroceryStore />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
              <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <Typography justifyContent="center" variant="h6">Switch Mode</Typography>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              
              <ListItemIcon>
              <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
       </List>
       </Box>      
    </Box>
  
  );
}

export default SideBar;
