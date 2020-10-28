import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"
import media from "../foundation/breakPoints"

const LinkIcon = styled.a`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

const ImageIcon = styled(Image)`
   width: 50px;
   margin: 0;

   ${media.greaterThan("md")`
      width: 76px;
   `}

`

const LogoIcon = ({ className }) => {

   return (
      <Link href="/">
         <LinkIcon className={className}>
            <ImageIcon 
               src="/logo-icon.svg" 
               alt="ícone logo da Eletrosil"
               unsized={true}
            />
         </LinkIcon>
      </Link>
   )
}

export default LogoIcon