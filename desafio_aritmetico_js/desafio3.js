let valor = [gets(),gets(),gets(),gets(),gets()];
let qtde = valor.length;
  let pares = 0;
  let impares = 0;
  let positivo = 0;
  let negativo = 0;

for (let i = 0 ; i < qtde ; i++ ) {
  if (valor[i]%2 ==0){
    pares++;
  }else{
    impares++;
  }
  if (valor[i]>0){
    positivo++;
  } else if (valor[i]<0){
    negativo++;
  }

}

console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivo + " valor(es) positivo(s)");
console.log(negativo + " valor(es) negativo(s)");