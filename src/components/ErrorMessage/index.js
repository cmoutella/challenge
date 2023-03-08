import Link from 'next/link'
import { PropTypes } from 'prop-types'
import Button from '../Button/index.styles'
import { MessageWrapper, Card, Message } from './index.styles'

const ErrorMessage = ({ message }) => {
  return (
    <MessageWrapper>
      <Card variant="outlined">
        <Message>{message}</Message>
        <Link href="/" passHref>
          <Button as="a">Voltar ao início</Button>
        </Link>
      </Card>
    </MessageWrapper>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.required
}

export default ErrorMessage
