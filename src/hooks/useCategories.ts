import { useEffect, useState } from 'react';
import {
  getDebitCategories,
  getCreditCategories,
  getAllCategories,
  getInitCategories,
} from '~/services/Categories';

const useCategories = () => {
  const [debitCategories, setDebitCategories] = useState<string[]>([]);
  const [creditCategories, setCreditCategories] = useState<string[]>([]);
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [initCategories, setInitCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadDebitCategories = async () => {
      const data = await getDebitCategories();
      setDebitCategories(data);
    };
    const loadCreditCategories = async () => {
      const data = await getCreditCategories();
      setCreditCategories(data);
    };
    const loadAllCategories = async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    };
    const loadInitCategory = async () => {
      const data = await getInitCategories();
      setInitCategories(data);
    };
    loadDebitCategories();
    loadCreditCategories();
    loadAllCategories();
    loadInitCategory();
  }, []);

  return [debitCategories, creditCategories, allCategories, initCategories];
};

export default useCategories;
