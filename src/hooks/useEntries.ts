import { useEffect, useState } from 'react';
import { CategoryObject, EntryObject } from '~/../declarations';
import { getEntries, saveEntry, deleteEntry } from '~/services/Entries';

const useEntries = (days = 7, category: CategoryObject) => {
  const [entries, setEntries] = useState<EntryObject[]>([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries(days, category);
      // @ts-ignore
      setEntries(data);
    }
    loadEntries();
  }, [days, category]);
  return [entries, saveEntry, deleteEntry];
};

export default useEntries;
