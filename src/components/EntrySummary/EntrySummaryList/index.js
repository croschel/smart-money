import React from 'react';
import { View, FlatList } from 'react-native';
import EntrySummaryListItem from './EntrySummaryListItem';
// import styles from './styles';

const EntrySummaryList = (props) => {
  const { balance } = props;
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
