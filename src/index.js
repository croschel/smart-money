import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Routes from '~/routes';
import colors from '~/styles/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" translucent={false} />
      <Routes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;
