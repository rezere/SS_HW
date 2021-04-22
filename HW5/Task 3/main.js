
function tickets(moneyGive)
{
  let denomination25 = 0,denomination50 = 0;
  for(let i = 0;i<moneyGive.length;i++)
  {
    if(moneyGive[i] == 25)
    {
      denomination25 += 1;
    }
    if(moneyGive[i] == 50)
    {
      denomination25 -= 1; denomination50 += 1;
    }
    if(moneyGive[i] == 100)
    {
      if(denomination50 == 0 && denomination25 >= 3)
      {
        denomination25 -= 3;
      }
      else
      {
        denomination25 -= 1; denomination50 -= 1;
      }
    }
    if(denomination25 < 0 || denomination50 < 0)
    {
       return 'NO';
    }
  }
  return 'YES';
}