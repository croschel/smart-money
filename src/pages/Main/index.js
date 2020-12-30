/*
  cliente com possibilidade de escolher objetivos financeiros,
  com base nisso o mesmo será avisado caso este objetivo esteja ficando
  mais distante ou mais perto, de acordo com as compras e créditos em conta
  mensais. O cliente poderá escolher uma categoria de objetivos e subsequentemente
  poderá nomear seu objetivo.

  Cliente pode definir objetivos claros financeiros com base em quanto quer
  levantar em determinado espaço de tempo
*/

import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import BalancePanel from '~/components/BalancePanel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';
import styles from './styles';

const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <BalancePanel
        currentBalance={2220.55}
        onNewEntryPress={() => navigation.navigate('NewEntry')}
      />
      <ScrollView>
        <EntrySummary
          onPressActionButton={() => navigation.navigate('Report')}
        />
        <EntryList
          days={7}
          onEntryPress={(entry) =>
            navigation.navigate('NewEntry', { entry: entry })
          }
          onPressActionButton={() => navigation.navigate('Report')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
