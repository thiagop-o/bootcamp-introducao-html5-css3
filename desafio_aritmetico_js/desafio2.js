let valor = gets();
let qtde = valor/2;
let incremento = valor/qtde;
for (let num = incremento ; num <= valor ; num+= incremento ) {
  console.log(num);
}