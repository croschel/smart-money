import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const BalanceLabel = ({ currentBalance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>{`R$ ${currentBalance}`}</Text>
    </View>
  );
}

export default BalanceLabel;