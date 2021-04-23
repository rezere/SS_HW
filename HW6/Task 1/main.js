class Hex 
{
    constructor(value) 
    {
        this.number = value;
    }
    valueOf() 
    {
        return this.number;
    };
    toString() 
    {
        return '0x' + this.number.toString(16).toUpperCase();
    };
    toJSON() 
    { 
        return this.toString();
    }
    plus(numberr) 
    {
        return new Hex(this.number + numberr);
    };
    minus(numberr) 
    {
        return new Hex(this.number - numberr);
    };
    static parse (string) 
    {
        return Number.parseInt(string,16);
    };
}

var FF = new Hex(255);
console.log("255 = " + FF.toString());
console.log("255 + 1 = " + (FF.valueOf() + 1));
var a = new Hex(10);
var b = new Hex(5);
console.log("a+b = " + a.plus(b).toJSON());
console.log("a-b = " + a.minus(b).toJSON());
console.log("0xFF = " + Hex.parse("0xFF"));
console.log("FF = " + Hex.parse("FF"));
