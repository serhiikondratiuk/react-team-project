import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getStyles } from '../../../layout/layouts';
const styles = getStyles();

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  color: ${styles.mainFontColor};
`;

const Title = title => {
  return <SectionTitle>{title}</SectionTitle>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
