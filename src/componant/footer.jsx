import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { AppBar, Box, Button, Grid, Modal, Stack, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';


const Item = styled('div')(({ theme }) => ({
  justifyContent:'center'
  
}));






function Footer() {


  return (
 
   <Box width={'100%'} sx={{justifyContenet:'center',backgroundColor:'#301934',color:'white'}}>  
    <Grid container spacing={3} pl={5} pt={5}>
    <Grid xs="3">
      <Item>logo</Item>
    </Grid>
    <Grid xs={3}>
      <Item>Links</Item>
      <Item>Links</Item>
      <Item>Links</Item>
      <Item>Links</Item>
    </Grid>
    <Grid xs={3}>
    <Item>Links</Item>
    <Item>Links</Item>
    <Item>Links</Item>
    <Item>Links</Item>
    <Item>Links</Item>
    </Grid>
    <Grid xs={3}>
    <Item>Links</Item>
    <Item>Links</Item>
    <Item>Links</Item>
    <Item>Links</Item>
    <Item>Links</Item>
    </Grid>
  </Grid>
  </Box> 
      
    
  );
}

export default Footer;
