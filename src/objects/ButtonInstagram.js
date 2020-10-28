import styled from "styled-components";
import media from "../foundation/breakPoints"
import { FiInstagram } from "react-icons/fi"

const LinkIconInstagram = styled.a`
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

const Label = styled.span`
   display: none;
   text-indent: -9999px;
`

const IconInstagram = styled(FiInstagram)`
   width: 100%;
   height: 100%;
   color: ${props => props.theme.color.grayClear};
`


const ButtonInstagram = ({ className, target }) => {

   return (
      <LinkIconInstagram 
         href={target} 
         rel="noopener"
         target="_blank" 
         className={className}>
            <Label>Link para Instagram</Label>
            <IconInstagram strokeWidth="1px" />
      </LinkIconInstagram>
   )

}

export default ButtonInstagram;