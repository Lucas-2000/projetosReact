import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Feed from './paginas/Feed'
import Criar from './paginas/Criar'
import Campanha from './paginas/Campanha'
import Dados from './paginas/Dados'
import Contato from './paginas/Contato'
import Doencas from './paginas/Doencas';
import Galeria from './paginas/Galeria';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import Layout from './componentes/Layout';

const tema = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: indigo,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={tema}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Feed />
            </Route>
            <Route path="/criar">
              <Criar />
            </Route>
            <Route path="/campanha">
              <Campanha />
            </Route>
            <Route path="/dados">
              <Dados />
            </Route>
            <Route path="/doencas">
              <Doencas />
            </Route>
            <Route path="/galeria">
              <Galeria />
            </Route>
            <Route path="/contato">
              <Contato />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
