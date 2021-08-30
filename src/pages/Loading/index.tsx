import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { isInitialized } from '~/services/Welcome';
import colors from '~/styles/colors';

import { styles } from './styles';

const Loading = ({ navigation }: NavigationStackScreenProps) => {
  useEffect(() => {
    async function makeRedirect() {
      const isInitialLlogin = await isInitialized();
      // console.log('AsyncStorage isInitialized :: ', isInitialLlogin);

      if (isInitialLlogin === true) {
        navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          })
        );
      } else {
        navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Welcome' })],
          })
        );
      }
    }
    makeRedirect();
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.violet} size={60} />
    </View>
  );
};

export default Loading;
