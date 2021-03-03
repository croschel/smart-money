import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const WelcomeMessage = () => (
  <View>
    <Text style={styles.title}>Seja bem vindo!</Text>
    <Text style={styles.message}>
      Para começar a utilizar o Smart Money, você precisa informar um saldo
      inicial. Vamos lá?
    </Text>
  </View>
);

export default WelcomeMessage;
