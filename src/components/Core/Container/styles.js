import { StyleSheet } from 'react-native';
import colors from '~/styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.asphalt,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 5,
    margin: 5,
    padding: 8,
  },
  title: {
    fontSize: 12,
    color: colors.white,
    marginBottom: 5,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  actionLabel: {
    flex: 1,
    fontSize: 12,
    color: colors.white,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: 12,
    color: colors.white,
    marginRight: 2,
  },
  actionButtonText: {
    fontSize: 12,
    color: colors.white,
  }
})
