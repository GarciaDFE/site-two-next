import styled from "styled-components";
import media from "../../foundation/breakPoints"

import Section from "../../objects/Section"
import Container from "../../objects/Container"
import ProductLineCard from "../../components/ProductLineCard"

const SectionProducts = styled(Section)`
   display: block;
   background-color: ${props => props.theme.color.secondyDark};
   padding: 50px 0;

   ${media.greaterThan("lg")`
      padding: 80px 0;
   `}

`;

const ContainerProducts = styled(Container)`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(5, 1fr);
   grid-gap: 20px;
   padding: 30px 15px 0;

   ${media.greaterThan("md")`
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
   `}

   ${media.greaterThan("lg")`
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
   `}

   ${media.greaterThan("xl")`
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: 1fr;
      grid-gap: 10px;
   `}

`

const CardHome = styled(ProductLineCard)`
   max-width: 300px;
   height: 410px;
   
   ${media.greaterThan("xl")`
      height: 450px;
      padding: 10px;
   `}

`


export {
   SectionProducts,
   ContainerProducts,
   CardHome
}