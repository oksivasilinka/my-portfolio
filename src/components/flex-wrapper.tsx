import styled from 'styled-components'

type Props = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
}
export const FlexWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'start'};
  align-items: ${(props) => props.align || 'start'};
  flex-wrap: ${(props) => props.wrap || 'no-wrap'};
`
