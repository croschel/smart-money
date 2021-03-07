import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  content: {
    flex: 1,
  },
  logo: {
    alignItems: 'center',
    marginTop: 20,
  },
});
