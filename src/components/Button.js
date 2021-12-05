import styled from 'styled-components';
import { getStyles } from '../layout/layouts';
const styles = getStyles();

const buttonTypes = {
  light: {
    background: `${styles.whiteColor}`,
    color: `${styles.accentColor}`,
    border: `1px solid ${styles.greenColor}`,
  },
  bright: {
    background: `${styles.accentColor}`,
    color: `${styles.whiteColor}`,
    border: 'none',
  },
};

export const DefaultButton = styled.button`
  padding: 14px 40px;
  background-color: ${({ btnType }) => buttonTypes[btnType].background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: ${({ btnType }) => buttonTypes[btnType].border};
  border-radius: 4px;
  color: ${({ btnType }) => buttonTypes[btnType].color};
  :hover,
  :focus {
    background: ${({ btnType }) =>
      btnType === 'light'
        ? buttonTypes['bright'].background
        : buttonTypes['light'].background};
    color: ${({ btnType }) =>
      btnType === 'light'
        ? buttonTypes['bright'].color
        : buttonTypes['light'].color};
  }
`;
export function Button({ children, btnType }) {
  return <DefaultButton btnType={btnType}>{children}</DefaultButton>;
}

Button.defaultProps = {
  btnType: 'light',
};
