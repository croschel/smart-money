import React from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {styles} from './styles';

const NewEntryInput = ({value, onChangeValue}) => {
  const optionsInput = {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: '',
    suffixUnit: '',
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.debitButton}>
        <Text style={styles.debitButtonPrefix}>- </Text>
        <Text style={styles.debitButtonUnit}>R$</Text>
      </TouchableOpacity>
      <TextInputMask
        style={styles.input}
        type="money"
        options={optionsInput}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          onChangeValue(rawValue);
        }}
      />
    </SafeAreaView>
  );
};

export default NewEntryInput;
