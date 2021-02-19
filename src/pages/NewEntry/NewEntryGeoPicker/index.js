import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';
import styles from './styles';

const NewEntryGeoPicker = (props) => {
  const { address, onChange } = props;
  const getLocation = (latitude, longitude) => {
    // remember to isolate api_key on env before push this branch
    Geocoder.init('AIzaSyAk57YYzHSTRCnL_rt1zCQylWVsSGrpj48');
    Geocoder.from({ latitude, longitude })
      .then((json) => {
        const formattedAdress = json.results[0].formatted_address;
        Alert.alert('Localização', formattedAdress, [
          {
            text: 'Cancelar',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'Confirmar',
            onPress: () => {
              onChange({
                latitude,
                longitude,
                address: formattedAdress,
              });
            },
          },
        ]);
      })
      .catch((error) => {
        console.warn('NewEntryGeoPicker :: Location was not found', error);
        Alert.alert(
          'Houve um erro ao recuperar sua posição, favor verificar a autorização para uso de sua localização.'
        );
      });
  };

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        getLocation(latitude, longitude);
      },
      (error) => {
        console.error('NewEntryGeoPicker :: Position was not found', error);
        Alert.alert(
          'Houve um erro ao recuperar sua posição, favor verificar a autorização para uso de sua localização.'
        );
      }
    );
  };

  const onButtonPress = () => {
    if (address) {
      Alert.alert('Localização', address, [
        {
          text: 'Apagar',
          onPress: () => {
            onChange({ latitude: null, longitude: null, address: '' });
          },
        },
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed'),
          style: 'cancel',
        },
      ]);
    } else {
      getPosition();
    }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={onButtonPress}
        style={[styles.button, address ? styles.buttonActivated : '']}
      >
        <Icon name="person-pin" color={colors.white} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default NewEntryGeoPicker;
