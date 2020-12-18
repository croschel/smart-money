import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';

import {getAllCategories} from '~/services/Categories';

import styles from './styles';

const NewEntryCategory = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    async function loadAllCategories() {
      const data = await getAllCategories();
      setAllCategories(data);
    }
    loadAllCategories();
    console.log('All Categories are loaded');
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.pickerButtonText}>Alimentação</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <FlatList
            data={allCategories}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.modalItem}>
                <Text style={[styles.modalItemText, {color: item.color}]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>FECHAR</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default NewEntryCategory;
