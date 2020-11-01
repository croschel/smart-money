import {StyleSheet} from 'react-native';
import colors from '~/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.asphalt,
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  debitButton: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  debitButtonPrefix: {
    fontSize: 28,
    color: colors.white,
  },
  debitButtonUnit: {
    fontSize: 28,
    color: colors.white,
  },
  input: {
    flex: 1,
    fontSize: 28,
    color: colors.white,
    textAlign: 'right',
  },
});
