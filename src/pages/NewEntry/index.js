import React, {useState, useEffect} from 'react';
import {View, TextInput, Button} from 'react-native';
import BalanceLabel from '~/components/BalanceLabel';
import NewEntryInput from './NewEntryInput';
import {saveEntry, deleteEntry} from '~/services/Entries';
import styles from './styles';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0.0,
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(`${entry.amount}`);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  const onSave = () => {
    const value = {
      amount: parseFloat(amount),
    };
    saveEntry(value, entry);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <NewEntryInput
          value={amount}
          onChangeValue={(value) => setAmount(value)}
        />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>
      <View>
        <Button
          title="Adicionar"
          onPress={() => {
            isValid() && onSave();
          }}
        />
        <Button title="Excluir" onPress={onDelete} />
        <Button title="Cancelar" onPress={() => onClose()} />
      </View>
    </View>
  );
};

export default NewEntry;
