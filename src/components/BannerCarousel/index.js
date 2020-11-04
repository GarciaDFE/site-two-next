import { useEffect } from "react"
import Glide from "@glidejs/glide"

import ButtonBase from "../../objects/ButtonBase"

import { WrapGlide,
         GlideTrack,
         GlideSlides,
         GlideSlide,
         BackgroundImage,
         WrapOverlay,
         ContentOverlay,
         Title,
         SubTitle,
         Description } from "./styles"

import { banners } from "./content"

const options = {
   type: "carousel",
   gap: 0,
   startAt: 0,
   perView: 1,
   autoplay: 5000,
   hoverpause: true,
   animationDuration: 1000
}

const BannerCarousel = ({ element = "glide" }) => {

   const slider = new Glide(`.${element}`, options)
   
   useEffect(() => {
      slider.mount()
   }, [slider])

   return (
      <WrapGlide className={element}>
         <GlideTrack data-glide-el="track">
            <GlideSlides>
               {banners.map((banner, index) => (
                  <GlideSlide 
                     key={index} 
                     className={`slider ${index === 1 ? "-variant" : ""}`}
                  >
                     <WrapOverlay>
                        <ContentOverlay>
                           <Title>{banner.title}</Title>
                           <SubTitle>{banner.subtitle}</SubTitle>
                           <Description>{banner.description}</Description>
                           {banner.button_label &&
                              <ButtonBase 
                                 target={banner.button_target}>
                                    {banner.button_label}
                              </ButtonBase>
                           }
                        </ContentOverlay>
                     </WrapOverlay>
                     <BackgroundImage 
                        src={banner.url_image}
                        alt={banner.alt_image}
                        // width={1920}
                        // height={350}
                        unsized={true}
                        loading="lazy"
                        sizes={[320, 576, 768, 992, 1200]}
                     />
                  </GlideSlide>
               ))}
            </GlideSlides>
         </GlideTrack>
      </WrapGlide>
   ) 
}

export default BannerCarousel