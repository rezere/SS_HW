let l,h,w,r;
do
{
l = prompt("Введите длину стен", '');
}while(l>1000 || l<1)
do
{
w = prompt("Введите ширину стен", '');
}while(w>1000 || w<1)
do
{
h = prompt("Введите высоту стен", '');
}while(h>1000 || h<1)
r = (2*(l*h)+2*(w*h))/16;
alert("Нужно банок краски " + Math.round(r));
