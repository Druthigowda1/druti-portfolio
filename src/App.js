import './App.css';
import Intro from './components/navbar/Intro';
import Header from './components/navbar/Header';
import Skills from './components/navbar/Skills'
import { Grid } from '@mui/material';
import Works from './components/navbar/Works';
import Languages from './components/navbar/Languages';
import Projects from './components/navbar/Projects'

function App() {
  return (
    <Grid sx={{ overflow: 'hidden', }}>
      <Header />
      <Intro />
      <Skills />
      <Works />
      <Languages />
      <Projects />
    </Grid>
  );
}

export default App;
