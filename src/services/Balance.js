import _ from 'lodash';
import { getRealm } from '~/services/Realm';

import moment from '~/vendors/moment';

export const getBalance = async (untilDay = 0) => {
  const realm = await getRealm();
  let entries = realm.objects('Entry');

  if (untilDay > 0) {
    const date = moment().subtract(untilDay, 'days').toDate();
    entries = entries.filtered('entryAt < $0', date);
  }

  const balance = entries.sum('amount');
  return balance;
};

export const getBalanceSumByDate = async (days) => {
  const realm = await getRealm();
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
      moment(entryAt).format('YYYYMMDD'))
    .map((entry) => _.sumBy(entry, 'amount'))
    .map(
      (amount, index, collection) =>
        (index === 0 ? startBalance : 0) +
        _.sum(_.slice(collection, 0, index)) +
        amount
    );

  return entries;
};

export const getBalanceSumByCategory = async (days, showOther = true) => {
  const realm = await getRealm();
  let entries = realm.objects('Entry');

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();
    entries = entries.filtered('entryAt >= $0', date);
  }
  entries = _(entries).groupBy(({ category: { id } }) => id);

  console.log('getBalanceByCategories :: ', JSON.stringify(entries));
  return entries;
};
