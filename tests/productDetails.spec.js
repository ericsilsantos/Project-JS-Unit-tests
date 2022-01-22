const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    expect(typeof productDetails).toBe('function')// Teste se productDetails é uma função.
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray peguei a função Array.isArray()
    expect(Array.isArray(productDetails())).toBe(true)// Teste se o retorno da função é um array.
    expect(productDetails().length).toBe(2)// Teste se o array retornado pela função contém dois itens dentro.
    expect(typeof productDetails("","")[0] || typeof productDetails('','')[1]).toBe('object')// Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails("test1","test2") !== productDetails("test3","test4")).toEqual(true)// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails("test1","test2")[0].details.productId.endsWith('123') || productDetails("test1","test2")[1].details.productId.endsWith('123')).toBe(true)// Teste se os dois productIds terminam com 123.
  });
});
