import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { format, subDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

export const convertDateDetails = (parsedDate: Date) => {
  const response = format(parsedDate, "dd'/'MM HH':'mm", { locale: pt });

  return response;
};

export const convertDateDetailsTimestamp = (
  timestampDate: FirebaseFirestoreTypes.Timestamp
) => {
  const dateFormatted = timestampDate.toDate();
  const response = format(dateFormatted, "dd'/'MM HH':'mm", { locale: pt });

  return response;
};

export const amountFormat = (amount: number) => {
  let signal = '';
  let multiplicator = 1;
  if (amount < 0) {
    signal = '-';
    multiplicator = -1;
  }
  const formattedAmount = `${signal}R$ ${
    <any>amount.toFixed(2) * multiplicator
  }`;
  const stringAmount = formattedAmount.toString();
  const formatStringAmount = stringAmount.replace('.', ',');
  return formatStringAmount;
};

export const getSubDays = (qntDays: number) => {
  const date = subDays(new Date(), qntDays);
  return date;
};

export const formatSingleNumber = (days: number) => {
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
