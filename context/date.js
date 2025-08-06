import * as rdd from 'react-device-detect';

export const date = (obj) => {
  const choiceMonth = (val) =>
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][val];

  const date = new Date();

  obj['Status'] = 'new';
  obj['Date & time'] = `${date.getDate()} ${choiceMonth(
    date.getMonth()
  )} ${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  obj['Browser'] = rdd.browserName;
  obj['Device'] = rdd.deviceType;
  obj['OS'] = rdd.osName;
  obj['Phone or Tablet'] = rdd.mobileModel !== 'none' ? rdd.mobileModel : '-';

  return obj;
};
