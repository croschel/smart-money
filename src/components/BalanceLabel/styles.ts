import {StyleSheet} from 'react-native';
import colors from '~/styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 16,
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: colors.white,
    paddingVertical: 4,
  },
  linearBox: {
    borderRadius: 16,
  },
  value: {
    fontSize: 36,
    color: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
});
