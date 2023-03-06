export const calcPriceWithDiscount = (fullPrice, discountAmmount) => {
  return fullPrice - discountAmmount
}

export const calcInstallmentValue = (currPrice, installments) => {
  return currPrice / installments
}

export const displayDiscount = (discount) => {
  return discount * 100
}
