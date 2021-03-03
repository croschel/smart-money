import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import WelcomeMessage from './WelcomeMessage';
import Logo from '~/assets/logo-money-huge.png';
import {
  ActionFooter,
  ActionPrimaryButton,
} from '~/components/Core/ActionFooter';

const Welcome = (props) => {
  const { navigation } = props;

  const onPressNext = () => {
    navigation.navigate('InitBalance');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logo}>
          <Image source={Logo} />
        </View>
        <WelcomeMessage />
      </View>
      <ActionFooter>
        <ActionPrimaryButton
          size="large"
          title="Continuar"
          onPress={onPressNext}
        />
      </ActionFooter>
    </View>
  );
};

export default Welcome;
