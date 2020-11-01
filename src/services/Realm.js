import Realm from 'realm';
import Category from '~/schemas/CategorySchema';
import Entry from '~/schemas/EntrySchema';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [Category, Entry],
    schemaVersion: 1,
  });
  return realm;
};


