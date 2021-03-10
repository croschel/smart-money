import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import CreateRoute from '~/routes';
import colors from '~/styles/colors';
import { isInitialized } from './services/Welcome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const isLogged = false;

  /* async function makeRedirect() {
    const isFirstTime = await isInitialized();
    // console.log('AsyncStorage isInitialized :: ', isInitialLlogin);
    return isFirstTime;
  }
  const hasInitialBalance = makeRedirect(); */

  const Routes = CreateRoute(isLogged);

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
