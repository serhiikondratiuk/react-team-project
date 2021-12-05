import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 75px 0;
`;

const Section = ({ className, children }) => {
  return <SectionWrapper className={className}>{children}</SectionWrapper>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
