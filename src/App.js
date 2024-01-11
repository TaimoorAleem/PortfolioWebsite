import './App.css';
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Themes.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Projects from './components/Projects';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(0, 50, 65, 0.15) 0%, rgba(0, 255, 255, 0) 50%), linear-gradient(141.27deg, rgba(0, 50, 65, 0) 50%, rgba(0, 50, 65, 0.15) 100%);
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Home />
          <Wrapper>
            <Skills />
            <Education />
            <Projects />
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
