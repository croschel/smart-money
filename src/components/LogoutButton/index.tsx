import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  NavigationActions,
  NavigationScreenProp,
  NavigationStackAction,
  StackActions,
} from 'react-navigation';
import { NavigationStackState } from 'react-navigation-stack';
import { cleanUserAuth } from '~/services/Auth';
import colors from '~/styles/colors';
import { styles } from './styles';

interface LogoutButtonProps {
  position: 'topRight' | 'topLeft' | 'bottomLeft' | 'bottomRight';
  onPress: () => void;
}

const LogoutButton = (props: LogoutButtonProps) => {
  const { position, onPress } = props;

  const handlePosition = () => {
    let stylePosition;
    switch (position) {
      case 'topLeft':
        stylePosition = styles.topLeft;
        break;
      case 'topRight':
        stylePosition = styles.topRight;
        break;
      case 'bottomLeft':
        stylePosition = styles.bottomLeft;
        break;
      case 'bottomRight':
        stylePosition = styles.bottomRight;
        break;
      default:
        break;
    }
    return stylePosition;
  };

  return (
    <View style={[styles.container, handlePosition()]}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="logout" size={40} color={colors.red} />
      </TouchableOpacity>
    </View>
  );
};

export default LogoutButton;
