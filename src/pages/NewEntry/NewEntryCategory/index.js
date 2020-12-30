import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import CategoryModal from '~/components/CategoryModal';
import styles from './styles';

const NewEntryCategory = (props) => {
  const { debit, category, onChangeCategory } = props;

  const [modalVisible, setModalVisible] = useState(false);

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
      <CategoryModal
        debit={debit}
        modalVisible={modalVisible}
        onSelectCategory={onCategoryPress}
        onClose={onClosePress}
      />
    </View>
  );
};

export default NewEntryCategory;
