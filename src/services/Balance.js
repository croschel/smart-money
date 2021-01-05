import { getRealm } from '~/services/Realm';

export const getBalance = async () => {
  const realm = await getRealm();
  const entries = realm.objects('Entry');
  const balance = entries.sum('amount');
  return balance;
};
