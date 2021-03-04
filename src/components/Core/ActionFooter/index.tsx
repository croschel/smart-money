import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface ActionFooterProps {
  children: ReactNode;
}
interface ActionPrimaryButtonProps {
  title: string;
  onPress: () => void;
  size?: 'small' | 'medium' | 'large';
}

interface ActionSecondaryButtonProps {
  title: string;
  onPress: () => void;
}

export const ActionFooter = (props: ActionFooterProps) => {
  const { children } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export const ActionPrimaryButton = (props: ActionPrimaryButtonProps) => {
  const { title, onPress, size = 'small' } = props;

  const handleSize = () => {
    let fontSize = 18;
    switch (size) {
      case 'small':
        break;
      case 'medium':
        fontSize = 26;
        break;
      case 'large':
        fontSize = 32;
        break;
      default:
        break;
    }
    return fontSize;
  };

  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={[styles.primaryButtonText, { fontSize: handleSize() }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const ActionSecondaryButton = (props: ActionSecondaryButtonProps) => {
  const { title, onPress } = props;

  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
