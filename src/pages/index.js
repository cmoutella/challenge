import PaymentDataForm from '@/components/PaymentDataForm'
import * as yup from 'yup'
import { FormikProvider, useFormik } from 'formik'
import { Container } from '@mui/material'
import { FormSections } from './index.styles'
import PlanSelectionGroup from '@/components/PlanSelectionGroup'

export default function Plans() {
  const validationSchema = yup.object({
    creditCardNumber: yup
      .number()
      .min(16, 'insira um cartão válido')
      .required('Insira um cartão de crédito'),
    creditCardExpiration: yup.number().required('Insira validade do cartão'),
    ownerName: yup
      .string()
      .min(3, 'Insira nome como está no cartão')
      .required('Insira nome do dono do cartão'),
    ownerId: yup
      .number()
      .min(11, 'CPF inválido')
      .required('Insira CPF do dono do cartão')
  })

  const formik = useFormik({
    isInitialValid: false,
    initialValues: {
      cardNumber: '',
      cardExpirationDate: '',
      ownerName: '',
      ownerId: '',
      coupon: '',
      installments: ''
    },
    validationSchema: validationSchema
  })

  return (
    <Container>
      <FormikProvider value={formik}>
        <FormSections>
          <PaymentDataForm />
          <PlanSelectionGroup />
        </FormSections>
      </FormikProvider>
    </Container>
  )
}
