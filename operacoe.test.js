const { calculaDesconto, somaHorasExtras } = require('./operacoe');

describe('Operações', () => {
test('deve somar horas extras', () => {
    const esperado = 10;
    const retornado =somaHorasExtras(5,5);

    expect(retornado).toBe(esperado)
    //vamos escrevr o teste aqui
})

test('deve caucular descontos', () => {
    const esperado = 5;
    const retornado = calculaDesconto(10,5);

    expect(retornado).toBe(esperado)
})

})



