import dateFormat from 'dateformat';

export function formatDate(isoDate) {
  const date = new Date(isoDate.toString());

  return dateFormat(date, 'mmmm dd, yyyy');
}
