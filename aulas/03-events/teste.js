const products = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P',
];

// const obj = {};

// products.forEach((product) => {
//   const [cor, tamanho] = product.split('-');
//   if (!obj[cor]) obj[cor] = {};
//   if (!obj[cor][tamanho]) {
//     obj[cor][tamanho] = 1;
//   } else obj[cor][tamanho]++;
// });

// console.log(obj);

const obj = products.map((product, index, array) => {
  console.log(array);
  return { nada: 1 };
});
