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
//translations
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_en from './translations/en/global.json';
import global_es from './translations/es/global.json';

export const DarkModeContext = createContext();

function App() {
  const [dark, setDark] = useState(true);
  const toggleDarkMode = () => setDark(!dark);

  i18next.init({
    interpolation: { escapeValue: false },
    lng: "es",
    resources: {
      en: {
        global: global_en
      },
      es: {
        global: global_es
      }
    }
  })

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <DarkModeContext.Provider value={{ dark, toggleDarkMode }}>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={dark && darkTheme}>
          <Nav />
          <div className={`scrollspy ${dark ? 'dark-gradient' : 'light-gradient'}`} data-bs-spy="scroll" data-bs-target=".navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex="0">
            <Me />
            <AboutMe />
            <Projects />
            <Contact />
          </div>
        </ThemeProvider>
      </I18nextProvider>
    </DarkModeContext.Provider>
  )
}

export default App
