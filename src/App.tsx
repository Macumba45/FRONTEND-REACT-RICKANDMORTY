import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Router from './router';
import { Reset } from 'styled-reset';

function App() {

     localStorage.clear();

     return (
          <ThemeProvider theme={theme}>
               <Reset />
               <Router />
          </ThemeProvider>
     );
}

export default App;
