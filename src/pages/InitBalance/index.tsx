import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { styles } from './styles';
import InitBalanceInput from './InitBalanceInput';
import Logo from '~/assets/logo-money.png';
import {
  ActionFooter,
  ActionPrimaryButton,
} from '~/components/Core/ActionFooter';
import { saveEntry } from '~/services/Entries';
import useCategories from '~/hooks/useCategories';
import { setInitialized } from '~/services/Welcome';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const InitBalance = ({ navigation }: NavigationStackScreenProps) => {
  const [amount, setAmount] = useState(0);
  const [, , , initCategories] = useCategories();

  const onSavePress = () => {
    saveEntry({
      amount,
      category: initCategories,
      isInit: true,
    });
    setInitialized();
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Main' })],
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={Logo} />
      </View>

      <InitBalanceInput amount={String(amount)} onChangeValue={setAmount} />

      <ActionFooter>
        <ActionPrimaryButton
          size="large"
          title="Continuar"
          onPress={onSavePress}
        />
      </ActionFooter>
    </View>
  );
};

export default InitBalance;
