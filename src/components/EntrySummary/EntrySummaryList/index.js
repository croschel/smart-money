import React from 'react';
import { View, Text, FlatList } from 'react-native';

// import styles from './styles';

const EntrySummaryList = (props) => {
  const { balance } = props;
  return (
    <View>
      <FlatList
        data={balance}
        keyExtractor={(item) => item.category.id}
        renderItem={({ item }) => (
          <Text>{`${item.category.name}: $${item.amount}`}</Text>
        )}
      />
    </View>
  );
};

export default EntrySummaryList;
