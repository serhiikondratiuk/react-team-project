import PropTypes from 'prop-types';
import sprite from '../img/sprite.svg';

const Icon = ({ className, iconName, width, height, fill, stroke }) => {
  return (
    <svg
      className={`icon icon-${iconName} ${className}`}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use xlinkHref={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

Icon.defaultProps = {
  width: '24px',
  height: '24px',
  fill: '#000000',
  stroke: 'inherit',
  iconName: '',
};

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  iconName: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
