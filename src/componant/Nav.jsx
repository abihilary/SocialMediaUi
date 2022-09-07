import styled from '@emotion/styled';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "80px",
    width: "40%",
}));

const Icons = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",

}));

const UserBox = styled("div")(({ theme }) => ({
    //display: "flex",
    gap: "10px",
    alignItems: "center",
}));





const Nav = () => {
    const [open,setOpen] = useState(false);
    return (
        <AppBar position="sticky" color="secondary">

            <StyledToolbar>

                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } , color:"#ed92fd"}}>DaInsight</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='search'>

                </InputBase>
                </Search>
                <Icons>
                    <Badge badgeContent={2} color="error" sx={{ display: { xs: "none", sm: "block" } }}>
                        <Notifications />
                    </Badge>
                    <Badge badgeContent={4} color="error" sx={{ display: { xs: "none", sm: "block" } }}>
                        <Mail />
                    </Badge>
                    <UserBox onClick={e=>setOpen(true)} >
                        <Avatar sx={{ width: "30px", height: "30px", display: { xs: "none", sm: "flex" } }} src='https://i.pinimg.com/564x/47/17/6e/47176e0c27c2a1a1e3aee9bb219fbae7.jpg' />
                    </UserBox>
                </Icons>

                <Avatar onClick={e=>setOpen(true)} sx={{ width: "30px", height: "30px", display: { xs: "block", sm: "none" } }} src='https://i.pinimg.com/564x/47/17/6e/47176e0c27c2a1a1e3aee9bb219fbae7.jpg' />
                <Typography sx={{marginRight:"40px", display: { xs: "block", sm: "none" } }}>UserName</Typography>


            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e)=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>


        </AppBar>
        
    );
}

export default Nav;
