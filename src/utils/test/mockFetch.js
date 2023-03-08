import MockAdapter from 'axios-mock-adapter'

export default (url, mock) => {
  const mockHttp = new MockAdapter(url, { delayResponse: 0 })

  mockHttp
    .onGet('https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer')
    .reply(200, mock)
  mockHttp
    .onGet(
      'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription'
    )
    .reply(200, mock)
}
