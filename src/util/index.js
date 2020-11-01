import {getDate, getMonth, getHours, getMinutes} from 'date-fns';

export const convertDateDetails = (parsedDate) => {
  const day = getDate(parsedDate);
  const month = getMonth(parsedDate);
  const hour = getHours(parsedDate);
  const minutes = getMinutes(parsedDate);

  return `${day}/${month} ${hour}:${minutes}`;
};
