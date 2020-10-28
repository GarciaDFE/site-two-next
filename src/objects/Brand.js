import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"
import media from "../foundation/breakPoints"

const LinkLogo = styled.a`
   width: auto;
   height: 100%;
   display: flex;
   align-items: center;
   cursor: pointer;
`

const LabelLogo = styled.span`
   display: none;
   text-indent: -9999px;
`

const ImageLogo = styled(Image)`
   width: 100%;
   max-width: 141px;
   height: 100%;
   max-height: 80px;
   margin: 0;

   ${media.greaterThan("lg")`
      max-width: 177px;
      max-height: 100px;
   `}

`

const Logo = ({ className }) => {

   return (
      <Link href="/" >
         <LinkLogo className={className}>
            <LabelLogo>Eletrosil Indústria Metalúrgica</LabelLogo>
            <ImageLogo 
               src="/logo.svg" 
               alt="logo da Eletrosil Indústria Metalúrgica"
               // width={265}
               // height={150}
               unsized={true}
            />
         </LinkLogo>
      </Link>
   )
}

export default Logo