import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';

export default StyleSheet.create({
  container: {
    marginBottom: -25,
  },
  panel: {
    paddingVertical: 10,
  },
  button: {
    backgroundColor: colors.green,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: -25,
    marginRight: 10,
    shadowColor: colors.black,
    elevation: 5,
  },
});
