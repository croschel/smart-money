import React, { useState } from 'react';
import { Modal, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ButtonIcon from '~/components/Core/ButtonIcon';
import styles from './styles';
import colors from '~/styles/colors';

const NewEntryCameraPicker = () => {
  const [showModal, setShowModal] = useState(false);
  const [camera, setCamera] = useState();

  const onTakePicture = () => {};
  const onDeletePicture = () => {
    setShowModal(false);
  };
  return (
    <View>
      <ButtonIcon
        onButtonPress={() => setShowModal(true)}
        icon="photo-camera"
      />
      <Modal transparent={false} animationType="slide" visible={showModal}>
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
            onPress={onDeletePicture}
            style={styles.buttonDeletePicture}
          />
        </RNCamera>
      </Modal>
    </View>
  );
};

export default NewEntryCameraPicker;
