const {falsoPostivo} = require("./falso-positivo")

it('retorna um texto qualquer', () => {
  expect(falsoPostivo()).toEqual(expect.any(String))
})
