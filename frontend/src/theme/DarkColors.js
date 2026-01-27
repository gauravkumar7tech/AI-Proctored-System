import { createTheme } from "@mui/material/styles";
import typography from "./Typography";
import { shadows } from "./Shadows";

const baseDarkTheme = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'dark',
    primary: {
      main: '#5D87FF',
      light: '#1E2139',
      dark: '#4570EA',
    },
    secondary: {
      main: '#49BEFF',
      light: '#0A1B2E',
      dark: '#23afdb',
    },
    success: {
      main: '#13DEB9',
      light: '#051F1B',
      dark: '#02b3a9',
      contrastText: '#ffffff',
    },
    info: {
      main: '#539BFF',
      light: '#0C1929',
      dark: '#1682d4',
      contrastText: '#ffffff',
    },
    error: {
      main: '#FA896B',
      light: '#2C1512',
      dark: '#f3704d',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FFAE1F',
      light: '#2D2512',
      dark: '#ae8e59',
      contrastText: '#ffffff',
    },
    purple: {
      A50: '#1E2139',
      A100: '#6610f2',
      A200: '#557fb9',
    },
    grey: {
      100: '#2A3547',
      200: '#3A4555',
      300: '#4A5568',
      400: '#9CA3AF',
      500: '#B0B7C3',
      600: '#E5E7EB',
    },
    text: {
      primary: '#E5E7EB',
      secondary: '#9CA3AF',
    },
    background: {
      default: '#111827',
      paper: '#1F2937',
    },
    divider: '#374151',
    action: {
      disabledBackground: 'rgba(229,231,235,0.12)',
      hoverOpacity: 0.08,
      hover: '#2D3748',
    },
  },
  typography,
  shadows,
});

export { baseDarkTheme };
