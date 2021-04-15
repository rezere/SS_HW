let str,num, sum_1,sum_2;

do
{
	num = prompt("Номер билета", '');
	str = String(num);
}while(str.length<1 || str.length>6 || num == 0)
console.log(str);	
sum_1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
sum_2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
if(sum_1 == sum_2) alert("Yes");
else alert("No");