import React from "react";
import styled from "styled-components";
import media from "../foundation/breakPoints"

const Container = styled.div`
   position: relative;
   display: flex;
   justify-content: flex-end;
   margin: 0;

   ${media.greaterThan("lg")`
      display: none;
   `}
   
`

const WrapButton = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: flex-start;
   cursor: pointer;
   flex: auto 1 auto;
`

const BarButton = styled.div`
      width: 30px;
      height: 3px;
      background-color: ${props => props.theme.color.grayMedium};
      margin: 3px 0;
      transition: 500ms;
      &.-open1 {
         -webkit-transform: rotate(-45deg) translate(-6px, 6px);
         transform: rotate(-45deg) translate(-7px, 6px);
      }
      &.-open2 {
         opacity: 0;
      }
      &.-open3 {
         -webkit-transform: rotate(45deg) translate(-6px, -6px);
         transform: rotate(45deg) translate(-7px, -6px);
      }
`

const ButtonMenu = ({ isOpen=false, onClick, className }) => {

   return (
      <Container onClick={onClick} className={className}>
         <WrapButton>
            <BarButton className={`${isOpen ? "-open1" : "" }`} />
            <BarButton className={`${isOpen ? "-open2" : "" }`} />
            <BarButton className={`${isOpen ? "-open3" : "" }`} />
         </WrapButton>
      </Container>
   )

}

export default ButtonMenu;