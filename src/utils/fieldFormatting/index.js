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

export const creditCardNoSpaces = (cardNumber) => {
  return cardNumber.replace(' ', '')
}

export const formatExpirationDate = (date) => {
  return date
    .replace(/^([1-9]\/|[2-9])$/g, '0$1/')
    .replace(/^(0[1-9]|1[0-2])$/g, '$1/')
    .replace(/^([0-1])([3-9])$/g, '0$1/$2')
    .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2')
    .replace(/^([0]+)\/|[0]+$/g, '0')
    .replace(/[^\d\/]|^[\/]*$/g, '')
    .replace(/\/\//g, '/')
}
