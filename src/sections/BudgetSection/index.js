import Section from "../../objects/Section"

import { BudgetContainer, 
         Content, 
         Title, 
         Obs,
         LinkToMail } from "./styles"

const BudgetSection = () => {

   return (
      <Section>
         <BudgetContainer>
            <Content>
               <Title>Peça seu orçamento</Title>
               <Obs>* Responderemos o mais breve possível por e-mail</Obs>
            </Content>
            <LinkToMail href="mailto:vendas@eletrosil.com.br">
               Peça um Orçamento
            </LinkToMail>
         </BudgetContainer>
      </Section>
   )
}

export default BudgetSection