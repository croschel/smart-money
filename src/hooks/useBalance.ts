import { useEffect, useState } from 'react';
import { getBalance } from '~/services/Balance';
import { amountFormat } from '~/util';

const useBalance = () => {
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    async function loadBalance() {
      const value = await getBalance();
      // @ts-ignore
      setBalance(amountFormat(value));
    }
    loadBalance();
  }, []);

  return [balance];
};

export default useBalance;
