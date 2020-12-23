import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker';
import colors from '~/styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const NewEntryDatePicker = (props) => {
  const {value, onChange} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeValue = (date) => {
    onChange(date);
    onCancel();
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Icon name="today" color={colors.white} size={30} />
      </TouchableOpacity>
      <DateTimePicker
        mode="date"
        datePickerModeAndroid="calendar"
        titleIOS="Data de vencimento"
        cancelTextIOS="Cancelar"
        confirmTextIOS="Ok"
        date={value}
        isVisible={modalVisible}
        onConfirm={onChangeValue}
        onCancel={onCancel}
      />
    </View>
  );
};

export default NewEntryDatePicker;
