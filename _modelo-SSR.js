// MODELO SERVER SIDE RENDER - FETCHING (precisa indexação Google)
// PARA OS DADOS NÃO EXIGE JAVASCRIPT HABILITADO
// PÁGINA INTEIRA LIBERADA APÓS TODOS DADOS BUSCADOS E LIDOS 

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

export const getServerSideProps = async () => {
   const response = await fetch("http://localhost:3333/representantes")
   const repres = await response.json()

   return {
      props: { repres }
   }

}

export default Representantes