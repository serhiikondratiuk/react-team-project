import Container from './components/base/Container';
import Section from './components/base/Section';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import FooterBottomPart from './components/Footer/Footer';
import CustomerSupport from './pages/customerSupport/';
import FeaturesList from './pages/Features';
import CollaborativeSection from './pages/Collaborative/Collaborative';
import ContactExpert from './pages/ContactExpert/ContactExpert';

function App() {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Home />
        </Container>
      </Section>
      <FeaturesList />
      <ContactExpert />
      <CustomerSupport />
      <CollaborativeSection />
      <Container>
        <FooterBottomPart />
      </Container>
    </>
  );
}

export default App;
