import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 4,
    justifyContent: 'space-between',
  },
  contentBox: {
    marginLeft: 4,
    flexDirection: 'row',
  },
  contentText: {
    fontSize: 12,
    color: colors.white,
  },
  contentValue: {
    fontSize: 12,
    color: colors.white,
    marginLeft: 16,
  },
});
