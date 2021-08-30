import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import BalanceLabel from '~/components/BalanceLabel';
import EntrySummary from '~/components/EntrySummary';
import EntryList from '~/components/EntryList';
import RelativeDaysModal from '~/components/Core/RelativeDaysModal';
import CategoryModal from '~/components/CategoryModal';
import {
  ActionFooter,
  ActionPrimaryButton,
} from '~/components/Core/ActionFooter';
import colors from '~/styles/colors';
import styles from './styles';
import { formatSingleNumber } from '~/util';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const Report = ({ navigation }: NavigationStackScreenProps) => {
  const [showRelativeDaysModal, setShowRelativeDaysModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [relativeDays, setRelativeDays] = useState(7);
  const [category, setCategory] = useState({
    id: null,
    name: 'Todas as Categorias',
  });

  const onCategoryCloseModal = () => {
    setShowCategoryModal(false);
  };

  type ItemForCategory = {
    id: null | string;
    name: null | string;
  };

  const onSelectCategory = (item: ItemForCategory) => {
    setCategory(item);
    onCategoryCloseModal();
  };

  const onRelativeDaysClose = () => {
    setShowRelativeDaysModal(false);
  };

  const onRelativeDaysPress = (item: ItemForCategory) => {
    setRelativeDays(item);
    onRelativeDaysClose();
  };
  return (
    <SafeAreaView style={styles.container}>
      <BalanceLabel />
      <View style={styles.filtersContainer}>
        <TouchableOpacity
          onPress={() => setShowRelativeDaysModal(true)}
          style={styles.filterButton}
        >
          <Text style={styles.filterButtonText}>
            {formatSingleNumber(relativeDays)}
          </Text>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={colors.champagneDark}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowCategoryModal()}
          style={styles.filterButton}
        >
          <Text style={styles.filterButtonText}>{category.name}</Text>
          <Icon
            name="keyboard-arrow-down"
            size={20}
            color={colors.champagneDark}
          />
        </TouchableOpacity>
        <RelativeDaysModal
          isVisible={showRelativeDaysModal}
          onConfirm={onRelativeDaysPress}
          onCancel={onRelativeDaysClose}
        />
        <CategoryModal
          modalVisible={showCategoryModal}
          onSelectCategory={onSelectCategory}
          onClose={onCategoryCloseModal}
        />
      </View>
      <ScrollView>
        <EntrySummary days={relativeDays} />
        <EntryList
          onEntryPress={(entry) => navigation.navigate('NewEntry', { entry })}
          days={relativeDays}
          category={category}
        />
      </ScrollView>
      <View>
        <ActionFooter>
          <ActionPrimaryButton
            title="Fechar"
            onPress={() => navigation.goBack()}
          />
        </ActionFooter>
      </View>
    </SafeAreaView>
  );
};

export default Report;
