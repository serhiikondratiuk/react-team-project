import Icon from '../../components/Icon';
import { getStyles } from '../../layout/layouts';
import styled from 'styled-components';
const styles = getStyles();

const VideoLink = styled.a`
  display: flex;
  align-items: center;
  color: ${styles.accentColor};
  .icon-triangle {
    margin-right: 8px;
  }
`;

const Home = params => {
  return (
    <div>
      <h1>Work at the speed of thought</h1>
      <p>
        Tools, tutorials, design and innovation experts, all in one place! The
        most intuitive way to imagine your next user experience.
      </p>
      <div>
        <button type="button">Get started</button>
        <VideoLink href="/">
          <Icon
            fill={styles.accentColor}
            iconName="triangle"
            width="20"
            height="17"
          />
          <span>Watch the Video</span>
        </VideoLink>
      </div>
    </div>
  );
};
export default Home;
