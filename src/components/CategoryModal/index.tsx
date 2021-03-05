import React, { useEffect, useState } from 'react';
// eslint-disable-next-line object-curly-newline
import { View, Text, Modal, FlatList, TouchableOpacity } from 'react-native';
import {
  ActionFooter,
  ActionPrimaryButton,
} from '~/components/Core/ActionFooter';
import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
} from '~/services/Categories';
import styles from './styles';

interface CategoryObject {
  id: string;
  name: string;
  color: string;
  isInit: boolean;
  isDefault: boolean;
  isCredit: boolean;
  isDebit: boolean;
  order: number;
}
interface CategoryModalProps {
  debit: boolean;
  filter: boolean;
  modalVisible: boolean;
  onSelectCategory: (item: CategoryObject) => void;
  onClose: () => void;
}

const CategoryModal = (props: CategoryModalProps) => {
  // eslint-disable-next-line object-curly-newline
  const { debit, filter, onSelectCategory, onClose, modalVisible } = props;

  const [categories, setCategories] = useState<CategoryObject[]>([]);

  useEffect(() => {
    async function loadCategories() {
      let data;
      if (!filter) {
        data = await getAllCategories();
      } else if (debit) {
        data = await getDebitCategories();
      } else {
        data = await getCreditCategories();
      }
      // console.log('LoadCategories :: ', JSON.stringify(data));
      setCategories(data);
    }
    loadCategories();
  }, [debit, filter]);

  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={styles.modal}>
        <FlatList
          data={categories}
          keyExtractor={(item: CategoryObject) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onSelectCategory(item)}
              style={styles.modalItem}
            >
              <Text style={[styles.modalItemText, { color: item.color }]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <ActionFooter>
          <ActionPrimaryButton title="FECHAR" onPress={() => onClose()} />
        </ActionFooter>
      </View>
    </Modal>
  );
};

export default CategoryModal;
