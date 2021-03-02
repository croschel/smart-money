import Realm from 'realm';
import Category from '~/schemas/CategorySchema';
import Entry from '~/schemas/EntrySchema';
import { getDefaultCategories } from './Categories';

export const initDB = (realm) => {
  const categoriesLength = realm.objects('Category').length;

  // console.log('Qnt de categorias: ', categoriesLength);

  if (categoriesLength === 0) {
    const categories = getDefaultCategories();
    console.log('initDB :: initing DB...');

    try {
      realm.write(() => {
        categories.forEach((category) => {
          console.log(
            'initDB :: creating category: ',
            JSON.stringify(category)
          );
          realm.create('Category', category);
        });
      });
    } catch (error) {}
  } else {
    // console.log('initDB :: categories already exists');
  }
};

export const dropDB = (realm) => {
  console.log('dropDB :: droppping DB...');
  realm.write(() => {
    realm.deleteAll();
  });
};

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [Category, Entry],
    schemaVersion: 4,
  });
  // dropDB(realm);
  initDB(realm);

  return realm;
};
