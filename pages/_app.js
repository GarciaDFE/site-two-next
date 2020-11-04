import { ThemeProvider } from 'styled-components'
import GlobalStyles from "../src/foundation/globalStyles"
import theme from "../src/foundation/projectStyles"
import NextNprogress from "nextjs-progressbar"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <NextNprogress
        color="orange"
        startPosition={0.3}
        stopDelayMs={300}
        height="3"
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App