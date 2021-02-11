/* eslint-disable no-bitwise */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

import styles from './styles';

const EntrySummaryChart = (props) => {
  const { balance } = props;

  const chartData = balance.map(({ category, amount }) => ({
    value: amount,
    svg: {
      fill: category.color,
    },
    key: category.id,
    arc: {
      outerRadius: '100%',
      innerRadius: '80%',
    },
  }));
  return (
    <View style={styles.container}>
      <PieChart style={styles.chart} data={chartData} />
    </View>
  );
};

export default EntrySummaryChart;
