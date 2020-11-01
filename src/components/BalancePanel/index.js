import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import colors from '~/styles/colors';

import styles from './styles';

const BalanceLabel = ({currentBalance, onNewEntryPress}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.panel}
        colors={[colors.violet, colors.blue]}>
        <BalancePanelLabel currentBalance={currentBalance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="add" color={colors.white} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default BalanceLabel;
