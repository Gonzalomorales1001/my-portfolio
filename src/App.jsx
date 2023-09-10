import { useState, createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'font-awesome/css/font-awesome.css';
import Nav from './components/Nav'
import Me from './components/Me';
import AboutMe from './components/AboutMe';
import { ThemeProvider, createTheme } from '@mui/material';
import Projects from './components/Projects';
import Contact from './components/Contact';

export const DarkModeContext = createContext();

function App() {
  const [dark, setDark] = useState(true);
  const toggleDarkMode = () => setDark(!dark);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <DarkModeContext.Provider value={{ dark, toggleDarkMode }}>
      <ThemeProvider theme={dark && darkTheme}>
        {/* <Nav /> */}
        <div className={`scrollspy light-gradient`} data-bs-spy="scroll" data-bs-target=".navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex="0">
          <Me />
          <AboutMe />
          <Projects />
          <Contact />
        </div>
      </ThemeProvider>
    </DarkModeContext.Provider>
  )
}

export default App
