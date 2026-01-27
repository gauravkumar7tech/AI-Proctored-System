// Theme Provider
import { CssBaseline, ThemeProvider } from '@mui/material';
import { baselightTheme } from './theme/DefaultColors';
import { baseDarkTheme } from './theme/DarkColors';
// Router Provider
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';

// Redux Provider
import { Provider, useSelector } from 'react-redux';
import store from './store';
// Tostify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Cheating Log Provider
import { CheatingLogProvider } from './context/CheatingLogContext';

function AppContent() {
  const themeMode = useSelector((state) => state.theme.mode);
  const theme = themeMode === 'dark' ? baseDarkTheme : baselightTheme;
  
  return (
    <ThemeProvider theme={theme}>
      <CheatingLogProvider>
        <ToastContainer />
        <CssBaseline />
        <RouterProvider router={Router} />
      </CheatingLogProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
