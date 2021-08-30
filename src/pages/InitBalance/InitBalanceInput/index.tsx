import React from 'react';
import { View, Text } from 'react-native';
import InputMoney from '~/components/Core/InputMoney';
import { styles } from './styles';

interface InitBalanceInputProps {
  amount: string;
  onChangeValue: () => void;
}

const InitBalanceInput = ({ amount, onChangeValue }: InitBalanceInputProps) => {
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
