import styled from "styled-components"
import media from "../../foundation/breakPoints"

import Container from "../../objects/Container"

const BudgetContainer = styled(Container)`
   flex-direction: column;
   text-align: center;
   padding: 5rem 4rem;

   ${media.greaterThan("lg")`
      flex-direction: row;
   `}

`

const Title = styled.h2`
   width: 100%;
   font-family: ${props => props.theme.font.primary};
   font-weight: 600;
   font-size: ${props => props.theme.size.mediumBig};
   line-height: 3.8rem;
   color: ${props => props.theme.color.grayMedium};
   margin: 0;
`

const Obs = styled.p`
   width: 100%;
   font-family: ${props => props.theme.font.secondy};
   font-weight: 400;
   font-size: ${props => props.theme.size.verySmall};
   color: ${props => props.theme.color.grayMedium};
`

const Content = styled.div`

   ${media.greaterThan("sm")`
      ${Title} {
         font-size: ${props => props.theme.size.big};
      }
      ${Obs} {
         font-size: ${props => props.theme.size.small};
      }
   `}

   ${media.greaterThan("lg")`
      ${Title} {
         text-align: left;
      }
      ${Obs} {
         margin: 0;
         text-align: left;
      }
   `}

`

const LinkToMail = styled.a`
   display: inline-block;
   background-color: ${props => props.theme.color.primaryDark};
   color: ${props => props.theme.color.grayClear};
   padding: 7px 12px;
   border-radius: 5px;
   border: none;
   text-transform: uppercase;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.small};
   font-weight: bold;
   text-decoration: none;
   cursor: pointer;
   transition: all 300ms linear;
   opacity: 0.9;
   &:hover {
      transition: all 300ms linear;
      text-decoration: inherit;
      opacity: 1;
   }

   ${media.greaterThan("lg")`
      font-size: ${props => props.theme.size.mediumSmall};
      padding: 10px 20px;
      margin-left: 8rem;
   `}
`

export {
   BudgetContainer,
   Content,
   Title,
   Obs,
   LinkToMail
}
