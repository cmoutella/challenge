import { faPlugCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { MessageWrapper, Card, Icon, Message } from './index.styles'

const UnavailabilityFeedback = () => {
  return (
    <MessageWrapper>
      <Card variant="outlined">
        <Icon icon={faPlugCircleXmark} size="3x" />
        <Message>Serviço temporariamente indisponível</Message>
      </Card>
    </MessageWrapper>
  )
}

export default UnavailabilityFeedback
