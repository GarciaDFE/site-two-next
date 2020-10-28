import Topbar from "../Topbar"
import Header from "../Header"
import Footer from "../Footer"

const Template = ({ children }) => {
   return (
      <>
         <Topbar />
         <Header />
            {children}
         <Footer />
      </>
   )
}

export default Template
