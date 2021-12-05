import React from 'react';
import './CustomerSupport.css';
// import PropTypes from 'prop-types';
// import Icon from '../../components/Icon';
import Container from '../../components/base/Container';
import styled from 'styled-components';
// import SVGcheked from '../../img/svg/checked.svg'

const CustomerSection = styled.section`
  padding-top: 75px;
  padding-bottom: 75px;
`;

const Wrapper = styled.div`
  padding-left: 637px;
  width: 486px;
  height: 427px;
`;

const SupTitle = styled.p`
  margin-bottom: 8px;
  width: 215px;
  height: 24px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;

  color: #22343d;
`;
const Title = styled.h2`
  margin-bottom: 23px;
  height: 48px;
  width: 303px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 1.5;

  color: #22343d;
`;
const Paragraph = styled.p`
  margin-bottom: 30px;
  height: 78px;
  width: 486px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.62;

  color: #22343d;
`;
const ListItem = styled.li`
  position: relative;
  margin-bottom: 30px;
  padding-left: 60px;
  height: 52px;
  width: 385px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.62;

  color: #22343d;

  ::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 5px;
    height: 30px;
    width: 30px;
    border-radius: 14px;

    background-image: url(../../img/svg/checked.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 16px 12px;
  }
  :nth-of-type(1)::before {
    background-color: #ff9900;
  }
  :nth-of-type(2)::before {
    background-color: #f03e3d;
  }
  :nth-of-type(3)::before {
    background-color: #4d8dff;
  }
`;

function CustomerSupport(props) {
  return (
    <CustomerSection className="imageWrapper">
      <Container>
        <Wrapper>
          <SupTitle>Easier decision making for</SupTitle>
          <Title>Customer Support</Title>
          <Paragraph>
            The Myspace page defines the individual, his or her <br />
            characteristics, traits, personal choices and the overall <br />
            personality of the person.
          </Paragraph>
          <ul>
            <ListItem>
              Never worry about overpaying for your <br /> energy again.
            </ListItem>
            <ListItem>
              We will only switch you to energy companies <br /> that we trust
              and will treat you right
            </ListItem>
            <ListItem>
              We track the markets daily and know where the <br /> savings are.
            </ListItem>
          </ul>
        </Wrapper>
      </Container>
    </CustomerSection>
  );
}

// CustomerSupport.defaultProps = {};
// CustomerSupport.propTypes = {};

export default CustomerSupport;
