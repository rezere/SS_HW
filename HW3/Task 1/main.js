function task1()
{
  let words = prompt("Введите строку для упорядочивания");
  const i = words => + (words.match(/\d+/g) || [0])[0]; // нахождение чисел в словах
  const f = words => words.split(' ').sort((a, b) => i(a) - i(b)).join(' '); // сортировка за возростанием
  alert(f( words));
}
task1();