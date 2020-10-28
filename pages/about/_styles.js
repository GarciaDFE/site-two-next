import styled from "styled-components"

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 700;
  font-size: 4rem;
  color: ${({ theme }) => theme.color.grayMedium};
`

export {
   Title
}