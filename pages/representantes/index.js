import Template from "../../src/components/Template"

import RepresentativesSection from "../../src/sections/RepresentativesSection"
import TitleSection from "../../src/objects/TitleSection"
import AccordionItem from "../../src/components/AccordionItem"

import { areas } from "./_content"

const Representantes = () => {

   return (
      <Template>
         <TitleSection 
            className="-variant"
            title="Nossos Representantes por Região" 
         />
         {areas.map((area, index) => (
            <RepresentativesSection 
               key={index}
               titleRegion={area.titleRegion}
               subtitleRegion={area.subtitleRegion}
               className={index % 2 === 0 ? "-variant" : ""}
            >
               {area.regions.map((region, index) => (
                  <AccordionItem
                     key={index}
                     title={region.title}
                     subtitle={region.subtitle}
                     text={region.text}
                  />
               ))}
            </RepresentativesSection>
         ))}
      </Template>
   )
}

export default Representantes