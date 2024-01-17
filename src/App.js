import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { DarkTheme } from './Theme/DarkTheme/Darktheme';
import Homepage from './Customer/pages/Homepage/Homepage';
import Routers from './routers/Routers';


function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline/>
     <Routers/>
    </ThemeProvider>
    
  );
}

export default App;
