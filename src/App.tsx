import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import '@fontsource/roboto';
import theme from './theme';
import ProTip from './components/ProTip';
import Landing from './views/landing';
import Main from './layouts/main';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      `.`
    </Typography>
  );
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create React App v4-beta example
            </Typography>
            <Link href="/one">One</Link>
            <Switch>
              <RouteWrapper path="/one" component={Landing} layout={Main} />
            </Switch>

            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </ThemeProvider>
    </Router>
  );
}
