type FormatDatePropType = {
  type?: string;
  withTime?: boolean;
  date: number | Date;
};

const formatDate = ({ type, withTime, date }: FormatDatePropType) => {
  const today = new Date(date);
  const yyyy = today.getFullYear();
  let mm: any = today.getMonth() + 1; // Months start at 0!
  let dd: any = today.getDate();
  let hh: any = today.getHours();
  let min: any = today.getMinutes();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  const time = `${hh}:${min}`;

  let formattedDate = `${dd}-${mm}-${yyyy}`;

  if(withTime){
    formattedDate = `${formattedDate} ${time}`
  }

  return formattedDate;
};

export { formatDate };
