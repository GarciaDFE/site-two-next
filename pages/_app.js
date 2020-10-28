import { ThemeProvider } from 'styled-components'
import GlobalStyles from "../src/foundation/globalStyles"
import theme from "../src/foundation/projectStyles"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App