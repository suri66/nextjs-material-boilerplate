import { React } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import {
  Card,
  Box,
  CardActions,
  Button,
  CardContent,
  Typography,
  FormControl,
} from '@mui/material';
import { schema } from '../../lib/validationSchemas/loginSchema';
import CustomInputs from '../_Common/FormElements/CustomInputs/CustomInputs';
import styles from './forgetpassword.module.css';

function ForgotPasswordStepOne({ handleSubmit }) {
  return (
    <Box className={styles.container}>
      <Card className={styles.card}>
        <Box className={styles.cardBody}>
          <CardContent className={styles.heading}>
            <Typography variant="h4">Forgot Your Password?</Typography>
            <Typography variant="body">
              Don&#39;t worry, we will reset it together in no time.
            </Typography>
          </CardContent>
          <Formik initialValues={{ email: '' }} onSubmit={handleSubmit} validationSchema={schema}>
            <Form className={styles.form}>
              <FormControl sx={{ width: '100%', my: 4 }}>
                <CustomInputs
                  name="email"
                  id="email"
                  requiredmsg="*"
                  title="Email Address"
                  placeholder="Enter your email address"
                />
              </FormControl>
              <CardActions className={styles.cardActions}>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  sx={{ width: '100%', mb: 3 }}
                  type="submit"
                  onClick={() => console.log('clicked')}
                >
                  Send reset instructions
                </Button>
                <Link href="/login">
                  <a className={styles.link}>Back to Login</a>
                </Link>
              </CardActions>
            </Form>
          </Formik>
        </Box>
      </Card>
    </Box>
  );
}
ForgotPasswordStepOne.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
export default ForgotPasswordStepOne;
