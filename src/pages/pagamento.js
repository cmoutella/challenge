import Link from 'next/link'
import { useContext } from 'react'
import { Button as MuiButton } from '@mui/material'
import { PlansContext } from 'provider/PlansContext'
import PaymentFeedbackHeader from 'components/PaymentFeedbackHeader'
import PurchaseResume from 'components/PurchaseResume'
import {
  ActionsWrapper,
  FeedbackWrapper,
  PrimaryButton
} from './pagamento.styles'
import { PaymentContext } from 'provider/PaymentContext'
import ErrorMessage from 'components/ErrorMessage'

const Pagamento = () => {
  const { plan } = useContext(PlansContext)
  const { feedback } = useContext(PaymentContext)

  if (!plan || !feedback) {
    return (
      <ErrorMessage message="Página indisponível, tente de novo mais tarde" />
    )
  }

  return (
    <FeedbackWrapper>
      <PaymentFeedbackHeader />
      <PurchaseResume plan={plan} feedback={feedback} />
      <ActionsWrapper>
        <MuiButton variant="text">Gerenciar assinatura</MuiButton>
        <Link href="/" passHref>
          <PrimaryButton as="a" fullWidth>
            Ir para a home
          </PrimaryButton>
        </Link>
      </ActionsWrapper>
    </FeedbackWrapper>
  )
}

export default Pagamento
