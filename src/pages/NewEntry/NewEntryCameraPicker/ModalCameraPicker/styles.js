import { StyleSheet } from 'react-native';
// import colors from '~/styles/colors';

const styles = StyleSheet.create({
  cameraPreview: {
    flex: 1,
  },
  buttonTakePicture: {
    flex: 0,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonDeletePicture: {
    flex: 0,
    position: 'absolute',
    top: 20,
    bottom: 20,
  },
  picturePreview: {
    width: '100%',
    height: '100%',
  },
  pictureIconsBox: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 16,
  },
  buttonDelete: {
    marginLeft: 16,
  },
  buttonCheck: {
    marginRight: 16,
  },
});

export default styles;
