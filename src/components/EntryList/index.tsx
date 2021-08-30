import React from 'react';
import { FlatList } from 'react-native';
import Container from '~/components/Core/Container';
import EntryListItem from './EntryListItem';
import useEntries from '~/hooks/useEntries';
import { CategoryObject, EntryObject } from '~/../declarations';
// import styles from './styles';

interface EntryListItemProps {
  onEntryPress: (entry: EntryObject) => void;
  onPressActionButton: () => void;
  days: number;
  category?: CategoryObject;
}

const EntryList = (props: EntryListItemProps) => {
  // eslint-disable-next-line object-curly-newline
  const { onEntryPress, onPressActionButton, days = 7, category } = props;
  const [entries, , ,] = useEntries(days, category);

  const checkBallFirstPosition = (index: number) => {
    if (index === 0) {
      return true;
    }
    return false;
  };

  const checkBallLastPosition = (index: number, arraySize: number) => {
    if (index === arraySize - 1) {
      return true;
    }
    return false;
  };
  // console.log('entries details on convertFunction :: ', entries);
  return (
    <Container
      title="Últimos Lançamentos"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}
    >
      <FlatList
        //@ts-ignore
        data={entries}
        keyExtractor={(item: EntryObject) => item.id}
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
