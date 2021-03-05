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
  const realm = await getRealm();
  let entries = realm.objects('Entry');

  if (untilDay > 0) {
    const date = moment().subtract(untilDay, 'days').toDate();
    entries = entries.filtered('entryAt < $0', date);
  }

  const balance = entries.sum('amount');
  console.log('getBalance :: ', balance);
  return balance;
};

export const getBalanceSumByDate = async (days: number) => {
  const realm: Realm.ObjectPropsType = await getRealm();
  const startBalance = await getBalance(days);
  let entries = realm.objects('Entry');

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();
    entries = entries.filtered('entryAt >= $0', date);
  }
  entries = entries.sorted('entryAt');
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
  const realm: Realm.ObjectPropsType = await getRealm();
  let entries = realm.objects('Entry');

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();
    entries = entries.filtered('entryAt >= $0', date);
  }
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
