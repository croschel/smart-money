/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { styles } from './styles';

interface InputMoneyProps {
  value: string;
  onChangeValue: (res: number) => void;
  startWithDebt?: boolean;
  onChangeDebit?: (res: boolean) => void;
}

const InputMoney = (props: InputMoneyProps) => {
  const { value, onChangeValue, startWithDebt = true, onChangeDebit } = props;
  const floatValue = parseFloat(value);

  const setDefaultDebit = () => {
    if (floatValue === 0) {
      return startWithDebt ? -1 : 1;
    }
    return floatValue <= 0 ? -1 : 1;
  };
  const setDefaultPrefix = () => {
    if (floatValue === 0) {
      return startWithDebt ? '-' : '';
    }
    return floatValue <= 0 ? '-' : '';
  };

  const [debit, setDebit] = useState(setDefaultDebit);
  const [debitPrefix, setDebitPrefix] = useState(setDefaultPrefix);
  const optionsInput = {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: '',
    suffixUnit: '',
  };
  const handleChangeDebit = () => {
    if (debit < 0) {
      setDebit(1);
      setDebitPrefix('');
      onChangeDebit && onChangeDebit(false);
    } else {
      setDebit(-1);
      setDebitPrefix('-');
      onChangeDebit && onChangeDebit(true);
    }
    onChangeValue(floatValue * -1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        disabled={!startWithDebt}
        onPress={handleChangeDebit}
        style={styles.debitButton}
      >
        <Text style={styles.debitButtonPrefix}>{debitPrefix}</Text>
        <Text style={styles.debitButtonUnit}>R$</Text>
      </TouchableOpacity>
      <TextInputMask
        style={styles.input}
        type="money"
        options={optionsInput}
        value={value}
        includeRawValueInChangeText
        onChangeText={(maskedValue: string, rawValue: string) => {
          onChangeValue(parseFloat(rawValue) * debit);
        }}
      />
    </SafeAreaView>
  );
};

export default InputMoney;
