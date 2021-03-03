import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';

export const styles = StyleSheet.create({
  label: {
    color: colors.white,
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 16,
  },
  inputContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
