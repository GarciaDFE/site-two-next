import { CardItem, 
         Content, 
         Title, 
         Description, 
         CardButton, 
         HeroImage } from "./styles"

const ProductLineCard = ({ image, 
                           alt, 
                           title, 
                           description, 
                           className, 
                           linkurl }) => {

   return (
      <CardItem className={className}>
         <HeroImage src={image} alt={alt} unsized={true}/>
         <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
         </Content>
         <CardButton target={linkurl}>Saiba mais</CardButton>
      </CardItem>
   )
}

export default ProductLineCard