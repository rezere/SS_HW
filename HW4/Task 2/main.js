 let Code_Morse = {  
        "-----":"0",
        ".----":"1",
        "..---":"2",
        "...--":"3",
        "....-":"4",
        ".....":"5",
        "-....":"6",
        "--...":"7",
        "---..":"8",
        "----.":"9",
        ".-":"A",
        "-...":"B",
        "-.-.":"C",
        "-..":"D",
        ".":"E",
        "..-.":"F",
        "--.":"G",
        "....":"H",
        "..":"I",
        ".---":"J",
        "-.-":"K",
        ".-..":"L",
        "--":"M",
        "-.":"N",
        "---":"O",
        ".--.":"P",
        "--.-":"Q",
        ".-.":"R",
        "...":"S",
        "-":"T",
        "..-":"U",
        "...-":"V",
        ".--":"W",
        "-..-":"X",
        "-.--":"Y",
        "--..":"Z",
        "···−−−···":"SOS",
        "-.-.--":"!",
        ".-.-.-":".",
        "--..--":","
    };

function decodeMorse(codeMorse) {
        codeMorse = codeMorse.split("   ");
        let result = "";
        
        for( let i = 0; i < codeMorse.length; i ++ ) 
        {
           codeMorse[i] =codeMorse[i].split( " " );
            
            for( let a = 0; a < codeMorse[i].length; a ++ ) 
            {
                if(codeMorse[i][a] != "") 
                {
                    result +=Code_Morse[ codeMorse[i][a] ];
                }
            }
            
            if( i < (codeMorse.length -1 )) 
            {
                result += " ";
            }
            
        } 
      	 console.log(result.trim());
    }

    decodeMorse('···−−−··· -.--')