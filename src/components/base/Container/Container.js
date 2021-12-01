import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 145px;
    padding-right: 145px;
  }
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
