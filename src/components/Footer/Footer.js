import React from 'react';
import Logo from '../Logo/Logo';
import styled from 'styled-components';
import Icon from '../Icon';

const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const LogoIconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 94px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 160px;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Link = styled.a`
  font-family: Arial;
  font-size: 16px;
  line-height: 2.19;
  text-decoration: none;
`;
// шрифт временно

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterText = styled.p`
  font-family: Arial;
  font-size: 16px;
  line-height: 1.87;
  text-align: center;
  margin-bottom: 46px;
`;
// шрифт временно

const ResourceList = [
  { name: 'About us', href: '/' },
  { name: 'Blog', href: '/' },
  { name: 'Contact', href: '/' },
  { name: 'FAQ', href: '/' },
];

const LegalStuffList = [
  { name: 'Disclaimer', href: '/' },
  { name: 'Financing', href: '/' },
  { name: 'Privacy policy', href: '/' },
  { name: 'Terms of Service', href: '/' },
];

const FooterBottomPart = () => {
  return (
    <footer>
      <FooterNav>
        <LogoIconsWrapper>
          <Logo children="Product" />
          <Icons>
            <Icon iconName="instagram" width="40" height="40" />
            <Icon iconName="facebook" width="40" height="40" />
            <Icon iconName="twitter" width="40" height="40" />
          </Icons>
        </LogoIconsWrapper>
        <ListWrapper>
          <h2>Resource</h2>
          {/* поставить компонет H */}

          <List>
            {ResourceList.map(item => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </List>
        </ListWrapper>
        <ListWrapper>
          <h2>Legal Stuff</h2>
          {/* поставить компонет H*/}
          <List>
            {LegalStuffList.map(item => (
              <li key={item.name}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </List>
        </ListWrapper>
        <form></form>
        {/* вынести форму в отдельный компонет */}
      </FooterNav>
      <FooterText>Made With Love By Figmaland All Right Reserved</FooterText>
    </footer>
  );
};

export default FooterBottomPart;
