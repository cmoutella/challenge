import { FormControl, FormHelperText } from '@mui/material'
import PropTypes from 'prop-types'
import { Label, InputField } from './index.styles'

const BaseInput = ({
  label,
  elementId,
  helperText,
  placeholder,
  error,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <Label htmlFor={elementId} aria-label={elementId} shrink>
        {label}
      </Label>
      <InputField
        aria-labelledby={elementId}
        aria-describedby={`${elementId}-helper-text`}
        placeholder={placeholder}
        fullWidth
        {...props}
      />
      {helperText && error && (
        <FormHelperText id={`${elementId}-helper-text`}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

BaseInput.propTypes = {
  label: PropTypes.string,
  elementId: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  props: PropTypes.object
}

export default BaseInput
