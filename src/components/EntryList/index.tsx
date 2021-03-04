import React from 'react';
import { FlatList } from 'react-native';
import Container from '~/components/Core/Container';
import EntryListItem from './EntryListItem';
import useEntries from '~/hooks/useEntries';
// import styles from './styles';

interface EntryListItemProps {
  onEntryPress: (entry: EntryObject) => void;
  onPressActionButton: () => void;
  days: number;
  category: CategoryObject;
}

interface EntryObject {
  id: string;
  amount: number;
  description: string;
  entryAt: Date;
  latitude: number;
  longitude: number;
  address: string;
  photo: string;
  isInit: boolean;
  category: CategoryObject;
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
  entries: EntryObject;
}

const EntryList = (props: EntryListItemProps) => {
  // eslint-disable-next-line object-curly-newline
  const { onEntryPress, onPressActionButton, days = 7, category } = props;
  const [entries] = useEntries(days, category);

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

  return (
    <Container
      title="Últimos Lançamentos"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}
    >
      <FlatList
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
