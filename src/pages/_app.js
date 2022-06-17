import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material';
import ErrorBoundary from '../components/_Providers/ErrorBoundary';
// import AppLayout from '../components/_Core/AppLayout/AppLayout';
import AppLayout1 from '../components/_Core/AppLayout1/AppLayout1';
// import AppLayout2 from '../components/_Core/AppLayout2/AppLayout2';
// import AppLayout3 from '../components/_Core/AppLayout3/AppLayout3';
import { theme } from '../components/Theme/theme';

// global css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const isLoggedInUser = true;
  if (isLoggedInUser) {
    return (
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <AppLayout1>
            <Component {...pageProps} />
            <br />
            <br />
          </AppLayout1>
        </ErrorBoundary>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Component {...pageProps} />
        <br />
        <br />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MyApp;
