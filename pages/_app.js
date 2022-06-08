import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const supportedChainIds = [4]
const connectors = {
  injected: {}
}
//This is wrapping all of my pages with authentication 

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
