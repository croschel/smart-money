import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {styles} from './styles';

const NewEntryInput = ({value, onChangeValue}) => {
  const [debit, setDebit] = useState(value < 0 ? -1 : 1);
  const [debitPrefix, setDebitPrefix] = useState(value < 0 ? '-' : '');
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
    } else {
      setDebit(-1);
      setDebitPrefix('-');
    }
    onChangeValue(value * -1);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleChangeDebit} style={styles.debitButton}>
        <Text style={styles.debitButtonPrefix}>{debitPrefix}</Text>
        <Text style={styles.debitButtonUnit}>R$</Text>
      </TouchableOpacity>
      <TextInputMask
        style={styles.input}
        type="money"
        options={optionsInput}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue(rawValue * debit);
        }}
      />
    </SafeAreaView>
  );
};

export default NewEntryInput;
