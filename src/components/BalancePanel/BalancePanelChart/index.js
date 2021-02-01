import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-svg-charts';
import useBalanceSumbyDate from '~/hooks/useBalanceSumbyDate';
import styles from './styles';

const BalancePanelChart = () => {
  const [balanceSum] = useBalanceSumbyDate();
  const svgAttributes = {
    fill: 'rgba(0,0,0,.1)',
    stroke: 'rgba(0,0,0,.1)',
    strokeWidth: 1,
  };

  return (
    <View style={styles.container}>
      <BarChart
        style={styles.chart}
        data={balanceSum}
        svg={svgAttributes}
        contentInset={{ top: 0, bottom: 0 }}
      />
    </View>
  );
};

export default BalancePanelChart;
