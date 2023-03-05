import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import Navbar from '.'

describe('Navbar', () => {
  test('find component', async () => {
    render(
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    )
    const navbarComponent = await screen.getByTestId('company-logo')

    expect(navbarComponent).toBeInTheDocument()
  })
})
