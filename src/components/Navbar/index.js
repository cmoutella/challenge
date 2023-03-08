import { Container } from '@mui/material'
import { ContentWrapper, FullWidthWrapper } from './index.styles'
import Logo from '../../assets/logo.js'

const Navbar = () => {
  return (
    <FullWidthWrapper>
      <Container>
        <ContentWrapper>
          <Logo />
        </ContentWrapper>
      </Container>
    </FullWidthWrapper>
  )
}

export default Navbar
