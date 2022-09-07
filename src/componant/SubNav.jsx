import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { AppBar, Box, Button, Grid, Modal, Stack, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { ChevronRight, ExpandMore } from '@mui/icons-material';
import { TreeItem } from '@mui/lab';
import { TreeView } from '@mui/lab';



const Item = styled('div')(({ theme }) => ({
    justifyContent:'center'
    
  }));

function SubNav() {
    return (
 
        <Box sx={{backgroundColor:'white',color:'light-grey',  display: 'flex',
        justifyContent: 'center',
        
        borderRadius: 1,
        boxShadow: 1,
               width: '100%',
     
               bgcolor: 'grey',
               
               
               
               textAlign: 'center',
               fontSize: '0.875rem',
               fontWeight: '200',}}> 
               
         
         <Grid container maxWidth='sm' spacing={2} pl={5} pt={5} pb={5} sx={{ alignItems: 'center'}}>
         <Grid xs="3" sx={{ alignItems: 'center'}}>
           <Item>EnterTainment</Item>
         </Grid>
         <Grid xs={3} sx={{ alignItems: 'center'}}>
           <Item>Music</Item>
           
         </Grid>
         <Grid xs={2} sx={{ alignItems: 'center'}}>
         <Item>Videos</Item>
         
         </Grid>
         <Grid xs={2} sx={{ alignItems: 'center'}}>
         <Item>News</Item>
         </Grid>
         <Grid xs={2} sx={{ alignItems: 'center'}}>
         
         </Grid>
       </Grid>
       </Box> 
           
         
       );
}

export default SubNav;
