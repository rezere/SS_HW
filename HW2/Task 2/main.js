let a = [0, 1, 4, 5], b = [];


function findOld(str){
b[0] = str[0];
b[1] = str[0];	
 for (let i = 1; i < str.length; i++) 
 {
 	if(b[1]<str[i]) 
 		{
 			b[1] = str[i];
 		}
 }

  for (let i = 1; i < str.length; i++) 
 {
 	if(b[0]<str[i] && str[i]<b[1] ) 
 		{
 			b[0] = str[i];
 		}
 }

 console.log(b[0]);
 console.log(b[1]);
}
findOld(a);
