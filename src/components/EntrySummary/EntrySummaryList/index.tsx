import React from 'react';
import { View, FlatList } from 'react-native';
import EntrySummaryListItem from './EntrySummaryListItem';
// import styles from './styles';

interface EntrySummaryListProps {
  balance: [
    {
      amount: number;
      category: CategoryObject;
    }
  ];
}

interface CategoryObject {
  id: string;
  name: string;
  color: string;
  isInit: boolean;
  isDefault: boolean;
  isCredit: boolean;
  isDebit: boolean;
  order: number;
}

const EntrySummaryList = (props: EntrySummaryListProps) => {
  const { balance } = props;
  // console.log('Balance EntrySummaryList :: ', balance);
  return (
    <View>
      <FlatList
        data={balance}
        keyExtractor={(item) => item.category.id}
        renderItem={({ item }) => <EntrySummaryListItem entry={item} />}
      />
    </View>
  );
};

export default EntrySummaryList;
