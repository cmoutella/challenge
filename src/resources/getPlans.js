const getPlans = async () => {
  const data = await fetch(
    'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer'
  ).then((res) => res.json())
  return data
}

export default getPlans
