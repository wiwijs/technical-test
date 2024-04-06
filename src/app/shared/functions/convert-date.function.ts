export function convertDate(dateParameter: Date, time: string): string {
  return dateParameter.getMonth() + 1 + "-" + dateParameter.getUTCDate() + "-" + dateParameter.getFullYear().toString().substring(2) + "," + convertHourMilitarToNormal(time);
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
