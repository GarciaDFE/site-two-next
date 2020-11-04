import Image from "next/image";
import Section from "../../objects/Section"
import TitleSection from "../../objects/TitleSection"

import { ContainerCompany,
         WrapAbout,
         SideImg,
         SideContent,
         Content,
         Button } from "./styles"

const Company = () => {

   return (
      <Section>
         <ContainerCompany>
            <TitleSection 
               title="Sobre Nossa Empresa"
               subtitle="Um Pouco"
            />
            <WrapAbout>
               <SideImg>
                  <Image 
                     src="/company/img-historia-Eletrosil.jpg"
                     unsized={true}
                     alt="imagem de grupo de chaves elétricas Eletrosil"
                  />
               </SideImg>
               <SideContent>
                  <Content>       
                     A Eletrosil Indústria Metalúrgica Ltda. é uma empresa dedicada à fabricação, manutenção, reparo e recuperação de equipamentos eletromecânicos e painéis elétricos de baixa tensão em geral.
                  </Content>
                  <Content>
                     Especializada no fornecimento de soluções sob encomenda, possui mais de <strong>54 anos</strong> de tradição na execução de serviços com elevado nível de qualidade, precisão e em prazos que atendam as necessidades dos clientes.
                  </Content>
                  <Button target="/sobre">Saiba mais</Button>
               </SideContent>
            </WrapAbout>
         </ContainerCompany>
      </Section>
   )
}

export default Company