import Routes from './Routes/Routes';
import { Box, CssBaseline } from '@mui/material';
import { I18nProvider, ThemeProvider } from './Providers';
import ApolloProvider from './Providers/ApolloProvider';
import {AppContextProvider}  from './Providers/AppContextProvider';

function App() {
  
  return (
    <Box position='relative' minHeight={'100vh'}>
      <ApolloProvider>
      <AppContextProvider>    
        <I18nProvider>
          <ThemeProvider>
            <CssBaseline/>
            <Routes/>

          </ThemeProvider>
        </I18nProvider> 
      </AppContextProvider>
    </ApolloProvider>
    </Box>
  );
}

export default App;
