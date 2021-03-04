import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import colors from '~/styles/colors';

import styles from './styles';

interface BalanceLabelProps {
  onNewEntryPress: () => void;
}

const BalanceLabel = (props: BalanceLabelProps) => {
  const { onNewEntryPress } = props;
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.panel}
        colors={[colors.violet, colors.blue]}
      >
        <BalancePanelLabel />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="add" color={colors.white} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default BalanceLabel;
