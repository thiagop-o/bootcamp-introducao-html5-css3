let contador =0;

for (let i = 0; i <6 ; i++){
  let valor = gets();
  if (valor > 0){
    contador++;
  }
}
console.log(contador + " valores positivos");