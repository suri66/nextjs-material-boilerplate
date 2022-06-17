/**
 * @name Footer.js
 * @description App Footer
 * @version 0.0.0
 */

import propTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { APP_INFO } from '../../../constants/constants';
import styles from './Footer.module.css';

function Footer({ className }) {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <Box className={styles.container}>
        <Typography className={styles.footerText}>
          Copyright © 2022 {APP_INFO.name}- All Rights Reserved.
        </Typography>
      </Box>
    </footer>
  );
}

Footer.propTypes = {
  className: propTypes.string.isRequired,
};
export default Footer;
