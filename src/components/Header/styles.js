import styled from "styled-components";
import media from "../../foundation/breakPoints"

import Container from "../../objects/Container"
import ButtonMenu from "../../objects/ButtonMenu"

const Section = styled.header`
   position: fixed;
   top: 30px;
   width: 100%;
   height: 90px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0;
   padding: 0;
   z-index: 15;
   transition: all 300ms ease-out;
   background-color: ${props => props.theme.color.grayClear};
 
   ${media.greaterThan("lg")`
      height: 120px;
   `}

`

const ContainerHeader = styled(Container)`
   height: 100%;
   margin: 0 auto;
   justify-content: space-between;
   align-items: center;
   padding: 5px 20px;

   ${media.greaterThan("lg")`
      padding: 10px 20px;
      margin: 0 auto;
   `}

`

const NavButtonMenu = styled(ButtonMenu)`
   flex: 1;
`

export {
   Section,
   ContainerHeader,
   NavButtonMenu,
}