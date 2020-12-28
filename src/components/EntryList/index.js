import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import Container from '~/components/Core/Container';
import EntryListItem from './EntryListItem';
import {getEntries} from '~/services/Entries';
import styles from './styles';

const EntryList = (props) => {
  const {onEntryPress, onPressActionButton, days = 7} = props;
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries(days);
      setEntries(data);
    }
    loadEntries();
  }, []);

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
      onPressActionButton={onPressActionButton}>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
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
