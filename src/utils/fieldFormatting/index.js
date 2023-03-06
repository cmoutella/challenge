const cardFormat = (str, l, i) => {
  return str + (!i || i % 4 ? '' : ' ') + l
}

export const toCardFormat = (cardNumber) => {
  return cardNumber
    .replace(/[^0-9]/g, '')
    .substr(0, 16)
    .split('')
    .reduce(cardFormat, '')
}
