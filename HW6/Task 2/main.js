class Dictionary 
{
  constructor() 
  {
    this.entries = {};
  }
  
  newEntry(key, value) 
  {
    this.entries[key] = value;
  }
  
  look(key) 
  {
    return this.entries[key] || "Can't find entry for " + key;
  }
}

let d = new Dictionary();
d.newEntry("Apple", "A fruit that grows on trees");
console.log(d.look("Apple"));
console.log(d.look("Banana"));