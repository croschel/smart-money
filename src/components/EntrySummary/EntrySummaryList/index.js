import React from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

const EntrySummaryList = ({ categories }) => {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Text>{`${item.description}: $${item.amount}`}</Text>}
      />
    </View>);
}

export default EntrySummaryList;
