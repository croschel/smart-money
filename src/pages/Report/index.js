import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import {Picker} from '@react-native-community/picker';
import BalanceLabel from '~/components/BalanceLabel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';
import {
  ActionFooter,
  ActionPrimaryButton,
} from '~/components/Core/ActionFooter';
import styles from './styles';

const Report = (props) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <BalanceLabel currentBalance={2220.5} />
      <View>
        <Picker>
          <Picker.Item label="Todas as categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <ScrollView>
        <EntrySummary />
        <EntryList />
      </ScrollView>
      <View>
        <ActionFooter>
          <ActionPrimaryButton
            title="Fechar"
            onPress={() => navigation.goBack()}
          />
        </ActionFooter>
      </View>
    </SafeAreaView>
  );
};

export default Report;
