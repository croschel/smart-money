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
  closeButton: {
    borderColor: colors.green,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderRadius: 24,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 22,
    color: colors.green,
    textAlign: 'center',
  },
});
