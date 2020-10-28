import React, { useState } from "react";

import Brand from "../../objects/Brand"
import NavBar from "../../components/Navbar"

import { Section, ContainerHeader, NavButtonMenu } from "./_styles"

const Header = () => {

   const [isopen, setIsopen] = useState(false);
   const [isactive, setIsactive] = useState(false);

   const handleClickButtonMenu = event => {
      event.preventDefault();
      if (isopen) {
         setIsopen(false);
         setIsactive(false);
      } else {
         setIsopen(true);
         setIsactive(true);
      }
   }

   return (
      <Section>
         <ContainerHeader>
            <Brand />
            <NavBar isActive={isactive} />
            <NavButtonMenu
               isOpen={isopen} 
               onClick={handleClickButtonMenu} 
            />
         </ContainerHeader>
      </Section>
   )
}

export default Header;