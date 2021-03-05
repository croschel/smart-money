import { useEffect, useState } from 'react';
import { getEntries, saveEntry, deleteEntry } from '~/services/Entries';

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

const useEntries = (days = 7, category: CategoryObject) => {
  const [entries, setEntries] = useState<EntryObject[]>([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries(days, category);
      setEntries(data);
    }
    loadEntries();
  }, [days, category]);
  return [entries, saveEntry, deleteEntry];
};

export default useEntries;
