import './App.css';
import Header from './components/navbar/Header';
import Intro from './components/navbar/Intro';
import Aboutme from './components/navbar/Aboutme';
import Skills from './components/navbar/Skills'
import Projects from './components/navbar/Projects'
import Experience from './components/navbar/Experience';
import { Grid } from '@mui/material';
import Contact from './components/navbar/Contact';

function App() {
  return (
    <Grid sx={{ overflow: 'hidden', }}>
      
      <Intro />
      <Aboutme />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </Grid>
  );
}

export default App;
