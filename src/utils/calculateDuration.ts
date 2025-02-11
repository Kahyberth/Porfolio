export function calculateDuration(dateRange: string) {
    const [startDateStr, endDateStr] = dateRange.split(" - ");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  


    function parseDate(dateStr: string): Date {
      const [month, year] = dateStr.split(" ");
      const monthIndex = months.indexOf(month);
      return new Date(parseInt(year), monthIndex);
    }
  
    const startDate = parseDate(startDateStr);
    const endDate = parseDate(endDateStr);
  

    const diffInMonths =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());
  
    const years = Math.floor(diffInMonths / 12);
    const remainingMonths = diffInMonths % 12;
  
    let duration = "";
    if (years > 0) {
      duration += `${years} year${years > 1 ? "s" : ""}`;
    }
    if (remainingMonths > 0) {
      duration += `${years > 0 ? " " : ""}${remainingMonths} month${
        remainingMonths > 1 ? "s" : ""
      }`;
    }
  
    return duration;
  }