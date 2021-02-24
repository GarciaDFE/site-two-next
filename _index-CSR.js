// MODELO CLIENT SIDE RENDER - FETCHING (não precisa indexação Google)
// EXIGIDO JAVASCRIPT HABILITADO
// SUGERIDO USAR PARA TESTAR ACESSOS A DADOS LOCALMENTE

import useSWR from "swr"

import Template from "../../src/components/Template"
import RepresentativesSection from "../../src/sections/RepresentativesSection"
import TitleSection from "../../src/objects/TitleSection"

import AccordionItem from "../../src/components/AccordionItem"

const fetcher = (url) => fetch(url).then((res) => res.json())

const Representantes = () => {

   const { data, error } = useSWR("http://localhost:3333/representantes", fetcher)
   if (error) return <div>Falha na leitura dos dados</div>
   if (!data) return <div>Carregando dados...</div>

 return (
      <Template>
         <TitleSection 
            className="-variant"
            title="Nossos Representantes por Região" 
         />
         {data.map((area) => (
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


export default Representantes