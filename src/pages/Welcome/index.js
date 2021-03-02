import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';
import Logo from '~/assets/logo-white.png';
import {
  ActionFooter,
  ActionPrimaryButton,
} from '~/components/Core/ActionFooter';

const Welcome = (props) => {
  const { navigation } = props;
  const [amount, setAmount] = useState(0);

  const onSavePress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} />
      </View>
      <WelcomeMessage />
      <WelcomeBalanceInput amount={amount} onChangeValue={setAmount} />
      <ActionFooter>
        <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
      </ActionFooter>
    </View>
  );
};

export default Welcome;
