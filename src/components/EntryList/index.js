import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Container from '~/components/Core/Container';
import EntryListItem from './EntryListItem';
import useEntries from '~/hooks/useEntries';
// import styles from './styles';

const EntryList = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { onEntryPress, onPressActionButton, days, category } = props;
  const [entries] = useEntries(days, category);

  const checkBallFirstPosition = (index) => {
    if (index === 0) {
      return true;
    }
    return false;
  };

  const checkBallLastPosition = (index, arraySize) => {
    if (index === arraySize - 1) {
      return true;
    }
    return false;
  };

  return (
    <Container
      title="Últimos Lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}
    >
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <EntryListItem
            entry={item}
            isFirstItem={checkBallFirstPosition(index)}
            isLastItem={checkBallLastPosition(index, entries.length)}
            onEntryPress={() => onEntryPress(item)}
          />
        )}
      />
    </Container>
  );
};

export default EntryList;
