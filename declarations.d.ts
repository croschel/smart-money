declare module 'react-native-vector-icons/MaterialIcons';
declare module '*.png';

export interface EntryObject {
  id: string;
  amount: number;
  description: string;
  entryAt: {
    nanoseconds: number;
    seconds: number;
  };
  latitude: number;
  longitude: number;
  address: string;
  photo: string;
  isInit: boolean;
  category: CategoryObject;
}

export interface CategoryObject {
  id: string;
  name: string;
  color: string;
  isInit: boolean;
  isDefault: boolean;
  isCredit: boolean;
  isDebit: boolean;
  order: number;
  entries: EntryObject;
}
