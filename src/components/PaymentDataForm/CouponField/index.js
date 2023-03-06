import { FormikContext } from 'formik'
import { useContext } from 'react'
import BaseInput from '../BaseInput'

const CouponField = () => {
  const fieldLabel = 'Cupom'
  const elementId = 'coupon'
  const placeholder = 'Seu nome'

  const formikContext = useContext(FormikContext)
  if (!formikContext) {
    return null
  }

  return (
    <BaseInput
      value={formikContext.values.coupon}
      label={fieldLabel}
      elementId={elementId}
      id={elementId}
      name={elementId}
      placeholder={placeholder}
      onChange={formikContext.handleChange}
      helperText={formikContext.touched.coupon && formikContext.errors.coupon}
      error={
        formikContext.touched.coupon && Boolean(formikContext.errors.coupon)
      }
    />
  )
}

export default CouponField
