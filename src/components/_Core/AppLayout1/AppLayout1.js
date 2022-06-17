/**
 * @name AppLayout1.js
 * @description App layout wrapper- Sticky Header and Sticky Footer
 * @version 0.0.0
 */
import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import styles from './applayout1.module.css';
import Footer from '../Footer/Footer';
import MuiHeader from '../Header/Header';
import NextHead from '../NextHead/NextHead';
import MobileSideBar from '../SideBar/MobileSideBar';
import DesktopSideBar from '../SideBar/DesktopSideBar';
import SideBarContent from '../SideBar/SideBarContent/SideBarContent';

function AppLayout1({ children }) {
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
        <Footer className={styles.stickyFooter} />
      </Box>
    </Box>
  );
}

AppLayout1.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout1;
