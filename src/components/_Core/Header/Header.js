/* eslint-disable import/no-cycle */
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import CssBaseline from '@mui/material/CssBaseline';
import { drawerWidth } from '../../../constants/constants';
import styles from './Header.module.css';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Header({ open, handleDrawerToggle }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        open={open}
        elevation={0}
        sx={{
          backgroundColor: '#fff',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          display: { xs: open && 'none', sm: 'block' },
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
              className={styles.menuIcon}
              sx={{
                marginRight: 4,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap component="div" color="primary" sx={{ ml: 5 }}>
              Logo
            </Typography>
          </Box>
          <Box className={styles.buttonContainer}>
            <Link href="/login" passHref>
              <Button
                color="primary"
                variant="contained"
                sx={{ mr: 2 }}
                className={styles.actionButtons}
              >
                Sign In
              </Button>
            </Link>
            <Link href="/register" passHref>
              <Button
                color="primary"
                variant="outlined"
                sx={{ mr: 2 }}
                className={styles.actionButtons}
              >
                Register
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};
export default Header;
