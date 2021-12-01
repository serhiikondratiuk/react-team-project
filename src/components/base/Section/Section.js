import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getStyles } from '../../../layout/layouts';
const styles = getStyles();

const SectionWrapper = styled.section`
  padding: 0 25px;
  margin: 0;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  color: ${styles.mainFontColor};
`;

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
