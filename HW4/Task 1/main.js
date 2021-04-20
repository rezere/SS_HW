function findSumIP(first_ip,second_ip) 
{
	first_ip = first_ip.split( "." );
	second_ip = second_ip.split( "." );
	let result = 0, numberOne = 0, numberTwo = 0;
	for( let i = 0; i < 4; i ++ ) 
    {
            numberOne += Number(first_ip[i]) * Math.pow(256, 3-i);
            numberTwo += Number(second_ip[i]) * Math.pow(256, 3-i); 
    }
    result = Number(numberTwo) - Number(numberOne);
	console.log(result);
}

findSumIP("10.0.0.0","10.0.1.0");