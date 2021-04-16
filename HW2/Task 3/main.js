function findshort(str) {
  let short = (typeof str == 'string'? str : '')
    .split(' ').reduce((shortWord, currentWord) =>{
      return currentWord.length < shortWord.length ? currentWord : shortWord;
  });
  return short;
}
let st = prompt("Ввод строки", '');
console.log(findshort(st).length);