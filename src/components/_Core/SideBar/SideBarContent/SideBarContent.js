import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Toolbar } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NavItems from '../../NavItems/NavItems';

function SideBarContent({ open, handleClick }) {
  return (
    <Box>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: 1,
        }}
      >
        <IconButton onClick={handleClick}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <NavItems open={open} />
    </Box>
  );
}

SideBarContent.propTypes = {
  open: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default SideBarContent;
