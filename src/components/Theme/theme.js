import { createTheme } from '@mui/material/';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#032363',
      light: '#093387',
      dark: 'rgb(33,50,73)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          backgroundColor: 'inherit',
          '&:hover': {
            backgroundColor: '#032363',
            color: 'white',
          },
        },
      },
    },
  },
});
