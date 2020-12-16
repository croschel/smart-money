import {Dimensions} from 'react-native';

export default metrics = {
  width: Math.round(Dimensions.get('window').width),
  height: Math.round(Dimensions.get('window').height),
};
