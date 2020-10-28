import { SectionTopbar, 
         ContainerTopbar, 
         ItemTopbar,
         IconPhone,
         IconEmail,
         IconCalender } from "./_styles"

const TopBar = () => {

   return (
      <SectionTopbar>
         <ContainerTopbar>
            <ItemTopbar>
               <IconPhone />
               +55 (11) 2671-7088
            </ItemTopbar>
            <ItemTopbar>
               <IconEmail />
               vendas@eletrosil.com.br
            </ItemTopbar>
            <ItemTopbar>
               <IconEmail />
               depto.tecnico@eletrosil.com.br
            </ItemTopbar>
            <ItemTopbar>
               <IconCalender />
               Fechamos Seg 02/11/2020
            </ItemTopbar>
         </ContainerTopbar>
      </SectionTopbar>
   )
}

export default TopBar