import React, { useState } from 'react';
import { View } from 'react-native';
import ButtonIcon from '~/components/Core/ButtonIcon';
import ModalCameraPicker from './ModalCameraPicker';

interface NewEntryCameraPickerProps {
  photo: string;
  onChangePhoto: (photo: string | null) => void;
}

const NewEntryCameraPicker = ({
  photo,
  onChangePhoto,
}: NewEntryCameraPickerProps) => {
  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onChangePhotoPress = (newPhoto: null | string) => {
    onChangePhoto(newPhoto);
    onCloseModal();
  };

  const onDeletePicture = () => {
    onChangePhoto(null);
    onCloseModal();
  };
  return (
    <View>
      <ButtonIcon
        onButtonPress={() => setShowModal(true)}
        icon="photo-camera"
        activated={photo}
      />
      <ModalCameraPicker
        photo={photo}
        onChangePhoto={onChangePhotoPress}
        isVisible={showModal}
        onDelete={onDeletePicture}
        onClose={onCloseModal}
      />
    </View>
  );
};

export default NewEntryCameraPicker;
