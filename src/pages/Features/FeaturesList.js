import Icon from '../../components/Icon';
import Container from '../../components/base/Container';
// import Title from '../../components/base/Title';
import { Button } from '../../components/Button';
import styled from 'styled-components';
import { getStyles } from '../../layout/layouts';
const styles = getStyles();

const Title = styled.h2`
  margin-bottom: 57px;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  color: ${styles.mainFontColor};
`;

const List = styled.ul`
  margin-bottom: 34px;
  display: flex;
  justify-content: space-around;
`;

const FeatureItem = styled.li`
  width: 240px;
`;

const IconWrapperTypes = {
  green: {
    background: `${styles.accentColor}`,
  },
  blue: {
    background: `${styles.blueColor}`,
  },
  purple: {
    background: `${styles.purpleColor}`,
  },
  red: {
    background: `${styles.redColor}`,
  },
};

const IconWrapper = styled.div`
  margin-bottom: 30px;
  width: 50px;
  height: 50px;
  border-radius: 19px;

  background-color: ${({ iconType }) => IconWrapperTypes[iconType].background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeatureHeader = styled.h3`
  margin-bottom: 13px;
`;

// const Button = styled.button`
//   display: block;
//   margin: 0 auto;
// `;
// как дописывать стили в компоненты

const FeaturesList = () => {
  return (
    <>
      <Container>
        {/* <Title title="Product was Built Specifically for You" /> */}
        <Title>Product was Built Specifically for You</Title>
        <List>
          <FeatureItem>
            <IconWrapper iconType="green">
              <Icon
                iconName="arrow"
                width="12"
                height="18"
                fill={styles.whiteColor}
              />
            </IconWrapper>
            <FeatureHeader>First click tests</FeatureHeader>
            <p>While most people enjoy casino gambling.</p>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper iconType="blue">
              <Icon
                iconName="slug"
                width="18"
                height="18"
                fill={styles.whiteColor}
              />
            </IconWrapper>
            <FeatureHeader>Design surveys</FeatureHeader>
            <p>Sports betting, lottery and bingo playing for the fun</p>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper iconType="purple">
              <Icon
                iconName="heart"
                width="16"
                height="18"
                fill={styles.whiteColor}
              />
            </IconWrapper>
            <FeatureHeader>Preference tests</FeatureHeader>
            <p>The Myspace page defines the individual.</p>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper iconType="red">
              <Icon
                iconName="clock"
                width="14"
                height="18"
                fill={styles.whiteColor}
              />
            </IconWrapper>
            <FeatureHeader>Five second tests</FeatureHeader>
            <p>Personal choices and the overall personality of the person.</p>
          </FeatureItem>
        </List>
        <Button btnType="bright">SIGN UP NOW</Button>
      </Container>
    </>
  );
};

export default FeaturesList;
