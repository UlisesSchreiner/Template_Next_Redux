import { Provider } from 'react-redux'
import store from '../redux/store';
import './style.css';

const storeFN = store();

export default function App({ Component, pageProps }) {

  return (
    <Provider store={storeFN}>
      <Component {...pageProps} />
    </Provider>
  )
}
