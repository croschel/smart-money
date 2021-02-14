import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import colors from '~/styles/colors';

const ballWithoutLine = (props) => {
  const { color } = props;

  return (
    <Svg width="20" height="20">
      <Circle
        cx="10"
        cy="10"
        r="8"
        stroke={colors.background}
        strokeWidth="1.5"
        fill={color}
      />
    </Svg>
  );
};

export default ballWithoutLine;
