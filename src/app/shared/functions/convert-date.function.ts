export function convertDate(dateParameter: Date, time: string): string {
  return dateParameter.getMonth() + 1 + "-" + dateParameter.getUTCDate() + "-" + dateParameter.getFullYear().toString().substring(2) + ", " + convertHourMilitarToNormal(time);
}

function convertHourMilitarToNormal(time: any): string {
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) {
    time = time.slice(1);
    time[5] = +time[0] < 12 ? ' AM' : ' PM';
    time[0] = +time[0] % 12 || 12;
  }
  return time.join('');
}

export function convertStingToDate(dateParameter: string): {
  date: Date, time: string
} {
  const date: Date = new Date(dateParameter.split(', ')[0]);
  const time: string = convertHourNormalToMilitar(dateParameter.split(', ')[1]);
  return {
    date: date,
    time: time
  };
}

function convertHourNormalToMilitar(time: string): string {
  let timeArray = time.split(' ');
  let hours: any = 0;
  if (timeArray.length > 1) {
    hours = Number(timeArray[0].split(':')[0]);
    if (timeArray[1] === 'PM' && hours < 12) {
      hours += 12;
    } else if (timeArray[1] === 'AM' && hours === 12) {
      hours = String('00');
    } else if (timeArray[1] === 'PM' && hours === 12) {
      hours = 12;
    } else if (timeArray[1] === 'AM' && hours < 10) {
      hours = '0' + hours;
    }
  }
  return String(hours) + ':' + String(timeArray[0].split(':')[1]);
}
