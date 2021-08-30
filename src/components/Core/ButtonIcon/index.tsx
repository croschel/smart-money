/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';
import styles from './styles';

interface ButtonIconProps {
  onButtonPress: () => void;
  activated?: any;
  icon: string;
}

const ButtonIcon = (props: ButtonIconProps) => {
  const { onButtonPress, activated, icon } = props;
  return (
    <View>
      <TouchableOpacity
        onPress={onButtonPress}
        style={[styles.button, activated ? styles.buttonActivated : '']}
      >
        <Icon name={icon} color={colors.white} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonIcon;
