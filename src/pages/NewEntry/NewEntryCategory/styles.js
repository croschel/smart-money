import {StyleSheet} from 'react-native';
import colors from '~/styles/colors';

export default styles = StyleSheet.create({
  pickerButton: {
    backgroundColor: colors.asphalt,
    borderRadius: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  pickerButtonText: {
    fontSize: 28,
    color: colors.white,
    textAlign: 'center',
  },
});
