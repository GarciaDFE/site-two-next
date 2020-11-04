import styled, { css } from "styled-components";
import media from "../../foundation/breakPoints"

import Container from "../../objects/Container"
import ButtonBase from "../../objects/ButtonBase"

const ContainerCompany = styled(Container)`
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   padding: 30px 0;

   ${media.greaterThan("md")`
      padding: 50px 0;
   `}

   ${media.greaterThan("lg")`
      padding: 80px 0;
   `}

`

const WrapAbout = styled.div`
   width: 100%;
   height: 100%;

   ${media.greaterThan("md")`
      display: flex;
   `}

   ${media.greaterThan("lg")`
      padding: 0 40px;
   `}

   ${media.greaterThan("xl")`
      padding: 0 80px;
   `}

` 

const side = css`
   width: 100%;
   display: flex;
   flex-direction: column;

   ${media.greaterThan("md")`
      width: 50%;
   `}

`

const SideImg = styled.div`
   ${side}
   padding-top: 20px;
   margin: 0 auto;

   ${media.greaterThan("sm")`
      padding: 20px 20px 0;
      max-width: 600px;
   `}

`

const SideContent = styled.div`
   ${side}
   padding: 20px 20px 0;

   ${media.greaterThan("sm")`
      max-width: 600px;
      margin: 0 auto;
   `}

   ${media.greaterThan("md")`
      padding: 20px 20px 0 0;
   `}
`

const Content = styled.p`
   font-family: ${props => props.theme.font.secondy};
   color: ${props => props.theme.color.grayMedium};
   font-size: ${props => props.theme.size.verySmall};
   margin: 0;
   margin-bottom: 2rem;

   ${media.greaterThan("lg")`
      font-size: ${props => props.theme.size.small};
      margin-bottom: 3rem;
   `}

   ${media.greaterThan("xl")`
      line-height: 2.4rem;
   `}

`;


const Button = styled(ButtonBase)`

   ${media.greaterThan("md")`
      margin: 0 auto 0 0;
   `}

`

export {
   ContainerCompany,
   WrapAbout,
   SideImg,
   SideContent,
   Content,
   Button
}