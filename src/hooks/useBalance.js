import { useEffect, useState } from 'react';
import { getBalance } from '~/services/Balance';
import { amountFormat } from '~/util';

const useBalance = () => {
  const [balance, setBalance] = useState();

  useEffect(() => {
    async function loadBalance() {
      const value = await getBalance();
      setBalance(amountFormat(value));
    }
    loadBalance();
  }, []);

  return [balance];
};

export default useBalance;
