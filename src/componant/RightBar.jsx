import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{ position: "fixed", width: 330 }}>
        <Box>
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        </Box>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/b3/0f/45/b30f4506dbd4b123b21fed5ce6157890.jpg" />
          <Avatar alt="Travis Howard" src="https://i.pinimg.com/236x/f8/20/39/f820393aeaacce29f06e83b9a93eb648.jpg" />
          <Avatar alt="Cindy Baker" src="https://i.pinimg.com/236x/56/13/56/561356c4d4c9a783049cae9905c8e7c9.jpg" />
          <Avatar alt="Agnes Walker" src="https://i.pinimg.com/236x/3f/0e/c9/3f0ec9c8634140621465741cc9ee509f.jpg" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/b3/0f/45/b30f4506dbd4b123b21fed5ce6157890.jpg" />
          <Avatar alt="Travis Howard" src="https://i.pinimg.com/236x/f8/20/39/f820393aeaacce29f06e83b9a93eb648.jpg" />
          <Avatar alt="Cindy Baker" src="https://i.pinimg.com/236x/56/13/56/561356c4d4c9a783049cae9905c8e7c9.jpg" />
          <Avatar alt="Agnes Walker" src="https://i.pinimg.com/236x/3f/0e/c9/3f0ec9c8634140621465741cc9ee509f.jpg" />
          <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/736x/3f/0e/c9/3f0ec9c8634140621465741cc9ee509f.jpg" />
        </AvatarGroup>
        
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Image Post</Typography>
       
        <ImageList cols={3} rowHeight={100} gap={5} sx={{ width: 300, }}>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Conversation</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://i.pinimg.com/236x/56/13/56/561356c4d4c9a783049cae9905c8e7c9.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://i.pinimg.com/236x/56/13/56/561356c4d4c9a783049cae9905c8e7c9.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://i.pinimg.com/236x/56/13/56/561356c4d4c9a783049cae9905c8e7c9.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

      </Box>




    </Box>
  );
}

export default RightBar;
