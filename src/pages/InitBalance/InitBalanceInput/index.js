import React from 'react';
import { View, Text } from 'react-native';
import InputMoney from '~/components/Core/InputMoney';
import { styles } from './styles';

const InitBalanceInput = (props) => {
  const { amount, onChangeValue } = props;
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Informe seu saldo</Text>
      <InputMoney
        value={amount}
        startWithDebt={false}
        onChangeValue={onChangeValue}
      />
    </View>
  );
};

export default InitBalanceInput;
