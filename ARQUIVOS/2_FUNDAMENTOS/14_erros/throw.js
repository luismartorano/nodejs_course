const x = "10"; //entre aspas vira string!
const y = 10;

if (!Number.isInteger(y)) {
  throw new Error("O valor de x não é um número inteiro");
}

console.log('Continuando o código...')
