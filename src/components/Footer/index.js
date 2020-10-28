import BrandIcon from "../../objects/BrandIcon"
import IconLinkedin from "../../objects/ButtonLinkedin"
import IconInstagram from "../../objects/ButtonInstagram"
import IconFacebook from "../../objects/ButtonFacebook"

import { WrapMainFooter,
         ContainerCallTo,
         WrapCallTo,
         CallTitle,
         CallDestak,
         CallContacts,
         WrapFooter,
         FooterBrand,
         FooterLocalizacao,
         FooterExpediente,
         FooterFechamos,
         FooterRedesSocials,
         FooterCopyright,
         FooterTitle,
         FooterContent } from "./styles"

const Footer = () => {

   return(
      <WrapMainFooter id="contatos">
         <ContainerCallTo>
            <WrapCallTo>
               <CallTitle>
                  <CallDestak>Entre em contato com a Eletrosil</CallDestak>
               </CallTitle>
               <CallContacts>+55 (11) 2671-7088</CallContacts>
               <CallContacts>vendas@eletrosil.com.br</CallContacts>
               <CallContacts>depto.tecnico@eletrosil.com.br</CallContacts>
            </WrapCallTo>
         </ContainerCallTo>
         <WrapFooter>
            <FooterBrand>
               <BrandIcon />
            </FooterBrand>
            <FooterLocalizacao>
               <FooterTitle className="title">Localização</FooterTitle>
               <FooterContent className="description">
                  Rua Tenente Chantré, 337<br />
                  V. Invernada – São Paulo-SP
               </FooterContent>
            </FooterLocalizacao>
            <FooterRedesSocials>
               <FooterTitle className="title">Redes sociais</FooterTitle>
               <FooterContent className="description">
                  <IconLinkedin
                     target="https://www.linkedin.com/company/eletrosil-industria-metalurgica-ltda" />
                  <IconInstagram 
                     target="https://www.instagram.com/" />
                  <IconFacebook 
                     target="https://www.facebook.com/" />
               </FooterContent>
            </FooterRedesSocials>
            <FooterExpediente>
               <FooterTitle className="title">Atendimento</FooterTitle>
               <FooterContent className="description">
                  Seg a Qui das 7h às 16h50 <br />
                  Sex das 7h às 16h40
               </FooterContent>
            </FooterExpediente>
            <FooterFechamos>
               <FooterTitle className="title">Fechamos</FooterTitle>
               <FooterContent className="description">
                  Feriado Dia de Finados <br />
                  Seg 02/11/2020
               </FooterContent>
            </FooterFechamos>
            <FooterCopyright>
               <FooterContent>
                  Eletrosil Indústria Metalúrgica ©2020 todos os direitos reservados.
               </FooterContent>
            </FooterCopyright>
         </WrapFooter>
      </WrapMainFooter>
   )
}

export default Footer