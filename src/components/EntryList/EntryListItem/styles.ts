import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  bullet: {},
  description: {
    flex: 1,
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: colors.white,
  },
  details: {
    flexDirection: 'row',
  },
  entryAtIcon: {
    marginRight: 4,
  },
  entryAtText: {
    fontSize: 12,
    color: colors.metal,
  },
  addressIcon: {
    marginRight: 4,
    marginLeft: 8,
  },
  addressText: {
    fontSize: 12,
    color: colors.metal,
  },
  detailsFooter: {
    flexDirection: 'row',
  },
  amount: {
    justifyContent: 'center',
    paddingLeft: 8,
  },
  amountText: {
    fontSize: 14,
    color: colors.white,
  },
  addressBox: {
    flexDirection: 'row',
    maxWidth: 210,
  },
});
