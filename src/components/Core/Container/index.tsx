import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

interface ContainerProps {
  children: ReactNode;
  title: string;
  actionLabelText: string;
  actionButtonText: string;
  onPressActionButton: () => void;
}

const Container = (props: ContainerProps) => {
  const {
    children,
    title,
    actionLabelText,
    actionButtonText,
    onPressActionButton,
  } = props;
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      {children}

      {(actionLabelText || actionButtonText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && (
            <Text style={styles.actionLabel}>{actionLabelText}</Text>
          )}
          {actionButtonText && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onPressActionButton}
            >
              <Icon name="insert-chart" style={styles.actionButtonIcon} />
              <Text style={styles.actionButtonText}>{actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};
export default Container;
