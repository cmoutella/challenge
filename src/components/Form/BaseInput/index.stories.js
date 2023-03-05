import { Input } from '@mui/material'
import BaseInput from '.'

export default {
  title: 'BaseInput',
  component: BaseInput
}

export const Basic = () => (
  <BaseInput
    label="Teste"
    id="element"
    placeholder="MM/AA"
    inputField={<Input />}
  />
)
