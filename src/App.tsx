import React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import theme from './theme';
import Main from './layouts/main';
import ProTip from './components/ProTip';
import NavBar from './components/NavBar';
import Landing from './views/landing';
import Landing1 from './views/landing1';
import './styles/index.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Komodo Platform
      </Link>{' '}
      {`${new Date().getFullYear()}.`}
    </Typography>
  );
}

interface PropsRouteWrapper {
  component: any;
  layout: any;
  path: string;
  exact: boolean;
}

const RouteWrapper: React.FunctionComponent<PropsRouteWrapper> = (
  props: PropsRouteWrapper
) => {
  const { component: Component, layout: Layout, path, exact } = props;
  return (
    <Route path={path} exact={exact}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};

export default function App() {
  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NavBar />
        <Container>
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create React App v4-beta example
            </Typography>
            <Switch>
              <RouteWrapper path="/" exact component={Landing} layout={Main} />
              <RouteWrapper
                path="/one"
                component={Landing1}
                layout={Main}
                exact
              />
              <RouteWrapper
                path="/two"
                component={Landing1}
                layout={Main}
                exact
              />
              <RouteWrapper
                path="/three"
                component={Landing1}
                layout={Main}
                exact
              />
            </Switch>

            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </ThemeProvider>
    </MemoryRouter>
  );
}
