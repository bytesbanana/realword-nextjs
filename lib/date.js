import dateFormat from 'dateformat';

export function formatDate(isoDate) {
  let date;
  try {
    date = new Date(isoDate.toString());
  } catch (error) {
    return null;
  }

  return dateFormat(date, 'mmmm dd, yyyy');
}
