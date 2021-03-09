import firestore from '@react-native-firebase/firestore';
import _ from 'lodash';
import { any } from 'prop-types';
import { getRealm } from '~/services/Realm';

import moment from '~/vendors/moment';

interface CategoryObject {
  id: string;
  name: string;
  color: string;
  isInit: boolean;
  isDefault: boolean;
  isCredit: boolean;
  isDebit: boolean;
  order: number;
}
interface EntryObject {
  id: string;
  amount: number;
  description: string;
  entryAt: Date;
  latitude: number;
  longitude: number;
  address: string;
  photo: string;
  isInit: boolean;
  category: CategoryObject;
}

export const getBalance = async (untilDay = 0) => {
  let querySnapshot;

  if (untilDay > 0) {
    const date = moment().subtract(untilDay, 'days').toDate();
    querySnapshot = await firestore()
      .collection('entries')
      .orderBy('entryAt')
      .endBefore(date)
      .get();
  } else {
    querySnapshot = await firestore().collection('entries').get();
  }

  // console.log('getBalance Firebase :: ', querySnapshot);
  return _(querySnapshot.docs).reduce((total, doc) => {
    return total + doc.data().amount;
  }, 0);
};

export const getBalanceSumByDate = async (days: number) => {
  let querySnapshot;
  const startBalance = (await getBalance(days)) || 0;

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();
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

  let entries = querySnapshot.docs.map((documentSnapshot) =>
    documentSnapshot.data()
  );
  entries = _(entries)
    .groupBy(({ entryAt }) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      moment(entryAt).format('YYYYMMDD')
    )
    .map((entry) => _.sumBy(entry, 'amount'))
    .map(
      (amount, index, collection) =>
        (index === 0 ? startBalance : 0) +
        _.sum(_.slice(collection, 0, index)) +
        amount
    );

  return entries;
};

export const getBalanceSumByCategory = async (
  days: number,
  showOther = true
) => {
  let querySnapshot;

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();
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

  let entries = querySnapshot.docs.map((documentSnapshot) =>
    documentSnapshot.data()
  );

  entries = _(entries)
    .groupBy(({ category: { id } }) => id)
    .map((entry) => ({
      category: _.omit(entry[0].category, 'entries'),
      amount: Math.abs(_.sumBy(entry, 'amount')),
    }))
    .filter(({ amount }) => amount > 0)
    .orderBy('amount', 'desc');

  // console.log('getBalanceByCategories :: ', JSON.stringify(entries));
  return entries;
};
