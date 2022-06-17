import { React, useState } from 'react';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CustomInputs from '../_Common/FormElements/CustomInputs/CustomInputs';
import styles from './forgetpassword.module.css';
import { resetPasswordSchema } from '../../lib/validationSchemas/loginSchema';

function ForgetPasswordStepThree() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Box className={styles.cardBody}>
          <CardContent className={styles.heading}>
            <Typography variant="h4" sx={{ mb: 1 }}>
              Set up a new password
            </Typography>
            <Typography variant="body">
              Please enter your new password in the fields below
            </Typography>
          </CardContent>
          <Formik
            initialValues={{ confirmpassword: '', newpassword: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={resetPasswordSchema}
          >
            <Form className={styles.form}>
              <div className={styles.inputContainer}>
                <FormControl sx={{ my: 3, width: '100%' }}>
                  <CustomInputs
                    title="New password"
                    type={showNewPassword ? 'text' : 'password'}
                    id="new-password"
                    name="newpassword"
                    placeholder="Your new password"
                    requiredmsg="*"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={toggleNewPassword}
                          edge="end"
                        >
                          {showNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl sx={{ my: 3, width: '100%' }}>
                  <CustomInputs
                    title="Confirm password"
                    id="confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmpassword"
                    placeholder="Your new password"
                    requiredmsg="*"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={toggleConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <CardActions className={styles.cardActions}>
                <Button
                  color="primary"
                  sx={{ width: '100%', my: 4 }}
                  type="submit"
                  size="lg"
                  variant="contained"
                >
                  Reset Password
                </Button>
                <Link href="/login">
                  <a className={styles.link}>Back to Login</a>
                </Link>
              </CardActions>
            </Form>
          </Formik>
        </Box>
      </Card>
    </div>
  );
}

export default ForgetPasswordStepThree;
