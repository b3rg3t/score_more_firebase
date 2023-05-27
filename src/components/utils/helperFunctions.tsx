const formatDate = (date: number, type?: "sv") => {
  const today = new Date(date);
  const yyyy = today.getFullYear();
  let mm: any = today.getMonth() + 1; // Months start at 0!
  let dd: any = today.getDate();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  const formattedDate = dd + "-" + mm + "-" + yyyy;
  return formattedDate;
};

export { formatDate };