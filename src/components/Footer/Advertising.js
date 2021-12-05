import React from 'react';
import './AdvertisingImage.css';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { getStyles } from '../../layout/layouts';
const styles = getStyles();

const AdvertisingWrapper = styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 150px;
  width: 968px;
  height: 345px;
  border-radius: 32px;
  background-color: ${styles.accentColor};
`;

const AdvertisingText = styled.p`
  color: ${styles.whiteColor};
  font-family: Arial;
  font-weight: 600;
  font-size: 32px;
  line-height: 1.5;
  margin-top: 0px;
  margin-bottom: 49px;
`;
// шрифт временно

const LeftPartAd = styled.div`
  padding-top: 49px;
  padding-left: 51px;
`;

const Advertising = () => {
  return (
    <AdvertisingWrapper className="advertisingImage">
      <LeftPartAd>
        <AdvertisingText>
          Join 100 compannies who <br />
          boost their business with <br />
          Product
        </AdvertisingText>
        <Button btnType="light" type="button">
          Get This
        </Button>
      </LeftPartAd>
    </AdvertisingWrapper>
  );
};

export default Advertising;
