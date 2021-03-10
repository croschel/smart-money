import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { isInitialized } from '~/services/Welcome';
import colors from '~/styles/colors';

import { styles } from './styles';

const Loading = (props) => {
  const { navigation } = props;

  useEffect(() => {
    async function makeRedirect() {
      const isInitialLlogin = await isInitialized();
      // console.log('AsyncStorage isInitialized :: ', isInitialLlogin);

      if (isInitialLlogin === true) {
        navigation.navigate('Main');
      } else {
        navigation.navigate('Welcome');
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
