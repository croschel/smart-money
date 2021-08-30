import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { EntryObject } from '~/../declarations';

import colors from '~/styles/colors';
import styles from './styles';

interface NewEntryDeleteActionProps {
  onOkPress: () => void;
  entry: EntryObject;
}

const NewEntryDeleteAction = ({
  onOkPress,
  entry,
}: NewEntryDeleteActionProps) => {
  const onDelete = () => {
    Alert.alert(
      'Apagar?',
      'Você deseja realmente apagar este lançamento?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => onOkPress() },
      ],
      { cancelable: false }
    );
  };

  return (
    entry.id && (
      <View>
        <TouchableOpacity onPress={onDelete} style={styles.button}>
          <Icon name="delete" size={30} color={colors.red} />
        </TouchableOpacity>
      </View>
    )
  );
};

export default NewEntryDeleteAction;
