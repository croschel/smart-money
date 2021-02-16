import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';
import styles from './styles';

const NewEntryGeoPicker = () => {
  const onButtonPress = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        Alert.alert(
          'Location',
          `Latitude: ${latitude} / Longitude: ${longitude}`
        );
      },
      (error) => {
        console.error('NewEntryGeoPicker :: geo was not found', error);
      }
    );
  };
  return (
    <View>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Icon name="person-pin" color={colors.white} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default NewEntryGeoPicker;
