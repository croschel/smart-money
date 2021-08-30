/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { Modal, Alert, ImageBackground, View } from 'react-native';
import { RNCamera, RNCameraProps } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import styles from './styles';
import colors from '~/styles/colors';

interface ModalCameraPickerProps {
  photo?: string | null;
  onDelete: () => void;
  onChangePhoto: (uri: string) => void;
  onClose: () => void;
  isVisible: boolean;
}

const ModalCameraPicker = ({
  photo = null,
  onDelete,
  onChangePhoto,
  onClose,
  isVisible,
}: ModalCameraPickerProps) => {
  const [camera, setCamera] = useState();

  const onTakePicture = async () => {
    try {
      const { uri } = await camera.takePictureAsync({
        quality: 0.5,
        forceUpOrientation: true,
        fixOrientation: true,
        skipProcessing: true,
      });
      onChangePhoto(uri);
    } catch (error) {
      console.error(
        'NewEntryCameraPickerModal :: onTakePicture error on take picture',
        error
      );
      Alert.alert('Erro', 'Houve um erro ao tirar a foto!');
    }
  };

  return (
    <Modal transparent={false} animationType="slide" visible={isVisible}>
      {photo ? (
        <ImageBackground style={styles.picturePreview} source={{ uri: photo }}>
          <View style={styles.pictureIconsBox}>
            <Icon
              name="delete"
              size={40}
              color={colors.white}
              onPress={onDelete}
              style={styles.buttonDelete}
            />
            <Icon
              name="check"
              size={50}
              color={colors.white}
              onPress={onClose}
              style={styles.buttonCheck}
            />
          </View>
        </ImageBackground>
      ) : (
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
            onPress={onClose}
            style={styles.buttonDeletePicture}
          />
        </RNCamera>
      )}
    </Modal>
  );
};

export default ModalCameraPicker;
