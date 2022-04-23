import dateFormat from 'dateformat';

export function formatDate(isoString) {
  try {
    const date = new Date(isoString);

    return dateFormat(date, 'mmmm dd, yyyy');
  } catch (e) {
    console.log(e);
    return 'MMM DD, YYYY';
  }
}
