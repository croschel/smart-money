/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';
import styles from './styles';

const ButtonIcon = (props) => {
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

ButtonIcon.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
  activated: PropTypes.any,
  icon: PropTypes.string.isRequired,
};
ButtonIcon.defaultProps = {
  activated: false,
};

export default ButtonIcon;
