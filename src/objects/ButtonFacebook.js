import styled from "styled-components";
import media from "../foundation/breakPoints"

import { FiFacebook } from "react-icons/fi"

const LinkIconFacebook = styled.a`
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

const IconFacebook = styled(FiFacebook)`
   width: 100%;
   height: 100%;
   color: ${props => props.theme.color.grayClear};
`

const Label = styled.span`
   display: none;
   text-indent: -9999px;
`

const ButtonFacebook = ({ className, target }) => {

   return (
      <LinkIconFacebook 
         href={target}
         rel="noopener"
         target="_blank"
         className={className}>
            <Label>Link para Facebook</Label>
            <IconFacebook strokeWidth="1px"/>
      </LinkIconFacebook>
   )

}

export default ButtonFacebook;