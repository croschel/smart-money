import React, { useState } from 'react';
import { View } from 'react-native';
import BalanceLabel from '~/components/BalanceLabel';
import NewEntryInput from './NewEntryInput';
import NewEntryCategory from './NewEntryCategory';
import NewEntryDatePicker from './NewEntryDatePicker';
import NewEntryDeleteAction from './NewEntryDeleteAction';
import NewEntryGeoPicker from './NewEntryGeoPicker';
import {
  ActionFooter,
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '~/components/Core/ActionFooter';
import useEntries from '~/hooks/useEntries';
import styles from './styles';

const NewEntry = ({ navigation }) => {
  const [, saveEntry, deleteEntry] = useEntries();

  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0.0,
    entryAt: new Date(),
    category: {
      id: null,
      name: 'Selecione',
    },
  });

  const [debit, setDebit] = useState(entry.amount <= 0);
  const [amount, setAmount] = useState(
    `${parseFloat(entry.amount).toFixed(2)}`
  );
  const [category, setCategory] = useState(entry.category);
  const [entryAt, setEntryAt] = useState(entry.entryAt);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  const onClose = () => {
    navigation.goBack();
  };

  const onSave = () => {
    const value = {
      amount: parseFloat(amount),
      category,
      entryAt,
    };
    saveEntry(value, entry);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View style={styles.formContainer}>
        <NewEntryInput
          value={amount}
          onChangeValue={(value) => setAmount(value)}
          onChangeDebit={setDebit}
        />
        <NewEntryCategory
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />
        <View style={styles.formActionContainer}>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
          <NewEntryDeleteAction onOkPress={onDelete} entry={entry} />
          <NewEntryGeoPicker />
        </View>
      </View>
      <View>
        <ActionFooter>
          <ActionPrimaryButton
            title={entry.id ? 'Atualizar' : 'Adicionar'}
            onPress={() => isValid() && onSave()}
          />
          <ActionSecondaryButton title="Cancelar" onPress={onClose} />
        </ActionFooter>
      </View>
    </View>
  );
};

export default NewEntry;
