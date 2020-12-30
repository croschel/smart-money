import React, { useEffect, useState } from 'react';
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

const CategoryModal = (props) => {
  const { debit, filter, onSelectCategory, onClose, modalVisible } = props;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      let data;
      if (filter) {
        data = await getAllCategories();
      } else {
        if (debit) {
          data = await getDebitCategories();
        } else {
          data = await getCreditCategories();
        }
      }

      setCategories(data);
    }
    loadCategories();
  }, [debit, filter]);

  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={styles.modal}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onSelectCategory(item)}
              style={styles.modalItem}>
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
