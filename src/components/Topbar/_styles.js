import styled, { css } from "styled-components";
import media from "../../foundation/breakPoints";

import { FaPhoneAlt, FaEnvelope, FaCalendarTimes } from "react-icons/fa";

import Section from "../../objects/Section"
import Container from "../../objects/Container"

const SectionTopbar = styled(Section)`
   position: fixed;
   top: 0;
   background-color: ${props => props.theme.color.secondyDark};
   z-index: 10;
`

const ContainerTopbar = styled(Container)`
   height: 30px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;

   ${media.greaterThan("md")`
      padding: 0 10px;
   `}

`

const icons = css`
   display: none;
   width: 2rem;
   height: 1.4rem;
   color: ${props => props.theme.color.grayCLear};
   margin-right: 5px;

   ${media.greaterThan("sm")`
      display: block;
  `}

`

const IconPhone = styled(FaPhoneAlt)`
   ${icons}
   display: block;
`

const IconEmail = styled(FaEnvelope)`
   ${icons}
`

const IconCalender = styled(FaCalendarTimes)`
   ${icons}
`

const ItemTopbar = styled.p`
   display: inline-flex;
   justify-content: flex-start;
   align-items: center;
   color: ${props => props.theme.color.grayClear};
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.verySmall};
   font-weight: 600;
   margin: 0;
   padding: 2px 10px;
   &:nth-child(n+2):nth-child(-n+4) {
      display: none;
   }
   &:nth-child(1) {
      flex: 1 0;
   }

   ${media.greaterThan("sm")`
      flex: 1;
      &:nth-child(n+2):nth-child(-n+2) {
         display: inline-flex;
      }
      &:nth-child(5) {
         justify-content: flex-end;
      }
   `}

   ${media.greaterThan("lg")`
      flex: 1;
      &:nth-child(n+3):nth-child(-n+3) {
         display: inline-flex;
      }
   `}

   ${media.greaterThan("xl")`
      flex: 1 0;
      &:nth-child(n+3):nth-child(-n+4) {
         display: inline-flex;
         justify-content: center;
      }
      &:nth-child(4) {
         flex-grow: 1;
      }
      &:nth-child(5) {
         flex-grow: 0;
      }
   `}

`

export {
   SectionTopbar,
   ContainerTopbar,
   ItemTopbar,
   IconPhone,
   IconEmail,
   IconCalender
}