import styled from "styled-components"
import Template from "../src/components/Template"

import BannerCarousel from "../src/components/BannerCarousel"

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 700;
  font-size: 4rem;
  color: ${({ theme }) => theme.color.primaryBase};
`

const HomePage = () => {
  return (
    <Template>
      <BannerCarousel element="glide-hero" />
    </Template>
  )
}

export default HomePage