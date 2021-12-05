import React from 'react';
import './Collaborative.css';
// import PropTypes from 'prop-types';
// import Icon from '../../components/Icon';
import Container from '../../components/base/Container/Container';
import styled from 'styled-components';
// import SVGcheked from '../../img/svg/checked.svg'

const CollaborativeSection = styled.section`
  padding-top: 75px;
  padding-bottom: 75px;
`;

const CollaborativeWrapper = styled.div`
  width: 486px;
  height: 416px;
  padding: 18px 0;
`;

const Subheading = styled.p`
  margin-bottom: 8px;
  width: 133px;
  height: 24px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;

  color: #22343d;
`;

const Heading = styled.h2`
  margin-bottom: 23px;
  height: 48px;
  width: 226px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 1.5;

  color: #22343d;
`;

const CollaborativeParagraph = styled.p`
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

const CollaborativeItem = styled.div`
  margin-bottom: 25px;
  height: 90px;
  width: 486px;
  :last-child {
    margin-bottom: 0px;
  }
`;

const CollaborativeheadingParagraph = styled.h3`
  margin-bottom: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.62;
`;

const CollaborativeItemParagraph = styled.p`
  font-family: Poppins;
  font-style: normal; 
  font-weight: normal; 
  font-size: 16px; 
  line-height: 1.62;
`;

function Collaborative(props) {
  return (
    <CollaborativeSection className="collaborativeImageWrapper">
      <Container>
        <CollaborativeWrapper>
          <Subheading>Optimisation for</Subheading>
          <Heading>Collaborative</Heading>
          <CollaborativeParagraph>
            Few would argue that, despite the advancements of <br />
            feminism over the past three decades, women still face a <br />
            double standard when it comes to their behavior.
          </CollaborativeParagraph>
          <ul>
            <CollaborativeItem>
                          <CollaborativeheadingParagraph>Accessory makers</CollaborativeheadingParagraph>
                          <CollaborativeItemParagraph>
                              While most people enjoy casino gambling, sports betting, <br />
                              lottery and bingo playing for the fun
                          </CollaborativeItemParagraph>
            </CollaborativeItem>
            <CollaborativeItem>
                          <CollaborativeheadingParagraph>Alterationists</CollaborativeheadingParagraph>
                          <CollaborativeItemParagraph>
                              If you are looking for a new way to promote your business <br />
                              that won’t cost you more money,
                          </CollaborativeItemParagraph>
            </CollaborativeItem>
          </ul>
        </CollaborativeWrapper>
      </Container>
    </CollaborativeSection>
  );
}

export default Collaborative;