import firestore from '@react-native-firebase/firestore';

export const getAllCategories = async () => {
  const querySnapshot = await firestore()
    .collection('categories')
    .orderBy('order')
    .get();

  const categories = querySnapshot.docs.map((documentSnapshot) => {
    return { ...documentSnapshot.data(), id: documentSnapshot.id };
  });

  return categories;
};

export const getDebitCategories = async () => {
  const querySnapshot = await firestore()
    .collection('categories')
    .where('isDebit', '==', true)
    .where('isInit', '==', false)
    .orderBy('order')
    .get();

  const categories = querySnapshot.docs.map((documentSnapshot) => {
    return { ...documentSnapshot.data(), id: documentSnapshot.id };
  });

  return categories;
};

export const getCreditCategories = async () => {
  const querySnapshot = await firestore()
    .collection('categories')
    .where('isCredit', '==', true)
    .where('isInit', '==', false)
    .orderBy('order')
    .get();

  const categories = querySnapshot.docs.map((documentSnapshot) => {
    return { ...documentSnapshot.data(), id: documentSnapshot.id };
  });

  return categories;
};

export const getInitCategories = async () => {
  const querySnapshot = await firestore()
    .collection('categories')
    .where('isInit', '==', true)
    .get();

  return { ...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id };
};
