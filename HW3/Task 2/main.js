let moves= [
	[2,1,2],
	[2,1,1],
	[2,1,2]
];

function winner(a){


    for(let i = 0; i<3;i++)
    if ( moves[i][0] == a &&  moves[i][1] == a &&  moves[i][2]== a) 
    {
         return a;
    }

    for(let i = 0; i<3;i++)
    if ( moves[0][i] == a &&  moves[1][i] == a &&  moves[2][i]== a) 
    {
           return a;
    }
    if(moves[0][0] == a &&  moves[1][1] == a &&  moves[2][2]== a)
    {
    	return a;
    }
       if(moves[0][2] == a &&  moves[1][1] == a &&  moves[2][0]== a)
    {
    	return a;
    }
    if(a == 2)
    {
	    for(let i = 0; i<3;i++)
	    	for(let j = 0; j<3;j++)
	    		if(moves[i][j] == 0)
	    		{
	    			return 0;
	    		}
	    return -1;
	}
}

for(let i = 1;i<=2;i++)
{	if(winner(i) == 0)  console.log("The game is not over");
	if(winner(i) == -1) console.log("Draw");
	if(winner(i) == 1 || winner(i) == 2)
	{
		console.log("Win " + i);
		break;
	}
}
