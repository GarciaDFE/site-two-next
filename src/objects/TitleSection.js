import styled from "styled-components";
import media from "../foundation/breakPoints"

const TitleContainer = styled.div`
   display: block;
   text-align: center;
   margin: 0;
   &.-variant {
      background-color: ${props => props.theme.color.grayLight};
      padding: 50px 16px 10px;
   }
`;

const Title = styled.h2`
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.mediumBig};
   font-weight: bold;
   color: ${props => props.theme.color.grayMedium};
   margin-bottom: 5px;

   &::after {
      content: "";
      display: block;
      width: 100px;
      height: 4px;
      background: ${props => props.theme.color.primaryDark};
      margin: 10px auto;
   }
   &.-inverse {
      color: ${props => props.theme.color.grayClear};
      &::after {
         content: "";
         display: block;
         width: 100px;
         height: 4px;
         background: ${props => props.theme.color.grayClear};
         margin: 10px auto;
      }
   }

   ${media.greaterThan("sm")`
      font-size: ${props => props.theme.size.big};
   `}

`;


const Subtitle = styled.h3`
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.small};
   font-weight: bold;
   text-transform: uppercase;
   color: ${props => props.theme.color.primaryDark};
   margin-bottom: 5px;
   &.-inverse {
      color: ${props => props.theme.color.grayClear};
      letter-spacing: 0.05rem;
   }

   ${media.greaterThan("sm")`
      font-size: ${props => props.theme.size.mediumBig};
   `}

`;

const TitleSection = ({ className, title, subtitle }) => {
   return (
      <TitleContainer className={className}>
         {subtitle && <Subtitle className={className}>{subtitle}</Subtitle>}
         <Title className={className}>{title}</Title>
      </TitleContainer>
   )
}

export default TitleSection