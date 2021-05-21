const cpfIsValid = (cpf) => {
  if (cpf.length !== 11) {
    return { cpf: { isValid: false, message: 'ERROOOOOOU' } }
  } else {
    return { cpf: { isValid: true } }
  }
}

export default cpfIsValid
