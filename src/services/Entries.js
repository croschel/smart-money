import {Alert} from 'react-native';

import {getRealm} from './Realm';
import {getUUID} from '~/services/UUID';
import {getSubDays} from '~/util';

export const getEntries = async (days) => {
  const realm = await getRealm();
  let entries;
  if (days > 0) {
    const date = getSubDays(days);
    entries = realm
      .objects('Entry')
      .filtered(`entryAt >= $0`, date)
      .sorted('entryAt', true);
  } else {
    entries = realm.objects('Entry').sorted('entryAt', true);
  }

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
        entryAt: value.entryAt || entry.entryAt,
        category: value.category || entry.category,
        isInit: false,
      };
      realm.create('Entry', data, true);
    });
    console.log('saveEntry :: data: ', JSON.stringify(data));
  } catch (error) {
    console.error(
      'saveEntry :: error on save object: ' + JSON.stringify(this.data)
    );
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
    console.error(
      'deleteEntry :: error on delte object: ' + JSON.stringify(this.data)
    );
    Alert.alert('Erro ao deletar os dados de lançamento');
  }
};
