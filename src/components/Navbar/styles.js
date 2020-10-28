import styled from "styled-components";
import media from "../../foundation/breakPoints"
import { FaChevronDown } from "react-icons/fa"

const MainNav = styled.nav`
   display: flex;
   justify-content: space-between;
   flex-grow: 1;
   box-sizing: border-box;
   padding: 10px 0;
`

////  MENU PRINCIPAL  ////
const ListItem = styled.ul`
   position: absolute;
   display: block;
   top: 90px;
   right: 0;
   width: 100%;
   height: auto;
   margin: 0;
   list-style: none;
   text-decoration: none;
   line-height: 50px;
   background-color: ${props => props.theme.color.grayLight};
   transform: translateX(-300%);
   transition: transform 300ms linear;
   z-index: 10;
   &.-isActive {
      transform: translateX(0);
      transition: transform 300ms linear;
   }

   ${media.greaterThan("lg")`
      position: relative;
      top: auto;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      line-height: 35px;
      background-color: ${props => props.theme.color.grayClear};
      transform: translateX(0);
   `}

`

const Item = styled.li`
   position: relative;
   display: block;
   margin: 0;
   padding: 0;
   background-color: transparent;
   &:not(:last-child) {
      margin-right: 0;
   }

   ${media.greaterThan("lg")`
      display: inline-flex;
      padding: 0;
      cursor: pointer;
      &:not(:last-child) {
         margin-right: 45px;
      }
   `}

`

const IconSubAction = styled(FaChevronDown)`
   width: 15px;
   height: 12px;
   margin-left: 5px;
   transition: transform 300ms linear;
   &.-isActive {
      transform: rotate(180deg);
      transition: transform 300ms linear;
   }
`

const Action = styled.a`
   display: block;
   width: 100%;
   padding-left: 20px;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.small};
   font-weight: normal;
   color: ${props => props.theme.color.grayDark};
   background-color: transparent;
   text-align: left;
   text-decoration: none;
   &:after {
      content: none;
   }

   ${media.greaterThan("sm")`
      font-size: ${props => props.theme.size.mediumSmall};
   `}

   ${media.greaterThan("lg")`
      padding-left: 0;
      &:after {
         content: "";
         height: 2px;
         width: 100%;
         background-color: ${props => props.theme.color.primaryDark};
         position: absolute;
         bottom: -1px;
         left: 0;
         transform: scaleX(0);
         transition: transform 200ms linear;
         transform-origin: center;
      }
      &:hover:after {
         transform: scale(1);
      }
   `}

`

////  ITEM MENU COM DROPDOWN  ////
const ActionSpan = styled.span`
   display: block;
   width: 100%;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.small};
   font-weight: normal;
   color: ${props => props.theme.color.grayDark};
   text-decoration: none;
   padding-left: 20px;
   background-color: transparent;
   text-align: left;
   &:after {
      content: none;
   }

   ${media.greaterThan("sm")`
      font-size: ${props => props.theme.size.mediumSmall};
   `}

   ${media.greaterThan("lg")`
      padding-left: 0;
      &:after {
         content: "";
         height: 2px;
         width: 100%;
         background-color: ${props => props.theme.color.primaryDark};
         position: absolute;
         bottom: -1px;
         left: 0;
         transform: scaleX(0);
         transition: transform 200ms linear;
         transform-origin: center;
      }
      &:hover:after {
         transform: scale(1);
      }
   `}

`

////  MENU DROPDOWN  ////
const ListSubItem = styled.ul`
   position: relative;
   width: 100vw;
   display: none;
   visibility: hidden;
   margin: 0;
   background-color: transparent;
   border: none;
   &.-isShow {
      display: block;
      visibility: visible;
   }
   
   ${media.greaterThan("lg")`
      width: 230px;
      position: absolute;
      top: 33px;
      background-color: ${props => props.theme.color.grayClear};
      overflow: visible;
      border: 1px solid ${props => props.theme.color.secondyMedium};
      margin: 0;
      display: block;
      z-index: 30;
      &.-isShow {
         visibility: visible;
      }
   `}

`

const SubItem = styled.li`
   width: 100%;
   position: relative;
   display: block;
   margin: 0;
   text-align: left;
   clear: both;
   &:not(:last-child) {
         border-bottom: none;
   }
   &:hover {
      background-color: transparent;
   }

   ${media.greaterThan("lg")`
      padding: 5px 20px;
      &:not(:last-child) {
         border-bottom: 1px solid ${props => props.theme.color.secondyMedium};
      }
      &:hover {
         background-color: ${props => props.theme.color.grayClear};
      }
   `}

`

const SubAction = styled.a`
   display: block;
   width: 100%;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.verySmall};
   font-weight: normal;
   color: ${props => props.theme.color.grayDark};
   text-decoration: none;
   padding: 0 40px;

   ${media.greaterThan("lg")`
      font-size: ${props => props.theme.size.small};
      padding: 0;
      &:hover {
         color: ${props => props.theme.color.primaryDark};
      }
   `}

`

export {
   MainNav,
   ListItem,
   Item,
   Action,
   ActionSpan,
   ListSubItem,
   SubItem,
   SubAction,
   IconSubAction
}