import React from 'react';
import Link from 'next/link';
import { Card, Box, CardActions, Button, CardContent, Typography } from '@mui/material';

import styles from './forgetpassword.module.css';

function ForgetPasswordStepTwo() {
  return (
    <Box className={styles.container}>
      <Card className={styles.card}>
        <Box className={styles.cardBody}>
          <CardContent className={styles.heading}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Please check your email
            </Typography>
            <Typography variant="h6">Follow the link sent to your email address</Typography>
          </CardContent>

          <CardActions className={styles.cardActions}>
            <Button
              color="primary"
              sx={{ width: '100%', my: 4 }}
              type="submit"
              size="lg"
              variant="contained"
            >
              Resend recovery email
            </Button>
            <Link href="/login">
              <a className={styles.link}>Back to Login</a>
            </Link>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
}

export default ForgetPasswordStepTwo;
