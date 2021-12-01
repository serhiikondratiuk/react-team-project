import './App.css';
import Container from './components/base/Container/Container';
import Section from './components/base/Section/Section';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Container>
        <Logo children="Product" />
        <Navigation />
      </Container>
      <Container>
        <Section>
          <Home />
        </Section>
      </Container>
    </>
  );
}

export default App;
