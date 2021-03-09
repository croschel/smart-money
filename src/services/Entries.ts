import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { getRealm } from './Realm';
import { getSubDays } from '~/util';
import { CategoryObject, EntryObject } from '~/../declarations';

export const getEntries = async (days: number, category: CategoryObject) => {
  let querySnapshot;

  if (days > 0) {
    const date = getSubDays(days);
    querySnapshot = await firestore()
      .collection('entries')
      .orderBy('entryAt')
      .startAt(date)
      .get();
  } else {
    querySnapshot = await firestore()
      .collection('entries')
      .orderBy('entryAt')
      .get();
  }

  let entries = querySnapshot.docs.map((documentSnapshot) => {
    return { ...documentSnapshot.data(), id: documentSnapshot.id };
  });
  if (category && category.id) {
    // console.log('getEntries :: category ', JSON.stringify(category));
    entries = entries.filter(
      //@ts-ignore
      (entry: EntryObject) => entry.category.id === category.id
    );
  }

  console.log('getEntries :: entries', JSON.stringify(entries));
  return entries;
};

export const saveEntry = async (entry: EntryObject) => {
  let data = {};
  try {
    data = {
      description: entry.category.name,
      amount: entry.amount,
      address: entry.address,
      latitude: entry.latitude,
      longitude: entry.longitude,
      entryAt: entry.entryAt || new Date(),
      photo: entry.photo,
      category: entry.category,
      isInit: entry.isInit || false,
    };
    await firestore().collection('entries').add(data);

    console.log('addEntry :: data: ', JSON.stringify(data));
  } catch (error) {
    console.error(`addEntry :: error on save object: ${JSON.stringify(data)}`);
    Alert.alert('Erro ao salvar os dados de lançamento');
  }
  return data;
};

export const deleteEntry = async (entry: EntryObject) => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (error) {
    /* console.error(
      `deleteEntry :: error on delte object: ${JSON.stringify(this.data)}`
    ); */
    Alert.alert('Erro ao deletar os dados de lançamento');
  }
};
