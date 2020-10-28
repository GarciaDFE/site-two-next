import Topbar from "../Topbar"
import Header from "../Header"

const Template = ({ children }) => {
   return (
      <>
         <Topbar />
         <Header />
          {children}
          <footer>
             <h3>Rodapé das páginas</h3>
          </footer>
      </>
   )
}

export default Template
