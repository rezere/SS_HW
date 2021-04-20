let arr = [['XX', 2], ['XXXX', 6], ['XXXXX', 4]];
  let result = [arr.length];
  result.push(0);
  let chairs_need = 4;
  let agent, chairs_in_room, difference;
  const reducer = (a, b) => a + b;


if(chairs_need == 0) console.log("Game on!");
  else
  {
  	arr.forEach(function(room, i, arr) {
    if(result.reduce(reducer) == chairs_need)
    { 
        return 0;
    }
    agent = room[0].length;
    chairs_in_room = room[1];
    difference = chairs_in_room - agent;
    if(difference == 0 || difference < 0)
    {
        result[i] = 0;
    }
    if(difference > 0)
    {
      if(difference > chairs_need)
      result[i] = chairs_need;
      else result[i] = difference;
    }
  });
}
     if(result.reduce(reducer) < chairs_need)  console.log("Not enough!");
     if(result.reduce(reducer) == chairs_need) console.log(result);