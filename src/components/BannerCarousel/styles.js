import styled from "styled-components"
import media from "../../foundation/breakPoints"
import Image from "next/image"

import Section from "../../objects/Section"

// OVERLAY
const Title = styled.h2`
   color: ${props => props.theme.color.grayClear};
   font-family: ${props => props.theme.font.primary};
   font-size: ${props => props.theme.size.mediumSmall};
   font-weight: 700;
   margin-bottom: 0.5rem;
   text-align: center;

   ${media.greaterThan("sm")`
      font-size: ${props => props.theme.size.medium};
   `}

   ${media.greaterThan("md")`
      font-size: ${props => props.theme.size.mediumBig};
   `}

   ${media.greaterThan("lg")`
      font-size: ${props => props.theme.size.big};
   `}

`

const SubTitle = styled.h3`
   color: ${props => props.theme.color.grayLight};
   font-family: ${props => props.theme.font.secondy};
   text-transform: uppercase;
   font-size: ${props => props.theme.size.verySmall};
   font-weight: normal;
   margin-bottom: 0.3rem;
   text-align: center;
   &-destaque {
      font-weight: bold;    
   }

   ${media.greaterThan("md")`
      font-size: ${props => props.theme.size.small};
   `}

   ${media.greaterThan("lg")`
      font-size: ${props => props.theme.size.medium};
   `}
`

const Description = styled.p`
   color: ${props => props.theme.color.grayClear};
   font-family: ${props => props.theme.font.secondy};
   font-size: ${props => props.theme.size.verySmall};
   line-height: 1.8rem;
   text-align: center;

   ${media.greaterThan("md")`
      font-size: ${props => props.theme.size.small};
      line-height: 2.2rem;
   `}

   ${media.greaterThan("lg")`
      font-size: ${props => props.theme.size.mediumSmall};
      line-height: 2.2rem;
   `}

`

const ContentOverlay = styled.div`
   width: 100%;
   max-width: 1200px;
   height: 100%;
   margin: 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

const WrapOverlay = styled.div`
   position: absolute;
   width: 100vw;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0;
   padding: 0 20px;
   z-index: 5;
`

// GLIDE SLIDER
const WrapGlide = styled(Section)`
   display: block;
   height: auto;
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   background-color: ${props => props.theme.color.grayDark};
   & * {
      box-sizing: inherit; 
   }
   &.glide--rtl {
      direction: rtl; 
   }
 
`

const GlideTrack = styled.div`
   overflow: hidden;
`
 
const GlideSlides = styled.ul`
   position: relative;
   width: 100vw;
   list-style: none;
   backface-visibility: hidden;
   transform-style: preserve-3d;
   touch-action: pan-Y;
   overflow: hidden;
   white-space: nowrap;
   display: flex;
   flex-wrap: nowrap;
   margin: 0;
   padding: 0;
   will-change: transform;
   box-sizing: border-box;
   &.--dragging {
      user-select: none; 
   }
`

const BackgroundImage = styled(Image)`
   width: auto;
   height: 250px;

   ${media.greaterThan("sm")`
      height: auto;
      min-height: 350px;
   `}

`

const GlideSlide = styled.li`
   width: 100%;
   height: 100%;
   flex-shrink: 0;
   white-space: normal;
   user-select: none;
   -webkit-touch-callout: none;
   -webkit-tap-highlight-color: transparent;
   margin: 0;
   & a {
      user-select: none;
      -webkit-user-drag: none;
      -moz-user-select: none;
      -ms-user-select: none; 
      margin: 0;
   }
   &.-variant {
      background-color: ${props => props.theme.color.secondyDark};
      ${BackgroundImage} {
         opacity: 0;
      }
   }

   ${media.greaterThan("sm")`
      ${WrapOverlay} {
         & ${ContentOverlay} {
            width: 80%;
         }
      }
      &.-variant {
         background-color: transparent;
         ${WrapOverlay} {
            justify-content: flex-start;
            ${ContentOverlay} {
               width: 60%;
               align-items: flex-start;
               & ${Title}, ${SubTitle}, ${Description} {
                  text-align: left;
               }
            }
         }
         ${BackgroundImage} {
            opacity: 1;
         }
      }
   `}

   ${media.greaterThan("md")`
      &.-variant {
         ${WrapOverlay} {
            ${ContentOverlay} {
               width: 55%;
            }
         }
      }
   `}

   ${media.greaterThan("lg")`
      &.-variant {
         ${WrapOverlay} {
            & ${ContentOverlay} {
               width: 55%;
            }
         }
      }
   `}

   ${media.greaterThan("xl")`
      &.-variant {
         ${WrapOverlay} {
            justify-content: center;
            & ${ContentOverlay} {
               width: 100%;
               padding: 0 55rem 0 45px;
            }
         }
      }
   `}

`

export {
   WrapGlide,
   GlideTrack,
   GlideSlides,
   GlideSlide,
   BackgroundImage,
   WrapOverlay,
   ContentOverlay,
   Title,
   SubTitle,
   Description
}