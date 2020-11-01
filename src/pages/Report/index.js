import React from 'react';
import { SafeAreaView, View, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';
import BalanceLabel from '~/components/BalanceLabel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';

import styles from './styles';

const Report = () => {
  const categories = [
    { key: '1', description: "Alimentação", amount: 200 },
    { key: '2', description: "Combustível", amount: 12 },
    { key: '3', description: "Aluguel", amount: 120 },
    { key: '4', description: "Lazer", amount: 250 },
    { key: '5', description: "Outros", amount: 1200 }
  ];

  const entries = [
    { key: '1', description: "Padaria Asa Branca", amount: 200 },
    { key: '2', description: "Supermercado Isadora", amount: 120 },
    { key: '3', description: "Posto Ipiranga", amount: 120 },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <BalanceLabel currentBalance={2220.50} />
      <View>
        <Picker>
          <Picker.Item label="Todas as categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary categories={categories} />
      <EntryList entries={entries} />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </SafeAreaView>
  );
}

export default Report;