import AsyncStorage from '@react-native-community/async-storage';

export const isInitialized = async () => {
  const openingBalance = await AsyncStorage.getItem('openingBalance');
  // console.log('AsyncStorage Test :: ', openingBalance);

  return openingBalance !== null && openingBalance === 'true';
};

export const setInitialized = async () => {
  const item = await AsyncStorage.setItem('openingBalance', 'true');
  // console.log('AsyncStorage Test :: ', item);
};

export const cleanInitialized = async () => {
  await AsyncStorage.removeItem('openingBalance');
};
