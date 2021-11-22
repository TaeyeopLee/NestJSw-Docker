
export class Library {
  public static makeYYYYMMDD(date?: Date) {
    let today;
    if (date) {
      today = new Date(date);
    } else {
      today = new Date();
    }
    const year = today.getFullYear().toString();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const zeroVal = '0';
    let retMonthVal;
    let retDayVal;

    month >= 10 ? (retMonthVal = month.toString()) : (retMonthVal = zeroVal.concat(month.toString()));
    day >= 10 ? (retDayVal = day.toString()) : (retDayVal = zeroVal.concat(day.toString()));
    const fullYear = year.concat(retMonthVal, retDayVal);

    return fullYear;
  }

  public static makeYYYYMMDDHHMMSS(date?: Date) {
    let today;
    if (date) {
      today = new Date(date);
    }
    else {
      today = new Date();
    }
    const year = today.getFullYear().toString();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();

    const zeroVal = '0';
    let retMonthVal, retDayVal,retHourVal, retMinuteVal, retSecondVal;
    
    month >= 10 ? retMonthVal = month.toString() : retMonthVal = zeroVal.concat(month.toString());
    day >= 10 ? retDayVal = day.toString() : retDayVal = zeroVal.concat(day.toString());
    hour >= 10 ? retHourVal = hour.toString() : retHourVal = zeroVal.concat(hour.toString());
    minute >= 10 ? retMinuteVal = minute.toString() : retMinuteVal = zeroVal.concat(minute.toString());
    second >= 10 ? retSecondVal = second.toString() : retSecondVal = zeroVal.concat(second.toString());

    const fullYYYYMMDDHHMMSS = year.concat(retMonthVal, retDayVal, retHourVal, retMinuteVal, retSecondVal);

    return fullYYYYMMDDHHMMSS;
  }

  public static makeYYYYMMDDHHMMSSOracle(date?: Date) {
    let today;
    if (date) {
      today = new Date(date);
    }
    else {
      today = new Date();
    }
    const year = today.getFullYear().toString();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    const millisecond = today.getMilliseconds();

    const zeroVal = '0';
    let retMonthVal, retDayVal,retHourVal, retMinuteVal, retSecondVal, retMilliSecondVal;
    
    month >= 10 ? retMonthVal = month.toString() : retMonthVal = zeroVal.concat(month.toString());
    day >= 10 ? retDayVal = day.toString() : retDayVal = zeroVal.concat(day.toString());
    hour >= 10 ? retHourVal = hour.toString() : retHourVal = zeroVal.concat(hour.toString());
    minute >= 10 ? retMinuteVal = minute.toString() : retMinuteVal = zeroVal.concat(minute.toString());
    second >= 10 ? retSecondVal = second.toString() : retSecondVal = zeroVal.concat(second.toString());
    millisecond >= 10 ? retMilliSecondVal = millisecond.toString() : retMilliSecondVal = zeroVal.concat(millisecond.toString());

    const YY = year.substr(2, 2);
    const fullYYYYMMDD = YY.concat('/', retMonthVal, '/', retDayVal);
    const fullYYYYMMDDHHMM = fullYYYYMMDD.concat(' ', retHourVal, ':', retMinuteVal, ':');
    const fullYYYYMMDDHHMMSS = fullYYYYMMDDHHMM.concat(retSecondVal, '.', retMilliSecondVal);

    return fullYYYYMMDDHHMMSS;
  }
}