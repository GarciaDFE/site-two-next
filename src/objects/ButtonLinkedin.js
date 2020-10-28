import styled from "styled-components"
import media from "../foundation/breakPoints"

import { FiLinkedin } from "react-icons/fi"

const LinkIconLinkedin = styled.a`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;

   ${media.greaterThan("lg")`
      transition: transform 300ms linear;
      &:hover {
         transform: scale(1.1);
         transition: transform 300ms linear;
      }
   `}

`

const IconLinkedin = styled(FiLinkedin)`
   width: 100%;
   height: 100%;
   color: ${props => props.theme.color.grayClear};
`


const Label = styled.span`
   display: none;
   text-indent: -9999px;
`


const ButtonLinkedin = ({ className, target }) => {

   return (
      <LinkIconLinkedin 
         href={target}
         rel="noopener"
         target="_blank"
         className={className}>
            <Label>Link para LinkedIn</Label>
            <IconLinkedin 
               width="24px" 
               height="24px"
               strokeWidth="1px"/>
      </LinkIconLinkedin>
   )

}

export default ButtonLinkedin;