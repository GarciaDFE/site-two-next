import styled from "styled-components"
import Template from "../src/components/Template"

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 700;
  font-size: 4rem;
  color: ${({ theme }) => theme.color.primaryBase};
`

const HomePage = () => {
  return (
    <Template>
      <Title>Home page</Title>
    </Template>
  )
}

export default HomePage