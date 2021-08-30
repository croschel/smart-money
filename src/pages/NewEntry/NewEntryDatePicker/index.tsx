import { DateTimePickerResult } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ButtonIcon from '~/components/Core/ButtonIcon';

interface NewEntryDatePickerProps {
  value: string;
  onChange: (data: DateTimePickerResult) => void;
}

const NewEntryDatePicker = ({ value, onChange }: NewEntryDatePickerProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onCancel = () => {
    setModalVisible(false);
  };

  const onChangeValue = (date: unknown) => {
    onChange(date);
    onCancel();
  };
  return (
    <View>
      <ButtonIcon onButtonPress={() => setModalVisible(true)} icon="today" />
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
