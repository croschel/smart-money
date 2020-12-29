import React, {useState} from 'react';
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
import {
  ActionFooter,
  ActionPrimaryButton,
} from '~/components/Core/ActionFooter';
import colors from '~/styles/colors';
import styles from './styles';
import {formatSingleNumber} from '~/util';

const Report = (props) => {
  const {navigation} = props;
  const [showRelativeDaysModal, setRelativeDaysModal] = useState(false);
  const [relativeDays, setRelativeDays] = useState(7);

  const onRelativeDaysPress = (item) => {
    setRelativeDays(item);
    onRelativeDaysClose();
  };

  const onRelativeDaysClose = () => {
    setRelativeDaysModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BalanceLabel currentBalance={2220.5} />
      <View>
        <TouchableOpacity
          onPress={() => setRelativeDaysModal(true)}
          style={styles.filterButton}>
          <Text style={styles.filterButtonText}>
            {formatSingleNumber(relativeDays)}
          </Text>
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
      </View>
      <ScrollView>
        <EntrySummary />
        <EntryList days={relativeDays} />
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
