function validaNovoItem(name, quantity, type) {
  if (name && quantity && type) {
    return true
  }
  else { return false }
}

export default validaNovoItem