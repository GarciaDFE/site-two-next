import TitleSection from "../../objects/TitleSection"

import { SectionProducts, ContainerProducts, CardHome } from "./styles"

import { cards } from "./content"

const ProductLineSection = () => {

   return (
      <SectionProducts>
         <TitleSection 
            className="-inverse"
            title="Produtos e Serviços"
            subtitle="Nossa Linha de"
         />
         <ContainerProducts>
            {cards.map((card, index) => {
               return (
                  <CardHome 
                     key={index}
                     image={card.url_image}
                     alt={card.alt_image}
                     title={card.title}
                     description={card.description}
                     linkurl={card.button_target}
                  />
               )
            })}
         </ContainerProducts>
      </SectionProducts>
   )
}

export default ProductLineSection