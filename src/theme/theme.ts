'use client';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Heebo } from 'next/font/google';

const heebo = Heebo({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

let theme = createTheme({
  palette: {
    primary: {
      main: '#f20d81',
    },
    secondary: {
      main: '#E0C2FF',
      light: '#EDF7FA',
      contrastText: '#47008F',
    },
  },
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class', 
  },
  typography: {
    fontFamily: heebo.style.fontFamily,
  },
  components: {
    MuiContainer:{
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width: 600px)': {
              maxWidth: '680px'
            },
        },
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width: 900px)': {
            maxWidth: '860px'
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none'
      },
      styleOverrides: {
          root: {
            color: '#000',
            '&:hover, &.active':{
              color:'#f20d81'
            }
          }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary'},
          style: {
            color: '#fff'
          },
        },
      ]
    },
  },
});

theme = responsiveFontSizes(theme);
// theme.typography.h3 = {
//   fontSize: '2rem',

//   [theme.breakpoints.up('md')]: {
//     fontSize: '3rem',
//   }
// }
export default theme;
