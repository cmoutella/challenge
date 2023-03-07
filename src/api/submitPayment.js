const submitPayment = async (paymentData) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paymentData)
  }

  const data = await fetch(
    'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription',
    requestOptions
  ).then((response) => response.json())

  return data
}

export default submitPayment
