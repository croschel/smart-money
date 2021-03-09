/* eslint-disable object-curly-newline */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ball } from '~/resources/svg';
import colors from '~/styles/colors';
import styles from './styles';
import {
  convertDateDetails,
  amountFormat,
  convertDateDetailsTimestamp,
} from '~/util';
import { EntryObject } from '~/../declarations';

interface EntryListItemProps {
  entry: EntryObject;
  isFirstItem: boolean;
  isLastItem: boolean;
  onEntryPress: (entry: EntryObject) => void;
}

const EntryListItem = (props: EntryListItemProps) => {
  const { entry, isFirstItem, isLastItem, onEntryPress } = props;
  const { address, category, description, entryAt } = entry;

  const handleAddress = () => {
    if (address) {
      const formatString = address.split('-');

      return formatString[0];
    }
    return address;
  };
  return (
    <TouchableOpacity
      onPress={() => onEntryPress && onEntryPress(entry)}
      style={styles.container}
    >
      <Ball
        isFirstItem={isFirstItem}
        isLastItem={isLastItem}
        color={category.color}
      />
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
        <View style={styles.detailsFooter}>
          <View style={styles.details}>
            <Icon
              style={styles.entryAtIcon}
              color={colors.metal}
              name="access-time"
              size={16}
            />
            <Text style={styles.entryAtText}>
              {convertDateDetailsTimestamp(entryAt)}
            </Text>
          </View>
          {address && (
            <View style={styles.addressBox}>
              <Icon
                style={styles.addressIcon}
                color={colors.metal}
                name="person-pin"
                size={16}
              />
              <Text style={styles.addressText}>{handleAddress()}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.amount}>
        <Text style={styles.amountText}>{amountFormat(entry.amount)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EntryListItem;
