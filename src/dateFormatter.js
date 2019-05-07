const dateFns = require("date-fns")

export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  const dateToFormatTime = dateFns.startOfDay(dateToFormatTimeMillis)
  const systemDateTime = dateFns.startOfDay(systemDateTimeMillis)

  if (dateFns.compareAsc(dateToFormatTime, systemDateTime) === 0) {
    return 'TODAY';
  } else {
    const dateFormat = 'DD/MM/YYYY'
    return dateFns.format(dateToFormatTimeMillis, dateFormat)
  }  
};
