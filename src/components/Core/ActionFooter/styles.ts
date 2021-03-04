import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingVertical: 10,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryButton: {
    borderRadius: 150,
    borderWidth: 1,
    borderColor: colors.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  primaryButtonText: {
    textAlign: 'center',
    color: colors.green,
  },
  secondaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.white,
  },
});
