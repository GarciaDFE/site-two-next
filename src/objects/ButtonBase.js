import styled from "styled-components"
import Link from "next/link"
import media from "../foundation/breakPoints"

const Button = styled.a`
   display: inline-block;
   margin: 0 auto;
   background-color: ${props => props.theme.color.primaryDark};
   color: ${props => props.theme.color.grayClear};
   padding: 7px 12px;
   border-radius: 5px;
   border: none;
   text-transform: uppercase;
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.small};
   text-align: center;
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

   ${media.greaterThan("md")`
      font-size: ${props => props.theme.size.mediumSmall};
      padding: 10px 20px;
   `}
`;

const ButtonBase = ({ className, children, target, onClick }) => {
   return (
      <Link href={target}>
         <Button className={className} onClick={onClick}>
            {children}
         </Button>
      </Link>
   )
}

export default ButtonBase