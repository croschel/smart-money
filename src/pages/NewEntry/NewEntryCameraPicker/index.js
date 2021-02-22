import React, { useState } from 'react';
import { View } from 'react-native';
import ButtonIcon from '~/components/Core/ButtonIcon';
import ModalCameraPicker from './ModalCameraPicker';

const NewEntryCameraPicker = () => {
  const [showModal, setShowModal] = useState(false);

  const onDelete = () => {
    setShowModal(false);
  };
  return (
    <View>
      <ButtonIcon
        onButtonPress={() => setShowModal(true)}
        icon="photo-camera"
      />
      <ModalCameraPicker isVisible={showModal} onDelete={onDelete} />
    </View>
  );
};

export default NewEntryCameraPicker;
