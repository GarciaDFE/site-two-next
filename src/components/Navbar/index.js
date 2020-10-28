import React, { useState } from "react";
import Link from "next/link"

import { MainNav, 
         ListItem, 
         Item, 
         Action,
         ActionSpan, 
         ListSubItem, 
         SubItem, 
         SubAction, 
         IconSubAction } from "./_styles"

const Navbar = ({ isActive=false, className }) => {

   const [isShow, setIsShow] = useState(false);
   const [isFirst, setIsFirst] = useState(true);

   const handleHoverItemDropDown = () => (
      !isShow && setIsShow(true)
   )

   const handleClickItemDropDown = () => {
      if (isFirst) {
         setIsShow(true)
         setIsFirst(false)
      } else {
         isShow ? setIsShow(false) : setIsShow(true)
      }
   }
   
   const handleLeave = () => setIsShow(false)
   
  return (
      <MainNav className={className}>
      <ListItem className={`${isActive ? "-isActive" : "" }`} >
         <Item onMouseOver={handleLeave}> 
            <Link href="/">
               <Action>Início</Action>
            </Link>
         </Item>
         <Item onMouseOver={handleLeave}>
            <Link href="/about">
               <Action>Empresa</Action>
            </Link>
         </Item>
         <Item
            onMouseOver={handleHoverItemDropDown}
            onClick={handleClickItemDropDown}
            onMouseLeave={handleLeave}>
            <ActionSpan>
               Produtos e Serviços
               <IconSubAction 
                  className={`${isShow ? "-isActive" : "" }`}
               />
            </ActionSpan>
            <ListSubItem 
               className={`${isShow ? "-isShow" : "" }`}
               onMouseLeave={handleLeave}>
               <SubItem>
                  <Link href="/produtos/chaves-eletricas/">
                     <SubAction>Chaves Elétricas</SubAction>
                  </Link>
               </SubItem>
               <SubItem>
                  <Link href="/produtos/contatores-reles/">
                     <SubAction>Contatores e Relés</SubAction>
                  </Link>
               </SubItem>
               <SubItem>
                  <Link href="/produtos/conectores-tomadas/">
                     <SubAction>Conectores e Tomadas</SubAction>
                  </Link>
               </SubItem>
               <SubItem>
                  <Link href="/produtos/diversos/">
                     <SubAction>Diversos</SubAction>
                  </Link>
               </SubItem>
               <SubItem>
                  <Link href="/servicos/">
                     <SubAction>Serviços</SubAction>
                  </Link>
               </SubItem>
            </ListSubItem>
         </Item>
         <Item onMouseOver={handleLeave}>
            <Link href="/representantes">
               <Action>Representantes</Action>
            </Link>
         </Item>
         <Item onMouseOver={handleLeave}>
            <Link href="/contact">
               <Action>Contatos</Action>
            </Link>
         </Item>
      </ListItem>
   </MainNav>
  )
}

export default Navbar