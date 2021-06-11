let valor = parseInt(gets(89));
let nota100 =0;
let nota50  =0;
let nota20  =0;
let nota10 =0;
let nota5 =0;
let nota2 =0;
let nota1 =0;
let valorIni = valor;

  nota100 = parseInt(valor/100);
  valor = valor - (nota100*100);
  
  nota50 = parseInt(valor/50);
  valor = valor - (nota50*50); 
  
  nota20 = parseInt(valor/20);
  valor = valor - (nota20*20); 
  
  nota10 = parseInt(valor/10);
  valor = valor - (nota10*10); 
  
  nota5 = parseInt(valor/5);
  valor = valor - (nota5*5); 
  
  nota2 = parseInt(valor/2);
  valor = valor - (nota2*2); 
  
  nota1 = parseInt(valor/1);
  valor = valor - (nota1*1); 

console.log(valorIni);
console.log(nota100 + " nota(s) de R$ 100,00");
console.log(nota50 + " nota(s) de R$ 50,00");
console.log(nota20 + " nota(s) de R$ 20,00");
console.log(nota10 + " nota(s) de R$ 10,00");
console.log(nota5 + " nota(s) de R$ 5,00");
console.log(nota2 + " nota(s) de R$ 2,00");
console.log(nota1 + " nota(s) de R$ 1,00");