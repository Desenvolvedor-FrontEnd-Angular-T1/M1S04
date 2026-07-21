const precos = [12.5, 30, 99.99, 5];

//Opção 1
const arrayFormatado = precos.map((item) => {
  return 'R$ ' + item.toFixed(2);
});

//Opção 2
// const arrayFormatado = precos.map((item) => {
//   return `R$ ${item.toFixed(2)}`;
// });

//Opção 3
//const arrayFormatado = precos.map((item) => `R$ ${item.toFixed(2)}`);

console.log(arrayFormatado);