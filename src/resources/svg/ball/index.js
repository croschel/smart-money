import React from 'react';
import {View} from 'react-native';
import {Svg, Rect, Circle, G} from 'react-native-svg';
import colors from '~/styles/colors';

const ball = (props) => {
  const {isFirstItem, isLastItem} = props;
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);

  const bullletColor = colors.white;
  return (
    <Svg width="30" height="50">
      {showBulletLine && (
        <Rect
          x="9"
          y={bulletLineY}
          width="1.5"
          height={bulletLineHeight}
          fill={colors.background}
        />
      )}
      <Circle
        cx="10"
        cy="25"
        r="8"
        stroke={colors.background}
        strokeWidth="1.5"
        fill={bullletColor}
      />
    </Svg>
  );
};

export default ball;
