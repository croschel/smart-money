import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';

import {getDebitCategories, getCreditCategories} from '~/services/Categories';

import styles from './styles';

const NewEntryCategory = (props) => {
  const {debit, category, onChangeCategory} = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      let data;
      if (debit) {
        data = await getDebitCategories();
      } else {
        data = await getCreditCategories();
      }

      setCategories(data);
    }
    loadCategories();
    console.log('All Categories are loaded');
  }, [debit]);

  const onCategoryPress = (item) => {
    onChangeCategory(item);
    setModalVisible(false);
  };

  const onClosePress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => onCategoryPress(item)}
                style={styles.modalItem}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClosePress}>
            <Text style={styles.closeButtonText}>FECHAR</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default NewEntryCategory;
