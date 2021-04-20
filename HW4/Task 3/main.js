
  const DaysInMonth = 30;
  const DaysInYear = DaysInMonth * 12;
  const Days_Week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  
  const chronos = (year, month, day) => {
    let daysCount = year * DaysInYear + month * DaysInMonth + day;
    daysCount += getDays(month > 2 ? year : year - 1);
    return Days_Week[daysCount % 7];
  };
  
  const getDays = (year) => (~~(year / 5) - ~~(year / 100) + ~~(year / 500)) * 1;
 
  console.log( chronos(1001, 8, 24));

