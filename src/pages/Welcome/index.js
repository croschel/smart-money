import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';
import Logo from '~/assets/logo-money.png';
import {
  ActionFooter,
  ActionPrimaryButton,
} from '~/components/Core/ActionFooter';
import { saveEntry } from '~/services/Entries';
import useCategories from '~/hooks/useCategories';
import { setInitialized } from '~/services/Welcome';

const Welcome = (props) => {
  const { navigation } = props;
  const [amount, setAmount] = useState(0);
  const [, , , initCategories] = useCategories();

  const onSavePress = () => {
    saveEntry({
      amount,
      category: initCategories,
      isInit: true,
    });
    setInitialized();
    navigation.navigate('Main');
  };

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
