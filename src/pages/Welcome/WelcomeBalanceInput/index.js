import React from 'react';
import { View, Text } from 'react-native';
import InputMoney from '~/components/Core/InputMoney';
import { styles } from './styles';

const WelcomeBalanceInput = (props) => {
  const { amount, onChangeValue } = props;
  return (
    <View>
      <Text style={styles.label}>Informe seu saldo</Text>
      <InputMoney
        value={amount}
        startWithDebt={false}
        onChangeValue={onChangeValue}
      />
    </View>
  );
};

export default WelcomeBalanceInput;
