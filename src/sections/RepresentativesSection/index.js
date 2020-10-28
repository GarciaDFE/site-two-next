import React from "react";

import { SectionRegion,
         ContainerRegion,
         WrapRegion,
         TitleRegion,
         SubtitleRegion,
         WrapRepresentatives } from "./styles"

const RepresentativesSection = ({   titleRegion,
                                    subtitleRegion, 
                                    children,
                                    className }) => {

   return (
      <SectionRegion className={className}>
         <ContainerRegion>
            <WrapRegion>
               <SubtitleRegion>
                  {subtitleRegion}
               </SubtitleRegion>
               <TitleRegion>
                  {titleRegion}
               </TitleRegion>
            </WrapRegion>
            <WrapRepresentatives>
               {children}
            </WrapRepresentatives>
         </ContainerRegion>
      </SectionRegion>
   )
}

export default RepresentativesSection