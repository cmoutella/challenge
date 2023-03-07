import { FormControl, MenuItem, Select } from '@mui/material'
import { Label } from './index.styles'
import { useContext } from 'react'
import { FormikContext } from 'formik'

const InstallmentsSelection = () => {
  const elementId = 'installments'
  const label = 'Número de parcelas'
  const formikContext = useContext(FormikContext)

  const options = []
  for (let i = 0; i < formikContext.values.maxInstallments; i++) {
    options.push(
      <MenuItem key={i} value={i + 1}>
        {i + 1}x
      </MenuItem>
    )
  }

  return (
    <FormControl fullWidth>
      <Label htmlFor={elementId} id={elementId} aria-label={elementId} shrink>
        {label}
      </Label>
      <Select
        labelId={elementId}
        value={formikContext.values.installments}
        aria-labelledby={elementId}
        name={elementId}
        id={elementId}
        variant="standard"
        onChange={formikContext.handleChange}
      >
        {options}
      </Select>
    </FormControl>
  )
}

export default InstallmentsSelection
