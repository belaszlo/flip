export default function convertDate(dateToConvert) {
  const date = new Date(dateToConvert);
  const mnth = (`0${date.getMonth() + 1}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);
  const hour = (`0${date.getHours()}`).slice(-2);
  const min = (`0${date.getMinutes()}`).slice(-2);
  const sec = (`0${date.getSeconds()}`).slice(-2);
  return (`${[date.getFullYear(), mnth, day].join('.')} ${[hour, min, sec].join(':')}`);
}
