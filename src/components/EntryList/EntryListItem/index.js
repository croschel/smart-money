import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Ball} from '~/resources/svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '~/styles/colors';
import styles from './styles';
import {convertDateDetails, amountFormat} from '~/util';

const EntryListItem = ({entry, isFirstItem, isLastItem, onEntryPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onEntryPress && onEntryPress(entry)}
      style={styles.container}>
      <Ball
        isFirstItem={isFirstItem}
        isLastItem={isLastItem}
        color={entry.category.color}
      />
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{entry.description}</Text>
        <View style={styles.details}>
          <View style={styles.detailsFooter}>
            <Icon
              style={styles.entryAtIcon}
              color={colors.metal}
              name="access-time"
              size={16}
            />
            <Text style={styles.entryAtText}>
              {convertDateDetails(entry.entryAt)}
            </Text>
            {entry.address && (
              <>
                <Icon
                  style={styles.addressIcon}
                  color={colors.metal}
                  name="person-pin"
                  size={16}
                />
                <Text style={styles.addressText}>{entry.address}</Text>
              </>
            )}
          </View>
        </View>
      </View>
      <View style={styles.amount}>
        <Text style={styles.amountText}>{amountFormat(entry.amount)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EntryListItem;
