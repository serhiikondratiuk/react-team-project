import Container from '../../components/base/Container/Container';
import Section from '../../components/base/Section/Section';
import Title from '../../components/base/Title';
import styled from 'styled-components';
import { Button } from '../../components/Button';

const Paragraph = styled.p`
  margin: 16px auto 32px;
  width: 542px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.62;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 95px;
  margin-bottom: 24px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 388px;
  margin-bottom: 24px;

  span {
    display: inline-block;
    padding: 14px 24px;
    background: #ffffff;
    box-shadow: 0px 2px 15px rgba(23, 58, 86, 0.1);
    border-radius: 26px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }

  img {
    border-radius: 50%;
  }
`;
const array = [
  {
    id: '1',
    avatar: require('../../img/contact-expert/Avator-01.jpg').default,
    text: 'I can take care of your pitch',
  },
  {
    id: '2',
    avatar: require('../../img/contact-expert/Avator-02.jpg').default,
    text: 'I can design you website',
  },
  {
    id: '3',
    avatar: require('../../img/contact-expert/Avator-03.jpg').default,
    text: 'I can help marketing strategy',
  },
  {
    id: '4',
    avatar: require('../../img/contact-expert/Avator-04.jpg').default,
    text: 'I can prototype your app',
  },
];

const ContactExpert = () => {
  return (
    <Section className="colored-section">
      <Container>
        <Title title="Quick &amp; Easy Process" />
        <Paragraph>
          Do you require some help for your project: Conception workshop,
          prototyping, marketing strategy, landing page, Ux/UI?
        </Paragraph>
        <List>
          {array.map(obj => {
            return (
              <Item key={obj.id}>
                <span>{obj.text}</span>
                <img src={obj.avatar} alt={obj.text} width="98" height="98" />
              </Item>
            );
          })}
        </List>
        <Button btnType="bright" className="centered-btn">
          Contact our expert
        </Button>
      </Container>
    </Section>
  );
};

export default ContactExpert;
