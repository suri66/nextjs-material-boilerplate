// @name AppLayout2.js
// * @description App layout wrapper- Non-Sticky Header and Footer

import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import NextHead from '../NextHead/NextHead';
import DesktopSideBar from '../SideBar/DesktopSideBar';
import MobileSideBar from '../SideBar/MobileSideBar';
import Footer from '../Footer/Footer';
import MuiHeader from '../Header/Header';
import SideBarContent from '../SideBar/SideBarContent/SideBarContent';

function AppLayout2({ children }) {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const drawer = <SideBarContent handleClick={handleDrawerToggle} open={open} />;
  return (
    <Box sx={{ display: 'flex' }}>
      <NextHead />
      <MuiHeader handleDrawerToggle={handleDrawerToggle} open={open} />
      <Box component="nav" aria-label="menu-items">
        <MobileSideBar open={open} onClose={handleDrawerToggle} drawer={drawer} />
        <DesktopSideBar open={open} drawer={drawer} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {children}
        <Footer />
      </Box>
    </Box>
  );
}

AppLayout2.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout2;
