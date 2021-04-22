let limit = 20,
    resultStr = '',
    count = 0,
    maxCell = 0,
    m,
    max_mas = [],
    stroka_number;

function findPartMaxProd(n, limit, str) 
{ 
 let i;
 if (n > 0) 
 {
  	let k = Math.min(n, limit);
  	for (i = k; i > 0; i--) { findPartMaxProd(n-i, i, str + '+' + i);  }
 }
 else 
 {
    resultStr += str + '\n';
    let stroka_number = parseInt(str.replace(/[^\d]/g, ''))
    parseInt(stroka_number); 
    function getNumbers(stroka_number){
    return stroka_number.toString().split('').reduce(function(a, b) {
            return +a * +b;
        })
    }
    m = getNumbers(stroka_number);
    if(maxCell == m)
    {
        max_mas.push(str);
    }
    if(maxCell < m) 
    {
        maxCell = m;
        max_mas.splice(0);
        max_mas.push(str);
    }
  count++;
 }
 return resultStr;
}

function find(k)
{
	let z;
	findPartMaxProd(k, limit, '');
	z = max_mas.join();
	z = z.split("+");
	z.splice(0,1);
	console.log("[" +z + "] "+ maxCell);
	maxCell = 0;
    max_mas.splice(0);
}
