let a = [
	[0,1,2,3,4],
	[1,2,3,0,5],
	[0,3,4,5,6]
];
function findSumMin()
{
	let min, sum = 0;
	for(let i = 0; i<a.length; i++)
	{
		min = a[i][0];
		for(let j = 1; j<a[i].length; j++)
		{
			if(min > a[i][j]) min = a[i][j]; 
		}
		sum+=min;
	}
	console.log(sum);
}
findSumMin();


