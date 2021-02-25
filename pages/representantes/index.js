// MODELO STATIC SITE GENERATION (precisa indexação Google)
// NÃO EXIGIDO JAVASCRIPT HABILITADO
// TODO HTML/CSS/JS PRONTO SEM NECESSIDADE DE CHAMADAS A APIs

import Template from "../../src/components/Template"
import RepresentativesSection from "../../src/sections/RepresentativesSection"
import TitleSection from "../../src/objects/TitleSection"
import AccordionItem from "../../src/components/AccordionItem"

const Representantes = ({ repres }) => {

 return (
      <Template>
         <TitleSection 
            className="-variant"
            title="Nossos Representantes por Região" 
         />
         {repres.map((area) => (
            <RepresentativesSection 
               key={area.id}
               titleRegion={area.titleRegion}
               subtitleRegion={area.subtitleRegion}
               className={area.id % 2 === 0 ? "-variant" : ""}
            >
               <AccordionItem
                  title={area.regions[0].title}
                  subtitle={area.regions[0].subtitle}
                  text={area.regions[0].text}
               />
            </RepresentativesSection>
         ))}
      </Template>
   )   
}

export const getStaticProps = async (context) => {
   const response = await fetch(`${process.env.API_URL}/representantes`)
   console.log("ENV: ", process.env.API_URL)
   const repres = await response.json()

   return {
      props: { 
         repres 
      },
   }

}

export default Representantes