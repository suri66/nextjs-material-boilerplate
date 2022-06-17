import { React, useState } from 'react';
import { Form, Formik } from 'formik';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CustomInputs from '../_Common/FormElements/CustomInputs/CustomInputs';
import CustomDropdown from '../_Common/FormElements/CustomDropdown/CustomDropdown';
import styles from './RegisterPage.module.css';
import CustomRadios from '../_Common/FormElements/CustomRadios/CustomRadios';
import Customcheckbox from '../_Common/FormElements/CustomCheckbox/Customcheckbox';
import schema from '../../lib/validationSchemas/registerSchema';

function RegisterPage() {
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
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Sign Up
          </Typography>
        </CardContent>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            newpassword: '',
            confirmpassword: '',
            email: '',
            address: '',
            city: '',
            Gender: '',
            hobbies: [],
          }}
          onSubmit={(values, submitProps) => {
            console.log('values', values);
            setTimeout(() => {
              submitProps.setSubmitting(false);
            }, 2000);
          }}
          validationSchema={schema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box className={styles.formSection}>
                <CustomInputs
                  requiredmsg="*"
                  title="First Name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                />
                <CustomInputs
                  requiredmsg="*"
                  title="Last Name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                />
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
                <CustomInputs
                  requiredmsg="*"
                  title="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <CustomInputs
                  multiline
                  requiredmsg="*"
                  title="Address"
                  id="address"
                  type="textarea"
                  name="address"
                  placeholder="Enter your address"
                />

                <CustomDropdown title="City" id="city" requiredmsg="*" name="city" type="select" />
                <CustomRadios
                  title="Gender"
                  type="radio"
                  name="Gender"
                  id="gender"
                  requiredmsg="*"
                />
                <Customcheckbox
                  name="hobbies"
                  title="Hobbies"
                  type="checkbox"
                  id="hobbies"
                  requiredmsg="*"
                />
              </Box>
              <CardActions>
                <Button
                  color="primary"
                  type="submit"
                  sx={{ my: 1, width: '100%' }}
                  variant="contained"
                >
                  {isSubmitting ? <CircularProgress /> : 'Save'}
                </Button>
              </CardActions>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default RegisterPage;
