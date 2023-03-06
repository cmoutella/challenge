import BaseInput from '.'
import { StoryWrapper } from './index.styles'

export default {
  title: 'BaseInput',
  component: BaseInput
}

export const Basic = () => (
  <StoryWrapper>
    <BaseInput label="BaseInput" id="element" placeholder="Placeholder" />
  </StoryWrapper>
)
