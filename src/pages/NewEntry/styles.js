import { StyleSheet, Dimensions } from 'react-native';
import colors from '~/styles/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.background,
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 22,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    width: width - 20,
  },
  formActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 20,
  },
});
