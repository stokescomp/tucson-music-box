import Layout from '../components/layout';
import '../styles/styles.css';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { StyledEngineProvider } from '@mui/material/styles';

export function GlobalCssPriority() {
  return (
    <StyledEngineProvider injectFirst>
      {/* Your component tree. Now you can override MUI's styles. */}
    </StyledEngineProvider>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
