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
import LogoutButton from '~/components/LogoutButton';
import { cleanUserAuth } from '~/services/Auth';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const Main = ({ navigation }: NavigationStackScreenProps) => {
  const handleLogout = async () => {
    await cleanUserAuth();
    navigation.navigate('Sign');
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
        <ScrollView>
          <EntrySummary
            onPressActionButton={() => navigation.navigate('Report')}
          />
          <EntryList
            days={7}
            onEntryPress={(entry) => navigation.navigate('NewEntry', { entry })}
            onPressActionButton={() => navigation.navigate('Report')}
          />
        </ScrollView>
      </SafeAreaView>
      <LogoutButton position="topRight" onPress={handleLogout} />
    </>
  );
};
export default Main;
