export function convertDate(dateParameter: Date, timezone: any): string {
  const date = new Date(dateParameter)
  console.log(date.getMonth() + 1);
  console.log(date.getUTCDate());
  console.log(date.getFullYear().toString().substring(2));

  console.log(timezone);
  return '';
}
