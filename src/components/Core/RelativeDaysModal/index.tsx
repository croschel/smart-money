import React from 'react';
import { View, Text, Modal, FlatList, TouchableOpacity } from 'react-native';
import {
  ActionFooter,
  ActionPrimaryButton,
} from '~/components/Core/ActionFooter';
import styles from './styles';

interface RelativeDaysModal {
  isVisible: boolean;
  onConfirm: (item: number) => void;
  onCancel: () => void;
}

const RelativeDaysModal = (props: RelativeDaysModal) => {
  const { isVisible, onConfirm, onCancel } = props;
  const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 365];
  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <View style={styles.modal}>
        <FlatList
          data={relativeDays}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.modalItem}
              onPress={() => onConfirm(item)}
            >
              <Text style={styles.modalItemText}>{`${item} dias`}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <ActionFooter>
        <ActionPrimaryButton title="Fechar" onPress={onCancel} />
      </ActionFooter>
    </Modal>
  );
};

export default RelativeDaysModal;
