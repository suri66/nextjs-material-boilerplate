import React, { useState } from 'react';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import { CardContent, Card, Typography, Button, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import CustomInputs from '../_Common/FormElements/CustomInputs/CustomInputs';
import logInSchema from '../../lib/validationSchemas/loginSchema';
import styles from './login.module.css';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardContent className={styles.welcomeText}>
          <Typography color="text.secondary" gutterBottom variant="h5" sx={{ fontWeight: 'bold' }}>
            Hi, Welcome Back!
          </Typography>
        </CardContent>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, submitProps) => {
            setTimeout(() => {
              submitProps.setSubmitting(false);
            }, 2000);
          }}
          validationSchema={logInSchema}
        >
          {({ isSubmitting }) => (
            <>
              <Form className="m-3">
                <CustomInputs
                  requiredmsg="*"
                  title="Email address"
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter your email address"
                />
                <CustomInputs
                  requiredmsg="*"
                  title="Password"
                  id="examplePassword"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Enter your password"
                />

                <div className="mb-4 text-end">
                  <Link href="/forgotPassword">Forgot Password?</Link>
                </div>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  className="w-100 mb-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <CircularProgress /> : 'Login'}
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default LoginPage;
