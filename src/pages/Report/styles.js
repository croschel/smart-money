import {StyleSheet, Dimensions} from 'react-native';
import colors from '~/styles/colors';
import metrics from '~/styles/metrics';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.background,
    flex: 1,
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
    width: metrics.width - 20,
  },
});
