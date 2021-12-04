import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { getStyles } from '../../layout/layouts';
const styles = getStyles();

const Input = styled.input`
  width: 325px;
  height: 48px;
  margin-bottom: 20px;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
  border: 1px solid ${styles.greenColor};
  border-radius: 4px;
  outline: none;
`;

const Form = () => {
  return (
    <div>
      <form>
        <Input></Input>
      </form>
      <Button btnType="bright" type="button">
        Sign Up Now
      </Button>
    </div>
  );
};

export default Form;
