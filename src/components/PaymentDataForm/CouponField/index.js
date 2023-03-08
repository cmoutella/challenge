import { useContext, useMemo } from 'react'
import { FormikContext } from 'formik'
import { PlansContext } from '../../../provider/PlansContext'
import BaseInput from '../BaseInput'

const CouponField = () => {
  const fieldLabel = 'Cupom'
  const elementId = 'coupon'
  const placeholder = 'Insira aqui'
  const { plan } = useContext(PlansContext)
  const enabled = useMemo(() => plan?.acceptsCoupon, [plan])
  const disabled = plan ? !enabled : false

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
      disabled={disabled}
    />
  )
}

export default CouponField
