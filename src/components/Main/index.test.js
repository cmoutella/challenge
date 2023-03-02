import { render, screen } from '@testing-library/react'
import Main from '.'

describe('Main', () => {
  test('find component', async () => {
    render(<Main />)
    const myComponent = await screen.findByText('my component')

    expect(myComponent).toBeInTheDocument()
  })
})
