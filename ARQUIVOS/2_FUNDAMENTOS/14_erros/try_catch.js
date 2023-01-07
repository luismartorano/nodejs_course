const x = 10;

try {
  x = 2; //atribuiu um novo valor para ela... vai dar erro!
} catch (err) {
  console.log(`Erro: ${err}`);
}

//evidencia um erro e dá a resposta para o usuário! tratando o erro