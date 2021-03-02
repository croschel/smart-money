/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { styles } from './styles';

const InputMoney = (props) => {
  const { value, onChangeValue, startWithDebt = true, onChangeDebit } = props;

  const setDefaultDebit = () => {
    if (value === 0) {
      return startWithDebt ? -1 : 1;
    }
    return value <= 0 ? -1 : 1;
  };
  const setDefaultPrefix = () => {
    if (value === 0) {
      return startWithDebt ? '-' : '';
    }
    return value <= 0 ? '-' : '';
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
    onChangeValue(value * -1);
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
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue(rawValue * debit);
        }}
      />
    </SafeAreaView>
  );
};

export default InputMoney;
