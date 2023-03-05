import { Container } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContentWrapper, FullWidthWrapper, ReturnButton } from './index.styles'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/logo.js'

const Navbar = () => {
  return (
    <FullWidthWrapper>
      <Container>
        <ContentWrapper>
          <ReturnButton aria-label="Voltar" size="small">
            <FontAwesomeIcon icon={faChevronLeft} />
          </ReturnButton>
          <Logo />
          <div style={{ visibility: 'hidden' }} />
        </ContentWrapper>
      </Container>
    </FullWidthWrapper>
  )
}

export default Navbar
