let a = [],b = [], m = 0;

for(let i =0; i<3;i++)
	{
		do
		{
			a[i]= prompt("Цену на песок", '');
		}while(a[i]>100 || a[i]<1)
}
	for(let i =0; i<3;i++)
	{
		do
		{
			b[i]= prompt("Объём ведра", '');
		}while(b[i]>100 || b[i]<1)
	}
	a.sort((a, b) => b - a);
	b.sort((a, b) => b - a);
	for(let i =0; i<3;i++)
	{
		m += a[i] * b[i]; 
	}
	alert("Сумма зароботка: " + m);

