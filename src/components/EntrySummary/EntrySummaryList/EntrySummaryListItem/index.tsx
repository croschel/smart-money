import React from 'react';
import { View, Text } from 'react-native';
import { CategoryObject } from '~/../declarations';
import { BallWithouLine } from '~/resources/svg/';
import { amountFormat } from '~/util';
import styles from './styles';

interface EntrySummaryListItemProps {
  entry: {
    amount: number;
    category: CategoryObject;
  };
}

const EntrySummaryListItem = (props: EntrySummaryListItemProps) => {
  const { entry } = props;
  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <BallWithouLine color={entry.category.color} />
        <Text style={styles.contentText}>{`${entry.category.name}:`}</Text>
      </View>
      <Text style={styles.contentValue}>{`${amountFormat(entry.amount)}`}</Text>
    </View>
  );
};

export default EntrySummaryListItem;
