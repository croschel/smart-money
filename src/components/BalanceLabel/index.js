import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useBalance from '~/hooks/useBalance';
import styles from './styles';
import colors from '~/styles/colors';

const BalanceLabel = () => {
  const [currentBalance] = useBalance();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <LinearGradient
        style={styles.linearBox}
        colors={[colors.violet, colors.blue]}
      >
        <Text style={styles.value}>{currentBalance}</Text>
      </LinearGradient>
    </View>
  );
};

export default BalanceLabel;
