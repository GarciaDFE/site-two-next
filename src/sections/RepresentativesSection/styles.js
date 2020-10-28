import styled from "styled-components";
import media from "../../foundation/breakPoints"

import Section from "../../objects/Section"
import Container from "../../objects/Container"

const SectionRegion = styled(Section)`
   flex-direction: column;
   &.-variant {
      background-color: ${props => props.theme.color.grayLight};
   }
`

const ContainerRegion = styled(Container)`
   flex-direction: column;
   padding: 30px 16px;

   ${media.greaterThan("md")`
      max-width: 960px;
      flex-direction: row;
      justify-content: space-between;
   `}

   ${media.greaterThan("xl")`
      padding: 50px 0;
   `}

`

const WrapRegion = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   color: ${props => props.theme.color.grayMedium};
   margin-bottom: 20px;

   ${media.greaterThan("md")`
      width: 35%;
      text-align: left;
      margin: 0;
   `}

`

const TitleRegion = styled.h3`
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.mediumBig};
   font-weight: bold;
   text-transform: uppercase;
   margin: 0;
`


const SubtitleRegion = styled(TitleRegion)`
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: normal;
   margin-bottom: 5px;
`

const WrapRepresentatives = styled(WrapRegion)`
   width: 100%;
   color: ${props => props.theme.color.secondyBase};
   border: 1px solid ${props => props.theme.color.secondyBase};
   border-bottom: none;
   
   ${media.greaterThan("md")`
      width: 65%;
   `}

`

export {
   SectionRegion,
   ContainerRegion,
   WrapRegion,
   TitleRegion,
   SubtitleRegion,
   WrapRepresentatives,
}