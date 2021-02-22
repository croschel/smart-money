import { Alert } from 'react-native';

import { getRealm } from './Realm';
import { getUUID } from '~/services/UUID';
import { getSubDays } from '~/util';

export const getEntries = async (days, category) => {
  let realm = await getRealm();

  realm = realm.objects('Entry');

  if (days > 0) {
    const date = getSubDays(days);
    realm = realm.filtered('entryAt >= $0', date);
  }
  if (category && category.id) {
    // console.log('getEntries :: category ', JSON.stringify(category));

    realm = realm.filtered('category.id == $0', category.id);
  }

  const entries = realm.sorted('entryAt', true);

  // console.log('getEntries :: entries', JSON.stringify(entries));
  return entries;
};

export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm();
  let data = {};
  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        description: value.category.name,
        amount: value.amount || entry.amount,
        address: value.address || entry.address,
        latitude: value.latitude || entry.latitude,
        longitude: value.longitude || entry.longitude,
        entryAt: value.entryAt || entry.entryAt,
        photo: value.photo,
        category: value.category || entry.category,
        isInit: false,
      };
      realm.create('Entry', data, true);
    });
    console.log('saveEntry :: data: ', JSON.stringify(data));
  } catch (error) {
    /* console.error(
      `saveEntry :: error on save object: ${JSON.stringify(this.data)}`
    ); */
    Alert.alert('Erro ao salvar os dados de lançamento');
  }
  return data;
};

export const deleteEntry = async (entry) => {
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
