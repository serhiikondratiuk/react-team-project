// import styled from 'styled-components';
import Container from '../../components/base/Container/Container';
import Section from '../../components/base/Section/Section';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';

const Header = () => {
  return (
    <Section>
      <Container>
        <Logo children="Product" />
        <Navigation />
      </Container>
    </Section>
  );
};

export default Header;
