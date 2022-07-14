const funcaoInterna = () => {
  console.log('Salvar algum dado')
}

const falsoPostivo = () => {

  funcaoInterna()
  return 'texto qualquer';
}

module.exports = {
  falsoPostivo
}
