import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import CreateRoute from '~/routes';
import colors from '~/styles/colors';
import { isLogged } from './services/Auth';
import { isInitialized } from './services/Welcome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const [userLogged, setUserLogged] = useState(false);
  useEffect(() => {
    const checkLogin = async () => {
      const response = await isLogged();
      setUserLogged(response);
    };

    checkLogin();
  }, []);

  // @ts-ignore
  const Routes = CreateRoute(userLogged);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle="light-content"
        translucent={false}
      />
      <Routes />
    </SafeAreaView>
  );
};
export default App;
