const submitPayment = async (paymentData) => {
  const data = await fetch({
    url: 'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer',
    method: 'POST',
    data: paymentData
  }).then((res) => res.json())

  return data
}

export default submitPayment
