import Icon from '../Icon';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  .icon-logo-header {
    margin-right: 16px;
  }
`;

const Logo = ({ children }) => {
  return (
    <LogoWrapper>
      <Icon iconName="logo-header" width="40" height="37" />
      <span>{children}</span>
    </LogoWrapper>
  );
};

export default Logo;
