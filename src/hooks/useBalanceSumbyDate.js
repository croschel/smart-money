import { useState, useEffect } from 'react';

import { getBalanceSumByDate } from '~/services/Balance';

const useBalanceSumByDate = (days = 7) => {
  const [balanceSum, setBalanceSum] = useState([]);

  useEffect(() => {
    async function loadBalanceSumByDate() {
      const data = await getBalanceSumByDate(days);
      console.log('array os balances :: ', data);

      setBalanceSum([...data]);
    }
    loadBalanceSumByDate();
  }, [days]);

  return [balanceSum];
};

export default useBalanceSumByDate;
