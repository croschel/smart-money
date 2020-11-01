import React from 'react';
import {SafeAreaView} from 'react-native';
import BalancePanel from '~/components/BalancePanel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';
import styles from './styles';

const Main = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <BalancePanel
        currentBalance={2220.55}
        onNewEntryPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary onPressActionButton={() => navigation.navigate('Report')} />
      <EntryList
        onEntryPress={(entry) =>
          navigation.navigate('NewEntry', {entry: entry})
        }
        onPressActionButton={() => navigation.navigate('Report')}
      />
    </SafeAreaView>
  );
};

export default Main;
