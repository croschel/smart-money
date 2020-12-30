import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';

export default styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: colors.background,
  },
  modalItem: {
    backgroundColor: colors.asphalt,
    borderRadius: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
  },
  modalItemText: {
    fontSize: 22,
    color: colors.white,
    textAlign: 'center',
  },
});
