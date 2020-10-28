import { useState, useRef } from  "react" ;

import { Accordion,
         AccordionButton,
         ButtonIcon,
         AccordionLabel,
         AccordionWrapContent,
         AccordionContent } from  "./styles" ;

const AccordionItem = ({ title, subtitle, text }) => {
   
   const [setActive, setActiveState] = useState("")
   const [setHeight, setHeightState] = useState("0px");

   const content = useRef(null);

   const toggleAccordion = () => {
      setActiveState(setActive === "" ? "-isActive" : "")
      setHeightState(
         setActive === "-isActive" ? "0px" : `${content.current.scrollHeight}px`);
   }

   return (
      <Accordion>
         <AccordionButton className={setActive} onClick={toggleAccordion}>
            <AccordionLabel>
               <span className="-destak">{title}</span>{subtitle}
            </AccordionLabel>
            <ButtonIcon className={setActive}/>
         </AccordionButton>
         <AccordionWrapContent 
            className={setActive}
            ref={content} 
            style={{ maxHeight: `${setHeight}` }}
         >
            <AccordionContent dangerouslySetInnerHTML={{ __html: text }} />
         </AccordionWrapContent>
      </Accordion>
   )
}

export default AccordionItem