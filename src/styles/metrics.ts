import { Dimensions } from 'react-native';

const metrics = {
  width: Math.round(Dimensions.get('window').width),
  height: Math.round(Dimensions.get('window').height),
};
export default metrics;
