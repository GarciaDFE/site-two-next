import React from "react";
import styled from "styled-components";

const SectionArea = styled.section`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0;
   padding: 0;
`

const Section = ({ children, className }) => {
   return (
      <SectionArea className={className}>
         {children}
      </SectionArea>
   )
}

export default Section