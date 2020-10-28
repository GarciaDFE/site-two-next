import styled from "styled-components"
import media from "../../foundation/breakPoints"

import Container from "../../objects/Container"

const WrapMainFooter = styled.footer`
   width: 100%;
   background-color: ${props => props.theme.color.secondyDark};
`

// Part 1
const ContainerCallTo = styled(Container)`
   max-width: 100%;
   background-color: ${props => props.theme.color.secondyBase};
`

const WrapCallTo = styled(Container)`
   display: block;
   text-align: center;
   padding: 40px;

   ${media.greaterThan("md")`
      padding: 50px 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
   `}

`

const CallTitle = styled.h2`
   width: 100%;
   font-family: ${props => props.theme.font.primary};
   font-weight: 600;
   font-size: ${props => props.theme.size.medium};
   line-height: 3rem;
   color: ${props => props.theme.color.grayClear};
`

const CallDestak = styled(CallTitle)`
   text-transform: uppercase;
   margin-bottom: 0;
`

const CallContacts = styled.p`
   width: 100%;
   font-family: ${props => props.theme.font.secondy};
   font-weight: 400;
   font-size: ${props => props.theme.size.small};
   color: ${props => props.theme.color.grayClear};
   margin: 0;
   padding: 1rem 0;

   ${media.greaterThan("md")`
      width: 33%;
   `}

   ${media.greaterThan("lg")`
      font-size: ${props => props.theme.size.medium};
   `}

`

// Part 2
const WrapFooter = styled(Container)`
   width: 100%;
   display: flex;
   margin: 0 auto;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: flex-start;
   background-color: transparent;
   text-align: center;
   padding: 35px 16px 10px;

   ${media.greaterThan("sm")`
      padding: 40px 40px 10px;
   `}

   ${media.greaterThan("lg")`
      padding: 40px 20px 10px;
   `}

`

const FooterBrand = styled.div`
   width: 100%;
   height: 50px;
   margin-bottom: 3rem;

   ${media.greaterThan("md")`
      height: 76px;
      margin-bottom: 6rem;
   `}

`

const FooterTitle = styled.h3`
   width: 100%;
   font-family: ${props => props.theme.font.primary};
   font-weight: 600;
   font-size: ${props => props.theme.size.verySmall};
   color: ${props => props.theme.color.grayClear};
   margin: 0;
   padding-bottom: 10px;

   ${media.greaterThan("md")`
      font-size: ${props => props.theme.size.medium};
   `}

`

const FooterContent = styled.p`
   font-family: ${props => props.theme.font.secondy};
   font-weight: 400;
   font-size: ${props => props.theme.size.verySmall};
   color: ${props => props.theme.color.grayClear};
   margin: 0;

   ${media.greaterThan("md")`
      font-size: ${props => props.theme.size.small};
   `}

`

const FooterLocalizacao = styled.div`
   width: 65%;
   text-align: left;
   margin-bottom: 30px;

   & ${FooterTitle} {
      padding-bottom: 5px;
   }

   ${media.greaterThan("sm")`
      width: 50%;
   `}

   ${media.greaterThan("lg")`
      flex: 1;
      text-align: center;
   `}

`

const FooterRedesSocials = styled.div`
   width: 35%;
   text-align: right;

   & ${FooterContent} {
      height: 24px;
      display: flex;
      justify-content: flex-end;
      text-align: left;
      > * {
         width: 24px;
         height: 100%;
         margin: 0 0 0 1rem;
      }
   }

   ${media.greaterThan("sm")`
      width: 45%;
      & ${FooterContent} {
         > * {
            margin: 0 0 0 2rem;
         }
      }
   `}

   ${media.greaterThan("md")`
      & ${FooterContent} {
         height: 32px;
         > * {
            width: 32px;
         }
      }
   `}

   ${media.greaterThan("lg")`
      text-align: center;
      flex: 1;
      & ${FooterContent} {
         justify-content: center;
         margin-right: 1rem;
         > * {
            margin: 0 0 0 2rem;
         }
      }
   `}

`

const FooterExpediente = styled.div`
   width: 55%;
   text-align: left;
   & ${FooterTitle} {
      padding-bottom: 5px;
   }

   ${media.greaterThan("lg")`
      flex: 1;
      text-align: center;
   `}

`

const FooterFechamos = styled.div`
   width: 45%;
   text-align: right;
   & ${FooterTitle} {
      padding-bottom: 5px;
   }

   ${media.greaterThan("lg")`
      text-align: center;
      flex: 1;
   `}

`

const FooterCopyright = styled.div`
   width: 100%;
   text-align: center;
   padding: 35px 16px 0;
`

export {
   WrapMainFooter,
   ContainerCallTo,
   WrapCallTo,
   CallTitle,
   CallDestak,
   CallContacts,
   WrapFooter,
   FooterBrand,
   FooterLocalizacao,
   FooterExpediente,
   FooterFechamos,
   FooterRedesSocials,
   FooterCopyright,
   FooterTitle,
   FooterContent
}