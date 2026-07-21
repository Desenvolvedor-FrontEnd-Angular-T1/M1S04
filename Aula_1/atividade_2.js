const prompt = require('prompt-sync')();

let carrinho = [];
let continua;

do {
  const fruta = prompt("Digite uma fruta: "); //recebe a fruta digitada pelo usuario

  carrinho.push(fruta); //insere na ultima posição
  //carrinho.unshift(fruta); //insere na primeira posição

  if (carrinho.length > 5) {
    carrinho.pop(); //remove da ultima posição
    //carrinho.shift(); //remove da primeira posição
  }

  console.log(carrinho);
  
  continua = prompt("Deseja continuar? ");
} while (continua.toUpperCase() != 'SAIR');

console.log(carrinho);