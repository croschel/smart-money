import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CategoryObject } from '~/../declarations';

import CategoryModal from '~/components/CategoryModal';
import styles from './styles';

interface NewEntryCategoryProps {
  debit: boolean;
  category: CategoryObject;
  onChangeCategory: (item: CategoryObject) => void;
}

const NewEntryCategory = ({
  debit,
  category,
  onChangeCategory,
}: NewEntryCategoryProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onCategoryPress = (item: CategoryObject) => {
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
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
      <CategoryModal
        debit={debit}
        filter
        modalVisible={modalVisible}
        onSelectCategory={onCategoryPress}
        onClose={onClosePress}
      />
    </View>
  );
};

export default NewEntryCategory;
