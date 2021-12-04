import './App.css';
import Container from './components/base/Container/Container';
import Section from './components/base/Section/Section';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import FooterBottomPart from './components/Footer/Footer';
import CustomerSupport from './pages/customerSupport/';

function App() {
  return (
    <>
      <Container>
        <Logo children="Product" />
        <Navigation />
      </Container>
      <Section>
        <Container>
          <Home />
        </Container>
      </Section>
      <Container>
        <FooterBottomPart />
      </Container>
      <CustomerSupport />
    </>
  );
}

export default App;
