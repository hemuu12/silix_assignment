import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    headline: {
      fontFamily: 'Inter',
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '38px',
    },
    semibold: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
    },
    normal: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
    },
  },
});

export default theme;
