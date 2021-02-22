/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { Modal } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import styles from './styles';
import colors from '~/styles/colors';

const ModalCameraPicker = (props) => {
  const { photo, onDelete, onChangePhoto, onClose, isVisible } = props;

  const [camera, setCamera] = useState();

  const onTakePicture = () => {};

  return (
    <Modal transparent={false} animationType="slide" visible={isVisible}>
      <RNCamera
        ref={(ref) => {
          setCamera(ref);
        }}
        style={styles.cameraPreview}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
        <Icon
          name="photo-camera"
          size={40}
          color={colors.white}
          onPress={onTakePicture}
          style={styles.buttonTakePicture}
        />
        <Icon
          name="close"
          size={50}
          color={colors.white}
          onPress={onDelete}
          style={styles.buttonDeletePicture}
        />
      </RNCamera>
    </Modal>
  );
};

ModalCameraPicker.propTypes = {
  photo: PropTypes.any,
  onDelete: PropTypes.func,
  onChangePhoto: PropTypes.func,
  onClose: PropTypes.func,
  isVisible: PropTypes.bool.isRequired,
};
ModalCameraPicker.defaultProps = {
  photo: null,
  onDelete: () => {},
  onChangePhoto: () => {},
  onClose: () => {},
};

export default ModalCameraPicker;
