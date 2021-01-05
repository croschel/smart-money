import { format, subDays } from 'date-fns';

export const convertDateDetails = (parsedDate) => {
  const response = format(parsedDate, "dd'/'MM HH':'mm");

  return response;
};

export const amountFormat = (amount) => {
  let signal = '';
  let multiplicator = 1;
  if (amount < 0) {
    signal = '-';
    multiplicator = -1;
  }
  const formattedAmount = `${signal}$${
    parseFloat(amount).toFixed(2) * multiplicator
  }`;
  const stringAmount = formattedAmount.toString();
  const formatStringAmount = stringAmount.replace('.', ',');
  return formatStringAmount;
};

export const getSubDays = (qntDays) => {
  const date = subDays(new Date(), qntDays);
  return date;
};

export const formatSingleNumber = (days) => {
  let response;
  switch (days) {
    case 1:
      response = 'Últimas 24 horas';
      break;
    case 30:
      response = 'Último mês';
      break;
    case 60:
      response = 'Últimos dois meses';
      break;
    case 90:
      response = 'Últimos três meses';
      break;
    case 180:
      response = 'Últimos seis meses';
      break;
    case 365:
      response = 'Último ano';
      break;
    default:
      response = `Últimos ${days} dias`;
      break;
  }
  return response;
};
