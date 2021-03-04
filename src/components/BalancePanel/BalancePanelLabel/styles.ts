import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    zIndex: 1,
  },
  label: {
    fontSize: 14,
    color: colors.white,
  },
  value: {
    fontSize: 36,
    color: colors.white,
  },
});
