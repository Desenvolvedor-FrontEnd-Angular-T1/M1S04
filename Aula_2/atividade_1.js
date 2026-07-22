function quadrado(num) {
  if (isNaN(num)) { // OU typeof(num) != 'number'
    return 'Parametro incorreto';
  } else {
    return num * num;
  }
  // if (typeof(num) == 'number') { 
  //   return num * num;
  // } else {
  //   return 'Parametro incorreto';
  // }
}

console.log(quadrado(8));
console.log(quadrado(0));
console.log(quadrado('texto'));
console.log(quadrado());
console.log(quadrado(''));
console.log(quadrado(null));
console.log(quadrado(undefined));