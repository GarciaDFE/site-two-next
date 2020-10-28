import styled from "styled-components"
import { FaChevronDown } from "react-icons/fa"

const Accordion = styled.div`
   display: flex;
   flex-direction: column;
   background-color: ${props => props.theme.color.grayClear};
   border-bottom: 1px solid ${props => props.theme.color.secondyBase};
   margin: 0;
   padding: 0;
`

const AccordionButton = styled.button`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: ${props => props.theme.color.grayClear};
   border: none;
   outline: none;
   margin: 0;
   padding: 15px 20px;
   cursor: pointer;
`

const ButtonIcon = styled(FaChevronDown)`
   width: 18px;
   height: 14px;
   color: ${props => props.theme.color.secondyBase};
   margin-left: 5px;
   transition: transform 300ms linear;
   &.-isActive {
      transform: rotate(180deg);
      transition: transform 300ms linear;
   }
`

const AccordionLabel = styled.div`
   max-width: 90%;
   display: inline-block;
   text-align: left;
   margin: 0;
   & > .-destak {
      font-family: ${props => props.theme.font.secondy};
      font-size: ${props => props.theme.size.verySmall};
      font-weight: normal;
      color: ${props => props.theme.color.secondyBase};
      text-transform: uppercase;
   }
`

const AccordionWrapContent = styled.div`
   overflow: hidden;
   transition: max-height 600ms ease;
   border: none;
   border-top: 1px solid transparent;
   transition: all 500ms ease;
   &.-isActive {
      border-top: 1px solid rgba(0,145,255, 0.4);/*RGB secondyBase*/
   }
`

const AccordionContent = styled.div`
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.verySmall};
   font-weight: normal;
   line-height: 1.6;
   color: ${props => props.theme.color.grayMedium};
   text-align: left;
   margin: 0;
   padding: 2rem;
   & > strong {
      font-size: ${props => props.theme.size.verySmall};
   }

`

export {
   Accordion,
   AccordionButton,
   ButtonIcon,
   AccordionLabel,
   AccordionWrapContent,
   AccordionContent   
}