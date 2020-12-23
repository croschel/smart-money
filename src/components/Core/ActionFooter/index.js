import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export const ActionFooter = (props) => {
  const {children} = props;
  return (
    <View style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export const ActionPrimaryButton = (props) => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionSecondaryButton = (props) => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
