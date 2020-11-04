import Image from "next/image"
import styled from "styled-components";
import media from "../../foundation/breakPoints"

import ButtonBase from "../../objects/ButtonBase"

const CardItem = styled.div`
   position: relative;
   width: 100%;
   box-sizing: border-box;
   background-color: ${props => props.theme.color.grayClear};
   box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);
   margin: 0 auto;
   padding: 20px;
   overflow: hidden;
   text-align: center;
   border-radius: 5px;
   &:last-child {
      margin-bottom: 0;
   }
`

const Content = styled.dl`
   height: auto;
   list-style: none;
   text-align: center;

   ${media.greaterThan("xl")`
      padding: 0;
   `}
   
`

const Title = styled.dt`
   font-family: ${props => props.theme.font.primary};
   color: ${props => props.theme.color.grayMedium};
   font-size: ${props => props.theme.size.small};
   font-weight: 700;
   line-height: 2rem;
   text-transform: uppercase;
   margin-bottom: 1rem;
`

const HeroImage = styled(Image)`
   width: 100%;
   text-align: center;
   margin: 0 auto 1rem;
   transition: transform 300ms ease-out;
   &:hover {
      transform: scale(1.05);
      transition: transform 300ms ease-out;
   }

   ${media.greaterThan("xl")`
      max-width: 200px;
   `}

`

const Description = styled.dd`
   font-family: ${props => props.theme.font.secondy};
   color: ${props => props.theme.color.grayMedium};
   font-size: ${props => props.theme.size.verySmall};
   line-height: 1.4em;
`

const CardButton = styled(ButtonBase)`
   position: absolute;
   bottom: 20px;
   left: 50%;
   transform: translateX(-50%);

   ${media.greaterThan("md")`
      width: 60%;
   `}

   ${media.greaterThan("xl")`
      width: 75%;
      margin: 0 auto;
      bottom: 15px;
   `}

`

export {
   CardItem,
   Content,
   Title,
   Description,
   CardButton,
   HeroImage
}