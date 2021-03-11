import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

interface signUpData {
  email: string;
  password: string;
  name: string;
}

export const isLogged = async () => {
  const userStatus = await getUserAuth();
  return userStatus !== null;
};

export const setUserAuth = async (uid: string) => {
  const useruid = await AsyncStorage.setItem('userAuth', uid);
  console.log('UserUID :: ', useruid);
};

export const getUserAuth = async () => {
  const userAuth = await AsyncStorage.getItem('userAuth');
  return userAuth;
};

export const cleanUserAuth = async () => {
  await AsyncStorage.removeItem('userAuth');
};

export const clientRegister = async (data: signUpData) => {
  const { email, password, name } = data;
  try {
    const userInfo = await auth().createUserWithEmailAndPassword(
      email,
      password
    );
    const { uid } = userInfo.user;
    // setUserAuth(uid);
    await firestore().collection('users').doc(uid).set({
      name,
    });
    return { registerSuccess: true };
  } catch (error) {
    Alert.alert('Erro ao criar um usuário!', error.message);
    return { registerMessage: false };
  }
};
