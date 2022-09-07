import { AddAPhoto } from '@mui/icons-material';
import { Fab, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Add = () => {
    return (
        <Box>
            <Box>
            <Tooltip title="Delete" >
                <Fab color="primary" aria-label="add">
                    <AddAPhoto />
                </Fab>
            </Tooltip>
            </Box>
        </Box>


    );
}

export default Add;
