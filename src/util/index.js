import {format, subDays} from 'date-fns';

export const convertDateDetails = (parsedDate) => {
  console.log('parsedDate :: ', parsedDate);
  const response = format(parsedDate, "dd'/'MM HH':'mm");

  return response;
};

export const amountFormat = (amount) => {
  const formattedAmount = `$${parseFloat(amount).toFixed(2)}`;
  const stringAmount = formattedAmount.toString();
  const formatStringAmount = stringAmount.replace('.', ',');
  return formatStringAmount;
};

export const getSubDays = (qntDays) => {
  const date = subDays(new Date(), qntDays);
  console.log('subDays :: ', date);
  return date;
};
