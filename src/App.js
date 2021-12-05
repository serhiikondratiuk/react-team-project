import Container from './components/base/Container/Container';
import Section from './components/base/Section/Section';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import FooterBottomPart from './components/Footer/Footer';
import CustomerSupport from './pages/customerSupport/';
import CollaborativeSection from './pages/Collaborative/Collaborative';

function App() {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Home />
        </Container>
      </Section>
      <CustomerSupport />
      <CollaborativeSection />
      <Container>
        <FooterBottomPart />
      </Container>
    </>
  );
}

export default App;
