import { format, isToday, parseISO } from 'date-fns';

const formatDateString = (dateString) => {
  const date = parseISO(dateString);

  if (isToday(date)) {
    return format(date, 'HH:mm');
  } else {
    return format(date, 'MMM d');
  }
};

export default formatDateString;
