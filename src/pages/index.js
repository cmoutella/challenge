import PaymentDataForm from '../components/PaymentDataForm'
import * as yup from 'yup'
import { FormikProvider, useFormik } from 'formik'
import { Container } from '@mui/material'
import { FormSections } from './index.styles'
import PlanSelectionGroup from '../components/PlanSelectionGroup'

const Plans = () => {
  const validationSchema = yup.object({
    creditCardNumber: yup
      .number()
      .min(16, 'insira um cartão válido')
      .required('Insira um cartão de crédito'),
    creditCardExpiration: yup
      .string()
      .trim()
      .required('Insira validade do cartão'),
    ownerName: yup
      .string()
      .min(3, 'Insira nome como está no cartão')
      .required('Insira nome do dono do cartão'),
    ownerId: yup
      .number()
      .min(11, 'CPF inválido')
      .required('Insira CPF do dono do cartão'),
    planId: yup.number().required(),
    installments: yup.number().required()
  })

  const formik = useFormik({
    initialErrors: false,
    initialValues: {
      creditCardNumber: '',
      cardExpirationDate: '',
      cardOwnerName: '',
      ownerId: '',
      coupon: '',
      creditCardCVV: '',
      installments: '',
      planId: '',
      storeId: '',
      gateway: '',
      maxInstallments: 1
    },
    validationSchema: validationSchema,
    validateOnBlur: true
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

export default Plans
