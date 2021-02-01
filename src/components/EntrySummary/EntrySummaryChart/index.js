/* eslint-disable no-bitwise */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

import styles from './styles';

const EntrySummaryChart = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  const randomColor = () =>
    `#${((Math.random() * 0xffffff) << 0).toString(16)}000000`.slice(0, 7);

  const chartData = data
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
      },
      key: `pie-${index}`,
    }));
  return (
    <View style={styles.container}>
      <PieChart style={styles.chart} data={chartData} />
    </View>
  );
};

export default EntrySummaryChart;
